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
        // TODO: Check middlewares
        this.use = (middleware) => {
            _middlewares.push(middleware);
            return _middlewares.reduce(applyMiddleware, new Store(value, oldValue));
        };
        this.getData = () => value;
        this._getOldData = () => oldValue;
        this.dispatch = (method) => _middlewares.reduce(applyMiddleware, new Store(method(value), value));
    }

    return _middlewares.reduce(applyMiddleware, new Store(init));
}
