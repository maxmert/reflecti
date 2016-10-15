import { expect } from 'chai';

import Action from '../../action';
import storageMiddleware from '../../middlewares/storage';
import { actionMethods, getStore } from './data';

/* eslint-disable no-unused-expressions */

describe('Action', () => {
    let action;
    let store;

    beforeEach(() => {
        store = getStore();
        storageMiddleware(store);

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
