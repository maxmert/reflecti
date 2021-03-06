import { expect } from 'chai';

import createStore from '../../../store';
import singleMiddleware from '../../../middlewares/single';

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

        store1.use(middleware);
        store2.use(middleware);

        store1.dispatch();
        store2.dispatch();
    });

    describe('Single', () => {
        it('should be changed according to initial data in local stores', () => {
            expect(globalStore.getData()).to.have.deep.property('initialGlobal.value', 1);
            expect(globalStore.getData()).to.have.deep.property('local.value', 2);
            expect(globalStore.getData()).to.have.deep.property('local.something', 10);
        });

        it('should be changed according to changed data in local stores', () => {
            store1.dispatch((value) => ({ local: { value: value.local.value + 1 } }));
            expect(globalStore.getData()).to.have.deep.property('local.value', 3);
        });
    });
});
