import _ from 'lodash';

import ReflectiError from './errors.js';
import * as validate from './libs/validators.js';

const REQUIRED = [];
const RESERVED = ['build', 'name'];

export default class Action {

    _initialize(name, methods, props) {
        this.name = name;
        this._props = props;
    }

    _addMethods(methods) {
        // Define basic callbacks
        let errorCallback = (error, ex) => {
            let storeErrorCallback = this.app.stores.get(this.name).error;
            if (storeErrorCallback && typeof storeErrorCallback === 'function') {
                storeErrorCallback(error);
            }
            else {
                if (ex) {
                    console.error(ex);
                }

                throw error;
            }
        };

        let completeCallback = _.noop;

        let successCallback = (data) => {
            return data;
        };

        _.forEach(methods, (method, name) => {
            let callbacks;
            let methodName;

            if (_.isNumber(name)) {
                if (_.isObject(method)) {
                    methodName = _.keys(method)[0];
                    callbacks = method[methodName];
                }
                else {
                    methodName = method;
                    callbacks = {};
                }
            }
            else {
                methodName = name;
                callbacks = method;
            }

            let error = callbacks.error || errorCallback.bind(this);
            let complete = callbacks.complete || completeCallback;
            let success = callbacks.success || successCallback;

            // let methodName = _.isString(name) ? name : method;

            if (typeof callbacks !== 'function') {

                this[methodName] = function() {
                    if (!this.app.params.continuum || !this.app.continuum.isReplaying) {
                        let store = this.app.stores.get(this.name);

                        return store
                            .run(methodName, arguments)
                            .then(success.bind(store))
                            .error(error.bind(store))
                            .finally(complete.bind(store));
                    }
                }.bind(this);
            }
            else {
                this[methodName] = callbacks.bind(this.app.stores.get(this.name));
            }
        });
    }

    constructor(name, methods, props) {
        if (!validate.strings(name)) {
            throw new ReflectiError(`wrong type of the [name] in the <Action> constructor. Please, provide correct name type 'string'. You've passed '${typeof name}'.`);
        }

        let reserved = validate.reserved(RESERVED, methods);
        if (reserved)  {
            throw new ReflectiError(`the method names [${reserved}] in the <Action> '${name}' is reserved. Please, use another name.`);
        }

        this._initialize(name, methods, props);
        this._addMethods(methods);
    }

    build(context, unitContext) {
        this.app = context;
        this.context = unitContext;

        if (this.app.actions.get(this.name)) {
            throw new ReflectiError(`you are trying to add two actions with the same name '${this.name}'. Actions should have different names even across different units.`);
        }

        this.app.actions.set(this.name, this);
    }

}
