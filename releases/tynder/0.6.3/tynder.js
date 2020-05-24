(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tynder"] = factory();
	else
		root["tynder"] = factory();
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

/***/ "./node_modules/fruitsconfits/modules/lib/object-parser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/object-parser.js ***!
  \*****************************************************************/
/*! exports provided: objSequence, objClass, objClassNot, objClassByNeedleFn, getObjectParsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objSequence", function() { return objSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objClass", function() { return objClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objClassNot", function() { return objClassNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objClassByNeedleFn", function() { return objClassByNeedleFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectParsers", function() { return getObjectParsers; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/fruitsconfits/modules/lib/parser.js");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

function objSequence(helper, comparator) {
  return needle => {
    return input => {
      const len = Math.max(0, input.end - input.start);
      let matched = true;

      if (len >= needle.length) {
        for (let i = 0; i < needle.length; i++) {
          if (!comparator(input.src[input.start + i], needle[i])) {
            matched = false;
            break;
          }
        }
      } else {
        matched = false;
      }

      return matched ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + needle.length,
          end: input.end,
          context: input.context
        },
        tokens: [helper(needle)]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "objSequence(${needle})"`
      };
    };
  };
}
function objClass(helper, comparator) {
  // NOTE: <T> version `needles` type is `T`.
  return (...needles) => {
    return input => {
      const len = Math.max(0, input.end - input.start);
      let index = -1;
      const succeeded = len > 0 ? needles.some((needle, idx) => {
        if (comparator(input.src[input.start], needle)) {
          index = idx;
          return true;
        }
      }) : false;
      return succeeded ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + 1,
          end: input.end,
          context: input.context
        },
        tokens: [helper(needles[index])]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "objClass(${needles.join(',')})"`
      };
    };
  };
}
function objClassNot(helper, comparator) {
  // NOTE: <T> version `needles` type is `T`.
  return (...needles) => {
    return input => {
      const len = Math.max(0, input.end - input.start);

      if (len > 0) {
        for (const needle of needles) {
          let matched = true;

          if (!comparator(input.src[input.start], needle)) {
            matched = false;
            break;
          }

          if (matched) {
            return {
              succeeded: false,
              error: false,
              src: input.src,
              pos: input.start,
              message: `operator "objClassNot(${needles.join(',')})"`
            };
          }
        }
      }

      return {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + 1,
          end: input.end,
          context: input.context
        },
        tokens: [helper(input.src[input.start])]
      };
    };
  };
}
function objClassByNeedleFn(helper, comparator) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  // NOTE: <T> version `needles` type is `T`.
  return needle => {
    return input => {
      const len = Math.max(0, input.end - input.start);
      const matched = len > 0 ? needle(input.src[input.start]) : false;
      return matched ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + 1,
          end: input.end,
          context: input.context
        },
        tokens: [helper(input.src[input.start])]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "objClassByNeedleFn"`
      };
    };
  };
}
function getObjectParsers(params) {
  const clsFn = objClassByNeedleFn(params.rawToToken, params.comparator);
  const isAny = clsFn(src => true); // TODO: reduce unneccessary call for adding types.

  return {
    seq: objSequence(params.rawToToken, params.comparator),
    cls: objClass(params.rawToToken, params.comparator),
    notCls: objClassNot(params.rawToToken, params.comparator),
    clsFn,
    classes: {
      any: isAny
    },
    cat: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(params.concatTokens),
    once: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(1, 1),
    repeat: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(),
    qty: (min, max) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(min, max),
    zeroWidth: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidth"])(helper),
    err: message => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidthError"])(message),
    beginning: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["beginning"])(helper),
    end: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["end"])(helper),
    first: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...parsers),
    or: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["or"])(...parsers),
    combine: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(),
    erase: Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(tokens => []),
    trans: fn => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(fn),
    ahead: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookAhead"])(...parsers),
    behind: (n, helper) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookBehind"])(n, helper),
    rules: args => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["applyProductionRules"])(args),
    makeProgram: _parser__WEBPACK_IMPORTED_MODULE_0__["makeProgram"]
  };
}

/***/ }),

/***/ "./node_modules/fruitsconfits/modules/lib/parser.js":
/*!**********************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/parser.js ***!
  \**********************************************************/
/*! exports provided: formatErrorMessage, zeroWidth, zeroWidthError, beginning, end, quantify, first, or, transform, combine, lookAhead, lookBehind, applyProductionRules, makeProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatErrorMessage", function() { return formatErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroWidth", function() { return zeroWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroWidthError", function() { return zeroWidthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beginning", function() { return beginning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantify", function() { return quantify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return lookAhead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookBehind", function() { return lookBehind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyProductionRules", function() { return applyProductionRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProgram", function() { return makeProgram; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/fruitsconfits/modules/lib/types.js");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function getLineAndCol(src, pos) {
  let line = 1;
  let col = 1;

  for (let i = 0; i <= pos; i++) {
    switch (src[i]) {
      case '\r':
        if (src[i + 1] === '\n') {
          i++;
        }

      // FALL_TURU

      case '\n':
        line++;
        col = 1;
        break;

      default:
        col++;
        break;
    }
  }

  return {
    line,
    col
  };
}

function formatErrorMessage(result) {
  let msg = '';
  let src = '';

  if (typeof result.src === 'string') {
    src = result.src.slice(Math.max(result.pos - 5, 0), result.pos + 55);
    let ar = src.split(/\r\n|\n|\r/);
    ar = ar.slice(0, 1).concat('          ^~~~~~~~').concat(...ar.slice(1));
    src = ar.join('\n') + '\n\n';
    const lineAndCol = getLineAndCol(result.src, result.pos);
    msg = `parse failed at position:${result.pos} line:${lineAndCol.line} col:${lineAndCol.col} ${result.message ? ` ${result.message}` : ''}\n     ${src}`;
  } else {
    src = '     (object)\n          ^~~~~~~~';

    try {
      src = '     ' + JSON.stringify(result.src.slice(Math.max(result.pos - 10, 0), result.pos)) + '\n          ' + JSON.stringify(result.src.slice(result.pos, result.pos + 1)) + '\n          ' + JSON.stringify(result.src.slice(result.pos + 1, result.pos + 10));
      let ar = src.split(/\r\n|\n|\r/);
      ar = ar.slice(0, 2).concat('          ^~~~~~~~').concat(...ar.slice(2));
      src = ar.join('\n') + '\n\n';
    } catch (e) {}

    msg = `parse failed at position:${result.pos} ${result.message ? ` ${result.message}` : ''}\n     ${src}`;
  }

  return msg;
}
function zeroWidth(helper) {
  return input => {
    return {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context
      },
      tokens: helper ? [helper()] : []
    };
  };
}
function zeroWidthError(message) {
  return input => {
    throw new _types__WEBPACK_IMPORTED_MODULE_0__["ParseError"]({
      succeeded: false,
      error: true,
      src: input.src,
      pos: input.start,
      message: message || ''
    }); // return ({
    //     succeeded: false,
    //     error: true,
    //     src: input.src,
    //     pos: input.start,
    //     message: message || '',
    // });
  };
}
function beginning(helper) {
  return input => {
    return input.start === 0 ? {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context
      },
      tokens: helper ? [helper()] : []
    } : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "beginning"'
    };
  };
}
function end(helper) {
  return input => {
    return input.start === input.end ? {
      succeeded: true,
      next: {
        src: input.src,
        start: input.start,
        end: input.end,
        context: input.context
      },
      tokens: helper ? [helper()] : []
    } : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "end"'
    };
  };
} // TODO: match by callback function parser
// TODO: `nesting` parser

function quantify(min, max) {
  min = min || 0;
  return parser => {
    return input => {
      let next = input;
      const matched = [];

      for (;;) {
        const x = parser(next);

        if (x.succeeded) {
          next = x.next;
          matched.push({
            next: x.next,
            tokens: x.tokens
          });

          if (max && max === matched.length) {
            break;
          }
        } else {
          if (x.error) {
            return x;
          }

          if (matched.length >= min) {
            break;
          } else {
            return {
              succeeded: false,
              error: false,
              src: next.src,
              pos: next.start,
              message: 'operator "quantify"'
            };
          }
        }
      }

      if (matched.length > 0) {
        const r = [];

        for (const x of matched) {
          r.push(...x.tokens);
        }

        return {
          succeeded: true,
          next: matched[matched.length - 1].next,
          tokens: r
        };
      } else {
        return {
          succeeded: true,
          next: {
            src: input.src,
            start: input.start,
            end: input.end,
            context: input.context
          },
          tokens: []
        };
      }
    };
  };
}
function first(...parsers) {
  return input => {
    let matched = null;
    let last = null;

    for (const parser of parsers) {
      const x = parser(input);

      if (x.succeeded) {
        matched = {
          next: x.next,
          tokens: x.tokens
        };
        break;
      }

      if (last) {
        if (x.error) {
          if (!last.error || last.pos < x.pos) {
            last = x;
          }
        } else if (last.pos < x.pos) {
          last = x;
        }
      } else {
        last = x;
      }
    }

    return matched ? {
      succeeded: true,
      next: matched.next,
      tokens: matched.tokens
    } : last ? last : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "first"'
    };
  };
}
function or(...parsers) {
  return input => {
    const matched = [];
    let last = null;

    for (const parser of parsers) {
      const x = parser(input);

      if (x.succeeded) {
        matched.push({
          next: x.next,
          tokens: x.tokens
        });
      } else {
        if (last) {
          if (x.error) {
            if (!last.error || last.pos < x.pos) {
              last = x;
            }
          } else if (last.pos < x.pos) {
            last = x;
          }
        } else {
          last = x;
        }
      }
    }

    if (matched.length > 0) {
      const z = matched.reduce((a, b) => a.next.start >= b.next.start ? a : b);
      return {
        succeeded: true,
        next: z.next,
        tokens: z.tokens
      };
    }

    return last ? last : {
      succeeded: false,
      error: false,
      src: input.src,
      pos: input.start,
      message: 'operator "or"'
    };
  };
}
function transform(trans, ctxTrans) {
  return (...parsers) => {
    return input => {
      let next = input;
      const tokens = [];

      for (const parser of parsers) {
        const x = parser(next);

        if (!x.succeeded) {
          return x;
        }

        next = x.next;
        tokens.push(...x.tokens);
      } // TODO: report errors while transforming


      const t2 = trans ? trans(tokens, input) : tokens;
      return {
        succeeded: true,
        next: ctxTrans ? {
          src: next.src,
          start: next.start,
          end: next.end,
          context: ctxTrans(next.context)
        } : next,
        tokens: t2
      };
    };
  };
}
function combine(...parsers) {
  return transform()(...parsers);
}
function lookAhead(...parsers) {
  return input => {
    let next = input;

    for (const parser of parsers) {
      const x = parser(next);

      if (!x.succeeded) {
        return x;
      }

      next = x.next;
    }

    return {
      succeeded: true,
      next: input,
      tokens: []
    };
  };
}
function lookBehind(n, helper) {
  return (...parsers) => {
    return input => {
      if (input.start - n < 0) {
        return {
          succeeded: false,
          error: false,
          src: input.src,
          pos: input.start,
          message: 'lookBehind: src is too short'
        };
      }

      let next = {
        src: input.src,
        start: input.start - n,
        end: input.end,
        context: input.context
      };

      for (const parser of parsers) {
        const x = parser(next);

        if (!x.succeeded) {
          return x;
        }

        next = x.next;
      }

      return {
        succeeded: true,
        next: input,
        tokens: helper ? [helper()] : []
      };
    };
  };
}
function applyProductionRules(args) {
  return lexer => {
    return lexerInput => {
      const lexResult = lexer(lexerInput);

      if (!lexResult.succeeded) {
        return lexResult;
      }

      const input = Object(_types__WEBPACK_IMPORTED_MODULE_0__["parserInput"])(lexResult.tokens, lexerInput.context);
      let next = input;
      let completed = false;

      if (args.check(next).succeeded) {
        return {
          succeeded: true,
          next: lexResult.next,
          tokens: lexResult.tokens
        };
      }

      completed: for (let i = 0; args.maxApply !== void 0 ? i < args.maxApply : true; i++) {
        let matched = false;

        rules: for (const rule of args.rules) {
          const {
            parser,
            rtol
          } = typeof rule === 'function' ? {
            parser: rule,
            rtol: false
          } : rule;
          const len = next.src.length;

          for (let s = 0; s <= len; s++) {
            const x = parser({
              src: next.src,
              start: rtol ? len - s : s,
              end: next.src.length,
              context: next.context
            });

            if (x.succeeded) {
              matched = true;
              const nextSrc = next.src.slice(0, rtol ? len - s : s);
              nextSrc.push(...x.tokens);
              nextSrc.push(...next.src.slice(x.next.start));
              next = {
                src: nextSrc,
                start: 0,
                end: nextSrc.length,
                context: x.next.context
              };

              if (args.check(next).succeeded) {
                completed = true;
                break completed;
              }

              break rules;
            }
          }
        }

        if (!matched) {
          break;
        }
      }

      if (!completed) {
        if (!args.check(next).succeeded) {
          throw new _types__WEBPACK_IMPORTED_MODULE_0__["ParseError"]({
            succeeded: false,
            error: true,
            src: input.src,
            pos: input.start,
            message: 'The application of production rules was not finished'
          });
        }
      }

      return {
        succeeded: true,
        next: lexResult.next,
        tokens: next.src
      };
    };
  };
}
function makeProgram(parser) {
  return input => {
    try {
      return parser(input);
    } catch (e) {
      if (e.result) {
        return e.result;
      } else {
        throw e;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/fruitsconfits/modules/lib/string-parser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/string-parser.js ***!
  \*****************************************************************/
/*! exports provided: charSequence, charClass, charClassNot, charClassByNeedleFn, getStringParsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charSequence", function() { return charSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charClass", function() { return charClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charClassNot", function() { return charClassNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charClassByNeedleFn", function() { return charClassByNeedleFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringParsers", function() { return getStringParsers; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/fruitsconfits/modules/lib/parser.js");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

function charSequence(helper) {
  return needle => {
    return input => {
      const src = input.src.slice(input.start, input.end);
      return src.startsWith(needle) ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + needle.length,
          end: input.end,
          context: input.context
        },
        tokens: [helper(needle)]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "charSequence(${needle})"`
      };
    };
  };
}
function charClass(helper) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  return (...needles) => {
    return input => {
      const src = input.src.slice(input.start, input.end);
      let index = -1;
      const succeeded = needles.some((needle, idx) => {
        const matched = src.startsWith(needle);

        if (matched) {
          index = idx;
          return true;
        }
      });
      return succeeded ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + needles[index].length,
          end: input.end,
          context: input.context
        },
        tokens: [helper(needles[index])]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "charClass(${needles.join(',')})"`
      };
    };
  };
}
function charClassNot(helper) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  return (...needles) => {
    return input => {
      const src = input.src.slice(input.start, input.end);

      for (const needle of needles) {
        const matched = src.startsWith(needle);

        if (matched) {
          return {
            succeeded: false,
            error: false,
            src: input.src,
            pos: input.start,
            message: `operator "charClassNot(${needles.join(',')})"`
          };
        }
      }

      const p = input.src.codePointAt(input.start);

      if (p === void 0) {
        return {
          succeeded: false,
          error: false,
          src: input.src,
          pos: input.start,
          message: `operator "charClassNot(${needles.join(',')})"`
        };
      }

      const c = String.fromCodePoint(p);
      return {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + c.length,
          end: input.end,
          context: input.context
        },
        tokens: [helper(c)]
      };
    };
  };
}
function charClassByNeedleFn(helper) {
  // NOTE: needles[i] should be one character. surrogate pair and/or ligature are accepted.
  return needle => {
    return input => {
      const src = input.src.slice(input.start, input.end);
      const len = needle(src);
      return len >= 0 ? {
        succeeded: true,
        next: {
          src: input.src,
          start: input.start + len,
          end: input.end,
          context: input.context
        },
        tokens: [helper(src.substring(0, len))]
      } : {
        succeeded: false,
        error: false,
        src: input.src,
        pos: input.start,
        message: `operator "charClassByNeedleFn"`
      };
    };
  };
}
function getStringParsers(params) {
  const seq = charSequence(params.rawToToken);
  const cls = charClass(params.rawToToken);
  const notCls = charClassNot(params.rawToToken);
  const clsFn = charClassByNeedleFn(params.rawToToken);
  const cat = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(params.concatTokens);
  const once = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(1, 1);
  const repeat = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(); // TODO: reduce unneccessary call for adding types.

  const qty = (min, max) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["quantify"])(min, max);

  const combine = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])();
  const erase = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(tokens => []);
  const isAlpha = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'Z' || 'a' <= c && c <= 'z' ? c.length : -1;
  });
  const isUpper = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'Z' ? c.length : -1;
  });
  const isLower = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'a' <= c && c <= 'z' ? c.length : -1;
  });
  const isNumber = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '0' <= c && c <= '9' ? c.length : -1;
  });
  const isNonZeroNumber = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '1' <= c && c <= '9' ? c.length : -1;
  });
  const isBinNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '0' <= c && c <= '1' ? c.length : -1;
  });
  const isOctNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return '0' <= c && c <= '7' ? c.length : -1;
  });
  const isHexNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'F' || 'a' <= c && c <= 'f' || '0' <= c && c <= '9' ? c.length : -1;
  });
  const isAlNum = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 'A' <= c && c <= 'Z' || 'a' <= c && c <= 'z' || '0' <= c && c <= '9' ? c.length : -1;
  });
  const isSpace = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return (' \f\n\r\t\v​\u00a0\u1680​\u180e' + '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a' + '​\u2028\u2029\u202f\u205f​\u3000\ufeff').includes(c) ? c.length : -1;
  });
  const isSpaceWithinSingleLine = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return (' \f\t\v​\u00a0\u1680​\u180e' + '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a' + '​\u2028\u2029\u202f\u205f​\u3000\ufeff').includes(c) ? c.length : -1;
  });
  const isControl = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return 0x0000 <= p && p <= 0x001f || 0x007f <= p && p <= 0x009f ? c.length : -1;
  });
  const isWord = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return (' \f\n\r\t\v​\u00a0\u1680​\u180e' + '\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a' + '​\u2028\u2029\u202f\u205f​\u3000\ufeff').includes(c) || 0x0000 <= p && p <= 0x001f || 0x007f <= p && p <= 0x009f ? -1 : c.length;
  });
  const isNewline = cls('\r\n', '\n', '\r');
  const isAny = clsFn(src => {
    const p = src.codePointAt(0);

    if (p === void 0) {
      return -1;
    }

    const c = String.fromCodePoint(p);
    return c.length;
  });
  const binSep = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isBinNum, cls('_'));
  const octSep = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isOctNum, cls('_'));
  const hexSep = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isHexNum, cls('_'));

  const binaryIntegerNumber = (...prefixes) => combine(erase(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...prefixes)), cat(once(isBinNum), repeat(binSep)));

  const octalIntegerNumber = (...prefixes) => combine(erase(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...prefixes)), cat(once(isOctNum), repeat(octSep)));

  const hexIntegerValue = (...prefixes) => combine(erase(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...prefixes)), cat(once(isHexNum), repeat(hexSep)));

  const decimalIntegerNumber = combine(cat(qty(0, 1)(cls('+', '-')), Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(combine(once(isNonZeroNumber), repeat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isNumber, cls('_')))), seq('0'))));
  const bigDecimalIntegerNumber = combine(cat(decimalIntegerNumber, erase(seq('n'))));
  const floatingPointNumber = combine(cat(qty(0, 1)(cls('+', '-')), Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(combine(once(isNonZeroNumber), repeat(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isNumber, cls('_')))), seq('0')), qty(0, 1)(combine(seq('.'), qty(1)(Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(isNumber, cls('_'))))), qty(0, 1)(combine(cls('E', 'e'), qty(0, 1)(cls('+', '-')), Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(combine(once(isNonZeroNumber), repeat(isNumber)), seq('0')))))); // TODO: reduce unneccessary call for adding types.

  return {
    seq,
    cls,
    notCls,
    clsFn,
    classes: {
      alpha: isAlpha,
      upper: isUpper,
      lower: isLower,
      num: isNumber,
      nonzero: isNonZeroNumber,
      bin: isBinNum,
      oct: isOctNum,
      hex: isHexNum,
      alnum: isAlNum,
      space: isSpace,
      spaceWithinSingleLine: isSpaceWithinSingleLine,
      ctrl: isControl,
      newline: isNewline,
      word: isWord,
      any: isAny
    },
    numbers: {
      bin: binaryIntegerNumber,
      oct: octalIntegerNumber,
      hex: hexIntegerValue,
      int: decimalIntegerNumber,
      bigint: bigDecimalIntegerNumber,
      float: floatingPointNumber
    },
    cat,
    once,
    repeat,
    qty,
    zeroWidth: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidth"])(helper),
    err: message => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["zeroWidthError"])(message),
    beginning: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["beginning"])(helper),
    end: helper => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["end"])(helper),
    first: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["first"])(...parsers),
    or: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["or"])(...parsers),
    combine,
    erase,
    trans: fn => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["transform"])(fn),
    ahead: (...parsers) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookAhead"])(...parsers),
    behind: (n, helper) => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["lookBehind"])(n, helper),
    rules: args => Object(_parser__WEBPACK_IMPORTED_MODULE_0__["applyProductionRules"])(args),
    makeProgram: _parser__WEBPACK_IMPORTED_MODULE_0__["makeProgram"]
  };
}

/***/ }),

/***/ "./node_modules/fruitsconfits/modules/lib/types.js":
/*!*********************************************************!*\
  !*** ./node_modules/fruitsconfits/modules/lib/types.js ***!
  \*********************************************************/
/*! exports provided: ParseError, parserInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseError", function() { return ParseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parserInput", function() { return parserInput; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class ParseError extends Error {
  constructor(result) {
    super(result.message);
    this.result = result;
  }

}
function parserInput(src, context) {
  return {
    src,
    start: 0,
    end: src.length,
    context: context
  };
}

/***/ }),

/***/ "./node_modules/liyad/modules/s-exp/ast.js":
/*!*************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/ast.js ***!
  \*************************************************/
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

/***/ "./node_modules/liyad/modules/s-exp/compile.js":
/*!*****************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/compile.js ***!
  \*****************************************************/
/*! exports provided: compileLambda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileLambda", function() { return compileLambda; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast */ "./node_modules/liyad/modules/s-exp/ast.js");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate */ "./node_modules/liyad/modules/s-exp/evaluate.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./node_modules/liyad/modules/s-exp/errors.js");
/* harmony import */ var _compile_ops_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compile.ops/helpers */ "./node_modules/liyad/modules/s-exp/compile.ops/helpers.js");
/* harmony import */ var _compile_ops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compile.ops */ "./node_modules/liyad/modules/s-exp/compile.ops/index.js");
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

/***/ "./node_modules/liyad/modules/s-exp/compile.ops/helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/compile.ops/helpers.js ***!
  \*****************************************************************/
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
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ast */ "./node_modules/liyad/modules/s-exp/ast.js");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evaluate */ "./node_modules/liyad/modules/s-exp/evaluate.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./node_modules/liyad/modules/s-exp/errors.js");
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

/***/ "./node_modules/liyad/modules/s-exp/compile.ops/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/compile.ops/index.js ***!
  \***************************************************************/
/*! exports provided: registerOperators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOperators", function() { return registerOperators; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ast */ "./node_modules/liyad/modules/s-exp/ast.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./node_modules/liyad/modules/s-exp/errors.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./node_modules/liyad/modules/s-exp/compile.ops/helpers.js");
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

/***/ "./node_modules/liyad/modules/s-exp/consts.js":
/*!****************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/consts.js ***!
  \****************************************************/
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

/***/ "./node_modules/liyad/modules/s-exp/defaults.js":
/*!******************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/defaults.js ***!
  \******************************************************/
/*! exports provided: defaultReservedNames, defaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReservedNames", function() { return defaultReservedNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
// Copyright (c) 2018, Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
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

/***/ }),

/***/ "./node_modules/liyad/modules/s-exp/errors.js":
/*!****************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/errors.js ***!
  \****************************************************/
/*! exports provided: setEvaluationCount, checkParamsLength, checkUnsafeVarNames, checkUnsafeVarNamesEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEvaluationCount", function() { return setEvaluationCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkParamsLength", function() { return checkParamsLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUnsafeVarNames", function() { return checkUnsafeVarNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUnsafeVarNamesEx", function() { return checkUnsafeVarNamesEx; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/liyad/modules/s-exp/types.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./node_modules/liyad/modules/s-exp/consts.js");
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

/***/ "./node_modules/liyad/modules/s-exp/evaluate.js":
/*!******************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/evaluate.js ***!
  \******************************************************/
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
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast */ "./node_modules/liyad/modules/s-exp/ast.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/liyad/modules/s-exp/errors.js");
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

/***/ "./node_modules/liyad/modules/s-exp/interpreters/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/interpreters/index.js ***!
  \****************************************************************/
/*! exports provided: SExpression, SExpressionAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SExpression", function() { return SExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SExpressionAsync", function() { return SExpressionAsync; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parser */ "./node_modules/liyad/modules/s-exp/parser.js");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evaluate */ "./node_modules/liyad/modules/s-exp/evaluate.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaults */ "./node_modules/liyad/modules/s-exp/defaults.js");
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
  let config = conf || Object.assign({}, _defaults__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"]);
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
  let config = conf || Object.assign({}, _defaults__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"]);
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

/***/ }),

/***/ "./node_modules/liyad/modules/s-exp/operators/core/core.fn.js":
/*!********************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/operators/core/core.fn.js ***!
  \********************************************************************/
/*! exports provided: $car, $$car, $cdr, $$cdr, $cons, $$cons, $first, $$first, $second, $$second, $last, $$last, $rest, $$rest, $firstAndSecond, $$firstAndSecond, $atom, $$atom, $eq, $$eq, $notEq, $$notEq, $list, $$list, $__scope, $__globalScope, $__capture, $__lambda, $comp$__lambda, $__defun, $comp$__defun, $__refun, $__defmacro, $apply, $$apply, $__call, $__try, $raise, $$raise, $__if, $__ifNull, $__cond, $__while, $__doWhile, $__until, $__doUntil, $__repeat, $__for, $pipe, $$pipe, $__get, $__let, $__set, $boolean, $$boolean, $not, $$not, $__and, $$__and, $__or, $$__or, $ambiguousEq, $$ambiguousEq, $ambiguousNotEq, $$ambiguousNotEq, $lt, $$lt, $le, $$le, $gt, $$gt, $ge, $$ge, $typeof, $$typeof, $symbol, $$symbol, $__gensym, $isSymbol, $$isSymbol, $isNull, $$isNull, $isNil, $$isNil, $isUndefined, $$isUndefined, $isList, $$isList, $isString, $$isString, $isNumber, $$isNumber, $isNaN, $$isNaN, $isFinite, $$isFinite, $isInteger, $$isInteger, $toString, $$toString, $toNumber, $$toNumber, $__toObject, $objectAssign, $$objectAssign, $jsonStringify, $$jsonStringify, $jsonParse, $$jsonParse, $now, $$now, $datetimeFromIso, $$datetimeFromIso, $datetime, $$datetime, $datetimeLc, $$datetimeLc, $datetimeToIsoString, $$datetimeToIsoString, $datetimeToComponents, $$datetimeToComponents, $datetimeToComponentsLc, $$datetimeToComponentsLc, $match, $$match, $consoleLog, $$consoleLog, $consoleError, $$consoleError, $consoleTrace, $$consoleTrace, $consoleTime, $$consoleTime, $consoleTimeEnd, $$consoleTimeEnd, $consoleTimeLog, $$consoleTimeLog */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$typeof", function() { return $typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$typeof", function() { return $$typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$symbol", function() { return $symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$symbol", function() { return $$symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$__gensym", function() { return $__gensym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isSymbol", function() { return $isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isSymbol", function() { return $$isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isNull", function() { return $isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isNull", function() { return $$isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isNil", function() { return $isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isNil", function() { return $$isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isUndefined", function() { return $isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$isUndefined", function() { return $$isUndefined; });
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./node_modules/liyad/modules/s-exp/types.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts */ "./node_modules/liyad/modules/s-exp/consts.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ast */ "./node_modules/liyad/modules/s-exp/ast.js");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../evaluate */ "./node_modules/liyad/modules/s-exp/evaluate.js");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compile */ "./node_modules/liyad/modules/s-exp/compile.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errors */ "./node_modules/liyad/modules/s-exp/errors.js");
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
const $typeof = (state, name) => (...args) => {
  // S expression: ($typeof x)
  //  -> S expr  : 'null' | 'bigint' | 'boolean' | 'function' | 'number' | 'string' | 'undefined' |
  //               'js-symbol' | 'list' | 'object'
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$typeof', args, 1, 1);
  const car = $$first(...args);

  if (car === null) {
    return 'null';
  }

  const tyName = typeof car;

  switch (tyName) {
    case 'object':
      if (Array.isArray(car)) {
        return 'list';
      } else {
        return 'object';
      }

    case 'symbol':
      return 'js-symbol';

    default:
      return tyName;
  }
};
const $$typeof = $typeof(null, null);
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
const $isNull = (state, name) => (...args) => {
  // S expression: ($is-null x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isNull', args, 1, 1);
  return $$first(...args) === null;
};
const $$isNull = $isNull(null, null);
const $isNil = (state, name) => (...args) => {
  // S expression: ($is-nil x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isNil', args, 1, 1);
  const car = $$first(...args);
  return Array.isArray(car) && car.length === 0;
};
const $$isNil = $isNil(null, null);
const $isUndefined = (state, name) => (...args) => {
  // S expression: ($is-undefined x)
  //  -> S expr  : boolean
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$isUndefined', args, 1, 1);
  return $$first(...args) === void 0;
};
const $$isUndefined = $isUndefined(null, null);
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
const assignBlacklist = [_consts__WEBPACK_IMPORTED_MODULE_1__["globalObj"], Object.__proto__, {}.__proto__, Function.__proto__];
const $objectAssign = (state, name) => (...args) => {
  // S expression: ($object-assign x)
  //  -> S expr  : string
  Object(_errors__WEBPACK_IMPORTED_MODULE_5__["checkParamsLength"])('$objectAssign', args, 1);

  if (assignBlacklist.includes(args[0])) {
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

/***/ "./node_modules/liyad/modules/s-exp/operators/core/core.macro.js":
/*!***********************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/operators/core/core.macro.js ***!
  \***********************************************************************/
/*! exports provided: macros, compilationMacros, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macros", function() { return macros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compilationMacros", function() { return compilationMacros; });
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ast */ "./node_modules/liyad/modules/s-exp/ast.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors */ "./node_modules/liyad/modules/s-exp/errors.js");
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

/***/ "./node_modules/liyad/modules/s-exp/operators/core/core.operator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/operators/core/core.operator.js ***!
  \**************************************************************************/
/*! exports provided: operators, compilationOperators, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operators", function() { return operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compilationOperators", function() { return compilationOperators; });
/* harmony import */ var _core_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.fn */ "./node_modules/liyad/modules/s-exp/operators/core/core.fn.js");
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
  name: '$typeof',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$typeof"]
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
  name: '$is-null',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isNull"]
}, {
  name: '$is-nil',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isNil"]
}, {
  name: '$is-undefined',
  fn: _core_fn__WEBPACK_IMPORTED_MODULE_0__["$isUndefined"]
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

/***/ "./node_modules/liyad/modules/s-exp/operators/core/core.symbol.js":
/*!************************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/operators/core/core.symbol.js ***!
  \************************************************************************/
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

/***/ "./node_modules/liyad/modules/s-exp/operators/core/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/operators/core/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _core_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.operator */ "./node_modules/liyad/modules/s-exp/operators/core/core.operator.js");
/* harmony import */ var _core_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.macro */ "./node_modules/liyad/modules/s-exp/operators/core/core.macro.js");
/* harmony import */ var _core_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.symbol */ "./node_modules/liyad/modules/s-exp/operators/core/core.symbol.js");
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

/***/ "./node_modules/liyad/modules/s-exp/parser.js":
/*!****************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/parser.js ***!
  \****************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/liyad/modules/s-exp/types.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./node_modules/liyad/modules/s-exp/ast.js");
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

function parseStringOrComment(state, eof, valuesStartSeq, valuesStopChar, disableEscape, allowPhysicalEof) {
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
      if (!allowPhysicalEof) {
        throw new _types__WEBPACK_IMPORTED_MODULE_0__["ScriptTerminationError"]('parseStringOrComment');
      }
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
  return parseStringOrComment(state, ['"'], null, ')', disableEscape, false).strings[0];
}

function parseHereDoc(state, symbol, attrs) {
  const q = [symbol];

  if (attrs) {
    q.push(attrs);
  }

  const inner = parseStringOrComment(state, ['"""'], '%%%(', ')', false, false);

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
    comment: parseStringOrComment(state, ['\r', '\n'], null, ')', false, true).strings[0]
  };
}

function parseMultiLineComment(state) {
  return {
    comment: parseStringOrComment(state, ['|#'], null, ')', false, false).strings[0]
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

/***/ "./node_modules/liyad/modules/s-exp/types.js":
/*!***************************************************!*\
  !*** ./node_modules/liyad/modules/s-exp/types.js ***!
  \***************************************************/
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

/***/ "./src/codegen.ts":
/*!************************!*\
  !*** ./src/codegen.ts ***!
  \************************/
/*! exports provided: generateTypeScriptCode, generateJsonSchemaObject, generateJsonSchema, generateProto3Code, generateGraphQlCode, generateCSharpCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_codegen_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/codegen/typescript */ "./src/lib/codegen/typescript.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypeScriptCode", function() { return _lib_codegen_typescript__WEBPACK_IMPORTED_MODULE_0__["generateTypeScriptCode"]; });

/* harmony import */ var _lib_codegen_json_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/codegen/json-schema */ "./src/lib/codegen/json-schema.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateJsonSchemaObject", function() { return _lib_codegen_json_schema__WEBPACK_IMPORTED_MODULE_1__["generateJsonSchemaObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateJsonSchema", function() { return _lib_codegen_json_schema__WEBPACK_IMPORTED_MODULE_1__["generateJsonSchema"]; });

/* harmony import */ var _lib_codegen_proto3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/codegen/proto3 */ "./src/lib/codegen/proto3.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateProto3Code", function() { return _lib_codegen_proto3__WEBPACK_IMPORTED_MODULE_2__["generateProto3Code"]; });

/* harmony import */ var _lib_codegen_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/codegen/graphql */ "./src/lib/codegen/graphql.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGraphQlCode", function() { return _lib_codegen_graphql__WEBPACK_IMPORTED_MODULE_3__["generateGraphQlCode"]; });

/* harmony import */ var _lib_codegen_csharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/codegen/csharp */ "./src/lib/codegen/csharp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCSharpCode", function() { return _lib_codegen_csharp__WEBPACK_IMPORTED_MODULE_4__["generateCSharpCode"]; });

// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln






/***/ }),

/***/ "./src/compiler.ts":
/*!*************************!*\
  !*** ./src/compiler.ts ***!
  \*************************/
/*! exports provided: parse, compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony import */ var fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fruitsconfits/modules/lib/types */ "./node_modules/fruitsconfits/modules/lib/types.js");
/* harmony import */ var fruitsconfits_modules_lib_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fruitsconfits/modules/lib/parser */ "./node_modules/fruitsconfits/modules/lib/parser.js");
/* harmony import */ var liyad_modules_s_exp_operators_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liyad/modules/s-exp/operators/core */ "./node_modules/liyad/modules/s-exp/operators/core/index.js");
/* harmony import */ var liyad_modules_s_exp_interpreters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! liyad/modules/s-exp/interpreters */ "./node_modules/liyad/modules/s-exp/interpreters/index.js");
/* harmony import */ var liyad_modules_s_exp_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! liyad/modules/s-exp/defaults */ "./node_modules/liyad/modules/s-exp/defaults.js");
/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operators */ "./src/operators.ts");
/* harmony import */ var _lib_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/resolver */ "./src/lib/resolver.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
/* harmony import */ var _lib_compiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/compiler */ "./src/lib/compiler.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln










function parseExternalDirective(s) {
  const z = Object(_lib_compiler__WEBPACK_IMPORTED_MODULE_8__["externalTypeDef"])(Object(fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__["parserInput"])(s, {
    /* TODO: set initial state to the context */
  }));

  if (!z.succeeded) {
    throw new Error('Invalid external directive.');
  }

  return z.tokens;
}

function parse(s) {
  const z = Object(_lib_compiler__WEBPACK_IMPORTED_MODULE_8__["program"])(Object(fruitsconfits_modules_lib_types__WEBPACK_IMPORTED_MODULE_0__["parserInput"])(s, {
    /* TODO: set initial state to the context */
  }));

  if (!z.succeeded) {
    throw new Error(Object(fruitsconfits_modules_lib_parser__WEBPACK_IMPORTED_MODULE_1__["formatErrorMessage"])(z));
  }

  return z.tokens;
}

const lisp = (() => {
  let config = Object.assign({}, liyad_modules_s_exp_defaults__WEBPACK_IMPORTED_MODULE_4__["defaultConfig"]);
  config.reservedNames = Object.assign({}, config.reservedNames, {
    Template: '$concat'
  });
  config = Object(liyad_modules_s_exp_operators_core__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  config.stripComments = true;
  return Object(liyad_modules_s_exp_interpreters__WEBPACK_IMPORTED_MODULE_3__["SExpression"])(config);
})(); // tslint:disable: object-literal-key-quotes


function compile(s) {
  const mapTyToTySet = new Map();
  const schema = new Map();
  let gensymCount = 0;

  const def = (name, ty) => {
    let ret = ty;
    const sym = typeof name === 'string' ? name : name.symbol;

    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_7__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_7__["dummyTargetObject"], sym)) {
      throw new Error(`Unsafe symbol name is appeared: ${sym}`);
    }

    if (!mapTyToTySet.has(ret)) {
      const originalTypeName = ret.typeName;
      ret = _operators__WEBPACK_IMPORTED_MODULE_5__["withName"](_operators__WEBPACK_IMPORTED_MODULE_5__["withTypeName"](originalTypeName ? _operators__WEBPACK_IMPORTED_MODULE_5__["withOriginalTypeName"](ret, originalTypeName) : ret, sym), sym);
    }

    const tySet = mapTyToTySet.has(ret) ? mapTyToTySet.get(ret) : {
      ty: ret,
      exported: false,
      isDeclare: false,
      resolved: false
    };
    schema.set(sym, tySet);

    if (!mapTyToTySet.has(ret)) {
      // TODO: aliases are not exported correctly
      mapTyToTySet.set(ret, tySet);
    }

    return ret;
  };

  const ref = (name, ...memberNames) => {
    const sym = typeof name === 'string' ? name : name.symbol;

    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_7__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_7__["dummyTargetObject"], sym)) {
      throw new Error(`Unsafe symbol name is appeared: ${sym}`);
    }

    const memberTreeSymbols = memberNames.map(x => {
      const ms = typeof x === 'string' ? x : x.symbol;

      if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_7__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_7__["dummyTargetObject"], ms)) {
        throw new Error(`Unsafe symbol name is appeared: ${ms}`);
      }

      return ms;
    });

    if (!schema.has(sym)) {
      return Object.assign({
        kind: 'symlink',
        symlinkTargetName: sym,
        name: sym,
        typeName: sym
      }, 0 < memberTreeSymbols.length ? {
        memberTree: memberTreeSymbols
      } : {});
    }

    let ty = Object(_lib_resolver__WEBPACK_IMPORTED_MODULE_6__["resolveMemberNames"])(schema.get(sym).ty, sym, memberTreeSymbols, 0);

    if (ty.noOutput) {
      ty = Object.assign({}, ty);
      delete ty.noOutput;
    }

    return ty;
  };

  const redef = (original, ty) => {
    if (original === ty) {
      return ty;
    } // NOTE: 'ty' should already be registered to 'mapTyToTySet' and 'schema'


    const tySet = mapTyToTySet.has(original) ? mapTyToTySet.get(original) : {
      ty: original,
      exported: false,
      isDeclare: false,
      resolved: false
    };
    tySet.ty = ty;
    mapTyToTySet.set(tySet.ty, tySet);

    if (ty.name) {
      schema.set(ty.name, tySet);
    }

    return tySet.ty;
  };

  const exported = ty => {
    if (ty.kind === 'never' && typeof ty.passThruCodeBlock === 'string') {
      ty.passThruCodeBlock = `export ${ty.passThruCodeBlock}`;
      return ty;
    } else {
      // NOTE: 'ty' should already be registered to 'mapTyToTySet' and 'schema'
      const tySet = mapTyToTySet.has(ty) ? mapTyToTySet.get(ty) : {
        ty,
        exported: false,
        isDeclare: false,
        resolved: false
      };
      tySet.exported = true;
      return ty;
    }
  };

  const external = (...names) => {
    for (const name of names) {
      let ty = null;

      if (typeof name === 'string') {
        ty = def(name, _operators__WEBPACK_IMPORTED_MODULE_5__["primitive"]('any'));
      } else {
        ty = def(name[0], name[1] ? name[1] : _operators__WEBPACK_IMPORTED_MODULE_5__["primitive"]('any'));
      }

      ty.noOutput = true;
    }
  };

  const asConst = ty => {
    switch (ty.kind) {
      case 'enum':
        // NOTE: `ty` may already `def`ed.
        ty.isConst = true;
        break;

      default:
        throw new Error(`It cannot set to const: ${ty.kind} ${ty.typeName || '(unnamed)'}`);
    }

    return ty;
  };

  const asDeclare = ty => {
    // NOTE: 'ty' should already be registered to 'mapTyToTySet' and 'schema'
    const tySet = mapTyToTySet.has(ty) ? mapTyToTySet.get(ty) : {
      ty,
      exported: false,
      isDeclare: false,
      resolved: false
    };
    tySet.isDeclare = true;
    return ty;
  };

  const passthru = (str, docCommentText) => {
    const ty = {
      kind: 'never',
      passThruCodeBlock: str || ''
    };

    if (docCommentText) {
      ty.docComment = docCommentText;
    }

    schema.set(`__$$$gensym_${gensymCount++}$$$__`, {
      ty,
      exported: false,
      isDeclare: false,
      resolved: false
    });
    return ty;
  };

  const directive = (name, body) => {
    switch (name) {
      case '@tynder-external':
        lisp.evaluateAST(parseExternalDirective(`external ${body} ;`));
        break;

      case '@tynder-pass-through':
        passthru(body);
        break;

      default:
        throw new Error(`Unknown directive is appeared: ${name}`);
    }

    return [];
  };

  lisp.setGlobals({
    picked: _operators__WEBPACK_IMPORTED_MODULE_5__["picked"],
    omit: _operators__WEBPACK_IMPORTED_MODULE_5__["omit"],
    partial: _operators__WEBPACK_IMPORTED_MODULE_5__["partial"],
    intersect: _operators__WEBPACK_IMPORTED_MODULE_5__["intersect"],
    oneOf: _operators__WEBPACK_IMPORTED_MODULE_5__["oneOf"],
    subtract: _operators__WEBPACK_IMPORTED_MODULE_5__["subtract"],
    primitive: _operators__WEBPACK_IMPORTED_MODULE_5__["primitive"],
    primitiveValue: _operators__WEBPACK_IMPORTED_MODULE_5__["primitiveValue"],
    optional: _operators__WEBPACK_IMPORTED_MODULE_5__["optional"],
    repeated: _operators__WEBPACK_IMPORTED_MODULE_5__["repeated"],
    sequenceOf: _operators__WEBPACK_IMPORTED_MODULE_5__["sequenceOf"],
    spread: _operators__WEBPACK_IMPORTED_MODULE_5__["spread"],
    enumType: _operators__WEBPACK_IMPORTED_MODULE_5__["enumType"],
    objectType: _operators__WEBPACK_IMPORTED_MODULE_5__["objectType"],
    derived: _operators__WEBPACK_IMPORTED_MODULE_5__["derived"],
    def,
    ref,
    redef,
    export: exported,
    external,
    asConst,
    asDeclare,
    passthru,
    directive,
    docComment: _operators__WEBPACK_IMPORTED_MODULE_5__["withDocComment"],
    '@range': (minValue, maxValue) => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withRange"](minValue, maxValue)(ty),
    '@minValue': minValue => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMinValue"](minValue)(ty),
    '@maxValue': maxValue => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMaxValue"](maxValue)(ty),
    '@greaterThan': greaterThan => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withGreaterThan"](greaterThan)(ty),
    '@lessThan': lessThan => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withLessThan"](lessThan)(ty),
    '@minLength': minLength => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMinLength"](minLength)(ty),
    '@maxLength': maxLength => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMaxLength"](maxLength)(ty),
    '@match': pattern => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMatch"](pattern)(ty),
    '@stereotype': stereotype => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withStereotype"](stereotype)(ty),
    '@constraint': (name, args) => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withConstraint"](name, args)(ty),
    '@forceCast': () => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withForceCast"]()(ty),
    '@recordType': () => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withRecordType"]()(ty),
    '@meta': meta => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMeta"](meta)(ty),
    '@msg': messages => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMsg"](messages)(ty),
    '@msgId': messageId => ty => _operators__WEBPACK_IMPORTED_MODULE_5__["withMsgId"](messageId)(ty)
  });
  const z = parse(s);
  lisp.evaluateAST(z);
  return Object(_lib_resolver__WEBPACK_IMPORTED_MODULE_6__["resolveSchema"])(schema);
} // tslint:enable: object-literal-key-quotes

/***/ }),

/***/ "./src/constraints/unique.ts":
/*!***********************************!*\
  !*** ./src/constraints/unique.ts ***!
  \***********************************/
/*! exports provided: constraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constraints", function() { return constraints; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const mapperErrMsg = 'Unsafe symbol name is appeared in unique constraint assertion:';

const normalMapper = (data, fields) => {
  const ret = [];

  if (0 < fields.length) {
    for (const field of fields) {
      if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], field)) {
        throw new Error(`${mapperErrMsg} ${field}`);
      }

      ret.push(data[field]);
    }
  } else {
    ret.push(data);
  }

  return ret;
};

const nonNullMapper = (data, fields) => {
  var _a;

  const ret = [];

  if (0 < fields.length) {
    for (const field of fields) {
      if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], field)) {
        throw new Error(`${mapperErrMsg} ${field}`);
      }

      ret.push((_a = data[field]) !== null && _a !== void 0 ? _a : NaN);
    }
  } else {
    ret.push(data);
  }

  return ret;
};

const checkerGen = mapper => {
  return (data, args) => {
    const errMsg = `evaluateFormula: invalid parameter ${args}`;

    if (!Array.isArray(data)) {
      throw new Error(errMsg);
    }

    const fields = [];

    if (typeof args === 'string') {
      fields.push(args);
    } else if (Array.isArray(args)) {
      for (const z of args) {
        if (typeof z !== 'string') {
          throw new Error(errMsg);
        }
      }

      fields.push(...args);
    }

    const mapped = data.map(x => mapper(x, fields));

    for (let i = 0; i < mapped.length; i++) {
      CMP: for (let j = 0; j < mapped.length; j++) {
        if (i === j) {
          continue;
        }

        const a = mapped[i];
        const b = mapped[j];

        for (let k = 0; k < a.length; k++) {
          // TODO: this is slow! more better checking
          if (a[k] !== b[k]) {
            continue CMP;
          }
        }

        return false;
      }
    }

    return true;
  };
};

const constraints = [['unique', {
  kinds: ['repeated', 'sequence'],
  check: checkerGen(normalMapper)
}], ['unique-non-null', {
  kinds: ['repeated', 'sequence'],
  check: checkerGen(nonNullMapper)
}]];

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: ErrorTypes, parse, compile, picked, omit, partial, intersect, oneOf, subtract, primitive, regexpPatternStringType, primitiveValue, optional, repeated, sequenceOf, spread, enumType, objectType, derived, symlinkType, withName, withTypeName, withOriginalTypeName, withDocComment, withRange, withMinValue, withMaxValue, withGreaterThan, withLessThan, withMinLength, withMaxLength, withMatch, withStereotype, withConstraint, withForceCast, withRecordType, withMeta, withMsg, withMsgId, generateTypeScriptCode, generateJsonSchemaObject, generateJsonSchema, generateProto3Code, generateGraphQlCode, generateCSharpCode, TynderSchemaVersion, serializeToObject, serialize, deserializeFromObject, deserialize, validateRoot, validate, isType, assertType, getType, pickRoot, pick, patch, stereotypes, customConstraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stereotypes", function() { return stereotypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customConstraints", function() { return customConstraints; });
/* harmony import */ var _stereotypes_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stereotypes/date */ "./src/stereotypes/date.ts");
/* harmony import */ var _constraints_unique__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraints/unique */ "./src/constraints/unique.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"]; });

/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compiler */ "./src/compiler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _compiler__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _compiler__WEBPACK_IMPORTED_MODULE_3__["compile"]; });

/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators */ "./src/operators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "picked", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["picked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["partial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["intersect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["oneOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["subtract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "primitive", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["primitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regexpPatternStringType", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["regexpPatternStringType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "primitiveValue", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["primitiveValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeated", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["repeated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequenceOf", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["sequenceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["spread"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumType", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["enumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectType", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["objectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["derived"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symlinkType", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["symlinkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTypeName", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withTypeName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOriginalTypeName", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withOriginalTypeName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDocComment", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withDocComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRange", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMinValue", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMinValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaxValue", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMaxValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withGreaterThan", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withGreaterThan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLessThan", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withLessThan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMinLength", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMinLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaxLength", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMaxLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMatch", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStereotype", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withStereotype"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withConstraint", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withConstraint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withForceCast", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withForceCast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRecordType", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withRecordType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMeta", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMsg", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMsgId", function() { return _operators__WEBPACK_IMPORTED_MODULE_4__["withMsgId"]; });

/* harmony import */ var _codegen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codegen */ "./src/codegen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypeScriptCode", function() { return _codegen__WEBPACK_IMPORTED_MODULE_5__["generateTypeScriptCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateJsonSchemaObject", function() { return _codegen__WEBPACK_IMPORTED_MODULE_5__["generateJsonSchemaObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateJsonSchema", function() { return _codegen__WEBPACK_IMPORTED_MODULE_5__["generateJsonSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateProto3Code", function() { return _codegen__WEBPACK_IMPORTED_MODULE_5__["generateProto3Code"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGraphQlCode", function() { return _codegen__WEBPACK_IMPORTED_MODULE_5__["generateGraphQlCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCSharpCode", function() { return _codegen__WEBPACK_IMPORTED_MODULE_5__["generateCSharpCode"]; });

/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serializer */ "./src/serializer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TynderSchemaVersion", function() { return _serializer__WEBPACK_IMPORTED_MODULE_6__["TynderSchemaVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeToObject", function() { return _serializer__WEBPACK_IMPORTED_MODULE_6__["serializeToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return _serializer__WEBPACK_IMPORTED_MODULE_6__["serialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserializeFromObject", function() { return _serializer__WEBPACK_IMPORTED_MODULE_6__["deserializeFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return _serializer__WEBPACK_IMPORTED_MODULE_6__["deserialize"]; });

/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validator */ "./src/validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateRoot", function() { return _validator__WEBPACK_IMPORTED_MODULE_7__["validateRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validator__WEBPACK_IMPORTED_MODULE_7__["validate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _validator__WEBPACK_IMPORTED_MODULE_7__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return _validator__WEBPACK_IMPORTED_MODULE_7__["assertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return _validator__WEBPACK_IMPORTED_MODULE_7__["getType"]; });

/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picker */ "./src/picker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickRoot", function() { return _picker__WEBPACK_IMPORTED_MODULE_8__["pickRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _picker__WEBPACK_IMPORTED_MODULE_8__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return _picker__WEBPACK_IMPORTED_MODULE_8__["patch"]; });

// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln









const stereotypes = [..._stereotypes_date__WEBPACK_IMPORTED_MODULE_0__["stereotypes"]];
const customConstraints = [..._constraints_unique__WEBPACK_IMPORTED_MODULE_1__["constraints"]];

/***/ }),

/***/ "./src/lib/codegen/csharp.ts":
/*!***********************************!*\
  !*** ./src/lib/codegen/csharp.ts ***!
  \***********************************/
/*! exports provided: generateCSharpCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCSharpCode", function() { return generateCSharpCode; });
/* harmony import */ var _lib_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/escape */ "./src/lib/escape.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util */ "./src/lib/util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function formatTypeName(ty, ctx, typeName) {
  if (typeName.includes('.') || ty.kind === 'symlink' || ty.kind === 'enum') {
    return generateCSharpCodeInner(ty, false, ctx);
  }

  return typeName;
}

function formatCSharpCodeDocComment(ty, nestLevel) {
  let code = '';
  const indent = '    '.repeat(nestLevel);
  const docComment = typeof ty === 'string' ? ty : ty.docComment;

  if (docComment) {
    if (0 <= docComment.indexOf('\n')) {
      code += `${indent}/**\n${indent}  ${docComment.split('\n').map(x => x.trimLeft()).join(`\n${indent} `)}\n${indent} */\n`;
    } else {
      code += `${indent}/** ${docComment} */\n`;
    }
  }

  return code;
}

function formatMemberType(ty, ctx) {
  if (ty.typeName) {
    return formatTypeName(ty, ctx, ty.typeName);
  } else {
    switch (ty.kind) {
      case 'primitive':
        return generateCSharpCodePrimitive(ty, ctx);

      case 'primitive-value':
        return generateCSharpCodePrimitiveValue(ty, ctx);

      case 'repeated':
        return generateCSharpCodeRepeated(ty, ctx);

      case 'one-of':
        return generateCSharpCodeOneOf(ty, ctx);

      default:
        return 'object';
    }
  }
}

function appendOptionalModifier(name) {
  switch (name) {
    case 'decimal':
    case 'int':
    case 'double':
    case 'bool':
      return `${name}?`;

    default:
      return name;
  }
}

function isNullableOneOf(ty, ctx) {
  const filtered = ty.oneOf.filter(x => !(x.kind === 'primitive' && (x.primitiveName === 'null' || x.primitiveName === 'undefined') || x.kind === 'primitive-value' && (x.value === null || x.value === void 0)));
  return filtered.length === 1 && ty.oneOf.length !== 1 ? filtered[0] : null;
}

function generateCSharpCodePrimitive(ty, ctx) {
  // TODO: Function, DateStr, DateTimeStr
  switch (ty.primitiveName) {
    case 'null':
    case 'undefined':
      return 'object';

    case 'integer':
      return 'int';

    case 'bigint':
      return 'decimal';

    case 'number':
      return 'double';

    case 'boolean':
      return 'bool';

    default:
      return ty.primitiveName;
  }
}

function generateCSharpCodePrimitiveValue(ty, ctx) {
  if (ty.value === null || ty.value === void 0) {
    return 'object';
  }

  switch (typeof ty.primitiveName) {
    case 'bigint':
      return 'decimal';

    default:
      switch (typeof ty.value) {
        case 'number':
          return 'double';

        case 'string':
          return 'string';

        case 'boolean':
          return 'bool';

        default:
          return 'object';
      }

  }
}

function generateCSharpCodeRepeated(ty, ctx) {
  return `${formatMemberType(ty.repeated, ctx)}[]`;
}

function generateCSharpCodeSpread(ty, ctx) {
  return '';
}

function generateCSharpCodeSequence(ty, ctx) {
  return 'object[]';
}

function generateCSharpCodeOneOf(ty, ctx) {
  const z = isNullableOneOf(ty, ctx);

  if (z) {
    return appendOptionalModifier(formatMemberType(z, ctx));
  } else {
    return 'object';
  }
}

function generateCSharpCodeOptional(ty, ctx) {
  return appendOptionalModifier(generateCSharpCodeInner(ty.optional, false, ctx));
}

function generateCSharpCodeEnum(ty, ctx) {
  return 'object';
}

function addAttributes(ty, ctx, typeName) {
  const attrs = [];
  let ty2 = ty;

  if (ty2.kind !== 'optional') {
    switch (typeName) {
      case 'decimal':
      case 'int':
      case 'double':
      case 'bool':
        break;

      default:
        if (ty2.kind === 'one-of') {
          if (!isNullableOneOf(ty2, ctx)) {
            attrs.push('Required');
          }
        } else {
          attrs.push('Required');
        }

        break;
    }

    ty2 = ty;
  }

  switch (ty2.kind) {
    case 'primitive':
      {
        if (typeof ty2.minLength === 'number') {
          attrs.push(`MinLength(${ty2.minLength})`);
        }

        if (typeof ty2.maxLength === 'number') {
          attrs.push(`MaxLength(${ty2.maxLength})`);
        }

        if (ty2.minValue !== null && ty2.minValue !== void 0 || ty2.maxValue !== null && ty2.maxValue !== void 0) {
          switch (ty2.primitiveName) {
            case 'string':
              attrs.push(`Range(typeof(string), "${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.minValue, x => Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(x), '')}", "${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.maxValue, x => Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(x), '\\U00010FFFF')}")`);
              break;

            case 'bigint':
              attrs.push(`Range(typeof(decimal), ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.minValue, x => `new decimal(@"${String(x)}").ToString()`, 'Decimal.MinValue')}, ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.maxValue, x => `new decimal(@"${String(x)}").ToString()`, 'Decimal.MaxValue')})`);
              break;

            case 'integer':
              attrs.push(`Range(${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.minValue, x => `(int)${String(x)}`, 'Int32.MinValue')}, ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.maxValue, x => `(int)${String(x)}`, 'Int32.MaxValue')})`);
              break;

            case 'number':
              attrs.push(`Range(${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.minValue, x => `(double)${String(x)}`, 'Double.MinValue')}, ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["nvl2"])(ty2.maxValue, x => `(double)${String(x)}`, 'Double.MaxValue')})`);
              break;
          }
        }

        if (ty2.pattern) {
          attrs.push(`RegularExpression(@"${ty2.pattern.source.replace(/"/g, '""')}")`);
        }
      }
      break;

    case 'repeated':
      {
        if (typeof ty2.min === 'number') {
          attrs.push(`MinLength(${ty2.min})`);
        }

        if (typeof ty2.max === 'number') {
          attrs.push(`MaxLength(${ty2.max})`);
        }
      }
      break;
  }

  if (0 < attrs.length) {
    return `[${attrs.join(', ')}]\n${'    '.repeat(ctx.nestLevel + 1)}`;
  } else {
    return '';
  }
}

function generateCSharpCodeObject(ty, isInterface, ctx) {
  const sep = '\n\n';
  const memberLines = ty.members.filter(x => !x[2]).map(x => {
    const typeName = x[1].typeName ? formatTypeName(x[1], Object.assign(Object.assign({}, ctx), {
      nestLevel: ctx.nestLevel + 1
    }), x[1].typeName) : generateCSharpCodeInner(x[1], false, Object.assign(Object.assign({}, ctx), {
      nestLevel: ctx.nestLevel + 1
    }));
    return `${formatCSharpCodeDocComment(x[3] || '', ctx.nestLevel + 1)}${'    '.repeat(ctx.nestLevel + 1)}${addAttributes(x[1], ctx, typeName)}public ${typeName} ${x[0]} { get; set; }`;
  });

  if (memberLines.length === 0) {
    return `\n${'    '.repeat(ctx.nestLevel)}{\n${'    '.repeat(ctx.nestLevel)}}`;
  }

  return `\n${'    '.repeat(ctx.nestLevel)}{\n${memberLines.join(sep)}\n${'    '.repeat(ctx.nestLevel)}}`;
}

function generateCSharpCodeInner(ty, isInterface, ctx) {
  var _a;

  switch (ty.kind) {
    case 'never':
    case 'any':
    case 'unknown':
      return 'object';

    case 'primitive':
      return generateCSharpCodePrimitive(ty, ctx);

    case 'primitive-value':
      return generateCSharpCodePrimitiveValue(ty, ctx);

    case 'repeated':
      return generateCSharpCodeRepeated(ty, ctx);

    case 'spread':
      return generateCSharpCodeSpread(ty, ctx);

    case 'sequence':
      return generateCSharpCodeSequence(ty, ctx);

    case 'one-of':
      return generateCSharpCodeOneOf(ty, ctx);

    case 'optional':
      return generateCSharpCodeOptional(ty, ctx);

    case 'enum':
      return generateCSharpCodeEnum(ty, ctx);

    case 'object':
      return generateCSharpCodeObject(ty, isInterface, ctx);

    case 'symlink':
      if ((_a = ctx.schema) === null || _a === void 0 ? void 0 : _a.has(ty.symlinkTargetName)) {
        const target = ctx.schema.get(ty.symlinkTargetName);

        switch (target === null || target === void 0 ? void 0 : target.ty.kind) {
          case 'enum':
            return 'object';
        }
      }

      return ty.symlinkTargetName;

    case 'operator':
      throw new Error(`Unexpected type assertion: ${ty.kind}`);

    default:
      throw new Error(`Unknown type assertion: ${ty.kind}`);
  }
}

function generateCSharpCode(schema) {
  let code = `using System.ComponentModel.DataAnnotations;

namespace Tynder.UserSchema
{
`;
  const ctx = {
    nestLevel: 1,
    schema
  };

  for (const ty of schema.entries()) {
    const indent0 = '    '.repeat(ctx.nestLevel);

    if (ty[1].ty.kind === 'object') {// nothing to do
    } else if (ty[1].ty.kind === 'enum') {// nothing to do
    } else if (ty[1].ty.kind === 'never' && ty[1].ty.passThruCodeBlock) {// nothing to do
    } else {
      code += formatCSharpCodeDocComment(ty[1].ty, ctx.nestLevel);
      let tyName = 'System.Object';

      switch (ty[1].ty.kind) {
        case 'primitive':
          switch (ty[1].ty.primitiveName) {
            case 'integer':
              tyName = 'System.Int32';
              break;

            case 'bigint':
              tyName = 'System.Decimal';
              break;

            case 'number':
              tyName = 'System.Double';
              break;

            case 'boolean':
              tyName = 'System.Boolean';
              break;

            case 'string':
              tyName = 'System.String';
              break;
          }

          break;

        case 'primitive-value':
          if (ty[1].ty.value !== null && ty[1].ty.value !== void 0) {
            switch (typeof ty[1].ty.primitiveName) {
              case 'bigint':
                tyName = 'System.Decimal';
                break;

              default:
                switch (typeof ty[1].ty.value) {
                  case 'number':
                    tyName = 'System.Double';
                    break;

                  case 'boolean':
                    tyName = 'System.Boolean';
                    break;

                  case 'string':
                    tyName = 'System.String';
                    break;
                }

            }
          }

          break;
      }

      code += `${indent0}using ${ty[0]} = ${tyName};\n\n`;
    }
  }

  let isFirst = true;

  for (const ty of schema.entries()) {
    const accessModifier = ty[1].exported ? 'public' : 'public';
    const indent0 = '    '.repeat(ctx.nestLevel);
    const indent1 = '    '.repeat(ctx.nestLevel + 1);

    if (ty[1].ty.kind === 'object' || ty[1].ty.kind === 'enum') {
      if (isFirst) {
        isFirst = false;
        code += '\n';
      } else {
        code += '\n\n';
      }

      code += formatCSharpCodeDocComment(ty[1].ty, ctx.nestLevel);
    }

    if (ty[1].ty.kind === 'object') {
      code += `${indent0}${accessModifier} class ${ty[0]}${ty[1].ty.baseTypes && ty[1].ty.baseTypes.length ? ` : ${ty[1].ty.baseTypes.filter(x => x.typeName).map(x => formatTypeName(x, Object.assign(Object.assign({}, ctx), {
        nestLevel: ctx.nestLevel + 1
      }), x.typeName)).join(', ')}` : ''} ${generateCSharpCodeInner(ty[1].ty, true, ctx)}\n`;
    } else if (ty[1].ty.kind === 'enum') {
      let value = 0;
      code += `${indent0}${accessModifier} static class ${ty[0]}\n${indent0}{\n${ty[1].ty.values.map(x => `${formatCSharpCodeDocComment(x[2] || '', ctx.nestLevel + 1)}${indent1}${(() => {
        if (value !== null && x[1] === value) {
          value++;
          return `public static double ${x[0]} { get { return ${x[1]}; } }`;
        } else {
          if (typeof x[1] === 'number') {
            value = x[1] + 1;
            return `public static double ${x[0]} { get { return ${x[1]}; } }`;
          } else {
            return `public static string ${x[0]} { get { return "${Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(x[1])}"; } }`;
          }
        }
      })()}`).join('\n\n')}\n${indent0}}\n`;
    } else if (ty[1].ty.kind === 'never' && ty[1].ty.passThruCodeBlock) {// nothing to do
    } else {// nothing to do
      }
  }

  return code + '}\n';
}

/***/ }),

/***/ "./src/lib/codegen/graphql.ts":
/*!************************************!*\
  !*** ./src/lib/codegen/graphql.ts ***!
  \************************************/
/*! exports provided: generateGraphQlCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGraphQlCode", function() { return generateGraphQlCode; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
function formatTypeName(ty, ctx, typeName) {
  if (typeName.includes('.')) {
    return generateGraphQlCodeInner(ty, false, ctx, false);
  }

  return typeName;
}

function formatGraphQlCodeDocComment(ty, nestLevel) {
  let code = '';
  const indent = '    '.repeat(nestLevel);
  const docComment = typeof ty === 'string' ? ty : ty.docComment;

  if (docComment) {
    if (0 <= docComment.indexOf('\n')) {
      code += `${indent}/**\n${indent}  ${docComment.split('\n').map(x => x.trimLeft()).join(`\n${indent} `)}\n${indent} */\n`;
    } else {
      code += `${indent}/** ${docComment} */\n`;
    }
  }

  return code;
}

function isNullableOneOf(ty, ctx) {
  const filtered = ty.oneOf.filter(x => !(x.kind === 'primitive' && (x.primitiveName === 'null' || x.primitiveName === 'undefined') || x.kind === 'primitive-value' && (x.value === null || x.value === void 0)));
  return filtered.length === 1 && ty.oneOf.length !== 1 ? filtered[0] : null;
}

function generateGraphQlCodePrimitive(ty, ctx) {
  switch (ty.primitiveName) {
    case 'number':
      return 'Float';

    case 'integer':
      return 'Int';

    case 'bigint':
      return 'BigInt';

    case 'string':
      return 'String';

    case 'boolean':
      return 'Boolean';

    case 'undefined':
    case 'null':
    default:
      return 'Any';
    // TODO: Any is invalid type.
  } // TODO: Function, DateStr, DateTimeStr

}

function generateGraphQlCodePrimitiveValue(ty, ctx) {
  if (ty.value === null) {
    return 'Any'; // TODO: Any is invalid type.
  }

  if (ty.value === void 0) {
    return 'Any'; // TODO: Any is invalid type.
  }

  switch (typeof ty.value) {
    case 'number':
      return 'Float';

    case 'bigint':
      return 'BigInt';

    case 'string':
      return 'String';

    case 'boolean':
      return 'Boolean';

    default:
      return 'Any';
    // TODO: Any is invalid type.
  }
}

function generateGraphQlCodeRepeated(ty, ctx) {
  return `[${ty.repeated.typeName ? formatTypeName(ty.repeated, ctx, ty.repeated.typeName) : generateGraphQlCodeInner(ty.repeated, false, ctx, false)}${ty.repeated.kind === 'optional' || ty.repeated.kind === 'one-of' && isNullableOneOf(ty.repeated, ctx) ? '' : '!'}]`;
}

function generateGraphQlCodeSpread(ty, ctx) {
  return '';
}

function generateGraphQlCodeSequence(ty, ctx) {
  return '[Any]'; // TODO: Any is invalid type.
}

function generateGraphQlCodeOneOf(ty, ctx, isUnion) {
  const z = isNullableOneOf(ty, ctx);

  if (z) {
    return z.typeName ? z.typeName : generateGraphQlCodeInner(z, false, ctx, false);
  } else {
    if (isUnion) {
      return `${ty.oneOf.map(x => x.typeName ? x.typeName : generateGraphQlCodeInner(x, false, ctx, false)).join(' | ')}`;
    } else {
      return 'Any'; // TODO: Any is invalid type.
    }
  }
}

function generateGraphQlCodeEnum(ty, ctx) {
  return ty.typeName ? formatTypeName(ty, ctx, ty.typeName) : 'Any';
}

function generateGraphQlCodeObject(ty, isInterface, ctx) {
  if (ty.members.length === 0) {
    return '{}';
  }

  const sep = '\n';
  const memberLines = ty.members.map(x => `${formatGraphQlCodeDocComment(x[3] || '', ctx.nestLevel + 1)}${'    '.repeat(ctx.nestLevel + 1)}${x[0]}: ${x[1].typeName ? formatTypeName(x[1], Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  }), x[1].typeName) : generateGraphQlCodeInner(x[1], false, Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  }), false)}${x[1].kind === 'optional' || x[1].kind === 'one-of' && isNullableOneOf(x[1], ctx) ? '' : '!'}`);
  return `{\n${memberLines.join(sep)}${sep}${'    '.repeat(ctx.nestLevel)}}`;
}

function generateGraphQlCodeInner(ty, isInterface, ctx, isUnion) {
  let ret = '';

  switch (ty.kind) {
    case 'optional':
      return generateGraphQlCodeInner(ty.optional, isInterface, ctx, false);

    case 'one-of':
      return generateGraphQlCodeOneOf(ty, ctx, isUnion);
    // TODO: inline union is invalid.

    case 'spread':
      return generateGraphQlCodeSpread(ty, ctx);

    case 'sequence':
      return generateGraphQlCodeSequence(ty, ctx);

    case 'never':
      ret = 'Any'; // TODO: Any is invalid type.

      break;

    case 'any':
      ret = 'Any'; // TODO: Any is invalid type.

      break;

    case 'unknown':
      ret = 'Any'; // TODO: Any is invalid type.

      break;

    case 'primitive':
      ret = generateGraphQlCodePrimitive(ty, ctx);
      break;

    case 'primitive-value':
      ret = generateGraphQlCodePrimitiveValue(ty, ctx);
      break;

    case 'repeated':
      ret = generateGraphQlCodeRepeated(ty, ctx);
      break;

    case 'enum':
      ret = generateGraphQlCodeEnum(ty, ctx);
      break;

    case 'object':
      ret = generateGraphQlCodeObject(ty, isInterface, ctx);
      break;

    case 'symlink':
      ret = ty.symlinkTargetName;
      break;

    case 'operator':
      throw new Error(`Unexpected type assertion: ${ty.kind}`);

    default:
      throw new Error(`Unknown type assertion: ${ty.kind}`);
  }

  return ret + '';
}

function generateGraphQlCode(types) {
  let code = `\nscalar Any\nunion BigInt = String | Int\n\n`;
  const ctx = {
    nestLevel: 0
  };

  for (const ty of types.entries()) {
    if (ty[1].ty.noOutput) {
      code += `scalar ${ty[0]}\n\n`;
      continue;
    }

    code += formatGraphQlCodeDocComment(ty[1].ty, ctx.nestLevel);

    if (ty[1].ty.kind === 'object') {
      code += `type ${ty[0]} ${generateGraphQlCodeInner(ty[1].ty, true, ctx, false)}\n\n`;
    } else if (ty[1].ty.kind === 'enum') {
      const indent0 = '    '.repeat(ctx.nestLevel);
      const indent1 = '    '.repeat(ctx.nestLevel + 1);
      code += `enum ${ty[0]} {\n${ty[1].ty.values.map(x => `${formatGraphQlCodeDocComment(x[2] || '', ctx.nestLevel + 1)}${indent1}${x[0]}\n`).join('')}${indent0}}\n\n`;
    } else if (ty[1].ty.kind === 'never' && ty[1].ty.passThruCodeBlock) {// nothing to do
    } else {
      code += `union ${ty[0]} = ${generateGraphQlCodeInner(ty[1].ty, false, ctx, true)}\n\n`;
    }
  }

  return code;
}

/***/ }),

/***/ "./src/lib/codegen/json-schema.ts":
/*!****************************************!*\
  !*** ./src/lib/codegen/json-schema.ts ***!
  \****************************************/
/*! exports provided: generateJsonSchemaObject, generateJsonSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateJsonSchemaObject", function() { return generateJsonSchemaObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateJsonSchema", function() { return generateJsonSchema; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
function addMetaInfo(a, ty) {
  const a2 = Object.assign({}, a);
  let changed = false;

  if (ty.docComment) {
    a2.description = ty.docComment;
    changed = true;
  }

  switch (ty.kind) {
    case 'repeated':
      if (typeof ty.min === 'number') {
        a2.minItems = ty.min;
        changed = true;
      }

      if (typeof ty.max === 'number') {
        a2.maxItems = ty.max;
        changed = true;
      }

      break;

    case 'primitive':
      if (typeof ty.minValue === 'number') {
        a2.minimum = ty.minValue;
        changed = true;
      }

      if (typeof ty.maxValue === 'number') {
        a2.maximum = ty.maxValue;
        changed = true;
      }

      if (typeof ty.greaterThanValue === 'number') {
        a2.exclusiveMinimum = ty.greaterThanValue;
        changed = true;
      }

      if (typeof ty.lessThanValue === 'number') {
        a2.exclusiveMaximum = ty.lessThanValue;
        changed = true;
      }

      if (typeof ty.minLength === 'number') {
        a2.minLength = ty.minLength;
        changed = true;
      }

      if (typeof ty.maxLength === 'number') {
        a2.maxLength = ty.maxLength;
        changed = true;
      }

      if (ty.pattern) {
        a2.pattern = ty.pattern.source;
        changed = true;
      }

      break;
  }

  return changed ? a2 : a;
}

function generateJsonSchemaInner(schema, ty, nestLevel) {
  var _a;

  if (0 < nestLevel && ty.typeName) {
    const ret = {
      $ref: `#/definitions/${ty.typeName.replace(/\./g, '/properties/')}`
    };
    const r2 = addMetaInfo(ret, ty);

    if (ret !== r2) {
      // NOTE: `$ref` cannot have value constraints.
      return generateJsonSchemaInner(schema, ty, 0);
    } else {
      return ret;
    }
  }

  switch (ty.kind) {
    case 'symlink':
      {
        const ret = {
          $ref: `#/definitions/${ty.symlinkTargetName}`
        };
        const r2 = addMetaInfo(ret, ty);

        if (ret !== r2) {
          // NOTE: `$ref` cannot have value constraints.
          const t2 = (_a = schema.get(ty.symlinkTargetName)) === null || _a === void 0 ? void 0 : _a.ty;

          if (t2) {
            return generateJsonSchemaInner(schema, t2, 0);
          } else {
            // Drop constraints.
            return ret;
          }
        } else {
          return ret;
        }
      }

    case 'repeated':
      {
        const ret = {
          type: 'array',
          items: generateJsonSchemaInner(schema, ty.repeated, nestLevel + 1)
        };

        if (typeof ty.min === 'number') {
          ret.minItems = ty.min;
        }

        if (typeof ty.max === 'number') {
          ret.maxItems = ty.max;
        }

        return addMetaInfo(ret, ty);
      }

    case 'sequence':
      {
        const ret = {
          type: 'array',
          items: {
            anyOf: ty.sequence.map(x => generateJsonSchemaInner(schema, x, nestLevel + 1))
          }
        };
        return addMetaInfo(ret, ty);
      }

    case 'spread':
      {
        return generateJsonSchemaInner(schema, ty.spread, nestLevel + 1);
      }

    case 'one-of':
      {
        const ret = {
          anyOf: ty.oneOf.map(x => generateJsonSchemaInner(schema, x, nestLevel + 1))
        };
        return addMetaInfo(ret, ty);
      }

    case 'optional':
      {
        const ret = {
          oneOf: [generateJsonSchemaInner(schema, ty.optional, nestLevel + 1), {
            type: 'null'
          }]
        };
        return addMetaInfo(ret, ty);
      }

    case 'enum':
      {
        const ret = {
          type: ['string', 'number'],
          enum: ty.values.map(x => x[1])
        };
        return addMetaInfo(ret, ty);
      }

    case 'object':
      {
        const properties = {};
        const patternProperties = {};
        let patternPropsCount = 0;
        const required = [];

        for (const m of ty.members) {
          const z = generateJsonSchemaInner(schema, m[1].kind === 'optional' ? m[1].optional : m[1], nestLevel + 1);

          if (m[3]) {
            z.description = m[3];
          } else {
            delete z.description;
          }

          properties[m[0]] = z;

          if (m[1].kind !== 'optional') {
            required.push(m[0]);
          }
        }

        for (const m of ty.additionalProps || []) {
          const z = generateJsonSchemaInner(schema, m[1], nestLevel + 1);

          if (m[3]) {
            z.description = m[3];
          } else {
            delete z.description;
          }

          for (const k of m[0]) {
            patternPropsCount++;

            switch (k) {
              case 'number':
                patternProperties['^[0-9]+$'] = z;
                break;

              case 'string':
                patternProperties['^.*$'] = z;
                break;

              default:
                patternProperties[k.source] = z;
                break;
            }
          }
        }

        const ret = Object.assign(Object.assign(Object.assign({
          type: 'object',
          properties
        }, 0 < patternPropsCount ? {
          patternProperties
        } : {}), 0 < required.length ? {
          required
        } : {}), {
          additionalProperties: false
        });
        return addMetaInfo(ret, ty);
      }

    case 'primitive':
      {
        switch (ty.primitiveName) {
          case 'null':
          case 'undefined':
            {
              const ret = {
                type: 'null'
              };
              return addMetaInfo(ret, ty);
            }

          case 'number':
            {
              const ret = {
                type: 'number'
              };
              return addMetaInfo(ret, ty);
            }

          case 'bigint':
            {
              const ret = {
                type: ['integer', 'string']
              };
              return addMetaInfo(ret, ty);
            }

          case 'integer':
            {
              const ret = {
                type: 'integer'
              };
              return addMetaInfo(ret, ty);
            }

          case 'string':
            {
              const ret = {
                type: 'string'
              };
              return addMetaInfo(ret, ty);
            }

          case 'boolean':
            {
              const ret = {
                type: 'boolean'
              };
              return addMetaInfo(ret, ty);
            }
        } // TODO: Function, DateStr, DateTimeStr

      }

    case 'primitive-value':
      {
        switch (typeof ty.value) {
          case 'number':
            {
              const ret = {
                type: 'number',
                enum: [ty.value]
              };
              return addMetaInfo(ret, ty);
            }

          case 'bigint':
            {
              const ret = {
                type: ['integer', 'string'],
                enum: [ty.value.toString()]
              };

              if (BigInt(Number.MIN_SAFE_INTEGER) <= ty.value && ty.value <= BigInt(Number.MAX_SAFE_INTEGER)) {
                ret.enum.push(Number(ty.value));
              }

              return addMetaInfo(ret, ty);
            }

          case 'string':
            {
              const ret = {
                type: 'string',
                enum: [ty.value]
              };
              return addMetaInfo(ret, ty);
            }

          case 'boolean':
            {
              const ret = {
                type: 'boolean',
                enum: [ty.value]
              };
              return addMetaInfo(ret, ty);
            }

          default:
            throw new Error(`Unknown primitive-value assertion: ${typeof ty.value}`);
        }
      }

    case 'never':
      {
        const ret = {
          type: 'null'
        };
        return addMetaInfo(ret, ty);
      }

    case 'any':
    case 'unknown':
      {
        const ret = {
          type: ['null', 'integer', 'number', 'string', 'boolean', 'array', 'object']
        };
        return addMetaInfo(ret, ty);
      }

    case 'operator':
      throw new Error(`Unexpected type assertion: ${ty.kind}`);

    default:
      throw new Error(`Unknown type assertion: ${ty.kind}`);
  }
}

function generateJsonSchemaObject(schema) {
  const ret = {
    $schema: 'http://json-schema.org/draft-06/schema#',
    definitions: {}
  };

  for (const ty of schema.entries()) {
    if (ty[1].ty.kind === 'never' && ty[1].ty.passThruCodeBlock) {
      continue;
    }

    ret.definitions[ty[0]] = generateJsonSchemaInner(schema, ty[1].ty, 0);
  }

  return ret;
}
function generateJsonSchema(schema, asTs) {
  const ret = generateJsonSchemaObject(schema);

  if (asTs) {
    return `\n// tslint:disable: object-literal-key-quotes\n` + `const schema = ${JSON.stringify(ret, null, 2)};\nexport default schema;` + `\n// tslint:enable: object-literal-key-quotes\n`;
  } else {
    return JSON.stringify(ret, null, 2);
  }
}

/***/ }),

/***/ "./src/lib/codegen/proto3.ts":
/*!***********************************!*\
  !*** ./src/lib/codegen/proto3.ts ***!
  \***********************************/
/*! exports provided: generateProto3Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateProto3Code", function() { return generateProto3Code; });
/* harmony import */ var _lib_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/escape */ "./src/lib/escape.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


function formatTypeName(ty, ctx, typeName) {
  if (typeName.includes('.')) {
    return generateProto3CodeInner(ty, false, ctx);
  }

  return typeName;
}

function formatProto3CodeDocComment(ty, nestLevel) {
  let code = '';
  const indent = '    '.repeat(nestLevel);
  const docComment = typeof ty === 'string' ? ty : ty.docComment;

  if (docComment) {
    if (0 <= docComment.indexOf('\n')) {
      code += `${indent}/**\n${indent}  ${docComment.split('\n').map(x => x.trimLeft()).join(`\n${indent} `)}\n${indent} */\n`;
    } else {
      code += `${indent}/** ${docComment} */\n`;
    }
  }

  return code;
}

function formatMemberType(ty, ctx) {
  if (ty.typeName) {
    return formatTypeName(ty, ctx, ty.typeName);
  } else {
    switch (ty.kind) {
      case 'primitive':
        return generateProto3CodePrimitive(ty, ctx);

      case 'primitive-value':
        return generateProto3CodePrimitiveValue(ty, ctx);

      case 'repeated':
        return generateProto3CodeRepeated(ty, ctx);

      case 'one-of':
        return generateProto3CodeOneOf(ty, ctx);

      default:
        return 'object';
    }
  }
}

function appendOptionalModifier(name) {
  switch (name) {
    case 'double':
      return 'google.protobuf.DoubleValue';

    case 'int64':
      return 'google.protobuf.Int64Value';

    case 'int32':
      return 'google.protobuf.Int32Value';

    case 'string':
      return 'google.protobuf.StringValue';

    case 'bool':
      return 'google.protobuf.BoolValue';

    default:
      return name;
  }
}

function isNullableOneOf(ty, ctx) {
  const filtered = ty.oneOf.filter(x => !(x.kind === 'primitive' && (x.primitiveName === 'null' || x.primitiveName === 'undefined') || x.kind === 'primitive-value' && (x.value === null || x.value === void 0)));
  return filtered.length === 1 && ty.oneOf.length !== 1 ? filtered[0] : null;
}

function generateProto3CodePrimitive(ty, ctx) {
  switch (ty.primitiveName) {
    case 'number':
      return 'double';

    case 'integer':
      return 'int32';

    case 'bigint':
      return 'string';

    case 'string':
      return 'string';

    case 'boolean':
      return 'bool';

    case 'undefined':
    case 'null':
    default:
      return 'google.protobuf.Any';
  } // TODO: Function, integer, DateStr, DateTimeStr

}

function generateProto3CodePrimitiveValue(ty, ctx) {
  if (ty.value === null) {
    return 'google.protobuf.Any';
  }

  if (ty.value === void 0) {
    return 'google.protobuf.Any';
  }

  switch (typeof ty.value) {
    case 'number':
      return 'double';

    case 'bigint':
      return 'string';

    case 'string':
      return 'string';

    case 'boolean':
      return 'bool';

    default:
      return 'google.protobuf.Any';
  }
}

function generateProto3CodeRepeated(ty, ctx) {
  return `repeated ${ty.repeated.typeName ? formatTypeName(ty.repeated, ctx, ty.repeated.typeName) : ty.repeated.kind === 'repeated' ? 'google.protobuf.Any' : generateProto3CodeInner(ty.repeated, false, ctx)}`;
}

function generateProto3CodeSpread(ty, ctx) {
  return '';
}

function generateProto3CodeSequence(ty, ctx) {
  return 'repeated google.protobuf.Any';
}

function generateProto3CodeOneOf(ty, ctx) {
  const z = isNullableOneOf(ty, ctx);

  if (z) {
    return appendOptionalModifier(formatMemberType(z, ctx));
  } else {
    return 'google.protobuf.Any';
  }
}

function generateProto3CodeOptional(ty, ctx) {
  return appendOptionalModifier(generateProto3CodeInner(ty.optional, false, ctx));
}

function generateProto3CodeEnum(ty, ctx) {
  return ty.typeName ? formatTypeName(ty, ctx, ty.typeName) : 'google.protobuf.Any';
}

function generateProto3CodeObject(ty, isInterface, ctx) {
  if (ty.members.length === 0) {
    return '{}';
  }

  const sep = isInterface ? ';\n' : ',\n';
  let count = 1;
  const memberLines = ty.members.map(x => `${formatProto3CodeDocComment(x[3] || '', ctx.nestLevel + 1)}${'    '.repeat(ctx.nestLevel + 1)}${x[1].typeName ? formatTypeName(x[1], Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  }), x[1].typeName) : generateProto3CodeInner(x[1], false, Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  }))} ${x[0]} = ${count++}`);
  return `{\n${memberLines.join(sep)}${sep}${'    '.repeat(ctx.nestLevel)}}`;
}

function generateProto3CodeInner(ty, isInterface, ctx) {
  switch (ty.kind) {
    case 'never':
    case 'any':
    case 'unknown':
      return 'google.protobuf.Any';

    case 'primitive':
      return generateProto3CodePrimitive(ty, ctx);

    case 'primitive-value':
      return generateProto3CodePrimitiveValue(ty, ctx);

    case 'repeated':
      return generateProto3CodeRepeated(ty, ctx);

    case 'spread':
      return generateProto3CodeSpread(ty, ctx);

    case 'sequence':
      return generateProto3CodeSequence(ty, ctx);

    case 'one-of':
      return generateProto3CodeOneOf(ty, ctx);

    case 'optional':
      return generateProto3CodeOptional(ty, ctx);

    case 'enum':
      return generateProto3CodeEnum(ty, ctx);

    case 'object':
      return generateProto3CodeObject(ty, isInterface, ctx);

    case 'symlink':
      return ty.symlinkTargetName;

    case 'operator':
      throw new Error(`Unexpected type assertion: ${ty.kind}`);

    default:
      throw new Error(`Unknown type assertion: ${ty.kind}`);
  }
}

function generateProto3Code(types) {
  let code = `
syntax = "proto3";
import "google/protobuf/wrappers.proto";
import "google/protobuf/any.proto";

`;
  const ctx = {
    nestLevel: 0
  };

  for (const ty of types.entries()) {
    if (ty[1].ty.noOutput) {
      const indent0 = '    '.repeat(ctx.nestLevel);
      const indent1 = '    '.repeat(ctx.nestLevel + 1);
      code += `message ${ty[0]} {\n${indent1}google.protobuf.Any value = 1;\n${indent0}}\n\n`;
      continue;
    }

    code += formatProto3CodeDocComment(ty[1].ty, ctx.nestLevel);

    if (ty[1].ty.kind === 'object') {
      code += `message ${ty[0]} ${generateProto3CodeInner(ty[1].ty, true, ctx)}\n\n`;
    } else if (ty[1].ty.kind === 'enum') {
      const indent0 = '    '.repeat(ctx.nestLevel);
      const indent1 = '    '.repeat(ctx.nestLevel + 1);

      if (0 < ty[1].ty.values.filter(x => typeof x[1] !== 'number').length) {
        // NOTE: string enum is not allowed
        code += `message ${ty[0]} {\n${indent1}google.protobuf.Any value = 1;\n${indent0}}\n\n`;
      } else {
        code += `enum ${ty[0]} {\n${indent1}option allow_alias = true;\n${ty[1].ty.values.filter(x => x[1] === 0).length === 0 ? `${indent1}${ty[0]}__UNKNOWN__ = 0;\n` : // NOTE: 0 value item is required
        ''}${ty[1].ty.values.map(x => `${formatProto3CodeDocComment(x[2] || '', ctx.nestLevel + 1)}${indent1}${(() => {
          if (typeof x[1] === 'number') {
            return `${ty[0]}_${x[0]} = ${x[1]}`; // NOTE: label namespace is shared by all top-level enum
          } else {
            return `${ty[0]}_${x[0]} = '${Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(x[1])}'`; // NOTE: string enum is not allowed
          }
        })()};\n`).join('')}${indent0}}\n\n`;
      }
    } else if (ty[1].ty.kind === 'never' && ty[1].ty.passThruCodeBlock) {// nothing to do
    } else {
      const indent0 = '    '.repeat(ctx.nestLevel);
      const indent1 = '    '.repeat(ctx.nestLevel + 1);
      code += `message ${ty[0]} {\n${indent1}${generateProto3CodeInner(ty[1].ty, false, ctx)} value = 1;\n${indent0}}\n\n`;
    }
  }

  return code;
}

/***/ }),

/***/ "./src/lib/codegen/typescript.ts":
/*!***************************************!*\
  !*** ./src/lib/codegen/typescript.ts ***!
  \***************************************/
/*! exports provided: generateTypeScriptCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypeScriptCode", function() { return generateTypeScriptCode; });
/* harmony import */ var _lib_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/escape */ "./src/lib/escape.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/util */ "./src/lib/util.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function formatTypeName(typeName) {
  if (typeName.includes('.')) {
    const z = typeName.split('.');
    let s = z[0];

    for (let i = 1; i < z.length; i++) {
      s += `['${Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(z[i])}']`;
    }

    return `(${s})`;
  }

  return typeName;
}

function formatTypeScriptCodeDocComment(ty, nestLevel) {
  let code = '';
  const indent = '    '.repeat(nestLevel);
  const docComment = typeof ty === 'string' ? ty : ty.docComment;

  if (docComment) {
    if (0 <= docComment.indexOf('\n')) {
      code += `${indent}/**\n${indent}  ${docComment.split('\n').map(x => x.trimLeft()).join(`\n${indent} `)}\n${indent} */\n`;
    } else {
      code += `${indent}/** ${docComment} */\n`;
    }
  }

  return code;
}

function generateTypeScriptCodePrimitive(ty, ctx) {
  // TODO: Function, DateStr, DateTimeStr
  switch (ty.primitiveName) {
    case 'integer':
      return 'number';

    default:
      return ty.primitiveName;
  }
}

function generateTypeScriptCodePrimitiveValue(ty, ctx) {
  if (ty.value === null) {
    return 'null';
  }

  if (ty.value === void 0) {
    return 'undefined';
  }

  switch (typeof ty.value) {
    case 'string':
      return `'${Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(ty.value)}'`;

    case 'bigint':
      return `${ty.value.toString()}n`;

    default:
      return ty.value.toString();
  }
}

function generateTypeScriptCodeRepeated(ty, ctx) {
  return ty.repeated.kind === 'primitive' || ty.repeated.kind === 'never' || ty.repeated.kind === 'any' || ty.repeated.kind === 'unknown' || ty.repeated.kind === 'object' || ty.repeated.kind === 'symlink' || ty.repeated.kind === 'one-of' && ty.repeated.typeName ? `${ty.repeated.typeName ? formatTypeName(ty.repeated.typeName) : generateTypeScriptCodeInner(ty.repeated, false, ctx)}[]` : `Array<${ty.repeated.typeName ? formatTypeName(ty.repeated.typeName) : generateTypeScriptCodeInner(ty.repeated, false, ctx)}>`;
}

function generateTypeScriptCodeSpread(ty, ctx) {
  return '';
}

function generateTypeScriptCodeSequence(ty, ctx) {
  if (0 < ty.sequence.filter(x => x.kind === 'spread' || x.kind === 'optional').length) {
    return 'any[]';
  }

  return `[${ty.sequence.filter(x => x.kind !== 'spread' && x.kind !== 'optional').map(x => x.typeName ? formatTypeName(x.typeName) : generateTypeScriptCodeInner(x, false, Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  }))).join(', ')}]`;
}

function generateTypeScriptCodeOneOf(ty, ctx) {
  return `(${ty.oneOf.map(x => x.typeName ? formatTypeName(x.typeName) : generateTypeScriptCodeInner(x, false, ctx)).join(' | ')})`;
}

function generateTypeScriptCodeOptional(ty, ctx) {
  return generateTypeScriptCodeInner(ty.optional, false, ctx);
}

function generateTypeScriptCodeEnum(ty, ctx) {
  return `(${ty.values.map(x => `${x[1]}`).join(' | ')})`;
}

function formatAdditionalPropsName(ak, i) {
  return `[propName${i}: ${ak.map(x => typeof x === 'string' ? x : 'string').join(' | ')}]`;
}

function generateTypeScriptCodeObject(ty, isInterface, ctx) {
  var _a, _b;

  if (ty.members.filter(x => !x[2]).length === 0 && ((_a = ty.additionalProps) === null || _a === void 0 ? void 0 : _a.filter(x => !x[2]).length) === 0) {
    return '{}';
  } // NOTE: Semicolon is always preferred.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md


  const sep = isInterface ? ';\n' : ';\n';
  const memberLines = ty.members.filter(x => !x[2]).map(x => `${formatTypeScriptCodeDocComment(x[3] || '', ctx.nestLevel + 1)}${'    '.repeat(ctx.nestLevel + 1)}${_lib_util__WEBPACK_IMPORTED_MODULE_1__["SymbolPattern"].test(x[0]) ? x[0] : `'${Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(x[0])}'`}${x[1].kind === 'optional' ? '?' : ''}: ${x[1].typeName ? formatTypeName(x[1].typeName) : generateTypeScriptCodeInner(x[1], false, Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  }))}`);
  const additionalPropsLines = ((_b = ty.additionalProps) === null || _b === void 0 ? void 0 : _b.filter(x => !x[2]).map((x, i) => `${formatTypeScriptCodeDocComment(x[3] || '', ctx.nestLevel + 1)}${'    '.repeat(ctx.nestLevel + 1)}${formatAdditionalPropsName(x[0], i)}${x[1].kind === 'optional' ? '?' : ''}: ${x[1].typeName ? formatTypeName(x[1].typeName) : generateTypeScriptCodeInner(x[1], false, Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  }))}`)) || [];
  const propsLines = memberLines.concat(additionalPropsLines);

  if (propsLines.length === 0) {
    return '{}';
  }

  return `{\n${propsLines.join(sep)}${sep}${'    '.repeat(ctx.nestLevel)}}`;
}

function generateTypeScriptCodeInner(ty, isInterface, ctx) {
  switch (ty.kind) {
    case 'never':
      return 'never';

    case 'any':
      return 'any';

    case 'unknown':
      return 'unknown';

    case 'primitive':
      return generateTypeScriptCodePrimitive(ty, ctx);

    case 'primitive-value':
      return generateTypeScriptCodePrimitiveValue(ty, ctx);

    case 'repeated':
      return generateTypeScriptCodeRepeated(ty, ctx);

    case 'spread':
      return generateTypeScriptCodeSpread(ty, ctx);

    case 'sequence':
      return generateTypeScriptCodeSequence(ty, ctx);

    case 'one-of':
      return generateTypeScriptCodeOneOf(ty, ctx);

    case 'optional':
      return generateTypeScriptCodeOptional(ty, ctx);

    case 'enum':
      return generateTypeScriptCodeEnum(ty, ctx);

    case 'object':
      return generateTypeScriptCodeObject(ty, isInterface, ctx);

    case 'symlink':
      return ty.symlinkTargetName;

    case 'operator':
      throw new Error(`Unexpected type assertion: ${ty.kind}`);

    default:
      throw new Error(`Unknown type assertion: ${ty.kind}`);
  }
}

function generateTypeScriptCode(types) {
  let code = '';
  const ctx = {
    nestLevel: 0
  };

  for (const ty of types.entries()) {
    if (ty[1].ty.noOutput) {
      continue;
    }

    code += formatTypeScriptCodeDocComment(ty[1].ty, ctx.nestLevel);

    if (ty[1].exported) {
      code += 'export ';
    }

    if (ty[1].isDeclare) {
      code += 'declare ';
    }

    if (ty[1].ty.kind === 'object') {
      code += `interface ${ty[0]}${ty[1].ty.baseTypes && ty[1].ty.baseTypes.length ? ` extends ${ty[1].ty.baseTypes.filter(x => x.typeName).map(x => formatTypeName(x.typeName)).join(', ')}` : ''} ${generateTypeScriptCodeInner(ty[1].ty, true, ctx)}\n\n`;
    } else if (ty[1].ty.kind === 'enum') {
      const indent0 = '    '.repeat(ctx.nestLevel);
      const indent1 = '    '.repeat(ctx.nestLevel + 1);
      let value = 0;
      code += `${ty[1].ty.isConst ? 'const ' : ''}enum ${ty[0]} {\n${ty[1].ty.values.map(x => `${formatTypeScriptCodeDocComment(x[2] || '', ctx.nestLevel + 1)}${indent1}${(() => {
        if (value !== null && x[1] === value) {
          value++;
          return `${x[0]}`;
        } else {
          if (typeof x[1] === 'number') {
            value = x[1] + 1;
            return `${x[0]} = ${x[1]}`;
          } else {
            return `${x[0]} = '${Object(_lib_escape__WEBPACK_IMPORTED_MODULE_0__["escapeString"])(x[1])}'`;
          }
        }
      })()},\n`).join('')}${indent0}}\n\n`;
    } else if (ty[1].ty.kind === 'never' && ty[1].ty.passThruCodeBlock) {
      code += `${ty[1].ty.passThruCodeBlock}\n\n`;
    } else {
      code += `type ${ty[0]} = ${(ty[1].ty.originalTypeName ? formatTypeName(ty[1].ty.originalTypeName) : void 0) || generateTypeScriptCodeInner(ty[1].ty, false, ctx)};\n\n`;
    }
  }

  return code;
}

/***/ }),

/***/ "./src/lib/compiler.ts":
/*!*****************************!*\
  !*** ./src/lib/compiler.ts ***!
  \*****************************/
/*! exports provided: externalTypeDef, program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalTypeDef", function() { return externalTypeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "program", function() { return program; });
/* harmony import */ var fruitsconfits_modules_lib_string_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fruitsconfits/modules/lib/string-parser */ "./node_modules/fruitsconfits/modules/lib/string-parser.js");
/* harmony import */ var fruitsconfits_modules_lib_object_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fruitsconfits/modules/lib/object-parser */ "./node_modules/fruitsconfits/modules/lib/object-parser.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/lib/util.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const $s = Object(fruitsconfits_modules_lib_string_parser__WEBPACK_IMPORTED_MODULE_0__["getStringParsers"])({
  rawToToken: rawToken => rawToken,
  concatTokens: tokens => tokens.length ? [tokens.reduce((a, b) => String(a) + b)] : []
});
const $o = Object(fruitsconfits_modules_lib_object_parser__WEBPACK_IMPORTED_MODULE_1__["getObjectParsers"])({
  rawToToken: rawToken => rawToken,
  concatTokens: tokens => tokens.length ? [tokens.reduce((a, b) => String(a) + b)] : [],
  comparator: (a, b) => a === b
});
const {
  seq,
  cls,
  notCls,
  clsFn,
  classes,
  numbers,
  cat,
  once,
  repeat,
  qty,
  zeroWidth,
  err,
  beginning,
  end,
  first,
  or,
  combine,
  erase,
  trans,
  ahead,
  rules,
  makeProgram
} = $s;
const directiveLineComment = trans(tokens => [[{
  symbol: 'directive'
}, ...tokens]])(erase(qty(2)(cls('/'))), erase(repeat(classes.space)), cat(seq('@tynder-'), repeat(first(classes.alnum, cls('-')))), // [0]
erase(repeat(classes.space)), cat(repeat(notCls('\r\n', '\n', '\r'))), // [1]
erase(first(classes.newline, ahead(end()))));
const directiveBlockComment = trans(tokens => [[{
  symbol: 'directive'
}, ...tokens]])(erase(seq('/*')), erase(repeat(classes.space)), cat(seq('@tynder-'), repeat(first(classes.alnum, cls('-')))), // [0]
erase(repeat(classes.space)), cat(repeat(notCls('*/'))), // [1]
erase(seq('*/')));
const lineComment = combine(erase(qty(2)(cls('/'))), first(combine(ahead(repeat(classes.space), notCls('@tynder-')), repeat(notCls('\r\n', '\n', '\r')), first(classes.newline, ahead(end()))), first(classes.newline, ahead(end()))));
const hashLineComment = combine(seq('#'), repeat(notCls('\r\n', '\n', '\r')), first(classes.newline, ahead(end())));
const docComment = combine(seq('/**'), repeat(classes.space), input => {
  const ret = cat(repeat(notCls('*/')))(input);

  if (ret.succeeded) {
    // define a reducer
    const ctx2 = Object.assign({}, ret.next.context); // NOTE: context is immutable

    ctx2.docComment = (ret.tokens[0] || '').trim();
    ret.next.context = ctx2;
  }

  return ret;
}, seq('*/'));
const blockComment = combine(seq('/*'), ahead(repeat(classes.space), notCls('@tynder-')), repeat(notCls('*/')), seq('*/'));
const commentOrSpace = first(classes.space, lineComment, hashLineComment, docComment, blockComment);
const trueValue = trans(tokens => [true])(seq('true'));
const falseValue = trans(tokens => [false])(seq('false'));
const nullValue = trans(tokens => [null])(seq('null'));
const undefinedValue = trans(tokens => [void 0])(seq('undefined'));
const positiveInfinityValue = trans(tokens => [Number.POSITIVE_INFINITY])(qty(0, 1)(seq('+')), seq('Infinity'));
const negativeInfinityValue = trans(tokens => [Number.NEGATIVE_INFINITY])(seq('-Infinity'));
const nanValue = trans(tokens => [Number.NaN])(seq('NaN'));
const binaryIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 2)])(numbers.bin(seq('0b')));
const octalIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 8)])(numbers.oct(seq('0o'), seq('0')));
const hexIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 16)])(numbers.hex(seq('0x'), seq('0X')));
const decimalIntegerValue = trans(tokens => [Number.parseInt(tokens[0].replace(/_/g, ''), 10)])(numbers.int);
const bigDecimalIntegerValue = trans(tokens => [BigInt(tokens[0].replace(/_/g, ''))])(numbers.bigint);
const floatingPointNumberValue = trans(tokens => [Number.parseFloat(tokens[0].replace(/_/g, ''))])(numbers.float);
const numberValue = first(octalIntegerValue, hexIntegerValue, binaryIntegerValue, bigDecimalIntegerValue, floatingPointNumberValue, decimalIntegerValue, positiveInfinityValue, negativeInfinityValue, nanValue);
const stringEscapeSeq = first(trans(t => ['\''])(seq('\\\'')), trans(t => ['\"'])(seq('\\"')), trans(t => ['\`'])(seq('\\`')), trans(t => ['/'])(seq('\\/')), trans(t => ['\\'])(seq('\\\\')), trans(t => [''])(seq('\\\r\n')), trans(t => [''])(seq('\\\r')), trans(t => [''])(seq('\\\n')), trans(t => ['\n'])(seq('\\n')), trans(t => ['\r'])(seq('\\r')), trans(t => ['\v'])(seq('\\v')), trans(t => ['\t'])(seq('\\t')), trans(t => ['\b'])(seq('\\b')), trans(t => ['\f'])(seq('\\f')), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 16))])(cat(erase(seq('\\u')), qty(4, 4)(classes.hex))), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 16))])(cat(erase(seq('\\u{')), qty(1, 6)(classes.hex), erase(seq('}')))), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 16))])(cat(erase(seq('\\x')), qty(2, 2)(classes.hex))), trans(t => [String.fromCodePoint(Number.parseInt(t[0], 8))])(cat(erase(seq('\\')), qty(3, 3)(classes.oct))));
const signleQuotStringValue = trans(tokens => [tokens[0]])(erase(seq("'")), cat(repeat(first(stringEscapeSeq, combine(cls('\r', '\n'), err('Line breaks within strings are not allowed.')), notCls("'")))), erase(seq("'")));
const doubleQuotStringValue = trans(tokens => [tokens[0]])(erase(seq('"')), cat(repeat(first(stringEscapeSeq, combine(cls('\r', '\n'), err('Line breaks within strings are not allowed.')), notCls('"')))), erase(seq('"')));
const backQuotStringValue = trans(tokens => [tokens[0]])(erase(seq('`')), cat(repeat(first(stringEscapeSeq, notCls('`')))), erase(seq('`')));
const stringValue = first(signleQuotStringValue, doubleQuotStringValue, backQuotStringValue);
const regexpStringValue = // TODO: '/' ']' '\\' in character class '[]' is not parsed correctly.
trans(tokens => [{
  value: tokens[1] ? new RegExp(tokens[0], tokens[1]) : new RegExp(tokens[0])
}])(erase(seq('/')), cat(repeat(first(stringEscapeSeq, notCls('/')))), erase(seq('/')), cat(qty(0)(cls('g', 'i', 'm', 's', 'u', 'y'))));
const symbolName = trans(tokens => tokens)(cat(combine(first(classes.alpha, cls('$', '_')), repeat(first(classes.alnum, cls('$', '_'))))));
const decoratorSymbolName = trans(tokens => [{
  symbol: tokens[0]
}])(cat(combine(seq('@'), first(classes.alpha, cls('$', '_')), repeat(first(classes.alnum, cls('$', '_'))))));
const simpleConstExpr = first(trueValue, falseValue, nullValue, undefinedValue, numberValue, stringValue);
const objKey = first(stringValue, symbolName);
const listValue = first(trans(tokens => [[]])(erase(seq('['), repeat(commentOrSpace), seq(']'))), trans(tokens => {
  const ast = [{
    symbol: '$list'
  }];

  for (const token of tokens) {
    ast.push(token);
  }

  return [ast];
})(erase(seq('[')), combine(erase(repeat(commentOrSpace)), first(input => listValue(input), // NOTE: recursive definitions
// NOTE: recursive definitions
input => objectValue(input), //       should place as lambda.
simpleConstExpr), erase(repeat(commentOrSpace))), repeat(combine(erase(repeat(commentOrSpace), seq(','), repeat(commentOrSpace)), first(input => listValue(input), // NOTE: recursive definitions
// NOTE: recursive definitions
input => objectValue(input), //       should place as lambda.
simpleConstExpr), erase(repeat(commentOrSpace)))), qty(0, 1)(erase(seq(','), repeat(commentOrSpace))), first(ahead(seq(']')), err('listValue: Unexpected token has appeared.')), erase(seq(']'))));
const objectKeyValuePair = combine(objKey, erase(repeat(commentOrSpace), first(seq(':'), err('":" is needed.')), repeat(commentOrSpace)), first(input => listValue(input), // NOTE: recursive definitions
// NOTE: recursive definitions
input => objectValue(input), //       should place as lambda.
simpleConstExpr, err('object value is needed.')));
const objectValue = first(trans(tokens => [[{
  symbol: '#'
}]])(erase(seq('{'), repeat(commentOrSpace), seq('}'))), trans(tokens => {
  const ast = [{
    symbol: '#'
  }];

  for (let i = 0; i < tokens.length; i += 2) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUnsafeVarNames"])(_util__WEBPACK_IMPORTED_MODULE_2__["dummyTargetObject"], tokens[i])) {
      throw new Error(`Unsafe symbol name is appeared in object literal: ${tokens[i]}`);
    }

    ast.push([tokens[i], tokens[i + 1]]);
  }

  return [ast];
})(erase(seq('{')), combine(erase(repeat(commentOrSpace)), objectKeyValuePair, erase(repeat(commentOrSpace))), repeat(combine(erase(seq(','), repeat(commentOrSpace)), objectKeyValuePair, erase(repeat(commentOrSpace)))), qty(0, 1)(erase(seq(','), repeat(commentOrSpace))), first(ahead(seq('}')), err('objectValue: Unexpected token has appeared.')), erase(seq('}'))));
const constExpr = first(simpleConstExpr, listValue, objectValue); // const primitiveValue = trans(tokens => [[{symbol: 'primitiveValue'}, tokens[0]]])(
//     first(trueValue, falseValue, nullValue, undefinedValue,
//           numberValue, stringValue, ));

const primitiveValueNoNullUndefined = trans(tokens => [[{
  symbol: 'primitiveValue'
}, tokens[0]]])(first(trueValue, falseValue, numberValue, stringValue));
const primitiveTypeName = trans(tokens => [[{
  symbol: 'primitive'
}, tokens[0]]])(first(seq('number?'), seq('integer?'), seq('bigint?'), seq('string?'), seq('boolean?'), // TODO: '?' is allowed in the sequence assertion
seq('number'), seq('integer'), seq('bigint'), seq('string'), seq('boolean'))); // TODO: function

const additionalPropPrimitiveTypeName = first(seq('number'), seq('string'));
const nullUndefinedTypeName = trans(tokens => [[{
  symbol: 'primitive'
}, tokens[0]]])(first(seq('null'), seq('undefined'), seq('any'), seq('unknown'), seq('never')));
const simpleOrDottedTypeName = first(primitiveTypeName, nullUndefinedTypeName, trans(tokens => [[{
  symbol: 'ref'
}, ...tokens]])(ahead(notCls('Array', 'Partial', 'Pick', 'Omit')), combine(symbolName, repeat(combine(erase(repeat(commentOrSpace), seq('.'), repeat(commentOrSpace)), symbolName)))));
const sequenceType = trans(tokens => [[{
  symbol: 'sequenceOf'
}, ...tokens]])(combine(erase(seq('[')), combine(erase(repeat(commentOrSpace)), input => spreadOrComplexType(first(seq(','), seq(']')))(input), erase(repeat(commentOrSpace))), repeat(combine(erase(seq(','), repeat(commentOrSpace)), input => spreadOrComplexType(first(seq(','), seq(']')))(input), erase(repeat(commentOrSpace)))), qty(0, 1)(erase(seq(','), repeat(commentOrSpace))), first(ahead(seq(']')), err('sequenceType: Unexpected token has appeared.')), erase(seq(']'))));
const arraySizeFactorInner = first(trans(tokens => [[{
  symbol: '#'
}, ['max', tokens[0]]]])(erase(seq('..')), erase(repeat(commentOrSpace)), decimalIntegerValue), trans(tokens => [[{
  symbol: '#'
}, ['min', tokens[0]], ['max', tokens[1]]]])(decimalIntegerValue, erase(repeat(commentOrSpace)), erase(seq('..')), erase(repeat(commentOrSpace)), decimalIntegerValue), trans(tokens => [[{
  symbol: '#'
}, ['min', tokens[0]]]])(decimalIntegerValue, erase(repeat(commentOrSpace)), erase(seq('..'))), trans(tokens => [[{
  symbol: '#'
}, ['min', tokens[0]], ['max', tokens[0]]]])(decimalIntegerValue));
const arraySizeFactor = trans(tokens => tokens.length > 0 ? tokens : [[{
  symbol: '#'
}]])(erase(seq('[')), erase(repeat(commentOrSpace)), qty(0, 1)(arraySizeFactorInner), erase(repeat(commentOrSpace)), erase(seq(']')));
const complexArrayType = trans(tokens => [[{
  symbol: 'repeated'
}, tokens[0], tokens[1]]])(erase(seq('Array')), erase(repeat(commentOrSpace)), erase(seq('<')), erase(repeat(commentOrSpace)), first(input => complexType(first(seq(','), seq('>')))(input), err('type is expected in Array type.')), // [0]
erase(repeat(commentOrSpace)), qty(0, 1)(combine(erase(seq(',')), erase(repeat(commentOrSpace)), first(arraySizeFactorInner, // [1]
err('complexArrayType: Unexpected token has appeared. Expect array size.')), erase(repeat(commentOrSpace)))), first(ahead(seq('>')), err('\'>\' is expected in Array type.')), erase(seq('>')));
const partialType = trans(tokens => [[{
  symbol: 'partial'
}, tokens[0], tokens[1]]])(erase(seq('Partial')), erase(repeat(commentOrSpace)), erase(seq('<')), erase(repeat(commentOrSpace)), first(input => complexType(first(seq(','), seq('>')))(input), err('type is expected in Partial type.')), // [0]
erase(repeat(commentOrSpace)), first(ahead(seq('>')), err('\'>\' is expected in Partial type.')), erase(seq('>')));
const pickOrOmitType = trans(tokens => [[{
  symbol: tokens[0] === 'Pick' ? 'picked' : 'omit'
}, tokens[1], ...tokens.slice(2)]])(first(seq('Pick'), seq('Omit')), // [0]
erase(repeat(commentOrSpace)), erase(seq('<')), erase(repeat(commentOrSpace)), first(input => complexType(first(seq(','), seq('>')))(input), err('type is expected in Partial type.')), // [1]
erase(repeat(commentOrSpace)), combine(erase(seq(',')), erase(repeat(commentOrSpace)), stringValue, // [2]
qty(0)(combine(erase(repeat(commentOrSpace)), erase(seq('|')), erase(repeat(commentOrSpace)), stringValue)), // [3],...
erase(repeat(commentOrSpace))), first(ahead(seq('>')), err('\'>\' is expected in Pick|Omit type.')), erase(seq('>')));
const genericOrSimpleType = trans(tokens => [tokens[0]])( // remove generics parameters
simpleOrDottedTypeName, // [0]
erase(repeat(commentOrSpace)), qty(0, 1)(combine(erase(seq('<')), combine( // [1]
erase(repeat(commentOrSpace)), first(input => complexType(first(seq(','), seq('>')))(input), err('type is expected in generic type.')), erase(repeat(commentOrSpace))), repeat(combine( // [2]...
erase(seq(','), repeat(commentOrSpace)), first(input => complexType(first(seq(','), seq('>')))(input), err('type is expected in generic type.')), erase(repeat(commentOrSpace)))), qty(0, 1)(erase(seq(','), repeat(commentOrSpace))), first(ahead(seq('>')), err('genericType: Unexpected token has appeared.')), erase(seq('>')))));
const spreadType = trans(tokens => [[{
  symbol: 'spread'
}, tokens[0], tokens[1]]])(erase(seq('...')), erase(repeat(commentOrSpace)), erase(seq('<')), erase(repeat(commentOrSpace)), input => complexType(first(seq(','), seq('>')))(input), erase(repeat(commentOrSpace)), qty(0, 1)(combine(erase(seq(',')), erase(repeat(commentOrSpace)), first(arraySizeFactorInner, err('spreadType: Unexpected token has appeared. Expect array size.')), erase(repeat(commentOrSpace)))), first(ahead(seq('>')), err('spreadType: Unexpected token has appeared.')), erase(seq('>')));
const decorator = trans(tokens => [tokens])(decoratorSymbolName, qty(0, 1)(first(combine(erase(seq('('), repeat(commentOrSpace), seq(')'))), combine(erase(seq('(')), first(combine(combine(erase(repeat(commentOrSpace)), first(regexpStringValue, constExpr), erase(repeat(commentOrSpace))), repeat(combine(erase(repeat(commentOrSpace)), erase(seq(',')), erase(repeat(commentOrSpace)), first(regexpStringValue, constExpr), erase(repeat(commentOrSpace)))), qty(0, 1)(erase(seq(','), repeat(commentOrSpace))), first(ahead(seq(')')), err('decorator: Unexpected token has appeared. Expect ")".'))), err('decorator: Unexpected token has appeared.')), erase(seq(')'))))));
const decoratorsClause = trans(tokens => tokens)(repeat(combine(decorator, erase(repeat(commentOrSpace)))));

const complexTypeInnerWOSinpleArrayType = edge => first(primitiveValueNoNullUndefined, genericOrSimpleType, partialType, pickOrOmitType, complexArrayType, sequenceType, input => interfaceDefInner(first(seq(';'), seq(',')))(input));

const complexTypeInnerRoot = edge => trans(tokens => {
  let ty = [{
    symbol: '$pipe'
  }, tokens[1], ...tokens[0]];

  if (tokens[2] !== null) {
    for (const z of tokens[2]) {
      ty = [{
        symbol: 'repeated'
      }, ty, z];
    }
  }

  return [[ty, ...(tokens[3] ? [tokens[3]] : []), ...tokens.slice(4)]];
})(trans(tokens => [tokens])(qty(0, 1)(decoratorsClause)), // [0]
first( // [1]
// [1]
input => complexTypeInnerWOSinpleArrayType(edge)(input), combine(erase(seq('(')), erase(repeat(commentOrSpace)), input => complexType(edge)(input), erase(repeat(commentOrSpace)), erase(seq(')')))), combine(trans(tokens => tokens[0] !== null ? [tokens] : [null])( // [2]
first(qty(1)(combine(erase(repeat(commentOrSpace)), arraySizeFactor)), zeroWidth(() => null))), combine(first( // [3]...
trans(tokens => [tokens[0], ...tokens[1]])(qty(1)(combine(erase(repeat(commentOrSpace)), trans(tokens => [{
  op: tokens[0]
}])(or(seq('&'), seq('|'), seq('-'))), erase(repeat(commentOrSpace)), input => complexTypeInnerRoot(edge)(input)))), trans(tokens => [])()))));

const binaryOp = (op, op1, op2) => {
  return [{
    symbol: op
  }, op1, op2];
};

const isOperator = (v, op) => {
  if (typeof v === 'object' && v.op === op) {
    return true;
  }

  return false;
};

const isValue = v => {
  // TODO: check type
  return true;
}; // production rules:
//   S -> S "&" S


const complexTypeExprRule3 = $o.trans(tokens => [binaryOp('intersect', tokens[0], tokens[2])])($o.clsFn(t => isValue(t)), $o.clsFn(t => isOperator(t, '&')), $o.clsFn(t => isValue(t))); // production rules:
//   S -> S "|" S

const complexTypeExprRule2 = $o.trans(tokens => [binaryOp('oneOf', tokens[0], tokens[2])])($o.clsFn(t => isValue(t)), $o.clsFn(t => isOperator(t, '|')), $o.clsFn(t => isValue(t))); // production rules:
//   S -> S "-" S

const complexTypeExprRule1 = $o.trans(tokens => [binaryOp('subtract', tokens[0], tokens[2])])($o.clsFn(t => isValue(t)), $o.clsFn(t => isOperator(t, '-')), $o.clsFn(t => isValue(t)));

const complexType = edge => rules({
  rules: [complexTypeExprRule3, complexTypeExprRule2, complexTypeExprRule1],
  check: $o.combine($o.classes.any, $o.end())
})(trans(tokens => tokens[0])(complexTypeInnerRoot(edge)));

const spreadOrComplexType = edge => first(spreadType, complexType(edge));

const setDocComment = input => {
  const ret = zeroWidth(() => [])(input);

  if (ret.succeeded) {
    const text = ret.next.context.docComment;
    ret.next.context = Object.assign({}, ret.next.context);
    delete ret.next.context.docComment;
    ret.tokens.length = 0;
    ret.tokens.push(text ? text : null);
  }

  return ret;
};

const typeDef = trans(tokens => [[{
  symbol: 'def'
}, tokens[1], [{
  symbol: 'docComment'
}, tokens[2], tokens[0]]]])(erase(seq('type')), setDocComment, // [0]
erase(qty(1)(commentOrSpace)), first(symbolName, // [1]
err('typeDef: Unexpected token has appeared. Expect symbol name.')), erase(repeat(commentOrSpace)), first(ahead(seq('=')), err('typeDef: Unexpected token has appeared. Expect "=".')), erase(seq('=')), first(combine(erase(repeat(commentOrSpace)), input => complexType(first(seq(','), seq(';')))(input), // [2]
erase(repeat(commentOrSpace))), err('typeDef: Unexpected token has appeared.')), first(ahead(seq(';')), err('typeDef: Unexpected token has appeared. Expect ";".')), erase(seq(';')));
const interfaceExtendsClause = trans(tokens => [[{
  symbol: '$list'
}, ...tokens.map(x => [{
  symbol: 'ref'
}, x])]])(erase(first(seq('extends'), combine(symbolName, err('interfaceExtendsClause: Unexpected token has appeared. Expect "extends" keyword.')))), erase(qty(1)(commentOrSpace)), first(symbolName, err('interfaceExtendsClause: Unexpected token has appeared. Expect symbol name.')), repeat(combine(erase(repeat(commentOrSpace)), erase(seq(',')), erase(repeat(commentOrSpace)), first(symbolName, err('interfaceExtendsClause: Unexpected token has appeared. Expect symbol name.')))));
const interfaceKey = first(trans(tokens => [[{
  symbol: '$list'
}, ...tokens]])(erase(seq('[')), erase(repeat(commentOrSpace), objKey, repeat(commentOrSpace), first(seq(':'), err('":" is needed.')), repeat(commentOrSpace)), repeat(combine(first(regexpStringValue, additionalPropPrimitiveTypeName), erase(repeat(commentOrSpace), seq('|'), repeat(commentOrSpace)))), first(regexpStringValue, additionalPropPrimitiveTypeName), erase(repeat(commentOrSpace)), first(ahead(seq(']')), err('interfaceKey: Unexpected token has appeared. Expect "]".')), erase(seq(']'))), objKey);

const interfaceKeyTypePair = separator => trans(tokens => [[{
  symbol: '$list'
}, tokens[2], [{
  symbol: '$pipe'
}, tokens[3] === '?' ? [{
  symbol: 'optional'
}, tokens[4]] : tokens[4], ...tokens[0]], tokens[1]]])(trans(tokens => [tokens])(first(decoratorsClause, zeroWidth(() => []))), // [0] decorators
setDocComment, // [1]
interfaceKey, // [2] key
first( // [3] '?' | ''
combine(erase(repeat(commentOrSpace)), seq('?'), erase(repeat(commentOrSpace))), zeroWidth(() => [''])), erase(repeat(commentOrSpace), first(seq(':'), err('":" is needed.')), repeat(commentOrSpace)), first( // [4] type
// [4] type
input => complexType(first(separator, seq('}')))(input), err('interface member type is needed.')));

const interfaceDefInner = separator => trans(tokens => [[{
  symbol: 'objectType'
}, ...tokens]])(first(combine(erase(seq('{'), repeat(commentOrSpace), seq('}'))), combine(erase(seq('{')), combine(erase(repeat(commentOrSpace)), interfaceKeyTypePair(separator), erase(repeat(commentOrSpace))), repeat(combine(erase(separator, repeat(commentOrSpace)), interfaceKeyTypePair(separator), erase(repeat(commentOrSpace)))), qty(0, 1)(erase(separator, repeat(commentOrSpace))), first(ahead(seq('}')), err('interfaceDefInner: Unexpected token has appeared. Expect "}".')), erase(seq('}')))));

const interfaceDef = trans(tokens => [[{
  symbol: 'def'
}, tokens[1], [{
  symbol: 'docComment'
}, [{
  symbol: 'derived'
}, tokens[3], [{
  symbol: '$spread'
}, tokens[2]]], tokens[0]]]])(erase(seq('interface')), setDocComment, // [0] base types
erase(qty(1)(commentOrSpace)), first(symbolName, // [1] symbol
err('interfaceDef: Unexpected token has appeared. Expect symbol name.')), erase(repeat(commentOrSpace)), first(interfaceExtendsClause, // [2]
zeroWidth(() => [])), erase(repeat(commentOrSpace)), first(input => interfaceDefInner(first(seq(';'), seq(',')))(input), // [3]
err('interfaceDef: Unexpected token has appeared.')));
const enumKeyValue = trans(tokens => [[{
  symbol: '$list'
}, tokens[1], tokens[2], tokens[0]]])(setDocComment, // [0]
symbolName, erase(repeat(commentOrSpace)), first(combine(erase(seq('=')), first(combine(erase(repeat(commentOrSpace)), first(decimalIntegerValue, stringValue), erase(repeat(commentOrSpace))), err('enumKeyValue: Unexpected token has appeared.'))), zeroWidth(() => null)));
const enumDef = trans(tokens => [[{
  symbol: 'def'
}, tokens[1], [{
  symbol: 'docComment'
}, [{
  symbol: 'enumType'
}, ...tokens.slice(2)], tokens[0]]]])(erase(seq('enum')), setDocComment, // [0]
erase(qty(1)(commentOrSpace)), first(symbolName, err('enumDef: Unexpected token has appeared. Expect symbol name.')), erase(repeat(commentOrSpace)), first(combine(erase(seq('{'), repeat(commentOrSpace), seq('}'))), combine(erase(seq('{')), combine(erase(repeat(commentOrSpace)), enumKeyValue, erase(repeat(commentOrSpace))), repeat(combine(erase(seq(','), repeat(commentOrSpace)), enumKeyValue, erase(repeat(commentOrSpace)))), qty(0, 1)(erase(seq(','), repeat(commentOrSpace))), first(ahead(seq('}')), err('enumDef: Unexpected token has appeared. Expect "}".')), erase(seq('}'))), err('enumDef: Unexpected token has appeared.')));
const internalDef = first(typeDef, interfaceDef, enumDef);
const constDef = trans(tokens => [[{
  symbol: 'asConst'
}, tokens[0]]])(erase(seq('const'), qty(1)(commentOrSpace)), first(enumDef, err('constDef: Unexpected token has appeared.')));
const constDefNoErr = trans(tokens => [[{
  symbol: 'asConst'
}, tokens[0]]])(erase(seq('const'), qty(1)(commentOrSpace)), first(enumDef));
const exportedDef = trans(tokens => [[{
  symbol: 'export'
}, tokens[0]]])(erase(seq('export'), qty(1)(commentOrSpace)), first(constDef, internalDef, input => declareTypeAndEnumStatement(input), input => declareVarStatement(input), err('exportedDef: Unexpected token has appeared.')));
const defStatement = trans(tokens => [[{
  symbol: '$local'
}, [[{
  symbol: '_ty'
}, tokens[1]]], [{
  symbol: 'redef'
}, {
  symbol: '_ty'
}, [{
  symbol: '$pipe'
}, {
  symbol: '_ty'
}, ...tokens[0]]]]])(trans(tokens => [tokens])(first(decoratorsClause, zeroWidth(() => []))), // [0] decorators
first(exportedDef, // [1] body
// [1] body
input => declareTypeAndEnumStatement(input), constDef, internalDef));
const externalSymbolAndType = trans(tokens => [[{
  symbol: '$list'
}, ...tokens]])(symbolName, erase(repeat(commentOrSpace)), qty(0, 1)(combine(erase(seq(':')), erase(repeat(commentOrSpace)), input => complexType(first(seq(';'), seq(',')))(input))));
const externalTypeDef = trans(tokens => [[{
  symbol: 'external'
}, ...tokens]])(erase(seq('external')), erase(qty(1)(commentOrSpace)), externalSymbolAndType, repeat(combine(erase(repeat(commentOrSpace)), erase(cls(',')), erase(repeat(commentOrSpace)), first(externalSymbolAndType, err('externalTypeDef: Unexpected token has appeared. Expect symbol name.')), erase(repeat(commentOrSpace)))), erase(repeat(commentOrSpace)), first(ahead(cls(';')), err('externalTypeDef: Unexpected token has appeared. Expect ";".')), erase(cls(';')));
const declareTypeAndEnumStatement = trans(tokens => [[{
  symbol: 'asDeclare'
}, ...tokens]])(erase(seq('declare')), erase(qty(1)(commentOrSpace)), first(constDefNoErr, // NOTE: There is still the possibility of "const varName". -> `declareVarStatement` will be called.
internalDef));
const declareVarStatement = trans(tokens => [[{
  symbol: 'passthru'
}, tokens[0], tokens[1]]])(cat(seq('declare'), qty(1)(commentOrSpace), first(seq('var'), seq('let'), seq('const'), err('declareVarStatement: Unexpected token has appeared. Expect "var|let|const".')), qty(1)(commentOrSpace), cat(repeat(notCls(';'))), first(ahead(seq(';')), err('declareVarStatement: Unexpected token has appeared. Expect ";".')), cls(';')), setDocComment); // [1]

const importStatement = trans(tokens => [[{
  symbol: 'passthru'
}, tokens[0]]])(cat(seq('import'), qty(1)(commentOrSpace), cat(repeat(notCls(';'))), first(ahead(seq(';')), err('importStatement: Unexpected token has appeared. Expect ";".')), cls(';')));
const definition = first(directiveLineComment, directiveBlockComment, defStatement, externalTypeDef, declareVarStatement, importStatement);
const program = makeProgram(combine(erase(repeat(commentOrSpace)), repeat(combine(definition, erase(repeat(commentOrSpace)))), erase(repeat(commentOrSpace)), first(ahead(end()), err('program: Unexpected token has appeared.')), end()));

/***/ }),

/***/ "./src/lib/errors.ts":
/*!***************************!*\
  !*** ./src/lib/errors.ts ***!
  \***************************/
/*! exports provided: ValidationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationError", function() { return ValidationError; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
class ValidationError extends Error {
  constructor(message, ty, ctx) {
    super(message);
    this.ty = ty;
    this.ctx = ctx;
  }

}

/***/ }),

/***/ "./src/lib/escape.ts":
/*!***************************!*\
  !*** ./src/lib/escape.ts ***!
  \***************************/
/*! exports provided: escapeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeString", function() { return escapeString; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
function escapeString(s) {
  return s.replace(/\x08/g, '\\b').replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\\/g, '\\\\').replace(/\'/g, '\\\'').replace(/\"/g, '\\\"').replace(/\`/g, '\\\`');
}

/***/ }),

/***/ "./src/lib/reporter.ts":
/*!*****************************!*\
  !*** ./src/lib/reporter.ts ***!
  \*****************************/
/*! exports provided: errorTypeNames, defaultMessages, formatErrorMessage, reportError, reportErrorWithPush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorTypeNames", function() { return errorTypeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMessages", function() { return defaultMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatErrorMessage", function() { return formatErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return reportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportErrorWithPush", function() { return reportErrorWithPush; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types.ts");
/* harmony import */ var _escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape */ "./src/lib/escape.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/lib/util.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



const errorTypeNames = ['', 'InvalidDefinition', 'Required', 'TypeUnmatched', 'AdditionalPropUnmatched', 'RepeatQtyUnmatched', 'SequenceUnmatched', 'ValueRangeUnmatched', 'ValuePatternUnmatched', 'ValueLengthUnmatched', 'ValueUnmatched'];
const defaultMessages = {
  invalidDefinition: '"%{name}" of "%{parentType}" type definition is invalid.',
  required: '"%{name}" of "%{parentType}" is required.',
  typeUnmatched: '"%{name}" of "%{parentType}" should be type "%{expectedType}".',
  additionalPropUnmatched: '"%{addtionalProps}" of "%{parentType}" are not matched to additional property patterns.',
  repeatQtyUnmatched: '"%{name}" of "%{parentType}" should repeat %{repeatQty} times.',
  sequenceUnmatched: '"%{name}" of "%{parentType}" sequence is not matched',
  valueRangeUnmatched: '"%{name}" of "%{parentType}" value should be in the range %{minValue} to %{maxValue}.',
  valuePatternUnmatched: '"%{name}" of "%{parentType}" value should be matched to pattern "%{pattern}"',
  valueLengthUnmatched: '"%{name}" of "%{parentType}" length should be in the range %{minLength} to %{maxLength}.',
  valueUnmatched: '"%{name}" of "%{parentType}" value should be "%{expectedValue}".'
};

function getErrorMessage(errType, ...messages) {
  for (const m of messages) {
    switch (errType) {
      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition:
        if (m.invalidDefinition) {
          return m.invalidDefinition;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].Required:
        if (m.required) {
          return m.required;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched:
        if (m.typeUnmatched) {
          return m.typeUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched:
        if (m.additionalPropUnmatched) {
          return m.additionalPropUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched:
        if (m.repeatQtyUnmatched) {
          return m.repeatQtyUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].SequenceUnmatched:
        if (m.sequenceUnmatched) {
          return m.sequenceUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched:
        if (m.valueRangeUnmatched) {
          return m.valueRangeUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValuePatternUnmatched:
        if (m.valuePatternUnmatched) {
          return m.valuePatternUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueLengthUnmatched:
        if (m.valueLengthUnmatched) {
          return m.valueLengthUnmatched;
        }

        break;

      case _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched:
        if (m.valueUnmatched) {
          return m.valueUnmatched;
        }

        break;
    }
  }

  return '';
}

function findTopRepeatableAssertion(ctx) {
  const ret = ctx.typeStack.slice().reverse().map(x => Array.isArray(x) ? x[0] : x).find(x => x.kind === 'repeated' || x.kind === 'spread' || x.kind === 'optional') || null;
  return ret;
}

function getExpectedType(ty) {
  switch (ty.kind) {
    case 'repeated':
      return `(repeated ${getExpectedType(ty.repeated)})`;

    case 'spread':
      return getExpectedType(ty.spread);

    case 'sequence':
      return '(sequence)';

    case 'primitive':
      return ty.primitiveName;

    case 'primitive-value':
      return `(value ${typeof ty.value === 'string' ? `'${String(ty.value)}'` : String(ty.value)})`;

    case 'optional':
      return getExpectedType(ty.optional);

    case 'one-of':
      return `(one of ${ty.oneOf.map(x => getExpectedType(x)).join(', ')})`;

    case 'never':
    case 'any':
    case 'unknown':
      return ty.kind;

    case 'symlink':
      return ty.symlinkTargetName;

    default:
      return ty.typeName ? ty.typeName : '?';
  }
}

function formatErrorMessage(msg, data, ty, args, values) {
  let ret = msg; // TODO: complex type object members' custom error messages are not displayed?
  // TODO: escapeString() is needed?

  const tr = values.topRepeatable;
  const dict = new Map([['expectedType', ty.stereotype ? ty.stereotype : Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(getExpectedType(ty))], ['type', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(typeof data)], ['expectedValue', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive-value' ? String(ty.value) : ty.kind === 'enum' ? ty.typeName ? `enum member of ${ty.typeName}` : '?' : '?')], ['value', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(String(data))], ['repeatQty', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(tr ? tr.kind !== 'optional' ? `${Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(tr.min, '')}${tr.min !== null && tr.min !== void 0 || tr.max !== null && tr.max !== void 0 ? '..' : ''}${Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(tr.max, '')}` : '0..1' : '?')], ['minValue', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(ty.minValue, Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(ty.greaterThanValue, '(smallest)'))}` : '?')], ['maxValue', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(ty.maxValue, Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(ty.lessThanValue, '(biggest)'))}` : '?')], ['pattern', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${ty.pattern ? `/${ty.pattern.source}/${ty.pattern.flags}` : '(pattern)'}` : '?')], ['minLength', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(ty.minLength, '0')}` : '?')], ['maxLength', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(ty.kind === 'primitive' ? `${Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(ty.maxLength, '(biggest)')}` : '?')], ['name', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(`${ty.kind !== 'repeated' && values.dataPath.endsWith('repeated)') ? 'repeated item of ' : ty.kind !== 'sequence' && values.dataPath.endsWith('sequence)') ? 'sequence item of ' : ''}${values.entryName || '?'}`)], ['parentType', Object(_escape__WEBPACK_IMPORTED_MODULE_1__["escapeString"])(values.parentType || '?')], ['dataPath', values.dataPath], ...(args.substitutions || [])]);

  for (const ent of dict.entries()) {
    ret = ret.replace(new RegExp(`%{${ent[0]}}`), ent[1]);
  }

  return ret;
}
function reportError(errType, data, ty, args) {
  const messages = [];

  if (ty.messages) {
    messages.push(ty.messages);
  }

  if (args.ctx.errorMessages) {
    messages.push(args.ctx.errorMessages);
  }

  messages.push(defaultMessages);
  const dataPathEntryArray = [];

  for (let i = 0; i < args.ctx.typeStack.length; i++) {
    const p = args.ctx.typeStack[i];
    const next = args.ctx.typeStack[i + 1];
    const pt = Array.isArray(p) ? p[0] : p;
    const pi = Array.isArray(next) ? next[1] : void 0;
    let isSet = false;

    if (pt.kind === 'repeated') {
      if (i !== args.ctx.typeStack.length - 1) {
        if (pt.name) {
          dataPathEntryArray.push({
            kind: 'key',
            name: pt.name
          });
        }

        dataPathEntryArray.push({
          kind: 'index',
          name: `(${pi !== void 0 ? `${pi}:` : ''}repeated)`
        });
        isSet = true;
      }
    } else if (pt.kind === 'sequence') {
      if (i !== args.ctx.typeStack.length - 1) {
        if (pt.name) {
          dataPathEntryArray.push({
            kind: 'key',
            name: pt.name
          });
        }

        dataPathEntryArray.push({
          kind: 'index',
          name: `(${pi !== void 0 ? `${pi}:` : ''}sequence)`
        });
        isSet = true;
      }
    }

    if (!isSet) {
      if (pt.name) {
        if (i === 0) {
          if (pt.typeName) {
            dataPathEntryArray.push({
              kind: 'type',
              name: pt.typeName
            });
          } else {
            dataPathEntryArray.push({
              kind: 'key',
              name: pt.name
            });
          }
        } else {
          const len = dataPathEntryArray.length;

          if (len && dataPathEntryArray[len - 1].kind === 'type') {
            if (pt.kind === 'object' && next && pt.typeName) {
              dataPathEntryArray.push({
                kind: 'type',
                name: pt.typeName
              });
            } else {
              dataPathEntryArray.push({
                kind: 'key',
                name: pt.name
              }); // NOTE: type inference failed
            }
          } else {
            if (pt.typeName) {
              dataPathEntryArray.push({
                kind: 'type',
                name: pt.typeName
              });
            } else {
              dataPathEntryArray.push({
                kind: 'key',
                name: pt.name
              });
            }
          }
        }
      } else if (pt.typeName) {
        dataPathEntryArray.push({
          kind: 'type',
          name: pt.typeName
        });
      }
    }
  }

  let dataPath = '';

  for (let i = 0; i < dataPathEntryArray.length; i++) {
    const p = dataPathEntryArray[i];
    dataPath += p.name;

    if (i + 1 === dataPathEntryArray.length) {
      break;
    }

    dataPath += p.kind === 'type' ? ':' : '.';
  }

  let parentType = '';
  let entryName = '';

  for (let i = dataPathEntryArray.length - 1; 0 <= i; i--) {
    const p = dataPathEntryArray[i];

    if (p.kind === 'type') {
      if (i !== 0 && i === dataPathEntryArray.length - 1) {
        const q = dataPathEntryArray[i - 1];

        if (q.kind === 'index') {
          continue; // e.g.: "File:acl.(0:repeated).ACL"
        }
      } // else: "File:acl.(0:repeated).ACL:target"


      parentType = p.name;

      for (let j = i + 1; j < dataPathEntryArray.length; j++) {
        const q = dataPathEntryArray[j];

        if (q.kind === 'key') {
          entryName = q.name;
          break;
        }
      }

      break;
    }
  }

  if (!parentType) {
    for (let i = args.ctx.typeStack.length - 1; 0 <= i; i--) {
      const p = args.ctx.typeStack[i];
      const pt = Array.isArray(p) ? p[0] : p;

      if (pt.typeName) {
        parentType = pt.typeName;
      }
    }
  }

  const topRepeatable = findTopRepeatableAssertion(args.ctx);
  const values = {
    dataPath,
    topRepeatable,
    parentType,
    entryName
  };
  const constraints = {};
  const cSrces = [ty];

  if (errType === _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched && topRepeatable) {
    cSrces.unshift(topRepeatable);
  }

  for (const cSrc of cSrces) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.minValue, false)) {
      constraints.minValue = cSrc.minValue;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.maxValue, false)) {
      constraints.maxValue = cSrc.maxValue;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.greaterThanValue, false)) {
      constraints.greaterThanValue = cSrc.greaterThanValue;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.lessThanValue, false)) {
      constraints.lessThanValue = cSrc.lessThanValue;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.minLength, false)) {
      constraints.minLength = cSrc.minLength;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.maxLength, false)) {
      constraints.maxLength = cSrc.maxLength;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.pattern, false)) {
      const pat = cSrc.pattern;
      constraints.pattern = `/${pat.source}/${pat.flags}`;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.min, false)) {
      constraints.min = cSrc.min;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["nvl"])(cSrc.max, false)) {
      constraints.max = cSrc.max;
    }
  }

  const val = {};

  switch (typeof data) {
    case 'number':
    case 'bigint':
    case 'string':
    case 'boolean':
    case 'undefined':
      val.value = data;
      break;

    case 'object':
      if (data === null) {
        val.value = data;
      }

  }

  if (ty.messageId) {
    args.ctx.errors.push(Object.assign({
      code: `${ty.messageId}-${errorTypeNames[errType]}`,
      message: formatErrorMessage(ty.message ? ty.message : getErrorMessage(errType, ...messages), data, ty, args, values),
      dataPath,
      constraints
    }, val));
  } else if (ty.message) {
    args.ctx.errors.push(Object.assign({
      code: `${errorTypeNames[errType]}`,
      message: formatErrorMessage(ty.message, data, ty, args, values),
      dataPath,
      constraints
    }, val));
  } else {
    args.ctx.errors.push(Object.assign({
      code: `${errorTypeNames[errType]}`,
      message: formatErrorMessage(getErrorMessage(errType, ...messages), data, ty, args, values),
      dataPath,
      constraints
    }, val));
  }
}
function reportErrorWithPush(errType, data, tyidx, args) {
  try {
    args.ctx.typeStack.push(tyidx);
    reportError(errType, data, tyidx[0], args);
  } finally {
    args.ctx.typeStack.pop();
  }
}

/***/ }),

/***/ "./src/lib/resolver.ts":
/*!*****************************!*\
  !*** ./src/lib/resolver.ts ***!
  \*****************************/
/*! exports provided: resolveMemberNames, resolveSymbols, resolveSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMemberNames", function() { return resolveMemberNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSymbols", function() { return resolveSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSchema", function() { return resolveSchema; });
/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators */ "./src/operators.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



function mergeTypeAndSymlink(ty, link) {
  const link2 = Object.assign({}, link);
  delete link2.kind;
  delete link2.symlinkTargetName;
  delete link2.memberTree;
  return Object.assign(Object.assign({}, ty), link2);
}

function updateSchema(original, schema, ty, typeName) {
  if (typeName && schema.has(typeName)) {
    const z = schema.get(typeName);

    if (z.ty === original) {
      schema.set(typeName, Object.assign(Object.assign({}, z), {
        ty,
        resolved: true
      }));
    }
  }

  return ty;
}

function resolveMemberNames(ty, rootSym, memberTreeSymbols, memberPos) {
  const addTypeName = (mt, typeName, memberSym) => {
    if (typeName) {
      return Object.assign(Object.assign({}, mt), {
        typeName: memberPos === 0 ? `${rootSym}.${memberTreeSymbols.join('.')}` : `${typeName}.${memberSym}`
      });
    } else {
      return mt;
    }
  };

  for (let i = memberPos; i < memberTreeSymbols.length; i++) {
    const memberSym = memberTreeSymbols[i];

    switch (ty.kind) {
      case 'optional':
        return resolveMemberNames(ty.optional, rootSym, memberTreeSymbols, i + 1);

      case 'object':
        for (const m of ty.members) {
          if (memberSym === m[0]) {
            return addTypeName(resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1), ty.typeName, memberSym);
          }
        }

        if (ty.additionalProps) {
          for (const m of ty.additionalProps) {
            for (const k of m[0]) {
              switch (k) {
                case 'number':
                  if (_lib_util__WEBPACK_IMPORTED_MODULE_1__["NumberPattern"].test(memberSym)) {
                    return resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1);
                  }

                  break;

                case 'string':
                  return resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1);

                default:
                  if (k.test(memberSym)) {
                    return resolveMemberNames(m[1], rootSym, memberTreeSymbols, i + 1);
                  }

                  break;
              }
            }
          }
        }

        throw new Error(`Undefined member name is appeared: ${memberSym}`);

      case 'symlink':
        if (!ty.typeName) {
          throw new Error(`Reference of anonymous type is appeared: ${memberSym}`);
        }

        return Object.assign({
          kind: 'symlink',
          symlinkTargetName: rootSym,
          name: memberSym,
          typeName: rootSym
        }, 0 < memberTreeSymbols.length ? {
          memberTree: memberTreeSymbols
        } : {});

      default:
        // TODO: kind === 'operator'
        throw new Error(`Unsupported type kind is appeared: (kind:${ty.kind}).${memberSym}`);
    }
  }

  return ty;
}
function resolveSymbols(schema, ty, ctx) {
  var _a;

  const ctx2 = Object.assign(Object.assign({}, ctx), {
    nestLevel: ctx.nestLevel + 1
  });

  switch (ty.kind) {
    case 'symlink':
      {
        const x = schema.get(ty.symlinkTargetName);

        if (!x) {
          throw new Error(`Undefined symbol '${ty.symlinkTargetName}' is referred.`);
        }

        if (0 <= ctx.symlinkStack.findIndex(s => s === ty.symlinkTargetName)) {
          return ty;
        }

        const ty2 = Object.assign({}, ty);
        let xTy = x.ty;

        if (ty.memberTree && 0 < ty.memberTree.length) {
          xTy = Object.assign({}, resolveMemberNames(xTy, ty.symlinkTargetName, ty.memberTree, 0));
          ty2.typeName = xTy.typeName;
        }

        return resolveSymbols(schema, mergeTypeAndSymlink(xTy, ty2), Object.assign(Object.assign({}, ctx2), {
          symlinkStack: [...ctx2.symlinkStack, ty2.symlinkTargetName]
        }));
      }

    case 'repeated':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        repeated: resolveSymbols(schema, ty.repeated, ctx2)
      }), ty.typeName);

    case 'spread':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        spread: resolveSymbols(schema, ty.spread, ctx2)
      }), ty.typeName);

    case 'sequence':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        sequence: ty.sequence.map(x => resolveSymbols(schema, x, ctx2))
      }), ty.typeName);

    case 'one-of':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        oneOf: ty.oneOf.map(x => resolveSymbols(schema, x, ctx2))
      }), ty.typeName);

    case 'optional':
      return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), {
        optional: resolveSymbols(schema, ty.optional, ctx2)
      }), ty.typeName);

    case 'object':
      {
        if (0 < ctx.nestLevel && ty.typeName && 0 <= ctx.symlinkStack.findIndex(s => s === ty.typeName)) {
          if (schema.has(ty.typeName)) {
            const z = schema.get(ty.typeName);

            if (z.resolved) {
              return z.ty;
            }
          }
        }

        const baseSymlinks = (_a = ty.baseTypes) === null || _a === void 0 ? void 0 : _a.filter(x => x.kind === 'symlink');

        if (baseSymlinks && baseSymlinks.length > 0 && !ctx.isDeserialization) {
          const exts = baseSymlinks.map(x => resolveSymbols(schema, x, ctx2)).filter(x => x.kind === 'object'); // TODO: if x.kind !== 'object' items exist -> error?

          const d2 = resolveSymbols(schema, _operators__WEBPACK_IMPORTED_MODULE_0__["derived"](Object.assign(Object.assign({}, ty), ty.baseTypes ? {
            baseTypes: ty.baseTypes.filter(x => x.kind !== 'symlink')
          } : {}), ...exts), ty.typeName ? Object.assign(Object.assign({}, ctx2), {
            symlinkStack: [...ctx2.symlinkStack, ty.typeName]
          }) : ctx2);
          return updateSchema(ty, schema, Object.assign(Object.assign({}, ty), d2), ty.typeName);
        } else {
          return updateSchema(ty, schema, Object.assign(Object.assign(Object.assign({}, Object.assign(Object.assign({}, ty), {
            members: ty.members.map(x => [x[0], resolveSymbols(schema, x[1], ty.typeName ? Object.assign(Object.assign({}, ctx2), {
              symlinkStack: [...ctx2.symlinkStack, ty.typeName]
            }) : ctx2), ...x.slice(2)])
          })), ty.additionalProps && 0 < ty.additionalProps.length ? {
            additionalProps: ty.additionalProps.map(x => [x[0], resolveSymbols(schema, x[1], ty.typeName ? Object.assign(Object.assign({}, ctx2), {
              symlinkStack: [...ctx2.symlinkStack, ty.typeName]
            }) : ctx2), ...x.slice(2)])
          } : {}), ty.baseTypes && 0 < ty.baseTypes.length ? {
            baseTypes: ctx.isDeserialization ? ty.baseTypes.map(x => x.kind === 'symlink' ? resolveSymbols(schema, x, ctx2) : x).filter(x => x.kind === 'object') : ty.baseTypes
          } : {}), ty.typeName);
        }
      }

    case 'operator':
      if (ctx2.operators) {
        const ctx3 = ty.typeName ? Object.assign(Object.assign({}, ctx2), {
          symlinkStack: [...ctx2.symlinkStack, ty.typeName]
        }) : ctx2;
        const operands = ty.operands.map(x => {
          if (typeof x === 'object' && x.kind) {
            return resolveSymbols(schema, x, ctx3);
          }

          return x;
        });

        if (0 < operands.filter(x => x && typeof x === 'object' && (x.kind === 'symlink' || x.kind === 'operator')).length) {
          throw new Error(`Unresolved type operator is found: ${ty.operator}`);
        }

        if (!ctx2.operators[ty.operator]) {
          throw new Error(`Undefined type operator is found: ${ty.operator}`);
        }

        const ty2 = Object.assign({}, ty);
        delete ty2.operator;
        delete ty2.operands;
        return updateSchema(ty, schema, Object.assign(Object.assign({}, ty2), resolveSymbols(schema, ctx2.operators[ty.operator](...operands), ctx3)), ty.typeName);
      } else {
        return ty;
      }

    default:
      return ty;
  }
}
const resolverOps = {
  picked: _operators__WEBPACK_IMPORTED_MODULE_0__["picked"],
  omit: _operators__WEBPACK_IMPORTED_MODULE_0__["omit"],
  partial: _operators__WEBPACK_IMPORTED_MODULE_0__["partial"],
  intersect: _operators__WEBPACK_IMPORTED_MODULE_0__["intersect"],
  subtract: _operators__WEBPACK_IMPORTED_MODULE_0__["subtract"]
};
function resolveSchema(schema, opts) {
  for (const ent of schema.entries()) {
    const ty = resolveSymbols(schema, ent[1].ty, Object.assign(Object.assign({}, opts), {
      nestLevel: 0,
      symlinkStack: [ent[0]],
      operators: resolverOps
    }));
    ent[1].ty = ty;
  }

  return schema;
}

/***/ }),

/***/ "./src/lib/util.ts":
/*!*************************!*\
  !*** ./src/lib/util.ts ***!
  \*************************/
/*! exports provided: SymbolPattern, NumberPattern, DatePattern, DateTimePattern, DateTimeNoTzPattern, dummyTargetObject, isUnsafeVarNames, nvl, nvl2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolPattern", function() { return SymbolPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPattern", function() { return NumberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePattern", function() { return DatePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePattern", function() { return DateTimePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeNoTzPattern", function() { return DateTimeNoTzPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyTargetObject", function() { return dummyTargetObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnsafeVarNames", function() { return isUnsafeVarNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nvl", function() { return nvl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nvl2", function() { return nvl2; });
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
// tslint:disable-next-line:function-constructor
const globalObj = Function('return this')();
const objConstructor = {}.constructor; // NOTE: objConstructor            === Object

const funConstructor = Function; // NOTE: ({}).toString.constructor === Function

const SymbolPattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const NumberPattern = /^([\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?)$/;
const DatePattern = /^(\d{4}-[01]\d-[0-3]\d)$/;
const DateTimePattern = /^((?:(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d))(?:[+-][0-2]\d:[0-5]\d|Z))$/;
const DateTimeNoTzPattern = /^((?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(?:\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d))$/;
const dummyTargetObject = {};
function isUnsafeVarNames(target, varName) {
  if (target === globalObj || varName === '__proto__' || varName === '__defineGetter__' || varName === '__defineSetter__' || varName === '__lookupGetter__' || varName === '__lookupSetter__') {
    return true;
  }

  if (varName === 'prototype' || varName === 'constructor') {
    if (target === null || target === void 0 || typeof target === 'function') {
      return true;
    }
  }

  if (target === null || target === void 0 || target === objConstructor) {
    if (objConstructor.hasOwnProperty(varName)) {
      return true;
    }
  }

  if (target === null || target === void 0 || target === funConstructor) {
    // checking 'call', 'arguments', 'caller', ...
    let con = funConstructor;

    while (con) {
      if (con.hasOwnProperty(varName)) {
        return true;
      }

      con = con.__proto__;
    }
  }

  if (typeof target === 'function') {
    if (!target.hasOwnProperty(varName)) {
      // function's prototypes' members
      return true;
    }
  }

  return false;
}
function nvl(v, alt) {
  return v !== null && v !== void 0 ? v : alt;
}
function nvl2(v, f, alt) {
  return v !== null && v !== void 0 ? f(v) : alt;
}

/***/ }),

/***/ "./src/operators.ts":
/*!**************************!*\
  !*** ./src/operators.ts ***!
  \**************************/
/*! exports provided: picked, omit, partial, intersect, oneOf, subtract, primitive, regexpPatternStringType, primitiveValue, optional, repeated, sequenceOf, spread, enumType, objectType, derived, symlinkType, withName, withTypeName, withOriginalTypeName, withDocComment, withRange, withMinValue, withMaxValue, withGreaterThan, withLessThan, withMinLength, withMaxLength, withMatch, withStereotype, withConstraint, withForceCast, withRecordType, withMeta, withMsg, withMsgId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picked", function() { return picked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return oneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primitive", function() { return primitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexpPatternStringType", function() { return regexpPatternStringType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primitiveValue", function() { return primitiveValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeated", function() { return repeated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceOf", function() { return sequenceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumType", function() { return enumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectType", function() { return objectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlinkType", function() { return symlinkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return withName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTypeName", function() { return withTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withOriginalTypeName", function() { return withOriginalTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDocComment", function() { return withDocComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRange", function() { return withRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMinValue", function() { return withMinValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMaxValue", function() { return withMaxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGreaterThan", function() { return withGreaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLessThan", function() { return withLessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMinLength", function() { return withMinLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMaxLength", function() { return withMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMatch", function() { return withMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStereotype", function() { return withStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withConstraint", function() { return withConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withForceCast", function() { return withForceCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRecordType", function() { return withRecordType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMeta", function() { return withMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMsg", function() { return withMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMsgId", function() { return withMsgId; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
 // emulate Pick<T> // ex. Pick<Foo, 'a' | 'b'>

function picked(ty, ...names) {
  switch (ty.kind) {
    case 'object':
      {
        const members = [];

        for (const name of names) {
          const member = ty.members.find(x => x[0] === name);

          if (member) {
            if (member[2]) {
              const m2 = [...member];

              if (3 < m2.length) {
                m2[2] = false;
              } else {
                m2.length = 2;
              }

              members.push(m2);
            } else {
              members.push(member);
            }
          }
        }

        return {
          kind: 'object',
          members
        };
      }

    case 'symlink':
    case 'operator':
      {
        return {
          kind: 'operator',
          operator: 'picked',
          operands: [ty, ...names]
        };
      }

    default:
      return {
        kind: 'object',
        members: []
      };
  }
} // emulate Omit<T> // ex. Omit<Foo, 'a' | 'b'>

function omit(ty, ...names) {
  switch (ty.kind) {
    case 'object':
      {
        const members = [];

        for (const member of ty.members) {
          if (!names.find(name => member[0] === name)) {
            if (member[2]) {
              const m2 = [...member];

              if (3 < m2.length) {
                m2[2] = false;
              } else {
                m2.length = 2;
              }

              members.push(m2);
            } else {
              members.push(member);
            }
          }
        }

        return {
          kind: 'object',
          members
        };
      }

    case 'symlink':
    case 'operator':
      {
        return {
          kind: 'operator',
          operator: 'omit',
          operands: [ty, ...names]
        };
      }

    default:
      return {
        kind: 'object',
        members: []
      };
  }
} // emulate Partial<T>

function partial(ty) {
  switch (ty.kind) {
    case 'object':
      {
        const members = [];

        for (const member of ty.members) {
          let m = member[1].kind === 'optional' ? member : [member[0], optional(member[1]), ...member.slice(2)];

          if (m[2]) {
            m = [...m];

            if (3 < m.length) {
              m[2] = false;
            } else {
              m.length = 2;
            }
          }

          m[1].name = m[0];
          const optTy = Object.assign({}, m[1].optional);
          m[1].optional = optTy;

          if (optTy.name && optTy.name !== optTy.typeName) {
            delete optTy.name;
          }

          if (!optTy.name && optTy.typeName) {
            optTy.name = optTy.typeName;
          }

          members.push(m);
        }

        return {
          kind: 'object',
          members
        };
      }

    case 'symlink':
    case 'operator':
      {
        return {
          kind: 'operator',
          operator: 'partial',
          operands: [ty]
        };
      }

    default:
      return ty;
  }
} // intersection (a & b)

function intersect(...types) {
  if (types.length === 0) {
    throw new Error(`Empty intersection type is not allowed.`);
  }

  if (0 < types.filter(x => x && typeof x === 'object' && (x.kind === 'symlink' || x.kind === 'operator')).length) {
    return {
      kind: 'operator',
      operator: 'intersect',
      operands: types.slice()
    };
  }

  let lastTy = null;
  const members = new Map();

  for (const ty of types) {
    if (ty && typeof ty === 'object') {
      if (lastTy && lastTy.kind !== ty.kind) {
        return {
          kind: 'never'
        };
      }

      lastTy = ty;

      if (ty.kind === 'object') {
        for (const m of ty.members) {
          if (m[2]) {
            const m2 = [...m];

            if (3 < m2.length) {
              m2[2] = false;
            } else {
              m2.length = 2;
            }

            members.set(m[0], m2); // Overwrite if exists
          } else {
            members.set(m[0], m); // Overwrite if exists
          }
        }
      }
    } else {
      return {
        kind: 'never'
      };
    }
  }

  if (lastTy && lastTy.kind !== 'object') {
    return lastTy;
  } else {
    return {
      kind: 'object',
      members: Array.from(members.values())
    };
  }
} // union (a | b)

function oneOf(...types) {
  if (types.length === 0) {
    throw new Error(`Empty union type is not allowed.`);
  }

  if (types.length === 1) {
    const ty = types[0];

    if (ty && typeof ty === 'object') {
      return ty;
    } else {
      return primitiveValue(ty);
    }
  }

  const ret = {
    kind: 'one-of',
    oneOf: []
  };

  for (const ty of types) {
    // TODO: remove same type
    if (ty && typeof ty === 'object') {
      if (ty.kind === 'one-of') {
        ret.oneOf = ret.oneOf.concat(ty.oneOf);
      } else {
        ret.oneOf.push(ty);
      }
    } else {
      ret.oneOf.push(primitiveValue(ty));
    }
  }

  return ret;
} // subtraction (a - b)

function subtract(...types) {
  if (types.length === 0) {
    throw new Error(`Empty subtraction type is not allowed.`);
  }

  if (0 < types.filter(x => x && typeof x === 'object' && (x.kind === 'symlink' || x.kind === 'operator')).length) {
    return {
      kind: 'operator',
      operator: 'subtract',
      operands: types.slice()
    };
  }

  let ret = types[0];

  if (!ret || typeof ret !== 'object' || ret.kind !== 'object') {
    throw new Error(`First parameter of subtraction type should be 'object'.`);
  }

  for (const ty of types.slice(1)) {
    if (ty && typeof ty === 'object' && ty.kind === 'object') {
      ret = omit(ret, ...ty.members.map(m => m[0]));
    }
  }

  return ret;
}
function primitive(typeName) {
  switch (typeName) {
    case 'never':
      return {
        kind: 'never'
      };

    case 'any':
      return {
        kind: 'any'
      };

    case 'unknown':
      return {
        kind: 'unknown'
      };

    case 'number': // FALL_THRU

    case 'integer': // FALL_THRU

    case 'bigint': // FALL_THRU

    case 'string': // FALL_THRU

    case 'boolean': // FALL_THRU

    case 'null': // FALL_THRU

    case 'undefined':
      return {
        kind: 'primitive',
        primitiveName: typeName
      };

    case 'never?':
      return optional({
        kind: 'never'
      });

    case 'any?':
      return optional({
        kind: 'any'
      });

    case 'unknown?':
      return optional({
        kind: 'unknown'
      });

    case 'number?': // FALL_THRU

    case 'integer?': // FALL_THRU

    case 'bigint?': // FALL_THRU

    case 'string?': // FALL_THRU

    case 'boolean?': // FALL_THRU

    case 'null?': // FALL_THRU

    case 'undefined?':
      return optional({
        kind: 'primitive',
        primitiveName: typeName.substring(0, typeName.length - 1)
      });

    default:
      throw new Error(`Unknown primitive type assertion: ${typeName}`);
  } // TODO: Function, DateStr, DateTimeStr, Funtion?, DateStr?, DateTimeStr?

}
function regexpPatternStringType(pattern) {
  return {
    kind: 'primitive',
    primitiveName: 'string',
    pattern
  };
}
function primitiveValue(value) {
  if (value === null || value === void 0) {
    return {
      kind: 'primitive-value',
      value
    };
  } else switch (typeof value) {
    case 'number': // FALL_THRU

    case 'bigint': // FALL_THRU

    case 'string': // FALL_THRU

    case 'boolean':
      return {
        kind: 'primitive-value',
        value
      };

    default:
      throw new Error(`Unknown primitive value assertion: ${value}`);
  }
}
function optional(ty) {
  if (ty && typeof ty === 'object' && ty.kind) {
    if (ty.kind === 'optional') {
      return ty;
    } else {
      return Object.assign({
        kind: 'optional',
        optional: ty
      }, ty.typeName ? {
        typeName: ty.typeName
      } : {});
    }
  } else {
    return {
      kind: 'optional',
      optional: primitiveValue(ty)
    };
  }
}
function repeated(ty, option) {
  if (ty && typeof ty === 'object' && ty.kind) {
    return {
      kind: 'repeated',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      repeated: ty
    };
  } else {
    return {
      kind: 'repeated',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      repeated: primitive(ty)
    };
  }
}
function sequenceOf(...seq) {
  return {
    kind: 'sequence',
    sequence: seq.map(ty => ty && typeof ty === 'object' && ty.kind ? ty : primitiveValue(ty))
  };
}
function spread(ty, option) {
  if (ty && typeof ty === 'object' && ty.kind) {
    return {
      kind: 'spread',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      spread: ty
    };
  } else {
    return {
      kind: 'spread',
      min: option && typeof option.min === 'number' ? option.min : null,
      max: option && typeof option.max === 'number' ? option.max : null,
      spread: primitiveValue(ty)
    };
  }
}
function enumType(...values) {
  const ar = values.slice();
  let value = 0;

  for (let i = 0; i < ar.length; i++) {
    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], ar[i][0])) {
      throw new Error(`Unsafe symbol name is appeared in enum assertion: ${ar[i][0]}`);
    }

    if (ar[i][1] === null || ar[i][1] === void 0) {
      ar[i][1] = value++;
    } else if (typeof ar[i][1] === 'number') {
      value = ar[i][1] + 1;
    }

    if (!ar[i][2]) {
      ar[i].length = 2;
    }
  }

  return {
    kind: 'enum',
    values: ar
  };
}
function objectType(...members) {
  const revMembers = members.slice().reverse();

  for (const x of members) {
    if (typeof x[0] === 'string') {
      if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], x[0])) {
        throw new Error(`Unsafe symbol name is appeared in object assertion: ${x[0]}`);
      }

      if (members.find(m => m[0] === x[0]) !== revMembers.find(m => m[0] === x[0])) {
        throw new Error(`Duplicated member is found: ${x[0]}`);
      }
    }
  }

  const membersProps = members.filter(x => typeof x[0] === 'string').map(x => x[1] && typeof x[1] === 'object' && x[1].kind ? [x[0], withName(x[1], x[0]), x[2]] : [x[0], withName(primitiveValue(x[1]), x[0]), x[2]]).map(x => x[2] ? [x[0], x[1], false, ...x.slice(2)] : [x[0], x[1]]);
  const additionalProps = members.filter(x => typeof x[0] !== 'string').map(x => x[1] && typeof x[1] === 'object' && x[1].kind ? x : [x[0], primitiveValue(x[1]), x[2]]).map(x => x[2] ? [x[0], x[1], false, ...x.slice(2)] : [x[0], x[1]]);
  return Object.assign({
    kind: 'object',
    members: membersProps
  }, 0 < additionalProps.length ? {
    additionalProps
  } : {});
}

function checkRecursiveExtends(ty, base) {
  if (ty === base) {
    return false;
  }

  if (ty.typeName && (ty.typeName === base.typeName || base.kind === 'symlink' && ty.typeName === base.symlinkTargetName)) {
    return false;
  }

  if (base.kind === 'object' && base.baseTypes) {
    for (const z of base.baseTypes) {
      if (!checkRecursiveExtends(ty, z)) {
        return false;
      }
    }
  }

  return true;
}

function derived(ty, ...exts) {
  const ret = {
    kind: 'object',
    members: [],
    baseTypes: []
  };

  for (const ext of exts) {
    switch (ext.kind) {
      case 'object':
        if (!checkRecursiveExtends(ty, ext)) {
          throw new Error(`Recursive extend is found: ${ty.name || '(unnamed)'}`);
        }

        for (const m of ext.members) {
          if (!ret.members.find(x => x[0] === m[0])) {
            ret.members.push([m[0], m[1], true, ...m.slice(3)]);
          } // TODO: Check for different types with the same name.

        }

      // FALL_THRU

      case 'symlink':
        ret.baseTypes.push(ext);
        break;

      case 'operator':
        {
          throw new Error(`Unresolved type operator is found: ${ext.operator}`);
        }
    } // NOTE: 'symlink' base types will resolved by calling `resolveSymbols()`.
    //       `resolveSymbols()` will call `derived()` after resolve symlink exts.

  }

  ret.members = ty.members.concat(ret.members);

  if (ty.baseTypes) {
    ret.baseTypes = ty.baseTypes.filter(x => x.kind !== 'symlink').concat(ret.baseTypes);
  }

  if (ret.baseTypes.length === 0) {
    delete ret.baseTypes;
  }

  const revMembers = ret.members.slice().reverse();

  for (const x of ret.members) {
    if (ret.members.find(m => m[0] === x[0]) !== revMembers.find(m => m[0] === x[0])) {
      throw new Error(`Duplicated member is found: ${x[0]} in ${ty.name || '(unnamed)'}`);
    }
  }

  let additionalProps = [];

  if (ret.baseTypes) {
    for (const base of ret.baseTypes) {
      if (base.kind === 'object') {
        if (base.additionalProps && 0 < base.additionalProps.length) {
          additionalProps = additionalProps.concat(base.additionalProps.map(x => [x[0], x[1], true, ...x.slice(3)]));
        }
      } // NOTE: 'symlink' base types will resolved by calling `resolveSymbols()`.
      //       `resolveSymbols()` will call `derived()` after resolve symlink exts.

    }
  }

  if (ty.additionalProps && 0 < ty.additionalProps.length) {
    additionalProps = additionalProps.concat(ty.additionalProps); // TODO: concat order
  }

  if (0 < additionalProps.length) {
    ret.additionalProps = additionalProps;
  }

  return ret;
}
function symlinkType(name) {
  return {
    kind: 'symlink',
    symlinkTargetName: name
  };
}
function withName(ty, name) {
  if (!name) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    name
  });
}
function withTypeName(ty, typeName) {
  if (!typeName) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    typeName
  });
}
function withOriginalTypeName(ty, originalTypeName) {
  if (!originalTypeName) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    originalTypeName
  });
}
function withDocComment(ty, docComment) {
  if (!docComment) {
    return ty;
  }

  return Object.assign(Object.assign({}, ty), {
    docComment
  });
}
function withRange(minValue, maxValue) {
  return ty => {
    if (typeof minValue !== 'number' && typeof minValue !== 'string') {
      throw new Error(`Decorator '@range' parameter 'minValue' should be number or string.`);
    }

    if (typeof maxValue !== 'number' && typeof maxValue !== 'string') {
      throw new Error(`Decorator '@range' parameter 'maxValue' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@range' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          minValue,
          maxValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@range' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        minValue,
        maxValue
      });
    }
  };
}
function withMinValue(minValue) {
  return ty => {
    if (typeof minValue !== 'number' && typeof minValue !== 'string') {
      throw new Error(`Decorator '@minValue' parameter 'minValue' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@minValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          minValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@minValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        minValue
      });
    }
  };
}
function withMaxValue(maxValue) {
  return ty => {
    if (typeof maxValue !== 'number' && typeof maxValue !== 'string') {
      throw new Error(`Decorator '@maxValue' parameter 'maxValue' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@maxValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          maxValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@maxValue' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        maxValue
      });
    }
  };
}
function withGreaterThan(greaterThanValue) {
  return ty => {
    if (typeof greaterThanValue !== 'number' && typeof greaterThanValue !== 'string') {
      throw new Error(`Decorator '@greaterThan' parameter 'greaterThan' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@greaterThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          greaterThanValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@greaterThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        greaterThanValue
      });
    }
  };
}
function withLessThan(lessThanValue) {
  return ty => {
    if (typeof lessThanValue !== 'number' && typeof lessThanValue !== 'string') {
      throw new Error(`Decorator '@lessThan' parameter 'lessThan' should be number or string.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@lessThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          lessThanValue
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@lessThan' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        lessThanValue
      });
    }
  };
}
function withMinLength(minLength) {
  return ty => {
    if (typeof minLength !== 'number') {
      throw new Error(`Decorator '@minLength' parameter 'minLength' should be number.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@minLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          minLength
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@minLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        minLength
      });
    }
  };
}
function withMaxLength(maxLength) {
  return ty => {
    if (typeof maxLength !== 'number') {
      throw new Error(`Decorator '@maxLength' parameter 'maxLength' should be number.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@maxLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          maxLength
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive') {
        throw new Error(`Decorator '@maxLength' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        maxLength
      });
    }
  };
}
function withMatch(pattern) {
  return ty => {
    if (typeof pattern !== 'object') {
      throw new Error(`Decorator '@match' parameter 'pattern' should be RegExp.`);
    }

    if (ty.kind === 'optional') {
      const opt = ty.optional;

      if (opt.kind !== 'primitive') {
        throw new Error(`Decorator '@match' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          pattern
        })
      });
    } else {
      if (!ty || ty.kind !== 'primitive' || ty.primitiveName !== 'string') {
        throw new Error(`Decorator '@match' cannot be applied to anything other than 'primitive'.`);
      }

      return Object.assign(Object.assign({}, ty), {
        pattern
      });
    }
  };
}
function withStereotype(stereotype) {
  if (typeof stereotype !== 'string') {
    throw new Error(`Decorator '@stereotype' parameter 'stereotype' should be string.`);
  }

  if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], stereotype)) {
    throw new Error(`Unsafe symbol name is appeared in stereotype assertion: ${stereotype}`);
  }

  return ty => {
    if (ty.kind === 'optional') {
      const ret = Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, ty.optional), {
          stereotype
        })
      });
      return ret;
    } else {
      const ret = Object.assign(Object.assign({}, ty), {
        stereotype
      });
      return ret;
    }
  };
}
function withConstraint(name, args) {
  if (typeof name !== 'string') {
    throw new Error(`Decorator '@constraint' parameter 'name' should be string.`);
  }

  if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_0__["isUnsafeVarNames"])(_lib_util__WEBPACK_IMPORTED_MODULE_0__["dummyTargetObject"], name)) {
    throw new Error(`Unsafe symbol name is appeared in constraint assertion: ${name}`);
  }

  return ty => {
    if (ty.kind === 'optional') {
      const opt = ty.optional;
      const ret = Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, opt), {
          customConstraints: opt.customConstraints ? opt.customConstraints.slice().push(name) : [name],
          customConstraintsArgs: opt.customConstraintsArgs ? Object.assign(Object.assign({}, opt.customConstraintsArgs), {
            [name]: args
          }) : {
            [name]: args
          }
        })
      });
      return ret;
    } else {
      const ret = Object.assign(Object.assign({}, ty), {
        customConstraints: ty.customConstraints ? ty.customConstraints.slice().push(name) : [name],
        customConstraintsArgs: ty.customConstraintsArgs ? Object.assign(Object.assign({}, ty.customConstraintsArgs), {
          [name]: args
        }) : {
          [name]: args
        }
      });
      return ret;
    }
  };
}
function withForceCast() {
  return ty => {
    if (ty.kind === 'optional') {
      const ret = Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, ty.optional), {
          forceCast: true
        })
      });
      return ret;
    } else {
      const ret = Object.assign(Object.assign({}, ty), {
        forceCast: true
      });
      return ret;
    }
  };
}
function withRecordType() {
  return ty => {
    if (ty.kind === 'optional') {
      const ret = Object.assign(Object.assign({}, ty), {
        optional: Object.assign(Object.assign({}, ty.optional), {
          isRecordTypeField: true
        })
      });
      return ret;
    } else {
      const ret = Object.assign(Object.assign({}, ty), {
        isRecordTypeField: true
      });
      return ret;
    }
  };
}
function withMeta(meta) {
  return ty => {
    const ret = Object.assign(Object.assign({}, ty), {
      meta
    });
    return ret;
  };
}
function withMsg(messages) {
  return ty => {
    if (ty.kind === 'optional') {
      if (typeof messages === 'string') {
        const ret = Object.assign(Object.assign({}, ty), {
          message: messages,
          optional: Object.assign(Object.assign({}, ty.optional), {
            message: messages
          })
        });
        delete ret.messages;
        delete ret.optional.messages;
        return ret;
      } else {
        const ret = Object.assign(Object.assign({}, ty), {
          messages,
          optional: Object.assign(Object.assign({}, ty.optional), {
            messages
          })
        });
        delete ret.message;
        delete ret.optional.message;
        return ret;
      }
    } else {
      if (typeof messages === 'string') {
        const ret = Object.assign(Object.assign({}, ty), {
          message: messages
        });
        delete ret.messages;
        return ret;
      } else {
        const ret = Object.assign(Object.assign({}, ty), {
          messages
        });
        delete ret.message;
        return ret;
      }
    }
  };
}
function withMsgId(messageId) {
  return ty => {
    if (ty.kind === 'optional') {
      return Object.assign(Object.assign({}, ty), {
        messageId,
        optional: Object.assign(Object.assign({}, ty.optional), {
          messageId
        })
      });
    } else {
      return Object.assign(Object.assign({}, ty), {
        messageId
      });
    }
  };
}

/***/ }),

/***/ "./src/picker.ts":
/*!***********************!*\
  !*** ./src/picker.ts ***!
  \***********************/
/*! exports provided: pickRoot, pick, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickRoot", function() { return pickRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/errors */ "./src/lib/errors.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ "./src/validator.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln




function pickMapper(value, ty) {
  switch (ty.kind) {
    case 'object':
      {
        const ret = Array.isArray(value) ? [] : {};
        const dataMembers = new Set();

        if (!Array.isArray(value)) {
          for (const m in value) {
            if (Object.prototype.hasOwnProperty.call(value, m)) {
              dataMembers.add(m);
            }
          }
        }

        for (const x of ty.members) {
          if (Object.hasOwnProperty.call(value, x[0])) {
            dataMembers.delete(x[0]);
            ret[x[0]] = value[x[0]];
          }
        }

        if (ty.additionalProps && 0 < ty.additionalProps.length) {
          function* getAdditionalMembers() {
            for (const m of dataMembers.values()) {
              yield m;
            }

            if (Array.isArray(value)) {
              for (let i = 0; i < value.length; i++) {
                yield String(i);
              }
            }
          }

          for (const m of getAdditionalMembers()) {
            ret[m] = value[m];
          }
        }

        return ret;
      }

    default:
      return value;
  }
}

function pickRoot(data, ty, ctx) {
  switch (ty.kind) {
    case 'never':
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"](`Type unmatched: ${ty.kind}`, ty, ctx);

    case 'any': // FALL_THRU

    case 'unknown': // FALL_THRU

    case 'primitive': // FALL_THRU

    case 'primitive-value': // FALL_THRU

    case 'repeated': // FALL_THRU

    case 'sequence': // FALL_THRU

    case 'one-of': // FALL_THRU

    case 'enum': // FALL_THRU

    case 'object':
      {
        const r = Object(_validator__WEBPACK_IMPORTED_MODULE_2__["validate"])(data, ty, ctx);

        if (r) {
          return r.value;
        } else {
          throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"]('Validation failed.', ty, ctx);
        }
      }

    case 'spread':
    case 'optional':
    case 'symlink':
    case 'operator':
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"](`Unexpected type assertion: ${ty.kind}`, ty, ctx);

    default:
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_0__["ValidationError"](`Unknown type assertion: ${ty.kind}`, ty, ctx);
  }
}
function pick(data, ty, ctx) {
  const ctx2 = Object.assign(Object.assign({
    errors: [],
    typeStack: []
  }, ctx || {}), {
    mapper: pickMapper
  });

  try {
    return pickRoot(data, ty, ctx2);
  } finally {
    if (ctx) {
      ctx.errors = ctx2.errors;
    }
  }
}

function merge(data, needle) {
  if (data === null || data === void 0) {
    return needle;
  }

  switch (typeof data) {
    case 'object':
      if (Array.isArray(data)) {
        return [...needle];
      } else {
        const r = Object.assign({}, data);

        for (const k in needle) {
          if (Object.prototype.hasOwnProperty.call(needle, k)) {
            if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_1__["isUnsafeVarNames"])(r, k)) {
              continue;
            }

            r[k] = merge(r[k], needle[k]);
          }
        }

        return r;
      }

    default:
      return needle;
  }
}

function patch(data, needle, ty, ctx) {
  const ctx2 = Object.assign({
    errors: [],
    typeStack: []
  }, ctx || {});
  const validated = pick(needle, ty, ctx2);
  return merge(data, validated);
}

/***/ }),

/***/ "./src/serializer.ts":
/*!***************************!*\
  !*** ./src/serializer.ts ***!
  \***************************/
/*! exports provided: TynderSchemaVersion, serializeToObject, serialize, deserializeFromObject, deserialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TynderSchemaVersion", function() { return TynderSchemaVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeToObject", function() { return serializeToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeFromObject", function() { return deserializeFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return deserialize; });
/* harmony import */ var _lib_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/resolver */ "./src/lib/resolver.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const TynderSchemaVersion = 'tynder/1.0';

function hasMetaInfo(ty) {
  let hasInfo = false;

  if (ty.messages) {
    hasInfo = true;
  }

  if (ty.message) {
    hasInfo = true;
  }

  if (ty.messageId) {
    hasInfo = true;
  }

  switch (ty.kind) {
    case 'repeated':
      if (typeof ty.min === 'number') {
        hasInfo = true;
      }

      if (typeof ty.max === 'number') {
        hasInfo = true;
      }

      break;

    case 'primitive':
      if (typeof ty.minValue === 'number') {
        hasInfo = true;
      }

      if (typeof ty.maxValue === 'number') {
        hasInfo = true;
      }

      if (typeof ty.greaterThanValue === 'number') {
        hasInfo = true;
      }

      if (typeof ty.lessThanValue === 'number') {
        hasInfo = true;
      }

      if (typeof ty.minLength === 'number') {
        hasInfo = true;
      }

      if (typeof ty.maxLength === 'number') {
        hasInfo = true;
      }

      if (ty.pattern) {
        hasInfo = true;
      }

      break;
  }

  return hasInfo;
}

function serializeInner(ty, nestLevel) {
  if (0 < nestLevel && ty.typeName && !hasMetaInfo(ty)) {
    switch (ty.kind) {
      case 'optional':
        // nothing to do.
        break;

      default:
        return Object.assign(Object.assign({
          kind: 'symlink',
          symlinkTargetName: ty.typeName,
          typeName: ty.typeName
        }, ty.name ? {
          name: ty.name
        } : {}), ty.docComment ? {
          docComment: ty.docComment
        } : {});
    }
  }

  const ret = Object.assign({}, ty);

  switch (ret.kind) {
    case 'never':
    case 'any':
    case 'unknown':
    case 'symlink':
    case 'operator':
      break;

    case 'primitive-value':
      if (typeof ret.value === 'bigint') {
        ret.value = String(ret.value);
        ret.primitiveName = 'bigint';
      }

      break;

    case 'primitive':
      if (ret.pattern) {
        ret.pattern = `/${ret.pattern.source}/${ret.pattern.flags}`;
      }

      break;

    case 'repeated':
      ret.repeated = serializeInner(ret.repeated, nestLevel + 1);
      break;

    case 'spread':
      ret.spread = serializeInner(ret.spread, nestLevel + 1);
      break;

    case 'sequence':
      ret.sequence = ret.sequence.map(x => serializeInner(x, nestLevel + 1));
      break;

    case 'one-of':
      ret.oneOf = ret.oneOf.map(x => serializeInner(x, nestLevel + 1));
      break;

    case 'optional':
      ret.optional = serializeInner(ret.optional, nestLevel + 1);
      break;

    case 'enum':
      ret.values = ret.values.slice().map(x => x[2] === null || x[2] === void 0 ? x.slice(0, 2) : x);
      break;

    case 'object':
      ret.members = ret.members.map(x => [x[0], serializeInner(x[1], nestLevel + 1), ...x.slice(2)]);

      if (ret.additionalProps) {
        ret.additionalProps = ret.additionalProps.map(x => [x[0].map(p => typeof p === 'string' ? p : `/${p.source}/${p.flags}`), serializeInner(x[1], nestLevel + 1), ...x.slice(2)]);
      }

      if (ret.baseTypes) {
        // NOTE: convert 'baseTypes' to 'symlink'.
        ret.baseTypes = ret.baseTypes.map(x => serializeInner(x, nestLevel + 1));
      }

      break;

    default:
      throw new Error(`Unknown type assertion: ${ret.kind}`);
  }

  return ret;
}

function serializeToObject(schema) {
  const ret = {
    version: TynderSchemaVersion,
    ns: {}
  };
  const current = {};

  for (const ty of schema.entries()) {
    current[ty[0]] = serializeInner(ty[1].ty, 0);
  }

  ret.ns['.'] = current;
  return ret;
}
function serialize(schema, asTs) {
  const ret = serializeToObject(schema);

  if (asTs) {
    return `\n// tslint:disable: object-literal-key-quotes\n` + `const schema = ${JSON.stringify(ret, null, 2)};\nexport default schema;\n\n` + `export const enum Schema {\n${Object.keys(ret.ns['.']).filter(x => {
      return !(/^[0-9]/.test(x) || /[\u0000-\u001f\u007f]/.test(x) || /\s/.test(x) || /[@#$%^&+-=:;.,?!'"`/|{}()<>[\]\*\\]/.test(x));
    }).map(x => `    ${x} = '${x}',\n`).join('')}` + `}\n// tslint:enable: object-literal-key-quotes\n`;
  } else {
    return JSON.stringify(ret, null, 2);
  }
}

function deserializeRegExp(pat, errMsg) {
  const m = /^\/(.*)\/([gimsuy]*)$/s.exec(pat);

  if (m) {
    return new RegExp(m[1], m[2]);
  } else {
    throw new Error(errMsg);
  }
}

function deserializeInner(ty) {
  const ret = Object.assign({}, ty);

  switch (ret.kind) {
    case 'never':
    case 'any':
    case 'unknown':
    case 'enum':
    case 'symlink':
    case 'operator':
      // NOTE: 'symlink' and 'operator' will resolved by calling 'resolveSymbols()' in 'deserialize()'.
      break;

    case 'primitive-value':
      if (ret.primitiveName === 'bigint') {
        delete ret.primitiveName;
        ret.value = BigInt(ret.value);
      }

      break;

    case 'primitive':
      if (ret.pattern) {
        ret.pattern = deserializeRegExp(ret.pattern, `Unknown pattern match assertion: ${ret.pattern}`);
      }

      break;

    case 'repeated':
      ret.repeated = deserializeInner(ret.repeated);
      break;

    case 'spread':
      ret.spread = deserializeInner(ret.spread);
      break;

    case 'sequence':
      ret.sequence = ret.sequence.map(x => deserializeInner(x));
      break;

    case 'one-of':
      ret.oneOf = ret.oneOf.map(x => deserializeInner(x));
      break;

    case 'optional':
      ret.optional = deserializeInner(ret.optional);
      break;

    case 'object':
      ret.members = ret.members.map(x => [x[0], deserializeInner(x[1]), ...x.slice(2)]);

      if (ret.additionalProps) {
        ret.additionalProps = ret.additionalProps.map(x => [x[0].map(p => String(p).startsWith('/') ? deserializeRegExp(p, `Unknown additional props: ${p}`) : p), deserializeInner(x[1]), ...x.slice(2)]);
      } // NOTE: keep 'baseTypes' as 'symlink'.


      break;

    default:
      throw new Error(`Unknown type assertion: ${ret.kind}`);
  }

  return ret;
}

function deserializeFromObject(obj) {
  if (obj.version !== TynderSchemaVersion) {
    throw new Error(`Unknown schema version: ${obj.version}`);
  }

  const schema = new Map();
  const current = obj.ns['.'];

  for (const k in current) {
    if (!Object.prototype.hasOwnProperty.call(current, k)) {
      continue;
    }

    schema.set(k, {
      ty: deserializeInner(current[k]),
      exported: false,
      isDeclare: false,
      resolved: false
    });
  }

  return Object(_lib_resolver__WEBPACK_IMPORTED_MODULE_0__["resolveSchema"])(schema, {
    isDeserialization: true
  });
}
function deserialize(text) {
  const parsed = JSON.parse(text);
  return deserializeFromObject(parsed);
}

/***/ }),

/***/ "./src/stereotypes/date.ts":
/*!*********************************!*\
  !*** ./src/stereotypes/date.ts ***!
  \*********************************/
/*! exports provided: dateStereotype, lcDateStereotype, datetimeStereotype, lcDatetimeStereotype, stereotypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateStereotype", function() { return dateStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lcDateStereotype", function() { return lcDateStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datetimeStereotype", function() { return datetimeStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lcDatetimeStereotype", function() { return lcDatetimeStereotype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stereotypes", function() { return stereotypes; });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.ts");
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln

const FyPattern = /^first-date-of-fy\(([0-9]+)\)$/;
const FormulaPattern = /^([-+@])([0-9]+)(yr|mo|day|days|hr|min|sec|ms)$/;

class UtcDate extends Date {
  constructor(year, month, date, hours, minutes, seconds, ms) {
    super();

    if (year === void 0) {
      return;
    }

    if (typeof year === 'string') {
      if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(year)) {
        // string parameter is expected to be treated as specified TZ
        this.setTime(Date.parse(year)); // returns date in specified TZ
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(year)) {
        // string parameter is expected to be treated as UTC
        const d = new Date(year); // returns date in UTC TZ (getUTC??? returns string parameter's date & time digits)

        this.setTime(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(year)) {
        // string parameter is expected to be treated as UTC
        const d = new Date(year); // returns date in local TZ (get??? returns string parameter's date & time digits)

        this.setTime(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));
      } else {
        this.setTime(NaN);
      }

      return;
    }

    this.setUTCDate(1);
    this.setUTCFullYear(year);
    this.setUTCMonth(typeof month === 'number' ? month : 0);
    this.setUTCDate(typeof date === 'number' ? date : 1);
    this.setUTCHours(typeof hours === 'number' ? hours : 0);
    this.setUTCMinutes(typeof minutes === 'number' ? minutes : 0);
    this.setUTCSeconds(typeof seconds === 'number' ? seconds : 0);
    this.setUTCMilliseconds(typeof ms === 'number' ? ms : 0);
  }

  getFullYear() {
    return this.getUTCFullYear();
  }

  getMonth() {
    return this.getUTCMonth();
  }

  getDate() {
    return this.getUTCDate();
  }

  getHours() {
    return this.getUTCHours();
  }

  getMinutes() {
    return this.getUTCMinutes();
  }

  getSeconds() {
    return this.getUTCSeconds();
  }

  getMilliseconds() {
    return this.getUTCMilliseconds();
  }

}

class LcDate extends Date {
  constructor(year, month, date, hours, minutes, seconds, ms) {
    super();

    if (year === void 0) {
      return;
    }

    if (typeof year === 'string') {
      if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(year)) {
        // string parameter is expected to be treated as specified TZ
        this.setTime(Date.parse(year)); // returns date in specified TZ
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(year)) {
        // string parameter is expected to be treated as local TZ
        const d = new Date(year); // returns date in UTC TZ (getUTC??? returns string parameter's date & time digits)

        const l = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
        this.setTime(l.getTime());
      } else if (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(year)) {
        // string parameter is expected to be treated as local TZ
        const d = new Date(year); // returns date in local TZ (get??? returns string parameter's date & time digits)

        this.setTime(d.getTime());
      } else {
        this.setTime(NaN);
      }

      return;
    }

    this.setDate(1);
    this.setFullYear(year);
    this.setMonth(typeof month === 'number' ? month : 0);
    this.setDate(typeof date === 'number' ? date : 1);
    this.setHours(typeof hours === 'number' ? hours : 0);
    this.setMinutes(typeof minutes === 'number' ? minutes : 0);
    this.setSeconds(typeof seconds === 'number' ? seconds : 0);
    this.setMilliseconds(typeof ms === 'number' ? ms : 0);
  }

}

function evaluateFormulaBase(dateCtor, valueOrFormula) {
  const errMsg = `evaluateFormula: invalid parameter ${valueOrFormula}`;

  if (typeof valueOrFormula !== 'string') {
    throw new Error(errMsg);
  }

  if (valueOrFormula.startsWith('=')) {
    const formula = valueOrFormula.slice(1).split(' ');
    let d = new dateCtor();
    const now = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
    const today = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate());
    d = now;

    for (const f of formula) {
      switch (f) {
        case 'current':
        case 'now':
          d = now;
          break;

        case 'today':
          d = today;
          break;

        case 'first-date-of-yr':
        case 'first-date-of-fy(1)':
          d = new dateCtor(d.getFullYear(), 0, 1);
          break;

        case 'last-date-of-yr':
          d = new dateCtor(d.getFullYear(), 11, 31);
          break;

        case 'first-date-of-mo':
          d = new dateCtor(d.getFullYear(), d.getMonth(), 1);
          break;

        case 'last-date-of-mo':
          d = new dateCtor(d.getFullYear(), d.getMonth() + 1, 0);
          break;

        default:
          if (f.startsWith('first-date-of-fy(')) {
            const m = FyPattern.exec(f);

            if (m) {
              const n = Number.parseInt(m[1], 10);

              if (0 < n && n <= 12) {
                const mo = d.getMonth() + 1;
                let yr = d.getFullYear();

                if (mo < n) {
                  yr--;
                }

                d = new dateCtor(yr, n - 1, 1);
              } else {
                throw new Error(errMsg);
              }
            } else {
              throw new Error(errMsg);
            }
          } else {
            const m = FormulaPattern.exec(f);

            if (m) {
              let n = Number.parseInt(m[2], 10);

              switch (m[3]) {
                case 'yr':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getFullYear() + n;
                      break;

                    case '-':
                      n = d.getFullYear() - n;
                      break;
                  }

                  d = new dateCtor(n, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'mo':
                  switch (m[1]) {
                    case '@':
                      n -= 1;
                      break;

                    case '+':
                      n = d.getMonth() + n;
                      break;

                    case '-':
                      n = d.getMonth() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), n, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'day':
                case 'days':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getDate() + n;
                      break;

                    case '-':
                      n = d.getDate() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), n, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'hr':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getHours() + n;
                      break;

                    case '-':
                      n = d.getHours() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), n, d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                  break;

                case 'min':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getMinutes() + n;
                      break;

                    case '-':
                      n = d.getMinutes() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), n, d.getSeconds(), d.getMilliseconds());
                  break;

                case 'sec':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getSeconds() + n;
                      break;

                    case '-':
                      n = d.getSeconds() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), n, d.getMilliseconds());
                  break;

                case 'ms':
                  switch (m[1]) {
                    case '@':
                      break;

                    case '+':
                      n = d.getMilliseconds() + n;
                      break;

                    case '-':
                      n = d.getMilliseconds() - n;
                      break;
                  }

                  d = new dateCtor(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), n);
                  break;

                default:
                  throw new Error(errMsg);
              }
            } else {
              if (!(_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(f) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(f) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(f))) {
                throw new Error(errMsg);
              }

              d = new dateCtor(f);
            }
          }

      }
    }

    return d;
  } else {
    if (!_lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(valueOrFormula)) {
      throw new Error(errMsg);
    }

    return new dateCtor(valueOrFormula);
  }
}

const dateStereotype = {
  tryParse: value => {
    return typeof value === 'string' && _lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(value) ? {
      value: new UtcDate(value).getTime()
    } : null;
  },
  evaluateFormula: valueOrFormula => {
    const d = evaluateFormulaBase(UtcDate, valueOrFormula);
    return new UtcDate(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  },
  compare: (a, b) => a - b,
  doCast: false
};
const lcDateStereotype = Object.assign(Object.assign({}, dateStereotype), {
  tryParse: value => {
    if (typeof value === 'string' && _lib_util__WEBPACK_IMPORTED_MODULE_0__["DatePattern"].test(value)) {
      return {
        value: new LcDate(value).getTime()
      };
    } else {
      return null;
    }
  },
  evaluateFormula: valueOrFormula => {
    const d = evaluateFormulaBase(LcDate, valueOrFormula);
    return new LcDate(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  }
});
const datetimeStereotype = {
  tryParse: value => {
    return typeof value === 'string' && (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(value) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(value)) ? {
      value: new UtcDate(value).getTime()
    } // If timezone is not specified, it is local time
    : null;
  },
  evaluateFormula: valueOrFormula => evaluateFormulaBase(UtcDate, valueOrFormula).getTime(),
  compare: (a, b) => a - b,
  doCast: false
};
const lcDatetimeStereotype = Object.assign(Object.assign({}, datetimeStereotype), {
  tryParse: value => {
    return typeof value === 'string' && (_lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimePattern"].test(value) || _lib_util__WEBPACK_IMPORTED_MODULE_0__["DateTimeNoTzPattern"].test(value)) ? {
      value: new LcDate(value).getTime()
    } : null;
  },
  evaluateFormula: valueOrFormula => evaluateFormulaBase(LcDate, valueOrFormula).getTime()
});
const stereotypes = [['date', dateStereotype], ['lcdate', lcDateStereotype], ['datetime', datetimeStereotype], ['lcdatetime', lcDatetimeStereotype]];

/***/ }),

/***/ "./src/stereotypes/noop.ts":
/*!*********************************!*\
  !*** ./src/stereotypes/noop.ts ***!
  \*********************************/
/*! exports provided: noopStereotype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopStereotype", function() { return noopStereotype; });
// Copyright (c) 2020 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
const noopStereotype = {
  tryParse: value => {
    return {
      value
    };
  },
  evaluateFormula: valueOrFormula => {
    return valueOrFormula;
  },
  compare: (a, b) => {
    // NOTE: You should pass assertion value (schema value) into 'a'.
    const tyA = typeof a;
    const tyB = typeof b;

    if (tyA !== tyB) {
      return NaN;
    }

    switch (tyA) {
      case 'number':
        if (Number.isNaN(a) && Number.isNaN(b)) {
          return 0;
        } else {
          return a - b;
        }

      default:
        if (a === b) {
          return 0;
        } else if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return NaN;
        }

    }
  },
  doCast: false
};

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! exports provided: ErrorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_tynder_schema_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/tynder-schema-types */ "./src/types/tynder-schema-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return _types_tynder_schema_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"]; });

// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln


/***/ }),

/***/ "./src/types/tynder-schema-types.ts":
/*!******************************************!*\
  !*** ./src/types/tynder-schema-types.ts ***!
  \******************************************/
/*! exports provided: ErrorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return ErrorTypes; });
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln
var ErrorTypes;

(function (ErrorTypes) {
  ErrorTypes[ErrorTypes["InvalidDefinition"] = 1] = "InvalidDefinition";
  ErrorTypes[ErrorTypes["Required"] = 2] = "Required";
  ErrorTypes[ErrorTypes["TypeUnmatched"] = 3] = "TypeUnmatched";
  ErrorTypes[ErrorTypes["AdditionalPropUnmatched"] = 4] = "AdditionalPropUnmatched";
  ErrorTypes[ErrorTypes["RepeatQtyUnmatched"] = 5] = "RepeatQtyUnmatched";
  ErrorTypes[ErrorTypes["SequenceUnmatched"] = 6] = "SequenceUnmatched";
  ErrorTypes[ErrorTypes["ValueRangeUnmatched"] = 7] = "ValueRangeUnmatched";
  ErrorTypes[ErrorTypes["ValuePatternUnmatched"] = 8] = "ValuePatternUnmatched";
  ErrorTypes[ErrorTypes["ValueLengthUnmatched"] = 9] = "ValueLengthUnmatched";
  ErrorTypes[ErrorTypes["ValueUnmatched"] = 10] = "ValueUnmatched";
})(ErrorTypes || (ErrorTypes = {}));

/***/ }),

/***/ "./src/validator.ts":
/*!**************************!*\
  !*** ./src/validator.ts ***!
  \**************************/
/*! exports provided: validateRoot, validate, isType, assertType, getType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRoot", function() { return validateRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return assertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/errors */ "./src/lib/errors.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/util */ "./src/lib/util.ts");
/* harmony import */ var _lib_reporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/reporter */ "./src/lib/reporter.ts");
/* harmony import */ var _lib_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/resolver */ "./src/lib/resolver.ts");
/* harmony import */ var _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stereotypes/noop */ "./src/stereotypes/noop.ts");
// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln







function checkStereotypes(data, ty, ctx) {
  if (ty.stereotype && ctx.stereotypes) {
    if (ctx.stereotypes.has(ty.stereotype)) {
      const stereotype = ctx.stereotypes.get(ty.stereotype);
      const parsed = stereotype.tryParse(data);

      if (parsed) {
        return {
          value: parsed.value,
          stereotype
        };
      } else {
        return null;
      }
    } else {
      throw new Error(`Undefined stereotype is specified: ${ty.stereotype}`);
    }
  }

  return false;
}

function forceCast(targetType, value) {
  switch (targetType) {
    case 'number':
      if (typeof value === 'number') {
        return value;
      } else {
        const a = Number.parseFloat(String(value));

        if (Number.isNaN(a)) {
          return Number(value !== null && value !== void 0 ? value : 0);
        } else {
          return a;
        }
      }

    case 'integer':
      if (typeof value === 'number' && Math.trunc(value) === value) {
        return value;
      } else {
        let a = Number.parseFloat(String(value));

        if (Number.isNaN(a)) {
          a = Number(value !== null && value !== void 0 ? value : 0);
        }

        return Math.trunc(a);
      }

    case 'bigint':
      try {
        return BigInt(value !== null && value !== void 0 ? value : 0);
      } catch (_a) {
        return NaN;
      }

    case 'string':
      return String(value);

    case 'boolean':
      return Boolean(value);

    case 'undefined':
      return void 0;

    case 'null':
      return null;

    default:
      return value;
  }
}

function checkCustomConstraints(data, ty, ctx) {
  if (ty.customConstraints && ctx.customConstraints) {
    for (const ccName of ty.customConstraints) {
      if (ctx.customConstraints.has(ccName)) {
        const cc = ctx.customConstraints.get(ccName);

        if (cc.kinds && !cc.kinds.includes(ty.kind)) {
          return null;
        }

        if (!cc.check(data, ty.customConstraintsArgs && ty.customConstraintsArgs[ccName])) {
          return null;
        }
      } else {
        throw new Error(`Undefined constraint is specified: ${ccName}`);
      }
    }

    return true;
  }

  return false;
}

function validateNeverTypeAssertion(data, ty, ctx) {
  Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
    ctx
  });
  return null;
}

function validateAnyTypeAssertion(data, ty, ctx) {
  let chkSt = checkStereotypes(data, ty, ctx);

  if (chkSt === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: data,
      stereotype: _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styp = chkSt.stereotype;

  if (checkCustomConstraints(data, ty, ctx) === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    return null;
  } // always matched


  return {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : data, ty) : styp.doCast ? chkSt.value : data
  };
}

function validateUnknownTypeAssertion(data, ty, ctx) {
  let chkSt = checkStereotypes(data, ty, ctx);

  if (chkSt === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: data,
      stereotype: _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styp = chkSt.stereotype;

  if (checkCustomConstraints(data, ty, ctx) === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    return null;
  } // always matched


  return {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : data, ty) : styp.doCast ? chkSt.value : data
  };
}

function validatePrimitiveTypeAssertion(data, ty, ctx) {
  const chkTarget = ty.forceCast ? forceCast(ty.primitiveName, data) : data;

  if (ty.primitiveName === 'null') {
    if (chkTarget !== null) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
        ctx
      });
      return null;
    }
  } else if (ty.primitiveName === 'integer') {
    if (typeof chkTarget !== 'number') {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
        ctx
      });
      return null;
    }

    if (Math.trunc(chkTarget) !== chkTarget) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
        ctx
      });
      return null;
    }
  } else if (typeof chkTarget !== ty.primitiveName) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  } // TODO: Function, DateStr, DateTimeStr


  let chkSt = checkStereotypes(chkTarget, ty, ctx);

  if (chkSt === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: chkTarget,
      stereotype: ty.forceCast ? _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"] : _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styVal = chkSt.value;
  const styp = chkSt.stereotype;
  let err = false;
  let valueRangeErr = false;

  switch (typeof ty.minValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.minValue)) < 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  switch (typeof ty.maxValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.maxValue)) > 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  switch (typeof ty.greaterThanValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.greaterThanValue)) <= 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  switch (typeof ty.lessThanValue) {
    case 'number':
    case 'string':
      // TODO: bigint
      if (styp.compare(styVal, styp.evaluateFormula(ty.lessThanValue)) >= 0) {
        if (!valueRangeErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueRangeUnmatched, data, ty, {
            ctx
          });
        }

        valueRangeErr = true;
        err = true;
      }

  }

  let valueLengthErr = false;

  switch (typeof ty.minLength) {
    case 'number':
      if (typeof styVal !== 'string' || styVal.length < ty.minLength) {
        if (!valueLengthErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueLengthUnmatched, data, ty, {
            ctx
          });
        }

        valueLengthErr = true;
        err = true;
      }

  }

  switch (typeof ty.maxLength) {
    case 'number':
      if (typeof styVal !== 'string' || styVal.length > ty.maxLength) {
        if (!valueLengthErr) {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueLengthUnmatched, data, ty, {
            ctx
          });
        }

        valueLengthErr = true;
        err = true;
      }

  }

  if (ty.pattern) {
    if (typeof styVal !== 'string' || !ty.pattern.test(styVal)) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValuePatternUnmatched, data, ty, {
        ctx
      });
      err = true;
    }
  }

  if (checkCustomConstraints(data, ty, ctx) === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    err = true;
  }

  const ret = !err ? {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : chkTarget, ty) : styp.doCast ? chkSt.value : chkTarget
  } : null;
  return ret;
}

function validatePrimitiveValueTypeAssertion(data, ty, ctx) {
  const chkTarget = ty.forceCast ? forceCast(typeof ty.value, data) : data;
  let chkSt = checkStereotypes(chkTarget, ty, ctx);

  if (chkSt === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    return null;
  } else if (chkSt === false) {
    chkSt = {
      value: chkTarget,
      stereotype: ty.forceCast ? _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"] : _stereotypes_noop__WEBPACK_IMPORTED_MODULE_5__["noopStereotype"]
    };
  }

  const styp = chkSt.stereotype;
  let ret = styp.compare(chkSt.value, styp.evaluateFormula(ty.value)) === 0 ? {
    value: ctx.mapper ? ctx.mapper(styp.doCast ? chkSt.value : chkTarget, ty) : styp.doCast ? chkSt.value : chkTarget
  } : null;

  if (!ret) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
  }

  if (ret && checkCustomConstraints(data, ty, ctx) === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    ret = null;
  }

  return ret;
}

function validateRepeatedAssertion(data, ty, ctx) {
  if (!Array.isArray(data)) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  if (typeof ty.min === 'number' && data.length < ty.min) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  if (typeof ty.max === 'number' && data.length > ty.max) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  const retVals = [];

  for (let i = 0; i < data.length; i++) {
    const x = data[i];
    const r = validateRoot(x, ty.repeated, ctx, i);

    if (!r) {
      return null;
    }

    retVals.push(r.value);
  }

  if (checkCustomConstraints(data, ty, ctx) === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  return {
    value: retVals
  };
}

function validateSequenceAssertion(data, ty, ctx) {
  if (!Array.isArray(data)) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  let dIdx = 0,
      // index of data
  sIdx = 0; // index of types

  let spreadLen = 0;
  let optionalOmitted = false;

  const checkSpreadQuantity = (ts, index) => {
    if (typeof ts.min === 'number' && spreadLen < ts.min) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(spreadLen === 0 ? _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched : _types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    }

    if (typeof ts.max === 'number' && spreadLen > ts.max) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    }

    return ts;
  };

  const checkOptionalQuantity = (ts, index) => {
    if (spreadLen === 0) {
      // All subsequent 'optional' assertions should be 'spreadLen === 0'.
      optionalOmitted = true;
    } else if (optionalOmitted) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    } else if (spreadLen > 1) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, index], {
        ctx
      });
      return null;
    }

    return ts;
  };

  const retVals = [];

  while (dIdx < data.length && sIdx < ty.sequence.length) {
    const ts = ty.sequence[sIdx];

    if (ts.kind === 'spread') {
      const savedErrLen = ctx.errors.length;
      const r = validateRoot(data[dIdx], ts.spread, ctx, dIdx);

      if (r) {
        retVals.push(r.value);
        dIdx++;
        spreadLen++;
      } else {
        // End of spreading
        // rollback reported errors
        ctx.errors.length = savedErrLen;

        if (!checkSpreadQuantity(ts, dIdx)) {
          return null;
        }

        spreadLen = 0;
        sIdx++;
      }
    } else if (ts.kind === 'optional') {
      const savedErrLen = ctx.errors.length;
      const r = validateRoot(data[dIdx], ts.optional, ctx, dIdx);

      if (r) {
        retVals.push(r.value);
        dIdx++;
        spreadLen++;
      } else {
        // End of spreading
        // rollback reported errors
        ctx.errors.length = savedErrLen;

        if (!checkOptionalQuantity(ts, dIdx)) {
          return null;
        }

        spreadLen = 0;
        sIdx++;
      }
    } else {
      const r = validateRoot(data[dIdx], ts, ctx, dIdx);

      if (r) {
        retVals.push(r.value);
        dIdx++;
        sIdx++;
      } else {
        return null;
      }
    }
  }

  while (sIdx < ty.sequence.length) {
    const ts = ty.sequence[sIdx];

    if (ts.kind === 'spread') {
      if (!checkSpreadQuantity(ts, dIdx)) {
        return null;
      }

      spreadLen = 0;
      sIdx++;
    } else if (ts.kind === 'optional') {
      if (!checkOptionalQuantity(ts, dIdx)) {
        return null;
      }

      spreadLen = 0;
      sIdx++;
    } else {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RepeatQtyUnmatched, data, [ts, dIdx], {
        ctx
      });
      return null;
    }
  }

  const ret = data.length === dIdx ? {
    value: retVals
  } : null;

  if (!ret) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].SequenceUnmatched, data, ty, {
      ctx
    });
  }

  if (ret && checkCustomConstraints(data, ty, ctx) === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  return ret;
}

function validateOneOfAssertion(data, ty, ctx) {
  let choosed = false;
  const savedCtxRecordTypeFieldValidated = ctx.recordTypeFieldValidated;
  ctx.recordTypeFieldValidated = false;
  const savedErrLen = ctx.errors.length;
  let count = 0;
  let firstErrLen = savedErrLen;

  for (const tyOne of ty.oneOf) {
    const r = validateRoot(data, tyOne, ctx);

    if (r) {
      // rollback reported errors
      ctx.errors.length = savedErrLen;
      ctx.recordTypeFieldValidated = savedCtxRecordTypeFieldValidated;
      return r;
    }

    if (ctx.recordTypeFieldValidated) {
      if (count !== 0) {
        const e2 = ctx.errors.slice(firstErrLen);
        ctx.errors.length = savedErrLen;
        ctx.errors.push(...e2);
      }

      choosed = true;
      break;
    }

    if (count === 0) {
      firstErrLen = ctx.errors.length;
    } else {
      ctx.errors.length = firstErrLen;
    }

    count++;
  }

  if (!choosed) {
    if (!ctx.checkAll) {
      // rollback reported errors
      ctx.errors.length = savedErrLen;
    }

    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });
  }

  ctx.recordTypeFieldValidated = savedCtxRecordTypeFieldValidated;
  return null;
}

function validateEnumAssertion(data, ty, ctx) {
  for (const v of ty.values) {
    if (data === v[1]) {
      return {
        value: ctx.mapper ? ctx.mapper(data, ty) : data
      };
    }
  }

  Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
    ctx
  });
  return null;
}

function validateObjectAssertion(data, ty, ctx) {
  let retVal = Array.isArray(data) ? [...data] : Object.assign({}, data);
  const revMembers = ty.members.slice().reverse();

  for (const x of ty.members) {
    if (ty.members.find(m => m[0] === x[0]) !== revMembers.find(m => m[0] === x[0])) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
        ctx
      });
      throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Duplicated member is found: ${x[0]} in ${ty.name || '(unnamed)'}`, ty, ctx);
    }
  }

  if (data === null || typeof data !== 'object') {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].TypeUnmatched, data, ty, {
      ctx
    });

    if (ctx && ctx.checkAll) {
      retVal = null;
    } else {
      return null;
    }
  } else {
    const dataMembers = new Set();

    if (ctx.noAdditionalProps || ty.additionalProps && 0 < ty.additionalProps.length) {
      if (!Array.isArray(data)) {
        for (const m in data) {
          if (Object.prototype.hasOwnProperty.call(data, m)) {
            dataMembers.add(m);
          }
        }
      }
    }

    if (ctx.noAdditionalProps && Array.isArray(data) && 0 < data.length) {
      const aps = ty.additionalProps || [];

      if (aps.filter(x => x[0].includes('number')).length === 0) {
        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched, data, ty, {
          ctx,
          substitutions: [['addtionalProps', '[number]']]
        });

        if (ctx && ctx.checkAll) {
          retVal = null;
        } else {
          return null;
        }
      }
    }

    for (const x of ty.members) {
      dataMembers.delete(x[0]);

      if (Object.prototype.hasOwnProperty.call(data, x[0])) {
        const mt = x[1].kind === 'optional' ? // TODO: set name at compile time
        Object.assign(Object.assign({}, x[1].optional), {
          name: x[0],
          message: x[1].message,
          messages: x[1].messages,
          messageId: x[1].messageId
        }) : x[1];
        const ret = validateRoot(data[x[0]], mt, ctx);

        if (ret) {
          if (retVal) {
            if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_2__["isUnsafeVarNames"])(retVal, x[0])) {
              continue;
            }

            retVal[x[0]] = ret.value;

            if (mt.isRecordTypeField) {
              ctx.recordTypeFieldValidated = true;
            }
          }
        } else {
          if (ctx && ctx.checkAll) {
            retVal = null;
          } else {
            return null;
          }
        }
      } else {
        if (x[1].kind !== 'optional') {
          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportErrorWithPush"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].Required, data, [x[1], void 0], {
            ctx
          });

          if (ctx && ctx.checkAll) {
            retVal = null;
          } else {
            return null;
          }
        }
      }
    }

    if (ty.additionalProps && 0 < ty.additionalProps.length) {
      function* getAdditionalMembers() {
        for (const m of dataMembers.values()) {
          yield m;
        }

        if (Array.isArray(data)) {
          for (let i = 0; i < data.length; i++) {
            yield String(i);
          }
        }
      }

      for (const m of getAdditionalMembers()) {
        let allowImplicit = false;
        const matchedAssertions = [];

        for (const ap of ty.additionalProps) {
          for (const pt of ap[0]) {
            const at = ap[1];

            if (pt === 'number') {
              if (_lib_util__WEBPACK_IMPORTED_MODULE_2__["NumberPattern"].test(m)) {
                matchedAssertions.push(at);
              }
            } else if (pt === 'string') {
              matchedAssertions.push(at);
            } else {
              if (pt.test(m)) {
                matchedAssertions.push(at);
              }
            }

            if (at.kind === 'optional') {
              allowImplicit = true;
            }
          }
        }

        if (matchedAssertions.length === 0) {
          if (allowImplicit) {
            continue;
          }

          Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched, data, ty, {
            ctx,
            substitutions: [['addtionalProps', m]]
          });

          if (ctx && ctx.checkAll) {
            retVal = null;
            continue;
          } else {
            return null;
          }
        }

        dataMembers.delete(m);
        let hasError = false;
        const savedErrLen = ctx.errors.length;

        for (const at of matchedAssertions) {
          const ret = validateRoot(data[m], at.kind === 'optional' ? Object.assign(Object.assign({}, at.optional), {
            message: at.message,
            messages: at.messages,
            messageId: at.messageId,
            name: m
          }) : Object.assign(Object.assign({}, at), {
            name: m
          }), ctx);

          if (ret) {
            if (retVal) {
              hasError = false;
              ctx.errors.length = savedErrLen;

              if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_2__["isUnsafeVarNames"])(retVal, m)) {
                continue;
              }

              retVal[m] = ret.value;
            }

            break;
          } else {
            hasError = true;
          }
        }

        if (hasError) {
          if (ctx && ctx.checkAll) {
            retVal = null;
          } else {
            return null;
          }
        }
      }
    }

    if (ctx.noAdditionalProps && 0 < dataMembers.size) {
      Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].AdditionalPropUnmatched, data, ty, {
        ctx,
        substitutions: [['addtionalProps', Array.from(dataMembers.values()).join(', ')]]
      });

      if (ctx && ctx.checkAll) {
        retVal = null;
      } else {
        return null;
      }
    }
  }

  if (!retVal) {// TODO: Child is unmatched. reportError?
    // TODO: report object's custom error message
  }

  if (retVal && checkCustomConstraints(data, ty, ctx) === null) {
    Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].ValueUnmatched, data, ty, {
      ctx
    });
    return null;
  }

  return retVal ? {
    value: ctx && ctx.mapper ? ctx.mapper(retVal, ty) : retVal
  } : null;
}

function validateRoot(data, ty, ctx, dataIndex) {
  try {
    ctx.typeStack.push(typeof dataIndex === 'number' || typeof dataIndex === 'string' ? [ty, dataIndex] : ty);

    switch (ty.kind) {
      case 'never':
        return validateNeverTypeAssertion(data, ty, ctx);

      case 'any':
        return validateAnyTypeAssertion(data, ty, ctx);

      case 'unknown':
        return validateUnknownTypeAssertion(data, ty, ctx);

      case 'primitive':
        return validatePrimitiveTypeAssertion(data, ty, ctx);

      case 'primitive-value':
        return validatePrimitiveValueTypeAssertion(data, ty, ctx);

      case 'repeated':
        return validateRepeatedAssertion(data, ty, ctx);

      case 'sequence':
        return validateSequenceAssertion(data, ty, ctx);

      case 'one-of':
        return validateOneOfAssertion(data, ty, ctx);

      case 'enum':
        return validateEnumAssertion(data, ty, ctx);

      case 'object':
        return validateObjectAssertion(data, ty, ctx);

      case 'symlink':
        if (ctx.schema) {
          return validateRoot(data, Object(_lib_resolver__WEBPACK_IMPORTED_MODULE_4__["resolveSymbols"])(ctx.schema, ty, {
            nestLevel: 0,
            symlinkStack: []
          }), ctx);
        }

        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unresolved symbol '${ty.symlinkTargetName}' is appeared.`, ty, ctx);

      case 'operator':
        if (ctx.schema) {
          return validateRoot(data, Object(_lib_resolver__WEBPACK_IMPORTED_MODULE_4__["resolveSymbols"])(ctx.schema, ty, {
            nestLevel: 0,
            symlinkStack: []
          }), ctx);
        }

        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unresolved type operator is found: ${ty.operator}`, ty, ctx);

      case 'spread':
      case 'optional':
        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unexpected type assertion: ${ty.kind}`, ty, ctx);

      default:
        Object(_lib_reporter__WEBPACK_IMPORTED_MODULE_3__["reportError"])(_types__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].InvalidDefinition, data, ty, {
          ctx
        });
        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_1__["ValidationError"](`Unknown type assertion: ${ty.kind}`, ty, ctx);
    }
  } finally {
    ctx.typeStack.pop();
  }
}
function validate(data, ty, ctx) {
  const ctx2 = Object.assign({
    errors: [],
    typeStack: []
  }, ctx || {});

  try {
    return validateRoot(data, ty, ctx2);
  } finally {
    if (ctx) {
      ctx.errors = ctx2.errors;
    }
  }
}
function isType(data, ty, ctx) {
  return !!validate(data, ty, ctx);
}
function assertType(data, ty, ctx) {
  if (!validate(data, ty, ctx)) {
    throw new Error(`Assertion failed: Expected data should be of type "${ty.typeName || ty.name || '?'}".`);
  }
}
function getType(schema, name) {
  var _a;

  if (schema.has(name)) {
    return (_a = schema.get(name)) === null || _a === void 0 ? void 0 : _a.ty;
  }

  throw new Error(`Undefined type name is referred: ${name}`);
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/shellyln/tynder/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=tynder.js.map