export class Storage {
    constructor() {
        this._storage = {};
    }

    getItem(key) {
        return this._storage[key];
    }

    setItem(key, value) {
        return this._storage[key] = value + '';
    }

    clear() {
        this._storage = {};
    }
}
