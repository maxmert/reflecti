(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Redux"] = factory();
	else
		root["Redux"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _action = __webpack_require__(59);

	Object.defineProperty(exports, 'Action', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_action).default;
	  }
	});

	var _store = __webpack_require__(65);

	Object.defineProperty(exports, 'createStore', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_store).default;
	  }
	});

	var _emitter = __webpack_require__(60);

	Object.defineProperty(exports, 'emitterMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_emitter).default;
	  }
	});

	var _observable = __webpack_require__(61);

	Object.defineProperty(exports, 'observableMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_observable).default;
	  }
	});

	var _single = __webpack_require__(62);

	Object.defineProperty(exports, 'singleMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_single).default;
	  }
	});

	var _storage = __webpack_require__(63);

	Object.defineProperty(exports, 'storageMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_storage).default;
	  }
	});

	var _timeMashine = __webpack_require__(64);

	Object.defineProperty(exports, 'timeMashineMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_timeMashine).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(98);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(3);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(142);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(41),
	    baseKeys = __webpack_require__(89),
	    indexKeys = __webpack_require__(49),
	    isArrayLike = __webpack_require__(16),
	    isIndex = __webpack_require__(11),
	    isPrototype = __webpack_require__(25);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(129),
	    stackDelete = __webpack_require__(130),
	    stackGet = __webpack_require__(131),
	    stackHas = __webpack_require__(132),
	    stackSet = __webpack_require__(133);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isSymbol = __webpack_require__(27);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol') {
	    return true;
	  }
	  return !isArray(value) &&
	    (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}

	module.exports = isKey;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}

	module.exports = isKeyable;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(113),
	    isFunction = __webpack_require__(17),
	    isLength = __webpack_require__(18);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(3);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(86),
	    isObject = __webpack_require__(2),
	    isObjectLike = __webpack_require__(6);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(31);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(34);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];

	    assignValue(object, key, newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(55);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(18),
	    isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(124),
	    mapDelete = __webpack_require__(125),
	    mapGet = __webpack_require__(126),
	    mapHas = __webpack_require__(127),
	    mapSet = __webpack_require__(128);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;

	module.exports = MapCache;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(3);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignMergeValue;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}

	module.exports = assocDelete;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);

	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}

	module.exports = assocGet;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);

	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}

	module.exports = assocHas;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);

	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}

	module.exports = assocSet;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(8),
	    arrayEach = __webpack_require__(20),
	    assignValue = __webpack_require__(34),
	    baseAssign = __webpack_require__(79),
	    cloneBuffer = __webpack_require__(99),
	    copyArray = __webpack_require__(44),
	    copySymbols = __webpack_require__(106),
	    getAllKeys = __webpack_require__(112),
	    getTag = __webpack_require__(47),
	    initCloneArray = __webpack_require__(119),
	    initCloneByTag = __webpack_require__(120),
	    initCloneObject = __webpack_require__(121),
	    isArray = __webpack_require__(1),
	    isBuffer = __webpack_require__(141),
	    isHostObject = __webpack_require__(10),
	    isObject = __webpack_require__(2),
	    keys = __webpack_require__(7);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  // Recursively populate clone (susceptible to call stack limits).
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(43),
	    isKey = __webpack_require__(12);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(24);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    stringToPath = __webpack_require__(134);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(78);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var index = -1,
	      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isUnordered) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue ||
	              equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/** Built-in value references. */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	function getSymbols(object) {
	  // Coerce `object` to an object to avoid non-object errors in V8.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
	  return getOwnPropertySymbols(Object(object));
	}

	// Fallback for IE < 11.
	if (!getOwnPropertySymbols) {
	  getSymbols = function() {
	    return [];
	  };
	}

	module.exports = getSymbols;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(67),
	    Map = __webpack_require__(4),
	    Promise = __webpack_require__(69),
	    Set = __webpack_require__(71),
	    WeakMap = __webpack_require__(72),
	    toSource = __webpack_require__(54);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(14);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}

	module.exports = hashHas;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(96),
	    isArguments = __webpack_require__(26),
	    isArray = __webpack_require__(1),
	    isLength = __webpack_require__(18),
	    isString = __webpack_require__(57);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(16),
	    isObjectLike = __webpack_require__(6);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(21);

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent,
	 *  else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	module.exports = isEqual;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(90),
	    indexKeys = __webpack_require__(49),
	    isIndex = __webpack_require__(11),
	    isPrototype = __webpack_require__(25);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (store, methods) {
	    var _this = this;

	    // TODO: Check store and methods
	    var _self = this;
	    this.addMethod = function (methodName, method) {
	        return _this._addMethod(method, methodName);
	    };
	    this._getStore = function () {
	        return store;
	    };
	    this._addMethod = function (method, methodName) {
	        // TODO: Check if method name already exists
	        _self[methodName] = function () {
	            var _arguments = arguments;

	            store.dispatch(function (oldValue) {
	                /* eslint-disable prefer-rest-params */
	                // TODO: Think about better approach to improve performance
	                Array.prototype.unshift.call(_arguments, oldValue);
	                return method.apply(null, _arguments);

	                /* eslint-enable prefer-rest-params */
	            });
	            return _self;
	        };
	    };

	    (0, _forEach2.default)(methods, this._addMethod);

	    return this;
	};

	var _forEach = __webpack_require__(137);

	var _forEach2 = _interopRequireDefault(_forEach);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _events = __webpack_require__(66);

	var _events2 = _interopRequireDefault(_events);

	var _isEqual = __webpack_require__(56);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Purpose:
	 * To emit event if data changed.
	 */
	function _default(initialStore) {
	    var emitter = new _events2.default();

	    initialStore.use({
	        store: function store(_store) {
	            // TODO: Check existing methods?
	            _store.prototype.on = function (eventName, callback) {
	                return emitter.on(eventName, callback);
	            }; // eslint-disable-line
	            _store.prototype.off = function (eventName, callback) {
	                return emitter.removeListener(eventName, callback);
	            }; // eslint-disable-line
	            return _store;
	        },

	        data: function data(store) {
	            if (!(0, _isEqual2.default)(store.getData(), store.getPrevData())) {
	                emitter.emit('data', store.getData());
	            }
	            return store;
	        }
	    });
	}
	exports.default = _default;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _rx = __webpack_require__(154);

	var _rx2 = _interopRequireDefault(_rx);

	var _isEqual = __webpack_require__(56);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-param-reassign */
	/**
	 * Purpose:
	 * To provide event streams for the stores.
	 */

	function _default(initialStore) {
	    var subject = new _rx2.default.Subject();

	    initialStore.use({
	        store: function store(_store) {
	            _store.prototype.subscribe = function (next, error, completed) {
	                _store._onError = error;
	                return subject.subscribe(next, error, completed);
	            };
	        },

	        data: function data(store) {
	            if (!(0, _isEqual2.default)(store.getData(), store.getPrevData())) {
	                // If store observable disposed and we still setting to the store.
	                try {
	                    subject.onNext(store.getData());
	                } catch (e) {
	                    // TODO: Better error handling
	                    if (store._onError) {
	                        store._onError(e);
	                    }
	                }
	            }

	            return store;
	        }
	    });
	}

	/* eslint-enable no-param-reassign */
	exports.default = _default;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (globalStore) {
	    return {
	        data: function data(store) {
	            var globalData = {};

	            // TODO: Perhaps merging all is not the best idea, because at some point we will need to remove some data
	            // from global store because it was removed from the local one.
	            (0, _merge2.default)(globalData, globalStore.getData(), store.getData());
	            globalStore.getData = function () {
	                return globalData;
	            };
	            return store;
	        }
	    };
	};

	var _merge = __webpack_require__(145);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (initialStore) {
	    initialStore.use({
	        data: function data(store) {
	            // FIXME: Should I clone it? Or leave to have side effects by other middlewares?
	            Object.keys(store).forEach(function (key) {
	                return initialStore[key] = store[key];
	            }); // eslint-disable-line
	            return store;
	        }
	    });
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Purpose:
	 * To provide an ability for stores undo or redo things.
	 */

	/* eslint-disable no-param-reassign */
	function _default(initialStore) {
	    var cursor = -1;
	    var continuum = [];

	    initialStore.use({
	        store: function store(_store) {
	            _store.prototype.undo = function () {
	                var steps = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	                cursor = cursor - steps < 0 ? 0 : cursor - steps;
	            };

	            _store.prototype.redo = function () {
	                var steps = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	                cursor = cursor + steps > continuum.length - 1 ? continuum.length - 1 : cursor + steps;
	            };
	        },

	        data: function data(store) {
	            cursor += 1;
	            if (continuum.length > cursor) {
	                continuum = continuum.slice(0, cursor);
	            }

	            continuum.push(store.getData());

	            // FIXME: This is very slow, improve perfomance
	            store.getData = function () {
	                return continuum[cursor];
	            };

	            return store;
	        }
	    });
	}

	/* eslint-enable no-param-reassign */
	exports.default = _default;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (init) {
	    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    // TODO: Check config
	    var middlewares = config.middlewares;

	    // TODO: Check middlewares

	    var _middlewares = middlewares ? (0, _clone2.default)(middlewares) : [];
	    var applyMiddleware = function applyMiddleware(result, middleware) {
	        result = middleware(result); // eslint-disable-line
	        return result;
	    };

	    function Store(value, oldValue) {
	        this.getData = function () {
	            return value;
	        };
	        this.getPrevData = function () {
	            return oldValue;
	        };
	        this.dispatch = function () {
	            var method = arguments.length <= 0 || arguments[0] === undefined ? function (val) {
	                return val;
	            } : arguments[0];
	            return _middlewares.reduce(applyMiddleware, new Store(method(value), value));
	        };
	    }

	    Store.prototype.use = function (middleware) {
	        // TODO: Check middlewares
	        if (middleware.store) {
	            middleware.store(Store);
	        }
	        if (middleware.data) {
	            _middlewares.push(middleware.data);
	        }
	    };

	    return _middlewares.reduce(applyMiddleware, new Store(init));
	};

	var _clone = __webpack_require__(135);

	var _clone2 = _interopRequireDefault(_clone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 66 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(3);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(14);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}

	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

	module.exports = Hash;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(3);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(3);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(3);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(3);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `Map#set` because it doesn't return the map instance in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(23),
	    keys = __webpack_require__(7);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(83),
	    createBaseEach = __webpack_require__(108);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(109);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(82),
	    keys = __webpack_require__(7);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(77),
	    isArray = __webpack_require__(1);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object)
	    ? result
	    : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(8),
	    equalArrays = __webpack_require__(45),
	    equalByTag = __webpack_require__(110),
	    equalObjects = __webpack_require__(111),
	    getTag = __webpack_require__(47),
	    isArray = __webpack_require__(1),
	    isHostObject = __webpack_require__(10),
	    isTypedArray = __webpack_require__(28);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(8),
	    baseIsEqual = __webpack_require__(21);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(91),
	    baseMatchesProperty = __webpack_require__(92),
	    identity = __webpack_require__(140),
	    isArray = __webpack_require__(1),
	    property = __webpack_require__(146);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(70),
	    iteratorToArray = __webpack_require__(123);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	module.exports = baseKeysIn;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(87),
	    getMatchData = __webpack_require__(114),
	    matchesStrictComparable = __webpack_require__(52);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(21),
	    get = __webpack_require__(138),
	    hasIn = __webpack_require__(139),
	    isKey = __webpack_require__(12),
	    isStrictComparable = __webpack_require__(50),
	    matchesStrictComparable = __webpack_require__(52);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(path, srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(8),
	    arrayEach = __webpack_require__(20),
	    assignMergeValue = __webpack_require__(33),
	    baseMergeDeep = __webpack_require__(94),
	    isArray = __webpack_require__(1),
	    isObject = __webpack_require__(2),
	    isTypedArray = __webpack_require__(28),
	    keysIn = __webpack_require__(58);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = keysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	module.exports = baseMerge;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(33),
	    baseClone = __webpack_require__(39),
	    copyArray = __webpack_require__(44),
	    isArguments = __webpack_require__(26),
	    isArray = __webpack_require__(1),
	    isArrayLikeObject = __webpack_require__(55),
	    isFunction = __webpack_require__(17),
	    isObject = __webpack_require__(2),
	    isPlainObject = __webpack_require__(143),
	    isTypedArray = __webpack_require__(28),
	    toPlainObject = __webpack_require__(151);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  stack.set(srcValue, newValue);

	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	  }
	  stack['delete'](srcValue);
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(40);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(76);

	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the new array of key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}

	module.exports = baseToPairs;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(22);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(73),
	    arrayReduce = __webpack_require__(32),
	    mapToArray = __webpack_require__(51);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(74),
	    arrayReduce = __webpack_require__(32),
	    setToArray = __webpack_require__(53);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(22);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(23),
	    getSymbols = __webpack_require__(46);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(122),
	    rest = __webpack_require__(147);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = typeof customizer == 'function'
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(16);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    Uint8Array = __webpack_require__(31),
	    equalArrays = __webpack_require__(45),
	    mapToArray = __webpack_require__(51),
	    setToArray = __webpack_require__(53);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);

	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(41),
	    keys = __webpack_require__(7);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(84),
	    getSymbols = __webpack_require__(46),
	    keys = __webpack_require__(7);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(42);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(50),
	    toPairs = __webpack_require__(150);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(43),
	    isArguments = __webpack_require__(26),
	    isArray = __webpack_require__(1),
	    isIndex = __webpack_require__(11),
	    isKey = __webpack_require__(12),
	    isLength = __webpack_require__(18),
	    isString = __webpack_require__(57);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = path[index];
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(48);

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}

	module.exports = hashDelete;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(14);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(14);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}

	module.exports = hashSet;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(22),
	    cloneDataView = __webpack_require__(100),
	    cloneMap = __webpack_require__(101),
	    cloneRegExp = __webpack_require__(102),
	    cloneSet = __webpack_require__(103),
	    cloneSymbol = __webpack_require__(104),
	    cloneTypedArray = __webpack_require__(105);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(80),
	    getPrototype = __webpack_require__(24),
	    isPrototype = __webpack_require__(25);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15),
	    isArrayLike = __webpack_require__(16),
	    isIndex = __webpack_require__(11),
	    isObject = __webpack_require__(2);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	module.exports = iteratorToArray;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(68),
	    Map = __webpack_require__(4);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}

	module.exports = mapClear;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(4),
	    assocDelete = __webpack_require__(35),
	    hashDelete = __webpack_require__(116),
	    isKeyable = __webpack_require__(13);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}

	module.exports = mapDelete;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(4),
	    assocGet = __webpack_require__(36),
	    hashGet = __webpack_require__(117),
	    isKeyable = __webpack_require__(13);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}

	module.exports = mapGet;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(4),
	    assocHas = __webpack_require__(37),
	    hashHas = __webpack_require__(48),
	    isKeyable = __webpack_require__(13);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}

	module.exports = mapHas;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(4),
	    assocSet = __webpack_require__(38),
	    hashSet = __webpack_require__(118),
	    isKeyable = __webpack_require__(13);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}

	module.exports = mapSet;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}

	module.exports = stackClear;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(35);

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(36);

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocGet(array, key) : data.map.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(37);

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocHas(array, key) : data.map.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(30),
	    assocSet = __webpack_require__(38);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;

	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(144),
	    toString = __webpack_require__(152);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(39);

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, false, true);
	}

	module.exports = clone;


/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var getter = _.constant(object);
	 *
	 * getter() === object;
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(20),
	    baseEach = __webpack_require__(81),
	    baseIteratee = __webpack_require__(88),
	    isArray = __webpack_require__(1);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  return (typeof iteratee == 'function' && isArray(collection))
	    ? arrayEach(collection, iteratee)
	    : baseEach(collection, baseIteratee(iteratee));
	}

	module.exports = forEach;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(40);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(85),
	    hasPath = __webpack_require__(115);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var constant = __webpack_require__(136),
	    root = __webpack_require__(3);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = (freeModule && freeModule.exports === freeExports)
	  ? freeExports
	  : undefined;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = !Buffer ? constant(false) : function(value) {
	  return value instanceof Buffer;
	};

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module)))

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(17),
	    isHostObject = __webpack_require__(10),
	    isObject = __webpack_require__(2),
	    toSource = __webpack_require__(54);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(24),
	    isHostObject = __webpack_require__(10),
	    isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(30);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoizing function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(93),
	    createAssigner = __webpack_require__(107);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively.Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	module.exports = merge;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(42),
	    basePropertyDeep = __webpack_require__(95),
	    isKey = __webpack_require__(12);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(75),
	    toInteger = __webpack_require__(148);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(149);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(17),
	    isObject = __webpack_require__(2),
	    isSymbol = __webpack_require__(27);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(97),
	    keys = __webpack_require__(7);

	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	function toPairs(object) {
	  return baseToPairs(object, keys(object));
	}

	module.exports = toPairs;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(23),
	    keysIn = __webpack_require__(58);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    isSymbol = __webpack_require__(27);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toString;


/***/ },
/* 153 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global, process) {// Copyright (c) Microsoft, All rights reserved. See License.txt in the project root for license information.

	;(function (undefined) {

	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  function checkGlobal(value) {
	    return (value && value.Object === Object) ? value : null;
	  }

	  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;
	  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;
	  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global === 'object' && global);
	  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	  var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : null;
	  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();

	  var Rx = {
	    internals: {},
	    config: {
	      Promise: root.Promise
	    },
	    helpers: { }
	  };

	  // Defaults
	  var noop = Rx.helpers.noop = function () { },
	    identity = Rx.helpers.identity = function (x) { return x; },
	    defaultNow = Rx.helpers.defaultNow = Date.now,
	    defaultComparer = Rx.helpers.defaultComparer = function (x, y) { return isEqual(x, y); },
	    defaultSubComparer = Rx.helpers.defaultSubComparer = function (x, y) { return x > y ? 1 : (x < y ? -1 : 0); },
	    defaultKeySerializer = Rx.helpers.defaultKeySerializer = function (x) { return x.toString(); },
	    defaultError = Rx.helpers.defaultError = function (err) { throw err; },
	    isPromise = Rx.helpers.isPromise = function (p) { return !!p && typeof p.subscribe !== 'function' && typeof p.then === 'function'; },
	    isFunction = Rx.helpers.isFunction = (function () {

	      var isFn = function (value) {
	        return typeof value == 'function' || false;
	      };

	      // fallback for older versions of Chrome and Safari
	      if (isFn(/x/)) {
	        isFn = function(value) {
	          return typeof value == 'function' && toString.call(value) == '[object Function]';
	        };
	      }

	      return isFn;
	    }());

	  function cloneArray(arr) { for(var a = [], i = 0, len = arr.length; i < len; i++) { a.push(arr[i]); } return a;}

	  var errorObj = {e: {}};
	  
	  function tryCatcherGen(tryCatchTarget) {
	    return function tryCatcher() {
	      try {
	        return tryCatchTarget.apply(this, arguments);
	      } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	      }
	    };
	  }

	  var tryCatch = Rx.internals.tryCatch = function tryCatch(fn) {
	    if (!isFunction(fn)) { throw new TypeError('fn must be a function'); }
	    return tryCatcherGen(fn);
	  };

	  function thrower(e) {
	    throw e;
	  }

	  Rx.config.longStackSupport = false;
	  var hasStacks = false, stacks = tryCatch(function () { throw new Error(); })();
	  hasStacks = !!stacks.e && !!stacks.e.stack;

	  // All code after this point will be filtered from stack traces reported by RxJS
	  var rStartingLine = captureLine(), rFileName;

	  var STACK_JUMP_SEPARATOR = 'From previous event:';

	  function makeStackTraceLong(error, observable) {
	    // If possible, transform the error stack trace by removing Node and RxJS
	    // cruft, then concatenating with the stack trace of `observable`.
	    if (hasStacks &&
	        observable.stack &&
	        typeof error === 'object' &&
	        error !== null &&
	        error.stack &&
	        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
	    ) {
	      var stacks = [];
	      for (var o = observable; !!o; o = o.source) {
	        if (o.stack) {
	          stacks.unshift(o.stack);
	        }
	      }
	      stacks.unshift(error.stack);

	      var concatedStacks = stacks.join('\n' + STACK_JUMP_SEPARATOR + '\n');
	      error.stack = filterStackString(concatedStacks);
	    }
	  }

	  function filterStackString(stackString) {
	    var lines = stackString.split('\n'), desiredLines = [];
	    for (var i = 0, len = lines.length; i < len; i++) {
	      var line = lines[i];

	      if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	        desiredLines.push(line);
	      }
	    }
	    return desiredLines.join('\n');
	  }

	  function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
	    if (!fileNameAndLineNumber) {
	      return false;
	    }
	    var fileName = fileNameAndLineNumber[0], lineNumber = fileNameAndLineNumber[1];

	    return fileName === rFileName &&
	      lineNumber >= rStartingLine &&
	      lineNumber <= rEndingLine;
	  }

	  function isNodeFrame(stackLine) {
	    return stackLine.indexOf('(module.js:') !== -1 ||
	      stackLine.indexOf('(node.js:') !== -1;
	  }

	  function captureLine() {
	    if (!hasStacks) { return; }

	    try {
	      throw new Error();
	    } catch (e) {
	      var lines = e.stack.split('\n');
	      var firstLine = lines[0].indexOf('@') > 0 ? lines[1] : lines[2];
	      var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	      if (!fileNameAndLineNumber) { return; }

	      rFileName = fileNameAndLineNumber[0];
	      return fileNameAndLineNumber[1];
	    }
	  }

	  function getFileNameAndLineNumber(stackLine) {
	    // Named functions: 'at functionName (filename:lineNumber:columnNumber)'
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) { return [attempt1[1], Number(attempt1[2])]; }

	    // Anonymous functions: 'at filename:lineNumber:columnNumber'
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) { return [attempt2[1], Number(attempt2[2])]; }

	    // Firefox style: 'function@filename:lineNumber or @filename:lineNumber'
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) { return [attempt3[1], Number(attempt3[2])]; }
	  }

	  var EmptyError = Rx.EmptyError = function() {
	    this.message = 'Sequence contains no elements.';
	    Error.call(this);
	  };
	  EmptyError.prototype = Object.create(Error.prototype);
	  EmptyError.prototype.name = 'EmptyError';

	  var ObjectDisposedError = Rx.ObjectDisposedError = function() {
	    this.message = 'Object has been disposed';
	    Error.call(this);
	  };
	  ObjectDisposedError.prototype = Object.create(Error.prototype);
	  ObjectDisposedError.prototype.name = 'ObjectDisposedError';

	  var ArgumentOutOfRangeError = Rx.ArgumentOutOfRangeError = function () {
	    this.message = 'Argument out of range';
	    Error.call(this);
	  };
	  ArgumentOutOfRangeError.prototype = Object.create(Error.prototype);
	  ArgumentOutOfRangeError.prototype.name = 'ArgumentOutOfRangeError';

	  var NotSupportedError = Rx.NotSupportedError = function (message) {
	    this.message = message || 'This operation is not supported';
	    Error.call(this);
	  };
	  NotSupportedError.prototype = Object.create(Error.prototype);
	  NotSupportedError.prototype.name = 'NotSupportedError';

	  var NotImplementedError = Rx.NotImplementedError = function (message) {
	    this.message = message || 'This operation is not implemented';
	    Error.call(this);
	  };
	  NotImplementedError.prototype = Object.create(Error.prototype);
	  NotImplementedError.prototype.name = 'NotImplementedError';

	  var notImplemented = Rx.helpers.notImplemented = function () {
	    throw new NotImplementedError();
	  };

	  var notSupported = Rx.helpers.notSupported = function () {
	    throw new NotSupportedError();
	  };

	  // Shim in iterator support
	  var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) ||
	    '_es6shim_iterator_';
	  // Bug for mozilla version
	  if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }

	  var doneEnumerator = Rx.doneEnumerator = { done: true, value: undefined };

	  var isIterable = Rx.helpers.isIterable = function (o) {
	    return o && o[$iterator$] !== undefined;
	  };

	  var isArrayLike = Rx.helpers.isArrayLike = function (o) {
	    return o && o.length !== undefined;
	  };

	  Rx.helpers.iterator = $iterator$;

	  var bindCallback = Rx.internals.bindCallback = function (func, thisArg, argCount) {
	    if (typeof thisArg === 'undefined') { return func; }
	    switch(argCount) {
	      case 0:
	        return function() {
	          return func.call(thisArg)
	        };
	      case 1:
	        return function(arg) {
	          return func.call(thisArg, arg);
	        };
	      case 2:
	        return function(value, index) {
	          return func.call(thisArg, value, index);
	        };
	      case 3:
	        return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	    }

	    return function() {
	      return func.apply(thisArg, arguments);
	    };
	  };

	  /** Used to determine if values are of the language type Object */
	  var dontEnums = ['toString',
	    'toLocaleString',
	    'valueOf',
	    'hasOwnProperty',
	    'isPrototypeOf',
	    'propertyIsEnumerable',
	    'constructor'],
	  dontEnumsLength = dontEnums.length;

	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	var objectProto = Object.prototype,
	    hasOwnProperty = objectProto.hasOwnProperty,
	    objToString = objectProto.toString,
	    MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

	var keys = Object.keys || (function() {
	    var hasOwnProperty = Object.prototype.hasOwnProperty,
	        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
	        dontEnums = [
	          'toString',
	          'toLocaleString',
	          'valueOf',
	          'hasOwnProperty',
	          'isPrototypeOf',
	          'propertyIsEnumerable',
	          'constructor'
	        ],
	        dontEnumsLength = dontEnums.length;

	    return function(obj) {
	      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
	        throw new TypeError('Object.keys called on non-object');
	      }

	      var result = [], prop, i;

	      for (prop in obj) {
	        if (hasOwnProperty.call(obj, prop)) {
	          result.push(prop);
	        }
	      }

	      if (hasDontEnumBug) {
	        for (i = 0; i < dontEnumsLength; i++) {
	          if (hasOwnProperty.call(obj, dontEnums[i])) {
	            result.push(dontEnums[i]);
	          }
	        }
	      }
	      return result;
	    };
	  }());

	function equalObjects(object, other, equalFunc, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength !== othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength, key;
	  while (index--) {
	    key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result;

	    if (!(result === undefined ? equalFunc(objValue, othValue, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key === 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    if (objCtor !== othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor === 'function' && objCtor instanceof objCtor &&
	          typeof othCtor === 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}

	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      return +object === +other;

	    case errorTag:
	      return object.name === other.name && object.message === other.message;

	    case numberTag:
	      return (object !== +object) ?
	        other !== +other :
	        object === +other;

	    case regexpTag:
	    case stringTag:
	      return object === (other + '');
	  }
	  return false;
	}

	var isObject = Rx.internals.isObject = function(value) {
	  var type = typeof value;
	  return !!value && (type === 'object' || type === 'function');
	};

	function isObjectLike(value) {
	  return !!value && typeof value === 'object';
	}

	function isLength(value) {
	  return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
	}

	var isHostObject = (function() {
	  try {
	    Object({ 'toString': 0 } + '');
	  } catch(e) {
	    return function() { return false; };
	  }
	  return function(value) {
	    return typeof value.toString !== 'function' && typeof (value + '') === 'string';
	  };
	}());

	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}

	var isArray = Array.isArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) === arrayTag;
	};

	function arraySome (array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	function equalArrays(array, other, equalFunc, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength !== othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result;

	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}

	function baseIsEqualDeep(object, other, equalFunc, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag === argsTag) {
	      objTag = objectTag;
	    } else if (objTag !== objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag === argsTag) {
	      othTag = objectTag;
	    }
	  }
	  var objIsObj = objTag === objectTag && !isHostObject(object),
	      othIsObj = othTag === objectTag && !isHostObject(other),
	      isSameTag = objTag === othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] === object) {
	      return stackB[length] === other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);

	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, isLoose, stackA, stackB);

	  stackA.pop();
	  stackB.pop();

	  return result;
	}

	function baseIsEqual(value, other, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, isLoose, stackA, stackB);
	}

	var isEqual = Rx.internals.isEqual = function (value, other) {
	  return baseIsEqual(value, other);
	};

	  var hasProp = {}.hasOwnProperty,
	      slice = Array.prototype.slice;

	  var inherits = Rx.internals.inherits = function (child, parent) {
	    function __() { this.constructor = child; }
	    __.prototype = parent.prototype;
	    child.prototype = new __();
	  };

	  var addProperties = Rx.internals.addProperties = function (obj) {
	    for(var sources = [], i = 1, len = arguments.length; i < len; i++) { sources.push(arguments[i]); }
	    for (var idx = 0, ln = sources.length; idx < ln; idx++) {
	      var source = sources[idx];
	      for (var prop in source) {
	        obj[prop] = source[prop];
	      }
	    }
	  };

	  // Rx Utils
	  var addRef = Rx.internals.addRef = function (xs, r) {
	    return new AnonymousObservable(function (observer) {
	      return new BinaryDisposable(r.getDisposable(), xs.subscribe(observer));
	    });
	  };

	  function arrayInitialize(count, factory) {
	    var a = new Array(count);
	    for (var i = 0; i < count; i++) {
	      a[i] = factory();
	    }
	    return a;
	  }

	  function IndexedItem(id, value) {
	    this.id = id;
	    this.value = value;
	  }

	  IndexedItem.prototype.compareTo = function (other) {
	    var c = this.value.compareTo(other.value);
	    c === 0 && (c = this.id - other.id);
	    return c;
	  };

	  var PriorityQueue = Rx.internals.PriorityQueue = function (capacity) {
	    this.items = new Array(capacity);
	    this.length = 0;
	  };

	  var priorityProto = PriorityQueue.prototype;
	  priorityProto.isHigherPriority = function (left, right) {
	    return this.items[left].compareTo(this.items[right]) < 0;
	  };

	  priorityProto.percolate = function (index) {
	    if (index >= this.length || index < 0) { return; }
	    var parent = index - 1 >> 1;
	    if (parent < 0 || parent === index) { return; }
	    if (this.isHigherPriority(index, parent)) {
	      var temp = this.items[index];
	      this.items[index] = this.items[parent];
	      this.items[parent] = temp;
	      this.percolate(parent);
	    }
	  };

	  priorityProto.heapify = function (index) {
	    +index || (index = 0);
	    if (index >= this.length || index < 0) { return; }
	    var left = 2 * index + 1,
	        right = 2 * index + 2,
	        first = index;
	    if (left < this.length && this.isHigherPriority(left, first)) {
	      first = left;
	    }
	    if (right < this.length && this.isHigherPriority(right, first)) {
	      first = right;
	    }
	    if (first !== index) {
	      var temp = this.items[index];
	      this.items[index] = this.items[first];
	      this.items[first] = temp;
	      this.heapify(first);
	    }
	  };

	  priorityProto.peek = function () { return this.items[0].value; };

	  priorityProto.removeAt = function (index) {
	    this.items[index] = this.items[--this.length];
	    this.items[this.length] = undefined;
	    this.heapify();
	  };

	  priorityProto.dequeue = function () {
	    var result = this.peek();
	    this.removeAt(0);
	    return result;
	  };

	  priorityProto.enqueue = function (item) {
	    var index = this.length++;
	    this.items[index] = new IndexedItem(PriorityQueue.count++, item);
	    this.percolate(index);
	  };

	  priorityProto.remove = function (item) {
	    for (var i = 0; i < this.length; i++) {
	      if (this.items[i].value === item) {
	        this.removeAt(i);
	        return true;
	      }
	    }
	    return false;
	  };
	  PriorityQueue.count = 0;

	  /**
	   * Represents a group of disposable resources that are disposed together.
	   * @constructor
	   */
	  var CompositeDisposable = Rx.CompositeDisposable = function () {
	    var args = [], i, len;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	    } else {
	      len = arguments.length;
	      args = new Array(len);
	      for(i = 0; i < len; i++) { args[i] = arguments[i]; }
	    }
	    this.disposables = args;
	    this.isDisposed = false;
	    this.length = args.length;
	  };

	  var CompositeDisposablePrototype = CompositeDisposable.prototype;

	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Mixed} item Disposable to add.
	   */
	  CompositeDisposablePrototype.add = function (item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	      this.length++;
	    }
	  };

	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Mixed} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */
	  CompositeDisposablePrototype.remove = function (item) {
	    var shouldDispose = false;
	    if (!this.isDisposed) {
	      var idx = this.disposables.indexOf(item);
	      if (idx !== -1) {
	        shouldDispose = true;
	        this.disposables.splice(idx, 1);
	        this.length--;
	        item.dispose();
	      }
	    }
	    return shouldDispose;
	  };

	  /**
	   *  Disposes all disposables in the group and removes them from the group.
	   */
	  CompositeDisposablePrototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var len = this.disposables.length, currentDisposables = new Array(len);
	      for(var i = 0; i < len; i++) { currentDisposables[i] = this.disposables[i]; }
	      this.disposables = [];
	      this.length = 0;

	      for (i = 0; i < len; i++) {
	        currentDisposables[i].dispose();
	      }
	    }
	  };

	  /**
	   * Provides a set of static methods for creating Disposables.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   */
	  var Disposable = Rx.Disposable = function (action) {
	    this.isDisposed = false;
	    this.action = action || noop;
	  };

	  /** Performs the task of cleaning up resources. */
	  Disposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.action();
	      this.isDisposed = true;
	    }
	  };

	  /**
	   * Creates a disposable object that invokes the specified action when disposed.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   * @return {Disposable} The disposable object that runs the given action upon disposal.
	   */
	  var disposableCreate = Disposable.create = function (action) { return new Disposable(action); };

	  /**
	   * Gets the disposable that does nothing when disposed.
	   */
	  var disposableEmpty = Disposable.empty = { dispose: noop };

	  /**
	   * Validates whether the given object is a disposable
	   * @param {Object} Object to test whether it has a dispose method
	   * @returns {Boolean} true if a disposable object, else false.
	   */
	  var isDisposable = Disposable.isDisposable = function (d) {
	    return d && isFunction(d.dispose);
	  };

	  var checkDisposed = Disposable.checkDisposed = function (disposable) {
	    if (disposable.isDisposed) { throw new ObjectDisposedError(); }
	  };

	  var disposableFixup = Disposable._fixup = function (result) {
	    return isDisposable(result) ? result : disposableEmpty;
	  };

	  // Single assignment
	  var SingleAssignmentDisposable = Rx.SingleAssignmentDisposable = function () {
	    this.isDisposed = false;
	    this.current = null;
	  };
	  SingleAssignmentDisposable.prototype.getDisposable = function () {
	    return this.current;
	  };
	  SingleAssignmentDisposable.prototype.setDisposable = function (value) {
	    if (this.current) { throw new Error('Disposable has already been assigned'); }
	    var shouldDispose = this.isDisposed;
	    !shouldDispose && (this.current = value);
	    shouldDispose && value && value.dispose();
	  };
	  SingleAssignmentDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old = this.current;
	      this.current = null;
	      old && old.dispose();
	    }
	  };

	  // Multiple assignment disposable
	  var SerialDisposable = Rx.SerialDisposable = function () {
	    this.isDisposed = false;
	    this.current = null;
	  };
	  SerialDisposable.prototype.getDisposable = function () {
	    return this.current;
	  };
	  SerialDisposable.prototype.setDisposable = function (value) {
	    var shouldDispose = this.isDisposed;
	    if (!shouldDispose) {
	      var old = this.current;
	      this.current = value;
	    }
	    old && old.dispose();
	    shouldDispose && value && value.dispose();
	  };
	  SerialDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old = this.current;
	      this.current = null;
	    }
	    old && old.dispose();
	  };

	  var BinaryDisposable = Rx.BinaryDisposable = function (first, second) {
	    this._first = first;
	    this._second = second;
	    this.isDisposed = false;
	  };

	  BinaryDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old1 = this._first;
	      this._first = null;
	      old1 && old1.dispose();
	      var old2 = this._second;
	      this._second = null;
	      old2 && old2.dispose();
	    }
	  };

	  var NAryDisposable = Rx.NAryDisposable = function (disposables) {
	    this._disposables = disposables;
	    this.isDisposed = false;
	  };

	  NAryDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      for (var i = 0, len = this._disposables.length; i < len; i++) {
	        this._disposables[i].dispose();
	      }
	      this._disposables.length = 0;
	    }
	  };

	  /**
	   * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
	   */
	  var RefCountDisposable = Rx.RefCountDisposable = (function () {

	    function InnerDisposable(disposable) {
	      this.disposable = disposable;
	      this.disposable.count++;
	      this.isInnerDisposed = false;
	    }

	    InnerDisposable.prototype.dispose = function () {
	      if (!this.disposable.isDisposed && !this.isInnerDisposed) {
	        this.isInnerDisposed = true;
	        this.disposable.count--;
	        if (this.disposable.count === 0 && this.disposable.isPrimaryDisposed) {
	          this.disposable.isDisposed = true;
	          this.disposable.underlyingDisposable.dispose();
	        }
	      }
	    };

	    /**
	     * Initializes a new instance of the RefCountDisposable with the specified disposable.
	     * @constructor
	     * @param {Disposable} disposable Underlying disposable.
	      */
	    function RefCountDisposable(disposable) {
	      this.underlyingDisposable = disposable;
	      this.isDisposed = false;
	      this.isPrimaryDisposed = false;
	      this.count = 0;
	    }

	    /**
	     * Disposes the underlying disposable only when all dependent disposables have been disposed
	     */
	    RefCountDisposable.prototype.dispose = function () {
	      if (!this.isDisposed && !this.isPrimaryDisposed) {
	        this.isPrimaryDisposed = true;
	        if (this.count === 0) {
	          this.isDisposed = true;
	          this.underlyingDisposable.dispose();
	        }
	      }
	    };

	    /**
	     * Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.
	     * @returns {Disposable} A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.
	     */
	    RefCountDisposable.prototype.getDisposable = function () {
	      return this.isDisposed ? disposableEmpty : new InnerDisposable(this);
	    };

	    return RefCountDisposable;
	  })();

	  function ScheduledDisposable(scheduler, disposable) {
	    this.scheduler = scheduler;
	    this.disposable = disposable;
	    this.isDisposed = false;
	  }

	  function scheduleItem(s, self) {
	    if (!self.isDisposed) {
	      self.isDisposed = true;
	      self.disposable.dispose();
	    }
	  }

	  ScheduledDisposable.prototype.dispose = function () {
	    this.scheduler.schedule(this, scheduleItem);
	  };

	  var ScheduledItem = Rx.internals.ScheduledItem = function (scheduler, state, action, dueTime, comparer) {
	    this.scheduler = scheduler;
	    this.state = state;
	    this.action = action;
	    this.dueTime = dueTime;
	    this.comparer = comparer || defaultSubComparer;
	    this.disposable = new SingleAssignmentDisposable();
	  };

	  ScheduledItem.prototype.invoke = function () {
	    this.disposable.setDisposable(this.invokeCore());
	  };

	  ScheduledItem.prototype.compareTo = function (other) {
	    return this.comparer(this.dueTime, other.dueTime);
	  };

	  ScheduledItem.prototype.isCancelled = function () {
	    return this.disposable.isDisposed;
	  };

	  ScheduledItem.prototype.invokeCore = function () {
	    return disposableFixup(this.action(this.scheduler, this.state));
	  };

	  /** Provides a set of static properties to access commonly used schedulers. */
	  var Scheduler = Rx.Scheduler = (function () {

	    function Scheduler() { }

	    /** Determines whether the given object is a scheduler */
	    Scheduler.isScheduler = function (s) {
	      return s instanceof Scheduler;
	    };

	    var schedulerProto = Scheduler.prototype;

	    /**
	   * Schedules an action to be executed.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */
	    schedulerProto.schedule = function (state, action) {
	      throw new NotImplementedError();
	    };

	  /**
	   * Schedules an action to be executed after dueTime.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @param {Number} dueTime Relative time after which to execute the action.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */
	    schedulerProto.scheduleFuture = function (state, dueTime, action) {
	      var dt = dueTime;
	      dt instanceof Date && (dt = dt - this.now());
	      dt = Scheduler.normalize(dt);

	      if (dt === 0) { return this.schedule(state, action); }

	      return this._scheduleFuture(state, dt, action);
	    };

	    schedulerProto._scheduleFuture = function (state, dueTime, action) {
	      throw new NotImplementedError();
	    };

	    /** Gets the current time according to the local machine's system clock. */
	    Scheduler.now = defaultNow;

	    /** Gets the current time according to the local machine's system clock. */
	    Scheduler.prototype.now = defaultNow;

	    /**
	     * Normalizes the specified TimeSpan value to a positive value.
	     * @param {Number} timeSpan The time span value to normalize.
	     * @returns {Number} The specified TimeSpan value if it is zero or positive; otherwise, 0
	     */
	    Scheduler.normalize = function (timeSpan) {
	      timeSpan < 0 && (timeSpan = 0);
	      return timeSpan;
	    };

	    return Scheduler;
	  }());

	  var normalizeTime = Scheduler.normalize, isScheduler = Scheduler.isScheduler;

	  (function (schedulerProto) {

	    function invokeRecImmediate(scheduler, pair) {
	      var state = pair[0], action = pair[1], group = new CompositeDisposable();
	      action(state, innerAction);
	      return group;

	      function innerAction(state2) {
	        var isAdded = false, isDone = false;

	        var d = scheduler.schedule(state2, scheduleWork);
	        if (!isDone) {
	          group.add(d);
	          isAdded = true;
	        }

	        function scheduleWork(_, state3) {
	          if (isAdded) {
	            group.remove(d);
	          } else {
	            isDone = true;
	          }
	          action(state3, innerAction);
	          return disposableEmpty;
	        }
	      }
	    }

	    function invokeRecDate(scheduler, pair) {
	      var state = pair[0], action = pair[1], group = new CompositeDisposable();
	      action(state, innerAction);
	      return group;

	      function innerAction(state2, dueTime1) {
	        var isAdded = false, isDone = false;

	        var d = scheduler.scheduleFuture(state2, dueTime1, scheduleWork);
	        if (!isDone) {
	          group.add(d);
	          isAdded = true;
	        }

	        function scheduleWork(_, state3) {
	          if (isAdded) {
	            group.remove(d);
	          } else {
	            isDone = true;
	          }
	          action(state3, innerAction);
	          return disposableEmpty;
	        }
	      }
	    }

	    /**
	     * Schedules an action to be executed recursively.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in recursive invocation state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    schedulerProto.scheduleRecursive = function (state, action) {
	      return this.schedule([state, action], invokeRecImmediate);
	    };

	    /**
	     * Schedules an action to be executed recursively after a specified relative or absolute due time.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in the recursive due time and invocation state.
	     * @param {Number | Date} dueTime Relative or absolute time after which to execute the action for the first time.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    schedulerProto.scheduleRecursiveFuture = function (state, dueTime, action) {
	      return this.scheduleFuture([state, action], dueTime, invokeRecDate);
	    };

	  }(Scheduler.prototype));

	  (function (schedulerProto) {

	    /**
	     * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be scheduled using window.setInterval for the base implementation.
	     * @param {Mixed} state Initial state passed to the action upon the first iteration.
	     * @param {Number} period Period for running the work periodically.
	     * @param {Function} action Action to be executed, potentially updating the state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
	     */
	    schedulerProto.schedulePeriodic = function(state, period, action) {
	      if (typeof root.setInterval === 'undefined') { throw new NotSupportedError(); }
	      period = normalizeTime(period);
	      var s = state, id = root.setInterval(function () { s = action(s); }, period);
	      return disposableCreate(function () { root.clearInterval(id); });
	    };

	  }(Scheduler.prototype));

	  (function (schedulerProto) {
	    /**
	     * Returns a scheduler that wraps the original scheduler, adding exception handling for scheduled actions.
	     * @param {Function} handler Handler that's run if an exception is caught. The exception will be rethrown if the handler returns false.
	     * @returns {Scheduler} Wrapper around the original scheduler, enforcing exception handling.
	     */
	    schedulerProto.catchError = schedulerProto['catch'] = function (handler) {
	      return new CatchScheduler(this, handler);
	    };
	  }(Scheduler.prototype));

	  var SchedulePeriodicRecursive = Rx.internals.SchedulePeriodicRecursive = (function () {
	    function createTick(self) {
	      return function tick(command, recurse) {
	        recurse(0, self._period);
	        var state = tryCatch(self._action)(self._state);
	        if (state === errorObj) {
	          self._cancel.dispose();
	          thrower(state.e);
	        }
	        self._state = state;
	      };
	    }

	    function SchedulePeriodicRecursive(scheduler, state, period, action) {
	      this._scheduler = scheduler;
	      this._state = state;
	      this._period = period;
	      this._action = action;
	    }

	    SchedulePeriodicRecursive.prototype.start = function () {
	      var d = new SingleAssignmentDisposable();
	      this._cancel = d;
	      d.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, createTick(this)));

	      return d;
	    };

	    return SchedulePeriodicRecursive;
	  }());

	  /** Gets a scheduler that schedules work immediately on the current thread. */
	   var ImmediateScheduler = (function (__super__) {
	    inherits(ImmediateScheduler, __super__);
	    function ImmediateScheduler() {
	      __super__.call(this);
	    }

	    ImmediateScheduler.prototype.schedule = function (state, action) {
	      return disposableFixup(action(this, state));
	    };

	    return ImmediateScheduler;
	  }(Scheduler));

	  var immediateScheduler = Scheduler.immediate = new ImmediateScheduler();

	  /**
	   * Gets a scheduler that schedules work as soon as possible on the current thread.
	   */
	  var CurrentThreadScheduler = (function (__super__) {
	    var queue;

	    function runTrampoline () {
	      while (queue.length > 0) {
	        var item = queue.dequeue();
	        !item.isCancelled() && item.invoke();
	      }
	    }

	    inherits(CurrentThreadScheduler, __super__);
	    function CurrentThreadScheduler() {
	      __super__.call(this);
	    }

	    CurrentThreadScheduler.prototype.schedule = function (state, action) {
	      var si = new ScheduledItem(this, state, action, this.now());

	      if (!queue) {
	        queue = new PriorityQueue(4);
	        queue.enqueue(si);

	        var result = tryCatch(runTrampoline)();
	        queue = null;
	        if (result === errorObj) { thrower(result.e); }
	      } else {
	        queue.enqueue(si);
	      }
	      return si.disposable;
	    };

	    CurrentThreadScheduler.prototype.scheduleRequired = function () { return !queue; };

	    return CurrentThreadScheduler;
	  }(Scheduler));

	  var currentThreadScheduler = Scheduler.currentThread = new CurrentThreadScheduler();

	  var scheduleMethod, clearMethod;

	  var localTimer = (function () {
	    var localSetTimeout, localClearTimeout = noop;
	    if (!!root.setTimeout) {
	      localSetTimeout = root.setTimeout;
	      localClearTimeout = root.clearTimeout;
	    } else if (!!root.WScript) {
	      localSetTimeout = function (fn, time) {
	        root.WScript.Sleep(time);
	        fn();
	      };
	    } else {
	      throw new NotSupportedError();
	    }

	    return {
	      setTimeout: localSetTimeout,
	      clearTimeout: localClearTimeout
	    };
	  }());
	  var localSetTimeout = localTimer.setTimeout,
	    localClearTimeout = localTimer.clearTimeout;

	  (function () {

	    var nextHandle = 1, tasksByHandle = {}, currentlyRunning = false;

	    clearMethod = function (handle) {
	      delete tasksByHandle[handle];
	    };

	    function runTask(handle) {
	      if (currentlyRunning) {
	        localSetTimeout(function () { runTask(handle); }, 0);
	      } else {
	        var task = tasksByHandle[handle];
	        if (task) {
	          currentlyRunning = true;
	          var result = tryCatch(task)();
	          clearMethod(handle);
	          currentlyRunning = false;
	          if (result === errorObj) { thrower(result.e); }
	        }
	      }
	    }

	    var reNative = new RegExp('^' +
	      String(toString)
	        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	        .replace(/toString| for [^\]]+/g, '.*?') + '$'
	    );

	    var setImmediate = typeof (setImmediate = freeGlobal && moduleExports && freeGlobal.setImmediate) == 'function' &&
	      !reNative.test(setImmediate) && setImmediate;

	    function postMessageSupported () {
	      // Ensure not in a worker
	      if (!root.postMessage || root.importScripts) { return false; }
	      var isAsync = false, oldHandler = root.onmessage;
	      // Test for async
	      root.onmessage = function () { isAsync = true; };
	      root.postMessage('', '*');
	      root.onmessage = oldHandler;

	      return isAsync;
	    }

	    // Use in order, setImmediate, nextTick, postMessage, MessageChannel, script readystatechanged, setTimeout
	    if (isFunction(setImmediate)) {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        setImmediate(function () { runTask(id); });

	        return id;
	      };
	    } else if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        process.nextTick(function () { runTask(id); });

	        return id;
	      };
	    } else if (postMessageSupported()) {
	      var MSG_PREFIX = 'ms.rx.schedule' + Math.random();

	      var onGlobalPostMessage = function (event) {
	        // Only if we're a match to avoid any other global events
	        if (typeof event.data === 'string' && event.data.substring(0, MSG_PREFIX.length) === MSG_PREFIX) {
	          runTask(event.data.substring(MSG_PREFIX.length));
	        }
	      };

	      root.addEventListener('message', onGlobalPostMessage, false);

	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        root.postMessage(MSG_PREFIX + id, '*');
	        return id;
	      };
	    } else if (!!root.MessageChannel) {
	      var channel = new root.MessageChannel();

	      channel.port1.onmessage = function (e) { runTask(e.data); };

	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        channel.port2.postMessage(id);
	        return id;
	      };
	    } else if ('document' in root && 'onreadystatechange' in root.document.createElement('script')) {

	      scheduleMethod = function (action) {
	        var scriptElement = root.document.createElement('script');
	        var id = nextHandle++;
	        tasksByHandle[id] = action;

	        scriptElement.onreadystatechange = function () {
	          runTask(id);
	          scriptElement.onreadystatechange = null;
	          scriptElement.parentNode.removeChild(scriptElement);
	          scriptElement = null;
	        };
	        root.document.documentElement.appendChild(scriptElement);
	        return id;
	      };

	    } else {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        localSetTimeout(function () {
	          runTask(id);
	        }, 0);

	        return id;
	      };
	    }
	  }());

	  /**
	   * Gets a scheduler that schedules work via a timed callback based upon platform.
	   */
	   var DefaultScheduler = (function (__super__) {
	     inherits(DefaultScheduler, __super__);
	     function DefaultScheduler() {
	       __super__.call(this);
	     }

	     function scheduleAction(disposable, action, scheduler, state) {
	       return function schedule() {
	         disposable.setDisposable(Disposable._fixup(action(scheduler, state)));
	       };
	     }

	     function ClearDisposable(id) {
	       this._id = id;
	       this.isDisposed = false;
	     }

	     ClearDisposable.prototype.dispose = function () {
	       if (!this.isDisposed) {
	         this.isDisposed = true;
	         clearMethod(this._id);
	       }
	     };

	     function LocalClearDisposable(id) {
	       this._id = id;
	       this.isDisposed = false;
	     }

	     LocalClearDisposable.prototype.dispose = function () {
	       if (!this.isDisposed) {
	         this.isDisposed = true;
	         localClearTimeout(this._id);
	       }
	     };

	    DefaultScheduler.prototype.schedule = function (state, action) {
	      var disposable = new SingleAssignmentDisposable(),
	          id = scheduleMethod(scheduleAction(disposable, action, this, state));
	      return new BinaryDisposable(disposable, new ClearDisposable(id));
	    };

	    DefaultScheduler.prototype._scheduleFuture = function (state, dueTime, action) {
	      if (dueTime === 0) { return this.schedule(state, action); }
	      var disposable = new SingleAssignmentDisposable(),
	          id = localSetTimeout(scheduleAction(disposable, action, this, state), dueTime);
	      return new BinaryDisposable(disposable, new LocalClearDisposable(id));
	    };

	    function scheduleLongRunning(state, action, disposable) {
	      return function () { action(state, disposable); };
	    }

	    DefaultScheduler.prototype.scheduleLongRunning = function (state, action) {
	      var disposable = disposableCreate(noop);
	      scheduleMethod(scheduleLongRunning(state, action, disposable));
	      return disposable;
	    };

	    return DefaultScheduler;
	  }(Scheduler));

	  var defaultScheduler = Scheduler['default'] = Scheduler.async = new DefaultScheduler();

	  var CatchScheduler = (function (__super__) {
	    inherits(CatchScheduler, __super__);

	    function CatchScheduler(scheduler, handler) {
	      this._scheduler = scheduler;
	      this._handler = handler;
	      this._recursiveOriginal = null;
	      this._recursiveWrapper = null;
	      __super__.call(this);
	    }

	    CatchScheduler.prototype.schedule = function (state, action) {
	      return this._scheduler.schedule(state, this._wrap(action));
	    };

	    CatchScheduler.prototype._scheduleFuture = function (state, dueTime, action) {
	      return this._scheduler.schedule(state, dueTime, this._wrap(action));
	    };

	    CatchScheduler.prototype.now = function () { return this._scheduler.now(); };

	    CatchScheduler.prototype._clone = function (scheduler) {
	        return new CatchScheduler(scheduler, this._handler);
	    };

	    CatchScheduler.prototype._wrap = function (action) {
	      var parent = this;
	      return function (self, state) {
	        var res = tryCatch(action)(parent._getRecursiveWrapper(self), state);
	        if (res === errorObj) {
	          if (!parent._handler(res.e)) { thrower(res.e); }
	          return disposableEmpty;
	        }
	        return disposableFixup(res);
	      };
	    };

	    CatchScheduler.prototype._getRecursiveWrapper = function (scheduler) {
	      if (this._recursiveOriginal !== scheduler) {
	        this._recursiveOriginal = scheduler;
	        var wrapper = this._clone(scheduler);
	        wrapper._recursiveOriginal = scheduler;
	        wrapper._recursiveWrapper = wrapper;
	        this._recursiveWrapper = wrapper;
	      }
	      return this._recursiveWrapper;
	    };

	    CatchScheduler.prototype.schedulePeriodic = function (state, period, action) {
	      var self = this, failed = false, d = new SingleAssignmentDisposable();

	      d.setDisposable(this._scheduler.schedulePeriodic(state, period, function (state1) {
	        if (failed) { return null; }
	        var res = tryCatch(action)(state1);
	        if (res === errorObj) {
	          failed = true;
	          if (!self._handler(res.e)) { thrower(res.e); }
	          d.dispose();
	          return null;
	        }
	        return res;
	      }));

	      return d;
	    };

	    return CatchScheduler;
	  }(Scheduler));

	  /**
	   *  Represents a notification to an observer.
	   */
	  var Notification = Rx.Notification = (function () {
	    function Notification() {

	    }

	    Notification.prototype._accept = function (onNext, onError, onCompleted) {
	      throw new NotImplementedError();
	    };

	    Notification.prototype._acceptObserver = function (onNext, onError, onCompleted) {
	      throw new NotImplementedError();
	    };

	    /**
	     * Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.
	     * @param {Function | Observer} observerOrOnNext Function to invoke for an OnNext notification or Observer to invoke the notification on..
	     * @param {Function} onError Function to invoke for an OnError notification.
	     * @param {Function} onCompleted Function to invoke for an OnCompleted notification.
	     * @returns {Any} Result produced by the observation.
	     */
	    Notification.prototype.accept = function (observerOrOnNext, onError, onCompleted) {
	      return observerOrOnNext && typeof observerOrOnNext === 'object' ?
	        this._acceptObserver(observerOrOnNext) :
	        this._accept(observerOrOnNext, onError, onCompleted);
	    };

	    /**
	     * Returns an observable sequence with a single notification.
	     *
	     * @memberOf Notifications
	     * @param {Scheduler} [scheduler] Scheduler to send out the notification calls on.
	     * @returns {Observable} The observable sequence that surfaces the behavior of the notification upon subscription.
	     */
	    Notification.prototype.toObservable = function (scheduler) {
	      var self = this;
	      isScheduler(scheduler) || (scheduler = immediateScheduler);
	      return new AnonymousObservable(function (o) {
	        return scheduler.schedule(self, function (_, notification) {
	          notification._acceptObserver(o);
	          notification.kind === 'N' && o.onCompleted();
	        });
	      });
	    };

	    return Notification;
	  })();

	  var OnNextNotification = (function (__super__) {
	    inherits(OnNextNotification, __super__);
	    function OnNextNotification(value) {
	      this.value = value;
	      this.kind = 'N';
	    }

	    OnNextNotification.prototype._accept = function (onNext) {
	      return onNext(this.value);
	    };

	    OnNextNotification.prototype._acceptObserver = function (o) {
	      return o.onNext(this.value);
	    };

	    OnNextNotification.prototype.toString = function () {
	      return 'OnNext(' + this.value + ')';
	    };

	    return OnNextNotification;
	  }(Notification));

	  var OnErrorNotification = (function (__super__) {
	    inherits(OnErrorNotification, __super__);
	    function OnErrorNotification(error) {
	      this.error = error;
	      this.kind = 'E';
	    }

	    OnErrorNotification.prototype._accept = function (onNext, onError) {
	      return onError(this.error);
	    };

	    OnErrorNotification.prototype._acceptObserver = function (o) {
	      return o.onError(this.error);
	    };

	    OnErrorNotification.prototype.toString = function () {
	      return 'OnError(' + this.error + ')';
	    };

	    return OnErrorNotification;
	  }(Notification));

	  var OnCompletedNotification = (function (__super__) {
	    inherits(OnCompletedNotification, __super__);
	    function OnCompletedNotification() {
	      this.kind = 'C';
	    }

	    OnCompletedNotification.prototype._accept = function (onNext, onError, onCompleted) {
	      return onCompleted();
	    };

	    OnCompletedNotification.prototype._acceptObserver = function (o) {
	      return o.onCompleted();
	    };

	    OnCompletedNotification.prototype.toString = function () {
	      return 'OnCompleted()';
	    };

	    return OnCompletedNotification;
	  }(Notification));

	  /**
	   * Creates an object that represents an OnNext notification to an observer.
	   * @param {Any} value The value contained in the notification.
	   * @returns {Notification} The OnNext notification containing the value.
	   */
	  var notificationCreateOnNext = Notification.createOnNext = function (value) {
	    return new OnNextNotification(value);
	  };

	  /**
	   * Creates an object that represents an OnError notification to an observer.
	   * @param {Any} error The exception contained in the notification.
	   * @returns {Notification} The OnError notification containing the exception.
	   */
	  var notificationCreateOnError = Notification.createOnError = function (error) {
	    return new OnErrorNotification(error);
	  };

	  /**
	   * Creates an object that represents an OnCompleted notification to an observer.
	   * @returns {Notification} The OnCompleted notification.
	   */
	  var notificationCreateOnCompleted = Notification.createOnCompleted = function () {
	    return new OnCompletedNotification();
	  };

	  /**
	   * Supports push-style iteration over an observable sequence.
	   */
	  var Observer = Rx.Observer = function () { };

	  /**
	   *  Creates a notification callback from an observer.
	   * @returns The action that forwards its input notification to the underlying observer.
	   */
	  Observer.prototype.toNotifier = function () {
	    var observer = this;
	    return function (n) { return n.accept(observer); };
	  };

	  /**
	   *  Hides the identity of an observer.
	   * @returns An observer that hides the identity of the specified observer.
	   */
	  Observer.prototype.asObserver = function () {
	    var self = this;
	    return new AnonymousObserver(
	      function (x) { self.onNext(x); },
	      function (err) { self.onError(err); },
	      function () { self.onCompleted(); });
	  };

	  /**
	   *  Checks access to the observer for grammar violations. This includes checking for multiple OnError or OnCompleted calls, as well as reentrancy in any of the observer methods.
	   *  If a violation is detected, an Error is thrown from the offending observer method call.
	   * @returns An observer that checks callbacks invocations against the observer grammar and, if the checks pass, forwards those to the specified observer.
	   */
	  Observer.prototype.checked = function () { return new CheckedObserver(this); };

	  /**
	   *  Creates an observer from the specified OnNext, along with optional OnError, and OnCompleted actions.
	   * @param {Function} [onNext] Observer's OnNext action implementation.
	   * @param {Function} [onError] Observer's OnError action implementation.
	   * @param {Function} [onCompleted] Observer's OnCompleted action implementation.
	   * @returns {Observer} The observer object implemented using the given actions.
	   */
	  var observerCreate = Observer.create = function (onNext, onError, onCompleted) {
	    onNext || (onNext = noop);
	    onError || (onError = defaultError);
	    onCompleted || (onCompleted = noop);
	    return new AnonymousObserver(onNext, onError, onCompleted);
	  };

	  /**
	   *  Creates an observer from a notification callback.
	   * @param {Function} handler Action that handles a notification.
	   * @returns The observer object that invokes the specified handler using a notification corresponding to each message it receives.
	   */
	  Observer.fromNotifier = function (handler, thisArg) {
	    var cb = bindCallback(handler, thisArg, 1);
	    return new AnonymousObserver(function (x) {
	      return cb(notificationCreateOnNext(x));
	    }, function (e) {
	      return cb(notificationCreateOnError(e));
	    }, function () {
	      return cb(notificationCreateOnCompleted());
	    });
	  };

	  /**
	   * Schedules the invocation of observer methods on the given scheduler.
	   * @param {Scheduler} scheduler Scheduler to schedule observer messages on.
	   * @returns {Observer} Observer whose messages are scheduled on the given scheduler.
	   */
	  Observer.prototype.notifyOn = function (scheduler) {
	    return new ObserveOnObserver(scheduler, this);
	  };

	  Observer.prototype.makeSafe = function(disposable) {
	    return new AnonymousSafeObserver(this._onNext, this._onError, this._onCompleted, disposable);
	  };

	  /**
	   * Abstract base class for implementations of the Observer class.
	   * This base class enforces the grammar of observers where OnError and OnCompleted are terminal messages.
	   */
	  var AbstractObserver = Rx.internals.AbstractObserver = (function (__super__) {
	    inherits(AbstractObserver, __super__);

	    /**
	     * Creates a new observer in a non-stopped state.
	     */
	    function AbstractObserver() {
	      this.isStopped = false;
	    }

	    // Must be implemented by other observers
	    AbstractObserver.prototype.next = notImplemented;
	    AbstractObserver.prototype.error = notImplemented;
	    AbstractObserver.prototype.completed = notImplemented;

	    /**
	     * Notifies the observer of a new element in the sequence.
	     * @param {Any} value Next element in the sequence.
	     */
	    AbstractObserver.prototype.onNext = function (value) {
	      !this.isStopped && this.next(value);
	    };

	    /**
	     * Notifies the observer that an exception has occurred.
	     * @param {Any} error The error that has occurred.
	     */
	    AbstractObserver.prototype.onError = function (error) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.error(error);
	      }
	    };

	    /**
	     * Notifies the observer of the end of the sequence.
	     */
	    AbstractObserver.prototype.onCompleted = function () {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.completed();
	      }
	    };

	    /**
	     * Disposes the observer, causing it to transition to the stopped state.
	     */
	    AbstractObserver.prototype.dispose = function () { this.isStopped = true; };

	    AbstractObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.error(e);
	        return true;
	      }

	      return false;
	    };

	    return AbstractObserver;
	  }(Observer));

	  /**
	   * Class to create an Observer instance from delegate-based implementations of the on* methods.
	   */
	  var AnonymousObserver = Rx.AnonymousObserver = (function (__super__) {
	    inherits(AnonymousObserver, __super__);

	    /**
	     * Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
	     * @param {Any} onNext Observer's OnNext action implementation.
	     * @param {Any} onError Observer's OnError action implementation.
	     * @param {Any} onCompleted Observer's OnCompleted action implementation.
	     */
	    function AnonymousObserver(onNext, onError, onCompleted) {
	      __super__.call(this);
	      this._onNext = onNext;
	      this._onError = onError;
	      this._onCompleted = onCompleted;
	    }

	    /**
	     * Calls the onNext action.
	     * @param {Any} value Next element in the sequence.
	     */
	    AnonymousObserver.prototype.next = function (value) {
	      this._onNext(value);
	    };

	    /**
	     * Calls the onError action.
	     * @param {Any} error The error that has occurred.
	     */
	    AnonymousObserver.prototype.error = function (error) {
	      this._onError(error);
	    };

	    /**
	     *  Calls the onCompleted action.
	     */
	    AnonymousObserver.prototype.completed = function () {
	      this._onCompleted();
	    };

	    return AnonymousObserver;
	  }(AbstractObserver));

	  var CheckedObserver = (function (__super__) {
	    inherits(CheckedObserver, __super__);

	    function CheckedObserver(observer) {
	      __super__.call(this);
	      this._observer = observer;
	      this._state = 0; // 0 - idle, 1 - busy, 2 - done
	    }

	    var CheckedObserverPrototype = CheckedObserver.prototype;

	    CheckedObserverPrototype.onNext = function (value) {
	      this.checkAccess();
	      var res = tryCatch(this._observer.onNext).call(this._observer, value);
	      this._state = 0;
	      res === errorObj && thrower(res.e);
	    };

	    CheckedObserverPrototype.onError = function (err) {
	      this.checkAccess();
	      var res = tryCatch(this._observer.onError).call(this._observer, err);
	      this._state = 2;
	      res === errorObj && thrower(res.e);
	    };

	    CheckedObserverPrototype.onCompleted = function () {
	      this.checkAccess();
	      var res = tryCatch(this._observer.onCompleted).call(this._observer);
	      this._state = 2;
	      res === errorObj && thrower(res.e);
	    };

	    CheckedObserverPrototype.checkAccess = function () {
	      if (this._state === 1) { throw new Error('Re-entrancy detected'); }
	      if (this._state === 2) { throw new Error('Observer completed'); }
	      if (this._state === 0) { this._state = 1; }
	    };

	    return CheckedObserver;
	  }(Observer));

	  var ScheduledObserver = Rx.internals.ScheduledObserver = (function (__super__) {
	    inherits(ScheduledObserver, __super__);

	    function ScheduledObserver(scheduler, observer) {
	      __super__.call(this);
	      this.scheduler = scheduler;
	      this.observer = observer;
	      this.isAcquired = false;
	      this.hasFaulted = false;
	      this.queue = [];
	      this.disposable = new SerialDisposable();
	    }

	    function enqueueNext(observer, x) { return function () { observer.onNext(x); }; }
	    function enqueueError(observer, e) { return function () { observer.onError(e); }; }
	    function enqueueCompleted(observer) { return function () { observer.onCompleted(); }; }

	    ScheduledObserver.prototype.next = function (x) {
	      this.queue.push(enqueueNext(this.observer, x));
	    };

	    ScheduledObserver.prototype.error = function (e) {
	      this.queue.push(enqueueError(this.observer, e));
	    };

	    ScheduledObserver.prototype.completed = function () {
	      this.queue.push(enqueueCompleted(this.observer));
	    };


	    function scheduleMethod(state, recurse) {
	      var work;
	      if (state.queue.length > 0) {
	        work = state.queue.shift();
	      } else {
	        state.isAcquired = false;
	        return;
	      }
	      var res = tryCatch(work)();
	      if (res === errorObj) {
	        state.queue = [];
	        state.hasFaulted = true;
	        return thrower(res.e);
	      }
	      recurse(state);
	    }

	    ScheduledObserver.prototype.ensureActive = function () {
	      var isOwner = false;
	      if (!this.hasFaulted && this.queue.length > 0) {
	        isOwner = !this.isAcquired;
	        this.isAcquired = true;
	      }
	      isOwner &&
	        this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, scheduleMethod));
	    };

	    ScheduledObserver.prototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      this.disposable.dispose();
	    };

	    return ScheduledObserver;
	  }(AbstractObserver));

	  var ObserveOnObserver = (function (__super__) {
	    inherits(ObserveOnObserver, __super__);

	    function ObserveOnObserver(scheduler, observer, cancel) {
	      __super__.call(this, scheduler, observer);
	      this._cancel = cancel;
	    }

	    ObserveOnObserver.prototype.next = function (value) {
	      __super__.prototype.next.call(this, value);
	      this.ensureActive();
	    };

	    ObserveOnObserver.prototype.error = function (e) {
	      __super__.prototype.error.call(this, e);
	      this.ensureActive();
	    };

	    ObserveOnObserver.prototype.completed = function () {
	      __super__.prototype.completed.call(this);
	      this.ensureActive();
	    };

	    ObserveOnObserver.prototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      this._cancel && this._cancel.dispose();
	      this._cancel = null;
	    };

	    return ObserveOnObserver;
	  })(ScheduledObserver);

	  var observableProto;

	  /**
	   * Represents a push-style collection.
	   */
	  var Observable = Rx.Observable = (function () {

	    function makeSubscribe(self, subscribe) {
	      return function (o) {
	        var oldOnError = o.onError;
	        o.onError = function (e) {
	          makeStackTraceLong(e, self);
	          oldOnError.call(o, e);
	        };

	        return subscribe.call(self, o);
	      };
	    }

	    function Observable() {
	      if (Rx.config.longStackSupport && hasStacks) {
	        var oldSubscribe = this._subscribe;
	        var e = tryCatch(thrower)(new Error()).e;
	        this.stack = e.stack.substring(e.stack.indexOf('\n') + 1);
	        this._subscribe = makeSubscribe(this, oldSubscribe);
	      }
	    }

	    observableProto = Observable.prototype;

	    /**
	    * Determines whether the given object is an Observable
	    * @param {Any} An object to determine whether it is an Observable
	    * @returns {Boolean} true if an Observable, else false.
	    */
	    Observable.isObservable = function (o) {
	      return o && isFunction(o.subscribe);
	    };

	    /**
	     *  Subscribes an o to the observable sequence.
	     *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
	     *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
	     *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
	     *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribe = observableProto.forEach = function (oOrOnNext, onError, onCompleted) {
	      return this._subscribe(typeof oOrOnNext === 'object' ?
	        oOrOnNext :
	        observerCreate(oOrOnNext, onError, onCompleted));
	    };

	    /**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onNext The function to invoke on each element in the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnNext = function (onNext, thisArg) {
	      return this._subscribe(observerCreate(typeof thisArg !== 'undefined' ? function(x) { onNext.call(thisArg, x); } : onNext));
	    };

	    /**
	     * Subscribes to an exceptional condition in the sequence with an optional "this" argument.
	     * @param {Function} onError The function to invoke upon exceptional termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnError = function (onError, thisArg) {
	      return this._subscribe(observerCreate(null, typeof thisArg !== 'undefined' ? function(e) { onError.call(thisArg, e); } : onError));
	    };

	    /**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onCompleted The function to invoke upon graceful termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnCompleted = function (onCompleted, thisArg) {
	      return this._subscribe(observerCreate(null, null, typeof thisArg !== 'undefined' ? function() { onCompleted.call(thisArg); } : onCompleted));
	    };

	    return Observable;
	  })();

	  var ObservableBase = Rx.ObservableBase = (function (__super__) {
	    inherits(ObservableBase, __super__);

	    function fixSubscriber(subscriber) {
	      return subscriber && isFunction(subscriber.dispose) ? subscriber :
	        isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
	    }

	    function setDisposable(s, state) {
	      var ado = state[0], self = state[1];
	      var sub = tryCatch(self.subscribeCore).call(self, ado);
	      if (sub === errorObj && !ado.fail(errorObj.e)) { thrower(errorObj.e); }
	      ado.setDisposable(fixSubscriber(sub));
	    }

	    function ObservableBase() {
	      __super__.call(this);
	    }

	    ObservableBase.prototype._subscribe = function (o) {
	      var ado = new AutoDetachObserver(o), state = [ado, this];

	      if (currentThreadScheduler.scheduleRequired()) {
	        currentThreadScheduler.schedule(state, setDisposable);
	      } else {
	        setDisposable(null, state);
	      }
	      return ado;
	    };

	    ObservableBase.prototype.subscribeCore = notImplemented;

	    return ObservableBase;
	  }(Observable));

	var FlatMapObservable = Rx.FlatMapObservable = (function(__super__) {

	    inherits(FlatMapObservable, __super__);

	    function FlatMapObservable(source, selector, resultSelector, thisArg) {
	      this.resultSelector = isFunction(resultSelector) ? resultSelector : null;
	      this.selector = bindCallback(isFunction(selector) ? selector : function() { return selector; }, thisArg, 3);
	      this.source = source;
	      __super__.call(this);
	    }

	    FlatMapObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o, this.selector, this.resultSelector, this));
	    };

	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(observer, selector, resultSelector, source) {
	      this.i = 0;
	      this.selector = selector;
	      this.resultSelector = resultSelector;
	      this.source = source;
	      this.o = observer;
	      AbstractObserver.call(this);
	    }

	    InnerObserver.prototype._wrapResult = function(result, x, i) {
	      return this.resultSelector ?
	        result.map(function(y, i2) { return this.resultSelector(x, y, i, i2); }, this) :
	        result;
	    };

	    InnerObserver.prototype.next = function(x) {
	      var i = this.i++;
	      var result = tryCatch(this.selector)(x, i, this.source);
	      if (result === errorObj) { return this.o.onError(result.e); }

	      isPromise(result) && (result = observableFromPromise(result));
	      (isArrayLike(result) || isIterable(result)) && (result = Observable.from(result));
	      this.o.onNext(this._wrapResult(result, x, i));
	    };

	    InnerObserver.prototype.error = function(e) { this.o.onError(e); };

	    InnerObserver.prototype.completed = function() { this.o.onCompleted(); };

	    return FlatMapObservable;

	}(ObservableBase));

	  var Enumerable = Rx.internals.Enumerable = function () { };

	  function IsDisposedDisposable(state) {
	    this._s = state;
	    this.isDisposed = false;
	  }

	  IsDisposedDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      this._s.isDisposed = true;
	    }
	  };

	  var ConcatEnumerableObservable = (function(__super__) {
	    inherits(ConcatEnumerableObservable, __super__);
	    function ConcatEnumerableObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }

	    function scheduleMethod(state, recurse) {
	      if (state.isDisposed) { return; }
	      var currentItem = tryCatch(state.e.next).call(state.e);
	      if (currentItem === errorObj) { return state.o.onError(currentItem.e); }
	      if (currentItem.done) { return state.o.onCompleted(); }

	      // Check if promise
	      var currentValue = currentItem.value;
	      isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));

	      var d = new SingleAssignmentDisposable();
	      state.subscription.setDisposable(d);
	      d.setDisposable(currentValue.subscribe(new InnerObserver(state, recurse)));
	    }

	    ConcatEnumerableObservable.prototype.subscribeCore = function (o) {
	      var subscription = new SerialDisposable();
	      var state = {
	        isDisposed: false,
	        o: o,
	        subscription: subscription,
	        e: this.sources[$iterator$]()
	      };

	      var cancelable = currentThreadScheduler.scheduleRecursive(state, scheduleMethod);
	      return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
	    };

	    function InnerObserver(state, recurse) {
	      this._state = state;
	      this._recurse = recurse;
	      AbstractObserver.call(this);
	    }

	    inherits(InnerObserver, AbstractObserver);

	    InnerObserver.prototype.next = function (x) { this._state.o.onNext(x); };
	    InnerObserver.prototype.error = function (e) { this._state.o.onError(e); };
	    InnerObserver.prototype.completed = function () { this._recurse(this._state); };

	    return ConcatEnumerableObservable;
	  }(ObservableBase));

	  Enumerable.prototype.concat = function () {
	    return new ConcatEnumerableObservable(this);
	  };

	  var CatchErrorObservable = (function(__super__) {
	    function CatchErrorObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }

	    inherits(CatchErrorObservable, __super__);

	    function scheduleMethod(state, recurse) {
	      if (state.isDisposed) { return; }
	      var currentItem = tryCatch(state.e.next).call(state.e);
	      if (currentItem === errorObj) { return state.o.onError(currentItem.e); }
	      if (currentItem.done) { return state.lastError !== null ? state.o.onError(state.lastError) : state.o.onCompleted(); }

	      var currentValue = currentItem.value;
	      isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));

	      var d = new SingleAssignmentDisposable();
	      state.subscription.setDisposable(d);
	      d.setDisposable(currentValue.subscribe(new InnerObserver(state, recurse)));
	    }

	    CatchErrorObservable.prototype.subscribeCore = function (o) {
	      var subscription = new SerialDisposable();
	      var state = {
	        isDisposed: false,
	        e: this.sources[$iterator$](),
	        subscription: subscription,
	        lastError: null,
	        o: o
	      };

	      var cancelable = currentThreadScheduler.scheduleRecursive(state, scheduleMethod);
	      return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
	    };

	    function InnerObserver(state, recurse) {
	      this._state = state;
	      this._recurse = recurse;
	      AbstractObserver.call(this);
	    }

	    inherits(InnerObserver, AbstractObserver);

	    InnerObserver.prototype.next = function (x) { this._state.o.onNext(x); };
	    InnerObserver.prototype.error = function (e) { this._state.lastError = e; this._recurse(this._state); };
	    InnerObserver.prototype.completed = function () { this._state.o.onCompleted(); };

	    return CatchErrorObservable;
	  }(ObservableBase));

	  Enumerable.prototype.catchError = function () {
	    return new CatchErrorObservable(this);
	  };

	  var RepeatEnumerable = (function (__super__) {
	    inherits(RepeatEnumerable, __super__);
	    function RepeatEnumerable(v, c) {
	      this.v = v;
	      this.c = c == null ? -1 : c;
	    }

	    RepeatEnumerable.prototype[$iterator$] = function () {
	      return new RepeatEnumerator(this);
	    };

	    function RepeatEnumerator(p) {
	      this.v = p.v;
	      this.l = p.c;
	    }

	    RepeatEnumerator.prototype.next = function () {
	      if (this.l === 0) { return doneEnumerator; }
	      if (this.l > 0) { this.l--; }
	      return { done: false, value: this.v };
	    };

	    return RepeatEnumerable;
	  }(Enumerable));

	  var enumerableRepeat = Enumerable.repeat = function (value, repeatCount) {
	    return new RepeatEnumerable(value, repeatCount);
	  };

	  var OfEnumerable = (function(__super__) {
	    inherits(OfEnumerable, __super__);
	    function OfEnumerable(s, fn, thisArg) {
	      this.s = s;
	      this.fn = fn ? bindCallback(fn, thisArg, 3) : null;
	    }
	    OfEnumerable.prototype[$iterator$] = function () {
	      return new OfEnumerator(this);
	    };

	    function OfEnumerator(p) {
	      this.i = -1;
	      this.s = p.s;
	      this.l = this.s.length;
	      this.fn = p.fn;
	    }

	    OfEnumerator.prototype.next = function () {
	     return ++this.i < this.l ?
	       { done: false, value: !this.fn ? this.s[this.i] : this.fn(this.s[this.i], this.i, this.s) } :
	       doneEnumerator;
	    };

	    return OfEnumerable;
	  }(Enumerable));

	  var enumerableOf = Enumerable.of = function (source, selector, thisArg) {
	    return new OfEnumerable(source, selector, thisArg);
	  };

	var ObserveOnObservable = (function (__super__) {
	  inherits(ObserveOnObservable, __super__);
	  function ObserveOnObservable(source, s) {
	    this.source = source;
	    this._s = s;
	    __super__.call(this);
	  }

	  ObserveOnObservable.prototype.subscribeCore = function (o) {
	    return this.source.subscribe(new ObserveOnObserver(this._s, o));
	  };

	  return ObserveOnObservable;
	}(ObservableBase));

	   /**
	   *  Wraps the source sequence in order to run its observer callbacks on the specified scheduler.
	   *
	   *  This only invokes observer callbacks on a scheduler. In case the subscription and/or unsubscription actions have side-effects
	   *  that require to be run on a scheduler, use subscribeOn.
	   *
	   *  @param {Scheduler} scheduler Scheduler to notify observers on.
	   *  @returns {Observable} The source sequence whose observations happen on the specified scheduler.
	   */
	  observableProto.observeOn = function (scheduler) {
	    return new ObserveOnObservable(this, scheduler);
	  };

	  var SubscribeOnObservable = (function (__super__) {
	    inherits(SubscribeOnObservable, __super__);
	    function SubscribeOnObservable(source, s) {
	      this.source = source;
	      this._s = s;
	      __super__.call(this);
	    }

	    function scheduleMethod(scheduler, state) {
	      var source = state[0], d = state[1], o = state[2];
	      d.setDisposable(new ScheduledDisposable(scheduler, source.subscribe(o)));
	    }

	    SubscribeOnObservable.prototype.subscribeCore = function (o) {
	      var m = new SingleAssignmentDisposable(), d = new SerialDisposable();
	      d.setDisposable(m);
	      m.setDisposable(this._s.schedule([this.source, d, o], scheduleMethod));
	      return d;
	    };

	    return SubscribeOnObservable;
	  }(ObservableBase));

	   /**
	   *  Wraps the source sequence in order to run its subscription and unsubscription logic on the specified scheduler. This operation is not commonly used;
	   *  see the remarks section for more information on the distinction between subscribeOn and observeOn.

	   *  This only performs the side-effects of subscription and unsubscription on the specified scheduler. In order to invoke observer
	   *  callbacks on a scheduler, use observeOn.

	   *  @param {Scheduler} scheduler Scheduler to perform subscription and unsubscription actions on.
	   *  @returns {Observable} The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler.
	   */
	  observableProto.subscribeOn = function (scheduler) {
	    return new SubscribeOnObservable(this, scheduler);
	  };

	  var FromPromiseObservable = (function(__super__) {
	    inherits(FromPromiseObservable, __super__);
	    function FromPromiseObservable(p, s) {
	      this._p = p;
	      this._s = s;
	      __super__.call(this);
	    }

	    function scheduleNext(s, state) {
	      var o = state[0], data = state[1];
	      o.onNext(data);
	      o.onCompleted();
	    }

	    function scheduleError(s, state) {
	      var o = state[0], err = state[1];
	      o.onError(err);
	    }

	    FromPromiseObservable.prototype.subscribeCore = function(o) {
	      var sad = new SingleAssignmentDisposable(), self = this, p = this._p;

	      if (isFunction(p)) {
	        p = tryCatch(p)();
	        if (p === errorObj) {
	          o.onError(p.e);
	          return sad;
	        }
	      }

	      p
	        .then(function (data) {
	          sad.setDisposable(self._s.schedule([o, data], scheduleNext));
	        }, function (err) {
	          sad.setDisposable(self._s.schedule([o, err], scheduleError));
	        });

	      return sad;
	    };

	    return FromPromiseObservable;
	  }(ObservableBase));

	  /**
	  * Converts a Promise to an Observable sequence
	  * @param {Promise} An ES6 Compliant promise.
	  * @returns {Observable} An Observable sequence which wraps the existing promise success and failure.
	  */
	  var observableFromPromise = Observable.fromPromise = function (promise, scheduler) {
	    scheduler || (scheduler = defaultScheduler);
	    return new FromPromiseObservable(promise, scheduler);
	  };

	  /*
	   * Converts an existing observable sequence to an ES6 Compatible Promise
	   * @example
	   * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
	   *
	   * // With config
	   * Rx.config.Promise = RSVP.Promise;
	   * var promise = Rx.Observable.return(42).toPromise();
	   * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
	   * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
	   */
	  observableProto.toPromise = function (promiseCtor) {
	    promiseCtor || (promiseCtor = Rx.config.Promise);
	    if (!promiseCtor) { throw new NotSupportedError('Promise type not provided nor in Rx.config.Promise'); }
	    var source = this;
	    return new promiseCtor(function (resolve, reject) {
	      // No cancellation can be done
	      var value;
	      source.subscribe(function (v) {
	        value = v;
	      }, reject, function () {
	        resolve(value);
	      });
	    });
	  };

	  var ToArrayObservable = (function(__super__) {
	    inherits(ToArrayObservable, __super__);
	    function ToArrayObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    ToArrayObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o));
	    };

	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o) {
	      this.o = o;
	      this.a = [];
	      AbstractObserver.call(this);
	    }
	    
	    InnerObserver.prototype.next = function (x) { this.a.push(x); };
	    InnerObserver.prototype.error = function (e) { this.o.onError(e);  };
	    InnerObserver.prototype.completed = function () { this.o.onNext(this.a); this.o.onCompleted(); };

	    return ToArrayObservable;
	  }(ObservableBase));

	  /**
	  * Creates an array from an observable sequence.
	  * @returns {Observable} An observable sequence containing a single element with a list containing all the elements of the source sequence.
	  */
	  observableProto.toArray = function () {
	    return new ToArrayObservable(this);
	  };

	  /**
	   *  Creates an observable sequence from a specified subscribe method implementation.
	   * @example
	   *  var res = Rx.Observable.create(function (observer) { return function () { } );
	   *  var res = Rx.Observable.create(function (observer) { return Rx.Disposable.empty; } );
	   *  var res = Rx.Observable.create(function (observer) { } );
	   * @param {Function} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.
	   * @returns {Observable} The observable sequence with the specified implementation for the Subscribe method.
	   */
	  Observable.create = function (subscribe, parent) {
	    return new AnonymousObservable(subscribe, parent);
	  };

	  var Defer = (function(__super__) {
	    inherits(Defer, __super__);
	    function Defer(factory) {
	      this._f = factory;
	      __super__.call(this);
	    }

	    Defer.prototype.subscribeCore = function (o) {
	      var result = tryCatch(this._f)();
	      if (result === errorObj) { return observableThrow(result.e).subscribe(o);}
	      isPromise(result) && (result = observableFromPromise(result));
	      return result.subscribe(o);
	    };

	    return Defer;
	  }(ObservableBase));

	  /**
	   *  Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.
	   *
	   * @example
	   *  var res = Rx.Observable.defer(function () { return Rx.Observable.fromArray([1,2,3]); });
	   * @param {Function} observableFactory Observable factory function to invoke for each observer that subscribes to the resulting sequence or Promise.
	   * @returns {Observable} An observable sequence whose observers trigger an invocation of the given observable factory function.
	   */
	  var observableDefer = Observable.defer = function (observableFactory) {
	    return new Defer(observableFactory);
	  };

	  var EmptyObservable = (function(__super__) {
	    inherits(EmptyObservable, __super__);
	    function EmptyObservable(scheduler) {
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }

	    EmptyObservable.prototype.subscribeCore = function (observer) {
	      var sink = new EmptySink(observer, this.scheduler);
	      return sink.run();
	    };

	    function EmptySink(observer, scheduler) {
	      this.observer = observer;
	      this.scheduler = scheduler;
	    }

	    function scheduleItem(s, state) {
	      state.onCompleted();
	      return disposableEmpty;
	    }

	    EmptySink.prototype.run = function () {
	      var state = this.observer;
	      return this.scheduler === immediateScheduler ?
	        scheduleItem(null, state) :
	        this.scheduler.schedule(state, scheduleItem);
	    };

	    return EmptyObservable;
	  }(ObservableBase));

	  var EMPTY_OBSERVABLE = new EmptyObservable(immediateScheduler);

	  /**
	   *  Returns an empty observable sequence, using the specified scheduler to send out the single OnCompleted message.
	   *
	   * @example
	   *  var res = Rx.Observable.empty();
	   *  var res = Rx.Observable.empty(Rx.Scheduler.timeout);
	   * @param {Scheduler} [scheduler] Scheduler to send the termination call on.
	   * @returns {Observable} An observable sequence with no elements.
	   */
	  var observableEmpty = Observable.empty = function (scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return scheduler === immediateScheduler ? EMPTY_OBSERVABLE : new EmptyObservable(scheduler);
	  };

	  var FromObservable = (function(__super__) {
	    inherits(FromObservable, __super__);
	    function FromObservable(iterable, fn, scheduler) {
	      this._iterable = iterable;
	      this._fn = fn;
	      this._scheduler = scheduler;
	      __super__.call(this);
	    }

	    function createScheduleMethod(o, it, fn) {
	      return function loopRecursive(i, recurse) {
	        var next = tryCatch(it.next).call(it);
	        if (next === errorObj) { return o.onError(next.e); }
	        if (next.done) { return o.onCompleted(); }

	        var result = next.value;

	        if (isFunction(fn)) {
	          result = tryCatch(fn)(result, i);
	          if (result === errorObj) { return o.onError(result.e); }
	        }

	        o.onNext(result);
	        recurse(i + 1);
	      };
	    }

	    FromObservable.prototype.subscribeCore = function (o) {
	      var list = Object(this._iterable),
	          it = getIterable(list);

	      return this._scheduler.scheduleRecursive(0, createScheduleMethod(o, it, this._fn));
	    };

	    return FromObservable;
	  }(ObservableBase));

	  var maxSafeInteger = Math.pow(2, 53) - 1;

	  function StringIterable(s) {
	    this._s = s;
	  }

	  StringIterable.prototype[$iterator$] = function () {
	    return new StringIterator(this._s);
	  };

	  function StringIterator(s) {
	    this._s = s;
	    this._l = s.length;
	    this._i = 0;
	  }

	  StringIterator.prototype[$iterator$] = function () {
	    return this;
	  };

	  StringIterator.prototype.next = function () {
	    return this._i < this._l ? { done: false, value: this._s.charAt(this._i++) } : doneEnumerator;
	  };

	  function ArrayIterable(a) {
	    this._a = a;
	  }

	  ArrayIterable.prototype[$iterator$] = function () {
	    return new ArrayIterator(this._a);
	  };

	  function ArrayIterator(a) {
	    this._a = a;
	    this._l = toLength(a);
	    this._i = 0;
	  }

	  ArrayIterator.prototype[$iterator$] = function () {
	    return this;
	  };

	  ArrayIterator.prototype.next = function () {
	    return this._i < this._l ? { done: false, value: this._a[this._i++] } : doneEnumerator;
	  };

	  function numberIsFinite(value) {
	    return typeof value === 'number' && root.isFinite(value);
	  }

	  function isNan(n) {
	    return n !== n;
	  }

	  function getIterable(o) {
	    var i = o[$iterator$], it;
	    if (!i && typeof o === 'string') {
	      it = new StringIterable(o);
	      return it[$iterator$]();
	    }
	    if (!i && o.length !== undefined) {
	      it = new ArrayIterable(o);
	      return it[$iterator$]();
	    }
	    if (!i) { throw new TypeError('Object is not iterable'); }
	    return o[$iterator$]();
	  }

	  function sign(value) {
	    var number = +value;
	    if (number === 0) { return number; }
	    if (isNaN(number)) { return number; }
	    return number < 0 ? -1 : 1;
	  }

	  function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) { return 0; }
	    if (len === 0 || !numberIsFinite(len)) { return len; }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) { return 0; }
	    if (len > maxSafeInteger) { return maxSafeInteger; }
	    return len;
	  }

	  /**
	  * This method creates a new Observable sequence from an array-like or iterable object.
	  * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
	  * @param {Function} [mapFn] Map function to call on every element of the array.
	  * @param {Any} [thisArg] The context to use calling the mapFn if provided.
	  * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
	  */
	  var observableFrom = Observable.from = function (iterable, mapFn, thisArg, scheduler) {
	    if (iterable == null) {
	      throw new Error('iterable cannot be null.')
	    }
	    if (mapFn && !isFunction(mapFn)) {
	      throw new Error('mapFn when provided must be a function');
	    }
	    if (mapFn) {
	      var mapper = bindCallback(mapFn, thisArg, 2);
	    }
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromObservable(iterable, mapper, scheduler);
	  }

	  var FromArrayObservable = (function(__super__) {
	    inherits(FromArrayObservable, __super__);
	    function FromArrayObservable(args, scheduler) {
	      this._args = args;
	      this._scheduler = scheduler;
	      __super__.call(this);
	    }

	    function scheduleMethod(o, args) {
	      var len = args.length;
	      return function loopRecursive (i, recurse) {
	        if (i < len) {
	          o.onNext(args[i]);
	          recurse(i + 1);
	        } else {
	          o.onCompleted();
	        }
	      };
	    }

	    FromArrayObservable.prototype.subscribeCore = function (o) {
	      return this._scheduler.scheduleRecursive(0, scheduleMethod(o, this._args));
	    };

	    return FromArrayObservable;
	  }(ObservableBase));

	  /**
	  *  Converts an array to an observable sequence, using an optional scheduler to enumerate the array.
	  * @deprecated use Observable.from or Observable.of
	  * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given enumerable sequence.
	  */
	  var observableFromArray = Observable.fromArray = function (array, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromArrayObservable(array, scheduler)
	  };

	  var GenerateObservable = (function (__super__) {
	    inherits(GenerateObservable, __super__);
	    function GenerateObservable(state, cndFn, itrFn, resFn, s) {
	      this._initialState = state;
	      this._cndFn = cndFn;
	      this._itrFn = itrFn;
	      this._resFn = resFn;
	      this._s = s;
	      __super__.call(this);
	    }

	    function scheduleRecursive(state, recurse) {
	      if (state.first) {
	        state.first = false;
	      } else {
	        state.newState = tryCatch(state.self._itrFn)(state.newState);
	        if (state.newState === errorObj) { return state.o.onError(state.newState.e); }
	      }
	      var hasResult = tryCatch(state.self._cndFn)(state.newState);
	      if (hasResult === errorObj) { return state.o.onError(hasResult.e); }
	      if (hasResult) {
	        var result = tryCatch(state.self._resFn)(state.newState);
	        if (result === errorObj) { return state.o.onError(result.e); }
	        state.o.onNext(result);
	        recurse(state);
	      } else {
	        state.o.onCompleted();
	      }
	    }

	    GenerateObservable.prototype.subscribeCore = function (o) {
	      var state = {
	        o: o,
	        self: this,
	        first: true,
	        newState: this._initialState
	      };
	      return this._s.scheduleRecursive(state, scheduleRecursive);
	    };

	    return GenerateObservable;
	  }(ObservableBase));

	  /**
	   *  Generates an observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out observer messages.
	   *
	   * @example
	   *  var res = Rx.Observable.generate(0, function (x) { return x < 10; }, function (x) { return x + 1; }, function (x) { return x; });
	   *  var res = Rx.Observable.generate(0, function (x) { return x < 10; }, function (x) { return x + 1; }, function (x) { return x; }, Rx.Scheduler.timeout);
	   * @param {Mixed} initialState Initial state.
	   * @param {Function} condition Condition to terminate generation (upon returning false).
	   * @param {Function} iterate Iteration step function.
	   * @param {Function} resultSelector Selector function for results produced in the sequence.
	   * @param {Scheduler} [scheduler] Scheduler on which to run the generator loop. If not provided, defaults to Scheduler.currentThread.
	   * @returns {Observable} The generated sequence.
	   */
	  Observable.generate = function (initialState, condition, iterate, resultSelector, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new GenerateObservable(initialState, condition, iterate, resultSelector, scheduler);
	  };

	  function observableOf (scheduler, array) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromArrayObservable(array, scheduler);
	  }

	  /**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */
	  Observable.of = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return new FromArrayObservable(args, currentThreadScheduler);
	  };

	  /**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @param {Scheduler} scheduler A scheduler to use for scheduling the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */
	  Observable.ofWithScheduler = function (scheduler) {
	    var len = arguments.length, args = new Array(len - 1);
	    for(var i = 1; i < len; i++) { args[i - 1] = arguments[i]; }
	    return new FromArrayObservable(args, scheduler);
	  };

	  /**
	   * Creates an Observable sequence from changes to an array using Array.observe.
	   * @param {Array} array An array to observe changes.
	   * @returns {Observable} An observable sequence containing changes to an array from Array.observe.
	   */
	  Observable.ofArrayChanges = function(array) {
	    if (!Array.isArray(array)) { throw new TypeError('Array.observe only accepts arrays.'); }
	    if (typeof Array.observe !== 'function' && typeof Array.unobserve !== 'function') { throw new TypeError('Array.observe is not supported on your platform') }
	    return new AnonymousObservable(function(observer) {
	      function observerFn(changes) {
	        for(var i = 0, len = changes.length; i < len; i++) {
	          observer.onNext(changes[i]);
	        }
	      }
	      
	      Array.observe(array, observerFn);

	      return function () {
	        Array.unobserve(array, observerFn);
	      };
	    });
	  };

	  /**
	   * Creates an Observable sequence from changes to an object using Object.observe.
	   * @param {Object} obj An object to observe changes.
	   * @returns {Observable} An observable sequence containing changes to an object from Object.observe.
	   */
	  Observable.ofObjectChanges = function(obj) {
	    if (obj == null) { throw new TypeError('object must not be null or undefined.'); }
	    if (typeof Object.observe !== 'function' && typeof Object.unobserve !== 'function') { throw new TypeError('Object.observe is not supported on your platform') }
	    return new AnonymousObservable(function(observer) {
	      function observerFn(changes) {
	        for(var i = 0, len = changes.length; i < len; i++) {
	          observer.onNext(changes[i]);
	        }
	      }

	      Object.observe(obj, observerFn);

	      return function () {
	        Object.unobserve(obj, observerFn);
	      };
	    });
	  };

	  var NeverObservable = (function(__super__) {
	    inherits(NeverObservable, __super__);
	    function NeverObservable() {
	      __super__.call(this);
	    }

	    NeverObservable.prototype.subscribeCore = function (observer) {
	      return disposableEmpty;
	    };

	    return NeverObservable;
	  }(ObservableBase));

	  var NEVER_OBSERVABLE = new NeverObservable();

	  /**
	   * Returns a non-terminating observable sequence, which can be used to denote an infinite duration (e.g. when using reactive joins).
	   * @returns {Observable} An observable sequence whose observers will never get called.
	   */
	  var observableNever = Observable.never = function () {
	    return NEVER_OBSERVABLE;
	  };

	  var PairsObservable = (function(__super__) {
	    inherits(PairsObservable, __super__);
	    function PairsObservable(o, scheduler) {
	      this._o = o;
	      this._keys = Object.keys(o);
	      this._scheduler = scheduler;
	      __super__.call(this);
	    }

	    function scheduleMethod(o, obj, keys) {
	      return function loopRecursive(i, recurse) {
	        if (i < keys.length) {
	          var key = keys[i];
	          o.onNext([key, obj[key]]);
	          recurse(i + 1);
	        } else {
	          o.onCompleted();
	        }
	      };
	    }

	    PairsObservable.prototype.subscribeCore = function (o) {
	      return this._scheduler.scheduleRecursive(0, scheduleMethod(o, this._o, this._keys));
	    };

	    return PairsObservable;
	  }(ObservableBase));

	  /**
	   * Convert an object into an observable sequence of [key, value] pairs.
	   * @param {Object} obj The object to inspect.
	   * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	   * @returns {Observable} An observable sequence of [key, value] pairs from the object.
	   */
	  Observable.pairs = function (obj, scheduler) {
	    scheduler || (scheduler = currentThreadScheduler);
	    return new PairsObservable(obj, scheduler);
	  };

	    var RangeObservable = (function(__super__) {
	    inherits(RangeObservable, __super__);
	    function RangeObservable(start, count, scheduler) {
	      this.start = start;
	      this.rangeCount = count;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }

	    function loopRecursive(start, count, o) {
	      return function loop (i, recurse) {
	        if (i < count) {
	          o.onNext(start + i);
	          recurse(i + 1);
	        } else {
	          o.onCompleted();
	        }
	      };
	    }

	    RangeObservable.prototype.subscribeCore = function (o) {
	      return this.scheduler.scheduleRecursive(
	        0,
	        loopRecursive(this.start, this.rangeCount, o)
	      );
	    };

	    return RangeObservable;
	  }(ObservableBase));

	  /**
	  *  Generates an observable sequence of integral numbers within a specified range, using the specified scheduler to send out observer messages.
	  * @param {Number} start The value of the first integer in the sequence.
	  * @param {Number} count The number of sequential integers to generate.
	  * @param {Scheduler} [scheduler] Scheduler to run the generator loop on. If not specified, defaults to Scheduler.currentThread.
	  * @returns {Observable} An observable sequence that contains a range of sequential integral numbers.
	  */
	  Observable.range = function (start, count, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new RangeObservable(start, count, scheduler);
	  };

	  var RepeatObservable = (function(__super__) {
	    inherits(RepeatObservable, __super__);
	    function RepeatObservable(value, repeatCount, scheduler) {
	      this.value = value;
	      this.repeatCount = repeatCount == null ? -1 : repeatCount;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }

	    RepeatObservable.prototype.subscribeCore = function (observer) {
	      var sink = new RepeatSink(observer, this);
	      return sink.run();
	    };

	    return RepeatObservable;
	  }(ObservableBase));

	  function RepeatSink(observer, parent) {
	    this.observer = observer;
	    this.parent = parent;
	  }

	  RepeatSink.prototype.run = function () {
	    var observer = this.observer, value = this.parent.value;
	    function loopRecursive(i, recurse) {
	      if (i === -1 || i > 0) {
	        observer.onNext(value);
	        i > 0 && i--;
	      }
	      if (i === 0) { return observer.onCompleted(); }
	      recurse(i);
	    }

	    return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, loopRecursive);
	  };

	  /**
	   *  Generates an observable sequence that repeats the given element the specified number of times, using the specified scheduler to send out observer messages.
	   * @param {Mixed} value Element to repeat.
	   * @param {Number} repeatCount [Optiona] Number of times to repeat the element. If not specified, repeats indefinitely.
	   * @param {Scheduler} scheduler Scheduler to run the producer loop on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence that repeats the given element the specified number of times.
	   */
	  Observable.repeat = function (value, repeatCount, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new RepeatObservable(value, repeatCount, scheduler);
	  };

	  var JustObservable = (function(__super__) {
	    inherits(JustObservable, __super__);
	    function JustObservable(value, scheduler) {
	      this._value = value;
	      this._scheduler = scheduler;
	      __super__.call(this);
	    }

	    JustObservable.prototype.subscribeCore = function (o) {
	      var state = [this._value, o];
	      return this._scheduler === immediateScheduler ?
	        scheduleItem(null, state) :
	        this._scheduler.schedule(state, scheduleItem);
	    };

	    function scheduleItem(s, state) {
	      var value = state[0], observer = state[1];
	      observer.onNext(value);
	      observer.onCompleted();
	      return disposableEmpty;
	    }

	    return JustObservable;
	  }(ObservableBase));

	  /**
	   *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
	   *  There is an alias called 'just' or browsers <IE9.
	   * @param {Mixed} value Single element in the resulting observable sequence.
	   * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence containing the single specified element.
	   */
	  var observableReturn = Observable['return'] = Observable.just = function (value, scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return new JustObservable(value, scheduler);
	  };

	  var ThrowObservable = (function(__super__) {
	    inherits(ThrowObservable, __super__);
	    function ThrowObservable(error, scheduler) {
	      this._error = error;
	      this._scheduler = scheduler;
	      __super__.call(this);
	    }

	    ThrowObservable.prototype.subscribeCore = function (o) {
	      var state = [this._error, o];
	      return this._scheduler === immediateScheduler ?
	        scheduleItem(null, state) :
	        this._scheduler.schedule(state, scheduleItem);
	    };

	    function scheduleItem(s, state) {
	      var e = state[0], o = state[1];
	      o.onError(e);
	      return disposableEmpty;
	    }

	    return ThrowObservable;
	  }(ObservableBase));

	  /**
	   *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
	   *  There is an alias to this method called 'throwError' for browsers <IE9.
	   * @param {Mixed} error An object used for the sequence's termination.
	   * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
	   */
	  var observableThrow = Observable['throw'] = function (error, scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return new ThrowObservable(error, scheduler);
	  };

	  var UsingObservable = (function (__super__) {
	    inherits(UsingObservable, __super__);
	    function UsingObservable(resFn, obsFn) {
	      this._resFn = resFn;
	      this._obsFn = obsFn;
	      __super__.call(this);
	    }

	    UsingObservable.prototype.subscribeCore = function (o) {
	      var disposable = disposableEmpty;
	      var resource = tryCatch(this._resFn)();
	      if (resource === errorObj) {
	        return new BinaryDisposable(observableThrow(resource.e).subscribe(o), disposable);
	      }
	      resource && (disposable = resource);
	      var source = tryCatch(this._obsFn)(resource);
	      if (source === errorObj) {
	        return new BinaryDisposable(observableThrow(source.e).subscribe(o), disposable);
	      }
	      return new BinaryDisposable(source.subscribe(o), disposable);
	    };

	    return UsingObservable;
	  }(ObservableBase));

	  /**
	   * Constructs an observable sequence that depends on a resource object, whose lifetime is tied to the resulting observable sequence's lifetime.
	   * @param {Function} resourceFactory Factory function to obtain a resource object.
	   * @param {Function} observableFactory Factory function to obtain an observable sequence that depends on the obtained resource.
	   * @returns {Observable} An observable sequence whose lifetime controls the lifetime of the dependent resource object.
	   */
	  Observable.using = function (resourceFactory, observableFactory) {
	    return new UsingObservable(resourceFactory, observableFactory);
	  };

	  /**
	   * Propagates the observable sequence or Promise that reacts first.
	   * @param {Observable} rightSource Second observable sequence or Promise.
	   * @returns {Observable} {Observable} An observable sequence that surfaces either of the given sequences, whichever reacted first.
	   */
	  observableProto.amb = function (rightSource) {
	    var leftSource = this;
	    return new AnonymousObservable(function (observer) {
	      var choice,
	        leftChoice = 'L', rightChoice = 'R',
	        leftSubscription = new SingleAssignmentDisposable(),
	        rightSubscription = new SingleAssignmentDisposable();

	      isPromise(rightSource) && (rightSource = observableFromPromise(rightSource));

	      function choiceL() {
	        if (!choice) {
	          choice = leftChoice;
	          rightSubscription.dispose();
	        }
	      }

	      function choiceR() {
	        if (!choice) {
	          choice = rightChoice;
	          leftSubscription.dispose();
	        }
	      }

	      var leftSubscribe = observerCreate(
	        function (left) {
	          choiceL();
	          choice === leftChoice && observer.onNext(left);
	        },
	        function (e) {
	          choiceL();
	          choice === leftChoice && observer.onError(e);
	        },
	        function () {
	          choiceL();
	          choice === leftChoice && observer.onCompleted();
	        }
	      );
	      var rightSubscribe = observerCreate(
	        function (right) {
	          choiceR();
	          choice === rightChoice && observer.onNext(right);
	        },
	        function (e) {
	          choiceR();
	          choice === rightChoice && observer.onError(e);
	        },
	        function () {
	          choiceR();
	          choice === rightChoice && observer.onCompleted();
	        }
	      );

	      leftSubscription.setDisposable(leftSource.subscribe(leftSubscribe));
	      rightSubscription.setDisposable(rightSource.subscribe(rightSubscribe));

	      return new BinaryDisposable(leftSubscription, rightSubscription);
	    });
	  };

	  function amb(p, c) { return p.amb(c); }

	  /**
	   * Propagates the observable sequence or Promise that reacts first.
	   * @returns {Observable} An observable sequence that surfaces any of the given sequences, whichever reacted first.
	   */
	  Observable.amb = function () {
	    var acc = observableNever(), items;
	    if (Array.isArray(arguments[0])) {
	      items = arguments[0];
	    } else {
	      var len = arguments.length;
	      items = new Array(items);
	      for(var i = 0; i < len; i++) { items[i] = arguments[i]; }
	    }
	    for (var i = 0, len = items.length; i < len; i++) {
	      acc = amb(acc, items[i]);
	    }
	    return acc;
	  };

	  var CatchObservable = (function (__super__) {
	    inherits(CatchObservable, __super__);
	    function CatchObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    CatchObservable.prototype.subscribeCore = function (o) {
	      var d1 = new SingleAssignmentDisposable(), subscription = new SerialDisposable();
	      subscription.setDisposable(d1);
	      d1.setDisposable(this.source.subscribe(new CatchObserver(o, subscription, this._fn)));
	      return subscription;
	    };

	    return CatchObservable;
	  }(ObservableBase));

	  var CatchObserver = (function(__super__) {
	    inherits(CatchObserver, __super__);
	    function CatchObserver(o, s, fn) {
	      this._o = o;
	      this._s = s;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    CatchObserver.prototype.next = function (x) { this._o.onNext(x); };
	    CatchObserver.prototype.completed = function () { return this._o.onCompleted(); };
	    CatchObserver.prototype.error = function (e) {
	      var result = tryCatch(this._fn)(e);
	      if (result === errorObj) { return this._o.onError(result.e); }
	      isPromise(result) && (result = observableFromPromise(result));

	      var d = new SingleAssignmentDisposable();
	      this._s.setDisposable(d);
	      d.setDisposable(result.subscribe(this._o));
	    };

	    return CatchObserver;
	  }(AbstractObserver));

	  /**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
	   * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
	   */
	  observableProto['catch'] = function (handlerOrSecond) {
	    return isFunction(handlerOrSecond) ? new CatchObservable(this, handlerOrSecond) : observableCatch([this, handlerOrSecond]);
	  };

	  /**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
	   * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
	   */
	  var observableCatch = Observable['catch'] = function () {
	    var items;
	    if (Array.isArray(arguments[0])) {
	      items = arguments[0];
	    } else {
	      var len = arguments.length;
	      items = new Array(len);
	      for(var i = 0; i < len; i++) { items[i] = arguments[i]; }
	    }
	    return enumerableOf(items).catchError();
	  };

	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	   * This can be in the form of an argument list of observables or an array.
	   *
	   * @example
	   * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	   * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  observableProto.combineLatest = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    if (Array.isArray(args[0])) {
	      args[0].unshift(this);
	    } else {
	      args.unshift(this);
	    }
	    return combineLatest.apply(this, args);
	  };

	  function falseFactory() { return false; }
	  function argumentsToArray() {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return args;
	  }

	  var CombineLatestObservable = (function(__super__) {
	    inherits(CombineLatestObservable, __super__);
	    function CombineLatestObservable(params, cb) {
	      this._params = params;
	      this._cb = cb;
	      __super__.call(this);
	    }

	    CombineLatestObservable.prototype.subscribeCore = function(observer) {
	      var len = this._params.length,
	          subscriptions = new Array(len);

	      var state = {
	        hasValue: arrayInitialize(len, falseFactory),
	        hasValueAll: false,
	        isDone: arrayInitialize(len, falseFactory),
	        values: new Array(len)
	      };

	      for (var i = 0; i < len; i++) {
	        var source = this._params[i], sad = new SingleAssignmentDisposable();
	        subscriptions[i] = sad;
	        isPromise(source) && (source = observableFromPromise(source));
	        sad.setDisposable(source.subscribe(new CombineLatestObserver(observer, i, this._cb, state)));
	      }

	      return new NAryDisposable(subscriptions);
	    };

	    return CombineLatestObservable;
	  }(ObservableBase));

	  var CombineLatestObserver = (function (__super__) {
	    inherits(CombineLatestObserver, __super__);
	    function CombineLatestObserver(o, i, cb, state) {
	      this._o = o;
	      this._i = i;
	      this._cb = cb;
	      this._state = state;
	      __super__.call(this);
	    }

	    function notTheSame(i) {
	      return function (x, j) {
	        return j !== i;
	      };
	    }

	    CombineLatestObserver.prototype.next = function (x) {
	      this._state.values[this._i] = x;
	      this._state.hasValue[this._i] = true;
	      if (this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(identity))) {
	        var res = tryCatch(this._cb).apply(null, this._state.values);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._o.onNext(res);
	      } else if (this._state.isDone.filter(notTheSame(this._i)).every(identity)) {
	        this._o.onCompleted();
	      }
	    };

	    CombineLatestObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    CombineLatestObserver.prototype.completed = function () {
	      this._state.isDone[this._i] = true;
	      this._state.isDone.every(identity) && this._o.onCompleted();
	    };

	    return CombineLatestObserver;
	  }(AbstractObserver));

	  /**
	  * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	  *
	  * @example
	  * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	  * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	  * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	  */
	  var combineLatest = Observable.combineLatest = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	    return new CombineLatestObservable(args, resultSelector);
	  };

	  /**
	   * Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */
	  observableProto.concat = function () {
	    for(var args = [], i = 0, len = arguments.length; i < len; i++) { args.push(arguments[i]); }
	    args.unshift(this);
	    return observableConcat.apply(null, args);
	  };

	  var ConcatObserver = (function(__super__) {
	    inherits(ConcatObserver, __super__);
	    function ConcatObserver(s, fn) {
	      this._s = s;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    ConcatObserver.prototype.next = function (x) { this._s.o.onNext(x); };
	    ConcatObserver.prototype.error = function (e) { this._s.o.onError(e); };
	    ConcatObserver.prototype.completed = function () { this._s.i++; this._fn(this._s); };

	    return ConcatObserver;
	  }(AbstractObserver));

	  var ConcatObservable = (function(__super__) {
	    inherits(ConcatObservable, __super__);
	    function ConcatObservable(sources) {
	      this._sources = sources;
	      __super__.call(this);
	    }

	    function scheduleRecursive (state, recurse) {
	      if (state.disposable.isDisposed) { return; }
	      if (state.i === state.sources.length) { return state.o.onCompleted(); }

	      // Check if promise
	      var currentValue = state.sources[state.i];
	      isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));

	      var d = new SingleAssignmentDisposable();
	      state.subscription.setDisposable(d);
	      d.setDisposable(currentValue.subscribe(new ConcatObserver(state, recurse)));
	    }

	    ConcatObservable.prototype.subscribeCore = function(o) {
	      var subscription = new SerialDisposable();
	      var disposable = disposableCreate(noop);
	      var state = {
	        o: o,
	        i: 0,
	        subscription: subscription,
	        disposable: disposable,
	        sources: this._sources
	      };

	      var cancelable = immediateScheduler.scheduleRecursive(state, scheduleRecursive);
	      return new NAryDisposable([subscription, disposable, cancelable]);
	    };

	    return ConcatObservable;
	  }(ObservableBase));

	  /**
	   * Concatenates all the observable sequences.
	   * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */
	  var observableConcat = Observable.concat = function () {
	    var args;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	    } else {
	      args = new Array(arguments.length);
	      for(var i = 0, len = arguments.length; i < len; i++) { args[i] = arguments[i]; }
	    }
	    return new ConcatObservable(args);
	  };

	  /**
	   * Concatenates an observable sequence of observable sequences.
	   * @returns {Observable} An observable sequence that contains the elements of each observed inner sequence, in sequential order.
	   */
	  observableProto.concatAll = function () {
	    return this.merge(1);
	  };

	  var MergeObservable = (function (__super__) {
	    inherits(MergeObservable, __super__);

	    function MergeObservable(source, maxConcurrent) {
	      this.source = source;
	      this.maxConcurrent = maxConcurrent;
	      __super__.call(this);
	    }

	    MergeObservable.prototype.subscribeCore = function(observer) {
	      var g = new CompositeDisposable();
	      g.add(this.source.subscribe(new MergeObserver(observer, this.maxConcurrent, g)));
	      return g;
	    };

	    return MergeObservable;

	  }(ObservableBase));

	  var MergeObserver = (function (__super__) {
	    function MergeObserver(o, max, g) {
	      this.o = o;
	      this.max = max;
	      this.g = g;
	      this.done = false;
	      this.q = [];
	      this.activeCount = 0;
	      __super__.call(this);
	    }

	    inherits(MergeObserver, __super__);

	    MergeObserver.prototype.handleSubscribe = function (xs) {
	      var sad = new SingleAssignmentDisposable();
	      this.g.add(sad);
	      isPromise(xs) && (xs = observableFromPromise(xs));
	      sad.setDisposable(xs.subscribe(new InnerObserver(this, sad)));
	    };

	    MergeObserver.prototype.next = function (innerSource) {
	      if(this.activeCount < this.max) {
	        this.activeCount++;
	        this.handleSubscribe(innerSource);
	      } else {
	        this.q.push(innerSource);
	      }
	    };
	    MergeObserver.prototype.error = function (e) { this.o.onError(e); };
	    MergeObserver.prototype.completed = function () { this.done = true; this.activeCount === 0 && this.o.onCompleted(); };

	    function InnerObserver(parent, sad) {
	      this.parent = parent;
	      this.sad = sad;
	      __super__.call(this);
	    }

	    inherits(InnerObserver, __super__);

	    InnerObserver.prototype.next = function (x) { this.parent.o.onNext(x); };
	    InnerObserver.prototype.error = function (e) { this.parent.o.onError(e); };
	    InnerObserver.prototype.completed = function () {
	      this.parent.g.remove(this.sad);
	      if (this.parent.q.length > 0) {
	        this.parent.handleSubscribe(this.parent.q.shift());
	      } else {
	        this.parent.activeCount--;
	        this.parent.done && this.parent.activeCount === 0 && this.parent.o.onCompleted();
	      }
	    };

	    return MergeObserver;
	  }(AbstractObserver));

	  /**
	  * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
	  * Or merges two observable sequences into a single observable sequence.
	  * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */
	  observableProto.merge = function (maxConcurrentOrOther) {
	    return typeof maxConcurrentOrOther !== 'number' ?
	      observableMerge(this, maxConcurrentOrOther) :
	      new MergeObservable(this, maxConcurrentOrOther);
	  };

	  /**
	   * Merges all the observable sequences into a single observable sequence.
	   * The scheduler is optional and if not specified, the immediate scheduler is used.
	   * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
	   */
	  var observableMerge = Observable.merge = function () {
	    var scheduler, sources = [], i, len = arguments.length;
	    if (!arguments[0]) {
	      scheduler = immediateScheduler;
	      for(i = 1; i < len; i++) { sources.push(arguments[i]); }
	    } else if (isScheduler(arguments[0])) {
	      scheduler = arguments[0];
	      for(i = 1; i < len; i++) { sources.push(arguments[i]); }
	    } else {
	      scheduler = immediateScheduler;
	      for(i = 0; i < len; i++) { sources.push(arguments[i]); }
	    }
	    if (Array.isArray(sources[0])) {
	      sources = sources[0];
	    }
	    return observableOf(scheduler, sources).mergeAll();
	  };

	  var MergeAllObservable = (function (__super__) {
	    inherits(MergeAllObservable, __super__);

	    function MergeAllObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    MergeAllObservable.prototype.subscribeCore = function (o) {
	      var g = new CompositeDisposable(), m = new SingleAssignmentDisposable();
	      g.add(m);
	      m.setDisposable(this.source.subscribe(new MergeAllObserver(o, g)));
	      return g;
	    };

	    return MergeAllObservable;
	  }(ObservableBase));

	  var MergeAllObserver = (function (__super__) {
	    function MergeAllObserver(o, g) {
	      this.o = o;
	      this.g = g;
	      this.done = false;
	      __super__.call(this);
	    }

	    inherits(MergeAllObserver, __super__);

	    MergeAllObserver.prototype.next = function(innerSource) {
	      var sad = new SingleAssignmentDisposable();
	      this.g.add(sad);
	      isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
	      sad.setDisposable(innerSource.subscribe(new InnerObserver(this, sad)));
	    };

	    MergeAllObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };

	    MergeAllObserver.prototype.completed = function () {
	      this.done = true;
	      this.g.length === 1 && this.o.onCompleted();
	    };

	    function InnerObserver(parent, sad) {
	      this.parent = parent;
	      this.sad = sad;
	      __super__.call(this);
	    }

	    inherits(InnerObserver, __super__);

	    InnerObserver.prototype.next = function (x) {
	      this.parent.o.onNext(x);
	    };
	    InnerObserver.prototype.error = function (e) {
	      this.parent.o.onError(e);
	    };
	    InnerObserver.prototype.completed = function () {
	      this.parent.g.remove(this.sad);
	      this.parent.done && this.parent.g.length === 1 && this.parent.o.onCompleted();
	    };

	    return MergeAllObserver;
	  }(AbstractObserver));

	  /**
	  * Merges an observable sequence of observable sequences into an observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */
	  observableProto.mergeAll = function () {
	    return new MergeAllObservable(this);
	  };

	  var CompositeError = Rx.CompositeError = function(errors) {
	    this.innerErrors = errors;
	    this.message = 'This contains multiple errors. Check the innerErrors';
	    Error.call(this);
	  };
	  CompositeError.prototype = Object.create(Error.prototype);
	  CompositeError.prototype.name = 'CompositeError';

	  var MergeDelayErrorObservable = (function(__super__) {
	    inherits(MergeDelayErrorObservable, __super__);
	    function MergeDelayErrorObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    MergeDelayErrorObservable.prototype.subscribeCore = function (o) {
	      var group = new CompositeDisposable(),
	        m = new SingleAssignmentDisposable(),
	        state = { isStopped: false, errors: [], o: o };

	      group.add(m);
	      m.setDisposable(this.source.subscribe(new MergeDelayErrorObserver(group, state)));

	      return group;
	    };

	    return MergeDelayErrorObservable;
	  }(ObservableBase));

	  var MergeDelayErrorObserver = (function(__super__) {
	    inherits(MergeDelayErrorObserver, __super__);
	    function MergeDelayErrorObserver(group, state) {
	      this._group = group;
	      this._state = state;
	      __super__.call(this);
	    }

	    function setCompletion(o, errors) {
	      if (errors.length === 0) {
	        o.onCompleted();
	      } else if (errors.length === 1) {
	        o.onError(errors[0]);
	      } else {
	        o.onError(new CompositeError(errors));
	      }
	    }

	    MergeDelayErrorObserver.prototype.next = function (x) {
	      var inner = new SingleAssignmentDisposable();
	      this._group.add(inner);

	      // Check for promises support
	      isPromise(x) && (x = observableFromPromise(x));
	      inner.setDisposable(x.subscribe(new InnerObserver(inner, this._group, this._state)));
	    };

	    MergeDelayErrorObserver.prototype.error = function (e) {
	      this._state.errors.push(e);
	      this._state.isStopped = true;
	      this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };

	    MergeDelayErrorObserver.prototype.completed = function () {
	      this._state.isStopped = true;
	      this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };

	    inherits(InnerObserver, __super__);
	    function InnerObserver(inner, group, state) {
	      this._inner = inner;
	      this._group = group;
	      this._state = state;
	      __super__.call(this);
	    }

	    InnerObserver.prototype.next = function (x) { this._state.o.onNext(x); };
	    InnerObserver.prototype.error = function (e) {
	      this._state.errors.push(e);
	      this._group.remove(this._inner);
	      this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	    InnerObserver.prototype.completed = function () {
	      this._group.remove(this._inner);
	      this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };

	    return MergeDelayErrorObserver;
	  }(AbstractObserver));

	  /**
	  * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
	  * receive all successfully emitted items from all of the source Observables without being interrupted by
	  * an error notification from one of them.
	  *
	  * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
	  * error via the Observer's onError, mergeDelayError will refrain from propagating that
	  * error notification until all of the merged Observables have finished emitting items.
	  * @param {Array | Arguments} args Arguments or an array to merge.
	  * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
	  */
	  Observable.mergeDelayError = function() {
	    var args;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	    } else {
	      var len = arguments.length;
	      args = new Array(len);
	      for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    }
	    var source = observableOf(null, args);
	    return new MergeDelayErrorObservable(source);
	  };

	  /**
	   * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
	   * @param {Observable} second Second observable sequence used to produce results after the first sequence terminates.
	   * @returns {Observable} An observable sequence that concatenates the first and second sequence, even if the first sequence terminates exceptionally.
	   */
	  observableProto.onErrorResumeNext = function (second) {
	    if (!second) { throw new Error('Second observable is required'); }
	    return onErrorResumeNext([this, second]);
	  };

	  var OnErrorResumeNextObservable = (function(__super__) {
	    inherits(OnErrorResumeNextObservable, __super__);
	    function OnErrorResumeNextObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }

	    function scheduleMethod(state, recurse) {
	      if (state.pos < state.sources.length) {
	        var current = state.sources[state.pos++];
	        isPromise(current) && (current = observableFromPromise(current));
	        var d = new SingleAssignmentDisposable();
	        state.subscription.setDisposable(d);
	        d.setDisposable(current.subscribe(new OnErrorResumeNextObserver(state, recurse)));
	      } else {
	        state.o.onCompleted();
	      }
	    }

	    OnErrorResumeNextObservable.prototype.subscribeCore = function (o) {
	      var subscription = new SerialDisposable(),
	          state = {pos: 0, subscription: subscription, o: o, sources: this.sources },
	          cancellable = immediateScheduler.scheduleRecursive(state, scheduleMethod);

	      return new BinaryDisposable(subscription, cancellable);
	    };

	    return OnErrorResumeNextObservable;
	  }(ObservableBase));

	  var OnErrorResumeNextObserver = (function(__super__) {
	    inherits(OnErrorResumeNextObserver, __super__);
	    function OnErrorResumeNextObserver(state, recurse) {
	      this._state = state;
	      this._recurse = recurse;
	      __super__.call(this);
	    }

	    OnErrorResumeNextObserver.prototype.next = function (x) { this._state.o.onNext(x); };
	    OnErrorResumeNextObserver.prototype.error = function () { this._recurse(this._state); };
	    OnErrorResumeNextObserver.prototype.completed = function () { this._recurse(this._state); };

	    return OnErrorResumeNextObserver;
	  }(AbstractObserver));

	  /**
	   * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
	   * @returns {Observable} An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
	   */
	  var onErrorResumeNext = Observable.onErrorResumeNext = function () {
	    var sources = [];
	    if (Array.isArray(arguments[0])) {
	      sources = arguments[0];
	    } else {
	      var len = arguments.length;
	      sources = new Array(len);
	      for(var i = 0; i < len; i++) { sources[i] = arguments[i]; }
	    }
	    return new OnErrorResumeNextObservable(sources);
	  };

	  var SkipUntilObservable = (function(__super__) {
	    inherits(SkipUntilObservable, __super__);

	    function SkipUntilObservable(source, other) {
	      this._s = source;
	      this._o = isPromise(other) ? observableFromPromise(other) : other;
	      this._open = false;
	      __super__.call(this);
	    }

	    SkipUntilObservable.prototype.subscribeCore = function(o) {
	      var leftSubscription = new SingleAssignmentDisposable();
	      leftSubscription.setDisposable(this._s.subscribe(new SkipUntilSourceObserver(o, this)));

	      isPromise(this._o) && (this._o = observableFromPromise(this._o));

	      var rightSubscription = new SingleAssignmentDisposable();
	      rightSubscription.setDisposable(this._o.subscribe(new SkipUntilOtherObserver(o, this, rightSubscription)));

	      return new BinaryDisposable(leftSubscription, rightSubscription);
	    };

	    return SkipUntilObservable;
	  }(ObservableBase));

	  var SkipUntilSourceObserver = (function(__super__) {
	    inherits(SkipUntilSourceObserver, __super__);
	    function SkipUntilSourceObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      __super__.call(this);
	    }

	    SkipUntilSourceObserver.prototype.next = function (x) {
	      this._p._open && this._o.onNext(x);
	    };

	    SkipUntilSourceObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };

	    SkipUntilSourceObserver.prototype.onCompleted = function () {
	      this._p._open && this._o.onCompleted();
	    };

	    return SkipUntilSourceObserver;
	  }(AbstractObserver));

	  var SkipUntilOtherObserver = (function(__super__) {
	    inherits(SkipUntilOtherObserver, __super__);
	    function SkipUntilOtherObserver(o, p, r) {
	      this._o = o;
	      this._p = p;
	      this._r = r;
	      __super__.call(this);
	    }

	    SkipUntilOtherObserver.prototype.next = function () {
	      this._p._open = true;
	      this._r.dispose();
	    };

	    SkipUntilOtherObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };

	    SkipUntilOtherObserver.prototype.onCompleted = function () {
	      this._r.dispose();
	    };

	    return SkipUntilOtherObserver;
	  }(AbstractObserver));

	  /**
	   * Returns the values from the source observable sequence only after the other observable sequence produces a value.
	   * @param {Observable | Promise} other The observable sequence or Promise that triggers propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence starting from the point the other sequence triggered propagation.
	   */
	  observableProto.skipUntil = function (other) {
	    return new SkipUntilObservable(this, other);
	  };

	  var SwitchObservable = (function(__super__) {
	    inherits(SwitchObservable, __super__);
	    function SwitchObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    SwitchObservable.prototype.subscribeCore = function (o) {
	      var inner = new SerialDisposable(), s = this.source.subscribe(new SwitchObserver(o, inner));
	      return new BinaryDisposable(s, inner);
	    };

	    inherits(SwitchObserver, AbstractObserver);
	    function SwitchObserver(o, inner) {
	      this.o = o;
	      this.inner = inner;
	      this.stopped = false;
	      this.latest = 0;
	      this.hasLatest = false;
	      AbstractObserver.call(this);
	    }

	    SwitchObserver.prototype.next = function (innerSource) {
	      var d = new SingleAssignmentDisposable(), id = ++this.latest;
	      this.hasLatest = true;
	      this.inner.setDisposable(d);
	      isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
	      d.setDisposable(innerSource.subscribe(new InnerObserver(this, id)));
	    };

	    SwitchObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };

	    SwitchObserver.prototype.completed = function () {
	      this.stopped = true;
	      !this.hasLatest && this.o.onCompleted();
	    };

	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(parent, id) {
	      this.parent = parent;
	      this.id = id;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.next = function (x) {
	      this.parent.latest === this.id && this.parent.o.onNext(x);
	    };

	    InnerObserver.prototype.error = function (e) {
	      this.parent.latest === this.id && this.parent.o.onError(e);
	    };

	    InnerObserver.prototype.completed = function () {
	      if (this.parent.latest === this.id) {
	        this.parent.hasLatest = false;
	        this.parent.stopped && this.parent.o.onCompleted();
	      }
	    };

	    return SwitchObservable;
	  }(ObservableBase));

	  /**
	  * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
	  * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
	  */
	  observableProto['switch'] = observableProto.switchLatest = function () {
	    return new SwitchObservable(this);
	  };

	  var TakeUntilObservable = (function(__super__) {
	    inherits(TakeUntilObservable, __super__);

	    function TakeUntilObservable(source, other) {
	      this.source = source;
	      this.other = isPromise(other) ? observableFromPromise(other) : other;
	      __super__.call(this);
	    }

	    TakeUntilObservable.prototype.subscribeCore = function(o) {
	      return new BinaryDisposable(
	        this.source.subscribe(o),
	        this.other.subscribe(new TakeUntilObserver(o))
	      );
	    };

	    return TakeUntilObservable;
	  }(ObservableBase));

	  var TakeUntilObserver = (function(__super__) {
	    inherits(TakeUntilObserver, __super__);
	    function TakeUntilObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }

	    TakeUntilObserver.prototype.next = function () {
	      this._o.onCompleted();
	    };

	    TakeUntilObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };

	    TakeUntilObserver.prototype.onCompleted = noop;

	    return TakeUntilObserver;
	  }(AbstractObserver));

	  /**
	   * Returns the values from the source observable sequence until the other observable sequence produces a value.
	   * @param {Observable | Promise} other Observable sequence or Promise that terminates propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence up to the point the other sequence interrupted further propagation.
	   */
	  observableProto.takeUntil = function (other) {
	    return new TakeUntilObservable(this, other);
	  };

	  function falseFactory() { return false; }
	  function argumentsToArray() {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return args;
	  }

	  var WithLatestFromObservable = (function(__super__) {
	    inherits(WithLatestFromObservable, __super__);
	    function WithLatestFromObservable(source, sources, resultSelector) {
	      this._s = source;
	      this._ss = sources;
	      this._cb = resultSelector;
	      __super__.call(this);
	    }

	    WithLatestFromObservable.prototype.subscribeCore = function (o) {
	      var len = this._ss.length;
	      var state = {
	        hasValue: arrayInitialize(len, falseFactory),
	        hasValueAll: false,
	        values: new Array(len)
	      };

	      var n = this._ss.length, subscriptions = new Array(n + 1);
	      for (var i = 0; i < n; i++) {
	        var other = this._ss[i], sad = new SingleAssignmentDisposable();
	        isPromise(other) && (other = observableFromPromise(other));
	        sad.setDisposable(other.subscribe(new WithLatestFromOtherObserver(o, i, state)));
	        subscriptions[i] = sad;
	      }

	      var outerSad = new SingleAssignmentDisposable();
	      outerSad.setDisposable(this._s.subscribe(new WithLatestFromSourceObserver(o, this._cb, state)));
	      subscriptions[n] = outerSad;

	      return new NAryDisposable(subscriptions);
	    };

	    return WithLatestFromObservable;
	  }(ObservableBase));

	  var WithLatestFromOtherObserver = (function (__super__) {
	    inherits(WithLatestFromOtherObserver, __super__);
	    function WithLatestFromOtherObserver(o, i, state) {
	      this._o = o;
	      this._i = i;
	      this._state = state;
	      __super__.call(this);
	    }

	    WithLatestFromOtherObserver.prototype.next = function (x) {
	      this._state.values[this._i] = x;
	      this._state.hasValue[this._i] = true;
	      this._state.hasValueAll = this._state.hasValue.every(identity);
	    };

	    WithLatestFromOtherObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    WithLatestFromOtherObserver.prototype.completed = noop;

	    return WithLatestFromOtherObserver;
	  }(AbstractObserver));

	  var WithLatestFromSourceObserver = (function (__super__) {
	    inherits(WithLatestFromSourceObserver, __super__);
	    function WithLatestFromSourceObserver(o, cb, state) {
	      this._o = o;
	      this._cb = cb;
	      this._state = state;
	      __super__.call(this);
	    }

	    WithLatestFromSourceObserver.prototype.next = function (x) {
	      var allValues = [x].concat(this._state.values);
	      if (!this._state.hasValueAll) { return; }
	      var res = tryCatch(this._cb).apply(null, allValues);
	      if (res === errorObj) { return this._o.onError(res.e); }
	      this._o.onNext(res);
	    };

	    WithLatestFromSourceObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    WithLatestFromSourceObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };

	    return WithLatestFromSourceObserver;
	  }(AbstractObserver));

	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  observableProto.withLatestFrom = function () {
	    if (arguments.length === 0) { throw new Error('invalid arguments'); }

	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);

	    return new WithLatestFromObservable(this, args, resultSelector);
	  };

	  function falseFactory() { return false; }
	  function emptyArrayFactory() { return []; }

	  var ZipObservable = (function(__super__) {
	    inherits(ZipObservable, __super__);
	    function ZipObservable(sources, resultSelector) {
	      this._s = sources;
	      this._cb = resultSelector;
	      __super__.call(this);
	    }

	    ZipObservable.prototype.subscribeCore = function(observer) {
	      var n = this._s.length,
	          subscriptions = new Array(n),
	          done = arrayInitialize(n, falseFactory),
	          q = arrayInitialize(n, emptyArrayFactory);

	      for (var i = 0; i < n; i++) {
	        var source = this._s[i], sad = new SingleAssignmentDisposable();
	        subscriptions[i] = sad;
	        isPromise(source) && (source = observableFromPromise(source));
	        sad.setDisposable(source.subscribe(new ZipObserver(observer, i, this, q, done)));
	      }

	      return new NAryDisposable(subscriptions);
	    };

	    return ZipObservable;
	  }(ObservableBase));

	  var ZipObserver = (function (__super__) {
	    inherits(ZipObserver, __super__);
	    function ZipObserver(o, i, p, q, d) {
	      this._o = o;
	      this._i = i;
	      this._p = p;
	      this._q = q;
	      this._d = d;
	      __super__.call(this);
	    }

	    function notEmpty(x) { return x.length > 0; }
	    function shiftEach(x) { return x.shift(); }
	    function notTheSame(i) {
	      return function (x, j) {
	        return j !== i;
	      };
	    }

	    ZipObserver.prototype.next = function (x) {
	      this._q[this._i].push(x);
	      if (this._q.every(notEmpty)) {
	        var queuedValues = this._q.map(shiftEach);
	        var res = tryCatch(this._p._cb).apply(null, queuedValues);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._o.onNext(res);
	      } else if (this._d.filter(notTheSame(this._i)).every(identity)) {
	        this._o.onCompleted();
	      }
	    };

	    ZipObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    ZipObserver.prototype.completed = function () {
	      this._d[this._i] = true;
	      this._d.every(identity) && this._o.onCompleted();
	    };

	    return ZipObserver;
	  }(AbstractObserver));

	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	   * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	   */
	  observableProto.zip = function () {
	    if (arguments.length === 0) { throw new Error('invalid arguments'); }

	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);

	    var parent = this;
	    args.unshift(parent);

	    return new ZipObservable(args, resultSelector);
	  };

	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
	   * @param arguments Observable sources.
	   * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  Observable.zip = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    if (Array.isArray(args[0])) {
	      args = isFunction(args[1]) ? args[0].concat(args[1]) : args[0];
	    }
	    var first = args.shift();
	    return first.zip.apply(first, args);
	  };

	function falseFactory() { return false; }
	function emptyArrayFactory() { return []; }
	function argumentsToArray() {
	  var len = arguments.length, args = new Array(len);
	  for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	  return args;
	}

	var ZipIterableObservable = (function(__super__) {
	  inherits(ZipIterableObservable, __super__);
	  function ZipIterableObservable(sources, cb) {
	    this.sources = sources;
	    this._cb = cb;
	    __super__.call(this);
	  }

	  ZipIterableObservable.prototype.subscribeCore = function (o) {
	    var sources = this.sources, len = sources.length, subscriptions = new Array(len);

	    var state = {
	      q: arrayInitialize(len, emptyArrayFactory),
	      done: arrayInitialize(len, falseFactory),
	      cb: this._cb,
	      o: o
	    };

	    for (var i = 0; i < len; i++) {
	      (function (i) {
	        var source = sources[i], sad = new SingleAssignmentDisposable();
	        (isArrayLike(source) || isIterable(source)) && (source = observableFrom(source));

	        subscriptions[i] = sad;
	        sad.setDisposable(source.subscribe(new ZipIterableObserver(state, i)));
	      }(i));
	    }

	    return new NAryDisposable(subscriptions);
	  };

	  return ZipIterableObservable;
	}(ObservableBase));

	var ZipIterableObserver = (function (__super__) {
	  inherits(ZipIterableObserver, __super__);
	  function ZipIterableObserver(s, i) {
	    this._s = s;
	    this._i = i;
	    __super__.call(this);
	  }

	  function notEmpty(x) { return x.length > 0; }
	  function shiftEach(x) { return x.shift(); }
	  function notTheSame(i) {
	    return function (x, j) {
	      return j !== i;
	    };
	  }

	  ZipIterableObserver.prototype.next = function (x) {
	    this._s.q[this._i].push(x);
	    if (this._s.q.every(notEmpty)) {
	      var queuedValues = this._s.q.map(shiftEach),
	          res = tryCatch(this._s.cb).apply(null, queuedValues);
	      if (res === errorObj) { return this._s.o.onError(res.e); }
	      this._s.o.onNext(res);
	    } else if (this._s.done.filter(notTheSame(this._i)).every(identity)) {
	      this._s.o.onCompleted();
	    }
	  };

	  ZipIterableObserver.prototype.error = function (e) { this._s.o.onError(e); };

	  ZipIterableObserver.prototype.completed = function () {
	    this._s.done[this._i] = true;
	    this._s.done.every(identity) && this._s.o.onCompleted();
	  };

	  return ZipIterableObserver;
	}(AbstractObserver));

	/**
	 * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	 * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	 * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	 */
	observableProto.zipIterable = function () {
	  if (arguments.length === 0) { throw new Error('invalid arguments'); }

	  var len = arguments.length, args = new Array(len);
	  for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	  var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;

	  var parent = this;
	  args.unshift(parent);
	  return new ZipIterableObservable(args, resultSelector);
	};

	  function asObservable(source) {
	    return function subscribe(o) { return source.subscribe(o); };
	  }

	  /**
	   *  Hides the identity of an observable sequence.
	   * @returns {Observable} An observable sequence that hides the identity of the source sequence.
	   */
	  observableProto.asObservable = function () {
	    return new AnonymousObservable(asObservable(this), this);
	  };

	  function toArray(x) { return x.toArray(); }
	  function notEmpty(x) { return x.length > 0; }

	  /**
	   *  Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.
	   * @param {Number} count Length of each buffer.
	   * @param {Number} [skip] Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.
	   * @returns {Observable} An observable sequence of buffers.
	   */
	  observableProto.bufferWithCount = observableProto.bufferCount = function (count, skip) {
	    typeof skip !== 'number' && (skip = count);
	    return this.windowWithCount(count, skip)
	      .flatMap(toArray)
	      .filter(notEmpty);
	  };

	  var DematerializeObservable = (function (__super__) {
	    inherits(DematerializeObservable, __super__);
	    function DematerializeObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    DematerializeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new DematerializeObserver(o));
	    };

	    return DematerializeObservable;
	  }(ObservableBase));

	  var DematerializeObserver = (function (__super__) {
	    inherits(DematerializeObserver, __super__);

	    function DematerializeObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }

	    DematerializeObserver.prototype.next = function (x) { x.accept(this._o); };
	    DematerializeObserver.prototype.error = function (e) { this._o.onError(e); };
	    DematerializeObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return DematerializeObserver;
	  }(AbstractObserver));

	  /**
	   * Dematerializes the explicit notification values of an observable sequence as implicit notifications.
	   * @returns {Observable} An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
	   */
	  observableProto.dematerialize = function () {
	    return new DematerializeObservable(this);
	  };

	  var DistinctUntilChangedObservable = (function(__super__) {
	    inherits(DistinctUntilChangedObservable, __super__);
	    function DistinctUntilChangedObservable(source, keyFn, comparer) {
	      this.source = source;
	      this.keyFn = keyFn;
	      this.comparer = comparer;
	      __super__.call(this);
	    }

	    DistinctUntilChangedObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new DistinctUntilChangedObserver(o, this.keyFn, this.comparer));
	    };

	    return DistinctUntilChangedObservable;
	  }(ObservableBase));

	  var DistinctUntilChangedObserver = (function(__super__) {
	    inherits(DistinctUntilChangedObserver, __super__);
	    function DistinctUntilChangedObserver(o, keyFn, comparer) {
	      this.o = o;
	      this.keyFn = keyFn;
	      this.comparer = comparer;
	      this.hasCurrentKey = false;
	      this.currentKey = null;
	      __super__.call(this);
	    }

	    DistinctUntilChangedObserver.prototype.next = function (x) {
	      var key = x, comparerEquals;
	      if (isFunction(this.keyFn)) {
	        key = tryCatch(this.keyFn)(x);
	        if (key === errorObj) { return this.o.onError(key.e); }
	      }
	      if (this.hasCurrentKey) {
	        comparerEquals = tryCatch(this.comparer)(this.currentKey, key);
	        if (comparerEquals === errorObj) { return this.o.onError(comparerEquals.e); }
	      }
	      if (!this.hasCurrentKey || !comparerEquals) {
	        this.hasCurrentKey = true;
	        this.currentKey = key;
	        this.o.onNext(x);
	      }
	    };
	    DistinctUntilChangedObserver.prototype.error = function(e) {
	      this.o.onError(e);
	    };
	    DistinctUntilChangedObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };

	    return DistinctUntilChangedObserver;
	  }(AbstractObserver));

	  /**
	  *  Returns an observable sequence that contains only distinct contiguous elements according to the keyFn and the comparer.
	  * @param {Function} [keyFn] A function to compute the comparison key for each element. If not provided, it projects the value.
	  * @param {Function} [comparer] Equality comparer for computed key values. If not provided, defaults to an equality comparer function.
	  * @returns {Observable} An observable sequence only containing the distinct contiguous elements, based on a computed key value, from the source sequence.
	  */
	  observableProto.distinctUntilChanged = function (keyFn, comparer) {
	    comparer || (comparer = defaultComparer);
	    return new DistinctUntilChangedObservable(this, keyFn, comparer);
	  };

	  var TapObservable = (function(__super__) {
	    inherits(TapObservable,__super__);
	    function TapObservable(source, observerOrOnNext, onError, onCompleted) {
	      this.source = source;
	      this._oN = observerOrOnNext;
	      this._oE = onError;
	      this._oC = onCompleted;
	      __super__.call(this);
	    }

	    TapObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o, this));
	    };

	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, p) {
	      this.o = o;
	      this.t = !p._oN || isFunction(p._oN) ?
	        observerCreate(p._oN || noop, p._oE || noop, p._oC || noop) :
	        p._oN;
	      this.isStopped = false;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.next = function(x) {
	      var res = tryCatch(this.t.onNext).call(this.t, x);
	      if (res === errorObj) { this.o.onError(res.e); }
	      this.o.onNext(x);
	    };
	    InnerObserver.prototype.error = function(err) {
	      var res = tryCatch(this.t.onError).call(this.t, err);
	      if (res === errorObj) { return this.o.onError(res.e); }
	      this.o.onError(err);
	    };
	    InnerObserver.prototype.completed = function() {
	      var res = tryCatch(this.t.onCompleted).call(this.t);
	      if (res === errorObj) { return this.o.onError(res.e); }
	      this.o.onCompleted();
	    };

	    return TapObservable;
	  }(ObservableBase));

	  /**
	  *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an o.
	  * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto['do'] = observableProto.tap = observableProto.doAction = function (observerOrOnNext, onError, onCompleted) {
	    return new TapObservable(this, observerOrOnNext, onError, onCompleted);
	  };

	  /**
	  *  Invokes an action for each element in the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onNext Action to invoke for each element in the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnNext = observableProto.tapOnNext = function (onNext, thisArg) {
	    return this.tap(typeof thisArg !== 'undefined' ? function (x) { onNext.call(thisArg, x); } : onNext);
	  };

	  /**
	  *  Invokes an action upon exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnError = observableProto.tapOnError = function (onError, thisArg) {
	    return this.tap(noop, typeof thisArg !== 'undefined' ? function (e) { onError.call(thisArg, e); } : onError);
	  };

	  /**
	  *  Invokes an action upon graceful termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnCompleted = observableProto.tapOnCompleted = function (onCompleted, thisArg) {
	    return this.tap(noop, null, typeof thisArg !== 'undefined' ? function () { onCompleted.call(thisArg); } : onCompleted);
	  };

	  var FinallyObservable = (function (__super__) {
	    inherits(FinallyObservable, __super__);
	    function FinallyObservable(source, fn, thisArg) {
	      this.source = source;
	      this._fn = bindCallback(fn, thisArg, 0);
	      __super__.call(this);
	    }

	    FinallyObservable.prototype.subscribeCore = function (o) {
	      var d = tryCatch(this.source.subscribe).call(this.source, o);
	      if (d === errorObj) {
	        this._fn();
	        thrower(d.e);
	      }

	      return new FinallyDisposable(d, this._fn);
	    };

	    function FinallyDisposable(s, fn) {
	      this.isDisposed = false;
	      this._s = s;
	      this._fn = fn;
	    }
	    FinallyDisposable.prototype.dispose = function () {
	      if (!this.isDisposed) {
	        var res = tryCatch(this._s.dispose).call(this._s);
	        this._fn();
	        res === errorObj && thrower(res.e);
	      }
	    };

	    return FinallyObservable;

	  }(ObservableBase));

	  /**
	   *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
	   * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
	   * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
	   */
	  observableProto['finally'] = function (action, thisArg) {
	    return new FinallyObservable(this, action, thisArg);
	  };

	  var IgnoreElementsObservable = (function(__super__) {
	    inherits(IgnoreElementsObservable, __super__);

	    function IgnoreElementsObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    IgnoreElementsObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o));
	    };

	    function InnerObserver(o) {
	      this.o = o;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype.onNext = noop;
	    InnerObserver.prototype.onError = function (err) {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(err);
	      }
	    };
	    InnerObserver.prototype.onCompleted = function () {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onCompleted();
	      }
	    };
	    InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	    InnerObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.observer.onError(e);
	        return true;
	      }

	      return false;
	    };

	    return IgnoreElementsObservable;
	  }(ObservableBase));

	  /**
	   *  Ignores all elements in an observable sequence leaving only the termination messages.
	   * @returns {Observable} An empty observable sequence that signals termination, successful or exceptional, of the source sequence.
	   */
	  observableProto.ignoreElements = function () {
	    return new IgnoreElementsObservable(this);
	  };

	  var MaterializeObservable = (function (__super__) {
	    inherits(MaterializeObservable, __super__);
	    function MaterializeObservable(source, fn) {
	      this.source = source;
	      __super__.call(this);
	    }

	    MaterializeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new MaterializeObserver(o));
	    };

	    return MaterializeObservable;
	  }(ObservableBase));

	  var MaterializeObserver = (function (__super__) {
	    inherits(MaterializeObserver, __super__);

	    function MaterializeObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }

	    MaterializeObserver.prototype.next = function (x) { this._o.onNext(notificationCreateOnNext(x)) };
	    MaterializeObserver.prototype.error = function (e) { this._o.onNext(notificationCreateOnError(e)); this._o.onCompleted(); };
	    MaterializeObserver.prototype.completed = function () { this._o.onNext(notificationCreateOnCompleted()); this._o.onCompleted(); };

	    return MaterializeObserver;
	  }(AbstractObserver));

	  /**
	   *  Materializes the implicit notifications of an observable sequence as explicit notification values.
	   * @returns {Observable} An observable sequence containing the materialized notification values from the source sequence.
	   */
	  observableProto.materialize = function () {
	    return new MaterializeObservable(this);
	  };

	  /**
	   *  Repeats the observable sequence a specified number of times. If the repeat count is not specified, the sequence repeats indefinitely.
	   * @param {Number} [repeatCount]  Number of times to repeat the sequence. If not provided, repeats the sequence indefinitely.
	   * @returns {Observable} The observable sequence producing the elements of the given sequence repeatedly.
	   */
	  observableProto.repeat = function (repeatCount) {
	    return enumerableRepeat(this, repeatCount).concat();
	  };

	  /**
	   *  Repeats the source observable sequence the specified number of times or until it successfully terminates. If the retry count is not specified, it retries indefinitely.
	   *  Note if you encounter an error and want it to retry once, then you must use .retry(2);
	   *
	   * @example
	   *  var res = retried = retry.repeat();
	   *  var res = retried = retry.repeat(2);
	   * @param {Number} [retryCount]  Number of times to retry the sequence. If not provided, retry the sequence indefinitely.
	   * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
	   */
	  observableProto.retry = function (retryCount) {
	    return enumerableRepeat(this, retryCount).catchError();
	  };

	  function repeat(value) {
	    return {
	      '@@iterator': function () {
	        return {
	          next: function () {
	            return { done: false, value: value };
	          }
	        };
	      }
	    };
	  }

	  var RetryWhenObservable = (function(__super__) {
	    function createDisposable(state) {
	      return {
	        isDisposed: false,
	        dispose: function () {
	          if (!this.isDisposed) {
	            this.isDisposed = true;
	            state.isDisposed = true;
	          }
	        }
	      };
	    }

	    function RetryWhenObservable(source, notifier) {
	      this.source = source;
	      this._notifier = notifier;
	      __super__.call(this);
	    }

	    inherits(RetryWhenObservable, __super__);

	    RetryWhenObservable.prototype.subscribeCore = function (o) {
	      var exceptions = new Subject(),
	        notifier = new Subject(),
	        handled = this._notifier(exceptions),
	        notificationDisposable = handled.subscribe(notifier);

	      var e = this.source['@@iterator']();

	      var state = { isDisposed: false },
	        lastError,
	        subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(null, function (_, recurse) {
	        if (state.isDisposed) { return; }
	        var currentItem = e.next();

	        if (currentItem.done) {
	          if (lastError) {
	            o.onError(lastError);
	          } else {
	            o.onCompleted();
	          }
	          return;
	        }

	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));

	        var outer = new SingleAssignmentDisposable();
	        var inner = new SingleAssignmentDisposable();
	        subscription.setDisposable(new BinaryDisposable(inner, outer));
	        outer.setDisposable(currentValue.subscribe(
	          function(x) { o.onNext(x); },
	          function (exn) {
	            inner.setDisposable(notifier.subscribe(recurse, function(ex) {
	              o.onError(ex);
	            }, function() {
	              o.onCompleted();
	            }));

	            exceptions.onNext(exn);
	            outer.dispose();
	          },
	          function() { o.onCompleted(); }));
	      });

	      return new NAryDisposable([notificationDisposable, subscription, cancelable, createDisposable(state)]);
	    };

	    return RetryWhenObservable;
	  }(ObservableBase));

	  observableProto.retryWhen = function (notifier) {
	    return new RetryWhenObservable(repeat(this), notifier);
	  };

	  function repeat(value) {
	    return {
	      '@@iterator': function () {
	        return {
	          next: function () {
	            return { done: false, value: value };
	          }
	        };
	      }
	    };
	  }

	  var RepeatWhenObservable = (function(__super__) {
	    function createDisposable(state) {
	      return {
	        isDisposed: false,
	        dispose: function () {
	          if (!this.isDisposed) {
	            this.isDisposed = true;
	            state.isDisposed = true;
	          }
	        }
	      };
	    }

	    function RepeatWhenObservable(source, notifier) {
	      this.source = source;
	      this._notifier = notifier;
	      __super__.call(this);
	    }

	    inherits(RepeatWhenObservable, __super__);

	    RepeatWhenObservable.prototype.subscribeCore = function (o) {
	      var completions = new Subject(),
	        notifier = new Subject(),
	        handled = this._notifier(completions),
	        notificationDisposable = handled.subscribe(notifier);

	      var e = this.source['@@iterator']();

	      var state = { isDisposed: false },
	        lastError,
	        subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(null, function (_, recurse) {
	        if (state.isDisposed) { return; }
	        var currentItem = e.next();

	        if (currentItem.done) {
	          if (lastError) {
	            o.onError(lastError);
	          } else {
	            o.onCompleted();
	          }
	          return;
	        }

	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));

	        var outer = new SingleAssignmentDisposable();
	        var inner = new SingleAssignmentDisposable();
	        subscription.setDisposable(new BinaryDisposable(inner, outer));
	        outer.setDisposable(currentValue.subscribe(
	          function(x) { o.onNext(x); },
	          function (exn) { o.onError(exn); },
	          function() {
	            inner.setDisposable(notifier.subscribe(recurse, function(ex) {
	              o.onError(ex);
	            }, function() {
	              o.onCompleted();
	            }));

	            completions.onNext(null);
	            outer.dispose();
	          }));
	      });

	      return new NAryDisposable([notificationDisposable, subscription, cancelable, createDisposable(state)]);
	    };

	    return RepeatWhenObservable;
	  }(ObservableBase));

	  observableProto.repeatWhen = function (notifier) {
	    return new RepeatWhenObservable(repeat(this), notifier);
	  };

	  var ScanObservable = (function(__super__) {
	    inherits(ScanObservable, __super__);
	    function ScanObservable(source, accumulator, hasSeed, seed) {
	      this.source = source;
	      this.accumulator = accumulator;
	      this.hasSeed = hasSeed;
	      this.seed = seed;
	      __super__.call(this);
	    }

	    ScanObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new ScanObserver(o,this));
	    };

	    return ScanObservable;
	  }(ObservableBase));

	  var ScanObserver = (function (__super__) {
	    inherits(ScanObserver, __super__);
	    function ScanObserver(o, parent) {
	      this._o = o;
	      this._p = parent;
	      this._fn = parent.accumulator;
	      this._hs = parent.hasSeed;
	      this._s = parent.seed;
	      this._ha = false;
	      this._a = null;
	      this._hv = false;
	      this._i = 0;
	      __super__.call(this);
	    }

	    ScanObserver.prototype.next = function (x) {
	      !this._hv && (this._hv = true);
	      if (this._ha) {
	        this._a = tryCatch(this._fn)(this._a, x, this._i, this._p);
	      } else {
	        this._a = this._hs ? tryCatch(this._fn)(this._s, x, this._i, this._p) : x;
	        this._ha = true;
	      }
	      if (this._a === errorObj) { return this._o.onError(this._a.e); }
	      this._o.onNext(this._a);
	      this._i++;
	    };

	    ScanObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    ScanObserver.prototype.completed = function () {
	      !this._hv && this._hs && this._o.onNext(this._s);
	      this._o.onCompleted();
	    };

	    return ScanObserver;
	  }(AbstractObserver));

	  /**
	  *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
	  *  For aggregation behavior with no intermediate results, see Observable.aggregate.
	  * @param {Mixed} [seed] The initial accumulator value.
	  * @param {Function} accumulator An accumulator function to be invoked on each element.
	  * @returns {Observable} An observable sequence containing the accumulated values.
	  */
	  observableProto.scan = function () {
	    var hasSeed = false, seed, accumulator = arguments[0];
	    if (arguments.length === 2) {
	      hasSeed = true;
	      seed = arguments[1];
	    }
	    return new ScanObservable(this, accumulator, hasSeed, seed);
	  };

	  var SkipLastObservable = (function (__super__) {
	    inherits(SkipLastObservable, __super__);
	    function SkipLastObservable(source, c) {
	      this.source = source;
	      this._c = c;
	      __super__.call(this);
	    }

	    SkipLastObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipLastObserver(o, this._c));
	    };

	    return SkipLastObservable;
	  }(ObservableBase));

	  var SkipLastObserver = (function (__super__) {
	    inherits(SkipLastObserver, __super__);
	    function SkipLastObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._q = [];
	      __super__.call(this);
	    }

	    SkipLastObserver.prototype.next = function (x) {
	      this._q.push(x);
	      this._q.length > this._c && this._o.onNext(this._q.shift());
	    };

	    SkipLastObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    SkipLastObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };

	    return SkipLastObserver;
	  }(AbstractObserver));

	  /**
	   *  Bypasses a specified number of elements at the end of an observable sequence.
	   * @description
	   *  This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are
	   *  received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed.
	   * @param count Number of elements to bypass at the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the source sequence elements except for the bypassed ones at the end.
	   */
	  observableProto.skipLast = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    return new SkipLastObservable(this, count);
	  };

	  /**
	   *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
	   *  @example
	   *  var res = source.startWith(1, 2, 3);
	   *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
	   * @param {Arguments} args The specified values to prepend to the observable sequence
	   * @returns {Observable} The source sequence prepended with the specified values.
	   */
	  observableProto.startWith = function () {
	    var values, scheduler, start = 0;
	    if (!!arguments.length && isScheduler(arguments[0])) {
	      scheduler = arguments[0];
	      start = 1;
	    } else {
	      scheduler = immediateScheduler;
	    }
	    for(var args = [], i = start, len = arguments.length; i < len; i++) { args.push(arguments[i]); }
	    return observableConcat.apply(null, [observableFromArray(args, scheduler), this]);
	  };

	  var TakeLastObserver = (function (__super__) {
	    inherits(TakeLastObserver, __super__);
	    function TakeLastObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._q = [];
	      __super__.call(this);
	    }

	    TakeLastObserver.prototype.next = function (x) {
	      this._q.push(x);
	      this._q.length > this._c && this._q.shift();
	    };

	    TakeLastObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    TakeLastObserver.prototype.completed = function () {
	      while (this._q.length > 0) { this._o.onNext(this._q.shift()); }
	      this._o.onCompleted();
	    };

	    return TakeLastObserver;
	  }(AbstractObserver));

	  /**
	   *  Returns a specified number of contiguous elements from the end of an observable sequence.
	   * @description
	   *  This operator accumulates a buffer with a length enough to store elements count elements. Upon completion of
	   *  the source sequence, this buffer is drained on the result sequence. This causes the elements to be delayed.
	   * @param {Number} count Number of elements to take from the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the specified number of elements from the end of the source sequence.
	   */
	  observableProto.takeLast = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      return source.subscribe(new TakeLastObserver(o, count));
	    }, source);
	  };

	  var TakeLastBufferObserver = (function (__super__) {
	    inherits(TakeLastBufferObserver, __super__);
	    function TakeLastBufferObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._q = [];
	      __super__.call(this);
	    }

	    TakeLastBufferObserver.prototype.next = function (x) {
	      this._q.push(x);
	      this._q.length > this._c && this._q.shift();
	    };

	    TakeLastBufferObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    TakeLastBufferObserver.prototype.completed = function () {
	      this._o.onNext(this._q);
	      this._o.onCompleted();
	    };

	    return TakeLastBufferObserver;
	  }(AbstractObserver));

	  /**
	   *  Returns an array with the specified number of contiguous elements from the end of an observable sequence.
	   *
	   * @description
	   *  This operator accumulates a buffer with a length enough to store count elements. Upon completion of the
	   *  source sequence, this buffer is produced on the result sequence.
	   * @param {Number} count Number of elements to take from the end of the source sequence.
	   * @returns {Observable} An observable sequence containing a single array with the specified number of elements from the end of the source sequence.
	   */
	  observableProto.takeLastBuffer = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      return source.subscribe(new TakeLastBufferObserver(o, count));
	    }, source);
	  };

	  /**
	   *  Projects each element of an observable sequence into zero or more windows which are produced based on element count information.
	   * @param {Number} count Length of each window.
	   * @param {Number} [skip] Number of elements to skip between creation of consecutive windows. If not specified, defaults to the count.
	   * @returns {Observable} An observable sequence of windows.
	   */
	  observableProto.windowWithCount = observableProto.windowCount = function (count, skip) {
	    var source = this;
	    +count || (count = 0);
	    Math.abs(count) === Infinity && (count = 0);
	    if (count <= 0) { throw new ArgumentOutOfRangeError(); }
	    skip == null && (skip = count);
	    +skip || (skip = 0);
	    Math.abs(skip) === Infinity && (skip = 0);

	    if (skip <= 0) { throw new ArgumentOutOfRangeError(); }
	    return new AnonymousObservable(function (observer) {
	      var m = new SingleAssignmentDisposable(),
	        refCountDisposable = new RefCountDisposable(m),
	        n = 0,
	        q = [];

	      function createWindow () {
	        var s = new Subject();
	        q.push(s);
	        observer.onNext(addRef(s, refCountDisposable));
	      }

	      createWindow();

	      m.setDisposable(source.subscribe(
	        function (x) {
	          for (var i = 0, len = q.length; i < len; i++) { q[i].onNext(x); }
	          var c = n - count + 1;
	          c >= 0 && c % skip === 0 && q.shift().onCompleted();
	          ++n % skip === 0 && createWindow();
	        },
	        function (e) {
	          while (q.length > 0) { q.shift().onError(e); }
	          observer.onError(e);
	        },
	        function () {
	          while (q.length > 0) { q.shift().onCompleted(); }
	          observer.onCompleted();
	        }
	      ));
	      return refCountDisposable;
	    }, source);
	  };

	  function concatMap(source, selector, thisArg) {
	    var selectorFunc = bindCallback(selector, thisArg, 3);
	    return source.map(function (x, i) {
	      var result = selectorFunc(x, i, source);
	      isPromise(result) && (result = observableFromPromise(result));
	      (isArrayLike(result) || isIterable(result)) && (result = observableFrom(result));
	      return result;
	    }).concatAll();
	  }

	  /**
	   *  One of the Following:
	   *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
	   *
	   * @example
	   *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
	   *  Or:
	   *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
	   *
	   *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
	   *  Or:
	   *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
	   *
	   *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
	   * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
	   * source sequence onto which could be either an observable or Promise.
	   * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
	   * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
	   */
	  observableProto.selectConcat = observableProto.concatMap = function (selector, resultSelector, thisArg) {
	    if (isFunction(selector) && isFunction(resultSelector)) {
	      return this.concatMap(function (x, i) {
	        var selectorResult = selector(x, i);
	        isPromise(selectorResult) && (selectorResult = observableFromPromise(selectorResult));
	        (isArrayLike(selectorResult) || isIterable(selectorResult)) && (selectorResult = observableFrom(selectorResult));

	        return selectorResult.map(function (y, i2) {
	          return resultSelector(x, y, i, i2);
	        });
	      });
	    }
	    return isFunction(selector) ?
	      concatMap(this, selector, thisArg) :
	      concatMap(this, function () { return selector; });
	  };

	  /**
	   * Projects each notification of an observable sequence to an observable sequence and concats the resulting observable sequences into one observable sequence.
	   * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
	   * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
	   * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
	   * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
	   * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
	   */
	  observableProto.concatMapObserver = observableProto.selectConcatObserver = function(onNext, onError, onCompleted, thisArg) {
	    var source = this,
	        onNextFunc = bindCallback(onNext, thisArg, 2),
	        onErrorFunc = bindCallback(onError, thisArg, 1),
	        onCompletedFunc = bindCallback(onCompleted, thisArg, 0);
	    return new AnonymousObservable(function (observer) {
	      var index = 0;
	      return source.subscribe(
	        function (x) {
	          var result;
	          try {
	            result = onNextFunc(x, index++);
	          } catch (e) {
	            observer.onError(e);
	            return;
	          }
	          isPromise(result) && (result = observableFromPromise(result));
	          observer.onNext(result);
	        },
	        function (err) {
	          var result;
	          try {
	            result = onErrorFunc(err);
	          } catch (e) {
	            observer.onError(e);
	            return;
	          }
	          isPromise(result) && (result = observableFromPromise(result));
	          observer.onNext(result);
	          observer.onCompleted();
	        },
	        function () {
	          var result;
	          try {
	            result = onCompletedFunc();
	          } catch (e) {
	            observer.onError(e);
	            return;
	          }
	          isPromise(result) && (result = observableFromPromise(result));
	          observer.onNext(result);
	          observer.onCompleted();
	        });
	    }, this).concatAll();
	  };

	  var DefaultIfEmptyObserver = (function (__super__) {
	    inherits(DefaultIfEmptyObserver, __super__);
	    function DefaultIfEmptyObserver(o, d) {
	      this._o = o;
	      this._d = d;
	      this._f = false;
	      __super__.call(this);
	    }

	    DefaultIfEmptyObserver.prototype.next = function (x) {
	      this._f = true;
	      this._o.onNext(x);
	    };

	    DefaultIfEmptyObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    DefaultIfEmptyObserver.prototype.completed = function () {
	      !this._f && this._o.onNext(this._d);
	      this._o.onCompleted();
	    };

	    return DefaultIfEmptyObserver;
	  }(AbstractObserver));

	  /**
	   *  Returns the elements of the specified sequence or the specified value in a singleton sequence if the sequence is empty.
	   *
	   *  var res = obs = xs.defaultIfEmpty();
	   *  2 - obs = xs.defaultIfEmpty(false);
	   *
	   * @memberOf Observable#
	   * @param defaultValue The value to return if the sequence is empty. If not provided, this defaults to null.
	   * @returns {Observable} An observable sequence that contains the specified default value if the source is empty; otherwise, the elements of the source itself.
	   */
	    observableProto.defaultIfEmpty = function (defaultValue) {
	      var source = this;
	      defaultValue === undefined && (defaultValue = null);
	      return new AnonymousObservable(function (o) {
	        return source.subscribe(new DefaultIfEmptyObserver(o, defaultValue));
	      }, source);
	    };

	  // Swap out for Array.findIndex
	  function arrayIndexOfComparer(array, item, comparer) {
	    for (var i = 0, len = array.length; i < len; i++) {
	      if (comparer(array[i], item)) { return i; }
	    }
	    return -1;
	  }

	  function HashSet(comparer) {
	    this.comparer = comparer;
	    this.set = [];
	  }
	  HashSet.prototype.push = function(value) {
	    var retValue = arrayIndexOfComparer(this.set, value, this.comparer) === -1;
	    retValue && this.set.push(value);
	    return retValue;
	  };

	  var DistinctObservable = (function (__super__) {
	    inherits(DistinctObservable, __super__);
	    function DistinctObservable(source, keyFn, cmpFn) {
	      this.source = source;
	      this._keyFn = keyFn;
	      this._cmpFn = cmpFn;
	      __super__.call(this);
	    }

	    DistinctObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new DistinctObserver(o, this._keyFn, this._cmpFn));
	    };

	    return DistinctObservable;
	  }(ObservableBase));

	  var DistinctObserver = (function (__super__) {
	    inherits(DistinctObserver, __super__);
	    function DistinctObserver(o, keyFn, cmpFn) {
	      this._o = o;
	      this._keyFn = keyFn;
	      this._h = new HashSet(cmpFn);
	      __super__.call(this);
	    }

	    DistinctObserver.prototype.next = function (x) {
	      var key = x;
	      if (isFunction(this._keyFn)) {
	        key = tryCatch(this._keyFn)(x);
	        if (key === errorObj) { return this._o.onError(key.e); }
	      }
	      this._h.push(key) && this._o.onNext(x);
	    };

	    DistinctObserver.prototype.error = function (e) { this._o.onError(e); };
	    DistinctObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return DistinctObserver;
	  }(AbstractObserver));

	  /**
	   *  Returns an observable sequence that contains only distinct elements according to the keySelector and the comparer.
	   *  Usage of this operator should be considered carefully due to the maintenance of an internal lookup structure which can grow large.
	   *
	   * @example
	   *  var res = obs = xs.distinct();
	   *  2 - obs = xs.distinct(function (x) { return x.id; });
	   *  2 - obs = xs.distinct(function (x) { return x.id; }, function (a,b) { return a === b; });
	   * @param {Function} [keySelector]  A function to compute the comparison key for each element.
	   * @param {Function} [comparer]  Used to compare items in the collection.
	   * @returns {Observable} An observable sequence only containing the distinct elements, based on a computed key value, from the source sequence.
	   */
	  observableProto.distinct = function (keySelector, comparer) {
	    comparer || (comparer = defaultComparer);
	    return new DistinctObservable(this, keySelector, comparer);
	  };

	  /**
	   *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
	   *
	   * @example
	   *  var res = observable.groupBy(function (x) { return x.id; });
	   *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
	   *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
	   * @param {Function} keySelector A function to extract the key for each element.
	   * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
	   * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
	   */
	  observableProto.groupBy = function (keySelector, elementSelector) {
	    return this.groupByUntil(keySelector, elementSelector, observableNever);
	  };

	    /**
	     *  Groups the elements of an observable sequence according to a specified key selector function.
	     *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
	     *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
	     *
	     * @example
	     *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
	     *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
	     *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
	     * @param {Function} keySelector A function to extract the key for each element.
	     * @param {Function} durationSelector A function to signal the expiration of a group.
	     * @returns {Observable}
	     *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
	     *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
	     *
	     */
	    observableProto.groupByUntil = function (keySelector, elementSelector, durationSelector) {
	      var source = this;
	      return new AnonymousObservable(function (o) {
	        var map = new Map(),
	          groupDisposable = new CompositeDisposable(),
	          refCountDisposable = new RefCountDisposable(groupDisposable),
	          handleError = function (e) { return function (item) { item.onError(e); }; };

	        groupDisposable.add(
	          source.subscribe(function (x) {
	            var key = tryCatch(keySelector)(x);
	            if (key === errorObj) {
	              map.forEach(handleError(key.e));
	              return o.onError(key.e);
	            }

	            var fireNewMapEntry = false, writer = map.get(key);
	            if (writer === undefined) {
	              writer = new Subject();
	              map.set(key, writer);
	              fireNewMapEntry = true;
	            }

	            if (fireNewMapEntry) {
	              var group = new GroupedObservable(key, writer, refCountDisposable),
	                durationGroup = new GroupedObservable(key, writer);
	              var duration = tryCatch(durationSelector)(durationGroup);
	              if (duration === errorObj) {
	                map.forEach(handleError(duration.e));
	                return o.onError(duration.e);
	              }

	              o.onNext(group);

	              var md = new SingleAssignmentDisposable();
	              groupDisposable.add(md);

	              md.setDisposable(duration.take(1).subscribe(
	                noop,
	                function (e) {
	                  map.forEach(handleError(e));
	                  o.onError(e);
	                },
	                function () {
	                  if (map['delete'](key)) { writer.onCompleted(); }
	                  groupDisposable.remove(md);
	                }));
	            }

	            var element = x;
	            if (isFunction(elementSelector)) {
	              element = tryCatch(elementSelector)(x);
	              if (element === errorObj) {
	                map.forEach(handleError(element.e));
	                return o.onError(element.e);
	              }
	            }

	            writer.onNext(element);
	        }, function (e) {
	          map.forEach(handleError(e));
	          o.onError(e);
	        }, function () {
	          map.forEach(function (item) { item.onCompleted(); });
	          o.onCompleted();
	        }));

	      return refCountDisposable;
	    }, source);
	  };

	  var MapObservable = (function (__super__) {
	    inherits(MapObservable, __super__);

	    function MapObservable(source, selector, thisArg) {
	      this.source = source;
	      this.selector = bindCallback(selector, thisArg, 3);
	      __super__.call(this);
	    }

	    function innerMap(selector, self) {
	      return function (x, i, o) { return selector.call(this, self.selector(x, i, o), i, o); };
	    }

	    MapObservable.prototype.internalMap = function (selector, thisArg) {
	      return new MapObservable(this.source, innerMap(selector, this), thisArg);
	    };

	    MapObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.selector, this));
	    };

	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, selector, source) {
	      this.o = o;
	      this.selector = selector;
	      this.source = source;
	      this.i = 0;
	      AbstractObserver.call(this);
	    }

	    InnerObserver.prototype.next = function(x) {
	      var result = tryCatch(this.selector)(x, this.i++, this.source);
	      if (result === errorObj) { return this.o.onError(result.e); }
	      this.o.onNext(result);
	    };

	    InnerObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };

	    InnerObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };

	    return MapObservable;

	  }(ObservableBase));

	  /**
	  * Projects each element of an observable sequence into a new form by incorporating the element's index.
	  * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
	  */
	  observableProto.map = observableProto.select = function (selector, thisArg) {
	    var selectorFn = typeof selector === 'function' ? selector : function () { return selector; };
	    return this instanceof MapObservable ?
	      this.internalMap(selectorFn, thisArg) :
	      new MapObservable(this, selectorFn, thisArg);
	  };

	  function plucker(args, len) {
	    return function mapper(x) {
	      var currentProp = x;
	      for (var i = 0; i < len; i++) {
	        var p = currentProp[args[i]];
	        if (typeof p !== 'undefined') {
	          currentProp = p;
	        } else {
	          return undefined;
	        }
	      }
	      return currentProp;
	    };
	  }

	  /**
	   * Retrieves the value of a specified nested property from all elements in
	   * the Observable sequence.
	   * @param {Arguments} arguments The nested properties to pluck.
	   * @returns {Observable} Returns a new Observable sequence of property values.
	   */
	  observableProto.pluck = function () {
	    var len = arguments.length, args = new Array(len);
	    if (len === 0) { throw new Error('List of properties cannot be empty.'); }
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return this.map(plucker(args, len));
	  };

	observableProto.flatMap = observableProto.selectMany = observableProto.mergeMap = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).mergeAll();
	};

	  /**
	   * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
	   * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
	   * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
	   * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
	   * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
	   * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
	   */
	  observableProto.flatMapObserver = observableProto.selectManyObserver = function (onNext, onError, onCompleted, thisArg) {
	    var source = this;
	    return new AnonymousObservable(function (observer) {
	      var index = 0;

	      return source.subscribe(
	        function (x) {
	          var result;
	          try {
	            result = onNext.call(thisArg, x, index++);
	          } catch (e) {
	            observer.onError(e);
	            return;
	          }
	          isPromise(result) && (result = observableFromPromise(result));
	          observer.onNext(result);
	        },
	        function (err) {
	          var result;
	          try {
	            result = onError.call(thisArg, err);
	          } catch (e) {
	            observer.onError(e);
	            return;
	          }
	          isPromise(result) && (result = observableFromPromise(result));
	          observer.onNext(result);
	          observer.onCompleted();
	        },
	        function () {
	          var result;
	          try {
	            result = onCompleted.call(thisArg);
	          } catch (e) {
	            observer.onError(e);
	            return;
	          }
	          isPromise(result) && (result = observableFromPromise(result));
	          observer.onNext(result);
	          observer.onCompleted();
	        });
	    }, source).mergeAll();
	  };

	observableProto.flatMapLatest = observableProto.switchMap = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).switchLatest();
	};

	  var SkipObservable = (function(__super__) {
	    inherits(SkipObservable, __super__);
	    function SkipObservable(source, count) {
	      this.source = source;
	      this._count = count;
	      __super__.call(this);
	    }

	    SkipObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipObserver(o, this._count));
	    };

	    function SkipObserver(o, c) {
	      this._o = o;
	      this._r = c;
	      AbstractObserver.call(this);
	    }

	    inherits(SkipObserver, AbstractObserver);

	    SkipObserver.prototype.next = function (x) {
	      if (this._r <= 0) {
	        this._o.onNext(x);
	      } else {
	        this._r--;
	      }
	    };
	    SkipObserver.prototype.error = function(e) { this._o.onError(e); };
	    SkipObserver.prototype.completed = function() { this._o.onCompleted(); };

	    return SkipObservable;
	  }(ObservableBase));

	  /**
	   * Bypasses a specified number of elements in an observable sequence and then returns the remaining elements.
	   * @param {Number} count The number of elements to skip before returning the remaining elements.
	   * @returns {Observable} An observable sequence that contains the elements that occur after the specified index in the input sequence.
	   */
	  observableProto.skip = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    return new SkipObservable(this, count);
	  };

	  var SkipWhileObservable = (function (__super__) {
	    inherits(SkipWhileObservable, __super__);
	    function SkipWhileObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    SkipWhileObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipWhileObserver(o, this));
	    };

	    return SkipWhileObservable;
	  }(ObservableBase));

	  var SkipWhileObserver = (function (__super__) {
	    inherits(SkipWhileObserver, __super__);

	    function SkipWhileObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      this._i = 0;
	      this._r = false;
	      __super__.call(this);
	    }

	    SkipWhileObserver.prototype.next = function (x) {
	      if (!this._r) {
	        var res = tryCatch(this._p._fn)(x, this._i++, this._p);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._r = !res;
	      }
	      this._r && this._o.onNext(x);
	    };
	    SkipWhileObserver.prototype.error = function (e) { this._o.onError(e); };
	    SkipWhileObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return SkipWhileObserver;
	  }(AbstractObserver));

	  /**
	   *  Bypasses elements in an observable sequence as long as a specified condition is true and then returns the remaining elements.
	   *  The element's index is used in the logic of the predicate function.
	   *
	   *  var res = source.skipWhile(function (value) { return value < 10; });
	   *  var res = source.skipWhile(function (value, index) { return value < 10 || index < 10; });
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.
	   */
	  observableProto.skipWhile = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new SkipWhileObservable(this, fn);
	  };

	  var TakeObservable = (function(__super__) {
	    inherits(TakeObservable, __super__);
	    function TakeObservable(source, count) {
	      this.source = source;
	      this._count = count;
	      __super__.call(this);
	    }

	    TakeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TakeObserver(o, this._count));
	    };

	    function TakeObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._r = c;
	      AbstractObserver.call(this);
	    }

	    inherits(TakeObserver, AbstractObserver);

	    TakeObserver.prototype.next = function (x) {
	      if (this._r-- > 0) {
	        this._o.onNext(x);
	        this._r <= 0 && this._o.onCompleted();
	      }
	    };

	    TakeObserver.prototype.error = function (e) { this._o.onError(e); };
	    TakeObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return TakeObservable;
	  }(ObservableBase));

	  /**
	   *  Returns a specified number of contiguous elements from the start of an observable sequence, using the specified scheduler for the edge case of take(0).
	   * @param {Number} count The number of elements to return.
	   * @param {Scheduler} [scheduler] Scheduler used to produce an OnCompleted message in case <paramref name="count count</paramref> is set to 0.
	   * @returns {Observable} An observable sequence that contains the specified number of elements from the start of the input sequence.
	   */
	  observableProto.take = function (count, scheduler) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    if (count === 0) { return observableEmpty(scheduler); }
	    return new TakeObservable(this, count);
	  };

	  var TakeWhileObservable = (function (__super__) {
	    inherits(TakeWhileObservable, __super__);
	    function TakeWhileObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    TakeWhileObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TakeWhileObserver(o, this));
	    };

	    return TakeWhileObservable;
	  }(ObservableBase));

	  var TakeWhileObserver = (function (__super__) {
	    inherits(TakeWhileObserver, __super__);

	    function TakeWhileObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      this._i = 0;
	      this._r = true;
	      __super__.call(this);
	    }

	    TakeWhileObserver.prototype.next = function (x) {
	      if (this._r) {
	        this._r = tryCatch(this._p._fn)(x, this._i++, this._p);
	        if (this._r === errorObj) { return this._o.onError(this._r.e); }
	      }
	      if (this._r) {
	        this._o.onNext(x);
	      } else {
	        this._o.onCompleted();
	      }
	    };
	    TakeWhileObserver.prototype.error = function (e) { this._o.onError(e); };
	    TakeWhileObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return TakeWhileObserver;
	  }(AbstractObserver));

	  /**
	   *  Returns elements from an observable sequence as long as a specified condition is true.
	   *  The element's index is used in the logic of the predicate function.
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.
	   */
	  observableProto.takeWhile = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new TakeWhileObservable(this, fn);
	  };

	  var FilterObservable = (function (__super__) {
	    inherits(FilterObservable, __super__);

	    function FilterObservable(source, predicate, thisArg) {
	      this.source = source;
	      this.predicate = bindCallback(predicate, thisArg, 3);
	      __super__.call(this);
	    }

	    FilterObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.predicate, this));
	    };

	    function innerPredicate(predicate, self) {
	      return function(x, i, o) { return self.predicate(x, i, o) && predicate.call(this, x, i, o); }
	    }

	    FilterObservable.prototype.internalFilter = function(predicate, thisArg) {
	      return new FilterObservable(this.source, innerPredicate(predicate, this), thisArg);
	    };

	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, predicate, source) {
	      this.o = o;
	      this.predicate = predicate;
	      this.source = source;
	      this.i = 0;
	      AbstractObserver.call(this);
	    }

	    InnerObserver.prototype.next = function(x) {
	      var shouldYield = tryCatch(this.predicate)(x, this.i++, this.source);
	      if (shouldYield === errorObj) {
	        return this.o.onError(shouldYield.e);
	      }
	      shouldYield && this.o.onNext(x);
	    };

	    InnerObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };

	    InnerObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };

	    return FilterObservable;

	  }(ObservableBase));

	  /**
	  *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
	  * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
	  */
	  observableProto.filter = observableProto.where = function (predicate, thisArg) {
	    return this instanceof FilterObservable ? this.internalFilter(predicate, thisArg) :
	      new FilterObservable(this, predicate, thisArg);
	  };

	  var ExtremaByObservable = (function (__super__) {
	    inherits(ExtremaByObservable, __super__);
	    function ExtremaByObservable(source, k, c) {
	      this.source = source;
	      this._k = k;
	      this._c = c;
	      __super__.call(this);
	    }

	    ExtremaByObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new ExtremaByObserver(o, this._k, this._c));
	    };

	    return ExtremaByObservable;
	  }(ObservableBase));

	  var ExtremaByObserver = (function (__super__) {
	    inherits(ExtremaByObserver, __super__);
	    function ExtremaByObserver(o, k, c) {
	      this._o = o;
	      this._k = k;
	      this._c = c;
	      this._v = null;
	      this._hv = false;
	      this._l = [];
	      __super__.call(this);
	    }

	    ExtremaByObserver.prototype.next = function (x) {
	      var key = tryCatch(this._k)(x);
	      if (key === errorObj) { return this._o.onError(key.e); }
	      var comparison = 0;
	      if (!this._hv) {
	        this._hv = true;
	        this._v = key;
	      } else {
	        comparison = tryCatch(this._c)(key, this._v);
	        if (comparison === errorObj) { return this._o.onError(comparison.e); }
	      }
	      if (comparison > 0) {
	        this._v = key;
	        this._l = [];
	      }
	      if (comparison >= 0) { this._l.push(x); }
	    };

	    ExtremaByObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    ExtremaByObserver.prototype.completed = function () {
	      this._o.onNext(this._l);
	      this._o.onCompleted();
	    };

	    return ExtremaByObserver;
	  }(AbstractObserver));

	  function firstOnly(x) {
	    if (x.length === 0) { throw new EmptyError(); }
	    return x[0];
	  }

	  var ReduceObservable = (function(__super__) {
	    inherits(ReduceObservable, __super__);
	    function ReduceObservable(source, accumulator, hasSeed, seed) {
	      this.source = source;
	      this.accumulator = accumulator;
	      this.hasSeed = hasSeed;
	      this.seed = seed;
	      __super__.call(this);
	    }

	    ReduceObservable.prototype.subscribeCore = function(observer) {
	      return this.source.subscribe(new ReduceObserver(observer,this));
	    };

	    return ReduceObservable;
	  }(ObservableBase));

	  var ReduceObserver = (function (__super__) {
	    inherits(ReduceObserver, __super__);
	    function ReduceObserver(o, parent) {
	      this._o = o;
	      this._p = parent;
	      this._fn = parent.accumulator;
	      this._hs = parent.hasSeed;
	      this._s = parent.seed;
	      this._ha = false;
	      this._a = null;
	      this._hv = false;
	      this._i = 0;
	      __super__.call(this);
	    }

	    ReduceObserver.prototype.next = function (x) {
	      !this._hv && (this._hv = true);
	      if (this._ha) {
	        this._a = tryCatch(this._fn)(this._a, x, this._i, this._p);
	      } else {
	        this._a = this._hs ? tryCatch(this._fn)(this._s, x, this._i, this._p) : x;
	        this._ha = true;
	      }
	      if (this._a === errorObj) { return this._o.onError(this._a.e); }
	      this._i++;
	    };

	    ReduceObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    ReduceObserver.prototype.completed = function () {
	      this._hv && this._o.onNext(this._a);
	      !this._hv && this._hs && this._o.onNext(this._s);
	      !this._hv && !this._hs && this._o.onError(new EmptyError());
	      this._o.onCompleted();
	    };

	    return ReduceObserver;
	  }(AbstractObserver));

	  /**
	  * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
	  * For aggregation behavior with incremental intermediate results, see Observable.scan.
	  * @param {Function} accumulator An accumulator function to be invoked on each element.
	  * @param {Any} [seed] The initial accumulator value.
	  * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
	  */
	  observableProto.reduce = function () {
	    var hasSeed = false, seed, accumulator = arguments[0];
	    if (arguments.length === 2) {
	      hasSeed = true;
	      seed = arguments[1];
	    }
	    return new ReduceObservable(this, accumulator, hasSeed, seed);
	  };

	  var SomeObservable = (function (__super__) {
	    inherits(SomeObservable, __super__);
	    function SomeObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    SomeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SomeObserver(o, this._fn, this.source));
	    };

	    return SomeObservable;
	  }(ObservableBase));

	  var SomeObserver = (function (__super__) {
	    inherits(SomeObserver, __super__);

	    function SomeObserver(o, fn, s) {
	      this._o = o;
	      this._fn = fn;
	      this._s = s;
	      this._i = 0;
	      __super__.call(this);
	    }

	    SomeObserver.prototype.next = function (x) {
	      var result = tryCatch(this._fn)(x, this._i++, this._s);
	      if (result === errorObj) { return this._o.onError(result.e); }
	      if (Boolean(result)) {
	        this._o.onNext(true);
	        this._o.onCompleted();
	      }
	    };
	    SomeObserver.prototype.error = function (e) { this._o.onError(e); };
	    SomeObserver.prototype.completed = function () {
	      this._o.onNext(false);
	      this._o.onCompleted();
	    };

	    return SomeObserver;
	  }(AbstractObserver));

	  /**
	   * Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence.
	   * @param {Function} [predicate] A function to test each element for a condition.
	   * @returns {Observable} An observable sequence containing a single element determining whether any elements in the source sequence pass the test in the specified predicate if given, else if any items are in the sequence.
	   */
	  observableProto.some = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new SomeObservable(this, fn);
	  };

	  var IsEmptyObservable = (function (__super__) {
	    inherits(IsEmptyObservable, __super__);
	    function IsEmptyObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    IsEmptyObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new IsEmptyObserver(o));
	    };

	    return IsEmptyObservable;
	  }(ObservableBase));

	  var IsEmptyObserver = (function(__super__) {
	    inherits(IsEmptyObserver, __super__);
	    function IsEmptyObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }

	    IsEmptyObserver.prototype.next = function () {
	      this._o.onNext(false);
	      this._o.onCompleted();
	    };
	    IsEmptyObserver.prototype.error = function (e) { this._o.onError(e); };
	    IsEmptyObserver.prototype.completed = function () {
	      this._o.onNext(true);
	      this._o.onCompleted();
	    };

	    return IsEmptyObserver;
	  }(AbstractObserver));

	  /**
	   * Determines whether an observable sequence is empty.
	   * @returns {Observable} An observable sequence containing a single element determining whether the source sequence is empty.
	   */
	  observableProto.isEmpty = function () {
	    return new IsEmptyObservable(this);
	  };

	  var EveryObservable = (function (__super__) {
	    inherits(EveryObservable, __super__);
	    function EveryObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    EveryObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new EveryObserver(o, this._fn, this.source));
	    };

	    return EveryObservable;
	  }(ObservableBase));

	  var EveryObserver = (function (__super__) {
	    inherits(EveryObserver, __super__);

	    function EveryObserver(o, fn, s) {
	      this._o = o;
	      this._fn = fn;
	      this._s = s;
	      this._i = 0;
	      __super__.call(this);
	    }

	    EveryObserver.prototype.next = function (x) {
	      var result = tryCatch(this._fn)(x, this._i++, this._s);
	      if (result === errorObj) { return this._o.onError(result.e); }
	      if (!Boolean(result)) {
	        this._o.onNext(false);
	        this._o.onCompleted();
	      }
	    };
	    EveryObserver.prototype.error = function (e) { this._o.onError(e); };
	    EveryObserver.prototype.completed = function () {
	      this._o.onNext(true);
	      this._o.onCompleted();
	    };

	    return EveryObserver;
	  }(AbstractObserver));

	  /**
	   * Determines whether all elements of an observable sequence satisfy a condition.
	   * @param {Function} [predicate] A function to test each element for a condition.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.
	   */
	  observableProto.every = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new EveryObservable(this, fn);
	  };

	  var IncludesObservable = (function (__super__) {
	    inherits(IncludesObservable, __super__);
	    function IncludesObservable(source, elem, idx) {
	      var n = +idx || 0;
	      Math.abs(n) === Infinity && (n = 0);

	      this.source = source;
	      this._elem = elem;
	      this._n = n;
	      __super__.call(this);
	    }

	    IncludesObservable.prototype.subscribeCore = function (o) {
	      if (this._n < 0) {
	        o.onNext(false);
	        o.onCompleted();
	        return disposableEmpty;
	      }

	      return this.source.subscribe(new IncludesObserver(o, this._elem, this._n));
	    };

	    return IncludesObservable;
	  }(ObservableBase));

	  var IncludesObserver = (function (__super__) {
	    inherits(IncludesObserver, __super__);
	    function IncludesObserver(o, elem, n) {
	      this._o = o;
	      this._elem = elem;
	      this._n = n;
	      this._i = 0;
	      __super__.call(this);
	    }

	    function comparer(a, b) {
	      return (a === 0 && b === 0) || (a === b || (isNaN(a) && isNaN(b)));
	    }

	    IncludesObserver.prototype.next = function (x) {
	      if (this._i++ >= this._n && comparer(x, this._elem)) {
	        this._o.onNext(true);
	        this._o.onCompleted();
	      }
	    };
	    IncludesObserver.prototype.error = function (e) { this._o.onError(e); };
	    IncludesObserver.prototype.completed = function () { this._o.onNext(false); this._o.onCompleted(); };

	    return IncludesObserver;
	  }(AbstractObserver));

	  /**
	   * Determines whether an observable sequence includes a specified element with an optional equality comparer.
	   * @param searchElement The value to locate in the source sequence.
	   * @param {Number} [fromIndex] An equality comparer to compare elements.
	   * @returns {Observable} An observable sequence containing a single element determining whether the source sequence includes an element that has the specified value from the given index.
	   */
	  observableProto.includes = function (searchElement, fromIndex) {
	    return new IncludesObservable(this, searchElement, fromIndex);
	  };

	  var CountObservable = (function (__super__) {
	    inherits(CountObservable, __super__);
	    function CountObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    CountObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new CountObserver(o, this._fn, this.source));
	    };

	    return CountObservable;
	  }(ObservableBase));

	  var CountObserver = (function (__super__) {
	    inherits(CountObserver, __super__);

	    function CountObserver(o, fn, s) {
	      this._o = o;
	      this._fn = fn;
	      this._s = s;
	      this._i = 0;
	      this._c = 0;
	      __super__.call(this);
	    }

	    CountObserver.prototype.next = function (x) {
	      if (this._fn) {
	        var result = tryCatch(this._fn)(x, this._i++, this._s);
	        if (result === errorObj) { return this._o.onError(result.e); }
	        Boolean(result) && (this._c++);
	      } else {
	        this._c++;
	      }
	    };
	    CountObserver.prototype.error = function (e) { this._o.onError(e); };
	    CountObserver.prototype.completed = function () {
	      this._o.onNext(this._c);
	      this._o.onCompleted();
	    };

	    return CountObserver;
	  }(AbstractObserver));

	  /**
	   * Returns an observable sequence containing a value that represents how many elements in the specified observable sequence satisfy a condition if provided, else the count of items.
	   * @example
	   * res = source.count();
	   * res = source.count(function (x) { return x > 3; });
	   * @param {Function} [predicate]A function to test each element for a condition.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element with a number that represents how many elements in the input sequence satisfy the condition in the predicate function if provided, else the count of items in the sequence.
	   */
	  observableProto.count = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new CountObservable(this, fn);
	  };

	  var IndexOfObservable = (function (__super__) {
	    inherits(IndexOfObservable, __super__);
	    function IndexOfObservable(source, e, n) {
	      this.source = source;
	      this._e = e;
	      this._n = n;
	      __super__.call(this);
	    }

	    IndexOfObservable.prototype.subscribeCore = function (o) {
	      if (this._n < 0) {
	        o.onNext(-1);
	        o.onCompleted();
	        return disposableEmpty;
	      }

	      return this.source.subscribe(new IndexOfObserver(o, this._e, this._n));
	    };

	    return IndexOfObservable;
	  }(ObservableBase));

	  var IndexOfObserver = (function (__super__) {
	    inherits(IndexOfObserver, __super__);
	    function IndexOfObserver(o, e, n) {
	      this._o = o;
	      this._e = e;
	      this._n = n;
	      this._i = 0;
	      __super__.call(this);
	    }

	    IndexOfObserver.prototype.next = function (x) {
	      if (this._i >= this._n && x === this._e) {
	        this._o.onNext(this._i);
	        this._o.onCompleted();
	      }
	      this._i++;
	    };
	    IndexOfObserver.prototype.error = function (e) { this._o.onError(e); };
	    IndexOfObserver.prototype.completed = function () { this._o.onNext(-1); this._o.onCompleted(); };

	    return IndexOfObserver;
	  }(AbstractObserver));

	  /**
	   * Returns the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   * @param {Any} searchElement Element to locate in the array.
	   * @param {Number} [fromIndex] The index to start the search.  If not specified, defaults to 0.
	   * @returns {Observable} And observable sequence containing the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   */
	  observableProto.indexOf = function(searchElement, fromIndex) {
	    var n = +fromIndex || 0;
	    Math.abs(n) === Infinity && (n = 0);
	    return new IndexOfObservable(this, searchElement, n);
	  };

	  var SumObservable = (function (__super__) {
	    inherits(SumObservable, __super__);
	    function SumObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    SumObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SumObserver(o, this._fn, this.source));
	    };

	    return SumObservable;
	  }(ObservableBase));

	  var SumObserver = (function (__super__) {
	    inherits(SumObserver, __super__);

	    function SumObserver(o, fn, s) {
	      this._o = o;
	      this._fn = fn;
	      this._s = s;
	      this._i = 0;
	      this._c = 0;
	      __super__.call(this);
	    }

	    SumObserver.prototype.next = function (x) {
	      if (this._fn) {
	        var result = tryCatch(this._fn)(x, this._i++, this._s);
	        if (result === errorObj) { return this._o.onError(result.e); }
	        this._c += result;
	      } else {
	        this._c += x;
	      }
	    };
	    SumObserver.prototype.error = function (e) { this._o.onError(e); };
	    SumObserver.prototype.completed = function () {
	      this._o.onNext(this._c);
	      this._o.onCompleted();
	    };

	    return SumObserver;
	  }(AbstractObserver));

	  /**
	   * Computes the sum of a sequence of values that are obtained by invoking an optional transform function on each element of the input sequence, else if not specified computes the sum on each item in the sequence.
	   * @param {Function} [selector] A transform function to apply to each element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element with the sum of the values in the source sequence.
	   */
	  observableProto.sum = function (keySelector, thisArg) {
	    var fn = bindCallback(keySelector, thisArg, 3);
	    return new SumObservable(this, fn);
	  };

	  /**
	   * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
	   * @example
	   * var res = source.minBy(function (x) { return x.value; });
	   * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
	   * @param {Function} keySelector Key selector function.
	   * @param {Function} [comparer] Comparer used to compare key values.
	   * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
	   */
	  observableProto.minBy = function (keySelector, comparer) {
	    comparer || (comparer = defaultSubComparer);
	    return new ExtremaByObservable(this, keySelector, function (x, y) { return comparer(x, y) * -1; });
	  };

	  /**
	   * Returns the minimum element in an observable sequence according to the optional comparer else a default greater than less than check.
	   * @example
	   * var res = source.min();
	   * var res = source.min(function (x, y) { return x.value - y.value; });
	   * @param {Function} [comparer] Comparer used to compare elements.
	   * @returns {Observable} An observable sequence containing a single element with the minimum element in the source sequence.
	   */
	  observableProto.min = function (comparer) {
	    return this.minBy(identity, comparer).map(firstOnly);
	  };

	  /**
	   * Returns the elements in an observable sequence with the maximum  key value according to the specified comparer.
	   * @example
	   * var res = source.maxBy(function (x) { return x.value; });
	   * var res = source.maxBy(function (x) { return x.value; }, function (x, y) { return x - y;; });
	   * @param {Function} keySelector Key selector function.
	   * @param {Function} [comparer]  Comparer used to compare key values.
	   * @returns {Observable} An observable sequence containing a list of zero or more elements that have a maximum key value.
	   */
	  observableProto.maxBy = function (keySelector, comparer) {
	    comparer || (comparer = defaultSubComparer);
	    return new ExtremaByObservable(this, keySelector, comparer);
	  };

	  /**
	   * Returns the maximum value in an observable sequence according to the specified comparer.
	   * @example
	   * var res = source.max();
	   * var res = source.max(function (x, y) { return x.value - y.value; });
	   * @param {Function} [comparer] Comparer used to compare elements.
	   * @returns {Observable} An observable sequence containing a single element with the maximum element in the source sequence.
	   */
	  observableProto.max = function (comparer) {
	    return this.maxBy(identity, comparer).map(firstOnly);
	  };

	  var AverageObservable = (function (__super__) {
	    inherits(AverageObservable, __super__);
	    function AverageObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    AverageObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new AverageObserver(o, this._fn, this.source));
	    };

	    return AverageObservable;
	  }(ObservableBase));

	  var AverageObserver = (function(__super__) {
	    inherits(AverageObserver, __super__);
	    function AverageObserver(o, fn, s) {
	      this._o = o;
	      this._fn = fn;
	      this._s = s;
	      this._c = 0;
	      this._t = 0;
	      __super__.call(this);
	    }

	    AverageObserver.prototype.next = function (x) {
	      if(this._fn) {
	        var r = tryCatch(this._fn)(x, this._c++, this._s);
	        if (r === errorObj) { return this._o.onError(r.e); }
	        this._t += r;
	      } else {
	        this._c++;
	        this._t += x;
	      }
	    };
	    AverageObserver.prototype.error = function (e) { this._o.onError(e); };
	    AverageObserver.prototype.completed = function () {
	      if (this._c === 0) { return this._o.onError(new EmptyError()); }
	      this._o.onNext(this._t / this._c);
	      this._o.onCompleted();
	    };

	    return AverageObserver;
	  }(AbstractObserver));

	  /**
	   * Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.
	   * @param {Function} [selector] A transform function to apply to each element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element with the average of the sequence of values.
	   */
	  observableProto.average = function (keySelector, thisArg) {
	    var source = this, fn;
	    if (isFunction(keySelector)) {
	      fn = bindCallback(keySelector, thisArg, 3);
	    }
	    return new AverageObservable(source, fn);
	  };

	  /**
	   *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
	   *
	   * @example
	   * var res = res = source.sequenceEqual([1,2,3]);
	   * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
	   * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
	   * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
	   * @param {Observable} second Second observable sequence or array to compare.
	   * @param {Function} [comparer] Comparer used to compare elements of both sequences.
	   * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
	   */
	  observableProto.sequenceEqual = function (second, comparer) {
	    var first = this;
	    comparer || (comparer = defaultComparer);
	    return new AnonymousObservable(function (o) {
	      var donel = false, doner = false, ql = [], qr = [];
	      var subscription1 = first.subscribe(function (x) {
	        if (qr.length > 0) {
	          var v = qr.shift();
	          var equal = tryCatch(comparer)(v, x);
	          if (equal === errorObj) { return o.onError(equal.e); }
	          if (!equal) {
	            o.onNext(false);
	            o.onCompleted();
	          }
	        } else if (doner) {
	          o.onNext(false);
	          o.onCompleted();
	        } else {
	          ql.push(x);
	        }
	      }, function(e) { o.onError(e); }, function () {
	        donel = true;
	        if (ql.length === 0) {
	          if (qr.length > 0) {
	            o.onNext(false);
	            o.onCompleted();
	          } else if (doner) {
	            o.onNext(true);
	            o.onCompleted();
	          }
	        }
	      });

	      (isArrayLike(second) || isIterable(second)) && (second = observableFrom(second));
	      isPromise(second) && (second = observableFromPromise(second));
	      var subscription2 = second.subscribe(function (x) {
	        if (ql.length > 0) {
	          var v = ql.shift();
	          var equal = tryCatch(comparer)(v, x);
	          if (equal === errorObj) { return o.onError(equal.e); }
	          if (!equal) {
	            o.onNext(false);
	            o.onCompleted();
	          }
	        } else if (donel) {
	          o.onNext(false);
	          o.onCompleted();
	        } else {
	          qr.push(x);
	        }
	      }, function(e) { o.onError(e); }, function () {
	        doner = true;
	        if (qr.length === 0) {
	          if (ql.length > 0) {
	            o.onNext(false);
	            o.onCompleted();
	          } else if (donel) {
	            o.onNext(true);
	            o.onCompleted();
	          }
	        }
	      });
	      return new BinaryDisposable(subscription1, subscription2);
	    }, first);
	  };

	  var ElementAtObservable = (function (__super__) {
	    inherits(ElementAtObservable, __super__);
	    function ElementAtObservable(source, i, d) {
	      this.source = source;
	      this._i = i;
	      this._d = d;
	      __super__.call(this);
	    }

	    ElementAtObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new ElementAtObserver(o, this._i, this._d));
	    };

	    return ElementAtObservable;
	  }(ObservableBase));

	  var ElementAtObserver = (function (__super__) {
	    inherits(ElementAtObserver, __super__);

	    function ElementAtObserver(o, i, d) {
	      this._o = o;
	      this._i = i;
	      this._d = d;
	      __super__.call(this);
	    }

	    ElementAtObserver.prototype.next = function (x) {
	      if (this._i-- === 0) {
	        this._o.onNext(x);
	        this._o.onCompleted();
	      }
	    };
	    ElementAtObserver.prototype.error = function (e) { this._o.onError(e); };
	    ElementAtObserver.prototype.completed = function () {
	      if (this._d === undefined) {
	        this._o.onError(new ArgumentOutOfRangeError());
	      } else {
	        this._o.onNext(this._d);
	        this._o.onCompleted();
	      }
	    };

	    return ElementAtObserver;
	  }(AbstractObserver));

	  /**
	   * Returns the element at a specified index in a sequence or default value if not found.
	   * @param {Number} index The zero-based index of the element to retrieve.
	   * @param {Any} [defaultValue] The default value to use if elementAt does not find a value.
	   * @returns {Observable} An observable sequence that produces the element at the specified position in the source sequence.
	   */
	  observableProto.elementAt =  function (index, defaultValue) {
	    if (index < 0) { throw new ArgumentOutOfRangeError(); }
	    return new ElementAtObservable(this, index, defaultValue);
	  };

	  var SingleObserver = (function(__super__) {
	    inherits(SingleObserver, __super__);
	    function SingleObserver(o, obj, s) {
	      this._o = o;
	      this._obj = obj;
	      this._s = s;
	      this._i = 0;
	      this._hv = false;
	      this._v = null;
	      __super__.call(this);
	    }

	    SingleObserver.prototype.next = function (x) {
	      var shouldYield = false;
	      if (this._obj.predicate) {
	        var res = tryCatch(this._obj.predicate)(x, this._i++, this._s);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        Boolean(res) && (shouldYield = true);
	      } else if (!this._obj.predicate) {
	        shouldYield = true;
	      }
	      if (shouldYield) {
	        if (this._hv) {
	          return this._o.onError(new Error('Sequence contains more than one matching element'));
	        }
	        this._hv = true;
	        this._v = x;
	      }
	    };
	    SingleObserver.prototype.error = function (e) { this._o.onError(e); };
	    SingleObserver.prototype.completed = function () {
	      if (this._hv) {
	        this._o.onNext(this._v);
	        this._o.onCompleted();
	      }
	      else if (this._obj.defaultValue === undefined) {
	        this._o.onError(new EmptyError());
	      } else {
	        this._o.onNext(this._obj.defaultValue);
	        this._o.onCompleted();
	      }
	    };

	    return SingleObserver;
	  }(AbstractObserver));


	    /**
	     * Returns the only element of an observable sequence that satisfies the condition in the optional predicate, and reports an exception if there is not exactly one element in the observable sequence.
	     * @returns {Observable} Sequence containing the single element in the observable sequence that satisfies the condition in the predicate.
	     */
	    observableProto.single = function (predicate, thisArg) {
	      var obj = {}, source = this;
	      if (typeof arguments[0] === 'object') {
	        obj = arguments[0];
	      } else {
	        obj = {
	          predicate: arguments[0],
	          thisArg: arguments[1],
	          defaultValue: arguments[2]
	        };
	      }
	      if (isFunction (obj.predicate)) {
	        var fn = obj.predicate;
	        obj.predicate = bindCallback(fn, obj.thisArg, 3);
	      }
	      return new AnonymousObservable(function (o) {
	        return source.subscribe(new SingleObserver(o, obj, source));
	      }, source);
	    };

	  var FirstObservable = (function (__super__) {
	    inherits(FirstObservable, __super__);
	    function FirstObservable(source, obj) {
	      this.source = source;
	      this._obj = obj;
	      __super__.call(this);
	    }

	    FirstObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new FirstObserver(o, this._obj, this.source));
	    };

	    return FirstObservable;
	  }(ObservableBase));

	  var FirstObserver = (function(__super__) {
	    inherits(FirstObserver, __super__);
	    function FirstObserver(o, obj, s) {
	      this._o = o;
	      this._obj = obj;
	      this._s = s;
	      this._i = 0;
	      __super__.call(this);
	    }

	    FirstObserver.prototype.next = function (x) {
	      if (this._obj.predicate) {
	        var res = tryCatch(this._obj.predicate)(x, this._i++, this._s);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        if (Boolean(res)) {
	          this._o.onNext(x);
	          this._o.onCompleted();
	        }
	      } else if (!this._obj.predicate) {
	        this._o.onNext(x);
	        this._o.onCompleted();
	      }
	    };
	    FirstObserver.prototype.error = function (e) { this._o.onError(e); };
	    FirstObserver.prototype.completed = function () {
	      if (this._obj.defaultValue === undefined) {
	        this._o.onError(new EmptyError());
	      } else {
	        this._o.onNext(this._obj.defaultValue);
	        this._o.onCompleted();
	      }
	    };

	    return FirstObserver;
	  }(AbstractObserver));

	  /**
	   * Returns the first element of an observable sequence that satisfies the condition in the predicate if present else the first item in the sequence.
	   * @returns {Observable} Sequence containing the first element in the observable sequence that satisfies the condition in the predicate if provided, else the first item in the sequence.
	   */
	  observableProto.first = function () {
	    var obj = {}, source = this;
	    if (typeof arguments[0] === 'object') {
	      obj = arguments[0];
	    } else {
	      obj = {
	        predicate: arguments[0],
	        thisArg: arguments[1],
	        defaultValue: arguments[2]
	      };
	    }
	    if (isFunction (obj.predicate)) {
	      var fn = obj.predicate;
	      obj.predicate = bindCallback(fn, obj.thisArg, 3);
	    }
	    return new FirstObservable(this, obj);
	  };

	  var LastObservable = (function (__super__) {
	    inherits(LastObservable, __super__);
	    function LastObservable(source, obj) {
	      this.source = source;
	      this._obj = obj;
	      __super__.call(this);
	    }

	    LastObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new LastObserver(o, this._obj, this.source));
	    };

	    return LastObservable;
	  }(ObservableBase));

	  var LastObserver = (function(__super__) {
	    inherits(LastObserver, __super__);
	    function LastObserver(o, obj, s) {
	      this._o = o;
	      this._obj = obj;
	      this._s = s;
	      this._i = 0;
	      this._hv = false;
	      this._v = null;
	      __super__.call(this);
	    }

	    LastObserver.prototype.next = function (x) {
	      var shouldYield = false;
	      if (this._obj.predicate) {
	        var res = tryCatch(this._obj.predicate)(x, this._i++, this._s);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        Boolean(res) && (shouldYield = true);
	      } else if (!this._obj.predicate) {
	        shouldYield = true;
	      }
	      if (shouldYield) {
	        this._hv = true;
	        this._v = x;
	      }
	    };
	    LastObserver.prototype.error = function (e) { this._o.onError(e); };
	    LastObserver.prototype.completed = function () {
	      if (this._hv) {
	        this._o.onNext(this._v);
	        this._o.onCompleted();
	      }
	      else if (this._obj.defaultValue === undefined) {
	        this._o.onError(new EmptyError());
	      } else {
	        this._o.onNext(this._obj.defaultValue);
	        this._o.onCompleted();
	      }
	    };

	    return LastObserver;
	  }(AbstractObserver));

	  /**
	   * Returns the last element of an observable sequence that satisfies the condition in the predicate if specified, else the last element.
	   * @returns {Observable} Sequence containing the last element in the observable sequence that satisfies the condition in the predicate.
	   */
	  observableProto.last = function () {
	    var obj = {}, source = this;
	    if (typeof arguments[0] === 'object') {
	      obj = arguments[0];
	    } else {
	      obj = {
	        predicate: arguments[0],
	        thisArg: arguments[1],
	        defaultValue: arguments[2]
	      };
	    }
	    if (isFunction (obj.predicate)) {
	      var fn = obj.predicate;
	      obj.predicate = bindCallback(fn, obj.thisArg, 3);
	    }
	    return new LastObservable(this, obj);
	  };

	  var FindValueObserver = (function(__super__) {
	    inherits(FindValueObserver, __super__);
	    function FindValueObserver(observer, source, callback, yieldIndex) {
	      this._o = observer;
	      this._s = source;
	      this._cb = callback;
	      this._y = yieldIndex;
	      this._i = 0;
	      __super__.call(this);
	    }

	    FindValueObserver.prototype.next = function (x) {
	      var shouldRun = tryCatch(this._cb)(x, this._i, this._s);
	      if (shouldRun === errorObj) { return this._o.onError(shouldRun.e); }
	      if (shouldRun) {
	        this._o.onNext(this._y ? this._i : x);
	        this._o.onCompleted();
	      } else {
	        this._i++;
	      }
	    };

	    FindValueObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    FindValueObserver.prototype.completed = function () {
	      this._y && this._o.onNext(-1);
	      this._o.onCompleted();
	    };

	    return FindValueObserver;
	  }(AbstractObserver));

	  function findValue (source, predicate, thisArg, yieldIndex) {
	    var callback = bindCallback(predicate, thisArg, 3);
	    return new AnonymousObservable(function (o) {
	      return source.subscribe(new FindValueObserver(o, source, callback, yieldIndex));
	    }, source);
	  }

	  /**
	   * Searches for an element that matches the conditions defined by the specified predicate, and returns the first occurrence within the entire Observable sequence.
	   * @param {Function} predicate The predicate that defines the conditions of the element to search for.
	   * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
	   * @returns {Observable} An Observable sequence with the first element that matches the conditions defined by the specified predicate, if found; otherwise, undefined.
	   */
	  observableProto.find = function (predicate, thisArg) {
	    return findValue(this, predicate, thisArg, false);
	  };

	  /**
	   * Searches for an element that matches the conditions defined by the specified predicate, and returns
	   * an Observable sequence with the zero-based index of the first occurrence within the entire Observable sequence.
	   * @param {Function} predicate The predicate that defines the conditions of the element to search for.
	   * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
	   * @returns {Observable} An Observable sequence with the zero-based index of the first occurrence of an element that matches the conditions defined by match, if found; otherwise, –1.
	  */
	  observableProto.findIndex = function (predicate, thisArg) {
	    return findValue(this, predicate, thisArg, true);
	  };

	  var ToSetObservable = (function (__super__) {
	    inherits(ToSetObservable, __super__);
	    function ToSetObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    ToSetObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new ToSetObserver(o));
	    };

	    return ToSetObservable;
	  }(ObservableBase));

	  var ToSetObserver = (function (__super__) {
	    inherits(ToSetObserver, __super__);
	    function ToSetObserver(o) {
	      this._o = o;
	      this._s = new root.Set();
	      __super__.call(this);
	    }

	    ToSetObserver.prototype.next = function (x) {
	      this._s.add(x);
	    };

	    ToSetObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    ToSetObserver.prototype.completed = function () {
	      this._o.onNext(this._s);
	      this._o.onCompleted();
	    };

	    return ToSetObserver;
	  }(AbstractObserver));

	  /**
	   * Converts the observable sequence to a Set if it exists.
	   * @returns {Observable} An observable sequence with a single value of a Set containing the values from the observable sequence.
	   */
	  observableProto.toSet = function () {
	    if (typeof root.Set === 'undefined') { throw new TypeError(); }
	    return new ToSetObservable(this);
	  };

	  var ToMapObservable = (function (__super__) {
	    inherits(ToMapObservable, __super__);
	    function ToMapObservable(source, k, e) {
	      this.source = source;
	      this._k = k;
	      this._e = e;
	      __super__.call(this);
	    }

	    ToMapObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new ToMapObserver(o, this._k, this._e));
	    };

	    return ToMapObservable;
	  }(ObservableBase));

	  var ToMapObserver = (function (__super__) {
	    inherits(ToMapObserver, __super__);
	    function ToMapObserver(o, k, e) {
	      this._o = o;
	      this._k = k;
	      this._e = e;
	      this._m = new root.Map();
	      __super__.call(this);
	    }

	    ToMapObserver.prototype.next = function (x) {
	      var key = tryCatch(this._k)(x);
	      if (key === errorObj) { return this._o.onError(key.e); }
	      var elem = x;
	      if (this._e) {
	        elem = tryCatch(this._e)(x);
	        if (elem === errorObj) { return this._o.onError(elem.e); }
	      }

	      this._m.set(key, elem);
	    };

	    ToMapObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    ToMapObserver.prototype.completed = function () {
	      this._o.onNext(this._m);
	      this._o.onCompleted();
	    };

	    return ToMapObserver;
	  }(AbstractObserver));

	  /**
	  * Converts the observable sequence to a Map if it exists.
	  * @param {Function} keySelector A function which produces the key for the Map.
	  * @param {Function} [elementSelector] An optional function which produces the element for the Map. If not present, defaults to the value from the observable sequence.
	  * @returns {Observable} An observable sequence with a single value of a Map containing the values from the observable sequence.
	  */
	  observableProto.toMap = function (keySelector, elementSelector) {
	    if (typeof root.Map === 'undefined') { throw new TypeError(); }
	    return new ToMapObservable(this, keySelector, elementSelector);
	  };

	  var SliceObservable = (function (__super__) {
	    inherits(SliceObservable, __super__);
	    function SliceObservable(source, b, e) {
	      this.source = source;
	      this._b = b;
	      this._e = e;
	      __super__.call(this);
	    }

	    SliceObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SliceObserver(o, this._b, this._e));
	    };

	    return SliceObservable;
	  }(ObservableBase));

	  var SliceObserver = (function (__super__) {
	    inherits(SliceObserver, __super__);

	    function SliceObserver(o, b, e) {
	      this._o = o;
	      this._b = b;
	      this._e = e;
	      this._i = 0;
	      __super__.call(this);
	    }

	    SliceObserver.prototype.next = function (x) {
	      if (this._i >= this._b) {
	        if (this._e === this._i) {
	          this._o.onCompleted();
	        } else {
	          this._o.onNext(x);
	        }
	      }
	      this._i++;
	    };
	    SliceObserver.prototype.error = function (e) { this._o.onError(e); };
	    SliceObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return SliceObserver;
	  }(AbstractObserver));

	  /*
	  * The slice() method returns a shallow copy of a portion of an Observable into a new Observable object.
	  * Unlike the array version, this does not support negative numbers for being or end.
	  * @param {Number} [begin] Zero-based index at which to begin extraction. If omitted, this will default to zero.
	  * @param {Number} [end] Zero-based index at which to end extraction. slice extracts up to but not including end.
	  * If omitted, this will emit the rest of the Observable object.
	  * @returns {Observable} A shallow copy of a portion of an Observable into a new Observable object.
	  */
	  observableProto.slice = function (begin, end) {
	    var start = begin || 0;
	    if (start < 0) { throw new Rx.ArgumentOutOfRangeError(); }
	    if (typeof end === 'number' && end < start) {
	      throw new Rx.ArgumentOutOfRangeError();
	    }
	    return new SliceObservable(this, start, end);
	  };

	  var LastIndexOfObservable = (function (__super__) {
	    inherits(LastIndexOfObservable, __super__);
	    function LastIndexOfObservable(source, e, n) {
	      this.source = source;
	      this._e = e;
	      this._n = n;
	      __super__.call(this);
	    }

	    LastIndexOfObservable.prototype.subscribeCore = function (o) {
	      if (this._n < 0) {
	        o.onNext(-1);
	        o.onCompleted();
	        return disposableEmpty;
	      }

	      return this.source.subscribe(new LastIndexOfObserver(o, this._e, this._n));
	    };

	    return LastIndexOfObservable;
	  }(ObservableBase));

	  var LastIndexOfObserver = (function (__super__) {
	    inherits(LastIndexOfObserver, __super__);
	    function LastIndexOfObserver(o, e, n) {
	      this._o = o;
	      this._e = e;
	      this._n = n;
	      this._v = 0;
	      this._hv = false;
	      this._i = 0;
	      __super__.call(this);
	    }

	    LastIndexOfObserver.prototype.next = function (x) {
	      if (this._i >= this._n && x === this._e) {
	        this._hv = true;
	        this._v = this._i;
	      }
	      this._i++;
	    };
	    LastIndexOfObserver.prototype.error = function (e) { this._o.onError(e); };
	    LastIndexOfObserver.prototype.completed = function () {
	      if (this._hv) {
	        this._o.onNext(this._v);
	      } else {
	        this._o.onNext(-1);
	      }
	      this._o.onCompleted();
	    };

	    return LastIndexOfObserver;
	  }(AbstractObserver));

	  /**
	   * Returns the last index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   * @param {Any} searchElement Element to locate in the array.
	   * @param {Number} [fromIndex] The index to start the search.  If not specified, defaults to 0.
	   * @returns {Observable} And observable sequence containing the last index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   */
	  observableProto.lastIndexOf = function(searchElement, fromIndex) {
	    var n = +fromIndex || 0;
	    Math.abs(n) === Infinity && (n = 0);
	    return new LastIndexOfObservable(this, searchElement, n);
	  };

	  Observable.wrap = function (fn) {
	    function createObservable() {
	      return Observable.spawn.call(this, fn.apply(this, arguments));
	    }

	    createObservable.__generatorFunction__ = fn;
	    return createObservable;
	  };

	  var spawn = Observable.spawn = function () {
	    var gen = arguments[0], self = this, args = [];
	    for (var i = 1, len = arguments.length; i < len; i++) { args.push(arguments[i]); }

	    return new AnonymousObservable(function (o) {
	      var g = new CompositeDisposable();

	      if (isFunction(gen)) { gen = gen.apply(self, args); }
	      if (!gen || !isFunction(gen.next)) {
	        o.onNext(gen);
	        return o.onCompleted();
	      }

	      function processGenerator(res) {
	        var ret = tryCatch(gen.next).call(gen, res);
	        if (ret === errorObj) { return o.onError(ret.e); }
	        next(ret);
	      }

	      processGenerator();

	      function onError(err) {
	        var ret = tryCatch(gen.next).call(gen, err);
	        if (ret === errorObj) { return o.onError(ret.e); }
	        next(ret);
	      }

	      function next(ret) {
	        if (ret.done) {
	          o.onNext(ret.value);
	          o.onCompleted();
	          return;
	        }
	        var obs = toObservable.call(self, ret.value);
	        var value = null;
	        var hasValue = false;
	        if (Observable.isObservable(obs)) {
	          g.add(obs.subscribe(function(val) {
	            hasValue = true;
	            value = val;
	          }, onError, function() {
	            hasValue && processGenerator(value);
	          }));
	        } else {
	          onError(new TypeError('type not supported'));
	        }
	      }

	      return g;
	    });
	  };

	  function toObservable(obj) {
	    if (!obj) { return obj; }
	    if (Observable.isObservable(obj)) { return obj; }
	    if (isPromise(obj)) { return Observable.fromPromise(obj); }
	    if (isGeneratorFunction(obj) || isGenerator(obj)) { return spawn.call(this, obj); }
	    if (isFunction(obj)) { return thunkToObservable.call(this, obj); }
	    if (isArrayLike(obj) || isIterable(obj)) { return arrayToObservable.call(this, obj); }
	    if (isObject(obj)) {return objectToObservable.call(this, obj);}
	    return obj;
	  }

	  function arrayToObservable (obj) {
	    return Observable.from(obj).concatMap(function(o) {
	      if(Observable.isObservable(o) || isObject(o)) {
	        return toObservable.call(null, o);
	      } else {
	        return Rx.Observable.just(o);
	      }
	    }).toArray();
	  }

	  function objectToObservable (obj) {
	    var results = new obj.constructor(), keys = Object.keys(obj), observables = [];
	    for (var i = 0, len = keys.length; i < len; i++) {
	      var key = keys[i];
	      var observable = toObservable.call(this, obj[key]);

	      if(observable && Observable.isObservable(observable)) {
	        defer(observable, key);
	      } else {
	        results[key] = obj[key];
	      }
	    }

	    return Observable.forkJoin.apply(Observable, observables).map(function() {
	      return results;
	    });


	    function defer (observable, key) {
	      results[key] = undefined;
	      observables.push(observable.map(function (next) {
	        results[key] = next;
	      }));
	    }
	  }

	  function thunkToObservable(fn) {
	    var self = this;
	    return new AnonymousObservable(function (o) {
	      fn.call(self, function () {
	        var err = arguments[0], res = arguments[1];
	        if (err) { return o.onError(err); }
	        if (arguments.length > 2) {
	          var args = [];
	          for (var i = 1, len = arguments.length; i < len; i++) { args.push(arguments[i]); }
	          res = args;
	        }
	        o.onNext(res);
	        o.onCompleted();
	      });
	    });
	  }

	  function isGenerator(obj) {
	    return isFunction (obj.next) && isFunction (obj['throw']);
	  }

	  function isGeneratorFunction(obj) {
	    var ctor = obj.constructor;
	    if (!ctor) { return false; }
	    if (ctor.name === 'GeneratorFunction' || ctor.displayName === 'GeneratorFunction') { return true; }
	    return isGenerator(ctor.prototype);
	  }

	  function isObject(val) {
	    return Object == val.constructor;
	  }

	  /**
	   * Invokes the specified function asynchronously on the specified scheduler, surfacing the result through an observable sequence.
	   *
	   * @example
	   * var res = Rx.Observable.start(function () { console.log('hello'); });
	   * var res = Rx.Observable.start(function () { console.log('hello'); }, Rx.Scheduler.timeout);
	   * var res = Rx.Observable.start(function () { this.log('hello'); }, Rx.Scheduler.timeout, console);
	   *
	   * @param {Function} func Function to run asynchronously.
	   * @param {Scheduler} [scheduler]  Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
	   * @param [context]  The context for the func parameter to be executed.  If not specified, defaults to undefined.
	   * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
	   *
	   * Remarks
	   * * The function is called immediately, not during the subscription of the resulting sequence.
	   * * Multiple subscriptions to the resulting sequence can observe the function's result.
	   */
	  Observable.start = function (func, context, scheduler) {
	    return observableToAsync(func, context, scheduler)();
	  };

	  /**
	   * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
	   * @param {Function} function Function to convert to an asynchronous function.
	   * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
	   * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	   * @returns {Function} Asynchronous function.
	   */
	  var observableToAsync = Observable.toAsync = function (func, context, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return function () {
	      var args = arguments,
	        subject = new AsyncSubject();

	      scheduler.schedule(null, function () {
	        var result;
	        try {
	          result = func.apply(context, args);
	        } catch (e) {
	          subject.onError(e);
	          return;
	        }
	        subject.onNext(result);
	        subject.onCompleted();
	      });
	      return subject.asObservable();
	    };
	  };

	function createCbObservable(fn, ctx, selector, args) {
	  var o = new AsyncSubject();

	  args.push(createCbHandler(o, ctx, selector));
	  fn.apply(ctx, args);

	  return o.asObservable();
	}

	function createCbHandler(o, ctx, selector) {
	  return function handler () {
	    var len = arguments.length, results = new Array(len);
	    for(var i = 0; i < len; i++) { results[i] = arguments[i]; }

	    if (isFunction(selector)) {
	      results = tryCatch(selector).apply(ctx, results);
	      if (results === errorObj) { return o.onError(results.e); }
	      o.onNext(results);
	    } else {
	      if (results.length <= 1) {
	        o.onNext(results[0]);
	      } else {
	        o.onNext(results);
	      }
	    }

	    o.onCompleted();
	  };
	}

	/**
	 * Converts a callback function to an observable sequence.
	 *
	 * @param {Function} fn Function with a callback as the last parameter to convert to an Observable sequence.
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
	 * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
	 */
	Observable.fromCallback = function (fn, ctx, selector) {
	  return function () {
	    typeof ctx === 'undefined' && (ctx = this); 

	    var len = arguments.length, args = new Array(len)
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return createCbObservable(fn, ctx, selector, args);
	  };
	};

	function createNodeObservable(fn, ctx, selector, args) {
	  var o = new AsyncSubject();

	  args.push(createNodeHandler(o, ctx, selector));
	  fn.apply(ctx, args);

	  return o.asObservable();
	}

	function createNodeHandler(o, ctx, selector) {
	  return function handler () {
	    var err = arguments[0];
	    if (err) { return o.onError(err); }

	    var len = arguments.length, results = [];
	    for(var i = 1; i < len; i++) { results[i - 1] = arguments[i]; }

	    if (isFunction(selector)) {
	      var results = tryCatch(selector).apply(ctx, results);
	      if (results === errorObj) { return o.onError(results.e); }
	      o.onNext(results);
	    } else {
	      if (results.length <= 1) {
	        o.onNext(results[0]);
	      } else {
	        o.onNext(results);
	      }
	    }

	    o.onCompleted();
	  };
	}

	/**
	 * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
	 * @param {Function} fn The function to call
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
	 * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
	 */
	Observable.fromNodeCallback = function (fn, ctx, selector) {
	  return function () {
	    typeof ctx === 'undefined' && (ctx = this); 
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return createNodeObservable(fn, ctx, selector, args);
	  };
	};

	  function isNodeList(el) {
	    if (root.StaticNodeList) {
	      // IE8 Specific
	      // instanceof is slower than Object#toString, but Object#toString will not work as intended in IE8
	      return el instanceof root.StaticNodeList || el instanceof root.NodeList;
	    } else {
	      return Object.prototype.toString.call(el) === '[object NodeList]';
	    }
	  }

	  function ListenDisposable(e, n, fn) {
	    this._e = e;
	    this._n = n;
	    this._fn = fn;
	    this._e.addEventListener(this._n, this._fn, false);
	    this.isDisposed = false;
	  }
	  ListenDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this._e.removeEventListener(this._n, this._fn, false);
	      this.isDisposed = true;
	    }
	  };

	  function createEventListener (el, eventName, handler) {
	    var disposables = new CompositeDisposable();

	    // Asume NodeList or HTMLCollection
	    var elemToString = Object.prototype.toString.call(el);
	    if (isNodeList(el) || elemToString === '[object HTMLCollection]') {
	      for (var i = 0, len = el.length; i < len; i++) {
	        disposables.add(createEventListener(el.item(i), eventName, handler));
	      }
	    } else if (el) {
	      disposables.add(new ListenDisposable(el, eventName, handler));
	    }

	    return disposables;
	  }

	  /**
	   * Configuration option to determine whether to use native events only
	   */
	  Rx.config.useNativeEvents = false;

	  var EventObservable = (function(__super__) {
	    inherits(EventObservable, __super__);
	    function EventObservable(el, name, fn) {
	      this._el = el;
	      this._n = name;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    function createHandler(o, fn) {
	      return function handler () {
	        var results = arguments[0];
	        if (isFunction(fn)) {
	          results = tryCatch(fn).apply(null, arguments);
	          if (results === errorObj) { return o.onError(results.e); }
	        }
	        o.onNext(results);
	      };
	    }

	    EventObservable.prototype.subscribeCore = function (o) {
	      return createEventListener(
	        this._el,
	        this._n,
	        createHandler(o, this._fn));
	    };

	    return EventObservable;
	  }(ObservableBase));

	  /**
	   * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
	   * @param {Object} element The DOMElement or NodeList to attach a listener.
	   * @param {String} eventName The event name to attach the observable sequence.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence of events from the specified element and the specified event.
	   */
	  Observable.fromEvent = function (element, eventName, selector) {
	    // Node.js specific
	    if (element.addListener) {
	      return fromEventPattern(
	        function (h) { element.addListener(eventName, h); },
	        function (h) { element.removeListener(eventName, h); },
	        selector);
	    }

	    // Use only if non-native events are allowed
	    if (!Rx.config.useNativeEvents) {
	      // Handles jq, Angular.js, Zepto, Marionette, Ember.js
	      if (typeof element.on === 'function' && typeof element.off === 'function') {
	        return fromEventPattern(
	          function (h) { element.on(eventName, h); },
	          function (h) { element.off(eventName, h); },
	          selector);
	      }
	    }

	    return new EventObservable(element, eventName, selector).publish().refCount();
	  };

	  var EventPatternObservable = (function(__super__) {
	    inherits(EventPatternObservable, __super__);
	    function EventPatternObservable(add, del, fn) {
	      this._add = add;
	      this._del = del;
	      this._fn = fn;
	      __super__.call(this);
	    }

	    function createHandler(o, fn) {
	      return function handler () {
	        var results = arguments[0];
	        if (isFunction(fn)) {
	          results = tryCatch(fn).apply(null, arguments);
	          if (results === errorObj) { return o.onError(results.e); }
	        }
	        o.onNext(results);
	      };
	    }

	    EventPatternObservable.prototype.subscribeCore = function (o) {
	      var fn = createHandler(o, this._fn);
	      var returnValue = this._add(fn);
	      return new EventPatternDisposable(this._del, fn, returnValue);
	    };

	    function EventPatternDisposable(del, fn, ret) {
	      this._del = del;
	      this._fn = fn;
	      this._ret = ret;
	      this.isDisposed = false;
	    }

	    EventPatternDisposable.prototype.dispose = function () {
	      if(!this.isDisposed) {
	        isFunction(this._del) && this._del(this._fn, this._ret);
	        this.isDisposed = true;
	      }
	    };

	    return EventPatternObservable;
	  }(ObservableBase));

	  /**
	   * Creates an observable sequence from an event emitter via an addHandler/removeHandler pair.
	   * @param {Function} addHandler The function to add a handler to the emitter.
	   * @param {Function} [removeHandler] The optional function to remove a handler from an emitter.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence which wraps an event from an event emitter
	   */
	  var fromEventPattern = Observable.fromEventPattern = function (addHandler, removeHandler, selector) {
	    return new EventPatternObservable(addHandler, removeHandler, selector).publish().refCount();
	  };

	  /**
	   * Invokes the asynchronous function, surfacing the result through an observable sequence.
	   * @param {Function} functionAsync Asynchronous function which returns a Promise to run.
	   * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
	   */
	  Observable.startAsync = function (functionAsync) {
	    var promise = tryCatch(functionAsync)();
	    if (promise === errorObj) { return observableThrow(promise.e); }
	    return observableFromPromise(promise);
	  };

	  var PausableObservable = (function (__super__) {
	    inherits(PausableObservable, __super__);
	    function PausableObservable(source, pauser) {
	      this.source = source;
	      this.controller = new Subject();
	      this.paused = true;

	      if (pauser && pauser.subscribe) {
	        this.pauser = this.controller.merge(pauser);
	      } else {
	        this.pauser = this.controller;
	      }

	      __super__.call(this);
	    }

	    PausableObservable.prototype._subscribe = function (o) {
	      var conn = this.source.publish(),
	        subscription = conn.subscribe(o),
	        connection = disposableEmpty;

	      var pausable = this.pauser.startWith(!this.paused).distinctUntilChanged().subscribe(function (b) {
	        if (b) {
	          connection = conn.connect();
	        } else {
	          connection.dispose();
	          connection = disposableEmpty;
	        }
	      });

	      return new NAryDisposable([subscription, connection, pausable]);
	    };

	    PausableObservable.prototype.pause = function () {
	      this.paused = true;
	      this.controller.onNext(false);
	    };

	    PausableObservable.prototype.resume = function () {
	      this.paused = false;
	      this.controller.onNext(true);
	    };

	    return PausableObservable;

	  }(Observable));

	  /**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausable(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */
	  observableProto.pausable = function (pauser) {
	    return new PausableObservable(this, pauser);
	  };

	  function combineLatestSource(source, subject, resultSelector) {
	    return new AnonymousObservable(function (o) {
	      var hasValue = [false, false],
	        hasValueAll = false,
	        isDone = false,
	        values = new Array(2),
	        err;

	      function next(x, i) {
	        values[i] = x;
	        hasValue[i] = true;
	        if (hasValueAll || (hasValueAll = hasValue.every(identity))) {
	          if (err) { return o.onError(err); }
	          var res = tryCatch(resultSelector).apply(null, values);
	          if (res === errorObj) { return o.onError(res.e); }
	          o.onNext(res);
	        }
	        isDone && values[1] && o.onCompleted();
	      }

	      return new BinaryDisposable(
	        source.subscribe(
	          function (x) {
	            next(x, 0);
	          },
	          function (e) {
	            if (values[1]) {
	              o.onError(e);
	            } else {
	              err = e;
	            }
	          },
	          function () {
	            isDone = true;
	            values[1] && o.onCompleted();
	          }),
	        subject.subscribe(
	          function (x) {
	            next(x, 1);
	          },
	          function (e) { o.onError(e); },
	          function () {
	            isDone = true;
	            next(true, 1);
	          })
	        );
	    }, source);
	  }

	  var PausableBufferedObservable = (function (__super__) {
	    inherits(PausableBufferedObservable, __super__);
	    function PausableBufferedObservable(source, pauser) {
	      this.source = source;
	      this.controller = new Subject();
	      this.paused = true;

	      if (pauser && pauser.subscribe) {
	        this.pauser = this.controller.merge(pauser);
	      } else {
	        this.pauser = this.controller;
	      }

	      __super__.call(this);
	    }

	    PausableBufferedObservable.prototype._subscribe = function (o) {
	      var q = [], previousShouldFire;

	      function drainQueue() { while (q.length > 0) { o.onNext(q.shift()); } }

	      var subscription =
	        combineLatestSource(
	          this.source,
	          this.pauser.startWith(!this.paused).distinctUntilChanged(),
	          function (data, shouldFire) {
	            return { data: data, shouldFire: shouldFire };
	          })
	          .subscribe(
	            function (results) {
	              if (previousShouldFire !== undefined && results.shouldFire !== previousShouldFire) {
	                previousShouldFire = results.shouldFire;
	                // change in shouldFire
	                if (results.shouldFire) { drainQueue(); }
	              } else {
	                previousShouldFire = results.shouldFire;
	                // new data
	                if (results.shouldFire) {
	                  o.onNext(results.data);
	                } else {
	                  q.push(results.data);
	                }
	              }
	            },
	            function (err) {
	              drainQueue();
	              o.onError(err);
	            },
	            function () {
	              drainQueue();
	              o.onCompleted();
	            }
	          );
	      return subscription;      
	    };

	    PausableBufferedObservable.prototype.pause = function () {
	      this.paused = true;
	      this.controller.onNext(false);
	    };

	    PausableBufferedObservable.prototype.resume = function () {
	      this.paused = false;
	      this.controller.onNext(true);
	    };

	    return PausableBufferedObservable;

	  }(Observable));

	  /**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
	   * and yields the values that were buffered while paused.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */
	  observableProto.pausableBuffered = function (pauser) {
	    return new PausableBufferedObservable(this, pauser);
	  };

	  var ControlledObservable = (function (__super__) {
	    inherits(ControlledObservable, __super__);
	    function ControlledObservable (source, enableQueue, scheduler) {
	      __super__.call(this);
	      this.subject = new ControlledSubject(enableQueue, scheduler);
	      this.source = source.multicast(this.subject).refCount();
	    }

	    ControlledObservable.prototype._subscribe = function (o) {
	      return this.source.subscribe(o);
	    };

	    ControlledObservable.prototype.request = function (numberOfItems) {
	      return this.subject.request(numberOfItems == null ? -1 : numberOfItems);
	    };

	    return ControlledObservable;

	  }(Observable));

	  var ControlledSubject = (function (__super__) {
	    inherits(ControlledSubject, __super__);
	    function ControlledSubject(enableQueue, scheduler) {
	      enableQueue == null && (enableQueue = true);

	      __super__.call(this);
	      this.subject = new Subject();
	      this.enableQueue = enableQueue;
	      this.queue = enableQueue ? [] : null;
	      this.requestedCount = 0;
	      this.requestedDisposable = null;
	      this.error = null;
	      this.hasFailed = false;
	      this.hasCompleted = false;
	      this.scheduler = scheduler || currentThreadScheduler;
	    }

	    addProperties(ControlledSubject.prototype, Observer, {
	      _subscribe: function (o) {
	        return this.subject.subscribe(o);
	      },
	      onCompleted: function () {
	        this.hasCompleted = true;
	        if (!this.enableQueue || this.queue.length === 0) {
	          this.subject.onCompleted();
	          this.disposeCurrentRequest();
	        } else {
	          this.queue.push(Notification.createOnCompleted());
	        }
	      },
	      onError: function (error) {
	        this.hasFailed = true;
	        this.error = error;
	        if (!this.enableQueue || this.queue.length === 0) {
	          this.subject.onError(error);
	          this.disposeCurrentRequest();
	        } else {
	          this.queue.push(Notification.createOnError(error));
	        }
	      },
	      onNext: function (value) {
	        if (this.requestedCount <= 0) {
	          this.enableQueue && this.queue.push(Notification.createOnNext(value));
	        } else {
	          (this.requestedCount-- === 0) && this.disposeCurrentRequest();
	          this.subject.onNext(value);
	        }
	      },
	      _processRequest: function (numberOfItems) {
	        if (this.enableQueue) {
	          while (this.queue.length > 0 && (numberOfItems > 0 || this.queue[0].kind !== 'N')) {
	            var first = this.queue.shift();
	            first.accept(this.subject);
	            if (first.kind === 'N') {
	              numberOfItems--;
	            } else {
	              this.disposeCurrentRequest();
	              this.queue = [];
	            }
	          }
	        }

	        return numberOfItems;
	      },
	      request: function (number) {
	        this.disposeCurrentRequest();
	        var self = this;

	        this.requestedDisposable = this.scheduler.schedule(number,
	        function(s, i) {
	          var remaining = self._processRequest(i);
	          var stopped = self.hasCompleted || self.hasFailed;
	          if (!stopped && remaining > 0) {
	            self.requestedCount = remaining;

	            return disposableCreate(function () {
	              self.requestedCount = 0;
	            });
	              // Scheduled item is still in progress. Return a new
	              // disposable to allow the request to be interrupted
	              // via dispose.
	          }
	        });

	        return this.requestedDisposable;
	      },
	      disposeCurrentRequest: function () {
	        if (this.requestedDisposable) {
	          this.requestedDisposable.dispose();
	          this.requestedDisposable = null;
	        }
	      }
	    });

	    return ControlledSubject;
	  }(Observable));

	  /**
	   * Attaches a controller to the observable sequence with the ability to queue.
	   * @example
	   * var source = Rx.Observable.interval(100).controlled();
	   * source.request(3); // Reads 3 values
	   * @param {bool} enableQueue truthy value to determine if values should be queued pending the next request
	   * @param {Scheduler} scheduler determines how the requests will be scheduled
	   * @returns {Observable} The observable sequence which only propagates values on request.
	   */
	  observableProto.controlled = function (enableQueue, scheduler) {

	    if (enableQueue && isScheduler(enableQueue)) {
	      scheduler = enableQueue;
	      enableQueue = true;
	    }

	    if (enableQueue == null) {  enableQueue = true; }
	    return new ControlledObservable(this, enableQueue, scheduler);
	  };

	  var StopAndWaitObservable = (function (__super__) {
	    inherits(StopAndWaitObservable, __super__);
	    function StopAndWaitObservable (source) {
	      __super__.call(this);
	      this.source = source;
	    }

	    function scheduleMethod(s, self) {
	      return self.source.request(1);
	    }

	    StopAndWaitObservable.prototype._subscribe = function (o) {
	      this.subscription = this.source.subscribe(new StopAndWaitObserver(o, this, this.subscription));
	      return new BinaryDisposable(
	        this.subscription,
	        defaultScheduler.schedule(this, scheduleMethod)
	      );
	    };

	    var StopAndWaitObserver = (function (__sub__) {
	      inherits(StopAndWaitObserver, __sub__);
	      function StopAndWaitObserver (observer, observable, cancel) {
	        __sub__.call(this);
	        this.observer = observer;
	        this.observable = observable;
	        this.cancel = cancel;
	        this.scheduleDisposable = null;
	      }

	      StopAndWaitObserver.prototype.completed = function () {
	        this.observer.onCompleted();
	        this.dispose();
	      };

	      StopAndWaitObserver.prototype.error = function (error) {
	        this.observer.onError(error);
	        this.dispose();
	      };

	      function innerScheduleMethod(s, self) {
	        return self.observable.source.request(1);
	      }

	      StopAndWaitObserver.prototype.next = function (value) {
	        this.observer.onNext(value);
	        this.scheduleDisposable = defaultScheduler.schedule(this, innerScheduleMethod);
	      };

	      StopAndWaitObserver.dispose = function () {
	        this.observer = null;
	        if (this.cancel) {
	          this.cancel.dispose();
	          this.cancel = null;
	        }
	        if (this.scheduleDisposable) {
	          this.scheduleDisposable.dispose();
	          this.scheduleDisposable = null;
	        }
	        __sub__.prototype.dispose.call(this);
	      };

	      return StopAndWaitObserver;
	    }(AbstractObserver));

	    return StopAndWaitObservable;
	  }(Observable));


	  /**
	   * Attaches a stop and wait observable to the current observable.
	   * @returns {Observable} A stop and wait observable.
	   */
	  ControlledObservable.prototype.stopAndWait = function () {
	    return new StopAndWaitObservable(this);
	  };

	  var WindowedObservable = (function (__super__) {
	    inherits(WindowedObservable, __super__);
	    function WindowedObservable(source, windowSize) {
	      __super__.call(this);
	      this.source = source;
	      this.windowSize = windowSize;
	    }

	    function scheduleMethod(s, self) {
	      return self.source.request(self.windowSize);
	    }

	    WindowedObservable.prototype._subscribe = function (o) {
	      this.subscription = this.source.subscribe(new WindowedObserver(o, this, this.subscription));
	      return new BinaryDisposable(
	        this.subscription,
	        defaultScheduler.schedule(this, scheduleMethod)
	      );
	    };

	    var WindowedObserver = (function (__sub__) {
	      inherits(WindowedObserver, __sub__);
	      function WindowedObserver(observer, observable, cancel) {
	        this.observer = observer;
	        this.observable = observable;
	        this.cancel = cancel;
	        this.received = 0;
	        this.scheduleDisposable = null;
	        __sub__.call(this);
	      }

	      WindowedObserver.prototype.completed = function () {
	        this.observer.onCompleted();
	        this.dispose();
	      };

	      WindowedObserver.prototype.error = function (error) {
	        this.observer.onError(error);
	        this.dispose();
	      };

	      function innerScheduleMethod(s, self) {
	        return self.observable.source.request(self.observable.windowSize);
	      }

	      WindowedObserver.prototype.next = function (value) {
	        this.observer.onNext(value);
	        this.received = ++this.received % this.observable.windowSize;
	        this.received === 0 && (this.scheduleDisposable = defaultScheduler.schedule(this, innerScheduleMethod));
	      };

	      WindowedObserver.prototype.dispose = function () {
	        this.observer = null;
	        if (this.cancel) {
	          this.cancel.dispose();
	          this.cancel = null;
	        }
	        if (this.scheduleDisposable) {
	          this.scheduleDisposable.dispose();
	          this.scheduleDisposable = null;
	        }
	        __sub__.prototype.dispose.call(this);
	      };

	      return WindowedObserver;
	    }(AbstractObserver));

	    return WindowedObservable;
	  }(Observable));

	  /**
	   * Creates a sliding windowed observable based upon the window size.
	   * @param {Number} windowSize The number of items in the window
	   * @returns {Observable} A windowed observable based upon the window size.
	   */
	  ControlledObservable.prototype.windowed = function (windowSize) {
	    return new WindowedObservable(this, windowSize);
	  };

	  /**
	   * Pipes the existing Observable sequence into a Node.js Stream.
	   * @param {Stream} dest The destination Node.js stream.
	   * @returns {Stream} The destination stream.
	   */
	  observableProto.pipe = function (dest) {
	    var source = this.pausableBuffered();

	    function onDrain() {
	      source.resume();
	    }

	    dest.addListener('drain', onDrain);

	    source.subscribe(
	      function (x) {
	        !dest.write(x) && source.pause();
	      },
	      function (err) {
	        dest.emit('error', err);
	      },
	      function () {
	        // Hack check because STDIO is not closable
	        !dest._isStdio && dest.end();
	        dest.removeListener('drain', onDrain);
	      });

	    source.resume();

	    return dest;
	  };

	  var MulticastObservable = (function (__super__) {
	    inherits(MulticastObservable, __super__);
	    function MulticastObservable(source, fn1, fn2) {
	      this.source = source;
	      this._fn1 = fn1;
	      this._fn2 = fn2;
	      __super__.call(this);
	    }

	    MulticastObservable.prototype.subscribeCore = function (o) {
	      var connectable = this.source.multicast(this._fn1());
	      return new BinaryDisposable(this._fn2(connectable).subscribe(o), connectable.connect());
	    };

	    return MulticastObservable;
	  }(ObservableBase));

	  /**
	   * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
	   * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
	   * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
	   *
	   * @example
	   * 1 - res = source.multicast(observable);
	   * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
	   *
	   * @param {Function|Subject} subjectOrSubjectSelector
	   * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
	   * Or:
	   * Subject to push source elements into.
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.multicast = function (subjectOrSubjectSelector, selector) {
	    return isFunction(subjectOrSubjectSelector) ?
	      new MulticastObservable(this, subjectOrSubjectSelector, selector) :
	      new ConnectableObservable(this, subjectOrSubjectSelector);
	  };

	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of Multicast using a regular Subject.
	   *
	   * @example
	   * var resres = source.publish();
	   * var res = source.publish(function (x) { return x; });
	   *
	   * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publish = function (selector) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new Subject(); }, selector) :
	      this.multicast(new Subject());
	  };

	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.share = function () {
	    return this.publish().refCount();
	  };

	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
	   * This operator is a specialization of Multicast using a AsyncSubject.
	   *
	   * @example
	   * var res = source.publishLast();
	   * var res = source.publishLast(function (x) { return x; });
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publishLast = function (selector) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new AsyncSubject(); }, selector) :
	      this.multicast(new AsyncSubject());
	  };

	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
	   * This operator is a specialization of Multicast using a BehaviorSubject.
	   *
	   * @example
	   * var res = source.publishValue(42);
	   * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publishValue = function (initialValueOrSelector, initialValue) {
	    return arguments.length === 2 ?
	      this.multicast(function () {
	        return new BehaviorSubject(initialValue);
	      }, initialValueOrSelector) :
	      this.multicast(new BehaviorSubject(initialValueOrSelector));
	  };

	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
	   * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.shareValue = function (initialValue) {
	    return this.publishValue(initialValue).refCount();
	  };

	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of Multicast using a ReplaySubject.
	   *
	   * @example
	   * var res = source.replay(null, 3);
	   * var res = source.replay(null, 3, 500);
	   * var res = source.replay(null, 3, 500, scheduler);
	   * var res = source.replay(function (x) { return x.take(6).repeat(); }, 3, 500, scheduler);
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all the notifications of the source subject to the specified replay buffer trimming policy.
	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param windowSize [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.replay = function (selector, bufferSize, windowSize, scheduler) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new ReplaySubject(bufferSize, windowSize, scheduler); }, selector) :
	      this.multicast(new ReplaySubject(bufferSize, windowSize, scheduler));
	  };

	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of replay which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   *
	   * @example
	   * var res = source.shareReplay(3);
	   * var res = source.shareReplay(3, 500);
	   * var res = source.shareReplay(3, 500, scheduler);
	   *

	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param window [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.shareReplay = function (bufferSize, windowSize, scheduler) {
	    return this.replay(null, bufferSize, windowSize, scheduler).refCount();
	  };

	  var InnerSubscription = function (s, o) {
	    this._s = s;
	    this._o = o;
	  };

	  InnerSubscription.prototype.dispose = function () {
	    if (!this._s.isDisposed && this._o !== null) {
	      var idx = this._s.observers.indexOf(this._o);
	      this._s.observers.splice(idx, 1);
	      this._o = null;
	    }
	  };

	  var RefCountObservable = (function (__super__) {
	    inherits(RefCountObservable, __super__);
	    function RefCountObservable(source) {
	      this.source = source;
	      this._count = 0;
	      this._connectableSubscription = null;
	      __super__.call(this);
	    }

	    RefCountObservable.prototype.subscribeCore = function (o) {
	      var subscription = this.source.subscribe(o);
	      ++this._count === 1 && (this._connectableSubscription = this.source.connect());
	      return new RefCountDisposable(this, subscription);
	    };

	    function RefCountDisposable(p, s) {
	      this._p = p;
	      this._s = s;
	      this.isDisposed = false;
	    }

	    RefCountDisposable.prototype.dispose = function () {
	      if (!this.isDisposed) {
	        this.isDisposed = true;
	        this._s.dispose();
	        --this._p._count === 0 && this._p._connectableSubscription.dispose();
	      }
	    };

	    return RefCountObservable;
	  }(ObservableBase));

	  var ConnectableObservable = Rx.ConnectableObservable = (function (__super__) {
	    inherits(ConnectableObservable, __super__);
	    function ConnectableObservable(source, subject) {
	      this.source = source;
	      this._connection = null;
	      this._source = source.asObservable();
	      this._subject = subject;
	      __super__.call(this);
	    }

	    function ConnectDisposable(parent, subscription) {
	      this._p = parent;
	      this._s = subscription;
	    }

	    ConnectDisposable.prototype.dispose = function () {
	      if (this._s) {
	        this._s.dispose();
	        this._s = null;
	        this._p._connection = null;
	      }
	    };

	    ConnectableObservable.prototype.connect = function () {
	      if (!this._connection) {
	        if (this._subject.isStopped) {
	          return disposableEmpty;
	        }
	        var subscription = this._source.subscribe(this._subject);
	        this._connection = new ConnectDisposable(this, subscription);
	      }
	      return this._connection;
	    };

	    ConnectableObservable.prototype._subscribe = function (o) {
	      return this._subject.subscribe(o);
	    };

	    ConnectableObservable.prototype.refCount = function () {
	      return new RefCountObservable(this);
	    };

	    return ConnectableObservable;
	  }(Observable));

	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence. This observable sequence
	   * can be resubscribed to, even if all prior subscriptions have ended. (unlike `.publish().refCount()`)
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source.
	   */
	  observableProto.singleInstance = function() {
	    var source = this, hasObservable = false, observable;

	    function getObservable() {
	      if (!hasObservable) {
	        hasObservable = true;
	        observable = source['finally'](function() { hasObservable = false; }).publish().refCount();
	      }
	      return observable;
	    }

	    return new AnonymousObservable(function(o) {
	      return getObservable().subscribe(o);
	    });
	  };

	  /**
	   *  Correlates the elements of two sequences based on overlapping durations.
	   *
	   *  @param {Observable} right The right observable sequence to join elements for.
	   *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
	   *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
	   *  @param {Function} resultSelector A function invoked to compute a result element for any two overlapping elements of the left and right observable sequences. The parameters passed to the function correspond with the elements from the left and right source sequences for which overlap occurs.
	   *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
	   */
	  observableProto.join = function (right, leftDurationSelector, rightDurationSelector, resultSelector) {
	    var left = this;
	    return new AnonymousObservable(function (o) {
	      var group = new CompositeDisposable();
	      var leftDone = false, rightDone = false;
	      var leftId = 0, rightId = 0;
	      var leftMap = new Map(), rightMap = new Map();
	      var handleError = function (e) { o.onError(e); };

	      group.add(left.subscribe(
	        function (value) {
	          var id = leftId++, md = new SingleAssignmentDisposable();

	          leftMap.set(id, value);
	          group.add(md);

	          var duration = tryCatch(leftDurationSelector)(value);
	          if (duration === errorObj) { return o.onError(duration.e); }

	          md.setDisposable(duration.take(1).subscribe(
	            noop,
	            handleError,
	            function () {
	              leftMap['delete'](id) && leftMap.size === 0 && leftDone && o.onCompleted();
	              group.remove(md);
	            }));

	          rightMap.forEach(function (v) {
	            var result = tryCatch(resultSelector)(value, v);
	            if (result === errorObj) { return o.onError(result.e); }
	            o.onNext(result);
	          });
	        },
	        handleError,
	        function () {
	          leftDone = true;
	          (rightDone || leftMap.size === 0) && o.onCompleted();
	        })
	      );

	      group.add(right.subscribe(
	        function (value) {
	          var id = rightId++, md = new SingleAssignmentDisposable();

	          rightMap.set(id, value);
	          group.add(md);

	          var duration = tryCatch(rightDurationSelector)(value);
	          if (duration === errorObj) { return o.onError(duration.e); }

	          md.setDisposable(duration.take(1).subscribe(
	            noop,
	            handleError,
	            function () {
	              rightMap['delete'](id) && rightMap.size === 0 && rightDone && o.onCompleted();
	              group.remove(md);
	            }));

	          leftMap.forEach(function (v) {
	            var result = tryCatch(resultSelector)(v, value);
	            if (result === errorObj) { return o.onError(result.e); }
	            o.onNext(result);
	          });
	        },
	        handleError,
	        function () {
	          rightDone = true;
	          (leftDone || rightMap.size === 0) && o.onCompleted();
	        })
	      );
	      return group;
	    }, left);
	  };

	  /**
	   *  Correlates the elements of two sequences based on overlapping durations, and groups the results.
	   *
	   *  @param {Observable} right The right observable sequence to join elements for.
	   *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
	   *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
	   *  @param {Function} resultSelector A function invoked to compute a result element for any element of the left sequence with overlapping elements from the right observable sequence. The first parameter passed to the function is an element of the left sequence. The second parameter passed to the function is an observable sequence with elements from the right sequence that overlap with the left sequence's element.
	   *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
	   */
	  observableProto.groupJoin = function (right, leftDurationSelector, rightDurationSelector, resultSelector) {
	    var left = this;
	    return new AnonymousObservable(function (o) {
	      var group = new CompositeDisposable();
	      var r = new RefCountDisposable(group);
	      var leftMap = new Map(), rightMap = new Map();
	      var leftId = 0, rightId = 0;
	      var handleError = function (e) { return function (v) { v.onError(e); }; };

	      function handleError(e) { };

	      group.add(left.subscribe(
	        function (value) {
	          var s = new Subject();
	          var id = leftId++;
	          leftMap.set(id, s);

	          var result = tryCatch(resultSelector)(value, addRef(s, r));
	          if (result === errorObj) {
	            leftMap.forEach(handleError(result.e));
	            return o.onError(result.e);
	          }
	          o.onNext(result);

	          rightMap.forEach(function (v) { s.onNext(v); });

	          var md = new SingleAssignmentDisposable();
	          group.add(md);

	          var duration = tryCatch(leftDurationSelector)(value);
	          if (duration === errorObj) {
	            leftMap.forEach(handleError(duration.e));
	            return o.onError(duration.e);
	          }

	          md.setDisposable(duration.take(1).subscribe(
	            noop,
	            function (e) {
	              leftMap.forEach(handleError(e));
	              o.onError(e);
	            },
	            function () {
	              leftMap['delete'](id) && s.onCompleted();
	              group.remove(md);
	            }));
	        },
	        function (e) {
	          leftMap.forEach(handleError(e));
	          o.onError(e);
	        },
	        function () { o.onCompleted(); })
	      );

	      group.add(right.subscribe(
	        function (value) {
	          var id = rightId++;
	          rightMap.set(id, value);

	          var md = new SingleAssignmentDisposable();
	          group.add(md);

	          var duration = tryCatch(rightDurationSelector)(value);
	          if (duration === errorObj) {
	            leftMap.forEach(handleError(duration.e));
	            return o.onError(duration.e);
	          }

	          md.setDisposable(duration.take(1).subscribe(
	            noop,
	            function (e) {
	              leftMap.forEach(handleError(e));
	              o.onError(e);
	            },
	            function () {
	              rightMap['delete'](id);
	              group.remove(md);
	            }));

	          leftMap.forEach(function (v) { v.onNext(value); });
	        },
	        function (e) {
	          leftMap.forEach(handleError(e));
	          o.onError(e);
	        })
	      );

	      return r;
	    }, left);
	  };

	  function toArray(x) { return x.toArray(); }

	  /**
	   *  Projects each element of an observable sequence into zero or more buffers.
	   *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
	   *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
	   *  @returns {Observable} An observable sequence of windows.
	   */
	  observableProto.buffer = function () {
	    return this.window.apply(this, arguments)
	      .flatMap(toArray);
	  };

	  /**
	   *  Projects each element of an observable sequence into zero or more windows.
	   *
	   *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
	   *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
	   *  @returns {Observable} An observable sequence of windows.
	   */
	  observableProto.window = function (windowOpeningsOrClosingSelector, windowClosingSelector) {
	    if (arguments.length === 1 && typeof arguments[0] !== 'function') {
	      return observableWindowWithBoundaries.call(this, windowOpeningsOrClosingSelector);
	    }
	    return typeof windowOpeningsOrClosingSelector === 'function' ?
	      observableWindowWithClosingSelector.call(this, windowOpeningsOrClosingSelector) :
	      observableWindowWithOpenings.call(this, windowOpeningsOrClosingSelector, windowClosingSelector);
	  };

	  function observableWindowWithOpenings(windowOpenings, windowClosingSelector) {
	    return windowOpenings.groupJoin(this, windowClosingSelector, observableEmpty, function (_, win) {
	      return win;
	    });
	  }

	  function observableWindowWithBoundaries(windowBoundaries) {
	    var source = this;
	    return new AnonymousObservable(function (observer) {
	      var win = new Subject(),
	        d = new CompositeDisposable(),
	        r = new RefCountDisposable(d);

	      observer.onNext(addRef(win, r));

	      d.add(source.subscribe(function (x) {
	        win.onNext(x);
	      }, function (err) {
	        win.onError(err);
	        observer.onError(err);
	      }, function () {
	        win.onCompleted();
	        observer.onCompleted();
	      }));

	      isPromise(windowBoundaries) && (windowBoundaries = observableFromPromise(windowBoundaries));

	      d.add(windowBoundaries.subscribe(function (w) {
	        win.onCompleted();
	        win = new Subject();
	        observer.onNext(addRef(win, r));
	      }, function (err) {
	        win.onError(err);
	        observer.onError(err);
	      }, function () {
	        win.onCompleted();
	        observer.onCompleted();
	      }));

	      return r;
	    }, source);
	  }

	  function observableWindowWithClosingSelector(windowClosingSelector) {
	    var source = this;
	    return new AnonymousObservable(function (observer) {
	      var m = new SerialDisposable(),
	        d = new CompositeDisposable(m),
	        r = new RefCountDisposable(d),
	        win = new Subject();
	      observer.onNext(addRef(win, r));
	      d.add(source.subscribe(function (x) {
	          win.onNext(x);
	      }, function (err) {
	          win.onError(err);
	          observer.onError(err);
	      }, function () {
	          win.onCompleted();
	          observer.onCompleted();
	      }));

	      function createWindowClose () {
	        var windowClose;
	        try {
	          windowClose = windowClosingSelector();
	        } catch (e) {
	          observer.onError(e);
	          return;
	        }

	        isPromise(windowClose) && (windowClose = observableFromPromise(windowClose));

	        var m1 = new SingleAssignmentDisposable();
	        m.setDisposable(m1);
	        m1.setDisposable(windowClose.take(1).subscribe(noop, function (err) {
	          win.onError(err);
	          observer.onError(err);
	        }, function () {
	          win.onCompleted();
	          win = new Subject();
	          observer.onNext(addRef(win, r));
	          createWindowClose();
	        }));
	      }

	      createWindowClose();
	      return r;
	    }, source);
	  }

	  var PairwiseObservable = (function (__super__) {
	    inherits(PairwiseObservable, __super__);
	    function PairwiseObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    PairwiseObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new PairwiseObserver(o));
	    };

	    return PairwiseObservable;
	  }(ObservableBase));

	  var PairwiseObserver = (function(__super__) {
	    inherits(PairwiseObserver, __super__);
	    function PairwiseObserver(o) {
	      this._o = o;
	      this._p = null;
	      this._hp = false;
	      __super__.call(this);
	    }

	    PairwiseObserver.prototype.next = function (x) {
	      if (this._hp) {
	        this._o.onNext([this._p, x]);
	      } else {
	        this._hp = true;
	      }
	      this._p = x;
	    };
	    PairwiseObserver.prototype.error = function (err) { this._o.onError(err); };
	    PairwiseObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return PairwiseObserver;
	  }(AbstractObserver));

	  /**
	   * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
	   * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
	   * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
	   * @returns {Observable} An observable that triggers on successive pairs of observations from the input observable as an array.
	   */
	  observableProto.pairwise = function () {
	    return new PairwiseObservable(this);
	  };

	  /**
	   * Returns two observables which partition the observations of the source by the given function.
	   * The first will trigger observations for those values for which the predicate returns true.
	   * The second will trigger observations for those values where the predicate returns false.
	   * The predicate is executed once for each subscribed observer.
	   * Both also propagate all error observations arising from the source and each completes
	   * when the source completes.
	   * @param {Function} predicate
	   *    The function to determine which output Observable will trigger a particular observation.
	   * @returns {Array}
	   *    An array of observables. The first triggers when the predicate returns true,
	   *    and the second triggers when the predicate returns false.
	  */
	  observableProto.partition = function(predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return [
	      this.filter(predicate, thisArg),
	      this.filter(function (x, i, o) { return !fn(x, i, o); })
	    ];
	  };

	  var WhileEnumerable = (function(__super__) {
	    inherits(WhileEnumerable, __super__);
	    function WhileEnumerable(c, s) {
	      this.c = c;
	      this.s = s;
	    }
	    WhileEnumerable.prototype[$iterator$] = function () {
	      var self = this;
	      return {
	        next: function () {
	          return self.c() ?
	           { done: false, value: self.s } :
	           { done: true, value: void 0 };
	        }
	      };
	    };
	    return WhileEnumerable;
	  }(Enumerable));
	  
	  function enumerableWhile(condition, source) {
	    return new WhileEnumerable(condition, source);
	  }  

	   /**
	   *  Returns an observable sequence that is the result of invoking the selector on the source sequence, without sharing subscriptions.
	   *  This operator allows for a fluent style of writing queries that use the same sequence multiple times.
	   *
	   * @param {Function} selector Selector function which can use the source sequence as many times as needed, without sharing subscriptions to the source sequence.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.letBind = observableProto['let'] = function (func) {
	    return func(this);
	  };

	   /**
	   *  Determines whether an observable collection contains values. 
	   *
	   * @example
	   *  1 - res = Rx.Observable.if(condition, obs1);
	   *  2 - res = Rx.Observable.if(condition, obs1, obs2);
	   *  3 - res = Rx.Observable.if(condition, obs1, scheduler);
	   * @param {Function} condition The condition which determines if the thenSource or elseSource will be run.
	   * @param {Observable} thenSource The observable sequence or Promise that will be run if the condition function returns true.
	   * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the condition function returns false. If this is not provided, it defaults to Rx.Observabe.Empty with the specified scheduler.
	   * @returns {Observable} An observable sequence which is either the thenSource or elseSource.
	   */
	  Observable['if'] = function (condition, thenSource, elseSourceOrScheduler) {
	    return observableDefer(function () {
	      elseSourceOrScheduler || (elseSourceOrScheduler = observableEmpty());

	      isPromise(thenSource) && (thenSource = observableFromPromise(thenSource));
	      isPromise(elseSourceOrScheduler) && (elseSourceOrScheduler = observableFromPromise(elseSourceOrScheduler));

	      // Assume a scheduler for empty only
	      typeof elseSourceOrScheduler.now === 'function' && (elseSourceOrScheduler = observableEmpty(elseSourceOrScheduler));
	      return condition() ? thenSource : elseSourceOrScheduler;
	    });
	  };

	   /**
	   *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
	   * There is an alias for this method called 'forIn' for browsers <IE9
	   * @param {Array} sources An array of values to turn into an observable sequence.
	   * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
	   * @returns {Observable} An observable sequence from the concatenated observable sequences.
	   */
	  Observable['for'] = Observable.forIn = function (sources, resultSelector, thisArg) {
	    return enumerableOf(sources, resultSelector, thisArg).concat();
	  };

	   /**
	   *  Repeats source as long as condition holds emulating a while loop.
	   * There is an alias for this method called 'whileDo' for browsers <IE9
	   *
	   * @param {Function} condition The condition which determines if the source will be repeated.
	   * @param {Observable} source The observable sequence that will be run if the condition function returns true.
	   * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
	   */
	  var observableWhileDo = Observable['while'] = Observable.whileDo = function (condition, source) {
	    isPromise(source) && (source = observableFromPromise(source));
	    return enumerableWhile(condition, source).concat();
	  };

	   /**
	   *  Repeats source as long as condition holds emulating a do while loop.
	   *
	   * @param {Function} condition The condition which determines if the source will be repeated.
	   * @param {Observable} source The observable sequence that will be run if the condition function returns true.
	   * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
	   */
	  observableProto.doWhile = function (condition) {
	    return observableConcat([this, observableWhileDo(condition, this)]);
	  };

	   /**
	   *  Uses selector to determine which source in sources to use.
	   * @param {Function} selector The function which extracts the value for to test in a case statement.
	   * @param {Array} sources A object which has keys which correspond to the case statement labels.
	   * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
	   *
	   * @returns {Observable} An observable sequence which is determined by a case statement.
	   */
	  Observable['case'] = function (selector, sources, defaultSourceOrScheduler) {
	    return observableDefer(function () {
	      isPromise(defaultSourceOrScheduler) && (defaultSourceOrScheduler = observableFromPromise(defaultSourceOrScheduler));
	      defaultSourceOrScheduler || (defaultSourceOrScheduler = observableEmpty());

	      isScheduler(defaultSourceOrScheduler) && (defaultSourceOrScheduler = observableEmpty(defaultSourceOrScheduler));

	      var result = sources[selector()];
	      isPromise(result) && (result = observableFromPromise(result));

	      return result || defaultSourceOrScheduler;
	    });
	  };

	  var ExpandObservable = (function(__super__) {
	    inherits(ExpandObservable, __super__);
	    function ExpandObservable(source, fn, scheduler) {
	      this.source = source;
	      this._fn = fn;
	      this._scheduler = scheduler;
	      __super__.call(this);
	    }

	    function scheduleRecursive(args, recurse) {
	      var state = args[0], self = args[1];
	      var work;
	      if (state.q.length > 0) {
	        work = state.q.shift();
	      } else {
	        state.isAcquired = false;
	        return;
	      }
	      var m1 = new SingleAssignmentDisposable();
	      state.d.add(m1);
	      m1.setDisposable(work.subscribe(new ExpandObserver(state, self, m1)));
	      recurse([state, self]);
	    }

	    ExpandObservable.prototype._ensureActive = function (state) {
	      var isOwner = false;
	      if (state.q.length > 0) {
	        isOwner = !state.isAcquired;
	        state.isAcquired = true;
	      }
	      isOwner && state.m.setDisposable(this._scheduler.scheduleRecursive([state, this], scheduleRecursive));
	    };

	    ExpandObservable.prototype.subscribeCore = function (o) {
	      var m = new SerialDisposable(),
	        d = new CompositeDisposable(m),
	        state = {
	          q: [],
	          m: m,
	          d: d,
	          activeCount: 0,
	          isAcquired: false,
	          o: o
	        };

	      state.q.push(this.source);
	      state.activeCount++;
	      this._ensureActive(state);
	      return d;
	    };

	    return ExpandObservable;
	  }(ObservableBase));

	  var ExpandObserver = (function(__super__) {
	    inherits(ExpandObserver, __super__);
	    function ExpandObserver(state, parent, m1) {
	      this._s = state;
	      this._p = parent;
	      this._m1 = m1;
	      __super__.call(this);
	    }

	    ExpandObserver.prototype.next = function (x) {
	      this._s.o.onNext(x);
	      var result = tryCatch(this._p._fn)(x);
	      if (result === errorObj) { return this._s.o.onError(result.e); }
	      this._s.q.push(result);
	      this._s.activeCount++;
	      this._p._ensureActive(this._s);
	    };

	    ExpandObserver.prototype.error = function (e) {
	      this._s.o.onError(e);
	    };

	    ExpandObserver.prototype.completed = function () {
	      this._s.d.remove(this._m1);
	      this._s.activeCount--;
	      this._s.activeCount === 0 && this._s.o.onCompleted();
	    };

	    return ExpandObserver;
	  }(AbstractObserver));

	   /**
	   *  Expands an observable sequence by recursively invoking selector.
	   *
	   * @param {Function} selector Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
	   * @param {Scheduler} [scheduler] Scheduler on which to perform the expansion. If not provided, this defaults to the current thread scheduler.
	   * @returns {Observable} An observable sequence containing all the elements produced by the recursive expansion.
	   */
	  observableProto.expand = function (selector, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new ExpandObservable(this, selector, scheduler);
	  };

	  function argumentsToArray() {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return args;
	  }

	  var ForkJoinObservable = (function (__super__) {
	    inherits(ForkJoinObservable, __super__);
	    function ForkJoinObservable(sources, cb) {
	      this._sources = sources;
	      this._cb = cb;
	      __super__.call(this);
	    }

	    ForkJoinObservable.prototype.subscribeCore = function (o) {
	      if (this._sources.length === 0) {
	        o.onCompleted();
	        return disposableEmpty;
	      }

	      var count = this._sources.length;
	      var state = {
	        finished: false,
	        hasResults: new Array(count),
	        hasCompleted: new Array(count),
	        results: new Array(count)
	      };

	      var subscriptions = new CompositeDisposable();
	      for (var i = 0, len = this._sources.length; i < len; i++) {
	        var source = this._sources[i];
	        isPromise(source) && (source = observableFromPromise(source));
	        subscriptions.add(source.subscribe(new ForkJoinObserver(o, state, i, this._cb, subscriptions)));
	      }

	      return subscriptions;
	    };

	    return ForkJoinObservable;
	  }(ObservableBase));

	  var ForkJoinObserver = (function(__super__) {
	    inherits(ForkJoinObserver, __super__);
	    function ForkJoinObserver(o, s, i, cb, subs) {
	      this._o = o;
	      this._s = s;
	      this._i = i;
	      this._cb = cb;
	      this._subs = subs;
	      __super__.call(this);
	    }

	    ForkJoinObserver.prototype.next = function (x) {
	      if (!this._s.finished) {
	        this._s.hasResults[this._i] = true;
	        this._s.results[this._i] = x;
	      }
	    };

	    ForkJoinObserver.prototype.error = function (e) {
	      this._s.finished = true;
	      this._o.onError(e);
	      this._subs.dispose();
	    };

	    ForkJoinObserver.prototype.completed = function () {
	      if (!this._s.finished) {
	        if (!this._s.hasResults[this._i]) {
	          return this._o.onCompleted();
	        }
	        this._s.hasCompleted[this._i] = true;
	        for (var i = 0; i < this._s.results.length; i++) {
	          if (!this._s.hasCompleted[i]) { return; }
	        }
	        this._s.finished = true;

	        var res = tryCatch(this._cb).apply(null, this._s.results);
	        if (res === errorObj) { return this._o.onError(res.e); }

	        this._o.onNext(res);
	        this._o.onCompleted();
	      }
	    };

	    return ForkJoinObserver;
	  }(AbstractObserver));

	   /**
	   *  Runs all observable sequences in parallel and collect their last elements.
	   *
	   * @example
	   *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
	   *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
	   * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
	   */
	  Observable.forkJoin = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	    return new ForkJoinObservable(args, resultSelector);
	  };

	   /**
	   *  Runs two observable sequences in parallel and combines their last elemenets.
	   * @param {Observable} second Second observable sequence.
	   * @param {Function} resultSelector Result selector function to invoke with the last elements of both sequences.
	   * @returns {Observable} An observable sequence with the result of calling the selector function with the last elements of both input sequences.
	   */
	  observableProto.forkJoin = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    if (Array.isArray(args[0])) {
	      args[0].unshift(this);
	    } else {
	      args.unshift(this);
	    }
	    return Observable.forkJoin.apply(null, args);
	  };

	  /**
	   * Comonadic bind operator.
	   * @param {Function} selector A transform function to apply to each element.
	   * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
	   * @returns {Observable} An observable sequence which results from the comonadic bind operation.
	   */
	  observableProto.manySelect = observableProto.extend = function (selector, scheduler) {
	    isScheduler(scheduler) || (scheduler = Rx.Scheduler.immediate);
	    var source = this;
	    return observableDefer(function () {
	      var chain;

	      return source
	        .map(function (x) {
	          var curr = new ChainObservable(x);

	          chain && chain.onNext(x);
	          chain = curr;

	          return curr;
	        })
	        .tap(
	          noop,
	          function (e) { chain && chain.onError(e); },
	          function () { chain && chain.onCompleted(); }
	        )
	        .observeOn(scheduler)
	        .map(selector);
	    }, source);
	  };

	  var ChainObservable = (function (__super__) {
	    inherits(ChainObservable, __super__);
	    function ChainObservable(head) {
	      __super__.call(this);
	      this.head = head;
	      this.tail = new AsyncSubject();
	    }

	    addProperties(ChainObservable.prototype, Observer, {
	      _subscribe: function (o) {
	        var g = new CompositeDisposable();
	        g.add(currentThreadScheduler.schedule(this, function (_, self) {
	          o.onNext(self.head);
	          g.add(self.tail.mergeAll().subscribe(o));
	        }));

	        return g;
	      },
	      onCompleted: function () {
	        this.onNext(Observable.empty());
	      },
	      onError: function (e) {
	        this.onNext(Observable['throw'](e));
	      },
	      onNext: function (v) {
	        this.tail.onNext(v);
	        this.tail.onCompleted();
	      }
	    });

	    return ChainObservable;

	  }(Observable));

	  var Map = root.Map || (function () {
	    function Map() {
	      this.size = 0;
	      this._values = [];
	      this._keys = [];
	    }

	    Map.prototype['delete'] = function (key) {
	      var i = this._keys.indexOf(key);
	      if (i === -1) { return false; }
	      this._values.splice(i, 1);
	      this._keys.splice(i, 1);
	      this.size--;
	      return true;
	    };

	    Map.prototype.get = function (key) {
	      var i = this._keys.indexOf(key);
	      return i === -1 ? undefined : this._values[i];
	    };

	    Map.prototype.set = function (key, value) {
	      var i = this._keys.indexOf(key);
	      if (i === -1) {
	        this._keys.push(key);
	        this._values.push(value);
	        this.size++;
	      } else {
	        this._values[i] = value;
	      }
	      return this;
	    };

	    Map.prototype.forEach = function (cb, thisArg) {
	      for (var i = 0; i < this.size; i++) {
	        cb.call(thisArg, this._values[i], this._keys[i]);
	      }
	    };

	    return Map;
	  }());

	  /**
	   * @constructor
	   * Represents a join pattern over observable sequences.
	   */
	  function Pattern(patterns) {
	    this.patterns = patterns;
	  }

	  /**
	   *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
	   *  @param other Observable sequence to match in addition to the current pattern.
	   *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
	   */
	  Pattern.prototype.and = function (other) {
	    return new Pattern(this.patterns.concat(other));
	  };

	  /**
	   *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
	   *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
	   *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
	   */
	  Pattern.prototype.thenDo = function (selector) {
	    return new Plan(this, selector);
	  };

	  function Plan(expression, selector) {
	    this.expression = expression;
	    this.selector = selector;
	  }

	  function handleOnError(o) { return function (e) { o.onError(e); }; }
	  function handleOnNext(self, observer) {
	    return function onNext () {
	      var result = tryCatch(self.selector).apply(self, arguments);
	      if (result === errorObj) { return observer.onError(result.e); }
	      observer.onNext(result);
	    };
	  }

	  Plan.prototype.activate = function (externalSubscriptions, observer, deactivate) {
	    var joinObservers = [], errHandler = handleOnError(observer);
	    for (var i = 0, len = this.expression.patterns.length; i < len; i++) {
	      joinObservers.push(planCreateObserver(externalSubscriptions, this.expression.patterns[i], errHandler));
	    }
	    var activePlan = new ActivePlan(joinObservers, handleOnNext(this, observer), function () {
	      for (var j = 0, jlen = joinObservers.length; j < jlen; j++) {
	        joinObservers[j].removeActivePlan(activePlan);
	      }
	      deactivate(activePlan);
	    });
	    for (i = 0, len = joinObservers.length; i < len; i++) {
	      joinObservers[i].addActivePlan(activePlan);
	    }
	    return activePlan;
	  };

	  function planCreateObserver(externalSubscriptions, observable, onError) {
	    var entry = externalSubscriptions.get(observable);
	    if (!entry) {
	      var observer = new JoinObserver(observable, onError);
	      externalSubscriptions.set(observable, observer);
	      return observer;
	    }
	    return entry;
	  }

	  function ActivePlan(joinObserverArray, onNext, onCompleted) {
	    this.joinObserverArray = joinObserverArray;
	    this.onNext = onNext;
	    this.onCompleted = onCompleted;
	    this.joinObservers = new Map();
	    for (var i = 0, len = this.joinObserverArray.length; i < len; i++) {
	      var joinObserver = this.joinObserverArray[i];
	      this.joinObservers.set(joinObserver, joinObserver);
	    }
	  }

	  ActivePlan.prototype.dequeue = function () {
	    this.joinObservers.forEach(function (v) { v.queue.shift(); });
	  };

	  ActivePlan.prototype.match = function () {
	    var i, len, hasValues = true;
	    for (i = 0, len = this.joinObserverArray.length; i < len; i++) {
	      if (this.joinObserverArray[i].queue.length === 0) {
	        hasValues = false;
	        break;
	      }
	    }
	    if (hasValues) {
	      var firstValues = [],
	          isCompleted = false;
	      for (i = 0, len = this.joinObserverArray.length; i < len; i++) {
	        firstValues.push(this.joinObserverArray[i].queue[0]);
	        this.joinObserverArray[i].queue[0].kind === 'C' && (isCompleted = true);
	      }
	      if (isCompleted) {
	        this.onCompleted();
	      } else {
	        this.dequeue();
	        var values = [];
	        for (i = 0, len = firstValues.length; i < firstValues.length; i++) {
	          values.push(firstValues[i].value);
	        }
	        this.onNext.apply(this, values);
	      }
	    }
	  };

	  var JoinObserver = (function (__super__) {
	    inherits(JoinObserver, __super__);

	    function JoinObserver(source, onError) {
	      __super__.call(this);
	      this.source = source;
	      this.onError = onError;
	      this.queue = [];
	      this.activePlans = [];
	      this.subscription = new SingleAssignmentDisposable();
	      this.isDisposed = false;
	    }

	    var JoinObserverPrototype = JoinObserver.prototype;

	    JoinObserverPrototype.next = function (notification) {
	      if (!this.isDisposed) {
	        if (notification.kind === 'E') {
	          return this.onError(notification.error);
	        }
	        this.queue.push(notification);
	        var activePlans = this.activePlans.slice(0);
	        for (var i = 0, len = activePlans.length; i < len; i++) {
	          activePlans[i].match();
	        }
	      }
	    };

	    JoinObserverPrototype.error = noop;
	    JoinObserverPrototype.completed = noop;

	    JoinObserverPrototype.addActivePlan = function (activePlan) {
	      this.activePlans.push(activePlan);
	    };

	    JoinObserverPrototype.subscribe = function () {
	      this.subscription.setDisposable(this.source.materialize().subscribe(this));
	    };

	    JoinObserverPrototype.removeActivePlan = function (activePlan) {
	      this.activePlans.splice(this.activePlans.indexOf(activePlan), 1);
	      this.activePlans.length === 0 && this.dispose();
	    };

	    JoinObserverPrototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      if (!this.isDisposed) {
	        this.isDisposed = true;
	        this.subscription.dispose();
	      }
	    };

	    return JoinObserver;
	  } (AbstractObserver));

	  /**
	   *  Creates a pattern that matches when both observable sequences have an available value.
	   *
	   *  @param right Observable sequence to match with the current sequence.
	   *  @return {Pattern} Pattern object that matches when both observable sequences have an available value.
	   */
	  observableProto.and = function (right) {
	    return new Pattern([this, right]);
	  };

	  /**
	   *  Matches when the observable sequence has an available value and projects the value.
	   *
	   *  @param {Function} selector Selector that will be invoked for values in the source sequence.
	   *  @returns {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
	   */
	  observableProto.thenDo = function (selector) {
	    return new Pattern([this]).thenDo(selector);
	  };

	  /**
	   *  Joins together the results from several patterns.
	   *
	   *  @param plans A series of plans (specified as an Array of as a series of arguments) created by use of the Then operator on patterns.
	   *  @returns {Observable} Observable sequence with the results form matching several patterns.
	   */
	  Observable.when = function () {
	    var len = arguments.length, plans;
	    if (Array.isArray(arguments[0])) {
	      plans = arguments[0];
	    } else {
	      plans = new Array(len);
	      for(var i = 0; i < len; i++) { plans[i] = arguments[i]; }
	    }
	    return new AnonymousObservable(function (o) {
	      var activePlans = [],
	          externalSubscriptions = new Map();
	      var outObserver = observerCreate(
	        function (x) { o.onNext(x); },
	        function (err) {
	          externalSubscriptions.forEach(function (v) { v.onError(err); });
	          o.onError(err);
	        },
	        function (x) { o.onCompleted(); }
	      );
	      try {
	        for (var i = 0, len = plans.length; i < len; i++) {
	          activePlans.push(plans[i].activate(externalSubscriptions, outObserver, function (activePlan) {
	            var idx = activePlans.indexOf(activePlan);
	            activePlans.splice(idx, 1);
	            activePlans.length === 0 && o.onCompleted();
	          }));
	        }
	      } catch (e) {
	        return observableThrow(e).subscribe(o);
	      }
	      var group = new CompositeDisposable();
	      externalSubscriptions.forEach(function (joinObserver) {
	        joinObserver.subscribe();
	        group.add(joinObserver);
	      });

	      return group;
	    });
	  };

	  var TimerObservable = (function(__super__) {
	    inherits(TimerObservable, __super__);
	    function TimerObservable(dt, s) {
	      this._dt = dt;
	      this._s = s;
	      __super__.call(this);
	    }

	    TimerObservable.prototype.subscribeCore = function (o) {
	      return this._s.scheduleFuture(o, this._dt, scheduleMethod);
	    };

	    function scheduleMethod(s, o) {
	      o.onNext(0);
	      o.onCompleted();
	    }

	    return TimerObservable;
	  }(ObservableBase));

	  function _observableTimer(dueTime, scheduler) {
	    return new TimerObservable(dueTime, scheduler);
	  }

	  function observableTimerDateAndPeriod(dueTime, period, scheduler) {
	    return new AnonymousObservable(function (observer) {
	      var d = dueTime, p = normalizeTime(period);
	      return scheduler.scheduleRecursiveFuture(0, d, function (count, self) {
	        if (p > 0) {
	          var now = scheduler.now();
	          d = new Date(d.getTime() + p);
	          d.getTime() <= now && (d = new Date(now + p));
	        }
	        observer.onNext(count);
	        self(count + 1, new Date(d));
	      });
	    });
	  }

	  function observableTimerTimeSpanAndPeriod(dueTime, period, scheduler) {
	    return dueTime === period ?
	      new AnonymousObservable(function (observer) {
	        return scheduler.schedulePeriodic(0, period, function (count) {
	          observer.onNext(count);
	          return count + 1;
	        });
	      }) :
	      observableDefer(function () {
	        return observableTimerDateAndPeriod(new Date(scheduler.now() + dueTime), period, scheduler);
	      });
	  }

	  /**
	   *  Returns an observable sequence that produces a value after each period.
	   *
	   * @example
	   *  1 - res = Rx.Observable.interval(1000);
	   *  2 - res = Rx.Observable.interval(1000, Rx.Scheduler.timeout);
	   *
	   * @param {Number} period Period for producing the values in the resulting sequence (specified as an integer denoting milliseconds).
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, Rx.Scheduler.timeout is used.
	   * @returns {Observable} An observable sequence that produces a value after each period.
	   */
	  var observableinterval = Observable.interval = function (period, scheduler) {
	    return observableTimerTimeSpanAndPeriod(period, period, isScheduler(scheduler) ? scheduler : defaultScheduler);
	  };

	  /**
	   *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
	   * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
	   */
	  var observableTimer = Observable.timer = function (dueTime, periodOrScheduler, scheduler) {
	    var period;
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    if (periodOrScheduler != null && typeof periodOrScheduler === 'number') {
	      period = periodOrScheduler;
	    } else if (isScheduler(periodOrScheduler)) {
	      scheduler = periodOrScheduler;
	    }
	    if ((dueTime instanceof Date || typeof dueTime === 'number') && period === undefined) {
	      return _observableTimer(dueTime, scheduler);
	    }
	    if (dueTime instanceof Date && period !== undefined) {
	      return observableTimerDateAndPeriod(dueTime, periodOrScheduler, scheduler);
	    }
	    return observableTimerTimeSpanAndPeriod(dueTime, period, scheduler);
	  };

	  function observableDelayRelative(source, dueTime, scheduler) {
	    return new AnonymousObservable(function (o) {
	      var active = false,
	        cancelable = new SerialDisposable(),
	        exception = null,
	        q = [],
	        running = false,
	        subscription;
	      subscription = source.materialize().timestamp(scheduler).subscribe(function (notification) {
	        var d, shouldRun;
	        if (notification.value.kind === 'E') {
	          q = [];
	          q.push(notification);
	          exception = notification.value.error;
	          shouldRun = !running;
	        } else {
	          q.push({ value: notification.value, timestamp: notification.timestamp + dueTime });
	          shouldRun = !active;
	          active = true;
	        }
	        if (shouldRun) {
	          if (exception !== null) {
	            o.onError(exception);
	          } else {
	            d = new SingleAssignmentDisposable();
	            cancelable.setDisposable(d);
	            d.setDisposable(scheduler.scheduleRecursiveFuture(null, dueTime, function (_, self) {
	              var e, recurseDueTime, result, shouldRecurse;
	              if (exception !== null) {
	                return;
	              }
	              running = true;
	              do {
	                result = null;
	                if (q.length > 0 && q[0].timestamp - scheduler.now() <= 0) {
	                  result = q.shift().value;
	                }
	                if (result !== null) {
	                  result.accept(o);
	                }
	              } while (result !== null);
	              shouldRecurse = false;
	              recurseDueTime = 0;
	              if (q.length > 0) {
	                shouldRecurse = true;
	                recurseDueTime = Math.max(0, q[0].timestamp - scheduler.now());
	              } else {
	                active = false;
	              }
	              e = exception;
	              running = false;
	              if (e !== null) {
	                o.onError(e);
	              } else if (shouldRecurse) {
	                self(null, recurseDueTime);
	              }
	            }));
	          }
	        }
	      });
	      return new BinaryDisposable(subscription, cancelable);
	    }, source);
	  }

	  function observableDelayAbsolute(source, dueTime, scheduler) {
	    return observableDefer(function () {
	      return observableDelayRelative(source, dueTime - scheduler.now(), scheduler);
	    });
	  }

	  function delayWithSelector(source, subscriptionDelay, delayDurationSelector) {
	    var subDelay, selector;
	    if (isFunction(subscriptionDelay)) {
	      selector = subscriptionDelay;
	    } else {
	      subDelay = subscriptionDelay;
	      selector = delayDurationSelector;
	    }
	    return new AnonymousObservable(function (o) {
	      var delays = new CompositeDisposable(), atEnd = false, subscription = new SerialDisposable();

	      function start() {
	        subscription.setDisposable(source.subscribe(
	          function (x) {
	            var delay = tryCatch(selector)(x);
	            if (delay === errorObj) { return o.onError(delay.e); }
	            var d = new SingleAssignmentDisposable();
	            delays.add(d);
	            d.setDisposable(delay.subscribe(
	              function () {
	                o.onNext(x);
	                delays.remove(d);
	                done();
	              },
	              function (e) { o.onError(e); },
	              function () {
	                o.onNext(x);
	                delays.remove(d);
	                done();
	              }
	            ));
	          },
	          function (e) { o.onError(e); },
	          function () {
	            atEnd = true;
	            subscription.dispose();
	            done();
	          }
	        ));
	      }

	      function done () {
	        atEnd && delays.length === 0 && o.onCompleted();
	      }

	      if (!subDelay) {
	        start();
	      } else {
	        subscription.setDisposable(subDelay.subscribe(start, function (e) { o.onError(e); }, start));
	      }

	      return new BinaryDisposable(subscription, delays);
	    }, source);
	  }

	  /**
	   *  Time shifts the observable sequence by dueTime.
	   *  The relative time intervals between the values are preserved.
	   *
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
	   * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Time-shifted sequence.
	   */
	  observableProto.delay = function () {
	    var firstArg = arguments[0];
	    if (typeof firstArg === 'number' || firstArg instanceof Date) {
	      var dueTime = firstArg, scheduler = arguments[1];
	      isScheduler(scheduler) || (scheduler = defaultScheduler);
	      return dueTime instanceof Date ?
	        observableDelayAbsolute(this, dueTime, scheduler) :
	        observableDelayRelative(this, dueTime, scheduler);
	    } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
	      return delayWithSelector(this, firstArg, arguments[1]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };

	  var DebounceObservable = (function (__super__) {
	    inherits(DebounceObservable, __super__);
	    function DebounceObservable(source, dt, s) {
	      isScheduler(s) || (s = defaultScheduler);
	      this.source = source;
	      this._dt = dt;
	      this._s = s;
	      __super__.call(this);
	    }

	    DebounceObservable.prototype.subscribeCore = function (o) {
	      var cancelable = new SerialDisposable();
	      return new BinaryDisposable(
	        this.source.subscribe(new DebounceObserver(o, this._dt, this._s, cancelable)),
	        cancelable);
	    };

	    return DebounceObservable;
	  }(ObservableBase));

	  var DebounceObserver = (function (__super__) {
	    inherits(DebounceObserver, __super__);
	    function DebounceObserver(observer, dueTime, scheduler, cancelable) {
	      this._o = observer;
	      this._d = dueTime;
	      this._scheduler = scheduler;
	      this._c = cancelable;
	      this._v = null;
	      this._hv = false;
	      this._id = 0;
	      __super__.call(this);
	    }

	    function scheduleFuture(s, state) {
	      state.self._hv && state.self._id === state.currentId && state.self._o.onNext(state.x);
	      state.self._hv = false;
	    }

	    DebounceObserver.prototype.next = function (x) {
	      this._hv = true;
	      this._v = x;
	      var currentId = ++this._id, d = new SingleAssignmentDisposable();
	      this._c.setDisposable(d);
	      d.setDisposable(this._scheduler.scheduleFuture(this, this._d, function (_, self) {
	        self._hv && self._id === currentId && self._o.onNext(x);
	        self._hv = false;
	      }));
	    };

	    DebounceObserver.prototype.error = function (e) {
	      this._c.dispose();
	      this._o.onError(e);
	      this._hv = false;
	      this._id++;
	    };

	    DebounceObserver.prototype.completed = function () {
	      this._c.dispose();
	      this._hv && this._o.onNext(this._v);
	      this._o.onCompleted();
	      this._hv = false;
	      this._id++;
	    };

	    return DebounceObserver;
	  }(AbstractObserver));

	  function debounceWithSelector(source, durationSelector) {
	    return new AnonymousObservable(function (o) {
	      var value, hasValue = false, cancelable = new SerialDisposable(), id = 0;
	      var subscription = source.subscribe(
	        function (x) {
	          var throttle = tryCatch(durationSelector)(x);
	          if (throttle === errorObj) { return o.onError(throttle.e); }

	          isPromise(throttle) && (throttle = observableFromPromise(throttle));

	          hasValue = true;
	          value = x;
	          id++;
	          var currentid = id, d = new SingleAssignmentDisposable();
	          cancelable.setDisposable(d);
	          d.setDisposable(throttle.subscribe(
	            function () {
	              hasValue && id === currentid && o.onNext(value);
	              hasValue = false;
	              d.dispose();
	            },
	            function (e) { o.onError(e); },
	            function () {
	              hasValue && id === currentid && o.onNext(value);
	              hasValue = false;
	              d.dispose();
	            }
	          ));
	        },
	        function (e) {
	          cancelable.dispose();
	          o.onError(e);
	          hasValue = false;
	          id++;
	        },
	        function () {
	          cancelable.dispose();
	          hasValue && o.onNext(value);
	          o.onCompleted();
	          hasValue = false;
	          id++;
	        }
	      );
	      return new BinaryDisposable(subscription, cancelable);
	    }, source);
	  }

	  observableProto.debounce = function () {
	    if (isFunction (arguments[0])) {
	      return debounceWithSelector(this, arguments[0]);
	    } else if (typeof arguments[0] === 'number') {
	      return new DebounceObservable(this, arguments[0], arguments[1]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };

	  /**
	   *  Projects each element of an observable sequence into zero or more windows which are produced based on timing information.
	   * @param {Number} timeSpan Length of each window (specified as an integer denoting milliseconds).
	   * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive windows (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent windows.
	   * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of windows.
	   */
	  observableProto.windowWithTime = observableProto.windowTime = function (timeSpan, timeShiftOrScheduler, scheduler) {
	    var source = this, timeShift;
	    timeShiftOrScheduler == null && (timeShift = timeSpan);
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    if (typeof timeShiftOrScheduler === 'number') {
	      timeShift = timeShiftOrScheduler;
	    } else if (isScheduler(timeShiftOrScheduler)) {
	      timeShift = timeSpan;
	      scheduler = timeShiftOrScheduler;
	    }
	    return new AnonymousObservable(function (observer) {
	      var groupDisposable,
	        nextShift = timeShift,
	        nextSpan = timeSpan,
	        q = [],
	        refCountDisposable,
	        timerD = new SerialDisposable(),
	        totalTime = 0;
	        groupDisposable = new CompositeDisposable(timerD),
	        refCountDisposable = new RefCountDisposable(groupDisposable);

	       function createTimer () {
	        var m = new SingleAssignmentDisposable(),
	          isSpan = false,
	          isShift = false;
	        timerD.setDisposable(m);
	        if (nextSpan === nextShift) {
	          isSpan = true;
	          isShift = true;
	        } else if (nextSpan < nextShift) {
	            isSpan = true;
	        } else {
	          isShift = true;
	        }
	        var newTotalTime = isSpan ? nextSpan : nextShift,
	          ts = newTotalTime - totalTime;
	        totalTime = newTotalTime;
	        if (isSpan) {
	          nextSpan += timeShift;
	        }
	        if (isShift) {
	          nextShift += timeShift;
	        }
	        m.setDisposable(scheduler.scheduleFuture(null, ts, function () {
	          if (isShift) {
	            var s = new Subject();
	            q.push(s);
	            observer.onNext(addRef(s, refCountDisposable));
	          }
	          isSpan && q.shift().onCompleted();
	          createTimer();
	        }));
	      };
	      q.push(new Subject());
	      observer.onNext(addRef(q[0], refCountDisposable));
	      createTimer();
	      groupDisposable.add(source.subscribe(
	        function (x) {
	          for (var i = 0, len = q.length; i < len; i++) { q[i].onNext(x); }
	        },
	        function (e) {
	          for (var i = 0, len = q.length; i < len; i++) { q[i].onError(e); }
	          observer.onError(e);
	        },
	        function () {
	          for (var i = 0, len = q.length; i < len; i++) { q[i].onCompleted(); }
	          observer.onCompleted();
	        }
	      ));
	      return refCountDisposable;
	    }, source);
	  };

	  /**
	   *  Projects each element of an observable sequence into a window that is completed when either it's full or a given amount of time has elapsed.
	   * @param {Number} timeSpan Maximum time length of a window.
	   * @param {Number} count Maximum element count of a window.
	   * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of windows.
	   */
	  observableProto.windowWithTimeOrCount = observableProto.windowTimeOrCount = function (timeSpan, count, scheduler) {
	    var source = this;
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new AnonymousObservable(function (observer) {
	      var timerD = new SerialDisposable(),
	          groupDisposable = new CompositeDisposable(timerD),
	          refCountDisposable = new RefCountDisposable(groupDisposable),
	          n = 0,
	          windowId = 0,
	          s = new Subject();

	      function createTimer(id) {
	        var m = new SingleAssignmentDisposable();
	        timerD.setDisposable(m);
	        m.setDisposable(scheduler.scheduleFuture(null, timeSpan, function () {
	          if (id !== windowId) { return; }
	          n = 0;
	          var newId = ++windowId;
	          s.onCompleted();
	          s = new Subject();
	          observer.onNext(addRef(s, refCountDisposable));
	          createTimer(newId);
	        }));
	      }

	      observer.onNext(addRef(s, refCountDisposable));
	      createTimer(0);

	      groupDisposable.add(source.subscribe(
	        function (x) {
	          var newId = 0, newWindow = false;
	          s.onNext(x);
	          if (++n === count) {
	            newWindow = true;
	            n = 0;
	            newId = ++windowId;
	            s.onCompleted();
	            s = new Subject();
	            observer.onNext(addRef(s, refCountDisposable));
	          }
	          newWindow && createTimer(newId);
	        },
	        function (e) {
	          s.onError(e);
	          observer.onError(e);
	        }, function () {
	          s.onCompleted();
	          observer.onCompleted();
	        }
	      ));
	      return refCountDisposable;
	    }, source);
	  };

	  function toArray(x) { return x.toArray(); }

	  /**
	   *  Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.
	   * @param {Number} timeSpan Length of each buffer (specified as an integer denoting milliseconds).
	   * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive buffers (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent buffers.
	   * @param {Scheduler} [scheduler]  Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of buffers.
	   */
	  observableProto.bufferWithTime = observableProto.bufferTime = function (timeSpan, timeShiftOrScheduler, scheduler) {
	    return this.windowWithTime(timeSpan, timeShiftOrScheduler, scheduler).flatMap(toArray);
	  };

	  function toArray(x) { return x.toArray(); }

	  /**
	   *  Projects each element of an observable sequence into a buffer that is completed when either it's full or a given amount of time has elapsed.
	   * @param {Number} timeSpan Maximum time length of a buffer.
	   * @param {Number} count Maximum element count of a buffer.
	   * @param {Scheduler} [scheduler]  Scheduler to run bufferin timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of buffers.
	   */
	  observableProto.bufferWithTimeOrCount = observableProto.bufferTimeOrCount = function (timeSpan, count, scheduler) {
	    return this.windowWithTimeOrCount(timeSpan, count, scheduler).flatMap(toArray);
	  };

	  var TimeIntervalObservable = (function (__super__) {
	    inherits(TimeIntervalObservable, __super__);
	    function TimeIntervalObservable(source, s) {
	      this.source = source;
	      this._s = s;
	      __super__.call(this);
	    }

	    TimeIntervalObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TimeIntervalObserver(o, this._s));
	    };

	    return TimeIntervalObservable;
	  }(ObservableBase));

	  var TimeIntervalObserver = (function (__super__) {
	    inherits(TimeIntervalObserver, __super__);

	    function TimeIntervalObserver(o, s) {
	      this._o = o;
	      this._s = s;
	      this._l = s.now();
	      __super__.call(this);
	    }

	    TimeIntervalObserver.prototype.next = function (x) {
	      var now = this._s.now(), span = now - this._l;
	      this._l = now;
	      this._o.onNext({ value: x, interval: span });
	    };
	    TimeIntervalObserver.prototype.error = function (e) { this._o.onError(e); };
	    TimeIntervalObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return TimeIntervalObserver;
	  }(AbstractObserver));

	  /**
	   *  Records the time interval between consecutive values in an observable sequence.
	   *
	   * @example
	   *  1 - res = source.timeInterval();
	   *  2 - res = source.timeInterval(Rx.Scheduler.timeout);
	   *
	   * @param [scheduler]  Scheduler used to compute time intervals. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence with time interval information on values.
	   */
	  observableProto.timeInterval = function (scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new TimeIntervalObservable(this, scheduler);
	  };

	  var TimestampObservable = (function (__super__) {
	    inherits(TimestampObservable, __super__);
	    function TimestampObservable(source, s) {
	      this.source = source;
	      this._s = s;
	      __super__.call(this);
	    }

	    TimestampObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TimestampObserver(o, this._s));
	    };

	    return TimestampObservable;
	  }(ObservableBase));

	  var TimestampObserver = (function (__super__) {
	    inherits(TimestampObserver, __super__);
	    function TimestampObserver(o, s) {
	      this._o = o;
	      this._s = s;
	      __super__.call(this);
	    }

	    TimestampObserver.prototype.next = function (x) {
	      this._o.onNext({ value: x, timestamp: this._s.now() });
	    };

	    TimestampObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };

	    TimestampObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };

	    return TimestampObserver;
	  }(AbstractObserver));

	  /**
	   *  Records the timestamp for each value in an observable sequence.
	   *
	   * @example
	   *  1 - res = source.timestamp(); // produces { value: x, timestamp: ts }
	   *  2 - res = source.timestamp(Rx.Scheduler.default);
	   *
	   * @param {Scheduler} [scheduler]  Scheduler used to compute timestamps. If not specified, the default scheduler is used.
	   * @returns {Observable} An observable sequence with timestamp information on values.
	   */
	  observableProto.timestamp = function (scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new TimestampObservable(this, scheduler);
	  };

	  var SampleObservable = (function(__super__) {
	    inherits(SampleObservable, __super__);
	    function SampleObservable(source, sampler) {
	      this.source = source;
	      this._sampler = sampler;
	      __super__.call(this);
	    }

	    SampleObservable.prototype.subscribeCore = function (o) {
	      var state = {
	        o: o,
	        atEnd: false,
	        value: null,
	        hasValue: false,
	        sourceSubscription: new SingleAssignmentDisposable()
	      };

	      state.sourceSubscription.setDisposable(this.source.subscribe(new SampleSourceObserver(state)));
	      return new BinaryDisposable(
	        state.sourceSubscription,
	        this._sampler.subscribe(new SamplerObserver(state))
	      );
	    };

	    return SampleObservable;
	  }(ObservableBase));

	  var SamplerObserver = (function(__super__) {
	    inherits(SamplerObserver, __super__);
	    function SamplerObserver(s) {
	      this._s = s;
	      __super__.call(this);
	    }

	    SamplerObserver.prototype._handleMessage = function () {
	      if (this._s.hasValue) {
	        this._s.hasValue = false;
	        this._s.o.onNext(this._s.value);
	      }
	      this._s.atEnd && this._s.o.onCompleted();
	    };

	    SamplerObserver.prototype.next = function () { this._handleMessage(); };
	    SamplerObserver.prototype.error = function (e) { this._s.onError(e); };
	    SamplerObserver.prototype.completed = function () { this._handleMessage(); };

	    return SamplerObserver;
	  }(AbstractObserver));

	  var SampleSourceObserver = (function(__super__) {
	    inherits(SampleSourceObserver, __super__);
	    function SampleSourceObserver(s) {
	      this._s = s;
	      __super__.call(this);
	    }

	    SampleSourceObserver.prototype.next = function (x) {
	      this._s.hasValue = true;
	      this._s.value = x;
	    };
	    SampleSourceObserver.prototype.error = function (e) { this._s.o.onError(e); };
	    SampleSourceObserver.prototype.completed = function () {
	      this._s.atEnd = true;
	      this._s.sourceSubscription.dispose();
	    };

	    return SampleSourceObserver;
	  }(AbstractObserver));

	  /**
	   *  Samples the observable sequence at each interval.
	   *
	   * @example
	   *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
	   *  2 - res = source.sample(5000); // 5 seconds
	   *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
	   *
	   * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
	   * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Sampled observable sequence.
	   */
	  observableProto.sample = function (intervalOrSampler, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return typeof intervalOrSampler === 'number' ?
	      new SampleObservable(this, observableinterval(intervalOrSampler, scheduler)) :
	      new SampleObservable(this, intervalOrSampler);
	  };

	  var TimeoutError = Rx.TimeoutError = function(message) {
	    this.message = message || 'Timeout has occurred';
	    this.name = 'TimeoutError';
	    Error.call(this);
	  };
	  TimeoutError.prototype = Object.create(Error.prototype);

	  function timeoutWithSelector(source, firstTimeout, timeoutDurationSelector, other) {
	    if (isFunction(firstTimeout)) {
	      other = timeoutDurationSelector;
	      timeoutDurationSelector = firstTimeout;
	      firstTimeout = observableNever();
	    }
	    Observable.isObservable(other) || (other = observableThrow(new TimeoutError()));
	    return new AnonymousObservable(function (o) {
	      var subscription = new SerialDisposable(),
	        timer = new SerialDisposable(),
	        original = new SingleAssignmentDisposable();

	      subscription.setDisposable(original);

	      var id = 0, switched = false;

	      function setTimer(timeout) {
	        var myId = id, d = new SingleAssignmentDisposable();

	        function timerWins() {
	          switched = (myId === id);
	          return switched;
	        }

	        timer.setDisposable(d);
	        d.setDisposable(timeout.subscribe(function () {
	          timerWins() && subscription.setDisposable(other.subscribe(o));
	          d.dispose();
	        }, function (e) {
	          timerWins() && o.onError(e);
	        }, function () {
	          timerWins() && subscription.setDisposable(other.subscribe(o));
	        }));
	      };

	      setTimer(firstTimeout);

	      function oWins() {
	        var res = !switched;
	        if (res) { id++; }
	        return res;
	      }

	      original.setDisposable(source.subscribe(function (x) {
	        if (oWins()) {
	          o.onNext(x);
	          var timeout = tryCatch(timeoutDurationSelector)(x);
	          if (timeout === errorObj) { return o.onError(timeout.e); }
	          setTimer(isPromise(timeout) ? observableFromPromise(timeout) : timeout);
	        }
	      }, function (e) {
	        oWins() && o.onError(e);
	      }, function () {
	        oWins() && o.onCompleted();
	      }));
	      return new BinaryDisposable(subscription, timer);
	    }, source);
	  }

	  function timeout(source, dueTime, other, scheduler) {
	    if (isScheduler(other)) {
	      scheduler = other;
	      other = observableThrow(new TimeoutError());
	    }
	    if (other instanceof Error) { other = observableThrow(other); }
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    Observable.isObservable(other) || (other = observableThrow(new TimeoutError()));
	    return new AnonymousObservable(function (o) {
	      var id = 0,
	        original = new SingleAssignmentDisposable(),
	        subscription = new SerialDisposable(),
	        switched = false,
	        timer = new SerialDisposable();

	      subscription.setDisposable(original);

	      function createTimer() {
	        var myId = id;
	        timer.setDisposable(scheduler.scheduleFuture(null, dueTime, function () {
	          switched = id === myId;
	          if (switched) {
	            isPromise(other) && (other = observableFromPromise(other));
	            subscription.setDisposable(other.subscribe(o));
	          }
	        }));
	      }

	      createTimer();

	      original.setDisposable(source.subscribe(function (x) {
	        if (!switched) {
	          id++;
	          o.onNext(x);
	          createTimer();
	        }
	      }, function (e) {
	        if (!switched) {
	          id++;
	          o.onError(e);
	        }
	      }, function () {
	        if (!switched) {
	          id++;
	          o.onCompleted();
	        }
	      }));
	      return new BinaryDisposable(subscription, timer);
	    }, source);
	  }

	  observableProto.timeout = function () {
	    var firstArg = arguments[0];
	    if (firstArg instanceof Date || typeof firstArg === 'number') {
	      return timeout(this, firstArg, arguments[1], arguments[2]);
	    } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
	      return timeoutWithSelector(this, firstArg, arguments[1], arguments[2]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };

	  var GenerateAbsoluteObservable = (function (__super__) {
	    inherits(GenerateAbsoluteObservable, __super__);
	    function GenerateAbsoluteObservable(state, cndFn, itrFn, resFn, timeFn, s) {
	      this._state = state;
	      this._cndFn = cndFn;
	      this._itrFn = itrFn;
	      this._resFn = resFn;
	      this._timeFn = timeFn;
	      this._s = s;
	      __super__.call(this);
	    }

	    function scheduleRecursive(state, recurse) {
	      state.hasResult && state.o.onNext(state.result);

	      if (state.first) {
	        state.first = false;
	      } else {
	        state.newState = tryCatch(state.self._itrFn)(state.newState);
	        if (state.newState === errorObj) { return state.o.onError(state.newState.e); }
	      }
	      state.hasResult = tryCatch(state.self._cndFn)(state.newState);
	      if (state.hasResult === errorObj) { return state.o.onError(state.hasResult.e); }
	      if (state.hasResult) {
	        state.result = tryCatch(state.self._resFn)(state.newState);
	        if (state.result === errorObj) { return state.o.onError(state.result.e); }
	        var time = tryCatch(state.self._timeFn)(state.newState);
	        if (time === errorObj) { return state.o.onError(time.e); }
	        recurse(state, time);
	      } else {
	        state.o.onCompleted();
	      }
	    }

	    GenerateAbsoluteObservable.prototype.subscribeCore = function (o) {
	      var state = {
	        o: o,
	        self: this,
	        newState: this._state,
	        first: true,
	        hasResult: false
	      };
	      return this._s.scheduleRecursiveFuture(state, new Date(this._s.now()), scheduleRecursive);
	    };

	    return GenerateAbsoluteObservable;
	  }(ObservableBase));

	  /**
	   *  GenerateAbsolutes an observable sequence by iterating a state from an initial state until the condition fails.
	   *
	   * @example
	   *  res = source.generateWithAbsoluteTime(0,
	   *      function (x) { return return true; },
	   *      function (x) { return x + 1; },
	   *      function (x) { return x; },
	   *      function (x) { return new Date(); }
	   *  });
	   *
	   * @param {Mixed} initialState Initial state.
	   * @param {Function} condition Condition to terminate generation (upon returning false).
	   * @param {Function} iterate Iteration step function.
	   * @param {Function} resultSelector Selector function for results produced in the sequence.
	   * @param {Function} timeSelector Time selector function to control the speed of values being produced each iteration, returning Date values.
	   * @param {Scheduler} [scheduler]  Scheduler on which to run the generator loop. If not specified, the timeout scheduler is used.
	   * @returns {Observable} The generated sequence.
	   */
	  Observable.generateWithAbsoluteTime = function (initialState, condition, iterate, resultSelector, timeSelector, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new GenerateAbsoluteObservable(initialState, condition, iterate, resultSelector, timeSelector, scheduler);
	  };

	  var GenerateRelativeObservable = (function (__super__) {
	    inherits(GenerateRelativeObservable, __super__);
	    function GenerateRelativeObservable(state, cndFn, itrFn, resFn, timeFn, s) {
	      this._state = state;
	      this._cndFn = cndFn;
	      this._itrFn = itrFn;
	      this._resFn = resFn;
	      this._timeFn = timeFn;
	      this._s = s;
	      __super__.call(this);
	    }

	    function scheduleRecursive(state, recurse) {
	      state.hasResult && state.o.onNext(state.result);

	      if (state.first) {
	        state.first = false;
	      } else {
	        state.newState = tryCatch(state.self._itrFn)(state.newState);
	        if (state.newState === errorObj) { return state.o.onError(state.newState.e); }
	      }

	      state.hasResult = tryCatch(state.self._cndFn)(state.newState);
	      if (state.hasResult === errorObj) { return state.o.onError(state.hasResult.e); }
	      if (state.hasResult) {
	        state.result = tryCatch(state.self._resFn)(state.newState);
	        if (state.result === errorObj) { return state.o.onError(state.result.e); }
	        var time = tryCatch(state.self._timeFn)(state.newState);
	        if (time === errorObj) { return state.o.onError(time.e); }
	        recurse(state, time);
	      } else {
	        state.o.onCompleted();
	      }
	    }

	    GenerateRelativeObservable.prototype.subscribeCore = function (o) {
	      var state = {
	        o: o,
	        self: this,
	        newState: this._state,
	        first: true,
	        hasResult: false
	      };
	      return this._s.scheduleRecursiveFuture(state, 0, scheduleRecursive);
	    };

	    return GenerateRelativeObservable;
	  }(ObservableBase));

	  /**
	   *  Generates an observable sequence by iterating a state from an initial state until the condition fails.
	   *
	   * @example
	   *  res = source.generateWithRelativeTime(0,
	   *      function (x) { return return true; },
	   *      function (x) { return x + 1; },
	   *      function (x) { return x; },
	   *      function (x) { return 500; }
	   *  );
	   *
	   * @param {Mixed} initialState Initial state.
	   * @param {Function} condition Condition to terminate generation (upon returning false).
	   * @param {Function} iterate Iteration step function.
	   * @param {Function} resultSelector Selector function for results produced in the sequence.
	   * @param {Function} timeSelector Time selector function to control the speed of values being produced each iteration, returning integer values denoting milliseconds.
	   * @param {Scheduler} [scheduler]  Scheduler on which to run the generator loop. If not specified, the timeout scheduler is used.
	   * @returns {Observable} The generated sequence.
	   */
	  Observable.generateWithRelativeTime = function (initialState, condition, iterate, resultSelector, timeSelector, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new GenerateRelativeObservable(initialState, condition, iterate, resultSelector, timeSelector, scheduler);
	  };

	  var DelaySubscription = (function(__super__) {
	    inherits(DelaySubscription, __super__);
	    function DelaySubscription(source, dt, s) {
	      this.source = source;
	      this._dt = dt;
	      this._s = s;
	      __super__.call(this);
	    }

	    DelaySubscription.prototype.subscribeCore = function (o) {
	      var d = new SerialDisposable();

	      d.setDisposable(this._s.scheduleFuture([this.source, o, d], this._dt, scheduleMethod));

	      return d;
	    };

	    function scheduleMethod(s, state) {
	      var source = state[0], o = state[1], d = state[2];
	      d.setDisposable(source.subscribe(o));
	    }

	    return DelaySubscription;
	  }(ObservableBase));

	  /**
	   *  Time shifts the observable sequence by delaying the subscription with the specified relative time duration, using the specified scheduler to run timers.
	   *
	   * @example
	   *  1 - res = source.delaySubscription(5000); // 5s
	   *  2 - res = source.delaySubscription(5000, Rx.Scheduler.default); // 5 seconds
	   *
	   * @param {Number} dueTime Relative or absolute time shift of the subscription.
	   * @param {Scheduler} [scheduler]  Scheduler to run the subscription delay timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Time-shifted sequence.
	   */
	  observableProto.delaySubscription = function (dueTime, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new DelaySubscription(this, dueTime, scheduler);
	  };

	  var SkipLastWithTimeObservable = (function (__super__) {
	    inherits(SkipLastWithTimeObservable, __super__);
	    function SkipLastWithTimeObservable(source, d, s) {
	      this.source = source;
	      this._d = d;
	      this._s = s;
	      __super__.call(this);
	    }

	    SkipLastWithTimeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipLastWithTimeObserver(o, this));
	    };

	    return SkipLastWithTimeObservable;
	  }(ObservableBase));

	  var SkipLastWithTimeObserver = (function (__super__) {
	    inherits(SkipLastWithTimeObserver, __super__);

	    function SkipLastWithTimeObserver(o, p) {
	      this._o = o;
	      this._s = p._s;
	      this._d = p._d;
	      this._q = [];
	      __super__.call(this);
	    }

	    SkipLastWithTimeObserver.prototype.next = function (x) {
	      var now = this._s.now();
	      this._q.push({ interval: now, value: x });
	      while (this._q.length > 0 && now - this._q[0].interval >= this._d) {
	        this._o.onNext(this._q.shift().value);
	      }
	    };
	    SkipLastWithTimeObserver.prototype.error = function (e) { this._o.onError(e); };
	    SkipLastWithTimeObserver.prototype.completed = function () {
	      var now = this._s.now();
	      while (this._q.length > 0 && now - this._q[0].interval >= this._d) {
	        this._o.onNext(this._q.shift().value);
	      }
	      this._o.onCompleted();
	    };

	    return SkipLastWithTimeObserver;
	  }(AbstractObserver));

	  /**
	   *  Skips elements for the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for skipping elements from the end of the sequence.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout
	   * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the end of the source sequence.
	   */
	  observableProto.skipLastWithTime = function (duration, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new SkipLastWithTimeObservable(this, duration, scheduler);
	  };

	  var TakeLastWithTimeObservable = (function (__super__) {
	    inherits(TakeLastWithTimeObservable, __super__);
	    function TakeLastWithTimeObservable(source, d, s) {
	      this.source = source;
	      this._d = d;
	      this._s = s;
	      __super__.call(this);
	    }

	    TakeLastWithTimeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TakeLastWithTimeObserver(o, this._d, this._s));
	    };

	    return TakeLastWithTimeObservable;
	  }(ObservableBase));

	  var TakeLastWithTimeObserver = (function (__super__) {
	    inherits(TakeLastWithTimeObserver, __super__);

	    function TakeLastWithTimeObserver(o, d, s) {
	      this._o = o;
	      this._d = d;
	      this._s = s;
	      this._q = [];
	      __super__.call(this);
	    }

	    TakeLastWithTimeObserver.prototype.next = function (x) {
	      var now = this._s.now();
	      this._q.push({ interval: now, value: x });
	      while (this._q.length > 0 && now - this._q[0].interval >= this._d) {
	        this._q.shift();
	      }
	    };
	    TakeLastWithTimeObserver.prototype.error = function (e) { this._o.onError(e); };
	    TakeLastWithTimeObserver.prototype.completed = function () {
	      var now = this._s.now();
	      while (this._q.length > 0) {
	        var next = this._q.shift();
	        if (now - next.interval <= this._d) { this._o.onNext(next.value); }
	      }
	      this._o.onCompleted();
	    };

	    return TakeLastWithTimeObserver;
	  }(AbstractObserver));

	  /**
	   *  Returns elements within the specified duration from the end of the observable source sequence, using the specified schedulers to run timers and to drain the collected elements.
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for taking elements from the end of the sequence.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements taken during the specified duration from the end of the source sequence.
	   */
	  observableProto.takeLastWithTime = function (duration, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new TakeLastWithTimeObservable(this, duration, scheduler);
	  };

	  /**
	   *  Returns an array with the elements within the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for taking elements from the end of the sequence.
	   * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence containing a single array with the elements taken during the specified duration from the end of the source sequence.
	   */
	  observableProto.takeLastBufferWithTime = function (duration, scheduler) {
	    var source = this;
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new AnonymousObservable(function (o) {
	      var q = [];
	      return source.subscribe(function (x) {
	        var now = scheduler.now();
	        q.push({ interval: now, value: x });
	        while (q.length > 0 && now - q[0].interval >= duration) {
	          q.shift();
	        }
	      }, function (e) { o.onError(e); }, function () {
	        var now = scheduler.now(), res = [];
	        while (q.length > 0) {
	          var next = q.shift();
	          now - next.interval <= duration && res.push(next.value);
	        }
	        o.onNext(res);
	        o.onCompleted();
	      });
	    }, source);
	  };

	  var TakeWithTimeObservable = (function (__super__) {
	    inherits(TakeWithTimeObservable, __super__);
	    function TakeWithTimeObservable(source, d, s) {
	      this.source = source;
	      this._d = d;
	      this._s = s;
	      __super__.call(this);
	    }

	    function scheduleMethod(s, o) {
	      o.onCompleted();
	    }

	    TakeWithTimeObservable.prototype.subscribeCore = function (o) {
	      return new BinaryDisposable(
	        this._s.scheduleFuture(o, this._d, scheduleMethod),
	        this.source.subscribe(o)
	      );
	    };

	    return TakeWithTimeObservable;
	  }(ObservableBase));

	  /**
	   *  Takes elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
	   *
	   * @example
	   *  1 - res = source.takeWithTime(5000,  [optional scheduler]);
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for taking elements from the start of the sequence.
	   * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements taken during the specified duration from the start of the source sequence.
	   */
	  observableProto.takeWithTime = function (duration, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new TakeWithTimeObservable(this, duration, scheduler);
	  };

	  var SkipWithTimeObservable = (function (__super__) {
	    inherits(SkipWithTimeObservable, __super__);
	    function SkipWithTimeObservable(source, d, s) {
	      this.source = source;
	      this._d = d;
	      this._s = s;
	      this._open = false;
	      __super__.call(this);
	    }

	    function scheduleMethod(s, self) {
	      self._open = true;
	    }

	    SkipWithTimeObservable.prototype.subscribeCore = function (o) {
	      return new BinaryDisposable(
	        this._s.scheduleFuture(this, this._d, scheduleMethod),
	        this.source.subscribe(new SkipWithTimeObserver(o, this))
	      );
	    };

	    return SkipWithTimeObservable;
	  }(ObservableBase));

	  var SkipWithTimeObserver = (function (__super__) {
	    inherits(SkipWithTimeObserver, __super__);

	    function SkipWithTimeObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      __super__.call(this);
	    }

	    SkipWithTimeObserver.prototype.next = function (x) { this._p._open && this._o.onNext(x); };
	    SkipWithTimeObserver.prototype.error = function (e) { this._o.onError(e); };
	    SkipWithTimeObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return SkipWithTimeObserver;
	  }(AbstractObserver));

	  /**
	   *  Skips elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
	   * @description
	   *  Specifying a zero value for duration doesn't guarantee no elements will be dropped from the start of the source sequence.
	   *  This is a side-effect of the asynchrony introduced by the scheduler, where the action that causes callbacks from the source sequence to be forwarded
	   *  may not execute immediately, despite the zero due time.
	   *
	   *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the duration.
	   * @param {Number} duration Duration for skipping elements from the start of the sequence.
	   * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the start of the source sequence.
	   */
	  observableProto.skipWithTime = function (duration, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new SkipWithTimeObservable(this, duration, scheduler);
	  };

	  var SkipUntilWithTimeObservable = (function (__super__) {
	    inherits(SkipUntilWithTimeObservable, __super__);
	    function SkipUntilWithTimeObservable(source, startTime, scheduler) {
	      this.source = source;
	      this._st = startTime;
	      this._s = scheduler;
	      __super__.call(this);
	    }

	    function scheduleMethod(s, state) {
	      state._open = true;
	    }

	    SkipUntilWithTimeObservable.prototype.subscribeCore = function (o) {
	      this._open = false;
	      return new BinaryDisposable(
	        this._s.scheduleFuture(this, this._st, scheduleMethod),
	        this.source.subscribe(new SkipUntilWithTimeObserver(o, this))
	      );
	    };

	    return SkipUntilWithTimeObservable;
	  }(ObservableBase));

	  var SkipUntilWithTimeObserver = (function (__super__) {
	    inherits(SkipUntilWithTimeObserver, __super__);

	    function SkipUntilWithTimeObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      __super__.call(this);
	    }

	    SkipUntilWithTimeObserver.prototype.next = function (x) { this._p._open && this._o.onNext(x); };
	    SkipUntilWithTimeObserver.prototype.error = function (e) { this._o.onError(e); };
	    SkipUntilWithTimeObserver.prototype.completed = function () { this._o.onCompleted(); };

	    return SkipUntilWithTimeObserver;
	  }(AbstractObserver));


	  /**
	   *  Skips elements from the observable source sequence until the specified start time, using the specified scheduler to run timers.
	   *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the start time.
	   *
	   * @examples
	   *  1 - res = source.skipUntilWithTime(new Date(), [scheduler]);
	   *  2 - res = source.skipUntilWithTime(5000, [scheduler]);
	   * @param {Date|Number} startTime Time to start taking elements from the source sequence. If this value is less than or equal to Date(), no elements will be skipped.
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements skipped until the specified start time.
	   */
	  observableProto.skipUntilWithTime = function (startTime, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new SkipUntilWithTimeObservable(this, startTime, scheduler);
	  };

	  /**
	   *  Takes elements for the specified duration until the specified end time, using the specified scheduler to run timers.
	   * @param {Number | Date} endTime Time to stop taking elements from the source sequence. If this value is less than or equal to new Date(), the result stream will complete immediately.
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on.
	   * @returns {Observable} An observable sequence with the elements taken until the specified end time.
	   */
	  observableProto.takeUntilWithTime = function (endTime, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      return new BinaryDisposable(
	        scheduler.scheduleFuture(o, endTime, function (_, o) { o.onCompleted(); }),
	        source.subscribe(o));
	    }, source);
	  };

	  /**
	   * Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.
	   * @param {Number} windowDuration time to wait before emitting another item after emitting the last item
	   * @param {Scheduler} [scheduler] the Scheduler to use internally to manage the timers that handle timeout for each item. If not provided, defaults to Scheduler.timeout.
	   * @returns {Observable} An Observable that performs the throttle operation.
	   */
	  observableProto.throttle = function (windowDuration, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    var duration = +windowDuration || 0;
	    if (duration <= 0) { throw new RangeError('windowDuration cannot be less or equal zero.'); }
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      var lastOnNext = 0;
	      return source.subscribe(
	        function (x) {
	          var now = scheduler.now();
	          if (lastOnNext === 0 || now - lastOnNext >= duration) {
	            lastOnNext = now;
	            o.onNext(x);
	          }
	        },function (e) { o.onError(e); }, function () { o.onCompleted(); }
	      );
	    }, source);
	  };

	  var TransduceObserver = (function (__super__) {
	    inherits(TransduceObserver, __super__);
	    function TransduceObserver(o, xform) {
	      this._o = o;
	      this._xform = xform;
	      __super__.call(this);
	    }

	    TransduceObserver.prototype.next = function (x) {
	      var res = tryCatch(this._xform['@@transducer/step']).call(this._xform, this._o, x);
	      if (res === errorObj) { this._o.onError(res.e); }
	    };

	    TransduceObserver.prototype.error = function (e) { this._o.onError(e); };

	    TransduceObserver.prototype.completed = function () {
	      this._xform['@@transducer/result'](this._o);
	    };

	    return TransduceObserver;
	  }(AbstractObserver));

	  function transformForObserver(o) {
	    return {
	      '@@transducer/init': function() {
	        return o;
	      },
	      '@@transducer/step': function(obs, input) {
	        return obs.onNext(input);
	      },
	      '@@transducer/result': function(obs) {
	        return obs.onCompleted();
	      }
	    };
	  }

	  /**
	   * Executes a transducer to transform the observable sequence
	   * @param {Transducer} transducer A transducer to execute
	   * @returns {Observable} An Observable sequence containing the results from the transducer.
	   */
	  observableProto.transduce = function(transducer) {
	    var source = this;
	    return new AnonymousObservable(function(o) {
	      var xform = transducer(transformForObserver(o));
	      return source.subscribe(new TransduceObserver(o, xform));
	    }, source);
	  };

	  var SwitchFirstObservable = (function (__super__) {
	    inherits(SwitchFirstObservable, __super__);
	    function SwitchFirstObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }

	    SwitchFirstObservable.prototype.subscribeCore = function (o) {
	      var m = new SingleAssignmentDisposable(),
	        g = new CompositeDisposable(),
	        state = {
	          hasCurrent: false,
	          isStopped: false,
	          o: o,
	          g: g
	        };

	      g.add(m);
	      m.setDisposable(this.source.subscribe(new SwitchFirstObserver(state)));
	      return g;
	    };

	    return SwitchFirstObservable;
	  }(ObservableBase));

	  var SwitchFirstObserver = (function(__super__) {
	    inherits(SwitchFirstObserver, __super__);
	    function SwitchFirstObserver(state) {
	      this._s = state;
	      __super__.call(this);
	    }

	    SwitchFirstObserver.prototype.next = function (x) {
	      if (!this._s.hasCurrent) {
	        this._s.hasCurrent = true;
	        isPromise(x) && (x = observableFromPromise(x));
	        var inner = new SingleAssignmentDisposable();
	        this._s.g.add(inner);
	        inner.setDisposable(x.subscribe(new InnerObserver(this._s, inner)));
	      }
	    };

	    SwitchFirstObserver.prototype.error = function (e) {
	      this._s.o.onError(e);
	    };

	    SwitchFirstObserver.prototype.completed = function () {
	      this._s.isStopped = true;
	      !this._s.hasCurrent && this._s.g.length === 1 && this._s.o.onCompleted();
	    };

	    inherits(InnerObserver, __super__);
	    function InnerObserver(state, inner) {
	      this._s = state;
	      this._i = inner;
	      __super__.call(this);
	    }

	    InnerObserver.prototype.next = function (x) { this._s.o.onNext(x); };
	    InnerObserver.prototype.error = function (e) { this._s.o.onError(e); };
	    InnerObserver.prototype.completed = function () {
	      this._s.g.remove(this._i);
	      this._s.hasCurrent = false;
	      this._s.isStopped && this._s.g.length === 1 && this._s.o.onCompleted();
	    };

	    return SwitchFirstObserver;
	  }(AbstractObserver));

	  /**
	   * Performs a exclusive waiting for the first to finish before subscribing to another observable.
	   * Observables that come in between subscriptions will be dropped on the floor.
	   * @returns {Observable} A exclusive observable with only the results that happen when subscribed.
	   */
	  observableProto.switchFirst = function () {
	    return new SwitchFirstObservable(this);
	  };

	observableProto.flatMapFirst = observableProto.exhaustMap = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).switchFirst();
	};

	observableProto.flatMapWithMaxConcurrent = observableProto.flatMapMaxConcurrent = function(limit, selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).merge(limit);
	};

	  /** Provides a set of extension methods for virtual time scheduling. */
	  var VirtualTimeScheduler = Rx.VirtualTimeScheduler = (function (__super__) {
	    inherits(VirtualTimeScheduler, __super__);

	    /**
	     * Creates a new virtual time scheduler with the specified initial clock value and absolute time comparer.
	     *
	     * @constructor
	     * @param {Number} initialClock Initial value for the clock.
	     * @param {Function} comparer Comparer to determine causality of events based on absolute time.
	     */
	    function VirtualTimeScheduler(initialClock, comparer) {
	      this.clock = initialClock;
	      this.comparer = comparer;
	      this.isEnabled = false;
	      this.queue = new PriorityQueue(1024);
	      __super__.call(this);
	    }

	    var VirtualTimeSchedulerPrototype = VirtualTimeScheduler.prototype;

	    VirtualTimeSchedulerPrototype.now = function () {
	      return this.toAbsoluteTime(this.clock);
	    };

	    VirtualTimeSchedulerPrototype.schedule = function (state, action) {
	      return this.scheduleAbsolute(state, this.clock, action);
	    };

	    VirtualTimeSchedulerPrototype.scheduleFuture = function (state, dueTime, action) {
	      var dt = dueTime instanceof Date ?
	        this.toRelativeTime(dueTime - this.now()) :
	        this.toRelativeTime(dueTime);

	      return this.scheduleRelative(state, dt, action);
	    };

	    /**
	     * Adds a relative time value to an absolute time value.
	     * @param {Number} absolute Absolute virtual time value.
	     * @param {Number} relative Relative virtual time value to add.
	     * @return {Number} Resulting absolute virtual time sum value.
	     */
	    VirtualTimeSchedulerPrototype.add = notImplemented;

	    /**
	     * Converts an absolute time to a number
	     * @param {Any} The absolute time.
	     * @returns {Number} The absolute time in ms
	     */
	    VirtualTimeSchedulerPrototype.toAbsoluteTime = notImplemented;

	    /**
	     * Converts the TimeSpan value to a relative virtual time value.
	     * @param {Number} timeSpan TimeSpan value to convert.
	     * @return {Number} Corresponding relative virtual time value.
	     */
	    VirtualTimeSchedulerPrototype.toRelativeTime = notImplemented;

	    /**
	     * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be emulated using recursive scheduling.
	     * @param {Mixed} state Initial state passed to the action upon the first iteration.
	     * @param {Number} period Period for running the work periodically.
	     * @param {Function} action Action to be executed, potentially updating the state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
	     */
	    VirtualTimeSchedulerPrototype.schedulePeriodic = function (state, period, action) {
	      var s = new SchedulePeriodicRecursive(this, state, period, action);
	      return s.start();
	    };

	    /**
	     * Schedules an action to be executed after dueTime.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Number} dueTime Relative time after which to execute the action.
	     * @param {Function} action Action to be executed.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    VirtualTimeSchedulerPrototype.scheduleRelative = function (state, dueTime, action) {
	      var runAt = this.add(this.clock, dueTime);
	      return this.scheduleAbsolute(state, runAt, action);
	    };

	    /**
	     * Starts the virtual time scheduler.
	     */
	    VirtualTimeSchedulerPrototype.start = function () {
	      if (!this.isEnabled) {
	        this.isEnabled = true;
	        do {
	          var next = this.getNext();
	          if (next !== null) {
	            this.comparer(next.dueTime, this.clock) > 0 && (this.clock = next.dueTime);
	            next.invoke();
	          } else {
	            this.isEnabled = false;
	          }
	        } while (this.isEnabled);
	      }
	    };

	    /**
	     * Stops the virtual time scheduler.
	     */
	    VirtualTimeSchedulerPrototype.stop = function () {
	      this.isEnabled = false;
	    };

	    /**
	     * Advances the scheduler's clock to the specified time, running all work till that point.
	     * @param {Number} time Absolute time to advance the scheduler's clock to.
	     */
	    VirtualTimeSchedulerPrototype.advanceTo = function (time) {
	      var dueToClock = this.comparer(this.clock, time);
	      if (this.comparer(this.clock, time) > 0) { throw new ArgumentOutOfRangeError(); }
	      if (dueToClock === 0) { return; }
	      if (!this.isEnabled) {
	        this.isEnabled = true;
	        do {
	          var next = this.getNext();
	          if (next !== null && this.comparer(next.dueTime, time) <= 0) {
	            this.comparer(next.dueTime, this.clock) > 0 && (this.clock = next.dueTime);
	            next.invoke();
	          } else {
	            this.isEnabled = false;
	          }
	        } while (this.isEnabled);
	        this.clock = time;
	      }
	    };

	    /**
	     * Advances the scheduler's clock by the specified relative time, running all work scheduled for that timespan.
	     * @param {Number} time Relative time to advance the scheduler's clock by.
	     */
	    VirtualTimeSchedulerPrototype.advanceBy = function (time) {
	      var dt = this.add(this.clock, time),
	          dueToClock = this.comparer(this.clock, dt);
	      if (dueToClock > 0) { throw new ArgumentOutOfRangeError(); }
	      if (dueToClock === 0) {  return; }

	      this.advanceTo(dt);
	    };

	    /**
	     * Advances the scheduler's clock by the specified relative time.
	     * @param {Number} time Relative time to advance the scheduler's clock by.
	     */
	    VirtualTimeSchedulerPrototype.sleep = function (time) {
	      var dt = this.add(this.clock, time);
	      if (this.comparer(this.clock, dt) >= 0) { throw new ArgumentOutOfRangeError(); }

	      this.clock = dt;
	    };

	    /**
	     * Gets the next scheduled item to be executed.
	     * @returns {ScheduledItem} The next scheduled item.
	     */
	    VirtualTimeSchedulerPrototype.getNext = function () {
	      while (this.queue.length > 0) {
	        var next = this.queue.peek();
	        if (next.isCancelled()) {
	          this.queue.dequeue();
	        } else {
	          return next;
	        }
	      }
	      return null;
	    };

	    /**
	     * Schedules an action to be executed at dueTime.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Number} dueTime Absolute time at which to execute the action.
	     * @param {Function} action Action to be executed.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    VirtualTimeSchedulerPrototype.scheduleAbsolute = function (state, dueTime, action) {
	      var self = this;

	      function run(scheduler, state1) {
	        self.queue.remove(si);
	        return action(scheduler, state1);
	      }

	      var si = new ScheduledItem(this, state, run, dueTime, this.comparer);
	      this.queue.enqueue(si);

	      return si.disposable;
	    };

	    return VirtualTimeScheduler;
	  }(Scheduler));

	  /** Provides a virtual time scheduler that uses Date for absolute time and number for relative time. */
	  Rx.HistoricalScheduler = (function (__super__) {
	    inherits(HistoricalScheduler, __super__);

	    /**
	     * Creates a new historical scheduler with the specified initial clock value.
	     * @constructor
	     * @param {Number} initialClock Initial value for the clock.
	     * @param {Function} comparer Comparer to determine causality of events based on absolute time.
	     */
	    function HistoricalScheduler(initialClock, comparer) {
	      var clock = initialClock == null ? 0 : initialClock;
	      var cmp = comparer || defaultSubComparer;
	      __super__.call(this, clock, cmp);
	    }

	    var HistoricalSchedulerProto = HistoricalScheduler.prototype;

	    /**
	     * Adds a relative time value to an absolute time value.
	     * @param {Number} absolute Absolute virtual time value.
	     * @param {Number} relative Relative virtual time value to add.
	     * @return {Number} Resulting absolute virtual time sum value.
	     */
	    HistoricalSchedulerProto.add = function (absolute, relative) {
	      return absolute + relative;
	    };

	    HistoricalSchedulerProto.toAbsoluteTime = function (absolute) {
	      return new Date(absolute).getTime();
	    };

	    /**
	     * Converts the TimeSpan value to a relative virtual time value.
	     * @memberOf HistoricalScheduler
	     * @param {Number} timeSpan TimeSpan value to convert.
	     * @return {Number} Corresponding relative virtual time value.
	     */
	    HistoricalSchedulerProto.toRelativeTime = function (timeSpan) {
	      return timeSpan;
	    };

	    return HistoricalScheduler;
	  }(Rx.VirtualTimeScheduler));

	function OnNextPredicate(predicate) {
	    this.predicate = predicate;
	}

	OnNextPredicate.prototype.equals = function (other) {
	  if (other === this) { return true; }
	  if (other == null) { return false; }
	  if (other.kind !== 'N') { return false; }
	  return this.predicate(other.value);
	};

	function OnErrorPredicate(predicate) {
	  this.predicate = predicate;
	}

	OnErrorPredicate.prototype.equals = function (other) {
	  if (other === this) { return true; }
	  if (other == null) { return false; }
	  if (other.kind !== 'E') { return false; }
	  return this.predicate(other.error);
	};

	var ReactiveTest = Rx.ReactiveTest = {
	  /** Default virtual time used for creation of observable sequences in unit tests. */
	  created: 100,
	  /** Default virtual time used to subscribe to observable sequences in unit tests. */
	  subscribed: 200,
	  /** Default virtual time used to dispose subscriptions in unit tests. */
	  disposed: 1000,

	  /**
	   * Factory method for an OnNext notification record at a given time with a given value or a predicate function.
	   *
	   * 1 - ReactiveTest.onNext(200, 42);
	   * 2 - ReactiveTest.onNext(200, function (x) { return x.length == 2; });
	   *
	   * @param ticks Recorded virtual time the OnNext notification occurs.
	   * @param value Recorded value stored in the OnNext notification or a predicate.
	   * @return Recorded OnNext notification.
	   */
	  onNext: function (ticks, value) {
	    return typeof value === 'function' ?
	      new Recorded(ticks, new OnNextPredicate(value)) :
	      new Recorded(ticks, Notification.createOnNext(value));
	  },
	  /**
	   * Factory method for an OnError notification record at a given time with a given error.
	   *
	   * 1 - ReactiveTest.onNext(200, new Error('error'));
	   * 2 - ReactiveTest.onNext(200, function (e) { return e.message === 'error'; });
	   *
	   * @param ticks Recorded virtual time the OnError notification occurs.
	   * @param exception Recorded exception stored in the OnError notification.
	   * @return Recorded OnError notification.
	   */
	  onError: function (ticks, error) {
	    return typeof error === 'function' ?
	      new Recorded(ticks, new OnErrorPredicate(error)) :
	      new Recorded(ticks, Notification.createOnError(error));
	  },
	  /**
	   * Factory method for an OnCompleted notification record at a given time.
	   *
	   * @param ticks Recorded virtual time the OnCompleted notification occurs.
	   * @return Recorded OnCompleted notification.
	   */
	  onCompleted: function (ticks) {
	    return new Recorded(ticks, Notification.createOnCompleted());
	  },
	  /**
	   * Factory method for a subscription record based on a given subscription and disposal time.
	   *
	   * @param start Virtual time indicating when the subscription was created.
	   * @param end Virtual time indicating when the subscription was disposed.
	   * @return Subscription object.
	   */
	  subscribe: function (start, end) {
	    return new Subscription(start, end);
	  }
	};

	  /**
	   * Creates a new object recording the production of the specified value at the given virtual time.
	   *
	   * @constructor
	   * @param {Number} time Virtual time the value was produced on.
	   * @param {Mixed} value Value that was produced.
	   * @param {Function} comparer An optional comparer.
	   */
	  var Recorded = Rx.Recorded = function (time, value, comparer) {
	    this.time = time;
	    this.value = value;
	    this.comparer = comparer || defaultComparer;
	  };

	  /**
	   * Checks whether the given recorded object is equal to the current instance.
	   *
	   * @param {Recorded} other Recorded object to check for equality.
	   * @returns {Boolean} true if both objects are equal; false otherwise.
	   */
	  Recorded.prototype.equals = function (other) {
	    return this.time === other.time && this.comparer(this.value, other.value);
	  };

	  /**
	   * Returns a string representation of the current Recorded value.
	   *
	   * @returns {String} String representation of the current Recorded value.
	   */
	  Recorded.prototype.toString = function () {
	    return this.value.toString() + '@' + this.time;
	  };

	  /**
	   * Creates a new subscription object with the given virtual subscription and unsubscription time.
	   *
	   * @constructor
	   * @param {Number} subscribe Virtual time at which the subscription occurred.
	   * @param {Number} unsubscribe Virtual time at which the unsubscription occurred.
	   */
	  var Subscription = Rx.Subscription = function (start, end) {
	    this.subscribe = start;
	    this.unsubscribe = end || Number.MAX_VALUE;
	  };

	  /**
	   * Checks whether the given subscription is equal to the current instance.
	   * @param other Subscription object to check for equality.
	   * @returns {Boolean} true if both objects are equal; false otherwise.
	   */
	  Subscription.prototype.equals = function (other) {
	    return this.subscribe === other.subscribe && this.unsubscribe === other.unsubscribe;
	  };

	  /**
	   * Returns a string representation of the current Subscription value.
	   * @returns {String} String representation of the current Subscription value.
	   */
	  Subscription.prototype.toString = function () {
	    return '(' + this.subscribe + ', ' + (this.unsubscribe === Number.MAX_VALUE ? 'Infinite' : this.unsubscribe) + ')';
	  };

	  var MockDisposable = Rx.MockDisposable = function (scheduler) {
	    this.scheduler = scheduler;
	    this.disposes = [];
	    this.disposes.push(this.scheduler.clock);
	  };

	  MockDisposable.prototype.dispose = function () {
	    this.disposes.push(this.scheduler.clock);
	  };

	  var MockObserver = (function (__super__) {
	    inherits(MockObserver, __super__);

	    function MockObserver(scheduler) {
	      __super__.call(this);
	      this.scheduler = scheduler;
	      this.messages = [];
	    }

	    var MockObserverPrototype = MockObserver.prototype;

	    MockObserverPrototype.onNext = function (value) {
	      this.messages.push(new Recorded(this.scheduler.clock, Notification.createOnNext(value)));
	    };

	    MockObserverPrototype.onError = function (e) {
	      this.messages.push(new Recorded(this.scheduler.clock, Notification.createOnError(e)));
	    };

	    MockObserverPrototype.onCompleted = function () {
	      this.messages.push(new Recorded(this.scheduler.clock, Notification.createOnCompleted()));
	    };

	    return MockObserver;
	  })(Observer);

	  function MockPromise(scheduler, messages) {
	    var self = this;
	    this.scheduler = scheduler;
	    this.messages = messages;
	    this.subscriptions = [];
	    this.observers = [];
	    for (var i = 0, len = this.messages.length; i < len; i++) {
	      var message = this.messages[i],
	          notification = message.value;
	      (function (innerNotification) {
	        scheduler.scheduleAbsolute(null, message.time, function () {
	          var obs = self.observers.slice(0);

	          for (var j = 0, jLen = obs.length; j < jLen; j++) {
	            innerNotification.accept(obs[j]);
	          }
	          return disposableEmpty;
	        });
	      })(notification);
	    }
	  }

	  MockPromise.prototype.then = function (onResolved, onRejected) {
	    var self = this;

	    this.subscriptions.push(new Subscription(this.scheduler.clock));
	    var index = this.subscriptions.length - 1;

	    var newPromise;

	    var observer = Rx.Observer.create(
	      function (x) {
	        var retValue = onResolved(x);
	        if (retValue && typeof retValue.then === 'function') {
	          newPromise = retValue;
	        } else {
	          var ticks = self.scheduler.clock;
	          newPromise = new MockPromise(self.scheduler, [Rx.ReactiveTest.onNext(ticks, undefined), Rx.ReactiveTest.onCompleted(ticks)]);
	        }
	        var idx = self.observers.indexOf(observer);
	        self.observers.splice(idx, 1);
	        self.subscriptions[index] = new Subscription(self.subscriptions[index].subscribe, self.scheduler.clock);
	      },
	      function (err) {
	        onRejected(err);
	        var idx = self.observers.indexOf(observer);
	        self.observers.splice(idx, 1);
	        self.subscriptions[index] = new Subscription(self.subscriptions[index].subscribe, self.scheduler.clock);
	      }
	    );
	    this.observers.push(observer);

	    return newPromise || new MockPromise(this.scheduler, this.messages);
	  };

	  var HotObservable = (function (__super__) {
	    inherits(HotObservable, __super__);

	    function HotObservable(scheduler, messages) {
	      __super__.call(this);
	      var message, notification, observable = this;
	      this.scheduler = scheduler;
	      this.messages = messages;
	      this.subscriptions = [];
	      this.observers = [];
	      for (var i = 0, len = this.messages.length; i < len; i++) {
	        message = this.messages[i];
	        notification = message.value;
	        (function (innerNotification) {
	          scheduler.scheduleAbsolute(null, message.time, function () {
	            var obs = observable.observers.slice(0);

	            for (var j = 0, jLen = obs.length; j < jLen; j++) {
	              innerNotification.accept(obs[j]);
	            }
	            return disposableEmpty;
	          });
	        })(notification);
	      }
	    }

	    HotObservable.prototype._subscribe = function (o) {
	      var observable = this;
	      this.observers.push(o);
	      this.subscriptions.push(new Subscription(this.scheduler.clock));
	      var index = this.subscriptions.length - 1;
	      return disposableCreate(function () {
	        var idx = observable.observers.indexOf(o);
	        observable.observers.splice(idx, 1);
	        observable.subscriptions[index] = new Subscription(observable.subscriptions[index].subscribe, observable.scheduler.clock);
	      });
	    };

	    return HotObservable;
	  })(Observable);

	  var ColdObservable = (function (__super__) {
	    inherits(ColdObservable, __super__);

	    function ColdObservable(scheduler, messages) {
	      __super__.call(this);
	      this.scheduler = scheduler;
	      this.messages = messages;
	      this.subscriptions = [];
	    }

	    ColdObservable.prototype._subscribe = function (o) {
	      var message, notification, observable = this;
	      this.subscriptions.push(new Subscription(this.scheduler.clock));
	      var index = this.subscriptions.length - 1;
	      var d = new CompositeDisposable();
	      for (var i = 0, len = this.messages.length; i < len; i++) {
	        message = this.messages[i];
	        notification = message.value;
	        (function (innerNotification) {
	          d.add(observable.scheduler.scheduleRelative(null, message.time, function () {
	            innerNotification.accept(o);
	            return disposableEmpty;
	          }));
	        })(notification);
	      }
	      return disposableCreate(function () {
	        observable.subscriptions[index] = new Subscription(observable.subscriptions[index].subscribe, observable.scheduler.clock);
	        d.dispose();
	      });
	    };

	    return ColdObservable;
	  })(Observable);

	  /** Virtual time scheduler used for testing applications and libraries built using Reactive Extensions. */
	  Rx.TestScheduler = (function (__super__) {
	    inherits(TestScheduler, __super__);

	    function baseComparer(x, y) {
	      return x > y ? 1 : (x < y ? -1 : 0);
	    }

	    function TestScheduler() {
	      __super__.call(this, 0, baseComparer);
	    }

	    /**
	     * Schedules an action to be executed at the specified virtual time.
	     *
	     * @param state State passed to the action to be executed.
	     * @param dueTime Absolute virtual time at which to execute the action.
	     * @param action Action to be executed.
	     * @return Disposable object used to cancel the scheduled action (best effort).
	     */
	    TestScheduler.prototype.scheduleAbsolute = function (state, dueTime, action) {
	      dueTime <= this.clock && (dueTime = this.clock + 1);
	      return __super__.prototype.scheduleAbsolute.call(this, state, dueTime, action);
	    };
	    /**
	     * Adds a relative virtual time to an absolute virtual time value.
	     *
	     * @param absolute Absolute virtual time value.
	     * @param relative Relative virtual time value to add.
	     * @return Resulting absolute virtual time sum value.
	     */
	    TestScheduler.prototype.add = function (absolute, relative) {
	      return absolute + relative;
	    };
	    /**
	     * Converts the absolute virtual time value to a DateTimeOffset value.
	     *
	     * @param absolute Absolute virtual time value to convert.
	     * @return Corresponding DateTimeOffset value.
	     */
	    TestScheduler.prototype.toAbsoluteTime = function (absolute) {
	      return new Date(absolute).getTime();
	    };
	    /**
	     * Converts the TimeSpan value to a relative virtual time value.
	     *
	     * @param timeSpan TimeSpan value to convert.
	     * @return Corresponding relative virtual time value.
	     */
	    TestScheduler.prototype.toRelativeTime = function (timeSpan) {
	      return timeSpan;
	    };
	    /**
	     * Starts the test scheduler and uses the specified virtual times to invoke the factory function, subscribe to the resulting sequence, and dispose the subscription.
	     *
	     * @param create Factory method to create an observable sequence.
	     * @param created Virtual time at which to invoke the factory to create an observable sequence.
	     * @param subscribed Virtual time at which to subscribe to the created observable sequence.
	     * @param disposed Virtual time at which to dispose the subscription.
	     * @return Observer with timestamped recordings of notification messages that were received during the virtual time window when the subscription to the source sequence was active.
	     */
	    TestScheduler.prototype.startScheduler = function (createFn, settings) {
	      settings || (settings = {});
	      settings.created == null && (settings.created = ReactiveTest.created);
	      settings.subscribed == null && (settings.subscribed = ReactiveTest.subscribed);
	      settings.disposed == null && (settings.disposed = ReactiveTest.disposed);

	      var observer = this.createObserver(), source, subscription;

	      this.scheduleAbsolute(null, settings.created, function () {
	        source = createFn();
	        return disposableEmpty;
	      });

	      this.scheduleAbsolute(null, settings.subscribed, function () {
	        subscription = source.subscribe(observer);
	        return disposableEmpty;
	      });

	      this.scheduleAbsolute(null, settings.disposed, function () {
	        subscription.dispose();
	        return disposableEmpty;
	      });

	      this.start();

	      return observer;
	    };

	    /**
	     * Creates a hot observable using the specified timestamped notification messages either as an array or arguments.
	     * @param messages Notifications to surface through the created sequence at their specified absolute virtual times.
	     * @return Hot observable sequence that can be used to assert the timing of subscriptions and notifications.
	     */
	    TestScheduler.prototype.createHotObservable = function () {
	      var len = arguments.length, args;
	      if (Array.isArray(arguments[0])) {
	        args = arguments[0];
	      } else {
	        args = new Array(len);
	        for (var i = 0; i < len; i++) { args[i] = arguments[i]; }
	      }
	      return new HotObservable(this, args);
	    };

	    /**
	     * Creates a cold observable using the specified timestamped notification messages either as an array or arguments.
	     * @param messages Notifications to surface through the created sequence at their specified virtual time offsets from the sequence subscription time.
	     * @return Cold observable sequence that can be used to assert the timing of subscriptions and notifications.
	     */
	    TestScheduler.prototype.createColdObservable = function () {
	      var len = arguments.length, args;
	      if (Array.isArray(arguments[0])) {
	        args = arguments[0];
	      } else {
	        args = new Array(len);
	        for (var i = 0; i < len; i++) { args[i] = arguments[i]; }
	      }
	      return new ColdObservable(this, args);
	    };

	    /**
	     * Creates a resolved promise with the given value and ticks
	     * @param {Number} ticks The absolute time of the resolution.
	     * @param {Any} value The value to yield at the given tick.
	     * @returns {MockPromise} A mock Promise which fulfills with the given value.
	     */
	    TestScheduler.prototype.createResolvedPromise = function (ticks, value) {
	      return new MockPromise(this, [Rx.ReactiveTest.onNext(ticks, value), Rx.ReactiveTest.onCompleted(ticks)]);
	    };

	    /**
	     * Creates a rejected promise with the given reason and ticks
	     * @param {Number} ticks The absolute time of the resolution.
	     * @param {Any} reason The reason for rejection to yield at the given tick.
	     * @returns {MockPromise} A mock Promise which rejects with the given reason.
	     */
	    TestScheduler.prototype.createRejectedPromise = function (ticks, reason) {
	      return new MockPromise(this, [Rx.ReactiveTest.onError(ticks, reason)]);
	    };

	    /**
	     * Creates an observer that records received notification messages and timestamps those.
	     * @return Observer that can be used to assert the timing of received notifications.
	     */
	    TestScheduler.prototype.createObserver = function () {
	      return new MockObserver(this);
	    };

	    return TestScheduler;
	  })(VirtualTimeScheduler);

	  var AnonymousObservable = Rx.AnonymousObservable = (function (__super__) {
	    inherits(AnonymousObservable, __super__);

	    // Fix subscriber to check for undefined or function returned to decorate as Disposable
	    function fixSubscriber(subscriber) {
	      return subscriber && isFunction(subscriber.dispose) ? subscriber :
	        isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
	    }

	    function setDisposable(s, state) {
	      var ado = state[0], self = state[1];
	      var sub = tryCatch(self.__subscribe).call(self, ado);
	      if (sub === errorObj && !ado.fail(errorObj.e)) { thrower(errorObj.e); }
	      ado.setDisposable(fixSubscriber(sub));
	    }

	    function AnonymousObservable(subscribe, parent) {
	      this.source = parent;
	      this.__subscribe = subscribe;
	      __super__.call(this);
	    }

	    AnonymousObservable.prototype._subscribe = function (o) {
	      var ado = new AutoDetachObserver(o), state = [ado, this];

	      if (currentThreadScheduler.scheduleRequired()) {
	        currentThreadScheduler.schedule(state, setDisposable);
	      } else {
	        setDisposable(null, state);
	      }
	      return ado;
	    };

	    return AnonymousObservable;

	  }(Observable));

	  var AutoDetachObserver = (function (__super__) {
	    inherits(AutoDetachObserver, __super__);

	    function AutoDetachObserver(observer) {
	      __super__.call(this);
	      this.observer = observer;
	      this.m = new SingleAssignmentDisposable();
	    }

	    var AutoDetachObserverPrototype = AutoDetachObserver.prototype;

	    AutoDetachObserverPrototype.next = function (value) {
	      var result = tryCatch(this.observer.onNext).call(this.observer, value);
	      if (result === errorObj) {
	        this.dispose();
	        thrower(result.e);
	      }
	    };

	    AutoDetachObserverPrototype.error = function (err) {
	      var result = tryCatch(this.observer.onError).call(this.observer, err);
	      this.dispose();
	      result === errorObj && thrower(result.e);
	    };

	    AutoDetachObserverPrototype.completed = function () {
	      var result = tryCatch(this.observer.onCompleted).call(this.observer);
	      this.dispose();
	      result === errorObj && thrower(result.e);
	    };

	    AutoDetachObserverPrototype.setDisposable = function (value) { this.m.setDisposable(value); };
	    AutoDetachObserverPrototype.getDisposable = function () { return this.m.getDisposable(); };

	    AutoDetachObserverPrototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      this.m.dispose();
	    };

	    return AutoDetachObserver;
	  }(AbstractObserver));

	  var UnderlyingObservable = (function (__super__) {
	    inherits(UnderlyingObservable, __super__);
	    function UnderlyingObservable(m, u) {
	      this._m = m;
	      this._u = u;
	      __super__.call(this);
	    }

	    UnderlyingObservable.prototype.subscribeCore = function (o) {
	      return new BinaryDisposable(this._m.getDisposable(), this._u.subscribe(o));
	    };

	    return UnderlyingObservable;
	  }(ObservableBase));

	  var GroupedObservable = (function (__super__) {
	    inherits(GroupedObservable, __super__);
	    function GroupedObservable(key, underlyingObservable, mergedDisposable) {
	      __super__.call(this);
	      this.key = key;
	      this.underlyingObservable = !mergedDisposable ?
	        underlyingObservable :
	        new UnderlyingObservable(mergedDisposable, underlyingObservable);
	    }

	    GroupedObservable.prototype._subscribe = function (o) {
	      return this.underlyingObservable.subscribe(o);
	    };

	    return GroupedObservable;
	  }(Observable));

	  /**
	   *  Represents an object that is both an observable sequence as well as an observer.
	   *  Each notification is broadcasted to all subscribed observers.
	   */
	  var Subject = Rx.Subject = (function (__super__) {
	    inherits(Subject, __super__);
	    function Subject() {
	      __super__.call(this);
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.observers = [];
	      this.hasError = false;
	    }

	    addProperties(Subject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.observers.push(o);
	          return new InnerSubscription(this, o);
	        }
	        if (this.hasError) {
	          o.onError(this.error);
	          return disposableEmpty;
	        }
	        o.onCompleted();
	        return disposableEmpty;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { checkDisposed(this); return this.observers.length > 0; },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onCompleted();
	          }

	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.error = error;
	          this.hasError = true;
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onError(error);
	          }

	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onNext(value);
	          }
	        }
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	      }
	    });

	    /**
	     * Creates a subject from the specified observer and observable.
	     * @param {Observer} observer The observer used to send messages to the subject.
	     * @param {Observable} observable The observable used to subscribe to messages sent from the subject.
	     * @returns {Subject} Subject implemented using the given observer and observable.
	     */
	    Subject.create = function (observer, observable) {
	      return new AnonymousSubject(observer, observable);
	    };

	    return Subject;
	  }(Observable));

	  /**
	   *  Represents the result of an asynchronous operation.
	   *  The last value before the OnCompleted notification, or the error received through OnError, is sent to all subscribed observers.
	   */
	  var AsyncSubject = Rx.AsyncSubject = (function (__super__) {
	    inherits(AsyncSubject, __super__);

	    /**
	     * Creates a subject that can only receive one value and that value is cached for all future observations.
	     * @constructor
	     */
	    function AsyncSubject() {
	      __super__.call(this);
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.hasValue = false;
	      this.observers = [];
	      this.hasError = false;
	    }

	    addProperties(AsyncSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);

	        if (!this.isStopped) {
	          this.observers.push(o);
	          return new InnerSubscription(this, o);
	        }

	        if (this.hasError) {
	          o.onError(this.error);
	        } else if (this.hasValue) {
	          o.onNext(this.value);
	          o.onCompleted();
	        } else {
	          o.onCompleted();
	        }

	        return disposableEmpty;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { checkDisposed(this); return this.observers.length > 0; },
	      /**
	       * Notifies all subscribed observers about the end of the sequence, also causing the last received value to be sent out (if any).
	       */
	      onCompleted: function () {
	        var i, len;
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          var os = cloneArray(this.observers), len = os.length;

	          if (this.hasValue) {
	            for (i = 0; i < len; i++) {
	              var o = os[i];
	              o.onNext(this.value);
	              o.onCompleted();
	            }
	          } else {
	            for (i = 0; i < len; i++) {
	              os[i].onCompleted();
	            }
	          }

	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the error.
	       * @param {Mixed} error The Error to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.hasError = true;
	          this.error = error;

	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onError(error);
	          }

	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Sends a value to the subject. The last value received before successful termination will be sent to all subscribed and future observers.
	       * @param {Mixed} value The value to store in the subject.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.value = value;
	        this.hasValue = true;
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	        this.error = null;
	        this.value = null;
	      }
	    });

	    return AsyncSubject;
	  }(Observable));

	  /**
	   *  Represents a value that changes over time.
	   *  Observers can subscribe to the subject to receive the last (or initial) value and all subsequent notifications.
	   */
	  var BehaviorSubject = Rx.BehaviorSubject = (function (__super__) {
	    inherits(BehaviorSubject, __super__);
	    function BehaviorSubject(value) {
	      __super__.call(this);
	      this.value = value;
	      this.observers = [];
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.hasError = false;
	    }

	    addProperties(BehaviorSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.observers.push(o);
	          o.onNext(this.value);
	          return new InnerSubscription(this, o);
	        }
	        if (this.hasError) {
	          o.onError(this.error);
	        } else {
	          o.onCompleted();
	        }
	        return disposableEmpty;
	      },
	      /**
	       * Gets the current value or throws an exception.
	       * Value is frozen after onCompleted is called.
	       * After onError is called always throws the specified exception.
	       * An exception is always thrown after dispose is called.
	       * @returns {Mixed} The initial value passed to the constructor until onNext is called; after which, the last value passed to onNext.
	       */
	      getValue: function () {
	        checkDisposed(this);
	        if (this.hasError) { thrower(this.error); }
	        return this.value;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { checkDisposed(this); return this.observers.length > 0; },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onCompleted();
	        }

	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        this.hasError = true;
	        this.error = error;

	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onError(error);
	        }

	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.value = value;
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onNext(value);
	        }
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	        this.value = null;
	        this.error = null;
	      }
	    });

	    return BehaviorSubject;
	  }(Observable));

	  /**
	   * Represents an object that is both an observable sequence as well as an observer.
	   * Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
	   */
	  var ReplaySubject = Rx.ReplaySubject = (function (__super__) {

	    var maxSafeInteger = Math.pow(2, 53) - 1;

	    function createRemovableDisposable(subject, observer) {
	      return disposableCreate(function () {
	        observer.dispose();
	        !subject.isDisposed && subject.observers.splice(subject.observers.indexOf(observer), 1);
	      });
	    }

	    inherits(ReplaySubject, __super__);

	    /**
	     *  Initializes a new instance of the ReplaySubject class with the specified buffer size, window size and scheduler.
	     *  @param {Number} [bufferSize] Maximum element count of the replay buffer.
	     *  @param {Number} [windowSize] Maximum time length of the replay buffer.
	     *  @param {Scheduler} [scheduler] Scheduler the observers are invoked on.
	     */
	    function ReplaySubject(bufferSize, windowSize, scheduler) {
	      this.bufferSize = bufferSize == null ? maxSafeInteger : bufferSize;
	      this.windowSize = windowSize == null ? maxSafeInteger : windowSize;
	      this.scheduler = scheduler || currentThreadScheduler;
	      this.q = [];
	      this.observers = [];
	      this.isStopped = false;
	      this.isDisposed = false;
	      this.hasError = false;
	      this.error = null;
	      __super__.call(this);
	    }

	    addProperties(ReplaySubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        var so = new ScheduledObserver(this.scheduler, o), subscription = createRemovableDisposable(this, so);

	        this._trim(this.scheduler.now());
	        this.observers.push(so);

	        for (var i = 0, len = this.q.length; i < len; i++) {
	          so.onNext(this.q[i].value);
	        }

	        if (this.hasError) {
	          so.onError(this.error);
	        } else if (this.isStopped) {
	          so.onCompleted();
	        }

	        so.ensureActive();
	        return subscription;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { checkDisposed(this); return this.observers.length > 0; },
	      _trim: function (now) {
	        while (this.q.length > this.bufferSize) {
	          this.q.shift();
	        }
	        while (this.q.length > 0 && (now - this.q[0].interval) > this.windowSize) {
	          this.q.shift();
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        var now = this.scheduler.now();
	        this.q.push({ interval: now, value: value });
	        this._trim(now);

	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onNext(value);
	          observer.ensureActive();
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        this.error = error;
	        this.hasError = true;
	        var now = this.scheduler.now();
	        this._trim(now);
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onError(error);
	          observer.ensureActive();
	        }
	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        var now = this.scheduler.now();
	        this._trim(now);
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onCompleted();
	          observer.ensureActive();
	        }
	        this.observers.length = 0;
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	      }
	    });

	    return ReplaySubject;
	  }(Observable));

	  var AnonymousSubject = Rx.AnonymousSubject = (function (__super__) {
	    inherits(AnonymousSubject, __super__);
	    function AnonymousSubject(observer, observable) {
	      this.observer = observer;
	      this.observable = observable;
	      __super__.call(this);
	    }

	    addProperties(AnonymousSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        return this.observable.subscribe(o);
	      },
	      onCompleted: function () {
	        this.observer.onCompleted();
	      },
	      onError: function (error) {
	        this.observer.onError(error);
	      },
	      onNext: function (value) {
	        this.observer.onNext(value);
	      }
	    });

	    return AnonymousSubject;
	  }(Observable));

	  /**
	  * Used to pause and resume streams.
	  */
	  Rx.Pauser = (function (__super__) {
	    inherits(Pauser, __super__);
	    function Pauser() {
	      __super__.call(this);
	    }

	    /**
	     * Pauses the underlying sequence.
	     */
	    Pauser.prototype.pause = function () { this.onNext(false); };

	    /**
	    * Resumes the underlying sequence.
	    */
	    Pauser.prototype.resume = function () { this.onNext(true); };

	    return Pauser;
	  }(Subject));

	  if (true) {
	    root.Rx = Rx;

	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Rx;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (freeExports && freeModule) {
	    // in Node.js or RingoJS
	    if (moduleExports) {
	      (freeModule.exports = Rx).Rx = Rx;
	    } else {
	      freeExports.Rx = Rx;
	    }
	  } else {
	    // in a browser or Rhino
	    root.Rx = Rx;
	  }

	  // All code before this point will be filtered from stack traces.
	  var rEndingLine = captureLine();

	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)(module), (function() { return this; }()), __webpack_require__(153)))

/***/ }
/******/ ])
});
;