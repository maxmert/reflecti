import Immutable from 'immutable';
import should from 'should';
import Continuum from '../src/continuum.js';
import _ from 'lodash';
import sinon from 'sinon';

describe('Continuum', () => {

    var continuum;
    var params;

    beforeEach(() => {
        continuum = new Continuum();
        continuum.build({
            stores: {
                get: _.noop
            }
        });
    });

    describe('rules', () => {
        it('should add rules', () => {
            continuum.rule('rule1', _.noop);
            continuum.rule('rule2', _.noop);

            continuum._rules.size.should.be.equal(2);
        });

        it('should not add rules with same names', () => {
            (() => {
                continuum.rule('rule1', _.noop);
                continuum.rule('rule1', _.noop);
            }).should.throw();
        });
    });

    describe('impulses', () => {
        it('should save impulses', () => {
            continuum.rule('rule', _.noop);
            continuum.impulse('rule', {
                continuum: '123'
            });

            continuum._continuum.size.should.be.equal(1);
        });

        it('should throw if there is no rule for the impulse', () => {
            continuum.rule('rule2', _.noop);

            (() => {
                continuum.impulse('rule', {
                    continuum: '123'
                });
            }).should.throw();
        });
    });

    describe('Big Bang', () => {
        it('should replay continuum', () => {
            continuum.rule('rule1', _.noop);
            continuum.rule('rule2', _.noop);

            continuum.impulse('rule1', {
                continuum: '1'
            });

            continuum.impulse('rule2', {
                continuum: '2'
            });

            continuum.impulse('rule1', {
                continuum: '1'
            });

            let rule1 = sinon.spy(continuum._rules.get('rule1'), 'callback');
            let rule2 = sinon.spy(continuum._rules.get('rule2'), 'callback');

            continuum.bigbang();
            continuum.next();
            continuum.next();
            continuum.next();

            rule1.withArgs({
                continuum: '1'
            }).calledTwice.should.be.equal(true);
            rule2.withArgs({
                continuum: '2'
            }).calledOnce.should.be.equal(true);
        });
    });

    describe('instance', () => {
        it('should export', () => {
            continuum.rule('rule1', _.noop);
            continuum.rule('rule2', _.noop);

            continuum.impulse('rule1', {
                continuum: '1'
            });

            continuum.impulse('rule2', {
                continuum: '2'
            });

            continuum.impulse('rule1', {
                continuum: '1'
            });

            let exportsContinuum = continuum.exports('json');

            exportsContinuum.continuum.length.should.be.equal(3);
            exportsContinuum.rules.rule1.name.should.be.equal('rule1');
            exportsContinuum.rules.rule2.name.should.be.equal('rule2');
        });

        it('should import', () => {
            continuum.rule('rule1', _.noop);
            continuum.rule('rule2', _.noop);

            continuum.impulse('rule1', {
                continuum: '1'
            });

            continuum.impulse('rule2', {
                continuum: '2'
            });

            continuum.impulse('rule1', {
                continuum: '1'
            });

            let exportsContinuum = continuum.exports('json');

            let continuum2 = new Continuum();
            continuum2.build({
                stores: {
                    get: _.noop
                }
            });

            continuum2.imports(exportsContinuum);
            continuum2._continuum.size.should.be.equal(3);
        });

        it('should throw if importing data types are wrong', () => {
            let exportsContinuum = {
                continuum: '123',
                rules: {}
            };

            let exportsContinuum2 = {
                continuum: [],
                rules: '123'
            };

            let continuum2 = new Continuum();
            continuum2.build({
                stores: {
                    get: _.noop
                }
            });

            (() => {
                continuum2.imports(exportsContinuum);
            }).should.throw();

            (() => {
                continuum2.imports(exportsContinuum2);
            }).should.throw();
        });

        it('should start and stop replaying', () => {
            continuum.rule('rule1', _.noop);
            continuum.rule('rule2', _.noop);

            continuum.impulse('rule1', {
                continuum: '1'
            });

            continuum.impulse('rule2', {
                continuum: '2'
            });

            continuum.impulse('rule1', {
                continuum: '1'
            });

            continuum.bigbang();
            continuum.isReplaying.should.be.true;
            continuum.stop();
            continuum.isReplaying.should.be.false;
        });
    });
});
