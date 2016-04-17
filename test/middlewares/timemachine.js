import { expect } from 'chai';

import storeCreator from '../../src/store';
import timemachine from '../../src/middlewares/timemachine';

const data = {
    count: 0
};

describe('Timemachine middleware', () => {
    let Store;

    beforeEach(() => {
        Store = storeCreator();
    });

    it('should add additional methods to Store', () => {
        const store = new Store(data);
        const timemachineMiddleware = timemachine();
        expect(timemachineMiddleware.getTimeline()).to.exist;
        store.use(timemachineMiddleware);
        const resStore = store.dispatch((value) => ({ count: value.count + 1 }));

        expect(resStore.getData().count).to.be.equal(1);
        expect(resStore).to.include.keys('undo', 'redo');
        expect(resStore.undo).to.be.a('function');
        expect(resStore.redo).to.be.a('function');

        const nextResStore = resStore
            .dispatch((value) => ({ count: value.count + 10 }))
            .dispatch((value) => ({ count: value.count + 4 }));
        expect(nextResStore.getData().count).to.be.equal(15);
        nextResStore.undo();
        expect(nextResStore.getData().count).to.be.equal(11);
        nextResStore.undo();
        expect(nextResStore.getData().count).to.be.equal(1);
        nextResStore.undo();
        expect(nextResStore.getData().count).to.be.equal(1);

        nextResStore.redo();
        expect(nextResStore.getData().count).to.be.equal(11);
        nextResStore.redo();
        expect(nextResStore.getData().count).to.be.equal(15);
        nextResStore.redo();
        expect(nextResStore.getData().count).to.be.equal(15);
    });
});
