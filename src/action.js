import forEach from 'lodash/forEach';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import partialRight from 'lodash/partialRight';
import warning from './utils/warnings';

export default function(store, methods) {
    if (!store || !isObject(store) || !isFunction(store.dispatch) || !isFunction(store.getData)) {
        warning(`You should pass Store instance to the action constructor.`);
    }

    if (!isObject(methods)) {
        warning(`You should pass object with methods as a second parameter to the action constructor.`);
    }

    this.addMethod = (name, method) => this._add(method, name);

    this._add = (method, name) => {
        if (this[name]) {
            warning(`The method with name ${name} already exists in Action.`);
        }

        this[name] = function() {
            const newStore = store.dispatch(partialRight(method, ...arguments));
            this.getData = () => newStore.getData();
            this.getStore = () => newStore;
            return this;
        }.bind(this);
    };

    forEach(methods, this._add);

    return this;
}
