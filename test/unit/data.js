import createStore from '../../src/store';

const data = {
    count: 0
};

const dataText = {
    test: 'abc'
};

export function getStore(init, config) {
    return createStore(init || data, config);
}

export function getStoreText(init, config) {
    return createStore(init || dataText, config);
}

export const actionMethods = {
    plus: (value, plusValue) => ({ count: value.count + plusValue }),
    minus: (value, minusValue) => ({ count: value.count - minusValue })
};
