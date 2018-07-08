'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_utils=require('./utils'),WHAT_DATA_TYPE=function(){return{isArray:function isArray(a){return'function'==typeof Array.isArray&&Array.isArray(a)||'[object Array]'===(0,_utils.getObjectType)(a)},isObject:function isObject(a){return null!==a&&'object'===('undefined'==typeof a?'undefined':_typeof(a))&&Object.getPrototypeOf(a)===Object.prototype},isString:function isString(a){return'string'==typeof a||'[object String]'===(0,_utils.getObjectType)(a)},isDate:function isDate(a){return'[object Date]'===(0,_utils.getObjectType)(a)},isRegExp:function isRegExp(a){return'[object RegExp]'===(0,_utils.getObjectType)(a)},isFunction:function isFunction(a){return'[object Function]'===(0,_utils.getObjectType)(a)||'[object AsyncFunction]'===(0,_utils.getObjectType)(a)},isBoolean:function isBoolean(a){return!0===a||!1===a||'[object Boolean]'===(0,_utils.getObjectType)(a)},isNumber:function isNumber(a){return'number'==typeof a||'[object Number]'===(0,_utils.getObjectType)(a)},isNull:function isNull(a){return null===a},isUndefined:function isUndefined(a){return'undefined'==typeof a},isGeneratorFn:function isGeneratorFn(a){if('function'!=typeof a)return!1;var b=a.constructor&&'GeneratorFunction'===a.constructor.name,c='[object GeneratorFunction]'===Object.prototype.toString.call(a);return b||c},isMap:function isMap(a){return'[object Map]'===(0,_utils.getObjectType)(a)},isWeakMap:function isWeakMap(a){return'[object WeakMap]'===(0,_utils.getObjectType)(a)},isEmpty:function isEmpty(a){return''===a},isSet:function isSet(a){return'[object Set]'===(0,_utils.getObjectType)(a)},isWeakSet:function isWeakSet(a){return'[object WeakSet]'===(0,_utils.getObjectType)(a)}}}();exports.default=WHAT_DATA_TYPE,module.exports=exports['default'];