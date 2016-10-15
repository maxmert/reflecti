/**
 * Purpose:
 * Keep reference to the initial store.
 *
 * How to use:
 *
 * import storageMiddleware from './middlewares/storage';
 * import createStore from './store';
 *
 * const store = createStore(5);
 * const middleware = storageMiddleware(store);
 *
 * store.use(middleware);
 * store.dispatch((value) => value + 1).dispatch((value) => value * 10);
 * store.getData() === 60;
 */

export default function(initialStore) {
    initialStore.use({
        data: (store) => {
            // FIXME: Should I clone it? Or leave to have side effects by other middlewares?
            Object.keys(store).forEach((key) => initialStore[key] = store[key]); // eslint-disable-line
            return store;
        }
    });
}
