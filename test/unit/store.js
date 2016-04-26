import { expect } from 'chai';
import clone from 'lodash/clone';

import createStore from '../../src/store';
import { getStore } from './data';

/* eslint-disable no-unused-expressions */

describe('Store', () => {
    let store;

    describe('instance', () => {
        it('should have method \'dispatch\'', () => {
            store = getStore();
            expect(store.dispatch).to.exist;
            expect(store.dispatch).to.be.a('function');
        });

        it('should save initial data', () => {
            store = createStore(5);
            expect(store.getData()).to.be.equal(5);
        });

        it('should perform dispatching', () => {
            const tmpStore = createStore(5, {
                middlewares: [
                    (prevStore) => {
                        store = prevStore;
                        return store;
                    }
                ]
            });

            expect(tmpStore.dispatch((value) => value - 4).dispatch((value) => value * 10).getData()).to.be.equal(10);
        });

        it('should apply middlewares', () => {
            const tmpStore = createStore(5, {
                middlewares: [
                    (prevStore) => {
                        store = prevStore;
                        return store;
                    }
                ]
            });
            tmpStore.dispatch((value) => value - 4).dispatch((value) => value * 10);
            expect(tmpStore.getData()).to.be.equal(5);
            expect(store.getData()).to.be.equal(10);

            let tmpStore2 = createStore(10, {
                middlewares: [
                    (prevStore) => {
                        tmpStore2 = clone(prevStore);
                        return tmpStore2;
                    }
                ]
            });

            tmpStore2.dispatch((value) => value - 4).dispatch((value) => value * 10);
            expect(tmpStore2.getData()).to.be.equal(60);
        });
    });
});

/* eslint-enable no-unused-expressions */
