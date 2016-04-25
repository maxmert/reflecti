/**
 * Purpose:
 * To emit event if data changed.
 */
import EventEmitter from 'events';
import isEqual from 'lodash/isEqual';
class Emitter extends EventEmitter {}

export default function() {
    const emitter = new Emitter();

    return {
        store: (store) => {
            // TODO: Check existing methods?
            store.prototype.on = (eventName, callback) => emitter.on(eventName, callback); // eslint-disable-line
            store.prototype.off = (eventName, callback) => emitter.removeListener(eventName, callback); // eslint-disable-line
            return store;
        },

        data: (store) => {
            if (!isEqual(store.getData(), store._getOldData())) {
                emitter.emit('data', store.getData());
            }
            return store;
        }
    };
}
