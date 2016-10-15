import { expect } from 'chai';

import createStore from '../../../src/store';
import timemashineMiddleware from '../../../src/middlewares/time-mashine';

/* eslint-disable no-unused-expressions */

describe('Middleware', () => {
    let store;

    beforeEach(() => {
        store = createStore(10);
        timemashineMiddleware(store);
    });

    describe('Time Mashine', () => {
        it('should add undo and redo methods to the store', () => {
            expect(store.undo).to.exist;
            expect(store.undo).to.be.a('function');
            expect(store.redo).to.exist;
            expect(store.redo).to.be.a('function');
        });

        it('should undo', () => {
            const newStore = store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10);

            expect(newStore.getData()).to.be.equal(60);
            newStore.undo();
            expect(newStore.getData()).to.be.equal(6);
            newStore.undo();
            expect(newStore.getData()).to.be.equal(6);
        });

        it('should redo', () => {
            const newStore = store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10)
                .dispatch((value) => value + 5);

            newStore.undo();
            newStore.undo();
            expect(newStore.getData()).to.be.equal(6);

            newStore.redo();
            expect(newStore.getData()).to.be.equal(60);
            newStore.redo();
            expect(newStore.getData()).to.be.equal(65);
            newStore.redo();
            expect(newStore.getData()).to.be.equal(65);
        });
    });
});

/* eslint-enable no-unused-expressions */
