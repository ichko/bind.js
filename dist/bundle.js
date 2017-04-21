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
                proxy[name] = recursive(object[name]);
            }
        } else {
            return val(object);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTkzZDg1MzY1MzViNjkzZmVkMjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kLmpzIl0sIm5hbWVzIjpbInZhcmlhYmxlIiwiYmluZCIsInRpbWUiLCJzZXRJbnRlcnZhbCIsImFwcGVuZCIsIm1vZGVsIiwiZm9vIiwiYmFyIiwiYmF6IiwibW9vIiwiY29uc29sZSIsImxvZyIsInZhbCIsIm9iaiIsImRvbSIsIkJyb2FkY2FzdGVyIiwib2JzZXJ2ZXJzIiwiU2V0Iiwib2JzZXJ2ZXIiLCJhZGQiLCJkZWxldGUiLCJ2YWx1ZSIsImZvckVhY2giLCJ1cGRhdGUiLCJWYXJpYWJsZSIsImluaXRpYWwiLCJzZXQiLCJub3RpZnkiLCJjaGFuZ2UiLCJnZXQiLCJCaW5kIiwiYWxsIiwid2l0aCIsInZhcmlhYmxlcyIsInN1YnNjcmliZSIsIkRvbVZhcmlhYmxlIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlkZW50aWZpZXIiLCJnZXRFbGVtZW50QnlJZCIsImJpbmRzIiwib2JqZWN0IiwicmVjdXJzaXZlIiwicHJveHkiLCJuYW1lIiwic2VsZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtB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aWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1OTNkODUzNjUzNWI2OTNmZWQyOCIsImltcG9ydCB7IGRvbSwgdmFsLCBvYmogfSBmcm9tICcuL2JpbmQnO1xuXG5sZXQgdmFyaWFibGUgPSB2YWwoJ1RFU1QgJykuYmluZChcbiAgICBkb20oJyNmaXJzdCcpLFxuICAgIGRvbSgnI3NlY29uZCcpLFxuICAgIGRvbSgnI3RoaXJkJylcbik7XG5cbmxldCB0aW1lID0gMDtcbnNldEludGVydmFsKF8gPT4gdmFyaWFibGUuYXBwZW5kKGAkeyB0aW1lKysgfSBgKSwgNTAwKTtcblxubGV0IG1vZGVsID0gb2JqKHtcbiAgICBmb286IHtcbiAgICAgICAgYmFyOiAnaGVsbG8nLFxuICAgICAgICBiYXo6ICd3b3JsZCdcbiAgICB9LFxuICAgIG1vbzogNjY2XG59KTtcblxubW9kZWwuZm9vLmJhci5iaW5kKGRvbSgnI2ZvbycpKTtcbm1vZGVsLm1vby5iaW5kKGRvbSgnI21vbycpLCBtb2RlbC5mb28uYmF6KTtcbm1vZGVsLmZvby5iYXouYmluZChkb20oJyNiYXInKSk7XG5cbmNvbnNvbGUubG9nKG1vZGVsKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCBjbGFzcyBCcm9hZGNhc3RlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICB9XG4gICAgXG4gICAgdW5zdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICB9XG4gICAgXG4gICAgbm90aWZ5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIudXBkYXRlKHZhbHVlKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBCcm9hZGNhc3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5pdGlhbDtcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSh0aGlzLmdldCgpICsgdmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgYmluZCguLi52YXJpYWJsZXMpIHtcbiAgICAgICAgQmluZC5hbGwoLi4udmFyaWFibGVzKS53aXRoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsKSB7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5pdGlhbDtcbiAgICB9XG4gICAgXG4gICAgYWRkKC4uLnZhcmlhYmxlcykge1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IG5ldyBTZXQoWy4uLnRoaXMudmFyaWFibGVzLCAuLi5uZXcgU2V0KHZhcmlhYmxlcyldKTtcbiAgICAgICAgdmFyaWFibGVzLmZvckVhY2godmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgdmFyaWFibGUuY2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IHsgdXBkYXRlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZXMuZGVsZXRlKHZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZXMuYWRkKHZhcmlhYmxlKTtcbiAgICAgICAgICAgIH19O1xuICAgICAgICAgICAgdmFyaWFibGUuc3Vic2NyaWJlKHRoaXMub2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHdpdGgodmFyaWFibGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhcmlhYmxlLmdldCgpO1xuICAgICAgICB0aGlzLmFkZCh2YXJpYWJsZSk7XG4gICAgICAgIHRoaXMuY2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICBjaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhcmlhYmxlcy5mb3JFYWNoKHZhcmlhYmxlID0+IHZhcmlhYmxlLmNoYW5nZSh2YWx1ZSkpO1xuICAgIH1cbiAgICBcbiAgICBnZXQoKSB7XG4gICAgICAgIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBhbGwoLi4udmFyaWFibGVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZCgpLmFkZCguLi52YXJpYWJsZXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvbVZhcmlhYmxlIGV4dGVuZHMgVmFyaWFibGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGluaXRpYWwpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsXG4gICAgICAgICAgICAoeyB0YXJnZXQgfSkgPT4gdGhpcy5jaGFuZ2UodGFyZ2V0LnZhbHVlKSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBzZWxlY3Qoc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEb21WYXJpYWJsZShlbGVtZW50KTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGlkKGlkZW50aWZpZXIpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZGVudGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEb21WYXJpYWJsZShlbGVtZW50KTtcbiAgICB9XG4gICAgXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdmFsKHZhbHVlLCAuLi5iaW5kcykge1xuICAgIHJldHVybiBuZXcgVmFyaWFibGUodmFsdWUpLmJpbmQoLi4uYmluZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqKG9iamVjdCkge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZShvYmplY3QpIHtcbiAgICAgICAgbGV0IHByb3h5ID0gb2JqZWN0O1xuICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJveHlbbmFtZV0gPSByZWN1cnNpdmUob2JqZWN0W25hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwob2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVjdXJzaXZlKG9iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gRG9tVmFyaWFibGUuc2VsZWN0KHNlbGVjdG9yKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iaW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==