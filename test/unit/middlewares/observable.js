import { expect } from 'chai';
import sinon from 'sinon';
import flatMap from 'lodash/flatMap';

import createStore from '../../../src/store';
import observableMiddleware from '../../../src/middlewares/observable';

describe('Middleware', () => {
    let store;
    let next;
    let error;

    beforeEach(() => {
        store = createStore(10);
        next = sinon.spy();
        error = sinon.spy();
        const middleware = observableMiddleware();
        store = store.use(middleware);
    });

    describe('Observable', () => {
        it('should add on and off methods to the store', () => {
            expect(store.subscribe).to.exist;
            expect(store.subscribe).to.be.a('function');
            expect(store.dispose).to.exist;
            expect(store.dispose).to.be.a('function');
        });

        it('should emit if data in the store changed', () => {
            store.subscribe(next, error);
            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10);

            expect(next.callCount).to.be.equal(2);
            expect(flatMap(next.args)).to.eql([6, 60]);

            store.dispose();
        });

        it('should not emit, if data after change is the same', () => {
            store.subscribe(next, error);

            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 1)
                .dispatch((value) => value + 0);

            expect(next.callCount).to.be.equal(1);
            expect(flatMap(next.args)).to.eql([6]);

            store.dispose();
        });

        it('should dispose observable', () => {
            store.subscribe(next, error);

            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10);

            expect(next.callCount).to.be.equal(2);
            expect(flatMap(next.args)).to.eql([6, 60]);

            store.dispose();

            store.dispatch((value) => value - 4);

            expect(next.callCount).to.be.equal(2);
            expect(flatMap(next.args)).to.eql([6, 60]);
        });
    });
});
