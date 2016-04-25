import clone from 'lodash/clone';

export default function(init, config = {}) {
    // TODO: Check config
    const { middlewares } = config;

    // TODO: Check middlewares
    const _middlewares = middlewares ? clone(middlewares) : [];
    const applyMiddleware = (result, middleware) => {
        result = middleware(result); // eslint-disable-line
        return result;
    };

    function Store(value, oldValue) {
        this.getData = () => value;
        this._getOldData = () => oldValue;
        this.dispatch = (method = (val) => val) => _middlewares.reduce(applyMiddleware, new Store(method(value), value));
    }

    Store.prototype.use = (middleware) => {
        // TODO: Check middlewares
        if (middleware.store) {
            middleware.store(Store);
        }
        if (middleware.data) {
            _middlewares.push(middleware.data);
        }
    };

    return _middlewares.reduce(applyMiddleware, new Store(init));
}
