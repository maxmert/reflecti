import forEach from 'lodash/forEach';
import partialRight from 'lodash/partialRight';

export default function(store, methods) {
    // TODO: Check store and methods
    this.addMethod = (methodName, method) => this._addMethod(method, methodName);
    this._getStore = () => store;
    this._addMethod = (method, methodName) => {
        // TODO: Check if method name already exists
        this[methodName] = function() {
            store.dispatch(partialRight(method, ...arguments));
            return this;
        }.bind(this);
    };

    forEach(methods, this._addMethod);

    return this;
}
