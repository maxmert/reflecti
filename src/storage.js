import _ from 'lodash';

import * as validate from './libs/validators.js';
import ReflectiError from './errors.js';

export default class Storage {
    constructor(name, props = {}) {
        if (!validate.strings(name)) {
            throw new ReflectiError(`Wrong type of the <Storage> name: '${typeof name}'. Should be 'string'.`);
        }

        this.name = name;
        this._props = props;
        this.items = new Map();
    }

    setItem(name, item) {
        if (!validate.strings(name)) {
            throw new ReflectiError(`Wrong type '${typeof name}' of the <Item> name for <Storage> '${this.name}'. Should be 'string'.`);
        }

        this.items.set(name, item);
    }

    setItems(items, params = { shouldFetch: false }) {
        if (!_.isObject(items)) {
            throw new ReflectiError(`Wrong type '${typeof name}' of the <Items> name for <Storage> '${this.name}' in method <setItems>. Should be 'string'.`);
        }

        _.forEach(items, (item, name) => {
            this.setItem(name, item);
        });

        this._props.shouldFetch = params.shouldFetch;
    }

    getItem(name) {
        if (!validate.strings(name)) {
            throw new ReflectiError(`Wrong type '${typeof name}' of the <Item> name for <Storage> '${this.name}'. Should be 'string'.`);
        }

        return this.items.get(name);
    }

    toJSON() {
        let res = {};
        for (var [key, value] of this.items) {
            res[key] = value;
        }

        return res;
    }
}
