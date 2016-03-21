import Immutable from 'immutable';
import _ from 'lodash';
import should from 'should';
import Action from '../src/action.js';
import Store from '../src/store.js';

describe('Action', () => {

    let action;
    let store;
    let storeMethods;
    let methods;
    let props;
    let result;

    beforeEach(() => {
        methods = {
            set: {
                success: (data) => {
                    this.stores.test.data = data;
                }
            }
        };

        storeMethods = {
            set: {
                url: 'https://google.com/',
                method: 'GET',
                data: {
                    id: 123
                }
            }
        };

        props = {
            silent: true
        };

        store = new Store('test', storeMethods, props);
        action = new Action('test', methods, props);
    });

    describe('creating instance', () => {
        it('should throw an error if no <name> in constructor', () => {
            (() => {
                action = new Action();
            }).should.throw();
        });

        it('should throw an error if some of the methods has the same name, as reserved methods in the Action', () => {
            (() => {
                action = new Action('test', {
                    build: {}
                });
            }).should.throw();
        });

        it('should save all props', () => {
            action._props.silent.should.be.equal(true);
        });

        it('should create all methods', () => {
            should.exist(action.set);
        });

        it('should create methods with string declaration', () => {
            let action2 = new Action('test', ['set']);
            should.exist(action2.set);
        });

        it('should create methods with mixed declarations', () => {
            let action2 = new Action('test', ['set' , {
                del: {
                    success: _.noop
                }
            }]);
            should.exist(action2.set);
            should.exist(action2.del);
        });
    });

});
