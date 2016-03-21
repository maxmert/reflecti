import should from 'should';
import Promise from 'bluebird';
import App from '../src/app.js';
import Unit from '../src/unit.js';
import Store from '../src/store.js';
import Action from '../src/action.js';
import Locale from '../src/locale.js';
import Immutable from 'immutable';

describe('App', () => {

    let app;
    let unit;
    let store;
    let action;
    let locale;
    let locales;
    let props;
    let actionMethods;
    let storeMethods;

    beforeEach(() => {
        app = new App('test');
        unit = new Unit('test');

        actionMethods = {
            set: {
                success: (data) => {
                    this.stores.test.data = data;
                }
            }
        };

        storeMethods = {
            set: {
                url: 'https://raw.githubusercontent.com/maxmert/maxmertkit/master/package.json',
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

        store = new Store('test', storeMethods, props);
        action = new Action('test', actionMethods, props);
        locale = new Locale('test', locales);

        unit.add(store);
        unit.add(action);
        unit.add(locale);

        app.set('request', (url, params) => {
            return new Promise((resolve, reject) => {
                resolve(Immutable.fromJS(25));
            });
        });

        app.add(unit);
    });

    describe('creating instance', () => {
        it('should throw an error if no <name> in constructor', () => {
            (() => {
                app = new App();
            }).should.throw();
        });

        it('should have all initialized fields', () => {
            app.name.should.be.equal('test');
        });

        it('should throw an error if adding a <Unit> with the same name', () => {
            (() => {
                app.add(unit);
            }).should.throw();
        });
    });

    describe('building', () => {
        it('should build stores', () => {
            app.set('localeBuilder', function(list) {
                return list;
            });

            app.build();

            app.context.stores.size.should.be.equal(1);
            should.exists(app.context.stores.get('test'));
        });

        it('should build actions', () => {
            app.set('localeBuilder', function(list) {
                return list;
            });

            app.build();

            app.context.actions.size.should.be.equal(1);
            should.exists(app.context.actions.get('test'));
        });

        it('should throw an error if no <localeBuilder>', () => {
            (() => {
                app.build();
            }).should.throw();
        });

        it('should build locales with <localeBuilder>', () => {
            app.set('localeBuilder', function(list) {
                return list;
            });

            app.build();
            should.exists(app.context.locale.en);
            should.exists(app.context.locale.ru);
        });
    });

    describe('Stores', () => {
        it('should throw if you are trying define wrong data structure', () => {
            app.set('localeBuilder', function(list) {
                return list;
            });
            var unit2 = new Unit('test2');
            var store2 = new Store('test2', {}, {
                flow: {
                    test: ['update']
                }
            });

            unit2.add(store2);
            app.add(unit2);

            (() => {
                app.build();
            }).should.throw();
        });

        it('should be able to subscribe for other store\'s methods', (done) => {
            app.set('localeBuilder', function(list) {
                return list;
            });
            var unit2 = new Unit('test2');
            var store2 = new Store('test2', {}, {
                flow: {
                    test: {
                        methods: {
                            set: function(data) {
                                this.setData(25);
                            }
                        }
                    }
                }
            });

            unit2.add(store2);
            app.add(unit2);
            app.build();

            store2.on('update', (data) => {
                data.should.be.equal(25);
                done();
            });
            store.run('set');
        });

        it('should be able to subscribe for other store\'s events', (done) => {
            app.set('localeBuilder', function(list) {
                return list;
            });
            var unit2 = new Unit('test2');
            var store2 = new Store('test2', {}, {
                flow: {
                    test: {
                        update: function(data) {
                            this.setData(data);
                        }
                    }
                }
            });

            unit2.add(store2);
            app.add(unit2);
            app.build();

            store2.on('update', (data) => {
                data.should.be.equal(25);
                done();
            });
            store.run('set');
        });

        it('should be able to transform data', (done) => {
            app.set('localeBuilder', function(list) {
                return list;
            });
            var unit2 = new Unit('test2');
            var store2 = new Store('test2', {}, {
                flow: {
                    test: {
                        methods: {
                            set: function(data) {
                                this.setData(data);
                            }
                        }
                    }
                },
                transform: (data) => {
                    return data - 5;
                }
            });

            unit2.add(store2);
            app.add(unit2);
            app.build();

            store2.on('update', (data) => {
                data.should.be.equal(20);
                done();
            });
            store.run('set');
        });

        it('should get initial data from actions', (done) => {
            app.set('localeBuilder', function(list) {
                return list;
            });
            var unit2 = new Unit('test2');
            var action2 = new Action('test2', {
                get: {
                    success: function(data) {}
                }
            });
            var store2 = new Store('test2', {
                get: {
                    url: (id, id2) => {
                        id.should.be.equal(2001);
                        id2.should.be.equal(2002);
                        done();
                        return 'https://raw.githubusercontent.com/maxmert/maxmertkit/master/package.json';
                    },
                    method: 'GET'
                }
            });

            unit2.add(store2);
            unit2.add(action2);
            app.add(unit2);
            app.build();

            action2.get(2001, 2002);
        });

        it('should be able to subscribe for other store\'s and use reducers to wait for data in all stores', (done) => {
            app.set('localeBuilder', function(list) {
                return list;
            });

            var unit2 = new Unit('test2');
            var store2 = new Store('test2', {
                get: function() {
                    this.setData({
                        data: 26
                    });
                }
            });

            unit2.add(store2);
            app.add(unit2);

            var unit4 = new Unit('test4');
            var store4 = new Store('test4', {
                get: function() {
                    this.setData({
                        data: 21
                    });
                }
            });

            unit4.add(store4);
            app.add(unit4);

            var unit3 = new Unit('test3');
            var store3 = new Store('test3', {}, {
                reducers: {
                    stores: ['test4', 'test2'],
                    success: function(data) {
                        data[0].get('data').should.be.equal(21);
                        data[1].get('data').should.be.equal(26);
                        done();
                    }
                }
            });

            unit3.add(store3);
            app.add(unit3);

            app.build();

            store4.run('get');
            setTimeout(
                () => {
                    store2.run('get');
                },

                100
            );
        });

        it('should be able to subscribe for other store\'s and use reducers to transform data for each store and wait for all data in all stores', (done) => {
            app.set('localeBuilder', function(list) {
                return list;
            });

            var unit2 = new Unit('test2');
            var store2 = new Store('test2', {
                get: function() {
                    this.setData({
                        data: 26
                    });
                }
            });

            unit2.add(store2);
            app.add(unit2);

            var unit4 = new Unit('test4');
            var store4 = new Store('test4', {
                get: function() {
                    this.setData({
                        data: 21
                    });
                }
            });

            unit4.add(store4);
            app.add(unit4);

            var unit3 = new Unit('test3');
            var store3 = new Store('test3', {}, {
                reducers: {
                    stores: [
                        {
                            test4: function() {
                                return Immutable.fromJS({
                                    data: 22
                                });
                            }
                        },

                        {
                            test2: function() {
                                return Immutable.fromJS({
                                    data: 23
                                });
                            }
                        }
                    ],
                    success: function(data) {
                        data[0].get('data').should.be.equal(22);
                        data[1].get('data').should.be.equal(23);
                        done();
                    }
                }
            });

            unit3.add(store3);
            app.add(unit3);

            app.build();

            store4.run('get');
            setTimeout(
                () => {
                    store2.run('get');
                },

                100
            );
        });
    });

});
