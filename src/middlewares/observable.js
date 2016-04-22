/**
 * Purpose:
 * To provide event streams for the stores.
 */

import Rx from 'rx';
import isEqual from 'lodash/isEqual';

/* eslint-disable no-param-reassign */
export default function() {
    const subject = new Rx.Subject();

    return function(store) {
        store.subscribe = (next, error, completed) => {
            store._onError = error;
            return subject.subscribe(next, error, completed);
        };
        store.dispose = () => {
            store._onError = null;
            return subject.dispose();
        };

        if (!isEqual(store.getData(), store._getOldData())) {
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
    };
}

/* eslint-enable no-param-reassign */
