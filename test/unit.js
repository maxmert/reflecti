import should from 'should';
import Promise from 'bluebird';
import Unit from '../src/unit.js';
import Store from '../src/store.js';
import Storage from '../src/storage.js';
import Action from '../src/action.js';
import Locale from '../src/locale.js';

describe('Unit', () => {

    let unit;
    let store;
    let storage;
    let action;
    let locale;
    let locales;
    let props;
    let actionMethods;
    let storeMethods;
    let appContext;

    beforeEach(() => {
        unit = new Unit('test');

        appContext = {
            locale: {
                list: {}
            },
            params: {
                continuum: false
            },
            initial: new Storage('initial'),
            serialized: new Storage('serialized'),
            promises: [],
            continuum: new Map(),
            stores: new Map(),
            actions: new Map(),
            request: (url, params) => {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }
        };

        actionMethods = {
            set: {
                success: (data) => {
                    this.stores.test.data = data;
                }
            }
        };

        storeMethods = {
            set: {
                url: () => {
                    return 'https://raw.githubusercontent.com/maxmert/maxmertkit/master/package.json';
                },
                method: 'GET',
                data: {
                    id: 123
                }
            }
        };

        locales = {
            en: {
                hello: 'Hi',
                welcome: {
                    home: 'Home',
                    work: 'Work'
                }
            },
            ru: {
                hello: 'Привет',
                welcome: {
                    work: 'Работа',
                    home: 'Дом'
                }
            }
        };

        props = {
            silent: true
        };

        storage = new Storage('initial');
        store = new Store('test', storeMethods, props);
        action = new Action('test', actionMethods, props);
        locale = new Locale('test', locales);
    });

    describe('creating instance', () => {
        it('should throw an error if no <name> in constructor', () => {
            (() => {
                unit = new Unit();
            }).should.throw();
        });

        it('should have all initialized fields', () => {
            unit.name.should.be.equal('test');
        });
    });

    describe('Actions', () => {
        it('should add a Store', () => {
            unit.add(action);
            unit.actions.size.should.be.equal(1);
            should.exist(unit.actions.get('test'));
        });

        it('should trow an error if adding the Store with the same name (preventing adding the same store twice)', () => {
            (() => {
                unit.add(action);
                unit.add(action);
            }).should.throw();
        });
    });

    describe('Stores', () => {
        it('should add a Store', () => {
            unit.add(store);
            unit.stores.size.should.be.equal(1);
            should.exist(unit.stores.get('test'));
        });

        it('should trow an error if adding the Store with the same name (preventing adding the same store twice)', () => {
            (() => {
                unit.add(store);
                unit.add(store);
            }).should.throw();
        });
    });

    describe('custom context', () => {
        it('should set and rewrite', () => {
            unit.add({hello: 1});
            unit._context.hello.should.be.equal(1);
            unit.add({hello: 2}, {silent: true});
            unit._context.hello.should.be.equal(2);
        });
    });

    describe('building', () => {
        it('should propogate contexts to stores and actions', () => {
            appContext.stores.set('appContext', 2);

            unit.add({hello: 1});
            unit.add(store);
            unit.add(action);
            unit.build(appContext);
            should.exist(unit.stores.get('test').context.hello);
            unit.stores.get('test').context.hello.should.be.equal(1);
            should.exist(unit.stores.get('test').app.stores);
            unit.stores.get('test').app.stores.get('appContext').should.be.equal(2);
        });

        it('should link stores and action one to one after building', (done) => {
            actionMethods = {
                set: {
                    success: function(data) {
                        done();
                    }
                }
            };

            action = new Action('test', actionMethods, props);

            unit.add(store);
            unit.add(action);
            unit.build(appContext);

            action.set(123);
        });

        it('should create a chain of stores', (done) => {
            actionMethods = {
                set: {
                    success: function(data) {
                        done();
                    }
                }
            };

            let storeMethods2 = {
                set: {
                    url: 'https://raw.githubusercontent.com/maxmert/maxmertkit/master/package.json',
                    method: 'GET',
                    data: {
                        id: 321
                    },
                    before: [
                        { test2: 'set' }
                    ]
                }
            };

            props = {
                silent: true
            };

            let store2 = new Store('test2', storeMethods, props);
            let store = new Store('test', storeMethods2, props);
            action = new Action('test', actionMethods, props);

            unit.add(store);
            unit.add(store2);
            unit.add(action);
            unit.build(appContext);

            action.set(123);
        });

        it('should throw an error if trying to rewrite existing parts of locales', () => {
            (() => {
                let locales2 = {
                    en: {
                        done: 'Done',
                        hello: 'fff'
                    },
                    ru: {
                        done: 'Готово',
                        hello: 'fff'
                    }
                };

                let locale2 = new Locale('test2', locales2);

                unit.add(locale);
                unit.add(locale2);
                unit.build(appContext);
            }).should.throw();
        });

        it('should build locales', () => {
            let locales2 = {
                en: {
                    done: 'Done'
                },
                ru: {
                    done: 'Готово'
                }
            };

            let locale2 = new Locale('test2', locales2);

            unit.add(locale);
            unit.add(locale2);
            unit.build(appContext);

            should.exists(appContext.locale.list.en);
            should.exists(appContext.locale.list.ru);
            should.exists(appContext.locale.list.en.hello);
            should.exists(appContext.locale.list.ru.hello);
            should.exists(appContext.locale.list.en.done);
            should.exists(appContext.locale.list.ru.done);
        });
    });

});
