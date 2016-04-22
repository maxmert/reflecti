import { expect } from 'chai';

import createStore from '../../../src/store';
import storageMiddleware from '../../../src/middlewares/storage';

describe('Middleware', () => {
    describe('Storage', () => {
        it('should be applicable', () => {
            let store = createStore(10);
            const middleware = storageMiddleware(store);
            store.use(middleware);
            store.dispatch((value) => value - 4).dispatch((value) => value * 10);
            expect(store.getData()).to.be.equal(60);
        });
    });
});
