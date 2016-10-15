/**
 * Purpose:
 * To provide an ability for stores undo or redo things.
 */

/* eslint-disable no-param-reassign */
export default function(initialStore) {
    let cursor = -1;
    let continuum = [];

    initialStore.use({
        store: (store) => {
            store.prototype.undo = (steps = 1) => {
                cursor = cursor - steps < 0 ? 0 : cursor - steps;
            };

            store.prototype.redo = (steps = 1) => {
                cursor = cursor + steps > continuum.length - 1 ? continuum.length - 1 : cursor + steps;
            };
        },

        data: (store) => {
            cursor += 1;
            if (continuum.length > cursor) {
                continuum = continuum.slice(0, cursor);
            }

            continuum.push(store.getData());

            // FIXME: This is very slow, improve perfomance
            store.getData = () => continuum[cursor];

            return store;
        }
    });
}

/* eslint-enable no-param-reassign */
