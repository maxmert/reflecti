/**
 * Purpose:
 * To have a global single store, but have an ability to subscribe and change the local ones.
 */

import merge from 'lodash/merge';

/* eslint-disable no-param-reassign */
export default function(globalStore) {
    return {
        data: (store) => {
            const globalData = {};

            // TODO: Perhaps merging all is not the best idea, because at some point we will need to remove some data
            // from global store because it was removed from the local one.
            merge(globalData, globalStore.getData(), store.getData());
            globalStore.getData = () => globalData;
            return store;
        }
    };
}

/* eslint-enable no-param-reassign */
