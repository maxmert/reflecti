import { expect } from 'chai';
import sinon from 'sinon';
import flatMap from 'lodash/flatMap';

import createStore from '../../../src/store';
import emitterMiddleware from '../../../src/middlewares/emitter';

/* eslint-disable no-unused-expressions */

describe('Middleware', () => {
    let store;
    let callback;

    beforeEach(() => {
        store = createStore(10);
        callback = sinon.spy();
        emitterMiddleware(store);
    });

    describe('Emitter', () => {
        it('should add on and off methods to the store', () => {
            expect(store.on).to.exist;
            expect(store.on).to.be.a('function');
            expect(store.off).to.exist;
            expect(store.off).to.be.a('function');
        });

        it('should emit if data in the store changed', () => {
            store.on('data', callback);
            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10);

            expect(callback.callCount).to.be.equal(2);
            expect(flatMap(callback.args)).to.eql([6, 60]);

            store.off('data', callback);
        });

        it('should not emit, if data after change is the same', () => {
            store.on('data', callback);

            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 1)
                .dispatch((value) => value + 0);

            expect(callback.callCount).to.be.equal(1);
            expect(flatMap(callback.args)).to.eql([6]);

            store.off('data', callback);
        });

        it('should remove listeners', () => {
            store.on('data', callback);

            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10);

            expect(callback.callCount).to.be.equal(2);
            expect(flatMap(callback.args)).to.eql([6, 60]);

            store.off('data', callback);

            store.dispatch((value) => value - 4);

            expect(callback.callCount).to.be.equal(2);
            expect(flatMap(callback.args)).to.eql([6, 60]);
        });
    });
});

/* eslint-enable no-unused-expressions */
