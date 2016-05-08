import forEach from 'lodash/forEach';
import partial from 'lodash/partial';

function addToContext(context, data) {
    forEach(data, (dataChunk, name) => context[name] = dataChunk); // eslint-disable-line
}

function buildContext(middlewares) {
    return function(context, unit) {
        addToContext(context.stores, unit._stores);
        addToContext(context.actions, unit._actions);
        addToContext(context, unit._custom);
        middlewares.forEach((middleware) => middleware(context, unit));
    };
}

export default function(appName) {
    class App {
        constructor(name) {
            this._name = name;
            this._custom = {};
            this._units = {};
        }

        addUnit(unit) {
            // TODO: Check if unit with name already exists
            this._units[unit._name] = unit;
        }

        addCustom(name, data) {
            // TODO: Check if data with name already exists
            this._custom[name] = data;
        }

        build(middlewares = []) {
            // Initial context is empty
            const context = {
                stores: {},
                actions: {}
            };

            // Building context from unit's participators
            forEach(this._units, partial(buildContext(middlewares), context));

            // Complement context with app participators
            addToContext(context, this._custom);

            return context;
        }
    }

    return new App(appName);
}
