import { expect } from 'chai';
import merge from 'lodash/merge';

import unitCreate from '../../../src/abstractions/unit';
import appCreate from '../../../src/abstractions/app';
import Action from '../../../src/action';
import { actionMethods, getStore } from '../data';
import storageMiddleware from '../../../src/middlewares/storage';

/* eslint-disable no-unused-expressions, no-param-reassign */

describe('App', () => {
    let app;
    let unit1;
    let unit2;
    let action1;
    let store1;
    let action2;
    let store2;

    beforeEach(() => {
        unit1 = unitCreate('unit1', {
            middlewares: [
                (store) => {
                    const middleware = storageMiddleware(store);
                    store.use(middleware);
                }
            ]
        });
        unit2 = unitCreate('unit2', {
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
        app = appCreate('testapp');
    });

    describe('instance', () => {
        it('should build a context', () => {
            unit1.addStore('store1', store1);
            unit1.addAction('action1', action1);
            unit1.addCustom('unitcustom', { unitcustom: 1 });
            unit2.addStore('store2', store2);
            unit2.addAction('action2', action2);

            app.addUnit(unit1);
            app.addUnit(unit2);
            app.addCustom('hello', { hello: 1 });

            const context = app.build();

            expect(context.stores.store1.getData().count).to.be.equal(0);
            expect(context.stores.store2.getData().count).to.be.equal(0);

            context.actions.action1.plus(5);
            expect(context.stores.store1.getData().count).to.be.equal(5);

            context.actions.action1.plus(10);
            context.actions.action2.plus(11);
            expect(context.stores.store1.getData().count).to.be.equal(15);
            expect(context.stores.store2.getData().count).to.be.equal(11);
        });

        it('should build a context with custom builder', () => {
            unit1.addStore('store1', store1);
            unit1.addAction('action1', action1);
            unit1.addCustom('locales', { en: { hello: 'hello' } });
            unit2.addStore('store2', store2);
            unit2.addAction('action2', action2);
            unit2.addCustom('locales', { en: { welcome: 'welcome' } });

            app.addUnit(unit1);
            app.addUnit(unit2);
            app.addCustom('hello', { hello: 1 });

            const context = app.build([(ctx, unit) => {
                if (!ctx.locale) {
                    ctx.locale = {};
                }

                ctx.locale = merge(ctx.locale, unit._custom.locales);
            }]);

            delete context.locales;

            expect(context).to.have.deep.property('locale.en.hello', 'hello');
            expect(context).to.have.deep.property('locale.en.welcome', 'welcome');
        });
    });
});

/* eslint-enable no-unused-expressions, no-param-reassign */
