import Immutable from 'immutable';
import should from 'should';
import Store from '../src/store.js';
import fetch from 'request-promise';
import sinon from 'sinon';
import _ from 'lodash';
import * as Helpers from './helpers.js';

describe('Store', () => {

    var store;
    var params;

    beforeEach(() => {
        global.window = undefined;
        params = {
            set: {
                url: 'https://google.com/',
                method: 'GET',
                data: {
                    id: 123
                }
            }
        };

        store = new Store('test', params);
        store.append({
            params: {
                continuum: false
            },
            stores: {
                get: _.noop,
                set: _.noop
            },
            initial: {
                setItem: _.noop
            }
        })
    });

    describe('creating instance', () => {
        it('should throw an error if no <name> in constructor', () => {
            (() => {
                store = new Store();
            }).should.throw();
        });

        it('should throw an error if some of the methods has the same name, as reserved methods in the Store', () => {
            (() => {
                store = new Store('test', {
                    setData: {}
                });
            }).should.throw();
        });

        it('should throw an error if some of the methods has wrong method type', () => {
            (() => {
                store = new Store('test', {
                    set: {
                        url: '/test/url/',
                        method: 'poost'
                    }
                });
            }).should.throw();
        });

        it('should throw an error if some of the methods hasn\'t required field', () => {
            (() => {
                store = new Store('test', {
                    set: {
                        method: 'POST',
                        data: {
                            id: 123
                        }
                    }
                });
            }).should.throw();
        });

        it('should be initialized with default data', () => {
            store = new Store('test', {
                set: {
                    url: 'test',
                    method: 'POST',
                    data: {
                        id: 123
                    }
                }
            },
            {
                default: {
                    hello: 'salute'
                }
            });

            store.getData().get('hello').should.be.equal('salute');
        });

        it('should have all initialized fields', () => {
            store.name.should.be.equal('test');
            should.exist(store.methods);
        });
    });

    describe('client-side storage', () => {
        it('should get data from sessionStorage', () => {
            // arrange
            const STORAGE_KEY = 'reflecti.store.test';
            let storage = new Helpers.Storage();
            global.window = {
                sessionStorage: storage
            };

            let getItem = sinon.spy(storage, 'getItem');

            // act
            store = new Store('test', {},{
                storage: 'sessionStorage'
            });

            //assert
            getItem.withArgs(STORAGE_KEY).calledOnce.should.be.equal(true);
        });

        it('should get data from localStorage', () => {
            // arrange
            const STORAGE_KEY = 'reflecti.store.test';
            let storage = new Helpers.Storage();
            global.window = {
                localStorage: storage
            };

            let getItem = sinon.spy(storage, 'getItem');

            // act
            store = new Store('test', {},{
                storage: 'localStorage'
            });

            //assert
            getItem.withArgs(STORAGE_KEY).calledOnce.should.be.equal(true);
        });

        it('should set data from storage asynchronously', (done) => {
            //arrange
            const STORAGE_KEY = 'reflecti.store.test';
            let storage = new Helpers.Storage();
            storage.setItem(STORAGE_KEY, JSON.stringify({a: 1}));
            global.window = {
                sessionStorage: storage
            };

            //act
            store = new Store('test', {}, {
                storage: 'sessionStorage'
            });
            store.append({
                stores: {
                    get: _.noop,
                    set: _.noop
                },
                params: {
                    continuum: false
                }
            });

            //assert
            process.nextTick(() => {
                store.getData().get('a').should.be.equal(1);
                done();
            });
        });
    });

    describe('methods', () => {
        it('should throw an error method name has wrong type', () => {
            (() => {
                store.run(123);
            }).should.throw();
        });

        it('should throw an error if calling unexisting method', () => {
            (() => {
                store.run('get');
            }).should.throw();
        });

        it('should throw an error if trying to set a stringified json with wrong structure', () => {
            (() => {
                store.setData('{id: 123}');
            }).should.throw();
        });

        it('should properly set data if it have correct structure', () => {
            store.setData('{"id": 124}');
            store.getData().get('id').should.be.equal(124);
            store.setData({id: 321});
            store.getData().get('id').should.be.equal(321);
        });

        it('should undo and redo', () => {
            store.setData('{"id": 123}');
            store.getData().get('id').should.be.equal(123);
            store.setData({id: 321});
            store.getData().get('id').should.be.equal(321);
            store.setData({id: 322});
            store.getData().get('id').should.be.equal(322);
            store.undo();
            store.getData().get('id').should.be.equal(321);
            store.undo();
            store.getData().get('id').should.be.equal(123);
            store.redo();
            store.getData().get('id').should.be.equal(321);
            store.redo();
            store.getData().get('id').should.be.equal(322);
        });

        it('should return previous data while undoing', () => {
            store.setData('{"id": 123}');
            store.setData({id: 321});
            store.setData({id: 322});
            store.undo().get('id').should.be.equal(322);
            store.undo().get('id').should.be.equal(321);
            store.undo().get('id').should.be.equal(123);
            store.redo().get('id').should.be.equal(321);
            store.redo().get('id').should.be.equal(322);
        });

        it('should clear history', () => {
            store.setData('{"id": 123}');
            store.setData({id: 321});
            store.setData({id: 322});
            store.undo().get('id').should.be.equal(322);
            store.clear();
            store.getData().size.should.be.equal(0);
            store.undo().size.should.be.equal(0);
        });

    });

});
