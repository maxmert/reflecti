function applyMiddlewares(middlewares, store) {
    if (Array.isArray(middlewares)) {
        middlewares.forEach((middleware) => middleware(store));
    }
}

export default function(unitName, config = {}) {
    class Unit {
        constructor(name) {
            // TODO: Check unit name
            this._name = name;
            this._custom = {};
            this._stores = {};
            this._actions = {};
        }

        addStore(name, store, middlewares) {
            // TODO: Check if store already exists

            applyMiddlewares(config.middlewares, store);
            applyMiddlewares(middlewares, store);

            this._stores[name] = store;
        }

        addAction(name, action) {
            // TODO: Check if action already exists
            this._actions[name] = action;
        }

        addCustom(name, data) {
            // TODO: Check if custom context exists
            this._custom[name] = data;
        }
    }

    return new Unit(unitName);
}
