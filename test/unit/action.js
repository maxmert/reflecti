import { expect } from 'chai';

import Action from '../../src/action';
import storageMiddleware from '../../src/middlewares/storage';
import { actionMethods, getStore } from './data';

/* eslint-disable no-unused-expressions */

describe('Action', () => {
    let action;
    let store;
    let middleware;

    beforeEach(() => {
        store = getStore();
        middleware = storageMiddleware(store);
        store.use(middleware);
        action = new Action(store, actionMethods);
    });

    describe('instance', () => {
        it('should have attached methods', () => {
            expect(action.plus).to.exist;
            expect(action.minus).to.exist;
        });

        it('should add new methods', () => {
            action.addMethod('divide', (value, divideBy) => ({ count: value.count / divideBy }));
            expect(action.divide).to.exist;

            action.plus(10).divide(5);
            expect(store.getData().count).to.be.equal(2);
        });

        it('should \'dispatch\' assigned stores', () => {
            action.plus(10).minus(1);
            expect(store.getData().count).to.be.equal(9);
        });
    });
});

/* eslint-enable no-unused-expressions */
