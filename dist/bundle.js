/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bind = __webpack_require__(1);

var variable = (0, _bind.val)('TEST ').bind((0, _bind.dom)('#first'), (0, _bind.dom)('#second'), (0, _bind.dom)('#third'));

var time = 0;
setInterval(function (_) {
    return variable.append(time++ + ' ');
}, 500);

var model = (0, _bind.obj)({
    foo: {
        bar: 'hello',
        baz: 'world'
    },
    moo: 666
});

model.foo.bar.bind((0, _bind.dom)('#foo'));
model.moo.bind((0, _bind.dom)('#moo'), model.foo.baz);
model.foo.baz.bind((0, _bind.dom)('#bar'));

console.log(model);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.val = val;
exports.obj = obj;
exports.dom = dom;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Broadcaster = exports.Broadcaster = function () {
    function Broadcaster() {
        _classCallCheck(this, Broadcaster);

        this.observers = new Set();
    }

    _createClass(Broadcaster, [{
        key: 'subscribe',
        value: function subscribe(observer) {
            this.observers.add(observer);
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe(observer) {
            this.observers.delete(observer);
        }
    }, {
        key: 'notify',
        value: function notify(value) {
            this.observers.forEach(function (observer) {
                return observer.update(value);
            });
        }
    }]);

    return Broadcaster;
}();

var Variable = exports.Variable = function (_Broadcaster) {
    _inherits(Variable, _Broadcaster);

    function Variable(initial) {
        _classCallCheck(this, Variable);

        var _this = _possibleConstructorReturn(this, (Variable.__proto__ || Object.getPrototypeOf(Variable)).call(this));

        _this.value = initial;
        return _this;
    }

    _createClass(Variable, [{
        key: 'change',
        value: function change(value) {
            if (value != this.value) {
                this.set(value);
                this.notify(value);
            }

            return this;
        }
    }, {
        key: 'append',
        value: function append(value) {
            return this.change(this.get() + value);
        }
    }, {
        key: 'set',
        value: function set(value) {
            this.value = value;
            return this;
        }
    }, {
        key: 'get',
        value: function get() {
            return this.value;
        }
    }, {
        key: 'bind',
        value: function bind() {
            Bind.all.apply(Bind, arguments).with(this);
            return this;
        }
    }]);

    return Variable;
}(Broadcaster);

var Bind = exports.Bind = function () {
    function Bind(initial) {
        _classCallCheck(this, Bind);

        this.variables = new Set();
        this.value = initial;
    }

    _createClass(Bind, [{
        key: 'add',
        value: function add() {
            var _this2 = this;

            for (var _len = arguments.length, variables = Array(_len), _key = 0; _key < _len; _key++) {
                variables[_key] = arguments[_key];
            }

            this.variables = new Set([].concat(_toConsumableArray(this.variables), _toConsumableArray(new Set(variables))));
            variables.forEach(function (variable) {
                variable.change(_this2.value);
                _this2.observer = { update: function update(value) {
                        _this2.variables.delete(variable);
                        _this2.change(value);
                        _this2.variables.add(variable);
                    } };
                variable.subscribe(_this2.observer);
            });

            return this;
        }
    }, {
        key: 'with',
        value: function _with(variable) {
            this.value = variable.get();
            this.add(variable);
            this.change(this.value);
        }
    }, {
        key: 'change',
        value: function change(value) {
            this.value = value;
            this.variables.forEach(function (variable) {
                return variable.change(value);
            });
        }
    }, {
        key: 'get',
        value: function get() {
            this.value;
        }
    }], [{
        key: 'all',
        value: function all() {
            var _ref;

            return (_ref = new Bind()).add.apply(_ref, arguments);
        }
    }]);

    return Bind;
}();

var DomVariable = exports.DomVariable = function (_Variable) {
    _inherits(DomVariable, _Variable);

    function DomVariable(element, initial) {
        _classCallCheck(this, DomVariable);

        var _this3 = _possibleConstructorReturn(this, (DomVariable.__proto__ || Object.getPrototypeOf(DomVariable)).call(this, initial));

        _this3.element = element;
        _this3.element.addEventListener('input', function (_ref2) {
            var target = _ref2.target;
            return _this3.change(target.value);
        });
        return _this3;
    }

    _createClass(DomVariable, [{
        key: 'set',
        value: function set(value) {
            this.element.value = value;
            this.value = value;
            return this;
        }
    }], [{
        key: 'select',
        value: function select(selector) {
            var element = document.querySelector(selector);
            return new DomVariable(element);
        }
    }, {
        key: 'id',
        value: function id(identifier) {
            var element = document.getElementById(identifier);
            return new DomVariable(element);
        }
    }]);

    return DomVariable;
}(Variable);

function val(value) {
    var _ref3;

    for (var _len2 = arguments.length, binds = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        binds[_key2 - 1] = arguments[_key2];
    }

    return (_ref3 = new Variable(value)).bind.apply(_ref3, binds);
}

function obj(object) {
    function recursive(object) {
        var proxy = object;
        if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
            for (var name in object) {
                if (_typeof(object[name]) === 'object') {
                    proxy[name] = recursive(object[name]);
                } else {
                    (function () {
                        var namedVariable = new Variable(object[name]);
                        proxy[name] = namedVariable;
                        Object.defineProperty(proxy, name, {
                            set: function set(value) {
                                return namedVariable.change(value);
                            },
                            get: function get() {
                                return namedVariable;
                            }
                        });
                    })();
                }
            }
        }

        return proxy;
    }

    return recursive(object);
}

function dom(selector) {
    return DomVariable.select(selector);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU0M2E1MzdiMjk1MWY4MjM4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kLmpzIl0sIm5hbWVzIjpbInZhcmlhYmxlIiwiYmluZCIsInRpbWUiLCJzZXRJbnRlcnZhbCIsImFwcGVuZCIsIm1vZGVsIiwiZm9vIiwiYmFyIiwiYmF6IiwibW9vIiwiY29uc29sZSIsImxvZyIsInZhbCIsIm9iaiIsImRvbSIsIkJyb2FkY2FzdGVyIiwib2JzZXJ2ZXJzIiwiU2V0Iiwib2JzZXJ2ZXIiLCJhZGQiLCJkZWxldGUiLCJ2YWx1ZSIsImZvckVhY2giLCJ1cGRhdGUiLCJWYXJpYWJsZSIsImluaXRpYWwiLCJzZXQiLCJub3RpZnkiLCJjaGFuZ2UiLCJnZXQiLCJCaW5kIiwiYWxsIiwid2l0aCIsInZhcmlhYmxlcyIsInN1YnNjcmliZSIsIkRvbVZhcmlhYmxlIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlkZW50aWZpZXIiLCJnZXRFbGVtZW50QnlJZCIsImJpbmRzIiwib2JqZWN0IiwicmVjdXJzaXZlIiwicHJveHkiLCJuYW1lIiwibmFtZWRWYXJpYWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwic2VsZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1D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QyxhQUFkO0FBQ0FDLCtCQUFPQyxjQUFQLENBQXNCSixLQUF0QixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDL0J0QixpQ0FBSztBQUFBLHVDQUFTdUIsY0FBY3JCLE1BQWQsQ0FBcUJQLEtBQXJCLENBQVQ7QUFBQSw2QkFEMEI7QUFFL0JRLGlDQUFLO0FBQUEsdUNBQU1vQixhQUFOO0FBQUE7QUFGMEIseUJBQW5DO0FBSEc7QUFPTjtBQUNKO0FBQ0o7O0FBRUQsZUFBT0YsS0FBUDtBQUNIOztBQUVELFdBQU9ELFVBQVVELE1BQVYsQ0FBUDtBQUNIOztBQUVNLFNBQVMvQixHQUFULENBQWF5QixRQUFiLEVBQXVCO0FBQzFCLFdBQU9KLFlBQVlpQixNQUFaLENBQW1CYixRQUFuQixDQUFQO0FBQ0gsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY1NDNhNTM3YjI5NTFmODIzOGEzIiwiaW1wb3J0IHsgZG9tLCB2YWwsIG9iaiB9IGZyb20gJy4vYmluZCc7XG5cbmxldCB2YXJpYWJsZSA9IHZhbCgnVEVTVCAnKS5iaW5kKFxuICAgIGRvbSgnI2ZpcnN0JyksXG4gICAgZG9tKCcjc2Vjb25kJyksXG4gICAgZG9tKCcjdGhpcmQnKVxuKTtcblxubGV0IHRpbWUgPSAwO1xuc2V0SW50ZXJ2YWwoXyA9PiB2YXJpYWJsZS5hcHBlbmQoYCR7IHRpbWUrKyB9IGApLCA1MDApO1xuXG5sZXQgbW9kZWwgPSBvYmooe1xuICAgIGZvbzoge1xuICAgICAgICBiYXI6ICdoZWxsbycsXG4gICAgICAgIGJhejogJ3dvcmxkJ1xuICAgIH0sXG4gICAgbW9vOiA2NjZcbn0pO1xuXG5tb2RlbC5mb28uYmFyLmJpbmQoZG9tKCcjZm9vJykpO1xubW9kZWwubW9vLmJpbmQoZG9tKCcjbW9vJyksIG1vZGVsLmZvby5iYXopO1xubW9kZWwuZm9vLmJhei5iaW5kKGRvbSgnI2JhcicpKTtcblxuY29uc29sZS5sb2cobW9kZWwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiZXhwb3J0IGNsYXNzIEJyb2FkY2FzdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIFxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgIH1cbiAgICBcbiAgICB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpO1xuICAgIH1cbiAgICBcbiAgICBub3RpZnkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlci51cGRhdGUodmFsdWUpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEJyb2FkY2FzdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBpbml0aWFsO1xuICAgIH1cbiAgICBcbiAgICBjaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKHRoaXMuZ2V0KCkgKyB2YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBiaW5kKC4uLnZhcmlhYmxlcykge1xuICAgICAgICBCaW5kLmFsbCguLi52YXJpYWJsZXMpLndpdGgodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmQge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWwpIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBpbml0aWFsO1xuICAgIH1cbiAgICBcbiAgICBhZGQoLi4udmFyaWFibGVzKSB7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gbmV3IFNldChbLi4udGhpcy52YXJpYWJsZXMsIC4uLm5ldyBTZXQodmFyaWFibGVzKV0pO1xuICAgICAgICB2YXJpYWJsZXMuZm9yRWFjaCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICB2YXJpYWJsZS5jaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0geyB1cGRhdGU6IHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlcy5kZWxldGUodmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlcy5hZGQodmFyaWFibGUpO1xuICAgICAgICAgICAgfX07XG4gICAgICAgICAgICB2YXJpYWJsZS5zdWJzY3JpYmUodGhpcy5vYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgd2l0aCh2YXJpYWJsZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFyaWFibGUuZ2V0KCk7XG4gICAgICAgIHRoaXMuYWRkKHZhcmlhYmxlKTtcbiAgICAgICAgdGhpcy5jaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIGNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFyaWFibGVzLmZvckVhY2godmFyaWFibGUgPT4gdmFyaWFibGUuY2hhbmdlKHZhbHVlKSk7XG4gICAgfVxuICAgIFxuICAgIGdldCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGFsbCguLi52YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kKCkuYWRkKC4uLnZhcmlhYmxlcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9tVmFyaWFibGUgZXh0ZW5kcyBWYXJpYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgaW5pdGlhbCkge1xuICAgICAgICBzdXBlcihpbml0aWFsKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JyxcbiAgICAgICAgICAgICh7IHRhcmdldCB9KSA9PiB0aGlzLmNoYW5nZSh0YXJnZXQudmFsdWUpKTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHNlbGVjdChzZWxlY3Rvcikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IERvbVZhcmlhYmxlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgaWQoaWRlbnRpZmllcikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gbmV3IERvbVZhcmlhYmxlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB2YWwodmFsdWUsIC4uLmJpbmRzKSB7XG4gICAgcmV0dXJuIG5ldyBWYXJpYWJsZSh2YWx1ZSkuYmluZCguLi5iaW5kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmoob2JqZWN0KSB7XG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlKG9iamVjdCkge1xuICAgICAgICBsZXQgcHJveHkgPSBvYmplY3Q7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtuYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlbbmFtZV0gPSByZWN1cnNpdmUob2JqZWN0W25hbWVdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZWRWYXJpYWJsZSA9IG5ldyBWYXJpYWJsZShvYmplY3RbbmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBwcm94eVtuYW1lXSA9IG5hbWVkVmFyaWFibGU7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiB2YWx1ZSA9PiBuYW1lZFZhcmlhYmxlLmNoYW5nZSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IG5hbWVkVmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZWN1cnNpdmUob2JqZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbShzZWxlY3Rvcikge1xuICAgIHJldHVybiBEb21WYXJpYWJsZS5zZWxlY3Qoc2VsZWN0b3IpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JpbmQuanMiXSwic291cmNlUm9vdCI6IiJ9