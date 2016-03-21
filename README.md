# Reflecti

Reflecti is a tool, that allows you to adapt any Javascript stack to a Flux paradigm. It just build a *context* with **Stores**, **Actions**, **Locales** and any custom context participators. After that you can propagate context to your components (views), subscribe for **Store** updates and call **Actions** to get data. Done. Easy.

## Structure
You have to operate with several definitions:
 * Application
     * Units
         * Stores
         * Actions
         * Locales
     * Context

Let's start from the top.

### Application
Basicaly Reflecti application is a context builder.
To define a new Reflecti Appliction do:
```js
import {App} from 'reflecti';
let context = new App('cc');
```

Reflecti Application has several methods:
```js
import {App} from 'reflecti';
// For initialData please look below
let context = new App('cc', initialData);

context.add(unit); // Add unit to the context
context.add(unit2);

// You can add any custom context to your context
let customContext = {smth: 'anything'};
context.set('smth', customContext);

// And after you add everything you need, build your context
return context.build();
```

#### Building application
You'll need a context builder on both Server and Client side.
```js
// context-builder.js
var contextBuilder = function(initialData) {
    var context = new Reflecti.App('cc', initialData);

    context.add(require('./units/core')(config));
    context.add(require('./units/user')(config));

    context.set('config', config);

    // request is required. This should be an isomorphic library that
    // performs requests and returns Promises
    context.set('request', request(config));

    // localeBuilder is required. This is library, that you use to build your locales
    context.set('localeBuilder', function(list) {
        var locale = cookies.get('locale');
        return new Polyglot({phrases: list[locale || 'en']});
    });

    return context;
};

module.exports = contextBuilder;
```

To get any data from the context you just do
```js
import context from './contextBuilder.js';

let context = context();
let actions = context.actions;

// Config is custom context participator
let config = context.config;
```

### Units
Units are containers, that allow you to decompose your business logic. For example Unit **Restaurant** should include all Actions, Stores and Locales related to the restaurant. And if you have specific (and probably not reusable) restaurant components, which can operate only restaurant data, then you should place them inside this unit folder.

Each Unit can be a separate repository if you'll understand that you can reuse it in other projects or application instances (very usefull if you are developing a global platform for different countries).

Let's define one (don't use a singleton, if you have server side rendering):
```js
import {Unit} from 'reflecti';
import UserStore from './store.js';
import UserAction from './actions.js';

export default function UnitUser() {
    let unit = new Unit('user');

    // Each Unit has an add method,
    // where you can pass Store, Action or Locale
    unit.add(UserStore());
    unit.add(UserAction());
    unit.add(UserLocale());

    return unit;
}
```
To include unit into the application context, use `context.add` method (see **Application** section).

### Actions
With **Reflecti** you should not set or get your data directly from the store. Instead you should use `actions`.
`Action` name and `Store` name **should be equal**. And methods names of the `Store` and `Action` **should be equal** either.
```js
import {Store, Action} from 'reflecti';

export function UserStore() {
    return new Store('user', {
        get: function(userId) {},
        set: function(userId) {}
    });
}

export function UserStore() {
    return new Action('user', {
        get: function(userId) {return userId},
        set: function(user) {return user}
    });
}
```
In case if `Action` and `Store` names and their methods names will not match, **Reflecti** build will fail with an error with explanation (so you will easy understand what's went wrong).

There are several ways to define an `Action`:
```js
import {Action} from 'reflecti';

// First way to do this
export function UserStore() {
    return new Action('user', {
        get: function(userId) {return userId},
        set: function(user) {return user}
    });
}

// Second way is to provide all methods names in array
// In that case action methods get and set would pass through all data:
// function(data) {
//  return data;
// }
export function UserStore() {
    return new Action('user', ['get', 'set']);
}

// Third way is mixed one
export function UserStore() {
    return new Action('user', ['get', 'update', {
        set: function(user) {}
    }]);
}
```

### Stores
Reflecti stores are flat, so it doesn't has any models inside. It fetches data (with isomorphic request), save everything it gets and emit **change** with immutable data. So you don't have to specify your data structure. But you can define a custom parsers to normalize data.

Lets define a Store:
```js
import {Store} from 'reflecti';

export default function UserStore() {
    return new Store('user', {
        // This Store will have method get
        get: {
            url: function(dataFromAction) {
                // dataFromAction – in the data, that you pass to the action actions.get('actionName').get(dataFromAction)
                return 'http://localhost:3000/api/v0.1/user';
            },

            // If you'll need to get some data in other stores
            // BEFORE fetching data in current one.
            // This will run those methods in stores IN PARALLEL
            // and will fetch data only after they all complete.
            before: {
                storeName: 'methodName',
                storeName2: 'methodName'
            }
            data: function(dataFromAction) {
                // Data, that you want to send within request
                //
                // dataFromAction – in the data, that you pass to the action actions.get('actionName').get(dataFromAction)
                //
                // You have an access to the whole application context through this.app
                // So if you'll define a router as a custom context,
                // you'll have an access to it right here.
                // Or you can get data from other stores like this:
                // this.app.stores.get('otherstore').data.get('id');
                return {
                    id: this.app.router.params.id
                };
            },
            method: 'GET'
        },

        // Let's define other method
        // that will just return existing Store's data
        getData: function() {
            return this.data;
        }
    },
    {
        // If you want to save and restore data on the client side
        // in some storage, you can specify 'sessionStorage' or 'localStorage'
        storage: 'sessionStorage'

        // If you set merge to true, then we always deep merge request result
        // with already existing data in the store.
        merge: true,

        // If you want to listen to other store events (for example 'update').
        // For example in one store TreeStore you fetch data from the server in the flat
        // structure. And in current store you want to keep already builded tree,
        // but you don't want to fetch it from the server again. In that case you need
        // to listen to the TreeStore 'update' event. Callback function will be binded
        // to the current store instance.
        flow: {
            TreeStore: {
                update: function(data) {}
            },
            storeName2: {
                update: function(data) {},
                error: function(data) {}
            }
        },

        // If you want to transform raw json data before save it in the current store
        // after request or flow function, just specify a transform function.
        // It will be called every time before `setData` method.
        transfrom: function(data) {
            return _.assign({}, data, {
                newField: 'newValue'
            });
        },

        // Default data for the store.
        // Will be wrapped with immutable
        default: {
            hello: 'hi'
        }
    });
}
```

You can subscribe on Store changes:
```js
context.stores.get('user').on('update', this.callback.bind(this));
```

Also you can set data explicitly in the store:
```js
    context.stores.get('user').setData({
        userName: 'Batman'
    },
    // And params here
    {
        silent: true, // don't emit changes if true; false by default
        merge: true // when you are setting data should merge new data with exiting in the store; false by default
    });
```

To clear the Store, it's history and set a default value (if there is one):
```js
    context.stores.get('user').clear();
```

#### Undo / Redo
You can undo or redo data inside your store. So when you manipulate data with `setData` method or just fetch the data, store keeps the previous state:
```js
var store = context.stores.get('user');

store.setData({
    userName: 'Robin'
});

store.setData({
    userName: 'Batman'
});

store.setData({
    userName: 'Superman'
});

console.log(store.data); // Will return immutable {userName: 'Superman'}
store.undo();
console.log(store.data); // Will return immutable {userName: 'Batman'}
store.undo();
console.log(store.data); // Will return immutable {userName: 'Robin'}
store.redo();
console.log(store.data); // Will return immutable {userName: 'Batman'}

// If you are back in time, you can rewrite the history
store.setData({
    userName: 'Batgirl'
});
console.log(store.data); // Will return immutable {userName: 'Batgirl'}
store.undo();
console.log(store.data); // Will return immutable {userName: 'Batman'}

// You can pass quantity of steps
store.undo(2);
```

### Locales
**(required if you have locales in `Units`)**
There is no support for localization in **Reflecti**. For that you should use third party libraries. What **Reflecti** does, it aggregates all locales from different `Units` in one json and pass this json to the `localeBuilder`. So, on the *application* level you should set a `localeBuilder`. For example we will use `Polyglot` for localization.
```js
var contextBuilder = function(config) {
    var context = new Reflecti.App('appName');

    context.add(require('./units/user')(config));
    context.add(require('./units/orders')(config));

    context.set('localeBuilder', function(json) {
        // Get locale name from cookies
        var locale = cookies.get('locale');

        // Use locale `en` by default
        return new Polyglot({phrases: json[locale || 'en']});
    });

    return context;
};
```

On the `Unit` level you need
```js
import {Unit} from 'reflecti';

export default function() {
    var Unit = new Reflecti.Unit('user');

    Unit.add(require('./locales'));

    return Unit;
}
```

In locales
```js
'use strict';

import {Locale} from 'reflecti';

export default function() {
    return new Locale('user',
    {
        en: require('./en.js')
    });
};
```

An finally `en.js`
```js
'use strict';

module.exports = {
    locale: 'en',
    language: 'English',
    auth: {
        login: 'Login',
        ssoRedirect: 'Redirecting to SSO service...'
    },
    user: 'User'
};
```

### Request (required)
Context participator that can return Promise and fetch data. We recommend you to use [request-promise](https://github.com/request/request-promise).
```js
import request from 'request-promise';

// `defaults` – defaults for request-promise library.
let requestParticipator = (defaults) => {
    return request.defaults(defaults);
}

context.set('request', requestParticipator(defaults));
```

### Fetcher
`Fetcher` do not fetch any data. `Fetcher` just can call `Actions` in sync or async way. Also `Fetcher` is an event emitter, so you can listen to it's events to show or hide a global loader.
For example we have two stores, where we need to fetch data in parallel.
```js
context.fetcher.push(['user.get', 'tasks.get']);
```

And if you want to fetch data synchronously
```js
context.fetcher.push(['user.get']);
context.fetcher.push(['tasks.get']);
```

If you need to pass some params to the `Action` method:
```js
context.fetcher.push(['user.get']);
context.fetcher.push([{
    'tasks.get': function() {
        // `this.app` contains all reflecti context
        return {
            userId: this.app.stores.get('user').get('id')
        };
    }
}]);
```

`Fetcher` events
* **progress** – actions called, data loading in progress or some actions in queue.
* **finished** – all actions called, data loaded, no actions in queue.


### Continuum
It's a global storage for all your `Stores`. It's *off* by default, and it saves all you application state history in one place. So at some point you can undo not on the `Store` level, but on the application level.

```js
context.params.continuum = true;
```

When do you need this? For example on your website user can't proceed to checkout. There is a button `Customer care help`. When user clicks on it, you export `Continuum` and send it to the customer care agent. Agent imports `Continuum` data and goes through all user steps from the beginning to the end (in that case application will not fetch data, it will use data you have in `Continuum`). Even more, you can use web socket for online help, so user will see everything what customer care agent does.

Again, it's *off* by default and you need to turn it on in **reflecti** params. If you want to save data not related to `Stores`, you need to define rules. For example if you want to replay properly user actions on your website, then you need to save all **router** calls. So you need to make *impulse* to continuum in the place where you perform routing:

```js
context.continuum.impulse('route', router);
```

And to be able to replay *impulses*, you need to define rules (you should do this before building **reflecti**, but after setting router)
```js
context.continuum.rule('route', function(router) {
    context.router.route(router.currentRouteName, router.params);
});
```

After **reflecti** will save all data from `Stores` and router to `Continuum`.

To export all data from `Continuum`:
```js
// 'string' is type of exported data; if you don't pass any params, then JSON
context.continuum.export('string');
```

To import data to `Continuum`:
```js
context.continuum.import(data);
```

To start replaying `Continuum`:
```js
// `start` – step number to start from
context.continuum.bigbang(start);

// `step` – number of steps
context.continuum.next(step);
context.continuum.previous(step);

// stop replaying, fetching data is on
context.continuum.stop();
```
