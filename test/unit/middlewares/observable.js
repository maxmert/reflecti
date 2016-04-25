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
        store.use(middleware);
    });

    describe('Observable', () => {
        it('should add subscribe method to the store', () => {
            expect(store.subscribe).to.exist;
            expect(store.subscribe).to.be.a('function');
        });

        it('should emit if data in the store changed', () => {
            const subscription = store.subscribe(next, error);
            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10);

            expect(next.callCount).to.be.equal(2);
            expect(flatMap(next.args)).to.eql([6, 60]);

            subscription.dispose();
        });

        it('should not emit, if data after change is the same', () => {
            const subscription = store.subscribe(next, error);

            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 1)
                .dispatch((value) => value + 0);

            expect(next.callCount).to.be.equal(1);
            expect(flatMap(next.args)).to.eql([6]);

            subscription.dispose();
        });

        it('should dispose observable', () => {
            const subscription = store.subscribe(next, error);

            store
                .dispatch((value) => value - 4)
                .dispatch((value) => value * 10);

            expect(next.callCount).to.be.equal(2);
            expect(flatMap(next.args)).to.eql([6, 60]);

            subscription.dispose();

            store.dispatch((value) => value - 4);

            expect(next.callCount).to.be.equal(2);
            expect(flatMap(next.args)).to.eql([6, 60]);
        });
    });
});
