import _ from 'lodash';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';

import * as validate from './libs/validators.js';
import ReflectiError from './errors.js';

export default class TimeMachine {

    constructor(data, storeName) {
        this._initialize(data, storeName);

        if (data) {
            this._add(data);
        }

        this._setCursor(0);
    }

    _initialize(data, storeName) {
        this._props = {
            storeName: storeName
        };
        this._position = 0;
        this._list = new Immutable.List();

        Object.defineProperty(this, 'cursor', {
            get: () => {
                return this._immutableUnpack(this._convertFromCursor(this._cursor));
            }
        });
    }

    _setCursor(position) {
        if (!validate.numbers(position)) {
            throw new ReflectiError(`Trying to set wrong position of the cursor of the <Data> in the <Store> ${this._props.storeName}.`);
        }

        this._position = position;
        this._cursor = Cursor.from(this._list, [this._position]);
    }

    // Immutable Cursor has different methods in comparison with Immutable
    // so we need to convert it to Immutable somebody require a data at that cursor
    _convertFromCursor(cursor) {
        return Immutable.fromJS(cursor.toJS());
    }

    // Please, look at the _immutablePack method
    _immutableUnpack(data) {
        return data.has('__packed') ? data.get('__packed') : data;
    }

    // This is a hack, because if we have Immutable.fromJS(2) it will return 2,
    // and this will not work for a Cursor
    _immutablePack(data) {
        if (validate.numbers(data) || validate.strings(data)) {
            return Immutable.fromJS({
                __packed: data
            });
        }
        else {
            return Immutable.fromJS(data);
        }
    }

    // Push a new data to the states list
    _add(data) {
        this._list = this._list
            .take(this._position + 1)
            .push(this._immutablePack(data));
    }

    // Check if we can travel in time to the provided position.
    // We can't travel to The Big Bang time (initial state when there was nothing)
    _timetravel(position, callback) {
        let tmpCursor = Cursor.from(this._list, [position]);
        if (tmpCursor && !_.isEmpty(tmpCursor.toJS())) {
            return callback.call(this, position);
        }
    }

    rewind(quantity = 1) {
        let newPosition = this._position - quantity >= 0 ? this._position - quantity : 0;
        this._timetravel(newPosition, this._setCursor);
    }

    forward(quantity = 1) {
        let listSize = this._list.size;
        let newPosition = this._position + quantity <= listSize ? this._position + quantity : listSize;
        this._timetravel(newPosition, this._setCursor);
    }

    push(data) {
        this._add(data);
        this.forward();
    }
}
