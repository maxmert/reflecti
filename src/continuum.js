import _ from 'lodash';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import {format} from 'util';

import * as validate from './libs/validators.js';
import ReflectiError from './errors.js';

export default class Continuum {
    constructor() {
        this._continuum = new Immutable.List();

        // We don't need immutability here, but let's keep it like this just in case
        this._rules = new Immutable.Map();
    }

    _setCursor(position) {
        if (!validate.numbers(position)) {
            throw new ReflectiError(`Trying to set wrong position of the cursor in the <Continuum>.`);
        }

        this._position = position;
        this._cursor = Cursor.from(this._continuum, [this._position]);
    }

    _timetravel(position, callback) {
        let tmpCursor = Cursor.from(this._continuum, [position]);
        if (tmpCursor && !tmpCursor.isEmpty()) {
            return callback.call(this, position);
        }
    }

    _validateRule(name) {
        if (!this._rules.get(name) && !this.app.stores.get(name)) {
            throw new ReflectiError(format('there are no such stores in *App* or rules in *Continuum* with name `%s`.', name));
        }
    }

    _validateImport(importData) {
        if (!_.isArray(importData.continuum)) {
            throw new ReflectiError(format('importing failed, because `continuum` field should be an *array*. You\'ve passed *%s*', name, typeof importData.continuum));
        }

        if (!_.isObject(importData.rules)) {
            throw new ReflectiError(format('importing failed, because `rules` field should be an *object*. You\'ve passed *%s*', name, typeof importData.rules));
        }
    }

    // Immutable Cursor has different methods in comparison with Immutable
    // so we need to convert it to Immutable somebody require a data at that cursor
    // TODO: Get rid of it, investigate problems it may cause
    _convertFromCursor(cursor) {
        return Immutable.fromJS(cursor.toJS());
    }

    _effect(position) {
        this._setCursor(position);

        let cursor = this._cursor;
        let rule = this._rules.get(cursor.get('name'));

        if (rule) {
            let data = cursor.get('data');
            let args = data.toJS ? data.toJS() : data;

            return rule.callback(args);
        }
        else {
            let store = this.app.stores.get(cursor.get('name'));

            store.setData(this._convertFromCursor(cursor.get('data')), {
                continuum: true
            });
        }
    }

    build(context) {
        this.app = context;
    }

    rule(name, callback, params) {
        if (this._rules.has(name)) {
            throw new ReflectiError(`already has rule '${name}' in <Continuum>.`);
        }

        this._rules = this._rules.set(name, {
            name: name,
            callback: callback,
            params: params
        });
    }

    impulse(name, data) {
        this._validateRule(name);

        this._continuum = this._continuum.push(Immutable.fromJS({
            name: name,
            data: data
        }));
    }

    bigbang(position = 0) {
        this.isReplaying = true;
        this._timetravel(position, this._effect);
    }

    stop() {
        this.isReplaying = false;
    }

    next(position = 1) {
        this.bigbang(this._position + position);
    }

    previous(position = 1) {
        this.bigbang(this._position - position);
    }

    exports(type) {
        let resultJSON = {
            continuum: this._continuum.toJS(),
            rules: this._rules.toJS()
        };

        if (type && type === 'string') {
            let reg = new RegExp('\'', 'g');
            return JSON.stringify(resultJSON).replace(reg, '\\\'');
        }
        else {
            return resultJSON;
        }
    }

    imports(data) {
        let json = _.isString(data) ? JSON.parse(data) : data;

        this._validateImport(json);

        this._continuum = Immutable.fromJS(json.continuum);
    }
}
