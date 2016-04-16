import { expect } from 'chai';

import Action from '../src/action';
import storeCreator from '../src/store';

let data = {
    test: 'abc'
};
let methods = {
    add: (value, text) => {
        return { test: value.test + text };
    },
    setLetter: (value, letter) => {
        return { test: value.test[letter] }
    }
};
let methodsPromises = {
    add: (value, text) =>
        new Promise((resolve) => {
            setTimeout(() => resolve({ test: value.test + text }), 100);
        }),
    setLetter: (value, letter) =>
        new Promise((resolve) => {
            setTimeout(() => resolve({ test: value.test[letter] }), 100);
        })
};
let methodsCallbacks = {
    add: (value, text, callback) =>
        new Promise((resolve) => {
            setTimeout(() => {
                const dat = { test: value.test + text };

                resolve(callback(null, dat));
            }, 100);
        })
};



describe('Action', () => {
    let Store;

    beforeEach(() => {
        Store = storeCreator({ name: 'test' });
    });

    describe('instance', () => {
        it('should throw if Store instance not passed', () => {
            expect(() => {
                const action = new Action(123);
            }).to.throw(`You should pass Store instance to the action constructor.`);
        });

        it('should throw if methods not passed', () => {
            expect(() => {
                new Action(new Store(data), 123);
            }).to.throw(`You should pass object with methods as a second parameter to the action constructor.`);
        });

        describe('methods', () => {
            it('should be setted', () => {
                const action = new Action(new Store(data), methods);

                expect(action.add).to.exist;
                expect(action.setLetter).to.exist;
            });

            it('should trigger Store dispatch with methods', () => {
                const action = new Action(new Store(data), methods);

                expect(action.add('cba').getData().test).to.be.equal('abccba');
                expect(action.add('cba').setLetter(1).getData().test).to.be.equal('b');
            });

            it('should work with callbacks', (done) => {
                const action = new Action(new Store(data), methodsCallbacks);
                action.add('cba', (err, dat) => {
                    expect(dat.test).to.be.equal('abccba');
                    done();
                });
            });

            it('should work with promises', (done) => {
                const action = new Action(new Store(data), methodsPromises);

                action.add('cba').end().then((dat) => {
                    expect(dat.test).to.be.equal('abccba');
                    done();
                });
            });
        });
    });
});
