/**
 * Purpose:
 * To provide event streams for the stores.
 */

import Rx from 'rx';
import isEqual from 'lodash/isEqual';

/* eslint-disable no-param-reassign */
export default function(initialStore) {
    const subject = new Rx.Subject();

    initialStore.use({
        store: (store) => {
            store.prototype.subscribe = (next, error, completed) => {
                store._onError = error;
                return subject.subscribe(next, error, completed);
            };
        },

        data: (store) => {
            if (!isEqual(store.getData(), store.getPrevData())) {
                // If store observable disposed and we still setting to the store.
                try {
                    subject.onNext(store.getData());
                } catch (e) {
                    // TODO: Better error handling
                    if (store._onError) {
                        store._onError(e);
                    }
                }
            }

            return store;
        }
    });
}

/* eslint-enable no-param-reassign */
