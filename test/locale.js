import Immutable from 'immutable';
import should from 'should';
import Locale from '../src/locale.js';
import fetch from 'request-promise';

describe('Locale', () => {

    var locale;

    beforeEach(() => {

        locale = new Locale('test', {
            en: {
                hello: 'Hi'
            },
            ru: {
                hello: 'Привет'
            }
        });
    });

    describe('creating instance', () => {
        it('should throw an error if no <name> in constructor', () => {
            (() => {
                locale = new Locale();
            }).should.throw();
        });

        it('should throw an error if <name> has wrong type', () => {
            (() => {
                locale = new Locale(123);
            }).should.throw();
        });

        it('should throw an error if locales do not match', () => {
            (() => {
                locale = new Locale('test', {
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
                            ireland: 'Остров'
                        }
                    }
                });
            }).should.throw();
        });
    });

});
