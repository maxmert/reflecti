import Promise from 'bluebird';
import fetch from 'request-promise';
import Immutable from 'immutable';
import _ from 'lodash';
import {EventEmitter} from 'events';
import Rx from 'rx';
import Logup from 'logup';

import TimeMachine from './timemachine.js';
import ReflectiError from './errors.js';
import * as validate from './libs/validators.js';

const REQUIRED = ['url', 'method'];
const RESERVED = ['setData', 'getData', 'error', 'data', 'build', 'append', 'clear'];
const REQUIRED_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
const REQUIRED_CONTEXT_PARTICIPATORS = ['actions', 'stores', 'request'];

let logup = new Logup('Reflecti');
let passThrough = function(data) {
    return data;
};

let isReady = function(data, stores) {
    return stores.length === _.filter(data, (chunk) => {
        return !!chunk.isEmpty && !chunk.isEmpty();
    }).length;
};

export default class Store extends EventEmitter {

    _restoreDefault(clear = true) {
        if (clear) {
            this._data = new TimeMachine(this._params.default, this.name);
        }
        else {
            this.setData(this._params.default);
        }
    }

    _initialize(name, methods, params) {
        this._isServer = typeof window === 'undefined';
        this.name = name;
        this._params = _.assign({
            continuum: true
        }, params || {});

        if (params && params.default) {
            this._restoreDefault();
        }

        // Only on client side
        // Using localStorage or sessionStorage to retrieve data
        if (!this._isServer) {

            if (params && params.storage) {
                let storage;

                switch (params.storage) {
                    case 'localStorage':
                        storage = window.localStorage;
                    break;

                    case 'sessionStorage':
                        storage = window.sessionStorage;
                    break;
                }

                let data = storage.getItem(`reflecti.store.${name}`);

                if (data) {
                    process.nextTick(() => {
                        this.setData(data);
                    });
                }
            }
        }
    }

    // TODO: Move it to the application level
    _verifyAppContext(errorMessage) {
        if (!this.app) {
            console.error(`Reflecti. You should have an application context. ${errorMessage}`);
            return false;
        }
        else {
            // TODO: Check contents on an Application Context here
            if (validate.required(REQUIRED_CONTEXT_PARTICIPATORS, this.app)) {
                let missedFields = _.difference(REQUIRED_CONTEXT_PARTICIPATORS, _.keys(this.app));
                console.error(`Reflecti. There are not enough required fields in the application context. Missed fields are [*${missedFields}*].`);
            }

            return true;
        }
    }

    _extract(field, attrs) {
        return typeof field === 'function' ? field.apply(this, attrs) : field;
    }

    _fetchMap(method, params, initialData) {
        return Promise.map(method.before, (store, index) => {
            let storeName = _.keys(store)[0];
            let methodName = _.values(store)[0];
            if (storeName === this.name) {
                throw new ReflectiError(`the method <${methodName}> in the <Store> '${this.name}' have a before chain, that recursively include the same <Store>. Please, remove <Store> '${this.name}' from the chain.`);
            }

            return this.app.stores.get(_.keys(store)[0]).run(methodName);
        }).then(() => {

            return this._fetch(method, params, initialData);
        });
    }

    _getFetchPromise(method, params, args, methodName) {
        var url = this._extract(method.url, args);
        params.qs = this._extract(params.qs, args);

        if (!this.app.continuum.isReplaying) {
            return this.app.request(url, params)
                .then((data) => {
                    this.setData(data, null, methodName);
                    return this.getData();
                })

                .error((error) => {
                    if (error) {
                        this.setError(error);
                        throw this.error;
                    }
                });
        }
        else {
            return Promise.resolve();
        }
    }

    _fetch(method, params, args, methodName) {
        return this._getFetchPromise(method, params, args, methodName);
    }

    _method(method, args) {
        return method.apply(this, args);
    }

    _promise(method, params, args, methodName) {
        if (method.before) {
            return this._fetchMap(method, params, args, methodName);
        }
        else {
            return this._fetch(method, params, args, methodName);
        }
    }

    _addMethods(methods) {
        _.forEach(methods, (method, name) => {
            if (typeof method !== 'function') {
                let required = validate.required(REQUIRED, method);
                if (required.length > 0) {
                    throw new ReflectiError(`the method <${name}> in the <Store> '${this.name}' should have fields [${required}] or should be a function.`);
                }

                if (_.indexOf(REQUIRED_METHODS, method.method) === -1) {
                    throw new ReflectiError(`the method <${name}> in the <Store> '${this.name}' has method type '${method.method}'. It should be one of [${REQUIRED_METHODS}].`);
                }
            }
        });

        this.methods = methods;
    }

    _addFlowListener(events, storeName, store, prefix = '') {
        if (!_.isObject(events) || _.isArray(events)) {
            throw new ReflectiError(`while building flow for the <Store> ${this.name}. [events] or [methods] list should be an 'object'. You've passed '${typeof events === 'object' ? 'array' : typeof events}'.`);
        }

        _.forEach(events, (callback, event) => {
            let store = this.app.stores.get(storeName);
            if (!store) {
                throw new ReflectiError(`while building flow for the <Store> ${this.name}. Couldn't find the [Store ${storeName}] in the application context .`);
            }

            // If we want to subscribe on methods in other stores
            // Subscription to methods of other stores is undocumented feature.
            // We couldn't find a use case for it, and probably it can lead to
            // data inconsistency, so use it carefully.
            // In case we will need it at some point, we'll need to document it.
            if (event === 'methods') {
                if (!_.isObject(callback)) {
                    throw new ReflectiError(`while building flow for the <Store> ${this.name}. You are trying to subscribe on the methods of the <Store> ${storeName}, but you didn't define method names properly.`);
                }

                this._addFlowListener(callback, storeName, this, 'method');
            }
            else {
                if (!_.isFunction(callback)) {
                    throw new ReflectiError(`while building flow for the <Store> ${this.name}. You need to set a callback (function) for an event '${event}'. You've set ${typeof callback}.`);
                }

                store.on(`${prefix}${event}`, callback.bind(this));
            }
        });
    }

    _startFlowListeners() {
        if (this._params.flow) {
            let flow = this._params.flow;
            if (!_.isObject(flow) || _.isArray(flow)) {
                throw new ReflectiError(`while building flow for the <Store> ${this.name}. [flow] parameter should be an object.`);
            }

            _.forEach(flow, this._addFlowListener, this);
        }
    }

    _startReduceListeners() {
        if (this._params.reducers) {
            let reducers = this._params.reducers;

            if (_.isEmpty(reducers.stores)) {
                throw new ReflectiError(`while building reducers for the <Store> ${this.name}. [reducers.list] parameter should exist and should be an array or an object.`);
            }

            if (!reducers.success || !_.isFunction(reducers.success)) {
                throw new ReflectiError(`while building reducers for the <Store> ${this.name}. [reducers.success] parameter should exist and should be a function.`);
            }

            var source = Rx.Observable.combineLatest(_.map(reducers.stores, (store) => {
                var storeName = _.isObject(store) ? _.keys(store)[0] : store;

                return Rx.Observable.fromEvent(
                    this.app.stores.get(storeName),
                    'update',
                    _.isObject(store) ? (
                        _.isFunction(_.values(store)[0]) ? _.values(store)[0] : passThrough
                    ) : passThrough
                );
            }));

            let errorHandler = reducers.error || logup.error;

            this.subscription = source.subscribe(
                (data) => {
                    if (isReady(data, reducers.stores)) {
                        reducers.success(data);
                    }
                },

                errorHandler
            );
        }
    }

    _transform(data) {
        if (this._params.transform) {
            let transform = this._params.transform;
            if (!_.isFunction(transform)) {
                throw new ReflectiError(`while transforming data in the <Store> ${this.name}. [transform] parameter should be a 'function'. You've passed '${typeof transform}'.`);
            }

            return transform(data);
        }

        return data;
    }

    _emit(eventName, data, params) {
        if (!params || (params && !params.silent)) {
            this.emit(eventName, data, params);
        }
    }

    constructor(name, methods, params) {
        super();

        if (!validate.strings(name)) {
            throw new ReflectiError(`wrong type of the [name] in the <Store> constructor. Please, provide correct name type 'string'. You've passed '${typeof name}'.`);
        }

        let reserved = validate.reserved(RESERVED, methods);
        if (reserved)  {
            throw new ReflectiError(`the method names [${reserved}] in the <Store> '${name}' is reserved. Please, use another name.`);
        }

        this._initialize(name, methods, params);
        this._addMethods(methods);
    }

    getData(callback) {
        let cursor = this._data ? this._data.cursor : null;
        if (callback && typeof callback === 'function') {
            callback.call(cursor);
        }
        else {
            return cursor;
        }
    }

    setData(data, params, methodName) {
        let json;
        let result;

        if (typeof data === 'string') {
            try {
                json = JSON.parse(data);
            }
            catch (error) {
                throw new ReflectiError(`while setting data in the <Store> '${this.name}'. Maybe you've passed stringified JSON with wrong structure? The original error message was: '${error}'.`);
            }
        }
        else {
            json = data;
        }

        // Client side only
        // Save data to the localStorage or sessionStorage on the client side
        if (!this._isServer && this._params.storage) {
            let storage;

            switch (this._params.storage) {
                case 'localStorage':
                    storage = window.localStorage;
                break;

                case 'sessionStorage':
                    storage = window.sessionStorage;
                break;
            }

            storage.setItem(`reflecti.store.${this.name}`, JSON.stringify(json));
        }

        // If we have transform param, then run data transformation
        json = this._transform(json);

        if (!this._data) {
            this._data = new TimeMachine({}, this.name);
        }

        // If we have merge in params,
        // then merge existing data
        if (params && params.merge) {
            result = _.assign({}, this._data.toJS(), json);
        }
        else {
            result = json;
        }

        this._data.push(result);
        this.error = null;

        // If we use continuum in application and store wants to use it, then save data to the continuum.
        if (this._params.continuum && this.app.params.continuum && (!params || (params && !params.continuum))) {
            this.app.continuum.impulse(this.name, this.getData());
        }

        if (this._isServer && this._verifyAppContext(`You are trying to set data in the <Store> '${this.name}' on the server side, but you don't have an application context. Did you forget to build an application?`)) {
            this.app.initial.setItem(`reflecti.store.${this.name}`, json);
        }

        // If we pass params.silent to the setData, then don't emit events
        // and don't save impulses to the continuus
        if (!params || (params && !params.silent)) {
            this.emit('update', this.getData(), params);

            // If we don't set data explicitely, then emit
            if (methodName) {
                this.emit(`method${methodName}`, this.getData(), params);
            }
        }
    }

    getMethod(methodName) {
        return this.methods[methodName];
    }

    run(methodName, args) {
        if (typeof methodName !== 'string') {
            throw new ReflectiError(`wrong type of method name in the <Store> '${this.name}'. You provided '${typeof methodName}', and it should be 'string'.`);
        }

        if (!this.methods[methodName]) {
            throw new ReflectiError(`trying to call method <${methodName}> in the <Store> '${this.name}', but it doesn't exist.`);
        }

        let method = this.methods[methodName];
        if (typeof method === 'function') {
            return this._method.call(this, method, args);
        }
        else {
            let body = typeof method.body === 'function' ? method.body.apply(this, args) : method.body || {};
            let params = _.assign({}, method, {body: body});
            return this._promise(method, params, args, methodName);
        }
    }

    undo(times, params) {
        let currentData = this.getData();

        this._data.rewind(times || 1);
        this._emit('update', this.getData(), params);

        if (this._params.continuum && this.app.params.continuum) {
            this.app.continuum.impulse(this.name, this.getData());
        }

        return currentData;
    }

    redo(times, params) {
        this._data.forward(times || 1);
        this._emit('update', this.getData(), params);

        if (this._params.continuum && this.app.params.continuum) {
            this.app.continuum.impulse(this.name, this.getData());
        }

        return this.getData();
    }

    clear(params) {
        this._data = new TimeMachine(this._params.default || {}, this.name);
        this._emit('update', this.getData(), params);

        if (this._params.continuum && this.app.params.continuum) {
            this.app.continuum.impulse(this.name, this.getData());
        }
    }

    setError(error) {
        this.error = error;
        this.emit('error', this.error);
    }

    append(context, unitContext, buildParams) {
        // TODO: Investigation, what kind of variables we need here?
        this.app = context;
        this.context = unitContext;

        if (this.app.stores.get(this.name)) {
            throw new ReflectiError(`you are trying to add two stores with the same name '${this.name}'. Stores should have different names even across different units.`);
        }

        this.app.stores = this.app.stores.set(this.name, this);
    }

    build(context, unitContext, buildParams) {
        this._startFlowListeners();
        this._startReduceListeners();

        if (this.app.serialized) {
            let serialized = this.app.serialized.getItem(`reflecti.store.${this.name}`);

            if (serialized && serialized.size !== 0) {
                this.setData(serialized);
            }
        }

    }

}
