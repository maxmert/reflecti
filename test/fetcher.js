import Promise from 'bluebird';
import Immutable from 'immutable';
import should from 'should';
import Fetcher from '../src/fetcher.js';
import _ from 'lodash';
import sinon from 'sinon';

describe('Fetcher', () => {

    var fetcher;
    var params;
    var result;
    var actions;

    beforeEach(() => {
        result = 0;
        fetcher = new Fetcher();
        actions = new Map();
        actions.set('foo', {
            get: () => {
                result += 1;
                return Promise.resolve();
            },

            getAll: (number) => {
                result += number || 1;
                return Promise.resolve();
            },

            super: () => {
                result += 1;
                return Promise.resolve();
            }
        });
        fetcher.build({
            actions: actions
        });
    });

    describe('instance', () => {
        it('should validate actions', () => {
            (() => {
                fetcher.push(['foo.get', 123]);
            }).should.throw();

            (() => {
                fetcher.push([{
                    'foo.get': 'aaa'
                }, 'foo.get']);
            }).should.not.throw();
        });

        it('should add actions', () => {
            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher._queue.size.should.be.equal(1);
        });

        it('should not add dublicate of actions', () => {
            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher._queue.size.should.be.equal(1);
        });

        it('should set participators', () => {
            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher._participators.size.should.be.equal(2);
        });

        it('should not dublicate participators', () => {
            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher.push(['foo.get', 'foo.super']);
            fetcher.push(['foo.get', 'foo.super']);
            fetcher.push(['foo.get', 'foo.super']);
            fetcher._participators.size.should.be.equal(3);
            fetcher._queue.size.should.be.equal(2);
        });

        it('should remove participaters after finished fetch', (done) => {
            let actions = fetcher.app.actions;

            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher.push(['foo.get', 'foo.super']);
            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher.push(['foo.get', 'foo.super']);
            fetcher._participators.size.should.be.equal(3);

            fetcher.wait().then(() => {
                fetcher._participators.size.should.be.equal(0);
                done();
            });

        });

        it('should not trigger same actions several times', (done) => {
            let actions = fetcher.app.actions;

            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher.push(['foo.get', 'foo.super']);
            fetcher.push(['foo.get', 'foo.getAll']);
            fetcher.push(['foo.get', 'foo.super']);

            fetcher.wait().then(() => {
                result.should.be.equal(3);
                done();
            });

        });

        it('should add actions with arguments', () => {
            fetcher.push(['foo.get', {
                'foo.getAll': 20
            }]);
            fetcher._queue.size.should.be.equal(1);
            result.should.be.equal(21);
        });

        it('should add actions with functions as arguments', () => {
            fetcher.push(['foo.get', {
                'foo.getAll': function() {
                    return 30;
                }
            }]);
            fetcher._queue.size.should.be.equal(1);
            result.should.be.equal(31);
        });

        it('should not trigger actions if we have initial data, and should trigger after first render', (done) => {
            let fetcher2 = new Fetcher({
                initialData: {
                    items: new Immutable.Map({
                        hello: 1
                    }),
                    _props: {}
                },
                preventServerDuplications: false
            });
            let actions2 = new Map();
            actions2.set('foo', {
                get: () => {
                    result += 1;
                    return Promise.resolve();
                },

                getAll: () => {
                    result += 1;
                    return Promise.resolve();
                },

                super: () => {
                    result += 1;
                    return Promise.resolve();
                }
            });
            fetcher2.build({
                actions: actions2
            });

            let actions = fetcher2.app.actions;

            fetcher2.push(['foo.get', 'foo.getAll']);
            fetcher2.push(['foo.get', 'foo.super']);
            fetcher2.push(['foo.get', 'foo.getAll']);
            fetcher2.push(['foo.get', 'foo.super']);

            fetcher2.wait().then(() => {
                result.should.be.equal(0);

                fetcher2.push(['foo.get', 'foo.getAll']);
                fetcher2.wait().then(() => {
                    result.should.be.equal(2);
                    done();
                });
            });

        });

        it('should trigger actions if we have initial data, but shouldFetch return true', (done) => {
            let fetcher2 = new Fetcher({
                initialData: {
                    items: new Immutable.Map({
                        hello: 1
                    }),
                    _props: {
                        shouldFetch: () => {
                            return true;
                        }
                    }
                },
                preventServerDuplications: false
            });
            let actions2 = new Map();
            actions2.set('foo', {
                get: () => {
                    result += 1;
                    return Promise.resolve();
                },

                getAll: () => {
                    result += 1;
                    return Promise.resolve();
                },

                super: () => {
                    result += 1;
                    return Promise.resolve();
                }
            });
            fetcher2.build({
                actions: actions2
            });

            let actions = fetcher2.app.actions;

            fetcher2.push(['foo.get', 'foo.getAll']);
            fetcher2.push(['foo.get', 'foo.super']);
            fetcher2.push(['foo.get', 'foo.getAll']);
            fetcher2.push(['foo.get', 'foo.super']);

            fetcher2.wait().then(() => {
                result.should.be.equal(3);

                fetcher2.push(['foo.get', 'foo.getAll']);
                fetcher2.wait().then(() => {
                    result.should.be.equal(5);
                    done();
                });
            });

        });
    });

});
