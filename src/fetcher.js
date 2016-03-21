import Promise from 'bluebird';
import _ from 'lodash';
import Immutable from 'immutable';
import {EventEmitter} from 'events';

import * as validate from './libs/validators.js';
import ReflectiError from './errors.js';

let defaultParams = {
    autoStart: true, // when fetcher gets pushed actions, it trigger actions imediately
    rejectDuplications: true, // both on the client and server side, there can be cases when different component trigger same action twice
    initialData: null, // client side only, don't fetch, if we have initial data
    preventServerDuplications: true // server side only, we need to render application twice on the server, but we don't need api call second time
};

let getActionName = (action) => {
    return _.isString(action) ? action : _.keys(action)[0];
};

let getActionArguments = function(action) {
    if (_.isString(action)) {
        return null;
    }

    if (_.isObject(action)) {
        let value = _.values(action)[0];

        if (_.isFunction(value)) {
            return value.call(this.app);
        }
        else {
            return value;
        }
    }
};

export default class Fetcher extends EventEmitter {

    _initialize(params) {
        this._isServer = typeof window === 'undefined';

        // To be isomorphic we need to render application twice on the server side
        // but we don't need to fetch data twice.
        // This flag will be setted to *true*, when data fetching on server finished for the first time
        this._isServerFetchDoneOnce = false;

        // Save all actions we need to trigger here
        this._queue = new Immutable.List();
        this._active = new Immutable.List();

        // Save all queue participators here. We shouldn't fetch twice
        this._participators = new Immutable.Set();

        this._params = _.assign({}, defaultParams, params);

        // Save all statuses here
        this._statuses = new Immutable.List();
    }

    constructor(params) {
        super();
        this._initialize(params);
    }

    set(params) {
        this._params = _.assign({}, this._params, params);
    }

    _isActionInQueue(action) {
        return this._participators.has(getActionName(action));
    }

    _filterActions(actions) {
        return _.reject(actions, (action) => {
            return this._isActionInQueue(action);
        });
    }

    _setParticipators(actions) {
        this._participators = this._participators.union(Immutable.fromJS(actions));
    }

    _addToQueue(actions) {
        this._queue = this._queue.push(actions);
    }

    _addActions(actions) {
        let filteredActions = this._params.rejectDuplications ? this._filterActions(actions) : actions;

        if (!_.isEmpty(filteredActions)) {
            this._addToQueue(filteredActions);
            this._setParticipators(filteredActions);
        }
    }

    _getAction(splitName) {
        return this.app.actions.get(splitName[0])[splitName[1]];
    }

    // There is an ability to set shouldFetch function in initial data Storage.
    // If we have one, we should run it to check if we should fetch or not.
    _shouldFetch(initialData) {
        return _.result(initialData, '_props.shouldFetch');
    }

    _hasInitialData() {
        return this._params.initialData && this._params.initialData.items.size;
    }

    _fetchActions() {
        // If we don't have initial data we need to fetch
        if (this._shouldFetch(this._params.initialData) || !this._hasInitialData()) {
            let actions = this._active.first();

            return Promise.all(_.map(actions, (act) => {
                let action = this._getAction(getActionName(act).split('.'));

                if (!_.isFunction(action)) {
                    throw new ReflectiError(`Couldn't get action ${getActionName(act)} in Fetcher. Please check provided names.`);
                }

                return action(getActionArguments.call(this, act));
            }));
        }
        else {
            return Promise.resolve();
        }
    }

    _cleanParticipators(active) {
        active.forEach((actions) => {
            this._participators = this._participators.subtract(actions);
        });
    }

    _finished() {
        this._params.initialData = null;
        this.emit('finished');
    }

    push(actions) {
        if (!_.isArray(actions) || !validate.stringsOrNumbers.apply(null, actions)) {
            throw new ReflectiError(`You are trying to push actions to the Fetcher with wrong type. Should be array of strings`);
        }

        // To be isomorphic we need to render application twice on the server side
        // but we don't need to fetch data twice.
        if (!this._isServer || (this._isServer && !this._params.preventServerDuplications) || (this._isServer && !this._isServerFetchDoneOnce)) {
            this._addActions(actions);

            if (this._params.autoStart) {
                this._fetch();
            }
        }
    }

    isEmpty() {
        return this._queue.isEmpty() && this._active.isEmpty();
    }

    _next() {
        this._cleanParticipators(this._active);
        this._active = this._active.shift();
        this._queue = this._queue.shift();

        if (this.isEmpty()) {
            this._finished();
        }
        else {
            this._fetch();
        }
    }

    _pushStatus(actions, err = null, status = 200) {
        this._statuses = this._statuses.push(Immutable.fromJS({
            actions: actions,
            status: err
        }));
    }

    _fetch() {
        if (this._queue.size && this._active.isEmpty()) {
            this.emit('progress');
            this._active = this._active.push(this._queue.first());

            this._fetchActions()
                .then((data) => {
                    this._pushStatus(this._queue.first());
                    this._next();
                })

                .error((err) => {
                    console.error(`Reflecti. Fetcher couldn't fetch. ${err}.`);
                    this._pushStatus(this._queue.first(), err, err.statusCode);
                    this.emit('error', err);
                    this._next();
                });
        }
    }

    wait() {
        return new Promise((resolve) => {
            this.on('finished', () => {
                if (this._isServer) {
                    this._isServerFetchDoneOnce = true;
                }

                resolve();
            });

            if (this.isEmpty()) {
                resolve();
            }
        });
    }

    build(context) {
        this.app = context;
    }
}
