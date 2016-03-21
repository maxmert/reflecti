import _ from 'lodash';

import * as validate from './libs/validators.js';
import ReflectiError from './errors.js';
import Store from './store.js';
import Action from './action.js';
import Locale from './locale.js';

const RESERVED = ['stores', 'actions', 'locale'];

export default class Unit {

    _initialize(name) {
        this.name = name;
        this._context = {};
        this.stores = new Map();
        this.actions = new Map();
        this.locale = new Map();
    }

    _buildStores(appContext, customContext, buildParams) {
        for (let [name, store] of this.stores) {
            store.append(appContext, customContext, buildParams);
        }

        for (let [name, store] of this.stores) {
            store.build(appContext, customContext, buildParams);
        }
    }

    _buildActions(appContext, customContext) {
        for (var [name, action] of this.actions) {
            action.build(appContext, customContext);
        }
    }

    _buildLocales(appContext, customContext) {
        for (var [name, locale] of this.locale) {
            locale.build(appContext, customContext);
        }
    }

    constructor(name) {
        if (!validate.strings(name)) {
            throw new ReflectiError(`Wrong type of the <Unit> name: '${typeof name}'. Should be 'string'.`);
        }

        this._initialize.call(this, name);
    }

    add(component, params) {
        let extractedComponent = _.isFunction(component) ? component() : component;

        if (extractedComponent instanceof Store) {
            if (this.stores.get(extractedComponent.name)) {
                throw new ReflectiError(`<Store> with name '${extractedComponent.name}' already exists. Probably you adding the same <Store> twice. If not, then change the name.`);
            }

            return this.stores.set(extractedComponent.name, extractedComponent);
        }

        if (extractedComponent instanceof Action) {
            if (this.actions.get(extractedComponent.name)) {
                throw new ReflectiError(`<Action> with name '${extractedComponent.name}' already exists. Probably you adding the same <Action> twice. If not, then change the name.`);
            }

            return this.actions.set(extractedComponent.name, extractedComponent);
        }

        if (extractedComponent instanceof Locale) {
            if (this.locale.get(extractedComponent.name)) {
                throw new ReflectiError(`<Locale> with name '${extractedComponent.name}' already exists. Probably you adding the same <Locale> twice. If not, then change the name.`);
            }

            return this.locale.set(extractedComponent.name, extractedComponent);
        }

        // If component is custom, then we don't know what to check, so we
        // can just add component to the unit context;
        if (typeof extractedComponent === 'object') {
            let customContextExists = validate.reserved(_.keys(this._context), extractedComponent);
            if (customContextExists) {
                if (!params || !params.silent) {
                    console.info('Reflecti. You are rewriting custom context `%s` in the *Unit* `%s`. If it\'s fine, then add {silent: true} param when adding the custom context.', customContextExists, this.name);
                }
            }

            this._context = _.assign(this._context, extractedComponent);
        }
    }

    build(appContext, customContext, buildParams) {
        this._buildStores.call(this, appContext, customContext || this._context, buildParams);
        this._buildActions.call(this, appContext, customContext || this._context);
        this._buildLocales.call(this, appContext, customContext || this._context);
    }

}
