import clone from 'lodash/clone';

export default function() {
    const timeline = [];
    let cursor = -1;

    const middleware = (store) => {
        const nextStore = clone(store);

        // FIXME: Clear next history, if we did undo before

        cursor += 1;

        nextStore.getData = () => timeline[cursor].getData();
        nextStore.undo = (steps = 1) => {
            cursor = cursor - steps >= 0 ? cursor - steps : 0;
        };
        nextStore.redo = (steps = 1) => {
            cursor = cursor + steps <= timeline.length - 1 ? cursor + steps : timeline.length - 1;
        };

        timeline[cursor] = store;

        return nextStore;
    };

    middleware.getTimeline = () => timeline;

    return middleware;
}
