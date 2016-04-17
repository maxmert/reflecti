import clone from 'lodash/clone';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import warning from './utils/warnings';

const checkConfig = (config) => {
    if (config && !isObject(config)) {
        warning(`While creating a Store. Config should be an object. You've passed ${typeof config}.`);
    }

    const {
        middlewares,
        normalize
    } = config;

    if (middlewares && !Array.isArray(middlewares)) {
        warning(`While creating a Store. Please, pass array of middlewares. You've passed ${typeof middlewares}.`);
    }

    if (normalize && !isFunction(normalize)) {
        warning(`While creating a Store. Please, pass function 'normalize'. You've passed ${typeof normalize}.`);
    }
};

export default function(config = {}) {
    checkConfig(config);

    const {
        middlewares = [(value) => value],
        normalize = (value) => value
    } = config;

    const _middlewares = clone(middlewares);
    const use = (middleware) => {
        if (middleware && !isFunction(middleware)) {
            warning(`While adding a middleware to the Store. Please, pass function. You've passed ${typeof middleware}.`);
        }
        _middlewares.push(middleware);
    };

    function Store(value) {
        this.use = use;
        this.getData = normalize.bind(this, value);
        this.dispatch = (method) => {
            const nextValue = method(value);
            const res = {
                store: new Store(nextValue),
                value: nextValue
            };

            return _middlewares.reduce((result, middleware) => {
                result = middleware(result); // eslint-disable-line
                return result;
            }, res);
        };
    }

    return Store;
}
