import { expect } from 'chai';

import createStore from '../../../store';
import storageMiddleware from '../../../middlewares/storage';

describe('Middleware', () => {
    describe('Storage', () => {
        it('should be applicable', () => {
            const store = createStore(10);
            storageMiddleware(store);

            store.dispatch((value) => value - 4).dispatch((value) => value * 10);
            expect(store.getData()).to.be.equal(60);
        });
    });
});
