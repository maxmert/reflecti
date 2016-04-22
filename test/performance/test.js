import Benchmark from 'benchmark';

import Action from '../../src/action';
import createReflectiStore from '../../src/store';

import { createStore } from 'redux';
import counter from './reduxReducers';
const reduxStore = createStore(counter);

const suite = new Benchmark.Suite;

const store = createReflectiStore({ count: 0 });
const action = new Action(store, {
    plus: (value, toAdd) => ({ count: value.count + toAdd })
});

// add tests
suite
    .add('Reflecti', function() {
        action.plus(1);
    })
    .add('Redux', function() {
        reduxStore.dispatch({ type: 'INCREMENT' });
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: true });
