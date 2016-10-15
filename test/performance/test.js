import Benchmark from 'benchmark';

import Action from '../../action';
import createReflectiStore from '../../store';

import { createStore } from 'redux';
import counter from './reduxReducers';
const reduxStore = createStore(counter);

const suite = new Benchmark.Suite;

const store = createReflectiStore({ count: 0 });
const action = new Action(store, {
    plus: (value, toAdd) => ({ count: value.count + toAdd })
});

/* eslint-disable no-console */
suite
    .add('Reflecti', () => {
        action.plus(1);
    })
    .add('Redux', () => {
        reduxStore.dispatch({ type: 'INCREMENT' });
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    })
    .run({ async: true });

/* eslint-enable no-console */
