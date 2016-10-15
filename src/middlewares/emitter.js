/**
 * Purpose:
 * To emit event if data changed.
 */
import Emitter from 'events';
import isEqual from 'lodash/isEqual';

export default function(initialStore) {
    const emitter = new Emitter();

    initialStore.use({
        store: (store) => {
            // TODO: Check existing methods?
            store.prototype.on = (eventName, callback) => emitter.on(eventName, callback); // eslint-disable-line
            store.prototype.off = (eventName, callback) => emitter.removeListener(eventName, callback); // eslint-disable-line
            return store;
        },

        data: (store) => {
            if (!isEqual(store.getData(), store.getPrevData())) {
                emitter.emit('data', store.getData());
            }
            return store;
        }
    });
}
