import { expect } from 'chai';
import sinon from 'sinon';
import flatMap from 'lodash/flatMap';

import createStore from '../../../src/store';
import singleMiddleware from '../../../src/middlewares/single';

const dataGlobal = {
    initialGlobal: {
        value: 1
    }
};

const dataLocal1 = {
    local: {
        value: 2
    }
};

const dataLocal2 = {
    local: {
        something: 10
    }
};

describe('Middleware', () => {
    let globalStore;
    let store1;
    let store2;

    beforeEach(() => {
        globalStore = createStore(dataGlobal);
        store1 = createStore(dataLocal1);
        store2 = createStore(dataLocal2);
        const middleware = singleMiddleware(globalStore);

        store1 = store1.use(middleware);
        store2 = store2.use(middleware);
    });

    describe('Single', () => {
        it('should be changed according to initial data in local stores', () => {
            expect(globalStore.getData()).to.have.deep.property('initialGlobal.value', 1);
            expect(globalStore.getData()).to.have.deep.property('local.value', 2);
            expect(globalStore.getData()).to.have.deep.property('local.something', 10);
        });

        it('should be changed according to changed data in local stores', () => {
            const newStore = store1.dispatch((value) => ({ local: { value: value.local.value + 1 }}));
            expect(globalStore.getData()).to.have.deep.property('local.value', 3);
        });
    });
});
