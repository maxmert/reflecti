import Immutable from 'immutable';
let _ = require('lodash');

export function required(REQUIRED, params) {
    let intersection = _.intersection(REQUIRED, _.keys(params));
    if (intersection.length < REQUIRED.length) {
        return _.difference(REQUIRED, intersection);
    }
    else {
        return false;
    }

}

export function reserved(RESERVED, params) {
    let difference = _.difference(RESERVED, _.keys(params));
    if (difference.length < RESERVED.length) {
        let keys = [];
        if (_.isObject(params)) {
            keys = _.keys(params);
        }
        else if (_.isArray(params)) {
            keys = params;
        }
        else if (_.isString(params)) {
            keys.push(params);
        }

        return _.difference(keys, difference);
    }
    else {
        return false;
    }
}

// TODO: Best solution for deep comparing keys in the object
export function difference(a, b, result) {
    _.forEach(a, function(value, key) {
        if (_.isObject(a[key])) {
            if (!_.isObject(b[key])) {
                result.push(key);
            }

            difference(a[key], b[key], result);
        }
        else {
            if (_.isObject(b[key])) {
                result.push(key);
            }

            if (!(key in b)) {
                result.push(key);
            }
        }
    });

    return result;
}

export function strings(...params) {
    let result = true;
    params.forEach(param => result = typeof param === 'string' && result);
    return result;
}

export function objects(...params) {
    let result = true;
    params.forEach(param => result = typeof param === 'string' && result);
    return result;
}

export function stringsOrNumbers(...params) {
    let result = true;

    params.forEach((param) => {
        result = (typeof param === 'string' || typeof param === 'object') && result;
    });

    return result;
}

export function numbers(...params) {
    let result = true;
    params.forEach(param => result = typeof param === 'number' && result);
    return result;
}

export function immutable(...params) {
    let result = true;
    params.forEach(param => result = ((param instanceof Immutable.List || param instanceof Immutable.Map || numbers.apply(params) || strings.apply(params)) && result));
    return result;
}
