## Reflecti

A library to provide you flexible tools for data storage. You can easily add your own plugins if you want to add different behaviour.

This library was made because I very like redux, but I don't like some redux aspects (for example constants).

There are only two entities: **store** and **action**. **Store** contains data and provide some APIs for getting this data. **Action** doesn't know how and where to save data, but knows how to modify it.

### Store

On each data change current instance of the store returns new instance with new changed data inside. So this is immutable approach to store data. And you can easily chain those changes (see **dispatch** method below).

##### getData (getting current data)
Store expose _getData()_ method to get current data.

```js
import createStore from 'reflecti/store';

const initialData = {
    welcomeMessage: 'Hello my friend!'
};

const store = createStore(initialData);

console.log(store.getData()); // { welcomeMessage: 'Hello my friend!' }
```

##### dispatch (changing data)
**Attention!** using this method directly is an antipattern, please use **Actions** instead.
You need to pass a modifying function as a parameter to the dispatch, because store doesn't know how you want to modify data;

```js
import createStore from 'reflecti/store';

const initialData = {
    someValue: 5
};

const addFive = ({ someValue }) => ({ someValue: someValue + 5 });
const multiplyTen = ({ someValue }) => ({ someValue: someValue * 10 });

const store = createStore(initialData);

store.dispatch(addFive).dispatch(multiplyTen); // { someValue: 100 }
```

Or let's add more abstract function for adding and multiplying:

```js
import createStore from 'reflecti/store';

const initialData = {
    someValue: 5
};

const add = (valueToAdd) =>
    ({ someValue }) =>
        ({ someValue: someValue + valueToAdd });
const multiply = (valueToMultiply) =>
    ({ someValue }) =>
        ({ someValue: someValue * valueToMultiply });

const store = createStore(initialData);

store.dispatch(add(5)).dispatch(multiply(10)); // { someValue: 100 }
```


##### getPrevData (getting previous data)
After you dispatched, you still can get old data (data on previous _step_).

```js
// Same initializations, that were in previous example
store.dispatch(add(10)).getPrevData(); // { someValue: 5 }
```

### Store Middlewares
As you noticed, when you _dispatched_ store, you get a new store instance. That means a little problem, because the old reference to the store will be kept.

```js
import createStore from 'reflecti/store';

const initialData = {
    someValue: 4
};

const store = createStore(initialData);

console.log(store.getData()); // { someValue: 4 }

console.log(store.dispatch(add(3)).getData()); // { someValue: 7 }

// But if you will try to getData() in the store,
// you will get the same data
console.log(store.getData()); // { someValue: 4 }
```

So you will get the same data, because store is immutable. But each dispatch return a new store instance, so you can do something like that (if you don't want to keep old reference):

```js
store = store.dispatch(add(3));
console.log(store.getData()); // { someValue: 7 }
```

And what to do if you want to change store's behaviour? You can add middlewares.

#### Add middlewares

There are some middleware examples:
* Storage. Will keep same reference to the store, so no `store = store.dispatch(add(3))` anymore.
* Observable. Will create observable out of the store. Look at (RxJS)[https://github.com/Reactive-Extensions/RxJS].
* Single. Sync all stores with one global store.
* Time-mashine. Add undo/redo functionality to the store.

Let's add one middleware to the store.

##### Emitter middleware
```js
import createStore from 'reflecti/store';
import emitterMiddleware from 'reflecti/middlewares/emitter';

const store = createStore(5);
emitterMiddleware(store);

store.on('data', (data) => console.log(`new data is ${data}`));
store.dispatch((data) => data + 1); // output: new data is 6
```

##### Storage middleware
```js
import createStore from 'reflecti/store';
import storageMiddleware from 'reflecti/middlewares/storage';
const store = createStore(10);
storageMiddleware(store);


store.dispatch((value) => value - 4).dispatch((value) => value * 10);
// Now reference is kept, so you can use same variable, and there will be new value
// Before you needed to reassign:
// store = store.dispatch((value) => value - 4);
console.log(store.getData()); // 60
```

##### Observable middleware
```js
import createStore from 'reflecti/store';
import observableMiddleware from 'reflecti/middlewares/observable';
const store = createStore(10);
observableMiddleware(store);

const next = (value) => {
    console.log('Next', value);
    return value;
};

const subscription = store.subscribe(next, error);
store
    .dispatch((value) => value - 4) // output: Next 6
    .dispatch((value) => value * 10); // output: Next 60
```

##### Time-mashine middleware
```js
import createStore from 'reflecti/store';
import timeMashineMiddleware from 'reflecti/middlewares/time-mashine';
const store = createStore(10);
timeMashineMiddleware(store);

const newStore = store
    .dispatch((value) => value - 4)
    .dispatch((value) => value * 10); // 60

newStore.undo(); // 6
newStore.redo(); // 60
newStore.redo(); // 60
```

### Actions

Dispatch stores directly is an antipattern. To change store value use actions.

```js
import createStore from 'reflecti/store';
import Action from 'reflecti/action';
import storageMiddleware from 'reflecti/middlewares/storage';

const store = createStore({ count: 10 });
storageMiddleware(store); // To keep reference

const action = new Action(store, {
    plus: (storeValue, plusValue) => ({ count: storeValue.count + plusValue }),
    minus: (storeValue, minusValue) => ({ count: storeValue.count - minusValue })
});

action.plus(10).minus(5);
console.log(store.getData()); // 15

action.addMethod('divide', (storeValue, divideBy) => ({ count: storeValue.count / divideBy }));
action.divide(3);
console.log(store.getData()); // 5
```
