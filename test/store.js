import { expect } from 'chai';

import storeCreator from '../src/store';

describe('Store', () => {
    let Store;

    beforeEach(() => {
        Store = storeCreator();
    });
    describe('creator', () => {
        it('config should be an object', () => {
            expect(() => {
                Store = storeCreator(123);
            }).to.throw('While creating a Store. Config should be an object. You\'ve passed number.');
        });

        it('should check middlewares', () => {
            expect(() => {
                Store = storeCreator({
                    middlewares: 123
                });
            }).to.throw('While creating a Store. Please, pass array of middlewares. You\'ve passed number.');
        });

        it('should check normalize function', () => {
            expect(() => {
                Store = storeCreator({
                    normalize: 123
                });
            }).to.throw('While creating a Store. Please, pass function \'normalize\'. You\'ve passed number.');
        });
    });

    describe('instance', () => {
        it('should have method \'dispatch\'', () => {
            const store = new Store(1);
            expect(store.dispatch).to.exist;
            expect(store.dispatch).to.be.a('function');
        });

        it('should have method \'getData\'', () => {
            const store = new Store(1);
            expect(store.getData).to.exist;
            expect(store.getData).to.be.a('function');
        });

        it('should have method \'use\'', () => {
            const store = new Store(1);
            expect(store.use).to.exist;
            expect(store.use).to.be.a('function');
        });

        it('should return proper fields after dispatching methods', () => {
            const store = new Store(1);
            const res = store.dispatch((value) => value + 1);
            expect(res.value).to.exist;
            expect(res.store).to.exist;
        });

        it('should return proper next value after dispatching methods', () => {
            const store = new Store(1);
            const res = store.dispatch((value) => value + 2);
            expect(res.value).to.be.equal(3);
            expect(res.store.dispatch((value) => value + 2).value).to.be.equal(5);
        });
    });

    describe('middlewares', () => {
        it('should be able to use the result', () => {
            const store = new Store(1);
            store.use((res) => {
                res.store.newMethod = () => res.value + 10;
                return res;
            });
            const res = store.dispatch((value) => value + 2);
            expect(res.value).to.be.equal(3);
            expect(res.store.newMethod).to.exist;
            expect(res.store.newMethod()).to.be.equal(13);
        });

        it('should be multiple for one store', () => {
            const store = new Store(1);
            store.use((res) => {
                res.store.newMethod = () => res.value + 10;
                return res;
            });
            store.use((res) => {
                res.store.oldMethod = () => res.value + 20;
                return res;
            });
            const res = store.dispatch((value) => value + 2);
            expect(res.value).to.be.equal(3);
            expect(res.store.newMethod).to.exist;
            expect(res.store.newMethod()).to.be.equal(13);
            expect(res.store.oldMethod).to.exist;
            expect(res.store.oldMethod()).to.be.equal(23);
        });
    });
});
