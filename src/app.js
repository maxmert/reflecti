import _ from 'lodash';

import * as validate from './libs/validators.js';
import ReflectiError from './errors.js';
import Unit from './unit.js';
import Storage from './storage.js';
import Continuum from './continuum.js';
import Fetcher from './fetcher.js';

const RESERVED = ['stores', 'actions', 'locale'];
const REQUIRED = ['request'];

export default class App {

    _initialize(name, serializedData, params) {
        this.name = name;
        this.units = new Map();
        this.context = this.constructor.createAppContext(serializedData, params);
    }

    static createAppContext(serializedData, params) {
        return {
            locale: {
                list: {}
            },
            initial: new Storage('initial'),
            serialized: serializedData,
            promises: [],
            stores: new Map(),
            actions: new Map(),
            continuum: new Continuum(),
            fetcher: new Fetcher(),
            params: params || {
                continuum: false
            }
        };
    }

    _build(appContext, buildParams) {
        for (var [name, unit] of this.units) {
            unit.build(appContext, null, buildParams);
        }
    }

    constructor(name, serializedData, params) {
        if (!validate.strings(name)) {
            throw new ReflectiError(`Wrong type of the <App> name: '${typeof name}'. Should be 'string'.`);
        }

        this._initialize(name, serializedData, params);
    }

    add(unit, params) {
        let extarctedUnit = typeof unit === 'function' ? unit() : unit;

        if (extarctedUnit instanceof Unit) {
            if (this.units.get(extarctedUnit.name)) {
                throw new ReflectiError(`<Unit> with name '${extarctedUnit.name}' already exists. Probably you adding the same <Unit> twice. If not, then change the name.`);
            }

            return this.units.set(extarctedUnit.name, extarctedUnit);
        }

        throw new ReflectiError(`you are trying to add to the <App> something with wrong type. If you want to set custom context, then use <set> method.`);
    }

    set(name, custom, params) {
        let reserved = validate.reserved(RESERVED, name);
        if (reserved)  {
            throw new ReflectiError(`the method names [${reserved}] in the <Store> '${name}' is reserved. Please, use another name.`);
        }

        if (this.context[name] && (params && !params.silent)) {
            console.info('Reflecti. You are rewriting custom context with name `%s`. If that\'s fine and you don\'t want to see this message, use param *silent* when setting custom context.', name);
        }

        this.context[name] = custom;
    }

    build(buildParams) {
        this._buildParams = buildParams;
        let required = validate.required(REQUIRED, this.context);
        if (required) {
            throw new ReflectiError(`You didn't set required custom context fields: ${required}.`);
        }

        this.context.continuum.build(this.context, buildParams);
        this._build(this.context, buildParams);

        // If we have some locales, but don't have any locale builder, then throw an error
        if (_.keys(this.context.locale.list).length) {
            if (!this.context.localeBuilder || typeof this.context.localeBuilder !== 'function') {
                throw new ReflectiError(`You are trying to build locales, but you didn't set a locale builder. Please do \n\tapp.set('localeBuilder', function(list) {\n\t\treturn list;\n\t});`);
            }

            let list = this.context.locale.list;
            this.context.locale = this.context.localeBuilder(list);
        }

        this.context.fetcher.build(this.context, buildParams);

        return this.context;
    }

}
