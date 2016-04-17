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

    // this._cursor = -1;
    // this._data = [];
    //
    // this.getData = () => this._data[this._cursor].getData();

    forEach(methods, (method, name) => {
        this[name] = function() {
            const newStore = store.dispatch(partialRight(method, ...arguments));
            // const data = {
            //     store: newStore.store,
            //     getData: newStore.store.getData
            // };
            // this._cursor += 1;
            // this._data = this._data.slice(0, this._cursor);
            // this._data.push(data);
            this.end = () => newStore.value;
            return this;
        }.bind(this);
    });

    return this;
}
