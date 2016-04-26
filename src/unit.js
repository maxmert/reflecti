export default function(unitName) {
    function Unit(name) {
        this.name = name;
        this._stores = {};
        this._actions = {};
        this._custom = {};
    }

    Unit.prototype.addStore = function(name, store) {
        // TODO: Check if store exists
        // TODO: Check is store is a Store instance ???
        this._stores[name] = store;
    };

    Unit.prototype.addAction = function(name, action) {
        // TODO: Check if action name exists
        this._actions[name] = action;
    };

    Unit.prototype.add = function(name, custom) {
        this._custom[name] = custom;
    };

    return new Unit(unitName);
}
