(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["liyad"] = factory();
	else
		root["liyad"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: installCore, installArithmetic, installSequence, installJsx, installConcurrent, builtinOperators, builtinMacros, builtinSymbols, FatalError, MaxEvaluationCountError, ScriptTerminationError, quote, isQuoted, backquote, isBackquoted, wrapByUnquote, isUnquoted, spread, splice, isSymbol, defaultReservedNames, defaultConfig, SExpression, SExpressionAsync, S, L, LS, lisp, L_async, LS_async, lisp_async, LM, LM_async, LSX, LSX_async, runScriptTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinOperators", function() { return builtinOperators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinMacros", function() { return builtinMacros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builtinSymbols", function() { return builtinSymbols; });
/* harmony import */ var _s_exp_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s-exp/types */ "./src/s-exp/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FatalError", function() { return _s_exp_types__WEBPACK_IMPORTED_MODULE_0__["FatalError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaxEvaluationCountError", function() { return _s_exp_types__WEBPACK_IMPORTED_MODULE_0__["MaxEvaluationCountError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptTerminationError", function() { return _s_exp_types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]; });

/* harmony import */ var _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./s-exp/ast */ "./src/s-exp/ast.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quote", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["quote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isQuoted", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["isQuoted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backquote", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["backquote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBackquoted", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["isBackquoted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapByUnquote", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["wrapByUnquote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnquoted", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["isUnquoted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["spread"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splice", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["splice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _s_exp_ast__WEBPACK_IMPORTED_MODULE_1__["isSymbol"]; });

/* harmony import */ var _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s-exp/s-expression */ "./src/s-exp/s-expression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultReservedNames", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["defaultReservedNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SExpression", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["SExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SExpressionAsync", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["SExpressionAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LS", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["LS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lisp", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["lisp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["L_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LS_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["LS_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lisp_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["lisp_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LM", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["LM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LM_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["LM_async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LSX", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["LSX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LSX_async", function() { return _s_exp_s_expression__WEBPACK_IMPORTED_MODULE_2__["LSX_async"]; });

/* harmony import */ var _s_exp_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s-exp/browser */ "./src/s-exp/browser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runScriptTags", function() { return _s_exp_browser__WEBPACK_IMPORTED_MODULE_3__["runScriptTags"]; });

/* harmony import */ var _s_exp_operators_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./s-exp/operators/core */ "./src/s-exp/operators/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installCore", function() { return _s_exp_operators_core__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _s_exp_operators_arithmetic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./s-exp/operators/arithmetic */ "./src/s-exp/operators/arithmetic/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installArithmetic", function() { return _s_exp_operators_arithmetic__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _s_exp_operators_sequence__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./s-exp/operators/sequence */ "./src/s-exp/operators/sequence/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installSequence", function() { return _s_exp_operators_sequence__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _s_exp_operators_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./s-exp/operators/jsx */ "./src/s-exp/operators/jsx/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installJsx", function() { return _s_exp_operators_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _s_exp_operators_concurrent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./s-exp/operators/concurrent */ "./src/s-exp/operators/concurrent/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installConcurrent", function() { return _s_exp_operators_concurrent__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _s_exp_operators_core_core_operator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./s-exp/operators/core/core.operator */ "./src/s-exp/operators/core/core.operator.ts");
/* harmony import */ var _s_exp_operators_core_core_macro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./s-exp/operators/core/core.macro */ "./src/s-exp/operators/core/core.macro.ts");
/* harmony import */ var _s_exp_operators_core_core_symbol__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./s-exp/operators/core/core.symbol */ "./src/s-exp/operators/core/core.symbol.ts");
/* harmony import */ var _s_exp_operators_arithmetic_arithmetic_operator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./s-exp/operators/arithmetic/arithmetic.operator */ "./src/s-exp/operators/arithmetic/arithmetic.operator.ts");
/* harmony import */ var _s_exp_operators_arithmetic_arithmetic_macro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./s-exp/operators/arithmetic/arithmetic.macro */ "./src/s-exp/operators/arithmetic/arithmetic.macro.ts");
/* harmony import */ var _s_exp_operators_arithmetic_arithmetic_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./s-exp/operators/arithmetic/arithmetic.symbol */ "./src/s-exp/operators/arithmetic/arithmetic.symbol.ts");
/* harmony import */ var _s_exp_operators_sequence_sequence_operator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./s-exp/operators/sequence/sequence.operator */ "./src/s-exp/operators/sequence/sequence.operator.ts");
/* harmony import */ var _s_exp_operators_sequence_sequence_macro__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./s-exp/operators/sequence/sequence.macro */ "./src/s-exp/operators/sequence/sequence.macro.ts");
/* harmony import */ var _s_exp_operators_sequence_sequence_symbol__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./s-exp/operators/sequence/sequence.symbol */ "./src/s-exp/operators/sequence/sequence.symbol.ts");
/* harmony import */ var _s_exp_operators_jsx_jsx_operator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./s-exp/operators/jsx/jsx.operator */ "./src/s-exp/operators/jsx/jsx.operator.ts");
/* harmony import */ var _s_exp_operators_jsx_jsx_macro__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./s-exp/operators/jsx/jsx.macro */ "./src/s-exp/operators/jsx/jsx.macro.ts");
/* harmony import */ var _s_exp_operators_jsx_jsx_symbol__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./s-exp/operators/jsx/jsx.symbol */ "./src/s-exp/operators/jsx/jsx.symbol.ts");
/* harmony import */ var _s_exp_operators_concurrent_concurrent_operator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./s-exp/operators/concurrent/concurrent.operator */ "./src/s-exp/operators/concurrent/concurrent.operator.ts");
/* harmony import */ var _s_exp_operators_concurrent_concurrent_macro__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./s-exp/operators/concurrent/concurrent.macro */ "./src/s-exp/operators/concurrent/concurrent.macro.ts");
/* harmony import */ var _s_exp_operators_concurrent_concurrent_symbol__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./s-exp/operators/concurrent/concurrent.symbol */ "./src/s-exp/operators/concurrent/concurrent.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
























const builtinOperators = {
  core: _s_exp_operators_core_core_operator__WEBPACK_IMPORTED_MODULE_9__["default"],
  arithmetic: _s_exp_operators_arithmetic_arithmetic_operator__WEBPACK_IMPORTED_MODULE_12__["default"],
  sequence: _s_exp_operators_sequence_sequence_operator__WEBPACK_IMPORTED_MODULE_15__["default"],
  jsx: _s_exp_operators_jsx_jsx_operator__WEBPACK_IMPORTED_MODULE_18__["default"],
  concurrent: _s_exp_operators_concurrent_concurrent_operator__WEBPACK_IMPORTED_MODULE_21__["default"]
};
const builtinMacros = {
  core: _s_exp_operators_core_core_macro__WEBPACK_IMPORTED_MODULE_10__["default"],
  arithmetic: _s_exp_operators_arithmetic_arithmetic_macro__WEBPACK_IMPORTED_MODULE_13__["default"],
  sequence: _s_exp_operators_sequence_sequence_macro__WEBPACK_IMPORTED_MODULE_16__["default"],
  jsx: _s_exp_operators_jsx_jsx_macro__WEBPACK_IMPORTED_MODULE_19__["default"],
  concurrent: _s_exp_operators_concurrent_concurrent_macro__WEBPACK_IMPORTED_MODULE_22__["default"]
};
const builtinSymbols = {
  core: _s_exp_operators_core_core_symbol__WEBPACK_IMPORTED_MODULE_11__["default"],
  arithmetic: _s_exp_operators_arithmetic_arithmetic_symbol__WEBPACK_IMPORTED_MODULE_14__["default"],
  sequence: _s_exp_operators_sequence_sequence_symbol__WEBPACK_IMPORTED_MODULE_17__["default"],
  jsx: _s_exp_operators_jsx_jsx_symbol__WEBPACK_IMPORTED_MODULE_20__["default"],
  concurrent: _s_exp_operators_concurrent_concurrent_symbol__WEBPACK_IMPORTED_MODULE_23__["default"]
};

/***/ }),

/***/ "./src/lib/data.ts":
/*!*************************!*\
  !*** ./src/lib/data.ts ***!
  \*************************/
/*! exports provided: Query, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
// Copyright (c) 2017, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class Query {
  constructor(data) {
    this.data = data;
  }

  orderBy(condition) {
    let fn;

    if (Array.isArray(condition)) {
      fn = (x, y) => {
        for (const c of condition) {
          if (typeof c === 'string') {
            if (x[c] > y[c]) return 1;
            if (x[c] < y[c]) return -1;
          } else {
            const desc = c[1] === 'desc' ? -1 : 1;
            if (x[c[0]] > y[c[0]]) return 1 * desc;
            if (x[c[0]] < y[c[0]]) return -1 * desc;
          }
        }

        return 0;
      };
    } else {
      fn = condition;
    }

    return new Query(this.data.slice(0).sort(fn));
  }

  groupBy(condition) {
    let fn;

    if (Array.isArray(condition)) {
      fn = (x, y) => {
        for (const c of condition) {
          if (x[c] !== y[c]) return false;
        }

        return true;
      };
    } else {
      fn = condition;
    }

    const r = [];
    let start = 0;
    let i = 1;

    for (; i < this.data.length; i++) {
      if (!fn(this.data[start], this.data[i], i, this.data)) {
        r.push(this.data.slice(start, i));
        start = i;
      }
    }

    r.push(this.data.slice(start, i));
    return new Query(r);
  }

  groupEvery(n) {
    if (typeof n === 'number') {
      return this.groupBy((a, b, index, array) => {
        if (index % n === 0) return false;
        return true;
      });
    } else {
      const w = Object.assign({
        first: n.intermediate,
        last: n.intermediate
      }, n);
      const r = this.groupBy((a, b, index, array) => {
        if (w.single >= array.length) {
          if (index % w.single === 0) return false;
          return true;
        } else if (index <= w.first) {
          if (index % w.first === 0) return false;
          return true;
        } else {
          if ((index - w.first) % w.intermediate === 0) return false;
          return true;
        }
      });

      if (r.data.length === 1) {
        if (w.single < r.data[0].length) {
          r.data.push([]);
        }
      } else {
        if (w.first < r.data[0].length) {
          // case of w.first === 0
          r.data.unshift([]);
        }
      }

      if (r.data.length > 1) {
        if (r.data[r.data.length - 1].length > w.last) {
          r.data.push([]);
        }
      }

      return r;
    }
  }

  where(fn) {
    return new Query(this.data.filter(fn));
  }

  select(fn) {
    return fn ? this.data.map(fn) : this.data;
  }

}
function query(data) {
  return new Query(data);
}

/***/ }),

/***/ "./src/s-exp/ast.ts":
/*!**************************!*\
  !*** ./src/s-exp/ast.ts ***!
  \**************************/
/*! exports provided: quote, isQuoted, backquote, isBackquoted, wrapByUnquote, isUnquoted, spread, splice, isSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quote", function() { return quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuoted", function() { return isQuoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backquote", function() { return backquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBackquoted", function() { return isBackquoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapByUnquote", function() { return wrapByUnquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnquoted", function() { return isUnquoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splice", function() { return splice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
function quote(state, x) {
  return [{
    symbol: state.config.reservedNames.quote
  }, x];
}
function isQuoted(state, x) {
  if (Array.isArray(x) && 0 < x.length) {
    const q = isSymbol(x);

    if (q && q.symbol === state.config.reservedNames.quote) {
      return true;
    }
  }

  return false;
}
function backquote(state, x) {
  return [{
    symbol: state.config.reservedNames.backquote
  }, x];
}
function isBackquoted(state, x) {
  if (Array.isArray(x) && 0 < x.length) {
    const q = isSymbol(x);

    if (q && q.symbol === state.config.reservedNames.backquote) {
      return true;
    }
  }

  return false;
}
function wrapByUnquote(state, x) {
  return [{
    symbol: state.config.reservedNames.unquote
  }, x];
}
function isUnquoted(state, x) {
  if (Array.isArray(x) && 0 < x.length) {
    const q = isSymbol(x);

    if (q && q.symbol === state.config.reservedNames.unquote) {
      return true;
    }
  }

  return false;
}
function spread(state, x) {
  return [{
    symbol: state.config.reservedNames.spread
  }, x];
}
function splice(state, x) {
  return [{
    symbol: state.config.reservedNames.splice
  }, x];
}
function isSymbol(x, name) {
  if (x && typeof x === 'object' && Object.prototype.hasOwnProperty.call(x, 'symbol')) {
    if (name !== void 0) {
      return x.symbol === name ? x : null;
    } else {
      return x;
    }
  }

  return null;
}

/***/ }),

/***/ "./src/s-exp/browser.ts":
/*!******************************!*\
  !*** ./src/s-exp/browser.ts ***!
  \******************************/
/*! exports provided: runScriptTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runScriptTags", function() { return runScriptTags; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
function runScriptTags(lisp, globals, contentType = 'text/lisp') {
  const codes = document.querySelectorAll(`script[type="${contentType}"]`);
  const cs = [];

  for (let i = 0; i < codes.length; i++) {
    cs.push(codes[i].innerHTML);
  }

  lisp = lisp.appendGlobals(globals || {});
  return lisp(cs.join('\n'));
}

/***/ }),

/***/ "./src/s-exp/compile.ops/helpers.ts":
/*!******************************************!*\
  !*** ./src/s-exp/compile.ops/helpers.ts ***!
  \******************************************/
/*! exports provided: applyMacros, stripQuote, stripQuoteOrPass, getScope_stateApplied, resolveValueSymbol_dynamic, checkUnsafeVarNames_dynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMacros", function() { return applyMacros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripQuote", function() { return stripQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripQuoteOrPass", function() { return stripQuoteOrPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScope_stateApplied", function() { return getScope_stateApplied; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValueSymbol_dynamic", function() { return resolveValueSymbol_dynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUnsafeVarNames_dynamic", function() { return checkUnsafeVarNames_dynamic; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function applyMacros(state, tok) {
  let r = tok;

  for (;;) {
    if (Array.isArray(r)) {
      if (r.length === 0) {
        break;
      }

      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveSplice"])(state, r);
      const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[0]);

      if (sym) {
        const m = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveMacro"])(state, sym, r);

        if (m) {
          r = m.fn(m.actualArgs);
        } else {
          break;
        }
      } else {
        break;
      }
    } else {
      break;
    }

    Object(_errors__WEBPACK_IMPORTED_MODULE_2__["setEvaluationCount"])(state);
  }

  return r;
}
function stripQuote(state, tok) {
  if (!(Array.isArray(tok) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(tok[0], state.config.reservedNames.quote))) {
    throw new Error(`[SX] stripQuote: token is not quoted.`);
  }

  return tok[1];
}
function stripQuoteOrPass(state, tok) {
  if (Array.isArray(tok) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(tok[0], state.config.reservedNames.quote)) {
    return tok[1];
  } else {
    return tok;
  }
}
function getScope_stateApplied(state) {
  return function () {
    return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["getScope"])(state);
  };
}
function resolveValueSymbol_dynamic(state, varName) {
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNames"])('(compiler)resolveValueSymbol_dynamic', varName);
  return function () {
    return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["resolveValueSymbol"])(state, {
      symbol: varName
    });
  };
}
function checkUnsafeVarNames_dynamic(name) {
  return function (varName) {
    return Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNames"])(name, varName);
  };
}

/***/ }),

/***/ "./src/s-exp/compile.ops/index.ts":
/*!****************************************!*\
  !*** ./src/s-exp/compile.ops/index.ts ***!
  \****************************************/
/*! exports provided: registerOperators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOperators", function() { return registerOperators; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/s-exp/compile.ops/helpers.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function registerOperators(state, ctx) {
  const {
    _$_vars,
    ops,
    makeScope,
    compileToken
  } = ctx;
  ops.set(state.config.reservedNames.quote, function (r, args) {
    let compFnBody = '';
    _$_vars[ctx.varsCount] = r[1];
    compFnBody += `(_$_vars[${String(ctx.varsCount++)}])`;
    return compFnBody;
  });
  ops.set(state.config.reservedNames.self, function (r, args) {
    let compFnBody = '';
    compFnBody += `((_$_vars[0])(${args.map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuoteOrPass"])(state, x)], 0)).join(',')}))`;
    return compFnBody;
  });
  ops.set('$__if', function (r, args) {
    // S expression: ($__if condition 't-expr 'f-expr)
    //  -> (if condition is true ) S expr  : t-expr
    //  -> (if condition is false) S expr  : f-expr
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__if', args, 2, 3);
    compFnBody += `(${compileToken(r, 1)}?(${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[2])], 0)}):(${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[3])], 0)}))`;
    return compFnBody;
  });
  ops.set('$__if-null', function (r, args) {
    // S expression: ($__if-null condition 'null-expr)
    //  -> (if condition is not null ) S expr  : condition
    //  -> (if condition is null)      S expr  : null-expr
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__if-null', args, 2, 2);
    compFnBody += `((()=>{let _$_rv=${compileToken(r, 1)};return _$_rv?_$_rv:(${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[2])], 0)}});})())`;
    return compFnBody;
  });
  ops.set('$__cond', function (r, args) {
    // S expression: ($__cond 'cond1 'expr1 ... 'condN 'exprN)
    //  -> (if (eval condI) is true ) S expr  : exprI
    //  -> (if no matched)            S expr  : null
    let compFnBody = '';
    {
      Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__cond', args, 1);
      compFnBody += `(`;

      for (let p = 0; p < args.length; p += 2) {
        compFnBody += `${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, args[p])], 0)}?(${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, args[p + 1])], 0)}):(`;
      }

      compFnBody += `null`;

      for (let p = 0; p < args.length; p += 2) {
        compFnBody += `)`;
      }

      compFnBody += `)`;
    }
    return compFnBody;
  });
  ops.set('$__while', function (r, args) {
    // S expression: ($__while 'condition 'expr1 ... 'exprN)
    //  -> (if condition is true at least 1 or more times) S expr  : exprN
    //  -> (else)                                          S expr  : null
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__while', args, 1);
    compFnBody += `((()=>{let _$_rv=null;while(${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1])], 0)}){_$_rv=${r.slice(2).map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join(',')}}return _$_rv})())`;
    return compFnBody;
  });
  ops.set('$__do-while', function (r, args) {
    // S expression: ($__do-while 'condition 'expr1 ... 'exprN)
    //  -> (if condition is true at least 1 or more times) S expr  : exprN
    //  -> (else)                                          S expr  : null
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__do-until', args, 1);
    compFnBody += `((()=>{let _$_rv=null;do{_$_rv=${r.slice(2).map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join(',')}}}while(${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1])], 0)})return _$_rv)())`;
    return compFnBody;
  });
  ops.set('$__until', function (r, args) {
    // S expression: ($__until 'condition 'expr1 ... 'exprN)
    //  -> (if condition is true at least 1 or more times) S expr  : exprN
    //  -> (else)                                          S expr  : null
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__until', args, 1);
    compFnBody += `((()=>{let _$_rv=null;while(!${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1])], 0)}){_$_rv=${r.slice(2).map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join(',')}}return _$_rv})())`;
    return compFnBody;
  });
  ops.set('$__do-until', function (r, args) {
    // S expression: ($__do-until 'condition 'expr1 ... 'exprN)
    //  -> (if condition is true at least 1 or more times) S expr  : exprN
    //  -> (else)                                          S expr  : null
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__do-until', args, 1);
    compFnBody += `((()=>{let _$_rv=null;do{_$_rv=${r.slice(2).map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join(',')}}}while(!${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1])], 0)})return _$_rv)())`;
    return compFnBody;
  });
  ops.set('$__repeat', function (r, args) {
    // S expression: ($__repeat 'i n-times 'expr1 ... 'exprN)
    //  -> (if n > 0) S expr  : exprN
    //  -> (else)     S expr  : null
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__repeat', args, 2);

    if (!Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(args[0])) {
      throw new Error(`[SX] compileToken: $__repeat : args[0] is not symbol.`);
    }

    makeScope(() => {
      const name = 'v' + ctx.varNamesCount++;
      ctx.varNames.set(args[0].symbol, name);
      compFnBody += `(((_$_n)=>{let _$_rv=null;for(let ${name}=0;${name}<_$_n;${name}++){_$_rv=${r.slice(2).map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join(',')}}return _$_rv})(${compileToken(args, 1)}))`;
    });
    return compFnBody;
  });
  ops.set('$__for', function (r, args) {
    // S expression: ($__for 'x list 'expr1 ... 'exprN)
    //  -> (if list.length > 0) S expr  : exprN
    //  -> (else)               S expr  : null
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__for', args, 2);

    if (!Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(args[0])) {
      throw new Error(`[SX] compileToken: $__for : args[0] is not symbol.`);
    }

    makeScope(() => {
      const name = 'v' + ctx.varNamesCount++;
      ctx.varNames.set(args[0].symbol, name);
      compFnBody += `(((_$_l)=>{let _$_rv=null;for(const ${name} of _$_l){_$_rv=${r.slice(2).map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join(',')}}return _$_rv})(${compileToken(args, 1)}))`;
    });
    return compFnBody;
  });
  ops.set('$__scope', function (r, args) {
    // S expression: ($__scope isBlockLocal returnMultiple '((name value) | name ...) 'expr1 ... 'exprN)
    //  -> (if returnMultiple)  S expr  : [expr1 ... exprN]
    //  -> (else)               S expr  : exprN
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__scope', args, 2); // r[1]: isBlockLocal
    // r[2]: returnMultiple

    if (!Array.isArray(r[3])) {
      throw new Error(`[SX] compileToken: $__scope : args[2] is not array.`);
    }

    makeScope(() => {
      for (const x of Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[3])) {
        let name = '';

        if (Array.isArray(x)) {
          if (x.length < 1) {
            throw new Error(`[SX] compileToken: $__scope : args[0][?] is too short.`);
          }

          if (!Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0])) {
            throw new Error(`[SX] compileToken: $__scope : args[0][?][0] is not symbol.`);
          }

          name = x[0].symbol;
          compFnBody += `(${'v' + ctx.varNamesCount}=${compileToken(x, 1)})`;
        } else {
          if (!Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x)) {
            throw new Error(`[SX] compileToken: $__scope : args[0][?] is not symbol.`);
          }

          name = x.symbol;
        }

        ctx.varDefs += `var v${ctx.varNamesCount}=void 0;`;
        ctx.varNames.set(name, 'v' + ctx.varNamesCount++);
      }

      const s = `${r.slice(4).map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join(',')}`;
      compFnBody += r[2] ? `[${s}]` : `(${s})`;
    });
    return compFnBody;
  });
  ops.set('$__try', function (r, args) {
    // S expression: ($__try 'expr 'catch-expr)
    //  ->                               S expr  : expr
    //  -> (if error is raised in expr)  S expr  : catch-expr
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__try', args, 1, 2);
    compFnBody += `((()=>{try{${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1])], 0)}}catch(e${ctx.varNamesCount}){let e${ctx.varNamesCount + 1}=(_$_vars[${String(ctx.varsCount)}])();`;
    _$_vars[ctx.varsCount++] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getScope_stateApplied"])(state);
    makeScope(() => {
      ctx.varNames.set('$error', 'e' + ctx.varNamesCount++);
      ctx.varNames.set('$parent', 'e' + ctx.varNamesCount++);
      compFnBody += `${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[2])], 0)}}})())`;
    });
    return compFnBody;
  });
  ops.set(state.config.reservedNames.raise, function (r, args) {
    // S expression: ($raise 'expr)
    //  -> S expr  : -
    let compFnBody = '';
    compFnBody += `((()=>{throw ${compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuoteOrPass"])(state, r[1])], 0)}})())`;
    return compFnBody;
  });
  ops.set('$boolean', function (r, args) {
    // S expression: ($boolean any)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$boolean', args, 1, 1);
    compFnBody += `((x0=${compileToken(args, 0)}),(Array.isArray(x0)&&x0.length===0?false:boolean(x0)))`;
    return compFnBody;
  });
  ops.set('$__get', function (r, args) {
    // S expression: ($__get 'nameOrIndex1 ... 'nameOrIndexN)
    //  -> S expr  : any
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__get', args, 1);
    const quoted = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1]);
    const name = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(quoted) ? quoted.symbol : typeof quoted === 'string' ? quoted : null;

    if (typeof name !== 'string') {
      throw new Error(`[SX] compileToken: $__get : operand is not symbol: ${JSON.stringify(r[1])}.`);
    }

    let vName = '';

    if (ctx.varNames.has(name)) {
      vName = ctx.varNames.get(name);
    } else {
      _$_vars[ctx.varsCount] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["resolveValueSymbol_dynamic"])(state, name);
      vName = `_$_vars[${String(ctx.varsCount++)}]`;
    }

    const regToVars = symName => {
      _$_vars[ctx.varsCount] = symName;
      return `_$_vars[${String(ctx.varsCount++)}]`;
    };

    compFnBody += `((${vName})${r.slice(2).map((x, idx, arr) => `[${Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(arr[idx]) ? regToVars(arr[idx].symbol) : compileToken(arr, idx)}]`).join('')})`;
    return compFnBody;
  });
  ops.set('$__let', function (r, args) {
    // S expression: ($__let 'nameStrOrSymbol expr)
    //  -> S expr  : any
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__let', args, 2, 2);
    const quoted = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1]);
    const name = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(quoted) ? quoted.symbol : typeof quoted === 'string' ? quoted : null;

    if (typeof name !== 'string') {
      throw new Error(`[SX] compileToken: $__let : operand is not rvalue: ${JSON.stringify(r[1])}.`);
    }

    if (!ctx.varNames.has(name)) {
      ctx.varDefs += `var v${ctx.varNamesCount}=void 0;`;
      ctx.varNames.set(name, 'v' + ctx.varNamesCount++);
    }

    compFnBody += `(${ctx.varNames.get(name)}=${compileToken(r, 2)})`;
    return compFnBody;
  });
  ops.set('$__set', function (r, args) {
    // S expression: ($__set 'nameOrListOfNameOrIndex expr)
    //  -> S expr  : any
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__set', args, 2);
    const quoted = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, r[1]);
    const name = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(quoted) ? quoted.symbol : typeof quoted === 'string' ? quoted : Array.isArray(quoted) ? Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(quoted[0]) ? quoted[0].symbol : typeof quoted[0] === 'string' ? quoted[0] : null : null;

    if (typeof name !== 'string') {
      throw new Error(`[SX] compileToken: $__set : operand is not rvalue: ${JSON.stringify(r[1])}.`);
    }

    let vName = '';

    if (ctx.varNames.has(name)) {
      vName = ctx.varNames.get(name);
    } else {
      _$_vars[ctx.varsCount] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["resolveValueSymbol_dynamic"])(state, name);
      vName = `_$_vars[${String(ctx.varsCount++)}]`;
    }

    const regToVars = symName => {
      _$_vars[ctx.varsCount] = Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkUnsafeVarNames"])('compileToken:$__set', symName);
      return `_$_vars[${String(ctx.varsCount++)}]`;
    };

    let checkNameCalled = false;
    let checkNamePos = '';

    const checkName = str => {
      if (!checkNameCalled) {
        _$_vars[ctx.varsCount] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNames_dynamic"])('compileToken:$__set');
        checkNamePos = String(ctx.varsCount++);
        checkNameCalled = true;
      }

      return `(_$_vars[${checkNamePos}](${str}))`;
    };

    compFnBody += `((${vName})${(Array.isArray(quoted) ? quoted.slice(1) : []).map((x, idx, arr) => `[${Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(arr[idx]) ? regToVars(arr[idx].symbol) : checkName(compileToken(arr, idx))}]`).join('')}=${compileToken(r, 2)})`;
    return compFnBody;
  });
  ops.set(state.config.reservedNames.not, function (r, args) {
    // S expression: ($not any)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$not', args, 1, 1);
    compFnBody += `(!${compileToken(args, 0)})`;
    return compFnBody;
  });
  ops.set('$__and', function (r, args) {
    // S expression: ($__and 'expr1 ... 'exprN)
    //  -> (if all of ($boolean expr1) ... ($boolean exprN) are true) S expr  : exprN
    //  -> (else)                                                     S expr  : expr-i (false left most)
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__and', args, 1);
    compFnBody += `(${args.map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join('&&')})`;
    return compFnBody;
  });
  ops.set('$__or', function (r, args) {
    // S expression: ($__or 'expr1 ... 'exprN)
    //  -> (if any ($boolean expr1) ... ($boolean exprN) are true) S expr  : expr-i (where i: index of item first ($boolean expr-i) is to be true)
    //  -> (else)                                                  S expr  : expr-i (false right most)
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$__or', args, 1);
    compFnBody += `(${args.map(x => compileToken([Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["stripQuote"])(state, x)], 0)).join('||')})`;
    return compFnBody;
  });
  ops.set('===', function (r, args) {
    // S expression: ($eq arg1 arg2)
    //  -> (if arg1 === arg2)  S expr  : true
    //  -> (else)              S expr  : false
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:===', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('===')})`;
    return compFnBody;
  });
  ops.set('!==', function (r, args) {
    // S expression: ($not-eq arg1 arg2)
    //  -> (if arg1 !== arg2)  S expr  : true
    //  -> (else)              S expr  : false
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:!==', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('!==')})`;
    return compFnBody;
  });
  ops.set('==', function (r, args) {
    // S expression: (== a b)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:==', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('==')})`;
    return compFnBody;
  });
  ops.set('!=', function (r, args) {
    // S expression: (!= a b)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:!=', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('!=')})`;
    return compFnBody;
  });
  ops.set('<', function (r, args) {
    // S expression: (< a b)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:<', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('<')})`;
    return compFnBody;
  });
  ops.set('<=', function (r, args) {
    // S expression: (<= a b)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:<=', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('<=')})`;
    return compFnBody;
  });
  ops.set('>', function (r, args) {
    // S expression: (> a b)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:>', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('>')})`;
    return compFnBody;
  });
  ops.set('>=', function (r, args) {
    // S expression: (>= a b)
    //  -> S expr  : boolean
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:<=', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('>=')})`;
    return compFnBody;
  });
  ops.set('$concat', function (r, args) {
    // S expression: ($concat listOrString1 ... listOrStringN)
    //  -> S expr  : listOrString
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$concat', args, 1);
    let w1 = '';

    if (Array.isArray(args[0]) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(args[0][0], state.config.reservedNames.spread)) {
      const w0 = compileToken(args[0], 1);
      w1 = `(${w0}[0]).concat((${w0}.length>1?${w0}[1]:(typeof ${w0}[0]==='string'?'':[])),`;
    } else {
      w1 = `${compileToken(args, 0)}.concat(`;
    }

    compFnBody += `(${w1}${args.slice(1).map((x, idx, arr) => compileToken(arr, idx)).join(',')}))`;
    return compFnBody;
  });
  ops.set('+', function (r, args) {
    // S expression: (+ number1 ... numberN)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:+', args, 1);
    let hasSpread = false;
    args.map((x, idx, arr) => {
      if (Array.isArray(x) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0], state.config.reservedNames.spread)) {
        hasSpread = true;
      }
    });

    if (hasSpread) {
      compFnBody += `((()=>{let _$_rv=[];${args.map((x, idx, arr) => `_$_rv.push(${compileToken(arr, idx)})`).join(';')};return _$_rv.reduce((x,y)=>x+y);})())`;
    } else {
      compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('+')})`;
    }

    return compFnBody;
  });
  ops.set('-', function (r, args) {
    // S expression: (- number1 ... numberN)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:-', args, 1);
    let hasSpread = false;
    args.map((x, idx, arr) => {
      if (Array.isArray(x) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0], state.config.reservedNames.spread)) {
        hasSpread = true;
      }
    });

    if (hasSpread) {
      compFnBody += `((()=>{let _$_rv=[];${args.map((x, idx, arr) => `_$_rv.push(${compileToken(arr, idx)})`).join(';')};return (_$_rv.length>1?(_$_rv.reduce((x,y)=>x-y)):(_$_rv.length>0?-_$_rv[0]:NaN));})())`;
    } else {
      compFnBody += `(${r.length > 2 ? args.map((x, idx, arr) => compileToken(arr, idx)).join('-') : `-(${String(compileToken(r, 1))})`})`;
    }

    return compFnBody;
  });
  ops.set('*', function (r, args) {
    // S expression: (* number1 ... numberN)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:*', args, 2);
    let hasSpread = false;
    args.map((x, idx, arr) => {
      if (Array.isArray(x) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0], state.config.reservedNames.spread)) {
        hasSpread = true;
      }
    });

    if (hasSpread) {
      compFnBody += `((()=>{let _$_rv=[];${args.map((x, idx, arr) => `_$_rv.push(${compileToken(arr, idx)})`).join(';')};return _$_rv.reduce((x,y)=>x*y);})())`;
    } else {
      compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('*')})`;
    }

    return compFnBody;
  });
  ops.set('**', function (r, args) {
    // S expression: (** number1 ... numberN)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:**', args, 2);
    let hasSpread = false;
    args.map((x, idx, arr) => {
      if (Array.isArray(x) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0], state.config.reservedNames.spread)) {
        hasSpread = true;
      }
    });

    if (hasSpread) {
      compFnBody += `((()=>{let _$_rv=[];${args.map((x, idx, arr) => `_$_rv.push(${compileToken(arr, idx)})`).join(';')};return _$_rv.reduce((x,y)=>x**y);})())`;
    } else {
      compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('**')})`;
    }

    return compFnBody;
  });
  ops.set('/', function (r, args) {
    // S expression: (/ number1 ... numberN)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:/', args, 2);
    let hasSpread = false;
    args.map((x, idx, arr) => {
      if (Array.isArray(x) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0], state.config.reservedNames.spread)) {
        hasSpread = true;
      }
    });

    if (hasSpread) {
      compFnBody += `((()=>{let _$_rv=[];${args.map((x, idx, arr) => `_$_rv.push(${compileToken(arr, idx)})`).join(';')};return _$_rv.reduce((x,y)=>x/y);})())`;
    } else {
      compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('/')})`;
    }

    return compFnBody;
  });
  ops.set('%', function (r, args) {
    // S expression: (% number1 ... numberN)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:%', args, 2);
    let hasSpread = false;
    args.map((x, idx, arr) => {
      if (Array.isArray(x) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0], state.config.reservedNames.spread)) {
        hasSpread = true;
      }
    });

    if (hasSpread) {
      compFnBody += `((()=>{let _$_rv=[];${args.map((x, idx, arr) => `_$_rv.push(${compileToken(arr, idx)})`).join(';')};return _$_rv.reduce((x,y)=>x%y);})())`;
    } else {
      compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('%')})`;
    }

    return compFnBody;
  });
  ops.set('<<', function (r, args) {
    // S expression: (<< number shift)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:<<', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('<<')})`;
    return compFnBody;
  });
  ops.set('>>', function (r, args) {
    // S expression: (>> number shift)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:>>', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('>>')})`;
    return compFnBody;
  });
  ops.set('>>>', function (r, args) {
    // S expression: (>>> number shift)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:>>>', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('>>>')})`;
    return compFnBody;
  });
  ops.set('$bit-not', function (r, args) {
    // S expression: ($bit-not number)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$bit-not', args, 1, 1);
    compFnBody += `(~(${compileToken(r, 1)}))`;
    return compFnBody;
  });
  ops.set('$bit-and', function (r, args) {
    // S expression: ($bit-and numberA numberB)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$bit-and', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('&')})`;
    return compFnBody;
  });
  ops.set('$bit-or', function (r, args) {
    // S expression: ($bit-or numberA numberB)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$bit-or', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('|')})`;
    return compFnBody;
  });
  ops.set('$bit-xor', function (r, args) {
    // S expression: ($bit-xor numberA numberB)
    //  -> S expr  : number
    let compFnBody = '';
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('compileToken:$bit-xor', args, 2, 2);
    compFnBody += `(${args.map((x, idx, arr) => compileToken(arr, idx)).join('^')})`;
    return compFnBody;
  });
}

/***/ }),

/***/ "./src/s-exp/compile.ts":
/*!******************************!*\
  !*** ./src/s-exp/compile.ts ***!
  \******************************/
/*! exports provided: compileLambda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileLambda", function() { return compileLambda; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compile.ops/helpers */ "./src/s-exp/compile.ops/helpers.ts");
/* harmony import */ var _compile_ops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compile.ops */ "./src/s-exp/compile.ops/index.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




 // tslint:disable-next-line:variable-name

function compileCore(state, formalArgs, lastIsSpread, fnBody, _$_vars) {
  function makeScope(scoped) {
    const varNamesCopy = new Map();

    for (const x of ctx.varNames.entries()) {
      varNamesCopy.set(x[0], x[1]);
    }

    scoped();
    ctx.varNames = varNamesCopy;
  }

  function compileValue(b) {
    let compFnBody = '';

    if (b === null) {
      compFnBody += '(null)';
    } else if (b === void 0) {
      compFnBody += '(void 0)';
    } else switch (typeof b) {
      case 'boolean':
      case 'number':
        compFnBody += `(${String(b)})`;
        break;

      case 'object':
        if (Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(b)) {
          const sym = b;
          Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNamesEx"])('(compiler)compileValue', ctx.varNames, sym.symbol);

          if (ctx.varNames.has(sym.symbol)) {
            compFnBody += `(${ctx.varNames.get(sym.symbol)})`;
          } else {
            _$_vars[ctx.varsCount] = sym.symbol;
            compFnBody += `(_$_vars[${String(ctx.varsCount++)}])`;
          }

          break;
        } else {}

      // FALL_THRU

      default:
        _$_vars[ctx.varsCount] = b;
        compFnBody += `(_$_vars[${String(ctx.varsCount++)}])`;
        break;
    }

    return compFnBody;
  }

  function compileToken(body, i) {
    let compFnBody = '';
    const b = body[i];

    if (Array.isArray(b)) {
      if (0 < b.length) {
        const r = Object(_compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__["applyMacros"])(state, b);

        if (Array.isArray(r)) {
          if (0 < r.length) {
            if (Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[0])) {
              const sym = r[0];
              const args = r.slice(1);
              Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNamesEx"])('(compiler)compileToken', ops, sym.symbol);

              if (ops.has(sym.symbol)) {
                compFnBody += ops.get(sym.symbol)(r, args);
              } else {
                if (sym.symbol === state.config.reservedNames.spread) {
                  compFnBody += `...(${args.map(x => compileToken([Object(_compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__["stripQuoteOrPass"])(state, x)], 0)).join(',')})`;
                } else if (state.funcMap.has(sym.symbol)) {
                  _$_vars[ctx.varsCount] = state.funcMap.get(sym.symbol).fn(state, '');
                  compFnBody += `((_$_vars[${String(ctx.varsCount++)}])(${args.map(x => compileToken([Object(_compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__["stripQuoteOrPass"])(state, x)], 0)).join(',')}))`;
                } else if (ctx.varNames.has(sym.symbol)) {
                  compFnBody += `(${String(ctx.varNames.get(sym.symbol))})(${args.map(x => compileToken([Object(_compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__["stripQuoteOrPass"])(state, x)], 0)).join(',')})`;
                } else {
                  _$_vars[ctx.varsCount] = Object(_compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__["resolveValueSymbol_dynamic"])(state, sym.symbol);
                  compFnBody += `((_$_vars[${String(ctx.varsCount++)}])()(${args.map(x => compileToken([Object(_compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__["stripQuoteOrPass"])(state, x)], 0)).join(',')}))`;
                }
              }
            } else {
              switch (typeof r[0]) {
                case 'function':
                  _$_vars[ctx.varsCount] = r[0];
                  compFnBody += `((_$_vars[${String(ctx.varsCount++)}])(${r.slice(1).map((x, idx, arr) => compileToken([Object(_compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__["stripQuoteOrPass"])(state, x)], 0)).join(',')}))`;
                  break;

                default:
                  throw new Error(`[SX] compileToken: First item of list is not a function: ${JSON.stringify(r[0])}.`);
              }
            }
          } else {
            compFnBody += '([])';
          }
        } else {
          compFnBody += compileValue(b);
        }
      } else {
        compFnBody += '([])';
      }
    } else {
      compFnBody += compileValue(b);
    }

    return compFnBody;
  }

  const ctx = {
    _$_vars,
    varsCount: 1,
    varNames: new Map(),
    varNamesCount: 0,
    varDefs: 'var x0;',
    ops: new Map(),
    makeScope,
    compileToken
  };
  Object(_compile_ops__WEBPACK_IMPORTED_MODULE_4__["registerOperators"])(state, ctx);
  const ops = ctx.ops;

  if (state.config.enableTailCallOptimization) {
    fnBody = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["optimizeTailCall"])(state, formalArgs, fnBody);
  } // set 'this' object


  ctx.varNames.set(state.config.reservedNames.thiz, `(this===(Function('return this')())?null:(this===void 0?null:this))`);
  const capturedScopes = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["getCapturedScopes"])(state);

  if (capturedScopes) {
    for (const x in capturedScopes) {
      if (Object.prototype.hasOwnProperty.call(capturedScopes, x)) {
        _$_vars[ctx.varsCount++] = x;
        _$_vars[ctx.varsCount] = capturedScopes[x];
        ctx.varNames.set(x, `(_$_vars[${String(ctx.varsCount)}][_$_vars[${String(ctx.varsCount - 1)}]])`);
        ctx.varsCount++;
      }
    }
  }

  const compFormalArgs = `${formalArgs.map((x, i) => {
    ctx.varNames.set(formalArgs[i].symbol, 'a' + i);
    return `${lastIsSpread && i === formalArgs.length - 1 ? '...' : ''}a${i}`;
  }).join(',')}`;
  const compFnBodyRoot = `return(${fnBody.map((x, i) => compileToken(fnBody, i)).join(',')})`;
  return `(function(${compFormalArgs}){"strict";${ctx.varDefs}${compFnBodyRoot}})`;
} // tslint:disable-next-line:variable-name


function evalCompiledLambda(_$_state, _$_vars, code) {
  // tslint:disable-next-line:no-eval
  _$_vars[0] = eval(code);
  return _$_vars[0];
}

function compileLambda(state, formalArgs, lastIsSpread, fnBody) {
  // tslint:disable-next-line:variable-name
  const _$_vars = [];
  return evalCompiledLambda(state, _$_vars, compileCore(state, formalArgs, lastIsSpread, fnBody, _$_vars));
}

/***/ }),

/***/ "./src/s-exp/consts.ts":
/*!*****************************!*\
  !*** ./src/s-exp/consts.ts ***!
  \*****************************/
/*! exports provided: globalObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalObj", function() { return globalObj; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
// tslint:disable-next-line:function-constructor
const globalObj = Function('return this')();

/***/ }),

/***/ "./src/s-exp/errors.ts":
/*!*****************************!*\
  !*** ./src/s-exp/errors.ts ***!
  \*****************************/
/*! exports provided: setEvaluationCount, checkParamsLength, checkUnsafeVarNames, checkUnsafeVarNamesEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEvaluationCount", function() { return setEvaluationCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkParamsLength", function() { return checkParamsLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUnsafeVarNames", function() { return checkUnsafeVarNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUnsafeVarNamesEx", function() { return checkUnsafeVarNamesEx; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/s-exp/types.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/s-exp/consts.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function setEvaluationCount(state) {
  state.evalCount++;

  if (state.config.maxEvalCount && state.config.maxEvalCount < state.evalCount) {
    throw new _types__WEBPACK_IMPORTED_MODULE_0__["MaxEvaluationCountError"]();
  }
}
function checkParamsLength(name, args, min, max) {
  if (args.length < min) {
    throw new Error(`[SX] ${name}: Invalid argument length: expected: ${min} / args: ${args.length}.`);
  }

  if (max && max < args.length) {
    throw new Error(`[SX] ${name}: Invalid argument length: expected: ${max} / args: ${args.length}.`);
  }

  return args;
}
const objConstructor = {}.constructor; // NOTE: objConstructor            === Object

const funConstructor = Function; // NOTE: ({}).toString.constructor === Function

function checkUnsafeVarNames(name, varName) {
  if (varName === '__proto__' || varName === '__defineGetter__' || varName === '__defineSetter__' || varName === '__lookupGetter__' || varName === '__lookupSetter__') {
    throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
  }

  if (varName === 'prototype' || varName === 'constructor') {
    throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
  }

  if (objConstructor.hasOwnProperty(varName)) {
    throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
  }

  if (varName === 'call' || varName === 'arguments' || varName === 'caller') {
    // NOTE: arguments, caller are not accessible in strict mode
    throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
  }

  return varName;
}
function checkUnsafeVarNamesEx(name, target, varName) {
  if (target === _consts__WEBPACK_IMPORTED_MODULE_1__["globalObj"] || varName === '__proto__' || varName === '__defineGetter__' || varName === '__defineSetter__' || varName === '__lookupGetter__' || varName === '__lookupSetter__') {
    throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
  }

  if (varName === 'prototype' || varName === 'constructor') {
    if (target === null || target === void 0 || typeof target === 'function') {
      throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
    }
  }

  if (target === null || target === void 0 || target === objConstructor) {
    if (objConstructor.hasOwnProperty(varName)) {
      throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
    }
  }

  if (target === null || target === void 0 || target === funConstructor) {
    // checking 'call', 'arguments', 'caller', ...
    let con = funConstructor;

    while (con) {
      if (con.hasOwnProperty(varName)) {
        throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
      }

      con = con.__proto__;
    }
  }

  if (typeof target === 'function') {
    if (!target.hasOwnProperty(varName)) {
      // function's prototypes' members
      throw new Error(`[SX] ${name}: Invalid var name ${varName}.`);
    }
  }

  return varName;
}

/***/ }),

/***/ "./src/s-exp/evaluate.ts":
/*!*******************************!*\
  !*** ./src/s-exp/evaluate.ts ***!
  \*******************************/
/*! exports provided: toNumber, resolveUnquote, resolveSplice, resolveMacro, resolveFunctionSymbol, resolveValueSymbolScope, resolveValueSymbol, collectCapturedVariables, getCapturedScopes, installScope, uninstallScope, getScope, getGlobalScope, matchMacroArgs, optimizeTailCall, evaluate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveUnquote", function() { return resolveUnquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSplice", function() { return resolveSplice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMacro", function() { return resolveMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFunctionSymbol", function() { return resolveFunctionSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValueSymbolScope", function() { return resolveValueSymbolScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValueSymbol", function() { return resolveValueSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectCapturedVariables", function() { return collectCapturedVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapturedScopes", function() { return getCapturedScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installScope", function() { return installScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uninstallScope", function() { return uninstallScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScope", function() { return getScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalScope", function() { return getGlobalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchMacroArgs", function() { return matchMacroArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeTailCall", function() { return optimizeTailCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluate", function() { return evaluate; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function toNumber(x) {
  switch (typeof x) {
    case 'object':
    case 'symbol':
    case 'function':
      return NaN;

    default:
      return Number(x);
  }
}
function resolveUnquote(state, r) {
  for (let i = 0; i < r.length; i++) {
    const symUnquote = Array.isArray(r[i]) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[i][0], state.config.reservedNames.unquote);

    if (symUnquote) {
      r = r.slice(0, i).concat([evaluate(state, r[i][1])], r.slice(i + 1));
    }

    if (Array.isArray(r[i])) {
      r = r.slice(0);
      r[i] = resolveUnquote(state, r[i]);
    }
  }

  return resolveSplice(state, r);
}
function resolveSplice(state, r) {
  if (state.config.enableSplice) {
    for (let i = r.length - 1; i >= 0; i--) {
      const symSplice = Array.isArray(r[i]) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[i][0], state.config.reservedNames.splice);

      if (symSplice) {
        r = r.slice(0, i).concat(r[i][1], r.slice(i + 1));
      }
    }
  }

  return r;
}
function resolveMacro(state, x, r) {
  const macroInfo = state.macroMap.get(x.symbol);
  let lastErr = null;

  if (macroInfo) {
    let m = macroInfo;
    const r1 = r.slice(1);

    while (m) {
      if (m.formalArgs) {
        const matchResult = matchMacroArgs(state, x.symbol, m.formalArgs, Boolean(m.lastIsSpread), r1);

        if (!matchResult.error) {
          return {
            fn: m.fn(state, x.symbol, matchResult.formalArgs),
            actualArgs: r.slice(0, 1).concat(matchResult.actualArgs)
          };
        }

        lastErr = matchResult.error;
        m = m.next;
      } else {
        return {
          fn: m.fn(state, x.symbol),
          actualArgs: r
        };
      }
    }

    if (lastErr) {
      throw new Error(lastErr);
    }
  }

  return false;
}
function resolveFunctionSymbol(state, x) {
  if (typeof x === 'function') {
    return x;
  }

  const funcInfo = state.funcMap.get(x.symbol);

  if (funcInfo) {
    return funcInfo.fn(state, x.symbol);
  } else {
    const v = resolveValueSymbol(state, x);

    if (typeof v === 'function') {
      return v;
    }

    if (state.config.funcSymbolResolverFallback) {
      return state.config.funcSymbolResolverFallback(state, x.symbol);
    }

    if (state.config.raiseOnUnresolvedSymbol) {
      throw new Error(`[SX] resolveFunctionSymbol: Unresolved symbol: ${x.symbol}.`);
    }

    return x.symbol;
  }
}
function resolveValueSymbolScope(state, x, nullIfNotDefined) {
  for (let i = state.scopes.length - 1; i > 0; i--) {
    const localScope = state.scopes[i];

    if (localScope && Object.prototype.hasOwnProperty.call(localScope.scope, x.symbol)) {
      return localScope.scope;
    }

    if (localScope.capturedScopes && Object.prototype.hasOwnProperty.call(localScope.capturedScopes, x.symbol)) {
      return localScope.capturedScopes[x.symbol];
    }

    if (!localScope.isBlockLocal) {
      break;
    }
  }

  const globalScope = getGlobalScope(state);

  if (Object.prototype.hasOwnProperty.call(globalScope.scope, x.symbol)) {
    return globalScope.scope;
  }

  return nullIfNotDefined ? null : getScope(state).scope;
}
function resolveValueSymbol(state, x) {
  const scope = resolveValueSymbolScope(state, x, true);

  if (scope) {
    return scope[x.symbol];
  }

  const symInfo = state.symbolMap.get(x.symbol);

  if (symInfo) {
    return symInfo.fn(state, x.symbol);
  } else {
    if (state.config.valueSymbolResolverFallback) {
      return state.config.valueSymbolResolverFallback(state, x.symbol);
    }

    if (state.config.raiseOnUnresolvedSymbol) {
      throw new Error(`[SX] resolveValueSymbol: Unresolved symbol: ${x.symbol}.`);
    }

    return x.symbol;
  }
}
function collectCapturedVariables(state, names) {
  const capturedScopes = {};

  for (const n of names) {
    const scope = resolveValueSymbolScope(state, n, true);

    if (scope === null) {
      throw new Error(`[SX] collectCapturedVariables: Unresolved symbols ${n}`);
    }

    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkUnsafeVarNamesEx"])('collectCapturedVariables', capturedScopes, n.symbol);
    capturedScopes[n.symbol] = scope;
  }

  return capturedScopes;
}
function getCapturedScopes(state) {
  const a = [];

  for (let i = state.scopes.length - 1; i > 0; i--) {
    const localScope = state.scopes[i];

    if (localScope.capturedScopes) {
      a.unshift(localScope.capturedScopes);
    }

    if (!localScope.isBlockLocal) {
      break;
    }
  }

  return a.length > 0 ? Object.assign({}, ...a) : void 0;
}
function installScope(state, scope, isBlockLocal, capturedScopes) {
  state.scopes.push({
    isBlockLocal,
    scope,
    capturedScopes
  });
}
function uninstallScope(state) {
  if (state.scopes.length < 2) {
    throw new Error(`[SX] uninstallScope: Unable to pop stack.`);
  }

  return state.scopes.pop();
}
function getScope(state) {
  return state.scopes[state.scopes.length - 1];
}
function getGlobalScope(state) {
  return state.scopes[0];
}
function matchMacroArgs(state, macroName, formalArgs, lastIsSpread, actualArgs) {
  formalArgs = formalArgs.slice(0);
  actualArgs = actualArgs.slice(0);

  if (actualArgs.length + (lastIsSpread ? 1 : 0) < formalArgs.length) {
    return {
      error: `[SX] macro call (${macroName}): Actual args too short: actual ${actualArgs.length} / formal ${formalArgs.length}.`
    };
  }

  for (let i = formalArgs.length - (lastIsSpread ? 2 : 1); i >= 0; i--) {
    let nm = formalArgs[i].symbol;

    if (nm.startsWith('!')) {
      formalArgs[i].symbol = formalArgs[i].symbol.slice(1);
      nm = formalArgs[i].symbol;

      if (!Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(actualArgs[i])) {
        return {
          error: `[SX] macro call (${macroName}): Actual arg(${i}: ${nm}) is not symbol.`
        };
      }
    } else if (nm.startsWith('<') && nm.endsWith('>')) {
      formalArgs[i].symbol = formalArgs[i].symbol.slice(1, -1);
      nm = formalArgs[i].symbol;

      if (Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(actualArgs[i], nm)) {
        formalArgs = formalArgs.slice(0, i).concat(formalArgs.slice(i + 1));
        actualArgs = actualArgs.slice(0, i).concat(actualArgs.slice(i + 1));
      } else {
        return {
          error: `[SX] macro call (${macroName}): Actual arg(${i}: ${nm}) is not expected symbol.`
        };
      }
    } else {
      const tpos = nm.lastIndexOf(':');

      if (0 < tpos) {
        const tname = nm.slice(tpos + 1);

        switch (tname) {
          case 'number':
            if (typeof actualArgs[i] !== 'number') {
              return {
                error: `[SX] macro call (${macroName}): Actual arg(${i}: ${nm}) is not number.`
              };
            }

            break;

          case 'string':
            if (typeof actualArgs[i] !== 'string') {
              return {
                error: `[SX] macro call (${macroName}): Actual arg(${i}: ${nm}) is not string.`
              };
            }

            break;

          case 'function':
            if (!(Array.isArray(actualArgs[i]) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(actualArgs[i][0]))) {
              return {
                error: `[SX] macro call (${macroName}): Actual arg(${i}: ${nm}) is not function.`
              };
            }

            break;

          case 'list':
            if (!Array.isArray(actualArgs[i])) {
              return {
                error: `[SX] macro call (${macroName}): Actual arg(${i}: ${nm}) is not list.`
              };
            }

            break;

          case 'symbol':
            if (!Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(actualArgs[i])) {
              return {
                error: `[SX] macro call (${macroName}): Actual arg(${i}: ${nm}) is not symbol.`
              };
            }

            break;

          case 'any':
            break;

          default:
            return {
              error: `[SX] macro call (${macroName}): Formal arg(${i}: ${nm}) is unknown type ${tname}.`
            };
        }

        formalArgs[i].symbol = formalArgs[i].symbol.slice(0, tpos);
      }
    }
  }

  return {
    formalArgs,
    actualArgs
  };
}
function optimizeTailCall(state, formalArgs, fnBody) {
  // S expression: ($__lambda '(sym1 ... symN) 'expr1 ... 'exprN)
  //    formalArgs: 'sym1 ... 'symN
  //        fnBody: 'expr1 ... 'exprN
  if (Array.isArray(fnBody[fnBody.length - 1])) {
    const front = fnBody.slice(0, fnBody.length - 1);
    const tail = fnBody[fnBody.length - 1];

    if (tail && typeof tail[0] === 'object' && tail[0].symbol === state.config.reservedNames.if) {
      // S expression: ($if cond t-expr f-expr)
      if (Array.isArray(tail[3]) && typeof tail[3][0] === 'object' && tail[3][0].symbol === state.config.reservedNames.self) {
        // S expression (recursive):
        //     (                                 ;; fnBody
        //         expr1 ... exprN-1             ;; front
        //         ($if cond                     ;; tail[0] [1]
        //             t-expr                    ;;     [2]
        //             ($self                    ;;     [3]
        //                 rArgs1 ... rArgsN) )  ;; tail[4] ... [N+4]
        //     )
        //
        //  -> S exp (tail call optimization):
        //     (                                                                  ;; fnBody
        //         ($until cond                                                   ;; tail[1]
        //             ($clisp-let (tempsym1 ... tempsymN)                        ;;
        //                 expr1 ... exprN-1                                      ;; front
        //                 ($set tempsym1   rArgs1) ... ($set tempsymN   rArgsN)  ;; tail[4] ... [N+4]
        //                 ($set     sym1 tempsym1) ... ($set     symN tempsymN)  ;;
        //             )                                                          ;;
        //         )                                                              ;;
        //         expr1 ... exprN-1                                              ;; front
        //         t-expr                                                         ;; tail[2]
        //     )
        const varBaseName = `$__tempvar__$$ec${state.evalCount++}$$_`;
        const tempVarsSyms = formalArgs.map((a, idx) => ({
          symbol: `${varBaseName}_$i${idx}_${a.symbol}`
        }));
        return [[{
          symbol: state.config.reservedNames.until
        }, tail[1], [{
          symbol: state.config.reservedNames.let
        }, [...tempVarsSyms], ...front, ...tail[3].slice(1).map((x, idx) => [{
          symbol: state.config.reservedNames.set
        }, tempVarsSyms[idx], x]), ...tempVarsSyms.map((x, idx) => [{
          symbol: state.config.reservedNames.set
        }, formalArgs[idx], x])]], ...front, tail[2]];
      }
    }
  }

  return fnBody;
}
function evaluate(state, x) {
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["setEvaluationCount"])(state);

  if (x === null || x === void 0) {
    return x;
  }

  let r = x;

  for (;;) {
    if (Array.isArray(r)) {
      if (r.length === 0) {
        return r;
      }

      r = resolveSplice(state, r);
      const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[0]);

      if (sym) {
        const m = resolveMacro(state, sym, r);

        if (m) {
          r = m.fn(m.actualArgs);
        } else {
          break;
        }
      } else {
        break;
      }
    } else {
      break;
    }

    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["setEvaluationCount"])(state);
  }

  if (Array.isArray(r)) {
    r = r.slice(0);

    if (0 < r.length) {
      const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[0]);

      if (sym) {
        if (sym.symbol === state.config.reservedNames.quote) {
          return r.slice(1, 2)[0];
        }

        if (sym.symbol === state.config.reservedNames.backquote) {
          r = r.slice(1, 2)[0];

          if (Array.isArray(r)) {
            r = resolveUnquote(state, r);
          }

          return r;
        }

        if (sym.symbol === state.config.reservedNames.eval) {
          return evaluate(state, evaluate(state, r.slice(1, 2)[0]));
        }
      }

      const sprs = [];

      for (let i = 1; i < r.length; i++) {
        const symSpr = Array.isArray(r[i]) && Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(r[i][0], state.config.reservedNames.spread);

        if (symSpr) {
          sprs.push(i);
          const a = evaluate(state, r[i][1]);
          r[i] = Array.isArray(a) ? a : [a];
        } else {
          r[i] = evaluate(state, r[i]);
        }
      }

      for (const i of sprs.reverse()) {
        r = r.slice(0, i).concat(r[i], r.slice(i + 1));
      }

      let fn;

      if (typeof r[0] === 'function') {
        fn = r[0];
      } else if (sym) {
        fn = resolveFunctionSymbol(state, sym);
      } else {
        fn = evaluate(state, r[0]);
      }

      if (typeof fn === 'function') {
        r = fn(...r.slice(1));
      } else {
        throw new Error(`[SX] evaluate: First item of list is not a function: ${JSON.stringify(r)}.`);
      }
    }
  } else if (state.config.wrapExternalValue && Object.prototype.hasOwnProperty.call(r, 'value')) {
    r = r.value;
  } else if (Object.prototype.hasOwnProperty.call(r, 'symbol')) {
    r = resolveValueSymbol(state, r);
  } else if (Object.prototype.hasOwnProperty.call(r, 'car')) {
    const car = evaluate(state, r.car);
    const cdr = evaluate(state, r.cdr);

    if (Array.isArray(cdr)) {
      const a = cdr.slice(0);
      a.unshift(car);
      r = a;
    } else {
      r = {
        car,
        cdr
      };
    }
  } else if (Object.prototype.hasOwnProperty.call(r, 'dotted')) {
    r = [evaluate(state, r.dotted)];
  } else if (Object.prototype.hasOwnProperty.call(r, 'comment')) {
    r = [];
  }

  return r;
}

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.fn.ts":
/*!*********************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.fn.ts ***!
  \*********************************************************/
/*! exports provided: $bitLShift, $$bitLShift, $bitSRShift, $$bitSRShift, $bitURShift, $$bitURShift, $bitNot, $$bitNot, $bitAnd, $$bitAnd, $bitOr, $$bitOr, $bitXor, $$bitXor, $add, $$add, $sub, $$sub, $mul, $$mul, $sup, $$sup, $div, $$div, $mod, $$mod, $max, $$max, $min, $$min, $avg, $$avg, $floor, $$floor, $ceil, $$ceil, $round, $$round, $abs, $$abs, $sign, $$sign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitLShift", function() { return $bitLShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitLShift", function() { return $$bitLShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitSRShift", function() { return $bitSRShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitSRShift", function() { return $$bitSRShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitURShift", function() { return $bitURShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitURShift", function() { return $$bitURShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitNot", function() { return $bitNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitNot", function() { return $$bitNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitAnd", function() { return $bitAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitAnd", function() { return $$bitAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitOr", function() { return $bitOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitOr", function() { return $$bitOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$bitXor", function() { return $bitXor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$bitXor", function() { return $$bitXor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$add", function() { return $add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$add", function() { return $$add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sub", function() { return $sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sub", function() { return $$sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mul", function() { return $mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$mul", function() { return $$mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sup", function() { return $sup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sup", function() { return $$sup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$div", function() { return $div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$div", function() { return $$div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mod", function() { return $mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$mod", function() { return $$mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$max", function() { return $max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$max", function() { return $$max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$min", function() { return $min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$min", function() { return $$min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$avg", function() { return $avg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$avg", function() { return $$avg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$floor", function() { return $floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$floor", function() { return $$floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ceil", function() { return $ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ceil", function() { return $$ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$round", function() { return $round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$round", function() { return $$round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$abs", function() { return $abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$abs", function() { return $$abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sign", function() { return $sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sign", function() { return $$sign; });
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const $bitLShift = (state, name) => (...args) => {
  // S expression: (<< number shift)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitLShift', args, 2, 2);
  let {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  car = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  cdr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr);

  if (0 <= cdr) {
    return cdr < 32 ? car << cdr : 0;
  } else {
    return cdr > -32 ? car >>> -cdr : 0;
  }
};
const $$bitLShift = $bitLShift(null, null);
const $bitSRShift = (state, name) => (...args) => {
  // S expression: (>> number shift)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitSRShift', args, 2, 2);
  let {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  car = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  cdr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr);

  if (0 <= cdr) {
    return cdr < 32 ? car >> cdr : car & 0x080000000 ? -1 : 0;
  } else {
    return cdr > -32 ? car << -cdr : 0;
  }
};
const $$bitSRShift = $bitSRShift(null, null);
const $bitURShift = (state, name) => (...args) => {
  // S expression: (>>> number shift)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitURShift', args, 2, 2);
  let {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  car = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  cdr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr);

  if (0 <= cdr) {
    return cdr < 32 ? car >>> cdr : 0;
  } else {
    return cdr > -32 ? car << -cdr : 0;
  }
};
const $$bitURShift = $bitURShift(null, null);
const $bitNot = (state, name) => (...args) => {
  // S expression: ($bit-not number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitNot', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return ~Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
};
const $$bitNot = $bitNot(null, null);
const $bitAnd = (state, name) => (...args) => {
  // S expression: ($bit-and numberA numberB)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitAnd', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) & Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$bitAnd = $bitAnd(null, null);
const $bitOr = (state, name) => (...args) => {
  // S expression: ($bit-or numberA numberB)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitOr', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) | Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$bitOr = $bitOr(null, null);
const $bitXor = (state, name) => (...args) => {
  // S expression: ($bit-xor numberA numberB)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$bitXor', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) ^ Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$bitXor = $bitXor(null, null);
const $add = (state, name) => (...args) => {
  // S expression: (+ number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$add', args, 1);
  return args.reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) + Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), 0);
};
const $$add = $add(null, null);
const $sub = (state, name) => (...args) => {
  // S expression: (- number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sub', args, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  const last = args.slice(1);

  if (last.length === 0) {
    // negate
    return -Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car);
  } else {
    // subtract
    return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) - Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
  }
};
const $$sub = $sub(null, null);
const $mul = (state, name) => (...args) => {
  // S expression: (* number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$mul', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) * Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$mul = $mul(null, null);
const $sup = (state, name) => (...args) => {
  // S expression: (** number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sup', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Math.pow(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr)), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$sup = $sup(null, null);
const $div = (state, name) => (...args) => {
  // S expression: (/ number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$div', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) / Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$div = $div(null, null);
const $mod = (state, name) => (...args) => {
  // S expression: (% number1 ... numberN)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$mod', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);
  return args.slice(1).reduce((prev, curr) => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(prev) % Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(curr), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car));
};
const $$mod = $mod(null, null);
const $max = (state, name) => (...args) => {
  // S expression: ($max val1 ... valN)
  //  -> S expr  : value
  return Math.max(...args.map(x => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(x)));
};
const $$max = $max(null, null);
const $min = (state, name) => (...args) => {
  // S expression: ($min val1 ... valN)
  //  -> S expr  : value
  return Math.min(...args.map(x => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(x)));
};
const $$min = $min(null, null);
const $avg = (state, name) => (...args) => {
  // S expression: ($avg val1 ... valN)
  //  -> S expr  : value
  const a = args.map(x => Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(x));
  return a.length > 0 ? a.reduce((prev, curr) => prev + curr, 0) / a.length : NaN;
};
const $$avg = $avg(null, null);
const $floor = (state, name) => (...args) => {
  // S expression: ($floor number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$floor', args, 1, 1);
  return Math.floor(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$floor = $floor(null, null);
const $ceil = (state, name) => (...args) => {
  // S expression: ($ceil number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$ceil', args, 1, 1);
  return Math.ceil(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$ceil = $ceil(null, null);
const $round = (state, name) => (...args) => {
  // S expression: ($round number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$round', args, 1, 1);
  return Math.round(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$round = $round(null, null);
const $abs = (state, name) => (...args) => {
  // S expression: ($abs number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$abs', args, 1, 1);
  return Math.abs(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$abs = $abs(null, null);
const $sign = (state, name) => (...args) => {
  // S expression: ($sign number)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sign', args, 1, 1);
  return Math.sign(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args)));
};
const $$sign = $sign(null, null);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.macro.ts":
/*!************************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.macro.ts ***!
  \************************************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const macros = [{
  name: '$incl',
  fn: (state, name) => list => {
    // S expression: ($incl name)
    //  -> S expr  : ($set name ($add name 1))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$incl', list, 2, 2);
    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], 1]];
  }
}, {
  name: '++',
  fn: (state, name) => list => {
    // S expression: (++ name)
    //  -> S expr  : ($set name ($add name 1))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('++', list, 2, 2);
    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], 1]];
  }
}, {
  name: '$decl',
  fn: (state, name) => list => {
    // S expression: ($decl name)
    //  -> S expr  : ($set name ($add name -1))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$decl', list, 2, 2);
    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], -1]];
  }
}, {
  name: '--',
  fn: (state, name) => list => {
    // S expression: (-- name)
    //  -> S expr  : ($set name ($add name -1))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('--', list, 2, 2);
    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], -1]];
  }
}, {
  name: '$incln',
  fn: (state, name) => list => {
    // S expression: ($incln name v)
    //  -> S expr  : ($set name ($add name v))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$incln', list, 3, 3);

    if (typeof list[2] !== 'number') {
      throw new Error(`[SX] $incln: Invalid parameter: arg(1) is not number.`);
    }

    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], list[2]]];
  }
}, {
  name: '+=',
  fn: (state, name) => list => {
    // S expression: (++ name v)
    //  -> S expr  : ($set name ($add name v))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('+=', list, 3, 3);

    if (typeof list[2] !== 'number') {
      throw new Error(`[SX] +=: Invalid parameter: arg(1) is not number.`);
    }

    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], list[2]]];
  }
}, {
  name: '$decln',
  fn: (state, name) => list => {
    // S expression: ($decln name v)
    //  -> S expr  : ($set name ($add name -v))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$decln', list, 3, 3);

    if (typeof list[2] !== 'number') {
      throw new Error(`[SX] $decln: Invalid parameter: arg(1) is not number.`);
    }

    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], -list[2]]];
  }
}, {
  name: '-=',
  fn: (state, name) => list => {
    // S expression: (-- name)
    //  -> S expr  : ($set name ($add name -v))
    Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('-=', list, 3, 3);

    if (typeof list[2] !== 'number') {
      throw new Error(`[SX] -=: Invalid parameter: arg(1) is not number.`);
    }

    return [{
      symbol: '$set'
    }, list[1], [{
      symbol: '$add'
    }, list[1], -list[2]]];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.operator.ts":
/*!***************************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.operator.ts ***!
  \***************************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic.fn */ "./src/s-exp/operators/arithmetic/arithmetic.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '<<',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitLShift"]
}, {
  name: '$bit-l-shift',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitLShift"]
}, {
  name: '>>',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitSRShift"]
}, {
  name: '$bit-sr-shift',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitSRShift"]
}, {
  name: '>>>',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitURShift"]
}, {
  name: '$bit-ur-shift',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitURShift"]
}, {
  name: '$bit-not',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitNot"]
}, {
  name: '$bit-and',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitAnd"]
}, {
  name: '$bit-or',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitOr"]
}, {
  name: '$bit-xor',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$bitXor"]
}, {
  name: '+',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$add"]
}, {
  name: '$add',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$add"]
}, {
  name: '$sum',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$add"]
}, {
  name: '-',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sub"]
}, {
  name: '$sub',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sub"]
}, {
  name: '$neg',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sub"]
}, {
  name: '*',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mul"]
}, {
  name: '$mul',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mul"]
}, {
  name: '**',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sup"]
}, {
  name: '$sup',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sup"]
}, {
  name: '/',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$div"]
}, {
  name: '$div',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$div"]
}, {
  name: '%',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mod"]
}, {
  name: '$mod',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$mod"]
}, {
  name: '$max',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$max"]
}, {
  name: '$min',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$min"]
}, {
  name: '$avg',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$avg"]
}, {
  name: '$floor',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$floor"]
}, {
  name: '$ceil',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$ceil"]
}, {
  name: '$round',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$round"]
}, {
  name: '$abs',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$abs"]
}, {
  name: '$sign',
  fn: _arithmetic_fn__WEBPACK_IMPORTED_MODULE_0__["$sign"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/arithmetic.symbol.ts":
/*!*************************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/arithmetic.symbol.ts ***!
  \*************************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/arithmetic/index.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/arithmetic/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _arithmetic_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic.operator */ "./src/s-exp/operators/arithmetic/arithmetic.operator.ts");
/* harmony import */ var _arithmetic_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arithmetic.macro */ "./src/s-exp/operators/arithmetic/arithmetic.macro.ts");
/* harmony import */ var _arithmetic_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arithmetic.symbol */ "./src/s-exp/operators/arithmetic/arithmetic.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_arithmetic_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_arithmetic_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_arithmetic_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.fn.ts":
/*!*********************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.fn.ts ***!
  \*********************************************************/
/*! exports provided: $__letAsync, $$__letAsync, $__setAsync, $$__setAsync, $then, $$then, $resolveAll, $$resolveAll, $resolveAny, $$resolveAny, $resolvePipe, $$resolvePipe, $resolveFork, $$resolveFork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__letAsync", function() { return $__letAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__letAsync", function() { return $$__letAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__setAsync", function() { return $__setAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__setAsync", function() { return $$__setAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$then", function() { return $then; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$then", function() { return $$then; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolveAll", function() { return $resolveAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolveAll", function() { return $$resolveAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolveAny", function() { return $resolveAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolveAny", function() { return $$resolveAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolvePipe", function() { return $resolvePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolvePipe", function() { return $$resolvePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$resolveFork", function() { return $resolveFork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$resolveFork", function() { return $$resolveFork; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

 // tslint:disable-next-line:variable-name

const $__letAsync = (state, name) => (...args) => {
  // S expression: ($__let-async 'nameStrOrSymbol promise)
  //  -> S expr  : promise
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$__letAsync', args, 2, 2);
  let promise = args[1];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  promise = promise.then(v => {
    try {
      Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_1__["$__let"])(state, '')(args[0], v);
      return v;
    } catch (e) {
      return Promise.reject(e);
    }
  });
  return promise;
}; // tslint:disable-next-line:variable-name

const $$__letAsync = $__letAsync(null, null); // tslint:disable-next-line:variable-name

const $__setAsync = (state, name) => (...args) => {
  // S expression: ($__set-async 'nameOrListOfNameOrIndex promise)
  //  -> S expr  : promise
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$__setAsync', args, 2, 2);
  let promise = args[1];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  promise = promise.then(v => {
    try {
      Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_1__["$__set"])(state, '')(args[0], v);
      return v;
    } catch (e) {
      return Promise.reject(e);
    }
  });
  return promise;
}; // tslint:disable-next-line:variable-name

const $$__setAsync = $__setAsync(null, null);
const $then = (state, name) => (...args) => {
  // S expression: ($then promise (lambda (val) ...) (lambda (err) ...))
  //  -> S expr  : promise
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$then', args, 2, 3);
  let promise = args[0];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  if (typeof args[2] === 'function') {
    promise = promise.then(args[1], args[2]);
  } else {
    if (typeof args[1] !== 'function') {
      throw new Error(`[SX] $then: Invalid argument(s): args[1] is not function.`);
    }

    promise = promise.then(args[1]);
  }

  return promise;
};
const $$then = $then(null, null);
const $resolveAll = (state, name) => (...args) => {
  // S expression: ($resolve-all promise1 ... promiseN)
  //  -> S expr  : promise
  const promises = args.slice(0);

  for (let i = 0; i < promises.length; i++) {
    if (typeof promises[i] !== 'object' || typeof promises[i].then !== 'function') {
      promises[i] = Promise.resolve(promises[i]);
    }
  }

  return Promise.all(promises);
};
const $$resolveAll = $resolveAll(null, null);
const $resolveAny = (state, name) => (...args) => {
  // S expression: ($resolve-any promise1 ... promiseN)
  //  -> S expr  : promise
  const promises = args.slice(0);

  for (let i = 0; i < promises.length; i++) {
    if (typeof promises[i] !== 'object' || typeof promises[i].then !== 'function') {
      promises[i] = Promise.resolve(promises[i]);
    }
  } // https://stackoverflow.com/questions/39940152/get-first-fulfilled-promise
  // firstOf: This will return the value of the first fulfilled promise,
  //          or if all reject, an array of rejection reasons.


  const invert = p => new Promise((res, rej) => p.then(rej, res));

  const firstOf = ps => invert(Promise.all(ps.map(invert)));

  return firstOf(promises);
};
const $$resolveAny = $resolveAny(null, null);
const $resolvePipe = (state, name) => (...args) => {
  // S expression: ($resolve-pipe promise<val1> (lambda (val1) ... promiseOrVal2) (lambda (val2) ... promiseOrVal3) ... (lambda (valN-1) ... promiseOrValN))
  //  -> S expr  : promise
  // remarks: If the formal argument lambda is a non-lambda value, the value is then piped as is.
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$resolvePipe', args, 1);
  let promise = args[0];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  const lambdas = args.slice(1);

  for (let i = 0; i < lambdas.length; i++) {
    if (typeof lambdas[i] !== 'function') {
      const v = lambdas[i];

      lambdas[i] = () => v;
    }
  }

  let p = promise;

  for (const l of lambdas) {
    p = p.then(l);
  }

  return p;
};
const $$resolvePipe = $resolvePipe(null, null);
const $resolveFork = (state, name) => (...args) => {
  // S expression: ($resolve-fork promise<val1> (lambda (val1) ... promiseOrVal2a) ... (lambda (val1) ... promiseOrVal2z))
  //  -> S expr  : (promise<val2a> ... promise<val2z>)
  // remarks: If the formal argument lambda is a non-lambda value, the value is then piped as is.
  Object(_errors__WEBPACK_IMPORTED_MODULE_0__["checkParamsLength"])('$resolveFork', args, 1);
  let promise = args[0];

  if (typeof promise !== 'object' || typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  const lambdas = args.slice(1);

  for (let i = 0; i < lambdas.length; i++) {
    if (typeof lambdas[i] !== 'function') {
      const v = lambdas[i];

      lambdas[i] = () => v;
    }
  }

  const resolvers = new Array(lambdas.length);
  const rejectors = new Array(lambdas.length);
  const pa = [];

  for (let i = 0; i < lambdas.length; i++) {
    pa.push(new Promise((resolve, reject) => {
      resolvers[i] = v => {
        let lp = lambdas[i](v);

        if (typeof lp !== 'object' || typeof lp.then !== 'function') {
          lp = Promise.resolve(lp);
        }

        lp.then(x => resolve(x)).catch(e => reject(e));
      };

      rejectors[i] = reject;
    }));
  }

  promise.then(v => resolvers.forEach(f => f(v)), e => rejectors.forEach(f => f(e)));
  return pa;
};
const $$resolveFork = $resolveFork(null, null);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.macro.ts":
/*!************************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.macro.ts ***!
  \************************************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const macros = [{
  name: '$let-async',
  fn: (state, name) => list => {
    // S expression: ($let-async nameStrOrSymbol promise)
    //  -> S expr  : ($__let-async 'nameStrOrSymbol promise)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$let-async', list, 3, 3);
    return [{
      symbol: '$__let-async'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$set-async',
  fn: (state, name) => list => {
    // S expression: ($set-async nameOrListOfNameOrIndex promise)
    //  -> S expr  : ($__set-async 'nameOrListOfNameOrIndex promise)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$set-async', list, 3, 3);
    return [{
      symbol: '$__set-async'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.operator.ts":
/*!***************************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.operator.ts ***!
  \***************************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concurrent.fn */ "./src/s-exp/operators/concurrent/concurrent.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '$__let-async',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$__letAsync"]
}, {
  name: '$__set-async',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$__setAsync"]
}, {
  name: '$then',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$then"]
}, {
  name: '$resolve-all',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolveAll"]
}, {
  name: '$resolve-any',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolveAny"]
}, {
  name: '$resolve-pipe',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolvePipe"]
}, {
  name: '$resolve-fork',
  fn: _concurrent_fn__WEBPACK_IMPORTED_MODULE_0__["$resolveFork"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/concurrent.symbol.ts":
/*!*************************************************************!*\
  !*** ./src/s-exp/operators/concurrent/concurrent.symbol.ts ***!
  \*************************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/concurrent/index.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/concurrent/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _concurrent_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concurrent.operator */ "./src/s-exp/operators/concurrent/concurrent.operator.ts");
/* harmony import */ var _concurrent_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concurrent.macro */ "./src/s-exp/operators/concurrent/concurrent.macro.ts");
/* harmony import */ var _concurrent_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concurrent.symbol */ "./src/s-exp/operators/concurrent/concurrent.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_concurrent_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_concurrent_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_concurrent_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/core/core.fn.ts":
/*!*********************************************!*\
  !*** ./src/s-exp/operators/core/core.fn.ts ***!
  \*********************************************/
/*! exports provided: $car, $$car, $cdr, $$cdr, $cons, $$cons, $first, $$first, $second, $$second, $last, $$last, $rest, $$rest, $firstAndSecond, $$firstAndSecond, $atom, $$atom, $eq, $$eq, $notEq, $$notEq, $list, $$list, $__scope, $__globalScope, $__capture, $__lambda, $comp$__lambda, $__defun, $comp$__defun, $__refun, $__defmacro, $apply, $$apply, $__call, $__try, $raise, $$raise, $__if, $__ifNull, $__cond, $__while, $__doWhile, $__until, $__doUntil, $__repeat, $__for, $pipe, $$pipe, $__get, $__let, $__set, $boolean, $$boolean, $not, $$not, $__and, $$__and, $__or, $$__or, $ambiguousEq, $$ambiguousEq, $ambiguousNotEq, $$ambiguousNotEq, $lt, $$lt, $le, $$le, $gt, $$gt, $ge, $$ge, $symbol, $$symbol, $__gensym, $isSymbol, $$isSymbol, $isList, $$isList, $isString, $$isString, $isNumber, $$isNumber, $isNaN, $$isNaN, $isFinite, $$isFinite, $isInteger, $$isInteger, $toString, $$toString, $toNumber, $$toNumber, $__toObject, $objectAssign, $$objectAssign, $jsonStringify, $$jsonStringify, $jsonParse, $$jsonParse, $now, $$now, $datetimeFromIso, $$datetimeFromIso, $datetime, $$datetime, $datetimeLc, $$datetimeLc, $datetimeToIsoString, $$datetimeToIsoString, $datetimeToComponents, $$datetimeToComponents, $datetimeToComponentsLc, $$datetimeToComponentsLc, $match, $$match, $consoleLog, $$consoleLog, $consoleError, $$consoleError, $consoleTrace, $$consoleTrace, $consoleTime, $$consoleTime, $consoleTimeEnd, $$consoleTimeEnd, $consoleTimeLog, $$consoleTimeLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$car", function() { return $car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$car", function() { return $$car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$cdr", function() { return $cdr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$cdr", function() { return $$cdr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$cons", function() { return $cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$cons", function() { return $$cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$first", function() { return $first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$first", function() { return $$first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$second", function() { return $second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$second", function() { return $$second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$last", function() { return $last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$last", function() { return $$last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$rest", function() { return $rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rest", function() { return $$rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$firstAndSecond", function() { return $firstAndSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$firstAndSecond", function() { return $$firstAndSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$atom", function() { return $atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$atom", function() { return $$atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$eq", function() { return $eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$eq", function() { return $$eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$notEq", function() { return $notEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$notEq", function() { return $$notEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$list", function() { return $list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$list", function() { return $$list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__scope", function() { return $__scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__globalScope", function() { return $__globalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__capture", function() { return $__capture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__lambda", function() { return $__lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$comp$__lambda", function() { return $comp$__lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__defun", function() { return $__defun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$comp$__defun", function() { return $comp$__defun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__refun", function() { return $__refun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__defmacro", function() { return $__defmacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$apply", function() { return $apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$apply", function() { return $$apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__call", function() { return $__call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__try", function() { return $__try; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$raise", function() { return $raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$raise", function() { return $$raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__if", function() { return $__if; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__ifNull", function() { return $__ifNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__cond", function() { return $__cond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__while", function() { return $__while; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__doWhile", function() { return $__doWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__until", function() { return $__until; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__doUntil", function() { return $__doUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__repeat", function() { return $__repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__for", function() { return $__for; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$pipe", function() { return $pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$pipe", function() { return $$pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__get", function() { return $__get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__let", function() { return $__let; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__set", function() { return $__set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$boolean", function() { return $boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$boolean", function() { return $$boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$not", function() { return $not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$not", function() { return $$not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__and", function() { return $__and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__and", function() { return $$__and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__or", function() { return $__or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__or", function() { return $$__or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ambiguousEq", function() { return $ambiguousEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ambiguousEq", function() { return $$ambiguousEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ambiguousNotEq", function() { return $ambiguousNotEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ambiguousNotEq", function() { return $$ambiguousNotEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$lt", function() { return $lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$lt", function() { return $$lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$le", function() { return $le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$le", function() { return $$le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$gt", function() { return $gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$gt", function() { return $$gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ge", function() { return $ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$ge", function() { return $$ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$symbol", function() { return $symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$symbol", function() { return $$symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__gensym", function() { return $__gensym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isSymbol", function() { return $isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isSymbol", function() { return $$isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isList", function() { return $isList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isList", function() { return $$isList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isString", function() { return $isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isString", function() { return $$isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isNumber", function() { return $isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isNumber", function() { return $$isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isNaN", function() { return $isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isNaN", function() { return $$isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isFinite", function() { return $isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isFinite", function() { return $$isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isInteger", function() { return $isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isInteger", function() { return $$isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$toString", function() { return $toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$toString", function() { return $$toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$toNumber", function() { return $toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$toNumber", function() { return $$toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__toObject", function() { return $__toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$objectAssign", function() { return $objectAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$objectAssign", function() { return $$objectAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsonStringify", function() { return $jsonStringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$jsonStringify", function() { return $$jsonStringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsonParse", function() { return $jsonParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$jsonParse", function() { return $$jsonParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$now", function() { return $now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$now", function() { return $$now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$datetimeFromIso", function() { return $datetimeFromIso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$datetimeFromIso", function() { return $$datetimeFromIso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$datetime", function() { return $datetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$datetime", function() { return $$datetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$datetimeLc", function() { return $datetimeLc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$datetimeLc", function() { return $$datetimeLc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$datetimeToIsoString", function() { return $datetimeToIsoString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$datetimeToIsoString", function() { return $$datetimeToIsoString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$datetimeToComponents", function() { return $datetimeToComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$datetimeToComponents", function() { return $$datetimeToComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$datetimeToComponentsLc", function() { return $datetimeToComponentsLc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$datetimeToComponentsLc", function() { return $$datetimeToComponentsLc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$match", function() { return $match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$match", function() { return $$match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleLog", function() { return $consoleLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleLog", function() { return $$consoleLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleError", function() { return $consoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleError", function() { return $$consoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleTrace", function() { return $consoleTrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleTrace", function() { return $$consoleTrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleTime", function() { return $consoleTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleTime", function() { return $$consoleTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleTimeEnd", function() { return $consoleTimeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleTimeEnd", function() { return $$consoleTimeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$consoleTimeLog", function() { return $consoleTimeLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$consoleTimeLog", function() { return $$consoleTimeLog; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/s-exp/types.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts */ "./src/s-exp/consts.ts");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compile */ "./src/s-exp/compile.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln






const $car = (state, name) => (...args) => {
  // S expression: ($car '(first second ... last))
  //  -> S expr  : first
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$car', args, 1, 1);
  const car = $$first(...args);

  if (!Array.isArray(car)) {
    throw new Error(`[SX] $car: Invalid argument(s): args[0] is not array.`);
  }

  if (car.length === 0) {
    throw new Error(`[SX] $car: Invalid argument(s): args[0] is nil.`);
  }

  return car[0];
};
const $$car = $car(null, null);
const $cdr = (state, name) => (...args) => {
  // S expression: ($cdr '(first second ... last))
  //  -> S expr  : (second ... last)
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$cdr', args, 1, 1);
  const car = $$first(...args);

  if (!Array.isArray(car)) {
    throw new Error(`[SX] $cdr: Invalid argument(s): args[0] is not array.`);
  }

  if (car.length === 0) {
    throw new Error(`[SX] $cdr: Invalid argument(s): args[0] is nil.`);
  }

  return car.slice(1);
};
const $$cdr = $cdr(null, null);
const $cons = (state, name) => (...args) => {
  // S expression: ($cons arg1 '(arg2-item1 ...) ... argN)
  //  -> S expr  : (arg1 arg2-item1 ...)
  // S expression: ($cons arg1 nilOrNull ... argN)
  //  -> S expr  : (arg1)
  // S expression: ($cons arg1 arg2 ... argN)
  //  -> S expr  : arg1.arg2
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$cons', args, 2, 2);
  let {
    car,
    cdr
  } = $$firstAndSecond(...args);

  if (car === null) {
    car = [];
  }

  if (cdr === null) {
    cdr = [];
  }

  if (Array.isArray(cdr)) {
    cdr = cdr.slice(0);
    cdr.unshift(car);
    return cdr;
  } else {
    return {
      car,
      cdr
    };
  }
};
const $$cons = $cons(null, null);
const $first = (state, name) => (...args) => {
  // S expression: ($first first second ... last)
  //  -> S expr  : first
  // S expression: ($first)
  //  -> S expr  : null
  const car = args.slice(0, 1);
  return car.length === 1 ? car[0] : null;
};
const $$first = $first(null, null);
const $second = (state, name) => (...args) => {
  // S expression: ($second first second ... last)
  //  -> S expr  : second
  // S expression: ($second first)
  //  -> S expr  : null
  const cdr = args.slice(1, 2);
  return cdr.length === 1 ? cdr[0] : null;
};
const $$second = $second(null, null);
const $last = (state, name) => (...args) => {
  // S expression: ($last first second ... last)
  //  -> S expr  : last
  // S expression: ($last)
  //  -> S expr  : null
  const car = args.slice(args.length - 1, args.length);
  return car.length === 1 ? car[0] : null;
};
const $$last = $last(null, null);
const $rest = (state, name) => (...args) => {
  // S expression: ($rest first second ... last)
  //  -> S expr  : (second ... last)
  // S expression: ($rest first)
  //  -> S expr  : null
  const cdr = args.slice(1);
  return 0 < cdr.length ? cdr : null;
};
const $$rest = $rest(null, null);
const $firstAndSecond = (state, name) => (...args) => {
  // S expression: ($first-and-second first second ... last)
  //  -> S expr  : first.second
  let car = args.slice(0, 1);
  car = car.length === 1 ? car[0] : null;
  let cdr = args.slice(1, 2);
  cdr = cdr.length === 1 ? cdr[0] : null;
  return {
    car,
    cdr
  };
};
const $$firstAndSecond = $firstAndSecond(null, null);
const $atom = (state, name) => (...args) => {
  // S expression: ($atom arg1 ...)
  //  -> (if arg1 is list or dotted pair)  S expr  : false
  //  -> (if arg1 is nil or anything else) S expr  : true
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$atom', args, 1, 1);
  const car = $$first(...args);

  if (car === null || car === void 0) {
    return true;
  }

  if (Array.isArray(car)) {
    if (car.length === 0) return true;else return false;
  }

  switch (typeof car) {
    case 'number':
    case 'string':
    case 'function':
    case 'boolean':
      return true;

    case 'object':
      return Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(car) ? true : false;
  }

  return false;
};
const $$atom = $atom(null, null);
const $eq = (state, name) => (...args) => {
  // S expression: ($eq arg1 arg2)
  //  -> (if arg1 === arg2)  S expr  : true
  //  -> (else)              S expr  : false
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$eq', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return car === cdr;
};
const $$eq = $eq(null, null);
const $notEq = (state, name) => (...args) => {
  // S expression: ($not-eq arg1 arg2)
  //  -> (if arg1 !== arg2)  S expr  : true
  //  -> (else)              S expr  : false
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$notEq', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return car !== cdr;
};
const $$notEq = $notEq(null, null);
const $list = (state, name) => (...args) => // S expression: ($list arg1 ... argN)
//  -> S expr  : (arg1 ... argN)
args.slice(0);
const $$list = $list(null, null); // tslint:disable-next-line:variable-name

const $__scope = (state, name, capturedScopes) => (...args) => {
  // S expression: ($__scope isBlockLocal returnMultiple '((name value) | name ...) 'expr1 ... 'exprN)
  //  -> (if returnMultiple)  S expr  : [expr1 ... exprN]
  //  -> (else)               S expr  : exprN
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__scope', args, 3);
  const isBlockLocal = $$first(...args);
  const returnMultiple = $$second(...args);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args.slice(2));
  let r = null;
  const scope = {};

  if (Array.isArray(car)) {
    for (const x of car) {
      if (Array.isArray(x)) {
        const kv = $$firstAndSecond(...x);
        const kvSym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(kv.car);
        const kvName = kvSym ? kvSym.symbol : String(kv.car);
        Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__scope', scope, kvName);
        scope[kvName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, kv.cdr);
      } else {
        const xSym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(x);
        const xName = xSym ? xSym.symbol : String(x);
        Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__scope', scope, xName);
        scope[xName] = null;
      }
    }
  }

  Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["installScope"])(state, scope, isBlockLocal, capturedScopes);

  try {
    if (4 < args.length) {
      if (returnMultiple) {
        r = [];

        for (const x of args.slice(3)) {
          r.push(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x));
        }
      } else {
        for (const x of args.slice(3)) {
          r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
        }
      }
    } else {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, cdr);
    }
  } finally {
    Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["uninstallScope"])(state);
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__globalScope = (state, name) => (...args) => {
  // S expression: ($__global returnMultiple 'expr1 ... 'exprN)
  //  -> (if returnMultiple)  S expr  : [expr1 ... exprN]
  //  -> (else)               S expr  : exprN
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__globalScope', args, 1);
  const returnMultiple = $$first(...args);
  const cdr = $$second(...args);
  let r = null;
  Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["installScope"])(state, Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["getGlobalScope"])(state).scope, true);

  try {
    if (2 < args.length) {
      if (returnMultiple) {
        r = [];

        for (const x of args.slice(1)) {
          r.push(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x));
        }
      } else {
        for (const x of args.slice(1)) {
          r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
        }
      }
    } else {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, cdr);
    }
  } finally {
    Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["uninstallScope"])(state);
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__capture = (state, name) => (...args) => {
  // S expression: ($__capture '(sym1 ... symN) 'expr1 ... 'exprN)
  //  -> S expr  : exprN
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__capture', args, 1);
  const formalArgs = args[0];

  if (!Array.isArray(formalArgs)) {
    throw new Error(`[SX] $__lambda: Invalid argument(s): args[0] is not array.`);
  }

  let r = null;
  const capturedScopes = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["collectCapturedVariables"])(state, formalArgs);
  Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["installScope"])(state, {}, true, capturedScopes);

  try {
    for (const x of args.slice(1)) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  } finally {
    Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["uninstallScope"])(state);
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__lambda = (state, name) => (...args) => {
  // S expression: ($__lambda '(sym1 ... symN) 'expr1 ... 'exprN)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__lambda', args, 2);
  const formalArgs = args[0];

  if (!Array.isArray(formalArgs)) {
    throw new Error(`[SX] $__lambda: Invalid argument(s): args[0] is not array.`);
  }

  let lastIsSpread = false;

  for (let i = 0; i < formalArgs.length; i++) {
    const fa = formalArgs[i];

    if (i === formalArgs.length - 1 && state.config.enableSpread && Array.isArray(fa) && Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa[0], state.config.reservedNames.spread)) {
      if (!Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa[1])) {
        throw new Error(`[SX] $__lambda: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
      }

      formalArgs[i] = fa[1];
      lastIsSpread = true;
    } else if (!Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa)) {
      throw new Error(`[SX] $__lambda: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
    }
  }

  let fnBody = args.slice(1);

  if (state.config.enableTailCallOptimization) {
    fnBody = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["optimizeTailCall"])(state, formalArgs, fnBody);
  }

  const capturedScopes = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["getCapturedScopes"])(state);

  const fn = function (...actualArgs) {
    if (actualArgs.length + (lastIsSpread ? 1 : 0) < formalArgs.length) {
      throw new Error(`[SX] func call: Actual args too short: actual ${actualArgs.length} / formal ${formalArgs.length}.`);
    } // TODO: add type checking


    return $__scope(state, name, capturedScopes)(false, false, [[state.config.reservedNames.self, fn], [state.config.reservedNames.thiz, this === _consts__WEBPACK_IMPORTED_MODULE_1__["globalObj"] || this === void 0 ? null : Object(_ast__WEBPACK_IMPORTED_MODULE_2__["quote"])(state, this)], ...formalArgs.map((x, index) => [x.symbol, Object(_ast__WEBPACK_IMPORTED_MODULE_2__["quote"])(state, lastIsSpread && index === formalArgs.length - 1 ? actualArgs.slice(index) : actualArgs[index])])], ...fnBody);
  };

  return fn;
}; // tslint:disable-next-line:variable-name

const $comp$__lambda = (state, name) => (...args) => {
  // S expression: ($__lambda '(sym1 ... symN) 'expr1 ... 'exprN)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$$__lambda', args, 2);
  const formalArgs = args[0];

  if (!Array.isArray(formalArgs)) {
    throw new Error(`[SX] $$__lambda: Invalid argument(s): args[0] is not array.`);
  }

  let lastIsSpread = false;

  for (let i = 0; i < formalArgs.length; i++) {
    const fa = formalArgs[i];

    if (i === formalArgs.length - 1 && state.config.enableSpread && Array.isArray(fa) && Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa[0], state.config.reservedNames.spread)) {
      if (!Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa[1])) {
        throw new Error(`[SX] $$__lambda: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
      }

      formalArgs[i] = fa[1];
      lastIsSpread = true;
    } else if (!Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa)) {
      throw new Error(`[SX] $$__lambda: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
    }
  }

  const fnBody = args.slice(1);
  return Object(_compile__WEBPACK_IMPORTED_MODULE_4__["compileLambda"])(state, formalArgs, lastIsSpread, fnBody);
}; // tslint:disable-next-line:variable-name

const $__defun = (state, name) => (...args) => {
  // S expression: ($__defun 'name '(sym1 ... symN) 'expr ... 'expr)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__defun', args, 3);
  const car = $$first(...args);
  const fn = $__lambda(state, name)(...args.slice(1));
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__defun', state.funcMap, car.symbol); // TODO: overloading

  state.funcMap.set(car.symbol, {
    name: car.symbol,
    fn: (st, nm) => fn
  });
  return fn;
}; // tslint:disable-next-line:variable-name

const $comp$__defun = (state, name) => (...args) => {
  // S expression: ($__defun 'name '(sym1 ... symN) 'expr ... 'expr)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$$__defun', args, 3);
  const car = $$first(...args);
  const fn = $comp$__lambda(state, name)(...args.slice(1));
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$$__defun', state.funcMap, car.symbol); // TODO: overloading

  state.funcMap.set(car.symbol, {
    name: car.symbol,
    fn: (st, nm) => fn
  });
  return fn;
}; // tslint:disable-next-line:variable-name

const $__refun = (state, name) => (...args) => {
  // S expression: ($refun 'name)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__refun', args, 1, 1);
  const car = $$first(...args);
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__refun', state.funcMap, car.symbol);
  const info = state.funcMap.get(car.symbol);

  if (!info) {
    throw new Error(`[SX] $__refun: function ${car.symbol} is not defined.`);
  }

  return info.fn(state, car.symbol);
}; // tslint:disable-next-line:variable-name

const $__defmacro = (state, name) => (...args) => {
  // S expression: ($__defmacro 'name '(sym1 ... symN) 'expr ... 'expr)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__defmacro', args, 3);
  const car = $$first(...args);
  const formalArgs = args[1];

  if (!Array.isArray(formalArgs)) {
    throw new Error(`[SX] $__defmacro: Invalid argument(s): args[1] is not array.`);
  }

  let lastIsSpread = false;

  for (let i = 0; i < formalArgs.length; i++) {
    const fa = formalArgs[i];

    if (i === formalArgs.length - 1 && state.config.enableSpread && Array.isArray(fa) && Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa[0], state.config.reservedNames.spread)) {
      if (!Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa[1])) {
        throw new Error(`[SX] $__defmacro: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
      }

      formalArgs[i] = fa[1];
      lastIsSpread = true;
    } else if (!Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(fa)) {
      throw new Error(`[SX] $__defmacro: Invalid formal argument(s): item(s) of args[${i}] is not symbol.`);
    }
  }

  const fnBody = args.slice(2);
  const capturedScopes = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["getCapturedScopes"])(state);

  const fn = fArgs => (...aArgs) => {
    return $__scope(state, name, capturedScopes)(false, false, [[state.config.reservedNames.self, fn], ...fArgs.map((x, index) => [x.symbol, Object(_ast__WEBPACK_IMPORTED_MODULE_2__["quote"])(state, lastIsSpread && index === fArgs.length - 1 ? aArgs.slice(index) : aArgs[index])])], ...fnBody);
  };

  const m = {
    name: car.symbol,
    fn: (st, nm, fArgs) => list => fn(fArgs)(...list.slice(1)),
    formalArgs,
    lastIsSpread
  };
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__defmacro', state.macroMap, car.symbol);

  if (state.macroMap.has(car.symbol)) {
    let curr = state.macroMap.get(car.symbol);
    curr.next = m;

    if (curr && curr.formalArgs) {
      if (curr.formalArgs.length < formalArgs.length) {
        state.macroMap.set(car.symbol, m);
        m.next = curr;
      } else {
        let prev = curr;
        curr = curr.next;

        while (curr) {
          if (curr.formalArgs) {
            if (curr.formalArgs.length < formalArgs.length) {
              prev.next = m;
              m.next = curr;
              break;
            }
          }

          prev = curr;
          curr = curr.next;
        }
      }
    }
  } else {
    state.macroMap.set(car.symbol, m);
  }

  return fn;
};
const $apply = (state, name) => (...args) => {
  // S expression: ($apply fn arg1 ... argN)
  //  -> S expr  : fn'
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$apply', args, 1);
  const car = $$first(...args);

  if (typeof car !== 'function') {
    throw new Error(`[SX] $apply: Invalid argument(s): args[0] is not function.`);
  }

  return (...p) => car.apply(null, args.slice(1).concat(p));
};
const $$apply = $apply(null, null); // tslint:disable-next-line:variable-name

const $__call = (state, name) => (...args) => {
  // S expression: ($__call thisArg 'symbol arg1 ... argN)
  //  -> S expr  : fn
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__call', args, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(cdr);
  const xName = sym ? sym.symbol : Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, cdr);
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__call', car, xName);
  return Function.prototype.apply.call(car[xName], car, args.slice(2));
}; // tslint:disable-next-line:variable-name

const $__try = (state, name) => (...args) => {
  // S expression: ($__try 'expr 'catch-expr)
  //  ->                               S expr  : expr
  //  -> (if error is raised in expr)  S expr  : catch-expr
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__try', args, 1, 2);
  let r = [];

  try {
    r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, args[0]);
  } catch (e) {
    if (e instanceof _types__WEBPACK_IMPORTED_MODULE_0__["FatalError"]) {
      throw e;
    }

    if (1 < args.length) {
      r = $__scope(state, name)(true, false, [['$error', Object(_ast__WEBPACK_IMPORTED_MODULE_2__["quote"])(state, e)], ['$parent', Object(_ast__WEBPACK_IMPORTED_MODULE_2__["quote"])(state, Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["getScope"])(state))]], args[1]);
    } else {
      r = null;
    }
  }

  return r;
};
const $raise = (state, name) => (...args) => {
  // S expression: ($raise 'expr)
  //  -> S expr  : -
  const car = $$first(...args);
  throw car;
};
const $$raise = $raise(null, null); // tslint:disable-next-line:variable-name

const $__if = (state, name) => (...args) => {
  // S expression: ($__if condition 't-expr 'f-expr)
  //  -> (if condition is true ) S expr  : t-expr
  //  -> (if condition is false) S expr  : f-expr
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__if', args, 2, 3);
  const car = $$first(...args);
  let r = [];

  if ($$boolean(car)) {
    r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, args[1]);
  } else {
    if (2 < args.length) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, args[2]);
    } else {
      r = null;
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__ifNull = (state, name) => (...args) => {
  // S expression: ($__if-null condition 'null-expr)
  //  -> (if condition is not null ) S expr  : condition
  //  -> (if condition is null)      S expr  : null-expr
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__ifNull', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  let r = [];

  if (!$$ambiguousEq(car, null)) {
    r = car;
  } else {
    r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, cdr);
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__cond = (state, name) => (...args) => {
  // S expression: ($__cond 'cond1 'expr1 ... 'condN 'exprN)
  //  -> (if (eval condI) is true ) S expr  : exprI
  //  -> (if no matched)            S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__cond', args, 1);

  for (let i = 0; i < args.length - 1; i += 2) {
    const c = args[i];
    const x = args[i + 1];

    if ($$boolean(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, c))) {
      return Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  }

  return null;
}; // tslint:disable-next-line:variable-name

const $__while = (state, name) => (...args) => {
  // S expression: ($__while 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__while', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  while ($$boolean(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, car))) {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__doWhile = (state, name) => (...args) => {
  // S expression: ($__do-while 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__doWhile', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  do {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  } while ($$boolean(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, car)));

  return r;
}; // tslint:disable-next-line:variable-name

const $__until = (state, name) => (...args) => {
  // S expression: ($__until 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__until', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  while ($$not(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, car))) {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__doUntil = (state, name) => (...args) => {
  // S expression: ($__do-until 'condition 'expr1 ... 'exprN)
  //  -> (if condition is true at least 1 or more times) S expr  : exprN
  //  -> (else)                                          S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__doUntil', args, 1);
  const car = $$first(...args);
  const cdr = args.slice(1);
  let r = null;

  do {
    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  } while ($$not(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, car)));

  return r;
}; // tslint:disable-next-line:variable-name

const $__repeat = (state, name) => (...args) => {
  // S expression: ($__repeat 'i n-times 'expr1 ... 'exprN)
  //  -> (if n > 0) S expr  : exprN
  //  -> (else)     S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__repeat', args, 2);
  const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])($$first(...args));

  if (!sym) {
    throw new Error(`[SX] $__repeat: Invalid argument(s): item(s) of args[0] is not symbol.`);
  }

  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__repeat', {}, sym.symbol); // NOTE: pass dummy target object.

  const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["resolveValueSymbolScope"])(state, sym, false);
  const n = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])($$second(...args));
  const cdr = args.slice(2);
  let r = null;

  for (let i = 0; i < n; i++) {
    scope[sym.symbol] = i;

    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__for = (state, name) => (...args) => {
  // S expression: ($__for 'x list 'expr1 ... 'exprN)
  //  -> (if list.length > 0) S expr  : exprN
  //  -> (else)               S expr  : null
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__for', args, 2);
  const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])($$first(...args));

  if (!sym) {
    throw new Error(`[SX] $__for: Invalid argument(s): item(s) of args[0] is not symbol.`);
  }

  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__for', {}, sym.symbol); // NOTE: pass dummy target object.

  const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["resolveValueSymbolScope"])(state, sym, false);
  const list = $$second(...args);

  if (!Array.isArray(list)) {
    throw new Error(`[SX] $__for: Invalid argument(s): item(s) of args[1] is not array.`);
  }

  const cdr = args.slice(2);
  let r = null;

  for (const q of list) {
    scope[sym.symbol] = q;

    for (const x of cdr) {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $pipe = (state, name) => (...args) => {
  // S expression: ($__get v fn1 ... fnN)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$pipe', args, 1);
  let v = args[0];

  for (let i = 1; i < args.length; i++) {
    v = args[i](v);
  }

  return v;
};
const $$pipe = $pipe(null, null); // tslint:disable-next-line:variable-name

const $__get = (state, name) => (...args) => {
  // S expression: ($__get 'nameOrIndex1 ... 'nameOrIndexN)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__get', args, 1);
  let v = null;
  let sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(args[0]);

  if (!sym) {
    switch (typeof args[0]) {
      case 'string':
      case 'number':
        sym = {
          symbol: String(args[0])
        };
        break;

      default:
        v = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, args[0]);
        break;
    }
  }

  if (sym) {
    const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["resolveValueSymbolScope"])(state, sym, true);

    if (!scope) {
      throw new Error(`[SX] $__get: Invalid argument(s): args[0]: symbol "${sym.symbol}" is not defined.`);
    }

    v = scope[sym.symbol];
  }

  for (let i = 1; i < args.length; i++) {
    let q = args[i];
    let inprog = true;

    while (inprog) {
      switch (typeof q) {
        case 'function':
          v = q(v);
          inprog = false;
          break;

        case 'object':
          if (Array.isArray(q)) {
            q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, q);
          } else {
            sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(q);

            if (sym) {
              q = sym.symbol;
            } else if (Object.prototype.hasOwnProperty.call(q, 'value')) {
              q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, q);
            } else {
              throw new Error(`[SX] $__get: Invalid argument(s): invalid name path.`);
            }
          }

          break;

        case 'number':
          if (q < 0) {
            q = v.length + q;
          }

        // FALL_THRU

        case 'string':
          Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__get', v, q);
          v = v[q];
          inprog = false;
          break;

        default:
          throw new Error(`[SX] $__get: Invalid argument(s): invalid name path.`);
      }
    }
  }

  return v;
}; // tslint:disable-next-line:variable-name

const $__let = (state, name) => (...args) => {
  // S expression: ($__let 'nameStrOrSymbol expr)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__let', args, 2, 2);
  let sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])($$first(...args));

  if (!sym) {
    if (typeof args[0] === 'string') {
      sym = {
        symbol: args[0]
      };
    } else {
      throw new Error(`[SX] $__let: Invalid argument(s): invalid name.`);
    }
  }

  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__let', {}, sym.symbol); // NOTE: pass dummy target object.

  const scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["resolveValueSymbolScope"])(state, sym, false);
  scope[sym.symbol] = args[1];
  return args[1];
}; // tslint:disable-next-line:variable-name

const $__set = (state, name) => (...args) => {
  // S expression: ($__set 'nameOrListOfNameOrIndex expr)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__set', args, 2, 2);
  let path = [];

  if (Array.isArray(args[0])) {
    path = args[0];
  } else {
    path.push(args[0]);
  }

  let sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(path[0]);

  if (!sym) {
    if (typeof path[0] === 'string') {
      Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__set', {}, path[0]); // NOTE: pass dummy target object.

      sym = {
        symbol: path[0]
      };
    } else {
      throw new Error(`[SX] $__set: Invalid argument(s): invalid name.`);
    }
  }

  let scope = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["resolveValueSymbolScope"])(state, sym, true);

  if (scope === null) {
    throw new Error(`[SX] $__set: Unresolved symbol: ${sym.symbol}.`);
  }

  let subst = false;

  for (let i = 0; i < path.length; i++) {
    let q = path[i];
    let inprog = true;
    const last = i === path.length - 1;

    while (inprog) {
      switch (typeof q) {
        case 'function':
          scope = q(scope);
          inprog = false;
          break;

        case 'object':
          if (Array.isArray(q)) {
            q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, q);
          } else {
            sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(q);

            if (sym) {
              q = sym.symbol;
            } else if (Object.prototype.hasOwnProperty.call(q, 'value')) {
              q = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, q);
            } else {
              throw new Error(`[SX] $__set: Invalid argument(s): invalid name.`);
            }
          }

          break;

        case 'number':
          if (q < 0) {
            q = scope.length + q;
          }

        // FALL_THRU

        case 'string':
          Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__set', scope, q);

          if (last) {
            scope[q] = args[1];
            subst = true;
          } else {
            scope = scope[q];
          }

          inprog = false;
          break;

        default:
          throw new Error(`[SX] $__set: Invalid argument(s): invalid name.`);
      }
    }
  }

  if (!subst) {
    throw new Error(`[SX] $__set: Invalid argument(s): last path is not lvalue.`);
  }

  return args[1];
};
const $boolean = (state, name) => (...args) => {
  // S expression: ($boolean any)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$boolean', args, 1, 1);
  const car = $$first(...args);
  if (Array.isArray(car) && car.length === 0) return false;else return Boolean(car);
};
const $$boolean = $boolean(null, null);
const $not = (state, name) => (...args) => {
  // S expression: ($not any)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$not', args, 1, 1);
  return !$$boolean(...args);
};
const $$not = $not(null, null); // tslint:disable-next-line:variable-name

const $__and = (state, name) => (...args) => {
  // S expression: ($__and 'expr1 ... 'exprN)
  //  -> (if all of ($boolean expr1) ... ($boolean exprN) are true) S expr  : exprN
  //  -> (else)                                                     S expr  : expr-i (false left most)
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__and', args, 1);
  let prev = null;

  for (let i = 0; i < args.length; i++) {
    const curr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, args[i]);

    if (!$$boolean(curr)) {
      return curr;
    }

    prev = curr;
  }

  return prev;
}; // tslint:disable-next-line:variable-name

const $$__and = $__and(null, null); // tslint:disable-next-line:variable-name

const $__or = (state, name) => (...args) => {
  // S expression: ($__or 'expr1 ... 'exprN)
  //  -> (if any ($boolean expr1) ... ($boolean exprN) are true) S expr  : expr-i (where i: index of item first ($boolean expr-i) is to be true)
  //  -> (else)                                                  S expr  : expr-i (false right most)
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__or', args, 1);
  let prev = null;

  for (let i = 0; i < args.length; i++) {
    const curr = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, args[i]);

    if ($$boolean(curr)) {
      return curr;
    }

    prev = curr;
  }

  return prev;
}; // tslint:disable-next-line:variable-name

const $$__or = $__or(null, null);
const $ambiguousEq = (state, name) => (...args) => {
  // S expression: (== a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$ambiguousEq', args, 2, 2);
  let {
    car,
    cdr
  } = $$firstAndSecond(...args);
  if (Array.isArray(car) && car.length === 0) car = null;
  if (Array.isArray(cdr) && cdr.length === 0) cdr = null;
  if (car === void 0) car = null;
  if (cdr === void 0) cdr = null; // tslint:disable-next-line:triple-equals

  return car == cdr;
};
const $$ambiguousEq = $ambiguousEq(null, null);
const $ambiguousNotEq = (state, name) => (...args) => {
  // S expression: (!= a b)
  //  -> S expr  : boolean
  return !$$ambiguousEq(...args);
};
const $$ambiguousNotEq = $ambiguousNotEq(null, null);
const $lt = (state, name) => (...args) => {
  // S expression: (< a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$lt', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(car) < Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(cdr);
};
const $$lt = $lt(null, null);
const $le = (state, name) => (...args) => {
  // S expression: (<= a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$le', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(car) <= Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(cdr);
};
const $$le = $le(null, null);
const $gt = (state, name) => (...args) => {
  // S expression: (> a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$gt', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(car) > Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(cdr);
};
const $$gt = $gt(null, null);
const $ge = (state, name) => (...args) => {
  // S expression: (>= a b)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$ge', args, 2, 2);
  const {
    car,
    cdr
  } = $$firstAndSecond(...args);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(car) >= Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(cdr);
};
const $$ge = $ge(null, null);
const $symbol = (state, name) => (...args) => {
  // S expression: ($symbol)
  // S expression: ($symbol name)
  //  -> S expr  : symbol
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$symbol', args, 1, 1);

  if (typeof args[0] === 'string') {
    return {
      symbol: args[0]
    };
  } else {
    throw new Error(`[SX] $symbol: Invalid argument(s): item(s) of args[0] is not string.`);
  }
};
const $$symbol = $symbol(null, null); // tslint:disable-next-line:variable-name

const $__gensym = (state, name) => (...args) => {
  // S expression: ($__gensym)
  // S expression: ($__gensym name)
  //  -> S expr  : symbol
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$__gensym', args, 0, 1);
  const varBaseName = `$__tempvar__$$ec${state.evalCount++}$$_`;
  const tempVarSym = {
    symbol: `${varBaseName}_$gensym`
  };

  if (args.length === 1) {
    const a = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(args[0]);

    if (a) {
      $__let(state, '')(a, tempVarSym);
    } else if (typeof args[0] === 'string') {
      $__let(state, '')({
        symbol: args[0]
      }, tempVarSym);
    } else {
      throw new Error(`[SX] $__gensym: Invalid argument(s): item(s) of args[0] is not symbol.`);
    }
  }

  return tempVarSym;
};
const $isSymbol = (state, name) => (...args) => {
  // S expression: ($is-symbol x)
  // S expression: ($is-symbol x name)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isSymbol', args, 1, 2);

  if (args.length === 1) {
    return Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(args[0]) ? true : false;
  } else {
    if (typeof args[1] === 'string') {
      return Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(args[0], args[1]) ? true : false;
    } else {
      throw new Error(`[SX] $isSymbol: Invalid argument(s): item(s) of args[1] is not string.`);
    }
  }
};
const $$isSymbol = $isSymbol(null, null);
const $isList = (state, name) => (...args) => {
  // S expression: ($is-list x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isList', args, 1, 1);
  return Array.isArray($$first(...args));
};
const $$isList = $isList(null, null);
const $isString = (state, name) => (...args) => {
  // S expression: ($is-string x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isString', args, 1, 1);
  return typeof $$first(...args) === 'string';
};
const $$isString = $isString(null, null);
const $isNumber = (state, name) => (...args) => {
  // S expression: ($is-number x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isNumber', args, 1, 1);
  return typeof $$first(...args) === 'number';
};
const $$isNumber = $isNumber(null, null);
const $isNaN = (state, name) => (...args) => {
  // S expression: ($is-NaN x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isNaN', args, 1, 1);
  return Number.isNaN($$first(...args));
};
const $$isNaN = $isNaN(null, null);
const $isFinite = (state, name) => (...args) => {
  // S expression: ($is-finate x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isFinite', args, 1, 1);
  return Number.isFinite($$first(...args));
};
const $$isFinite = $isFinite(null, null);
const $isInteger = (state, name) => (...args) => {
  // S expression: ($is-integer x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isInteger', args, 1, 1);
  return Number.isInteger($$first(...args));
};
const $$isInteger = $isInteger(null, null);
const $toString = (state, name) => (...args) => {
  // S expression: ($to-string x)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$toString', args, 1, 1);
  return String($$first(...args));
};
const $$toString = $toString(null, null);
const $toNumber = (state, name) => (...args) => {
  // S expression: ($to-number x)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$toNumber', args, 1, 1);
  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["toNumber"])($$first(...args));
};
const $$toNumber = $toNumber(null, null); // tslint:disable-next-line:variable-name

const $__toObject = (state, name) => (...args) => {
  // S expression: ($__# '(name value...)...)
  //  -> JSON    : {name: value, ...}
  const r = {};

  for (const x of args) {
    if (Array.isArray(x) && 0 < x.length) {
      const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_2__["isSymbol"])(x[0]);
      const keyName = sym ? sym.symbol : String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x[0]));
      Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkUnsafeVarNamesEx"])('$__#', r, keyName);

      if (x.length === 1) {
        // S expression: (# ... (keyName) ...)
        //  -> JSON    : {..., keyName: true, ...}
        r[keyName] = true;
      } else if (x.length === 2) {
        // S expression: (# ... (keyName value) ...)
        //  -> JSON    : {..., keyName: value, ...}
        r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, x[1]);
      } else {
        // S expression: (# ... (keyName value1 value2 ...) ...)
        //  -> JSON    : {..., keyName: [value1, value2, ], ...}
        r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_3__["evaluate"])(state, [{
          symbol: state.config.reservedNames.list
        }].concat(x.slice(1)));
      }
    } else {
      throw new Error(`[SX] $__toObject: Invalid argument(s): args[?] is not array.`);
    }
  }

  return r;
};
const assignBlacklists = [_consts__WEBPACK_IMPORTED_MODULE_1__["globalObj"], Object.__proto__, {}.__proto__, Function.__proto__];
const $objectAssign = (state, name) => (...args) => {
  // S expression: ($object-assign x)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$objectAssign', args, 1);

  if (assignBlacklists.includes(args[0])) {
    throw new Error(`[SX] $objectAssign: Invalid argument: args[0] is blacklisted object.`);
  }

  return Object.assign(args[0], ...args.slice(1));
};
const $$objectAssign = $objectAssign(null, null);
const $jsonStringify = (state, name) => (...args) => {
  // S expression: ($json-stringify x)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$jsonStringify', args, 1, 1);
  return JSON.stringify($$first(...args));
};
const $$jsonStringify = $jsonStringify(null, null);
const $jsonParse = (state, name) => (...args) => {
  // S expression: ($json-parse x)
  //  -> S expr  : object
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$jsonParse', args, 1, 1);
  const s = $$first(...args);

  if (typeof s !== 'string') {
    throw new Error(`[SX] $jsonParse: Invalid argument(s): args[0] is not string.`);
  }

  return JSON.parse(s);
};
const $$jsonParse = $jsonParse(null, null);
const $now = (state, name) => (...args) => {
  // S expression: ($now)
  //  -> S expr  : number
  return Date.now();
};
const $$now = $now(null, null);
const $datetimeFromIso = (state, name) => (...args) => {
  // S expression: ($datetime-from-iso str)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$datetimeFromIso', args, 1, 1);
  const s = $$first(...args);

  if (typeof s !== 'string') {
    throw new Error(`[SX] $datetimeFromIso: Invalid argument(s): args[0] is not string.`);
  }

  if (!/^(?:(?:-[0-9]{6,})|[0-9]{4,})-(?:[0-1][0-9])-(?:[0-3][0-9])(?:T(?:[0-2][0-9])(?:[:](?:[0-6][0-9])(?:[:](?:[0-6][0-9])(?:.[0-9]{1,})?)?)?(?:Z|[-+][0-9]{2}(?:[:]?[0-6][0-9])?)?)?$/.test(s)) {
    throw new Error(`[SX] $datetimeFromIso: Invalid datetime (pattern unmatched): ${s}.`);
  }

  const dt = new Date(s).getTime();

  if (Number.isNaN(dt)) {
    throw new Error(`[SX] $datetimeFromIso: Invalid datetime: ${s}.`);
  }

  return dt;
};
const $$datetimeFromIso = $datetimeFromIso(null, null);
const $datetime = (state, name) => (...args) => {
  // S expression: ($datetime year month1-12 day)
  // S expression: ($datetime year month1-12 day hours)
  // S expression: ($datetime year month1-12 day hours minutes)
  // S expression: ($datetime year month1-12 day hours minutes seconds)
  // S expression: ($datetime year month1-12 day hours minutes seconds milliseconds)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$datetime', args, 3, 7);
  let s = '';
  const year = Number(args[0]);

  if (year >= 0) {
    s += String(year).padStart(4, '0');
  } else {
    s += '-' + String(-year).padStart(6, '0');
  } // month1


  s += '-' + String(Number(args[1])).padStart(2, '0'); // day

  s += '-' + String(Number(args[2])).padStart(2, '0'); // hours

  if (args.length >= 4) {
    s += 'T' + String(Number(args[3])).padStart(2, '0'); // minutes

    if (args.length >= 5) {
      s += ':' + String(Number(args[4])).padStart(2, '0');
    } else {
      s += ':00';
    } // seconds


    if (args.length >= 6) {
      s += ':' + String(Number(args[5])).padStart(2, '0');
    } // milliseconds


    if (args.length >= 7) {
      s += '.' + String(Number(args[6])).padStart(3, '0').slice(0, 3);
    }

    s += 'Z';
  }

  const dt = new Date(s).getTime();

  if (Number.isNaN(dt)) {
    throw new Error(`[SX] $datetime: Invalid datetime: ${s}.`);
  }

  return dt;
};
const $$datetime = $datetime(null, null);
const $datetimeLc = (state, name) => (...args) => {
  // S expression: ($datetime-lc year month1-12 day)
  // S expression: ($datetime-lc year month1-12 day hours)
  // S expression: ($datetime-lc year month1-12 day hours minutes)
  // S expression: ($datetime-lc year month1-12 day hours minutes seconds)
  // S expression: ($datetime-lc year month1-12 day hours minutes seconds milliseconds)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$datetimeLc', args, 3, 7);
  let s = '';
  const year = Number(args[0]);

  if (year >= 0) {
    s += String(year).padStart(4, '0');
  } else {
    s += '-' + String(-year).padStart(6, '0');
  } // month1


  s += '-' + String(Number(args[1])).padStart(2, '0'); // day

  s += '-' + String(Number(args[2])).padStart(2, '0'); // hours

  if (args.length >= 4) {
    s += 'T' + String(Number(args[3])).padStart(2, '0'); // minutes

    if (args.length >= 5) {
      s += ':' + String(Number(args[4])).padStart(2, '0');
    } else {
      s += ':00';
    } // seconds


    if (args.length >= 6) {
      s += ':' + String(Number(args[5])).padStart(2, '0');
    } // milliseconds


    if (args.length >= 7) {
      s += '.' + String(Number(args[6])).padStart(3, '0').slice(0, 3);
    }
  } else {
    s += 'T00:00:00.000';
  }

  const dt = new Date(s).getTime();

  if (Number.isNaN(dt)) {
    throw new Error(`[SX] $datetimeLc: Invalid datetime: ${s}.`);
  }

  return dt;
};
const $$datetimeLc = $datetimeLc(null, null);
const $datetimeToIsoString = (state, name) => (...args) => {
  // S expression: ($datetime-to-iso-string number)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$datetimeToIsoString', args, 1, 1);
  const n = $$first(...args);

  if (typeof n !== 'number') {
    throw new Error(`[SX] $datetimeToIsoString: Invalid argument(s): args[0] is not number.`);
  }

  const dt = new Date(n);

  if (Number.isNaN(dt.getTime())) {
    throw new Error(`[SX] $datetimeToIsoString: Invalid datetime: ${n}.`);
  }

  return dt.toISOString();
};
const $$datetimeToIsoString = $datetimeToIsoString(null, null);
const $datetimeToComponents = (state, name) => (...args) => {
  // S expression: ($datetime-to-components number)
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$datetimeToComponents', args, 1, 1);
  const n = $$first(...args);

  if (typeof n !== 'number') {
    throw new Error(`[SX] $datetimeToComponents: Invalid argument(s): args[0] is not number.`);
  }

  const dt = new Date(n);

  if (Number.isNaN(dt.getTime())) {
    throw new Error(`[SX] $datetimeToComponents: Invalid datetime: ${n}.`);
  }

  return [dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate(), dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds(), dt.getUTCMilliseconds(), 0, dt.getUTCDay()];
};
const $$datetimeToComponents = $datetimeToComponents(null, null);
const $datetimeToComponentsLc = (state, name) => (...args) => {
  // S expression: ($datetime-to-components-lc number)
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$datetimeToComponentsLc', args, 1, 1);
  const n = $$first(...args);

  if (typeof n !== 'number') {
    throw new Error(`[SX] $datetimeToComponentsLc: Invalid argument(s): args[0] is not number.`);
  }

  const dt = new Date(n);

  if (Number.isNaN(dt.getTime())) {
    throw new Error(`[SX] $datetimeToComponentsLc: Invalid datetime: ${n}.`);
  }

  return [dt.getFullYear(), dt.getMonth() + 1, dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds(), -dt.getTimezoneOffset(), // If your time zone is UTC+2:00, +120 will be returned.
  dt.getDay()];
};
const $$datetimeToComponentsLc = $datetimeToComponentsLc(null, null);
const $match = (state, name) => (...args) => {
  // S expression: ($match pattern-str string)
  // S expression: ($match pattern-str options-str string)
  //  -> S expr  : array
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$match', args, 2, 3);

  if (!state.config.enableRegExpMatchOperators) {
    throw new Error(`[SX] $match: Operator is disabled by configuration.`);
  }

  if (args.length === 2) {
    const m = new RegExp(args[0]);
    return m.exec(args[1]);
  } else {
    const m = new RegExp(args[0], args[1]);
    return m.exec(args[2]);
  }
};
const $$match = $match(null, null);
const $consoleLog = (state, name) => (...args) => {
  // S expression: ($console-log expr1 ... exprN)
  //  -> S expr  : null
  console.log(...args);
  return null;
};
const $$consoleLog = $consoleLog(null, null);
const $consoleError = (state, name) => (...args) => {
  // S expression: ($console-error expr1 ... exprN)
  //  -> S expr  : null
  console.error(...args);
  return null;
};
const $$consoleError = $consoleError(null, null);
const $consoleTrace = (state, name) => (...args) => {
  // S expression: ($console-trace expr1 ... exprN)
  //  -> S expr  : null
  console.trace(...args);
  return null;
};
const $$consoleTrace = $consoleTrace(null, null);
const $consoleTime = (state, name) => (...args) => {
  // S expression: ($console-time)
  // S expression: ($console-time label)
  //  -> S expr  : null
  console.time(...args);
  return null;
};
const $$consoleTime = $consoleTime(null, null);
const $consoleTimeEnd = (state, name) => (...args) => {
  // S expression: ($console-time-end)
  // S expression: ($console-time-end label)
  //  -> S expr  : null
  console.timeEnd(...args);
  return null;
};
const $$consoleTimeEnd = $consoleTimeEnd(null, null);
const $consoleTimeLog = (state, name) => (...args) => {
  // S expression: ($console-time-log label)
  // S expression: ($console-time-log label value ... value)
  //  -> S expr  : null
  console.timeLog(...args);
  return null;
};
const $$consoleTimeLog = $consoleTimeLog(null, null);

/***/ }),

/***/ "./src/s-exp/operators/core/core.macro.ts":
/*!************************************************!*\
  !*** ./src/s-exp/operators/core/core.macro.ts ***!
  \************************************************/
/*! exports provided: macros, compilationMacros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compilationMacros", function() { return compilationMacros; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


const macros = [{
  name: '$scope',
  fn: (state, name) => list => {
    // S expression: ($scope isBlockLocal returnMultiple ((name value) | name ...) expr ... expr)
    //  -> S expr  : ($__scope isBlockLocal returnMultiple '((name value) | name ...) 'expr ... 'expr)
    return [{
      symbol: '$__scope'
    }, list[1], list[2], ...list.slice(3).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$local',
  fn: (state, name) => list => {
    // S expression: ($local ((name value) | name ...) expr ... expr)
    //  -> S expr  : ($__scope isBlockLocal=true returnMultiple=false '((name value) | name ...) 'expr ... 'expr)
    return [{
      symbol: '$__scope'
    }, true, false, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$global',
  fn: (state, name) => list => {
    // S expression: ($__global expr1 ... exprN)
    //  -> S expr  : ($__global returnMultiple=false 'expr ... 'expr)
    return [{
      symbol: '$__global'
    }, false, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$clisp-let',
  fn: (state, name) => list => {
    // S expression: ($clisp-let ((name value) | name ...) expr ... expr)
    //  -> S expr  : ($__scope isBlockLocal=true returnMultiple=false '((name value) | name ...) 'expr ... 'expr)
    return [{
      symbol: '$__scope'
    }, true, false, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$capture',
  fn: (state, name) => list => {
    // S expression: ($capture (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__capture '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__capture'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$closure',
  fn: (state, name) => list => {
    // S expression: ($closure (sym1 ... symN) use (u-sym1 ... u-symM) expr ... expr)
    //  -> S expr  : ($__capture '(u-sym1 ... u-symM) ($__lambda '(sym1 ... symN) 'expr ... 'expr) )
    const symUse = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], 'use');

    if (!symUse) {
      throw new Error(`[SX] $closure: Invalid syntax: missing 'use' keyword.`);
    }

    return [{
      symbol: '$__capture'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[3]), Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, [{
      symbol: '$__lambda'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), ...list.slice(4).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))])];
  }
}, {
  name: '|->',
  fn: (state, name) => list => {
    // S expression: (|-> (sym1 ... symN) use (u-sym1 ... u-symM) expr ... expr)
    //  -> S expr  : ($closure (sym1 ... symN) use (u-sym1 ... u-symM) expr ... expr)
    return [{
      symbol: '$closure'
    }, ...list.slice(1)];
  }
}, {
  name: '$lambda',
  fn: (state, name) => list => {
    // S expression: ($lambda (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__lambda '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__lambda'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '->',
  fn: (state, name) => list => {
    // S expression: ($lambda (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__lambda '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__lambda'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$defun',
  fn: (state, name) => list => {
    // S expression: ($defun name (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__defun 'name '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__defun'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$refun',
  fn: (state, name) => list => {
    // S expression: ($refun name)
    //  -> S expr  : ($__refun 'name)
    return [{
      symbol: '$__refun'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '<-',
  fn: (state, name) => list => {
    // S expression: (<- name)
    //  -> S expr  : ($__refun 'name)
    return [{
      symbol: '$__refun'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$defmacro',
  fn: (state, name) => list => {
    // S expression: ($defmacro name (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($__defmacro 'name '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$__defmacro'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$call',
  fn: (state, name) => list => {
    // S expression: ($call thisArg symbol arg1 ... argN)
    //  -> S expr  : ($__call thisArg 'symbol arg1 ... argN)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$call', list, 3);
    return [{
      symbol: '$__call'
    }, list[1], Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[2]), ...list.slice(3)];
  }
}, {
  name: '$try',
  fn: (state, name) => list => {
    // S expression: ($try expr catch-expr)
    //  -> S expr  : ($__try 't-expr 'catch-expr)
    return [{
      symbol: '$__try'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$if',
  fn: (state, name) => list => {
    // S expression: ($if cond t-expr f-expr)
    //  -> S expr  : ($__if cond 't-expr 'f-expr)
    return [{
      symbol: '$__if'
    }, list[1], ...list.slice(2).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$if-null',
  fn: (state, name) => list => {
    // S expression: ($if-null cond null-expr)
    //  -> S expr  : ($__if-null cont 'null-expr)
    return [{
      symbol: '$__if-null'
    }, list[1], ...list.slice(2).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '??',
  fn: (state, name) => list => {
    // S expression: (?? cond null-expr)
    //  -> S expr  : ($__if-null cont 'null-expr)
    return [{
      symbol: '$__if-null'
    }, list[1], ...list.slice(2).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$cond',
  fn: (state, name) => list => {
    // S expression: ($cond cond1 expr1 ... condN exprN)
    //  -> S expr  : ($__cond 'cond1 'expr1 ... 'condN 'exprN)
    return [{
      symbol: '$__cond'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$while',
  fn: (state, name) => list => {
    // S expression: ($while condition expr1 exprN)
    //  -> S expr  : ($__while 'condition 'expr1 'exprN)
    return [{
      symbol: '$__while'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$do-while',
  fn: (state, name) => list => {
    // S expression: ($do-while condition expr1 exprN)
    //  -> S expr  : ($__do-while 'condition 'expr1 'exprN)
    return [{
      symbol: '$__do-while'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$until',
  fn: (state, name) => list => {
    // S expression: ($until condition expr1 exprN)
    //  -> S expr  : ($__until 'condition 'expr1 'exprN)
    return [{
      symbol: '$__until'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$do-until',
  fn: (state, name) => list => {
    // S expression: ($do-until condition expr1 exprN)
    //  -> S expr  : ($__do-until 'condition 'expr1 'exprN)
    return [{
      symbol: '$__do-until'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$repeat',
  fn: (state, name) => list => {
    // S expression: ($repeat i of n-times expr1 exprN)
    //  -> S expr  : ($__repeat 'i n-times 'expr1 'exprN)
    const symOf = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], 'of');

    if (!symOf) {
      throw new Error(`[SX] $repeat: Invalid syntax: missing 'of' keyword.`);
    }

    return [{
      symbol: '$__repeat'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[3], ...list.slice(4).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$for',
  fn: (state, name) => list => {
    // S expression: ($for x of list expr1 exprN)
    //  -> S expr  : ($__for 'x list 'expr1 'exprN)
    const symOf = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], 'of');

    if (!symOf) {
      throw new Error(`[SX] $for: Invalid syntax: missing 'of' keyword.`);
    }

    return [{
      symbol: '$__for'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[3], ...list.slice(4).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$get',
  fn: (state, name) => list => {
    // S expression: ($get nameOrIndex1 ... nameOrIndexN)
    //  -> S expr  : ($__get 'nameOrIndex1 ... 'nameOrIndexN)
    return [{
      symbol: '$__get'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$let',
  fn: (state, name) => list => {
    // S expression: ($let nameStrOrSymbol expr)
    //  -> S expr  : ($__let 'nameStrOrSymbol expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$let', list, 3, 3);
    return [{
      symbol: '$__let'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$clisp-defvar',
  fn: (state, name) => list => {
    // S expression: ($let nameStrOrSymbol expr)
    //  -> S expr  : ($__let 'nameStrOrSymbol expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$clisp-defvar', list, 3, 3);
    return [{
      symbol: '$global'
    }, [{
      symbol: '$__let'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]]];
  }
}, {
  name: '$set',
  fn: (state, name) => list => {
    // S expression: ($set nameOrListOfNameOrIndex expr)
    //  -> S expr  : ($__set 'nameOrListOfNameOrIndex expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$set', list, 3, 3);
    return [{
      symbol: '$__set'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$clisp-setq',
  fn: (state, name) => list => {
    // S expression: ($clisp-setq symbol expr)
    //  -> S expr  : ($__set 'symbol expr)
    Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$clisp-setq', list, 3, 3);
    return [{
      symbol: '$__set'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), list[2]];
  }
}, {
  name: '$and',
  fn: (state, name) => list => {
    // S expression: ($and expr1 ... exprN)
    //  -> S expr  : ($__and 'expr1 ... 'exprN)
    return [{
      symbol: '$__and'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$or',
  fn: (state, name) => list => {
    // S expression: ($or expr1 ... exprN)
    //  -> S expr  : ($__or 'expr1 ... 'exprN)
    return [{
      symbol: '$__or'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$gensym',
  fn: (state, name) => list => {
    // S expression: ($gensym)
    // S expression: ($gensym name)
    //  -> S expr  : ($__gensym 'name)
    return [{
      symbol: '$__gensym'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '#',
  fn: (state, name) => list => {
    // S expression: (# (name value...)...)
    //  -> S expr  : ($__# '(name value...)...)
    return [{
      symbol: '$__#'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}];
const compilationMacros = [{
  name: '$$closure',
  fn: (state, name) => list => {
    // S expression: ($$closure (sym1 ... symN) use (u-sym1 ... u-symM) expr ... expr)
    //  -> S expr  : ($__capture '(u-sym1 ... u-symM) ($$__lambda '(sym1 ... symN) 'expr ... 'expr) )
    const symUse = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], 'use');

    if (!symUse) {
      throw new Error(`[SX] $closure: Invalid syntax: missing 'use' keyword.`);
    }

    return [{
      symbol: '$__capture'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[3]), Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, [{
      symbol: '$$__lambda'
    }, Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list[1]), ...list.slice(4).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))])];
  }
}, {
  name: '|=>',
  fn: (state, name) => list => {
    // S expression: (|-> (sym1 ... symN) use (u-sym1 ... u-symM) expr ... expr)
    //  -> S expr  : ($closure (sym1 ... symN) use (u-sym1 ... u-symM) expr ... expr)
    return [{
      symbol: '$$closure'
    }, ...list.slice(1)];
  }
}, {
  name: '$$lambda',
  fn: (state, name) => list => {
    // S expression: ($$lambda (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($$__lambda '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$$__lambda'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '=>',
  fn: (state, name) => list => {
    // S expression: ($$lambda (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($$__lambda '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$$__lambda'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$$defun',
  fn: (state, name) => list => {
    // S expression: ($$defun name (sym1 ... symN) expr ... expr)
    //  -> S expr  : ($$__defun 'name '(sym1 ... symN) 'expr ... 'expr)
    return [{
      symbol: '$$__defun'
    }, ...list.slice(1).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}]; // for backword compatibility

/* harmony default export */ __webpack_exports__["default"] = ([].concat(macros, compilationMacros));

/***/ }),

/***/ "./src/s-exp/operators/core/core.operator.ts":
/*!***************************************************!*\
  !*** ./src/s-exp/operators/core/core.operator.ts ***!
  \***************************************************/
/*! exports provided: operators, compilationOperators, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operators", function() { return operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compilationOperators", function() { return compilationOperators; });
/* harmony import */ var _core_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const operators = [{
  name: '$car',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$car"]
}, {
  name: '$cdr',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$cdr"]
}, {
  name: '$cons',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$cons"]
}, {
  name: '$first',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$first"]
}, {
  name: '$second',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$second"]
}, {
  name: '$last',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$last"]
}, {
  name: '$progn',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$last"]
}, {
  name: '$rest',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$rest"]
}, {
  name: '$first-and-second',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$firstAndSecond"]
}, {
  name: '$atom',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$atom"]
}, {
  name: '$eq',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$eq"]
}, {
  name: '===',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$eq"]
}, {
  name: '$not-eq',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$notEq"]
}, {
  name: '!==',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$notEq"]
}, {
  name: '$list',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$list"]
}, {
  name: '$__scope',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__scope"]
}, {
  name: '$__global',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__globalScope"]
}, {
  name: '$__capture',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__capture"]
}, {
  name: '$__lambda',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__lambda"]
}, {
  name: '$__defun',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__defun"]
}, {
  name: '$__refun',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__refun"]
}, {
  name: '$__defmacro',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__defmacro"]
}, {
  name: '$apply',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$apply"]
}, {
  name: '$__call',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__call"]
}, {
  name: '$__try',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__try"]
}, {
  name: '$raise',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$raise"]
}, {
  name: '$__if',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__if"]
}, {
  name: '$__if-null',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__ifNull"]
}, {
  name: '$__cond',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__cond"]
}, {
  name: '$__while',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__while"]
}, {
  name: '$__do-while',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__doWhile"]
}, {
  name: '$__until',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__until"]
}, {
  name: '$__do-until',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__doUntil"]
}, {
  name: '$__repeat',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__repeat"]
}, {
  name: '$__for',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__for"]
}, {
  name: '$pipe',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$pipe"]
}, {
  name: '$__get',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__get"]
}, {
  name: '$__let',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__let"]
}, {
  name: '$__set',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__set"]
}, {
  name: '$boolean',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$boolean"]
}, {
  name: '$not',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$not"]
}, {
  name: '$__and',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__and"]
}, {
  name: '$__or',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__or"]
}, {
  name: '==',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$ambiguousEq"]
}, {
  name: '!=',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$ambiguousNotEq"]
}, {
  name: '<',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$lt"]
}, {
  name: '<=',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$le"]
}, {
  name: '>',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$gt"]
}, {
  name: '>=',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$ge"]
}, {
  name: '$symbol',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$symbol"]
}, {
  name: '$__gensym',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__gensym"]
}, {
  name: '$is-symbol',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isSymbol"]
}, {
  name: '$is-list',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isList"]
}, {
  name: '$is-string',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isString"]
}, {
  name: '$is-number',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isNumber"]
}, {
  name: '$is-NaN',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isNaN"]
}, {
  name: '$is-finite',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isFinite"]
}, {
  name: '$is-integer',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isInteger"]
}, {
  name: '$to-string',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$toString"]
}, {
  name: '$to-number',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$toNumber"]
}, {
  name: '$__#',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$__toObject"]
}, {
  name: '$object-assign',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$objectAssign"]
}, {
  name: '$json-stringify',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$jsonStringify"]
}, {
  name: '$now',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$now"]
}, {
  name: '$datetime-from-iso',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$datetimeFromIso"]
}, {
  name: '$datetime',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$datetime"]
}, {
  name: '$datetime-lc',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$datetimeLc"]
}, {
  name: '$datetime-to-iso-string',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$datetimeToIsoString"]
}, {
  name: '$datetime-to-components',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$datetimeToComponents"]
}, {
  name: '$datetime-to-components-lc',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$datetimeToComponentsLc"]
}, {
  name: '$json-parse',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$jsonParse"]
}, {
  name: '$match',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$match"]
}, {
  name: '$console-log',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleLog"]
}, {
  name: '$console-error',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleError"]
}, {
  name: '$console-trace',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleTrace"]
}, {
  name: '$console-time',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleTime"]
}, {
  name: '$console-time-end',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleTimeEnd"]
}, {
  name: '$console-time-log',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$consoleTimeLog"]
}];
const compilationOperators = [{
  name: '$$__lambda',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$comp$__lambda"]
}, {
  name: '$$__defun',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$comp$__defun"]
}]; // for backword compatibility

/* harmony default export */ __webpack_exports__["default"] = ([].concat(operators, compilationOperators));

/***/ }),

/***/ "./src/s-exp/operators/core/core.symbol.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/core/core.symbol.ts ***!
  \*************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [{
  name: 'nil',
  fn: (state, name) => []
}, {
  name: 'null',
  fn: (state, name) => null
}, {
  name: 'undefined',
  fn: (state, name) => void 0
}, {
  name: 'true',
  fn: (state, name) => true
}, {
  name: '#true',
  fn: (state, name) => true
}, {
  name: '#t',
  fn: (state, name) => true
}, {
  name: 'false',
  fn: (state, name) => false
}, {
  name: '#false',
  fn: (state, name) => false
}, {
  name: '#f',
  fn: (state, name) => false
}, {
  name: '#Number:Infinity',
  fn: (state, name) => Number.POSITIVE_INFINITY
}, {
  name: '+Infinity',
  fn: (state, name) => Number.POSITIVE_INFINITY
}, {
  name: '-Infinity',
  fn: (state, name) => Number.NEGATIVE_INFINITY
}, {
  name: '#Number:Epsilon',
  fn: (state, name) => Number.EPSILON
}, {
  name: '#Number:MaxValue',
  fn: (state, name) => Number.MAX_VALUE
}, {
  name: '#Number:MinValue',
  fn: (state, name) => Number.MIN_VALUE
}, {
  name: '#Number:MinSafeInteger',
  fn: (state, name) => Number.MAX_SAFE_INTEGER
}, {
  name: '#Number:MinSafeInteger',
  fn: (state, name) => Number.MIN_SAFE_INTEGER
}, {
  name: 'NaN',
  fn: (state, name) => Number.NaN
}];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/core/index.ts":
/*!*******************************************!*\
  !*** ./src/s-exp/operators/core/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _core_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.operator */ "./src/s-exp/operators/core/core.operator.ts");
/* harmony import */ var _core_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.macro */ "./src/s-exp/operators/core/core.macro.ts");
/* harmony import */ var _core_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.symbol */ "./src/s-exp/operators/core/core.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_core_operator__WEBPACK_IMPORTED_MODULE_0__["operators"]).concat(config.enableCompilationOperators ? _core_operator__WEBPACK_IMPORTED_MODULE_0__["compilationOperators"] : []);
  config.macros = (config.macros || []).concat(_core_macro__WEBPACK_IMPORTED_MODULE_1__["macros"]).concat(config.enableCompilationOperators ? _core_macro__WEBPACK_IMPORTED_MODULE_1__["compilationMacros"] : []);
  config.symbols = (config.symbols || []).concat(_core_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/jsx/index.ts":
/*!******************************************!*\
  !*** ./src/s-exp/operators/jsx/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _jsx_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx.operator */ "./src/s-exp/operators/jsx/jsx.operator.ts");
/* harmony import */ var _jsx_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsx.macro */ "./src/s-exp/operators/jsx/jsx.macro.ts");
/* harmony import */ var _jsx_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsx.symbol */ "./src/s-exp/operators/jsx/jsx.symbol.ts");
/* harmony import */ var _jsx_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsx.fn */ "./src/s-exp/operators/jsx/jsx.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




function install(config, lsxConf) {
  config.funcs = (config.funcs || []).concat(_jsx_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_jsx_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_jsx_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const components = Object.entries(lsxConf.components).map(x => ({
    name: x[0],
    fn: Object(_jsx_fn__WEBPACK_IMPORTED_MODULE_3__["$jsxComponentTag"])(x[1])
  }));
  config.funcs = config.funcs.concat({
    name: config.reservedNames.Template,
    fn: Object(_jsx_fn__WEBPACK_IMPORTED_MODULE_3__["$jsxComponentTag"])(lsxConf.jsxFlagment)
  }, ...components);
  config.funcSymbolResolverFallback = _jsx_fn__WEBPACK_IMPORTED_MODULE_3__["$jsxStandardTag"];
  config.jsx = lsxConf.jsx;
  config.JsxFragment = lsxConf.jsxFlagment;
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.fn.ts":
/*!*******************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.fn.ts ***!
  \*******************************************/
/*! exports provided: $__outputIf, $__outputForOf, $jsxProps, $jsxStandardTag, $jsxComponentTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__outputIf", function() { return $__outputIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__outputForOf", function() { return $__outputForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsxProps", function() { return $jsxProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsxStandardTag", function() { return $jsxStandardTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$jsxComponentTag", function() { return $jsxComponentTag; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ast */ "./src/s-exp/ast.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



 // tslint:disable-next-line:variable-name

const $__outputIf = (state, name) => (...args) => {
  // S expression: ($__outputIf cond 'expr)
  //  -> (if cond is true ) S expr  : expr
  //  -> (if cond is false) S expr  : ()
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__outputIf', args, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$$firstAndSecond"])(...args);
  let r = [];

  if (Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$$boolean"])(car)) {
    if (2 < args.length) {
      r.push({
        symbol: state.config.reservedNames.Template
      }, ...args.slice(1));
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, r);
    } else {
      r = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, cdr);
    }
  }

  return r;
}; // tslint:disable-next-line:variable-name

const $__outputForOf = (state, name) => (...args) => {
  // S expression: ($__outputForOf list 'expr)
  //  -> S expr  : (Template expr ... expr)
  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkParamsLength"])('$__outputForOf', args, 2);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$$first"])(...args);
  const r = [];

  if (Array.isArray(car)) {
    for (let i = 0; i < car.length; i++) {
      const x = car[i];
      const v = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_3__["$__scope"])(state, name)(true, true, [['$data', Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x)], ['$index', i], ['$array', Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, car)], ['$parent', Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["getScope"])(state).scope)]], ...args.slice(1));

      if (2 < args.length && Array.isArray(v)) {
        r.push(...v);
      } else {
        r.push(v);
      }
    }
  } else {
    throw new Error(`[SX] $__outputForOf: Invalid argument(s): args[0] is not array.`);
  } // All of r items are already evaluated.


  return Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
    symbol: state.config.reservedNames.Template
  }].concat(r.map(z => [{
    symbol: state.config.reservedNames.quote
  }, z])));
};
const $jsxProps = (state, name) => (...args) => {
  // S expression: (@ (name value...)...)
  //  -> JSON    : {name: value, ...}
  const r = {};

  for (const x of args) {
    if (Array.isArray(x) && 0 < x.length) {
      const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(x[0]);
      const keyName = sym ? sym.symbol : String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[0]));

      switch (keyName) {
        case 'style':
          {
            if (x.length === 1) {
              // S expression: (@ ... (style) ...)
              //  -> JSON    : {..., style: "", ...}
              r[keyName] = "";
            } else if (x.length >= 2) {
              // S expression: (@ ... (style "styleName1: styleValue1; ..." ...) ...)
              // S expression: (@ ... (style (styleName1 styleValue1) ...) ...)
              //  -> JSON    : {..., style: {styleName1: styleValue1}, ...}
              const styles = {};

              for (const s of x.slice(1)) {
                if (Array.isArray(s) && 1 < s.length) {
                  const styleName = String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[0]));
                  Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNamesEx"])('$jsxProps', styles, styleName);
                  styles[styleName] = String(Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[1]));
                } else if (typeof s === 'string') {
                  for (const v of s.split(';')) {
                    const matched = /^\s*(\S+)\s*:\s*(.*?)\s*$/.exec(v);

                    if (matched) {
                      Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNamesEx"])('$jsxProps', styles, matched[1]);
                      styles[matched[1]] = matched[2];
                    }
                  }
                }
              }

              r[keyName] = styles;
            }
          }
          break;

        case 'class':
        case 'styleClass':
          {
            if (x.length === 1) {
              // S expression: (@ ... (class) ...)
              //  -> JSON    : {..., class: [], ...}
              r[keyName] = [];
            } else if (x.length >= 2) {
              // S expression: (@ ... (class "className1 className2 ...") ...)
              // S expression: (@ ... (class (className1 className2 ...)) ...)
              //  -> JSON    : {..., class: [className1 className2 ...], ...}
              let classes = [];

              for (const c of x.slice(1)) {
                if (Array.isArray(c)) {
                  classes = classes.concat(c.map(z => Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, z)));
                } else if (typeof c === 'string') {
                  classes = classes.concat(c.split(' '));
                }
              }

              const cs = [];

              const fn = a => a.forEach(c => c === null || c === void 0 ? void 0 : Array.isArray(c) ? fn(c) : cs.push(String(c)));

              fn(classes);
              r[keyName] = cs;
            }
          }
          break;

        case 'className':
          {
            if (x.length === 1) {
              // S expression: (@ ... (class) ...)
              //  -> JSON    : {..., class: "", ...}
              r[keyName] = '';
            } else if (x.length >= 2) {
              // S expression: (@ ... (class "className1 className2 ...") ...)
              // S expression: (@ ... (class (className1 className2 ...)) ...)
              //  -> JSON    : {..., class: "className1 className2 ...", ...}
              let classes = '';

              for (const c of x.slice(1)) {
                let fragment = '';

                if (Array.isArray(c)) {
                  const cs = [];

                  const fn = a => a.map(z => Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, z)).forEach(z => z === null || z === void 0 ? void 0 : Array.isArray(z) ? fn(z) : cs.push(String(z)));

                  fn(c);
                  fragment = cs.join(' ');
                } else if (typeof c === 'string') {
                  fragment = c;
                }

                if (0 < classes.length) classes += ' ' + fragment;else classes = fragment;
              }

              r[keyName] = classes;
            }
          }
          break;

        case 'dangerouslySetInnerHTML':
          {
            if (x.length === 1) {
              r[keyName] = {
                __html: ''
              };
            } else if (x.length >= 2) {
              r[keyName] = {
                __html: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[1])
              };
            } else {
              r[keyName] = {
                __html: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
                  symbol: state.config.reservedNames.list
                }].concat(x.slice(1)))
              };
            }
          }
          break;

        case 'setInnerText':
          {
            if (x.length === 1) {
              r[keyName] = {
                __text: ''
              };
            } else if (x.length >= 2) {
              r[keyName] = {
                __text: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[1])
              };
            } else {
              r[keyName] = {
                __text: Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
                  symbol: state.config.reservedNames.list
                }].concat(x.slice(1)))
              };
            }
          }
          break;

        default:
          {
            Object(_errors__WEBPACK_IMPORTED_MODULE_2__["checkUnsafeVarNamesEx"])('$jsxProps', r, keyName);

            if (x.length === 1) {
              // S expression: (@ ... (keyName) ...)
              //  -> JSON    : {..., keyName: true, ...}
              r[keyName] = true;
            } else if (x.length === 2) {
              // S expression: (@ ... (keyName value) ...)
              //  -> JSON    : {..., keyName: value, ...}
              r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, x[1]);
            } else {
              // S expression: (@ ... (keyName value1 value2 ...) ...)
              //  -> JSON    : {..., keyName: [value1, value2, ], ...}
              r[keyName] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, [{
                symbol: state.config.reservedNames.list
              }].concat(x.slice(1)));
            }
          }
          break;
      }
    } else {
      throw new Error(`[SX] $jsxProps: Invalid argument(s): args[?] is not array.`);
    }
  }

  return r;
};

function getJsxTagsParams(state, ...args) {
  let children = args;
  let props = {};

  if (0 < args.length && Array.isArray(args[0])) {
    const sym = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(args[0][0], '@');

    if (sym) {
      props = $jsxProps(state, '')(...args[0].slice(1));
      children = children.slice(1);
    }
  }

  return {
    props,
    children
  };
}

const $jsxStandardTag = (state, name) => (...args) => {
  const {
    props,
    children
  } = getJsxTagsParams(state, ...args);
  return state.config.jsx(name, props, ...children);
};
const $jsxComponentTag = component => (state, name) => (...args) => {
  const {
    props,
    children
  } = getJsxTagsParams(state, ...args);
  return state.config.jsx(component, props, ...children);
};

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.macro.ts":
/*!**********************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.macro.ts ***!
  \**********************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ast */ "./src/s-exp/ast.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const macros = [{
  name: '@',
  fn: (state, name) => list => {
    return Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, list);
  }
}, {
  name: '$=if',
  fn: (state, name) => list => {
    // S expression: ($=if cond expr)
    //  -> S expr  : ($=__if cond 'expr)
    return [{
      symbol: '$=__if'
    }, list[1], ...list.slice(2).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}, {
  name: '$=for',
  fn: (state, name) => list => {
    // S expression: ($=for list expr)
    //  -> S expr  : ($=__for list 'expr)
    return [{
      symbol: '$=__for'
    }, list[1], ...list.slice(2).map(x => Object(_ast__WEBPACK_IMPORTED_MODULE_0__["quote"])(state, x))];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.operator.ts":
/*!*************************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.operator.ts ***!
  \*************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _jsx_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx.fn */ "./src/s-exp/operators/jsx/jsx.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '$=__if',
  fn: _jsx_fn__WEBPACK_IMPORTED_MODULE_0__["$__outputIf"]
}, {
  name: '$=__for',
  fn: _jsx_fn__WEBPACK_IMPORTED_MODULE_0__["$__outputForOf"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/jsx/jsx.symbol.ts":
/*!***********************************************!*\
  !*** ./src/s-exp/operators/jsx/jsx.symbol.ts ***!
  \***********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/operators/sequence/index.ts":
/*!***********************************************!*\
  !*** ./src/s-exp/operators/sequence/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _sequence_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.operator */ "./src/s-exp/operators/sequence/sequence.operator.ts");
/* harmony import */ var _sequence_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sequence.macro */ "./src/s-exp/operators/sequence/sequence.macro.ts");
/* harmony import */ var _sequence_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence.symbol */ "./src/s-exp/operators/sequence/sequence.symbol.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function install(config) {
  config.funcs = (config.funcs || []).concat(_sequence_operator__WEBPACK_IMPORTED_MODULE_0__["default"]);
  config.macros = (config.macros || []).concat(_sequence_macro__WEBPACK_IMPORTED_MODULE_1__["default"]);
  config.symbols = (config.symbols || []).concat(_sequence_symbol__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return config;
}

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.fn.ts":
/*!*****************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.fn.ts ***!
  \*****************************************************/
/*! exports provided: $range, $length, $$length, $trim, $$trim, $trimHead, $$trimHead, $trimTail, $$trimTail, $replaceAll, $$replaceAll, $split, $$split, $join, $$join, $concat, $$concat, $slice, $$slice, $top, $$top, $tail, $$tail, $push, $$push, $pop, $$pop, $__at, $$__at, $reverse, $$reverse, $reverseDestructive, $$reverseDestructive, $find, $$find, $filter, $$filter, $map, $$map, $reduce, $$reduce, $reduceFromTail, $$reduceFromTail, $sort, $$sort, $sortDestructive, $$sortDestructive, $groupEvery, $$groupEvery, $groupBy, $$groupBy, $orderBy, $$orderBy, $where, $$where */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$range", function() { return $range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$length", function() { return $length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$length", function() { return $$length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$trim", function() { return $trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$trim", function() { return $$trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$trimHead", function() { return $trimHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$trimHead", function() { return $$trimHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$trimTail", function() { return $trimTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$trimTail", function() { return $$trimTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$replaceAll", function() { return $replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$replaceAll", function() { return $$replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$split", function() { return $split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$split", function() { return $$split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$join", function() { return $join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$join", function() { return $$join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$concat", function() { return $concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$concat", function() { return $$concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$slice", function() { return $slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$slice", function() { return $$slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$top", function() { return $top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$top", function() { return $$top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$tail", function() { return $tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$tail", function() { return $$tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$push", function() { return $push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$push", function() { return $$push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$pop", function() { return $pop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$pop", function() { return $$pop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__at", function() { return $__at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$__at", function() { return $$__at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reverse", function() { return $reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reverse", function() { return $$reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reverseDestructive", function() { return $reverseDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reverseDestructive", function() { return $$reverseDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$find", function() { return $find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$find", function() { return $$find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$filter", function() { return $filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$filter", function() { return $$filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$map", function() { return $map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$map", function() { return $$map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reduce", function() { return $reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reduce", function() { return $$reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$reduceFromTail", function() { return $reduceFromTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$reduceFromTail", function() { return $$reduceFromTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sort", function() { return $sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sort", function() { return $$sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sortDestructive", function() { return $sortDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$sortDestructive", function() { return $$sortDestructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$groupEvery", function() { return $groupEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$groupEvery", function() { return $$groupEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$groupBy", function() { return $groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$groupBy", function() { return $$groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$orderBy", function() { return $orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$orderBy", function() { return $$orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$where", function() { return $where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$where", function() { return $$where; });
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./src/s-exp/errors.ts");
/* harmony import */ var _core_core_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.fn */ "./src/s-exp/operators/core/core.fn.ts");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/data */ "./src/lib/data.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




const $range = (state, name) => (...args) => {
  // S expression: ($range start end)
  // S expression: ($range start end step)
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$range', args, 2, 3);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  const start = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(car) || 0;
  const stop = Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(cdr) || 0;
  const step = (args.length > 2 ? Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[2]) || 0 : 0) || (start <= stop ? 1 : -1);
  const n = Math.sign(stop - start) + Math.sign(step) !== 0 ? Math.floor(Math.abs(stop - start) / Math.abs(step)) + 1 : 0;
  state.evalCount += n;
  Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["evaluate"])(state, 0);
  return Array.from({
    length: n
  }, (x, i) => start + i * step);
};
const $length = (state, name) => (...args) => {
  // S expression: ($length listOrString)
  //  -> S expr  : number
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$length', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  switch (typeof car) {
    case 'object':
      if (!('length' in car)) {
        break;
      }

    // FALL_THRU

    case 'string':
      return car.length;
  }

  throw new Error(`[SX] $length: Invalid argument type: object has no property 'length'.`);
};
const $$length = $length(null, null);
const $trim = (state, name) => (...args) => {
  // S expression: ($trim string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$trim', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (typeof car === 'string') {
    return car.trim();
  }

  throw new Error(`[SX] $trim: Invalid argument type: args[0] is not string.`);
};
const $$trim = $trim(null, null);
const $trimHead = (state, name) => (...args) => {
  // S expression: ($trim-head string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$trimHead', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (typeof car === 'string') {
    return car.trimLeft();
  }

  throw new Error(`[SX] $trimHead: Invalid argument type: args[0] is not string.`);
};
const $$trimHead = $trimHead(null, null);
const $trimTail = (state, name) => (...args) => {
  // S expression: ($trim-tail string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$trimTail', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (typeof car === 'string') {
    return car.trimRight();
  }

  throw new Error(`[SX] $trimTail: Invalid argument type: args[0] is not string.`);
};
const $$trimTail = $trimTail(null, null);
const $replaceAll = (state, name) => (...args) => {
  // S expression: ($replace-all src-string match-string replacement-string)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$replaceAll', args, 3, 3);

  if (typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') {
    return args[0].split(args[1]).join(args[2]);
  }

  throw new Error(`[SX] $replaceAll: Invalid argument type: args[0] or [1] or [2] is not string.`);
};
const $$replaceAll = $replaceAll(null, null);
const $split = (state, name) => (...args) => {
  // S expression: ($split src-string match-string)
  //  -> S expr  : (string ... string)
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$split', args, 2, 2);

  if (typeof args[0] === 'string' && typeof args[1] === 'string') {
    return args[0].split(args[1]);
  }

  throw new Error(`[SX] $split: Invalid argument type: args[0] or [1] is not string.`);
};
const $$split = $split(null, null);
const $join = (state, name) => (...args) => {
  // S expression: ($join '(str1 ... strN) separator)
  //  -> S expr  : (string ... string)
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$join', args, 1, 2);

  if (typeof Array.isArray(args[0])) {
    if (args.length > 1) {
      if (typeof args[1] === 'string') {
        return args[0].join(args[1]);
      }

      throw new Error(`[SX] $join: Invalid argument type: args[1] is not string.`);
    } else {
      return args[0].join();
    }
  }

  throw new Error(`[SX] $join: Invalid argument type: args[0] is not array.`);
};
const $$join = $join(null, null);
const $concat = (state, name) => (...args) => {
  // S expression: ($concat listOrString1 ... listOrStringN)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$concat', args, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  switch (typeof car) {
    case 'object':
      if (!('concat' in car)) {
        break;
      }

    // FALL_THRU

    case 'string':
      return car.concat(...args.slice(1));
  }

  throw new Error(`[SX] $concat: Invalid argument type: object has no property 'concat'.`);
};
const $$concat = $concat(null, null);
const $slice = (state, name) => (...args) => {
  // S expression: ($slice start end listOrString)
  // S expression: ($slice start listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$slice', args, 2, 3);

  if (args.length === 3) {
    if (typeof args[2] === 'string' || Array.isArray(args[2])) {
      return args[2].slice(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]), Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[1]));
    }
  }

  if (args.length === 2) {
    if (typeof args[1] === 'string' || Array.isArray(args[1])) {
      return args[1].slice(Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]));
    }
  }

  throw new Error(`[SX] $slice: Invalid argument type: args[${args.length - 1}] is not string or array.`);
};
const $$slice = $slice(null, null);
const $top = (state, name) => (...args) => {
  // S expression: ($top n listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$top', args, 2, 2);

  if (typeof args[1] === 'string' || Array.isArray(args[1])) {
    return args[1].slice(0, Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]));
  }

  throw new Error(`[SX] $top: Invalid argument type: args[1] is not string or array.`);
};
const $$top = $top(null, null);
const $tail = (state, name) => (...args) => {
  // S expression: ($tail n listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$tail', args, 2, 2);

  if (typeof args[1] === 'string' || Array.isArray(args[1])) {
    const n = -Object(_evaluate__WEBPACK_IMPORTED_MODULE_0__["toNumber"])(args[0]);
    return args[1].slice(n >= 0 || Number.isNaN(n) ? args[1].length : n);
  }

  throw new Error(`[SX] $tail: Invalid argument type: args[1] is not string or array.`);
};
const $$tail = $tail(null, null);
const $push = (state, name) => (...args) => {
  // S expression: ($push list value)
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$push', args, 2, 2);

  if (typeof Array.isArray(args[0])) {
    args[0].push(args[1]);
    return args[0];
  }

  throw new Error(`[SX] $push: Invalid argument type: args[1] is not array.`);
};
const $$push = $push(null, null);
const $pop = (state, name) => (...args) => {
  // S expression: ($pop list)
  //  -> S expr  : value
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$pop', args, 1, 1);

  if (typeof Array.isArray(args[0])) {
    const v = args[0].pop();
    return v;
  }

  throw new Error(`[SX] $pop: Invalid argument type: args[1] is not array.`);
};
const $$pop = $pop(null, null); // tslint:disable-next-line:variable-name

const $__at = (state, name) => (...args) => {
  // S expression: ($__at index listOrString)
  //  -> S expr  : any
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$__at', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);
  return cdr[car];
}; // tslint:disable-next-line:variable-name

const $$__at = $__at(null, null);
const $reverse = (state, name) => (...args) => {
  // S expression: ($reverse listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reverse', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (Array.isArray(car)) {
    return car.slice(0).reverse();
  }

  throw new Error(`[SX] $reverse: Invalid argument type: args[0] is not array.`);
};
const $$reverse = $reverse(null, null);
const $reverseDestructive = (state, name) => (...args) => {
  // S expression: ($reverse! listOrString)
  //  -> S expr  : listOrString
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reverse!', args, 1, 1);
  const car = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$first"])(...args);

  if (Array.isArray(car)) {
    return car.reverse();
  }

  throw new Error(`[SX] $reverse!: Invalid argument type: args[0] is not array.`);
};
const $$reverseDestructive = $reverseDestructive(null, null);
const $find = (state, name) => (...args) => {
  // S expression: ($find list (lambda (v index array) (... boolean)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$find', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.find(cdr);
  }

  throw new Error(`[SX] $find: Invalid argument type: args[0] is not array.`);
};
const $$find = $find(null, null);
const $filter = (state, name) => (...args) => {
  // S expression: ($filter list (lambda (v index array) (... boolean)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$filter', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.filter(cdr);
  }

  throw new Error(`[SX] $filter: Invalid argument type: args[0] is not array.`);
};
const $$filter = $filter(null, null);
const $map = (state, name) => (...args) => {
  // S expression: ($map list (lambda (v index array) (... any)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$map', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.map(cdr);
  }

  throw new Error(`[SX] $map: Invalid argument type: args[0] is not array.`);
};
const $$map = $map(null, null);
const $reduce = (state, name) => (...args) => {
  // S expression: ($reduce list (lambda (acc v index array) (... any)) initial-value)
  // S expression: ($reduce list (lambda (acc v index array) (... any)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reduce', args, 2, 3);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    if (args.length < 3) {
      return car.reduce(cdr);
    } else {
      return car.reduce(cdr, args[2]);
    }
  }

  throw new Error(`[SX] $reduce: Invalid argument type: args[0] is not array.`);
};
const $$reduce = $reduce(null, null);
const $reduceFromTail = (state, name) => (...args) => {
  // S expression: ($reduce-from-tail list (lambda (acc v index array) (... any)) initial-value)
  // S expression: ($reduce-from-tail list (lambda (acc v index array) (... any)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$reduceFromTail', args, 2, 3);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    if (args.length < 3) {
      return car.reduceRight(cdr);
    } else {
      return car.reduceRight(cdr, args[2]);
    }
  }

  throw new Error(`[SX] $reduceFromTail: Invalid argument type: args[0] is not array.`);
};
const $$reduceFromTail = $reduceFromTail(null, null);
const $sort = (state, name) => (...args) => {
  // S expression: ($sort list (lambda (a b) (... number_a-b)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sort', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.slice(0).sort(cdr);
  }

  throw new Error(`[SX] $sort: Invalid argument type: args[0] is not array.`);
};
const $$sort = $sort(null, null);
const $sortDestructive = (state, name) => (...args) => {
  // S expression: ($sort! list (lambda (a b) (... number_a-b)))
  //  -> S expr  : list
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$sort!', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (Array.isArray(car)) {
    return car.sort(cdr);
  }

  throw new Error(`[SX] $sort!: Invalid argument type: args[0] is not array.`);
};
const $$sortDestructive = $sortDestructive(null, null);
const $groupEvery = (state, name) => (...args) => {
  // S expression: ($group-every optionsOrNumber (x1 ... xN))
  //  -> S expr  : ((x1 ... ) ... ( ... xN))
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$group-every', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $group-every: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).groupEvery(car).select();
};
const $$groupEvery = $groupEvery(null, null);
const $groupBy = (state, name) => (...args) => {
  // S expression: ($group-by conditions (x1 ... xN))
  //  -> S expr  : ((x1 ... ) ... ( ... xN))
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$group-by', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $group-by: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).groupBy(car).select();
};
const $$groupBy = $groupBy(null, null);
const $orderBy = (state, name) => (...args) => {
  // S expression: ($order-by conditions (x1 ... xN))
  //  -> S expr  : (x1 ... xN)
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$order-by', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $order-by: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).orderBy(car).select();
};
const $$orderBy = $orderBy(null, null);
const $where = (state, name) => (...args) => {
  // S expression: ($where (-> (v index array) ... boolean) (x1 ... xN))
  //  -> S expr  : (x'1 ... x'M)
  Object(_errors__WEBPACK_IMPORTED_MODULE_1__["checkParamsLength"])('$where', args, 2, 2);
  const {
    car,
    cdr
  } = Object(_core_core_fn__WEBPACK_IMPORTED_MODULE_2__["$$firstAndSecond"])(...args);

  if (typeof args[0] !== 'function') {
    throw new Error(`[SX] $where: Invalid argument type: args[0] is not function.`);
  }

  if (!Array.isArray(cdr)) {
    throw new Error(`[SX] $where: Invalid argument type: args[1] is not array.`);
  }

  return Object(_lib_data__WEBPACK_IMPORTED_MODULE_3__["query"])(cdr).where(car).select();
};
const $$where = $where(null, null);

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.macro.ts":
/*!********************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.macro.ts ***!
  \********************************************************/
/*! exports provided: macros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ast */ "./src/s-exp/ast.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const macros = [{
  name: '$[',
  fn: (state, name) => list => {
    // S expression: ($[ index ] listOrObject)
    //  -> S expr  : ($__at listOrObject)
    const symOf = Object(_ast__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(list[2], ']');

    if (!symOf) {
      throw new Error(`[SX] $repeat: Invalid syntax: missing ']' keyword.`);
    }

    return [{
      symbol: '$__at'
    }, list[1], list[3]];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (macros);

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.operator.ts":
/*!***********************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.operator.ts ***!
  \***********************************************************/
/*! exports provided: funcs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcs", function() { return funcs; });
/* harmony import */ var _sequence_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.fn */ "./src/s-exp/operators/sequence/sequence.fn.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const funcs = [{
  name: '$range',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$range"]
}, {
  name: '$length',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$length"]
}, {
  name: '$trim',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$trim"]
}, {
  name: '$trim-head',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$trimHead"]
}, {
  name: '$trim-tail',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$trimTail"]
}, {
  name: '$replace-all',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$replaceAll"]
}, {
  name: '$split',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$split"]
}, {
  name: '$join',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$join"]
}, {
  name: '$concat',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$concat"]
}, {
  name: '$slice',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$slice"]
}, {
  name: '$top',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$top"]
}, {
  name: '$tail',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$tail"]
}, {
  name: '$push',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$push"]
}, {
  name: '$pop',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$pop"]
}, {
  name: '$__at',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$__at"]
}, {
  name: '$reverse',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reverse"]
}, {
  name: '$reverse!',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reverseDestructive"]
}, {
  name: '$find',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$find"]
}, {
  name: '$filter',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$filter"]
}, {
  name: '$map',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$map"]
}, {
  name: '$reduce',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reduce"]
}, {
  name: '$reduce-from-head',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reduce"]
}, {
  name: '$reduce-from-tail',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$reduceFromTail"]
}, {
  name: '$sort',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$sort"]
}, {
  name: '$sort!',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$sortDestructive"]
}, {
  name: '$group-every',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$groupEvery"]
}, {
  name: '$group-by',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$groupBy"]
}, {
  name: '$order-by',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$orderBy"]
}, {
  name: '$where',
  fn: _sequence_fn__WEBPACK_IMPORTED_MODULE_0__["$where"]
}];
/* harmony default export */ __webpack_exports__["default"] = (funcs);

/***/ }),

/***/ "./src/s-exp/operators/sequence/sequence.symbol.ts":
/*!*********************************************************!*\
  !*** ./src/s-exp/operators/sequence/sequence.symbol.ts ***!
  \*********************************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const symbols = [];
/* harmony default export */ __webpack_exports__["default"] = (symbols);

/***/ }),

/***/ "./src/s-exp/parser.ts":
/*!*****************************!*\
  !*** ./src/s-exp/parser.ts ***!
  \*****************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/s-exp/types.ts");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/s-exp/ast.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function isEOF(ch) {
  return typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'eof');
}

function isSpace(ch) {
  return typeof ch === 'string' && ch.trim().length === 0;
}

function isNumberFirstChar(ch) {
  return typeof ch === 'string' && /^[0-9\+\-]$/.test(ch);
}

function isNumberAfterSignChar(ch) {
  return typeof ch === 'string' && /^[0-9]$/.test(ch);
}

function isSymbolFirstChar(ch) {
  return typeof ch === 'string' && !isSpace(ch) && !isNumberFirstChar(ch);
}

function lookCurrentLineHint(state) {
  return `line: ${state.line} / strings: ${state.index} / pos: ${state.pos} :${state.strings.length > state.index ? state.strings[state.index].slice(state.pos, state.pos + 20) : ''}`;
}

function getChar(state, virtualEof, disableEscape) {
  if (state.strings.length <= state.index) {
    return {
      eof: true
    };
  }

  if (state.strings[state.index].length <= state.pos) {
    if (!state.values || state.values.length <= state.index) {
      state.pos = 0;
      state.index++;
      return getChar(state);
    } else {
      const ch = {
        value: state.values[state.index]
      };
      state.pos = 0;
      state.index++;
      return ch;
    }
  }

  if (virtualEof) {
    for (const v of virtualEof) {
      const ch = state.strings[state.index].slice(state.pos, state.pos + v.length);

      if (ch === v) {
        state.pos += v.length;
        state.line += ch.split('\n').length - 1;
        return {
          eof: false,
          eofSeq: v
        };
      }
    }
  }

  {
    let ch = state.strings[state.index].slice(state.pos, state.pos + 1);
    state.pos++;

    if (ch === '\n') {
      state.line++;
    }

    if (!disableEscape && ch === '\\') {
      if (state.strings[state.index].length <= state.pos) {
        throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
      }

      ch = state.strings[state.index].slice(state.pos, state.pos + 1);
      state.pos++;

      switch (ch) {
        case 'b':
          ch = '\b';
          break;

        case 't':
          ch = '\t';
          break;

        case 'n':
          ch = '\n';
          break;

        case 'v':
          ch = '\v';
          break;

        case 'f':
          ch = '\f';
          break;

        case 'r':
          ch = '\r';
          break;

        case 'U':
        case 'u':
          {
            if (state.strings[state.index].slice(state.pos, state.pos + 1) === '{') {
              let ch1 = '';

              for (let i = 0; i < 6; i++) {
                const ch2 = state.strings[state.index].slice(state.pos + i, state.pos + 1 + i);

                if (ch2 === '}') {
                  if (i === 0) {
                    throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
                  }

                  state.pos += i;
                  break;
                } else if (!/^[0-9A-Fa-f]{1}$/.test(ch1)) {
                  throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
                }

                ch1 += ch2;
              }

              if (state.strings[state.index].slice(state.pos, state.pos + 1) !== '}') {
                throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              state.pos++;
              ch = String.fromCodePoint(Number.parseInt(ch1, 16));
            } else {
              const ch1 = state.strings[state.index].slice(state.pos, state.pos + 4);

              if (!/^[0-9A-Fa-f]{4}$/.test(ch1)) {
                throw new Error(`[SX] getChar: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              state.pos += 4;
              ch = String.fromCodePoint(Number.parseInt(ch1, 16));
            }
          }
          break;
      }
    }

    return ch;
  }
}

function lookAheads(state, n, virtualEof, disableEscape) {
  const index = state.index;
  const pos = state.pos;
  const line = state.line;
  const chs = [];

  try {
    for (let i = 0; i < n; i++) {
      chs.push(getChar(state, virtualEof, disableEscape));
    }
  } finally {
    state.index = index;
    state.pos = pos;
    state.line = line;
  }

  return chs;
}

function lookAhead(state, virtualEof, disableEscape) {
  const index = state.index;
  const pos = state.pos;
  const line = state.line;
  let ch;

  try {
    ch = getChar(state, virtualEof, disableEscape);
  } finally {
    state.index = index;
    state.pos = pos;
    state.line = line;
  }

  return ch;
}

function skipWhitespaces(state) {
  let ch = lookAhead(state);

  while (!isEOF(ch) && isSpace(ch)) {
    getChar(state);
    ch = lookAhead(state);
  }
}

function parseNumber(state, virtualEof) {
  let s = '';
  let ch = lookAhead(state, virtualEof);

  while (!isEOF(ch)) {
    if (typeof ch === 'string') {
      if (/^0[XxOoBb][0-9]*$/.test(s + ch)) {
        getChar(state, virtualEof);
        s += ch;
      } else if (/^[0-9\+\-\.EeInfinityNaN]+$/.test(s + ch)) {
        getChar(state, virtualEof);
        s += ch;
      } else {
        break;
      }
    } else {
      break;
    }

    ch = lookAhead(state, virtualEof);
  }

  if (!/^([\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?)|(0[XxOoBb][0-9]+)|([\+\-]Infinity)|(NaN)$/.test(s)) {
    throw new Error(`[SX] parseNumber: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
  }

  return Number(s);
}

function parseSymbol(state, virtualEof) {
  let s = '';
  let ch = lookAhead(state, virtualEof);

  while (!isEOF(ch)) {
    if (typeof ch === 'string') {
      if (isSpace(ch)) {
        break;
      } else if (ch === '#' && lookAheads(state, 2, virtualEof)[1] === '|') {
        break;
      } else if (/^[^.;()"]+$/.test(s + ch)) {
        getChar(state, virtualEof);
        s += ch;
      } else {
        break;
      }
    } else {
      if (typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
        getChar(state, virtualEof);
        const v = ch.value;
        s += String(ch);
      } else {
        throw new Error(`[SX] parseSymbol: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
      }
    }

    ch = lookAhead(state, virtualEof);
  }

  if (state.config.enableShorthands) {
    let m = null; // tslint:disable-next-line:no-conditional-assignment

    if (m = s.match(/^:((?:\:[^=:]+?)+?)=$/)) {
      // ::foo:bar:baz= -> ($splice ($set (foo bar baz)))
      const ws = m[1].slice(1).split(':');
      const z = [{
        symbol: state.config.reservedNames.splice
      }, [{
        symbol: state.config.reservedNames.set
      }, ws]];
      return z;
    } // tslint:disable-next-line:no-conditional-assignment
    else if (m = s.match(/^:((?:\:[^@:]+?)+?)@([^@:]+?)$/)) {
        // ::foo:bar@baz -> ($splice ($call ($get foo bar) baz))
        const ws = m[1].slice(1).split(':');
        const z = [{
          symbol: state.config.reservedNames.splice
        }, [{
          symbol: state.config.reservedNames.call
        }, [{
          symbol: state.config.reservedNames.get
        }, ...ws], {
          symbol: m[2]
        }]];
        return z;
      } // tslint:disable-next-line:no-conditional-assignment
      else if (m = s.match(/^:((?:\:[^:]+?)+?)$/)) {
          // ::foo:bar:baz -> ($get foo bar baz)
          const ws = m[1].slice(1).split(':');
          const z = [{
            symbol: state.config.reservedNames.get
          }, ...ws];
          return z;
        }
  }

  return {
    symbol: s
  };
}

function parseStringOrComment(state, eof, valuesStartSeq, valuesStopChar, disableEscape) {
  const eofSeqs = valuesStartSeq ? [...eof, valuesStartSeq] : eof;
  const strings = [];
  const values = [];

  for (;;) {
    let s = '';
    let ch = lookAhead(state, eofSeqs, disableEscape);

    while (!isEOF(ch)) {
      if (typeof ch === 'string') {
        getChar(state, eofSeqs, disableEscape);
        s += ch;
      } else {
        if (typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
          getChar(state, eofSeqs, disableEscape);
          const v = ch.value;
          s += String(ch);
        } else {
          throw new Error(`[SX] parseStringOrComment: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
        }
      }

      ch = lookAhead(state, eofSeqs, disableEscape);
    }

    getChar(state, eofSeqs, disableEscape);

    if (ch.eof === true) {
      throw new _types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]('parseStringOrComment');
    }

    strings.push(s);

    if (ch.eofSeq === valuesStartSeq) {
      values.push(parseList(state, valuesStopChar, []));
    } else {
      break;
    }
  }

  return {
    strings,
    values
  };
}

function parseString(state, disableEscape) {
  return parseStringOrComment(state, ['"'], null, ')', disableEscape).strings[0];
}

function parseHereDoc(state, symbol, attrs) {
  const q = [symbol];

  if (attrs) {
    q.push(attrs);
  }

  const inner = parseStringOrComment(state, ['"""'], '%%%(', ')', false);

  for (let i = 0; i < inner.strings.length; i++) {
    q.push(inner.strings[i]);

    if (i < inner.values.length) {
      q.push(inner.values[i]);
    }
  }

  return q;
}

function parseSingleLineComment(state) {
  return {
    comment: parseStringOrComment(state, ['\r', '\n'], null, ')', false).strings[0]
  };
}

function parseMultiLineComment(state) {
  return {
    comment: parseStringOrComment(state, ['|#'], null, ')', false).strings[0]
  };
}

function parseOneToken(state) {
  skipWhitespaces(state);
  let ch = lookAhead(state);

  while (!isEOF(ch)) {
    switch (ch) {
      case ')':
        throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);

      case '(':
        getChar(state);
        return parseList(state, ')', []);

      case "'":
      case "`":
      case ',':
        {
          getChar(state);
          const ahead = lookAhead(state);
          let isSpliceUnquote = false;

          if (ch === ',' && ahead === '@') {
            getChar(state);
            isSpliceUnquote = true;
          }

          skipWhitespaces(state);
          const ret = (ch === "'" ? _ast__WEBPACK_IMPORTED_MODULE_1__["quote"] : ch === "`" ? _ast__WEBPACK_IMPORTED_MODULE_1__["backquote"] : _ast__WEBPACK_IMPORTED_MODULE_1__["wrapByUnquote"])(state, parseOneToken(state));
          return isSpliceUnquote ? Object(_ast__WEBPACK_IMPORTED_MODULE_1__["splice"])(state, ret) : ret;
        }

      case ".":
        {
          getChar(state);
          const aheads = lookAheads(state, 2);

          if (state.config.enableSpread && aheads[0] === '.' && aheads[1] === '.') {
            getChar(state);
            getChar(state);
            skipWhitespaces(state);
            return Object(_ast__WEBPACK_IMPORTED_MODULE_1__["spread"])(state, parseOneToken(state));
          } else {
            skipWhitespaces(state);
            return {
              dotted: parseOneToken(state)
            };
          }
        }

      case ';':
        getChar(state);
        return parseSingleLineComment(state);

      case '#':
        {
          const aheads = lookAheads(state, 2);

          if (aheads[1] === '|') {
            getChar(state);
            getChar(state);
            return parseMultiLineComment(state);
          } else {
            return parseSymbol(state);
          }
        }

      case '"':
        {
          getChar(state);
          const aheads = lookAheads(state, 4);

          if (state.config.enableHereDoc && aheads[0] === '"' && aheads[1] === '"') {
            let isHereDoc = true;

            if (isEOF(aheads[2]) || isSpace(aheads[2])) {// here doc
            } else if (isNumberFirstChar(aheads[2])) {
              // TODO: single +/- char is a symbol.
              if (aheads[2] === '+' || aheads[2] === '-') {
                if (!isNumberAfterSignChar(aheads[3])) {
                  isHereDoc = false;
                }
              } // here doc

            } else if (isSymbolFirstChar(aheads[2])) {
              isHereDoc = false;
            } else {// here doc
            }

            getChar(state);
            getChar(state);
            let sym = null;
            let attrs = null;

            if (isHereDoc) {
              sym = {
                symbol: state.config.reservedNames.Template
              };
            } else {
              sym = parseSymbol(state, ['@']);

              if (sym === null) {
                throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              if (typeof sym === 'number') {
                throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
              }

              const ahs = lookAheads(state, 2);

              if (ahs[0] === '@') {
                if (ahs[1] !== '{') {
                  throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
                }

                getChar(state);
                getChar(state);
                const a = parseList(state, '}', [{
                  symbol: '@'
                }]);

                if (Array.isArray(a)) {
                  attrs = a;
                }
              }
            }

            return parseHereDoc(state, sym, attrs);
          } else {
            return parseString(state, false);
          }
        }

      case '@':
        if (state.config.enableVerbatimStringLiteral) {
          const aheads = lookAheads(state, 2);

          if (aheads[1] === '"') {
            getChar(state);
            getChar(state);
            return parseString(state, true);
          }
        }

      // FALL_THRU

      default:
        if (typeof ch !== 'string') {
          if (typeof ch === 'object' && Object.prototype.hasOwnProperty.call(ch, 'value')) {
            getChar(state);
            return state.config.wrapExternalValue ? ch : ch.value;
          } else {
            throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
          }
        } else if (isSpace(ch)) {
          break;
        } else if (isNumberFirstChar(ch)) {
          // TODO: single +/- char is a symbol.
          if (ch === '+' || ch === '-') {
            const aheads = lookAheads(state, 2);

            if (!isNumberAfterSignChar(aheads[1])) {
              return parseSymbol(state);
            }
          }

          return parseNumber(state);
        } else if (isSymbolFirstChar(ch)) {
          return parseSymbol(state);
        } else {
          throw new Error(`[SX] parseOneToken: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
        }

    }

    skipWhitespaces(state);
    ch = lookAhead(state);
  }

  throw new _types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]('parseOneToken');
}

function parseList(state, listStopChar, initialList) {
  const r = initialList.slice(0);
  let dotted = false;
  skipWhitespaces(state);
  let ch = lookAhead(state);

  while (!isEOF(ch)) {
    switch (ch) {
      case listStopChar:
        getChar(state);

        if (dotted) {
          return r[0];
        } else {
          return r;
        }

      default:
        {
          const t = parseOneToken(state);

          if (typeof t === 'object' && Object.prototype.hasOwnProperty.call(t, 'dotted')) {
            if (r.length !== 1) {
              throw new Error(`[SX] parseList: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
            }

            dotted = true;

            if (Array.isArray(t)) {
              t.unshift(r.pop());
              r.push(t);
            } else {
              r.push({
                car: r.pop(),
                cdr: t.dotted
              });
            }
          } else if (typeof t === 'object' && Object.prototype.hasOwnProperty.call(t, 'comment')) {
            if (!state.config.stripComments) {
              r.push(t);
            }
          } else {
            if (dotted) {
              throw new Error(`[SX] parseList: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
            }

            r.push(t);
          }
        }
        break;
    }

    skipWhitespaces(state);
    ch = lookAhead(state);
  }

  throw new _types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]('parseList');
}

function parse(state) {
  const r = [];
  skipWhitespaces(state);
  let ch = lookAhead(state);

  while (!isEOF(ch)) {
    switch (ch) {
      case '(':
        getChar(state);
        r.push(parseList(state, ')', []));
        break;

      case "'":
      case "`":
        {
          getChar(state);
          skipWhitespaces(state);

          for (;;) {
            const t = parseOneToken(state);

            if (typeof t === 'object' && Object.prototype.hasOwnProperty.call(t, 'comment')) {
              if (!state.config.stripComments) {
                r.push(t);
              }
            } else {
              r.push((ch === "'" ? _ast__WEBPACK_IMPORTED_MODULE_1__["quote"] : _ast__WEBPACK_IMPORTED_MODULE_1__["backquote"])(state, t));
              break;
            }
          }

          break;
        }

      case ';':
        getChar(state);

        if (state.config.stripComments) {
          parseSingleLineComment(state);
        } else {
          r.push(parseSingleLineComment(state));
        }

        break;

      case '#':
        {
          const aheads = lookAheads(state, 2);

          if (aheads[1] === '|') {
            getChar(state);
            getChar(state);

            if (state.config.stripComments) {
              parseMultiLineComment(state);
            } else {
              r.push(parseMultiLineComment(state));
            }
          } else {
            getChar(state);

            if (state.config.stripComments) {
              parseSingleLineComment(state);
            } else {
              r.push(parseSingleLineComment(state));
            }
          }
        }
        break;

      case '"':
        {
          const aheads = lookAheads(state, 3);

          if (aheads[1] === '"' && aheads[2] === '"') {
            r.push(parseOneToken(state));
            break;
          }
        }
      // FALL_THRU

      default:
        throw new Error(`[SX] parseInitialState: Invalid syntax at: ${lookCurrentLineHint(state)}.`);
    }

    skipWhitespaces(state);
    ch = lookAhead(state);
  }

  return r;
}

/***/ }),

/***/ "./src/s-exp/s-expression.ts":
/*!***********************************!*\
  !*** ./src/s-exp/s-expression.ts ***!
  \***********************************/
/*! exports provided: defaultReservedNames, defaultConfig, SExpression, SExpressionAsync, S, L, LS, lisp, L_async, LS_async, lisp_async, LM, LM_async, LSX, LSX_async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReservedNames", function() { return defaultReservedNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SExpression", function() { return SExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SExpressionAsync", function() { return SExpressionAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LS", function() { return LS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lisp", function() { return lisp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L_async", function() { return L_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LS_async", function() { return LS_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lisp_async", function() { return lisp_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LM", function() { return LM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LM_async", function() { return LM_async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSX", function() { return LSX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSX_async", function() { return LSX_async; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./src/s-exp/parser.ts");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate */ "./src/s-exp/evaluate.ts");
/* harmony import */ var _operators_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators/core */ "./src/s-exp/operators/core/index.ts");
/* harmony import */ var _operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators/arithmetic */ "./src/s-exp/operators/arithmetic/index.ts");
/* harmony import */ var _operators_sequence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/sequence */ "./src/s-exp/operators/sequence/index.ts");
/* harmony import */ var _operators_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operators/jsx */ "./src/s-exp/operators/jsx/index.ts");
/* harmony import */ var _operators_concurrent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operators/concurrent */ "./src/s-exp/operators/concurrent/index.ts");
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};








const defaultReservedNames = {
  eval: '$eval',
  quote: '$quote',
  backquote: '$backquote',
  unquote: '$unquote',
  spread: '$spread',
  splice: '$splice',
  car: '$car',
  cdr: '$cdr',
  cons: '$cons',
  atom: '$atom',
  eq: '$eq',
  list: '$list',
  let: '$clisp-let',
  lambda: '$lambda',
  self: '$self',
  defun: '$defun',
  thiz: '$this',
  if: '$if',
  cond: '$cond',
  while: '$while',
  doWhile: '$do-while',
  until: '$until',
  doUntil: '$do-until',
  get: '$get',
  defvar: '$clisp-defvar',
  setq: '$clisp-setq',
  set: '$set',
  call: '$call',
  not: '$not',
  and: '$and',
  or: '$or',
  isSymbol: '$is-symbol',
  gensym: '$gensym',
  raise: '$raise',
  catch: '$catch',
  Template: 'Template'
};
const defaultConfig = {
  raiseOnUnresolvedSymbol: false,
  enableEvaluate: true,
  enableHereDoc: true,
  enableSpread: true,
  enableSplice: true,
  enableShorthands: true,
  enableVerbatimStringLiteral: true,
  enableTailCallOptimization: true,
  enableRegExpMatchOperators: true,
  enableCompilationOperators: true,
  stripComments: false,
  wrapExternalValue: true,
  returnMultipleRoot: false,
  maxEvalCount: 0,
  reservedNames: defaultReservedNames,
  symbols: [],
  macros: [],
  funcs: []
};

function initState(config, globals, strings, values) {
  return {
    strings: typeof strings === 'string' ? [strings] : strings,
    values: values || [],
    index: 0,
    pos: 0,
    line: 0,
    evalCount: 0,
    scopes: [{
      isBlockLocal: false,
      scope: globals
    }],
    macroMap: new Map(config.macros.map(x => [x.name, x])),
    funcMap: new Map(config.funcs.map(x => [x.name, x])),
    symbolMap: new Map(config.symbols.map(x => [x.name, x])),
    config
  };
}

function resetState(state, strings, values) {
  state.strings = typeof strings === 'string' ? [strings] : strings;
  state.values = values || [];
  state.index = 0;
  state.pos = 0;
  state.line = 0;
  state.evalCount = 0;
  return state;
}

function SExpression(conf) {
  let config = conf || Object.assign({}, defaultConfig);
  let globalScope = {};
  let startup = [];

  const exec = (state, s) => {
    if (config.enableEvaluate) {
      for (let i = 0; i < s.length; i++) {
        s[i] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[i]);
      }
    }

    if (config.returnMultipleRoot) {
      return s.length === 1 ? s[0] : s;
    } else {
      return s[s.length - 1];
    }
  };

  const f = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    return exec(state, startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state)));
  };

  f.evaluateAST = ast => {
    const state = initState(config, Object.assign({}, globalScope), '');
    return exec(state, startup.concat(ast));
  };

  f.repl = () => {
    const state = initState(config, Object.assign({}, globalScope), '');
    exec(state, startup.slice(0));

    const fRepl = (strings, ...values) => {
      resetState(state, strings, values);
      return exec(state, Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    };

    fRepl.sync = fRepl;
    return fRepl;
  };

  f.setGlobals = globals => {
    globalScope = Object.assign({}, globals || {});
    return f;
  };

  f.appendGlobals = globals => {
    globalScope = Object.assign({}, globalScope, globals || {});
    return f;
  };

  f.setStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state);
    return f;
  };

  f.setStartupAST = ast => {
    startup = ast;
    return f;
  };

  f.appendStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    return f;
  };

  f.appendStartupAST = ast => {
    startup = startup.concat(ast);
    return f;
  };

  f.install = installer => {
    config = installer(config);
    return f;
  };

  return f;
}
function SExpressionAsync(conf) {
  let config = conf || Object.assign({}, defaultConfig);
  let globalScope = {};
  let startup = [];

  const exec = (state, s) => __awaiter(this, void 0, void 0, function* () {
    if (config.enableEvaluate) {
      for (let i = 0; i < s.length; i++) {
        s[i] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(state, s[i]);

        if (typeof s[i] === 'object' && s[i] !== null && typeof s[i].then === 'function') {
          s[i] = yield s[i];
        }
      }
    }

    if (config.returnMultipleRoot) {
      return s.length === 1 ? s[0] : s;
    } else {
      return s[s.length - 1];
    }
  });

  const f = (strings, ...values) => __awaiter(this, void 0, void 0, function* () {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    return exec(state, startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state)));
  });

  f.evaluateAST = ast => {
    const state = initState(config, Object.assign({}, globalScope), '');
    return exec(state, startup.concat(ast));
  };

  f.repl = () => {
    const execSync = (stat, s) => {
      if (config.enableEvaluate) {
        for (let i = 0; i < s.length; i++) {
          s[i] = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(stat, s[i]);
        }
      }

      if (config.returnMultipleRoot) {
        return s.length === 1 ? s[0] : s;
      } else {
        return s[s.length - 1];
      }
    };

    const state = initState(config, Object.assign({}, globalScope), '');
    exec(state, startup.slice(0));

    const fRepl = (strings, ...values) => __awaiter(this, void 0, void 0, function* () {
      resetState(state, strings, values);
      return exec(state, Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    });

    const fReplSync = (strings, ...values) => {
      resetState(state, strings, values);
      return execSync(state, Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    };

    fRepl.sync = fReplSync;
    return fRepl;
  };

  f.setGlobals = globals => {
    globalScope = Object.assign({}, globals || {});
    return f;
  };

  f.appendGlobals = globals => {
    globalScope = Object.assign({}, globalScope, globals || {});
    return f;
  };

  f.setStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state);
    return f;
  };

  f.setStartupAST = ast => {
    startup = ast;
    return f;
  };

  f.appendStartup = (strings, ...values) => {
    const state = initState(config, Object.assign({}, globalScope), strings, values);
    startup = startup.concat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(state));
    return f;
  };

  f.appendStartupAST = ast => {
    startup = startup.concat(ast);
    return f;
  };

  f.install = installer => {
    config = installer(config);
    return f;
  };

  return f;
}
const S = (() => {
  const config = Object.assign({}, defaultConfig);
  config.enableEvaluate = false;
  config.returnMultipleRoot = true;
  return SExpression(config);
})();
const L = (() => {
  let config = Object.assign({}, defaultConfig);
  config.reservedNames = Object.assign({}, config.reservedNames, {
    Template: '$concat'
  });
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config.stripComments = true;
  return SExpression(config);
})();
const LS = L;
const lisp = L; // tslint:disable-next-line:variable-name

const L_async = (() => {
  let config = Object.assign({}, defaultConfig);
  config.reservedNames = Object.assign({}, config.reservedNames, {
    Template: '$concat'
  });
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config.stripComments = true;
  return SExpressionAsync(config);
})(); // tslint:disable-next-line:variable-name

const LS_async = L_async; // tslint:disable-next-line:variable-name

const lisp_async = L_async;
const LM = (() => {
  let config = Object.assign({}, defaultConfig);
  config.reservedNames = Object.assign({}, config.reservedNames, {
    Template: '$concat'
  });
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config.stripComments = true;
  config.returnMultipleRoot = true;
  return SExpression(config);
})(); // tslint:disable-next-line:variable-name

const LM_async = (() => {
  let config = Object.assign({}, defaultConfig);
  config.reservedNames = Object.assign({}, config.reservedNames, {
    Template: '$concat'
  });
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config.stripComments = true;
  config.returnMultipleRoot = true;
  return SExpressionAsync(config);
})();
function LSX(lsxConf) {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config = Object(_operators_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(config, lsxConf);
  config.stripComments = true;
  return SExpression(config);
}
function LSX_async(lsxConf) {
  let config = Object.assign({}, defaultConfig);
  config = Object(_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config = Object(_operators_arithmetic__WEBPACK_IMPORTED_MODULE_3__["default"])(config);
  config = Object(_operators_sequence__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
  config = Object(_operators_concurrent__WEBPACK_IMPORTED_MODULE_6__["default"])(config);
  config = Object(_operators_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(config, lsxConf);
  config.stripComments = true;
  return SExpressionAsync(config);
}

/***/ }),

/***/ "./src/s-exp/types.ts":
/*!****************************!*\
  !*** ./src/s-exp/types.ts ***!
  \****************************/
/*! exports provided: FatalError, MaxEvaluationCountError, ScriptTerminationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatalError", function() { return FatalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxEvaluationCountError", function() { return MaxEvaluationCountError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptTerminationError", function() { return ScriptTerminationError; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class FatalError extends Error {
  constructor(message) {
    super(message);
  }

}
class MaxEvaluationCountError extends FatalError {
  constructor() {
    super(`[SX] evaluate: The maximum count of evaluations has been exceeded.`);
  }

}
class ScriptTerminationError extends FatalError {
  constructor(where) {
    super(`[SX] ${where}: Unexpected termination of script.`);
  }

}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/shellyln/liyad/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=liyad.js.map