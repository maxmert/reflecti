import { expect } from 'chai';

import unitCreate from '../../../src/abstractions/unit';
import Action from '../../../src/action';
import { actionMethods, getStore } from '../data';
import storageMiddleware from '../../../src/middlewares/storage';

/* eslint-disable no-unused-expressions */

describe('Unit', () => {
    let unit;
    let action1;
    let store1;
    let action2;
    let store2;

    beforeEach(() => {
        unit = unitCreate('unit1', {
            middlewares: [
                (store) => {
                    const middleware = storageMiddleware(store);
                    store.use(middleware);
                }
            ]
        });
        store1 = getStore();
        action1 = new Action(store1, actionMethods);
        store2 = getStore();
        action2 = new Action(store2, actionMethods);
    });

    describe('instance', () => {
        it('should add stores', () => {
            unit.addStore('store1', store1);
            expect(unit._stores.store1).to.exist;
            expect(unit._stores.store1.getData().count).to.be.equal(0);
        });

        it('should add actions', () => {
            unit.addStore('store1', store1);
            unit.addAction('action1', action1);
            expect(unit._actions.action1).to.exist;

            unit._actions.action1.plus(2);
            expect(unit._stores.store1.getData().count).to.be.equal(2);
        });

        it('should add several stores and action', () => {
            unit.addStore('store1', store1);
            unit.addAction('action1', action1);
            unit.addStore('store2', store2);
            unit.addAction('action2', action2);

            expect(unit._stores.store1).to.exist;
            expect(unit._stores.store2).to.exist;
            expect(unit._actions.action1).to.exist;
            expect(unit._actions.action2).to.exist;

            unit._actions.action1.plus(2);
            expect(unit._stores.store1.getData().count).to.be.equal(2);
            expect(unit._stores.store2.getData().count).to.be.equal(0);

            unit._actions.action2.plus(10);
            expect(unit._stores.store1.getData().count).to.be.equal(2);
            expect(unit._stores.store2.getData().count).to.be.equal(10);
        });

        it('should add several stores and action', () => {
            unit = unitCreate('unit1');
            unit.addStore('store1', store1, [
                (store) => {
                    const middleware = storageMiddleware(store);
                    store.use(middleware);
                }
            ]);
            unit.addAction('action1', action1);
            unit.addStore('store2', store2);
            unit.addAction('action2', action2);

            expect(unit._stores.store1).to.exist;
            expect(unit._stores.store2).to.exist;
            expect(unit._actions.action1).to.exist;
            expect(unit._actions.action2).to.exist;

            unit._actions.action1.plus(2);
            expect(unit._stores.store1.getData().count).to.be.equal(2);
            expect(unit._stores.store2.getData().count).to.be.equal(0);

            unit._actions.action2.plus(10);
            expect(unit._stores.store1.getData().count).to.be.equal(2);
            expect(unit._stores.store2.getData().count).to.be.equal(0);
        });

        it('should add custom context', () => {
            unit.addCustom('data', 11);
            expect(unit._custom.data).is.equal(11);
        });
    });
});

/* eslint-enable no-unused-expressions */
