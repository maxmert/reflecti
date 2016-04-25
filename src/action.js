import forEach from 'lodash/forEach';
import partialRight from 'lodash/partialRight';

export default function(store, methods) {
    // TODO: Check store and methods
    const _self = this;
    this.addMethod = (methodName, method) => this._addMethod(method, methodName);
    this._getStore = () => store;
    this._addMethod = (method, methodName) => {
        // TODO: Check if method name already exists
        _self[methodName] = function() {
            store.dispatch((oldValue) => {
                Array.prototype.unshift.call(arguments, oldValue);
                return method.apply(null, arguments);
            });
            return _self;
        };
    };

    forEach(methods, this._addMethod);

    return this;
}
