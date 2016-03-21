import Immutable from 'immutable';
import should from 'should';
import TimeMachine from '../src/timemachine.js';

describe('TimeMachine', () => {

    var data;
    var params;

    beforeEach(() => {
        let immutable = Immutable.fromJS({
            first: {
                one: 1,
                two: 2
            },
            second: 2,
            third: {
                three: 3,
                four: 4
            }
        });
        data = new TimeMachine(immutable, 'test');
    });

    describe('creating instance', () => {
        it('should initialize a cursor', () => {
            data.cursor.get('second').should.be.equal(2);
        });
    });

    describe('cursor', () => {
        it('should move after adding new data', () => {
            let immutable = Immutable.fromJS({
                second: 10
            });
            data.push(immutable);
            data.cursor.get('second').should.be.equal(10);
            data.push(120);
            data.cursor.should.be.equal(120);
        });

        it('should rewind and forward', () => {
            let immutable = Immutable.fromJS({
                second: 10
            });
            let immutable2 = Immutable.fromJS({
                second: 12
            });
            data.push(immutable);
            data.push(immutable2);
            data.rewind(2);
            data.cursor.get('second').should.be.equal(2);
            data.forward(1);
            data.cursor.get('second').should.be.equal(10);
            data.forward(1);
            data.cursor.get('second').should.be.equal(12);
        });

        it('should rewrite history after the time travel', () => {
            let immutable = Immutable.fromJS({
                second: 10
            });
            let immutable2 = Immutable.fromJS({
                second: 12
            });
            let immutable3 = Immutable.fromJS({
                second: 22
            });
            data.push(immutable);
            data.push(immutable2);
            data.rewind(2);
            data.cursor.get('second').should.be.equal(2);
            data.forward(1);
            data.cursor.get('second').should.be.equal(10);
            data.forward(1);
            data.cursor.get('second').should.be.equal(12);
            data.rewind(1);
            data.push(immutable3);
            data.rewind(1);
            data.cursor.get('second').should.be.equal(10);
        });
    });
});
