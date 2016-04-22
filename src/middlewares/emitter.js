/**
 * Purpose:
 * To emit event if data changed.
 */
import EventEmitter from 'events';
import isEqual from 'lodash/isEqual';
class Emitter extends EventEmitter {}

export default function() {
    const emitter = new Emitter();

    return function(store) {
        // TODO: Check existing methods?
        store.on = (eventName, callback) => emitter.on(eventName, callback); // eslint-disable-line
        store.off = (eventName, callback) => emitter.removeListener(eventName, callback); // eslint-disable-line
        if (!isEqual(store.getData(), store._getOldData())) {
            emitter.emit('data', store.getData());
        }
        return store;
    };
}
