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

model.foo.bar.bind((0, _bind.dom)('#foo'), (0, _bind.dom)('#bar'));
model.foo.baz.bind((0, _bind.dom)('#moo'), (0, _bind.dom)('#bar'), model.moo);

model.moo = 'test';
(0, _bind.dom)('#bar').append(' world');

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

var domVariables = {};

function dom(selector) {
    if (!domVariables[selector]) {
        domVariables[selector] = DomVariable.select(selector);
    }

    return domVariables[selector];
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmZTA0YmYxNDVjOThlNDZkMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kLmpzIl0sIm5hbWVzIjpbInZhcmlhYmxlIiwiYmluZCIsInRpbWUiLCJzZXRJbnRlcnZhbCIsImFwcGVuZCIsIm1vZGVsIiwiZm9vIiwiYmFyIiwiYmF6IiwibW9vIiwiY29uc29sZSIsImxvZyIsInZhbCIsIm9iaiIsImRvbSIsIkJyb2FkY2FzdGVyIiwib2JzZXJ2ZXJzIiwiU2V0Iiwib2JzZXJ2ZXIiLCJhZGQiLCJkZWxldGUiLCJ2YWx1ZSIsImZvckVhY2giLCJ1cGRhdGUiLCJWYXJpYWJsZSIsImluaXRpYWwiLCJzZXQiLCJub3RpZnkiLCJjaGFuZ2UiLCJnZXQiLCJCaW5kIiwiYWxsIiwid2l0aCIsInZhcmlhYmxlcyIsInN1YnNjcmliZSIsIkRvbVZhcmlhYmxlIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlkZW50aWZpZXIiLCJnZXRFbGVtZW50QnlJZCIsImJpbmRzIiwib2JqZWN0IiwicmVjdXJzaXZlIiwicHJveHkiLCJuYW1lIiwibmFtZWRWYXJpYWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZG9tVmFyaWFibGVzIiwic2VsZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUEsSUFBSUEsV0FBVyxlQUFJLE9BQUosRUFBYUMsSUFBYixDQUNYLGVBQUksUUFBSixDQURXLEVBRVgsZUFBSSxTQUFKLENBRlcsRUFHWCxlQUFJLFFBQUosQ0FIVyxDQUFmOztBQU1BLElBQUlDLE9BQU8sQ0FBWDtBQUNBQyxZQUFZO0FBQUEsV0FBS0gsU0FBU0ksTUFBVCxDQUFvQkYsTUFBcEIsT0FBTDtBQUFBLENBQVosRUFBa0QsR0FBbEQ7O0FBRUEsSUFBSUcsUUFBUSxlQUFJO0FBQ1pDLFNBQUs7QUFDREMsYUFBSyxPQURKO0FBRURDLGFBQUs7QUFGSixLQURPO0FBS1pDLFNBQUs7QUFMTyxDQUFKLENBQVo7O0FBUUFKLE1BQU1DLEdBQU4sQ0FBVUMsR0FBVixDQUFjTixJQUFkLENBQW1CLGVBQUksTUFBSixDQUFuQixFQUFnQyxlQUFJLE1BQUosQ0FBaEM7QUFDQUksTUFBTUMsR0FBTixDQUFVRSxHQUFWLENBQWNQLElBQWQsQ0FBbUIsZUFBSSxNQUFKLENBQW5CLEVBQWdDLGVBQUksTUFBSixDQUFoQyxFQUE2Q0ksTUFBTUksR0FBbkQ7O0FBRUFKLE1BQU1JLEdBQU4sR0FBWSxNQUFaO0FBQ0EsZUFBSSxNQUFKLEVBQVlMLE1BQVosQ0FBbUIsUUFBbkI7O0FBRUFNLFFBQVFDLEdBQVIsQ0FBWU4sS0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7OztRQzhGZ0JPLEcsR0FBQUEsRztRQUlBQyxHLEdBQUFBLEc7UUEwQkFDLEcsR0FBQUEsRzs7Ozs7Ozs7OztJQXJKSEMsVyxXQUFBQSxXO0FBQ1QsMkJBQWM7QUFBQTs7QUFDVixhQUFLQyxTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFDSDs7OztrQ0FFU0MsUSxFQUFVO0FBQ2hCLGlCQUFLRixTQUFMLENBQWVHLEdBQWYsQ0FBbUJELFFBQW5CO0FBQ0g7OztvQ0FFV0EsUSxFQUFVO0FBQ2xCLGlCQUFLRixTQUFMLENBQWVJLE1BQWYsQ0FBc0JGLFFBQXRCO0FBQ0g7OzsrQkFFTUcsSyxFQUFPO0FBQ1YsaUJBQUtMLFNBQUwsQ0FBZU0sT0FBZixDQUF1QjtBQUFBLHVCQUFZSixTQUFTSyxNQUFULENBQWdCRixLQUFoQixDQUFaO0FBQUEsYUFBdkI7QUFDSDs7Ozs7O0lBR1FHLFEsV0FBQUEsUTs7O0FBQ1Qsc0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFFakIsY0FBS0osS0FBTCxHQUFhSSxPQUFiO0FBRmlCO0FBR3BCOzs7OytCQUVNSixLLEVBQU87QUFDVixnQkFBSUEsU0FBUyxLQUFLQSxLQUFsQixFQUF5QjtBQUNyQixxQkFBS0ssR0FBTCxDQUFTTCxLQUFUO0FBQ0EscUJBQUtNLE1BQUwsQ0FBWU4sS0FBWjtBQUNIOztBQUVELG1CQUFPLElBQVA7QUFDSDs7OytCQUVNQSxLLEVBQU87QUFDVixtQkFBTyxLQUFLTyxNQUFMLENBQVksS0FBS0MsR0FBTCxLQUFhUixLQUF6QixDQUFQO0FBQ0g7Ozs0QkFFR0EsSyxFQUFPO0FBQ1AsaUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLG1CQUFPLElBQVA7QUFDSDs7OzhCQUVLO0FBQ0YsbUJBQU8sS0FBS0EsS0FBWjtBQUNIOzs7K0JBRWtCO0FBQ2ZTLGlCQUFLQyxHQUFMLHdCQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7Ozs7RUEvQnlCakIsVzs7SUFrQ2pCZSxJLFdBQUFBLEk7QUFDVCxrQkFBWUwsT0FBWixFQUFxQjtBQUFBOztBQUNqQixhQUFLUSxTQUFMLEdBQWlCLElBQUloQixHQUFKLEVBQWpCO0FBQ0EsYUFBS0ksS0FBTCxHQUFhSSxPQUFiO0FBQ0g7Ozs7OEJBRWlCO0FBQUE7O0FBQUEsOENBQVhRLFNBQVc7QUFBWEEseUJBQVc7QUFBQTs7QUFDZCxpQkFBS0EsU0FBTCxHQUFpQixJQUFJaEIsR0FBSiw4QkFBWSxLQUFLZ0IsU0FBakIsc0JBQStCLElBQUloQixHQUFKLENBQVFnQixTQUFSLENBQS9CLEdBQWpCO0FBQ0FBLHNCQUFVWCxPQUFWLENBQWtCLG9CQUFZO0FBQzFCdEIseUJBQVM0QixNQUFULENBQWdCLE9BQUtQLEtBQXJCO0FBQ0EsdUJBQUtILFFBQUwsR0FBZ0IsRUFBRUssUUFBUSx1QkFBUztBQUMvQiwrQkFBS1UsU0FBTCxDQUFlYixNQUFmLENBQXNCcEIsUUFBdEI7QUFDQSwrQkFBSzRCLE1BQUwsQ0FBWVAsS0FBWjtBQUNBLCtCQUFLWSxTQUFMLENBQWVkLEdBQWYsQ0FBbUJuQixRQUFuQjtBQUNILHFCQUplLEVBQWhCO0FBS0FBLHlCQUFTa0MsU0FBVCxDQUFtQixPQUFLaEIsUUFBeEI7QUFDSCxhQVJEOztBQVVBLG1CQUFPLElBQVA7QUFDSDs7OzhCQUVJbEIsUSxFQUFVO0FBQ1gsaUJBQUtxQixLQUFMLEdBQWFyQixTQUFTNkIsR0FBVCxFQUFiO0FBQ0EsaUJBQUtWLEdBQUwsQ0FBU25CLFFBQVQ7QUFDQSxpQkFBSzRCLE1BQUwsQ0FBWSxLQUFLUCxLQUFqQjtBQUNIOzs7K0JBRU1BLEssRUFBTztBQUNWLGlCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxpQkFBS1ksU0FBTCxDQUFlWCxPQUFmLENBQXVCO0FBQUEsdUJBQVl0QixTQUFTNEIsTUFBVCxDQUFnQlAsS0FBaEIsQ0FBWjtBQUFBLGFBQXZCO0FBQ0g7Ozs4QkFFSztBQUNGLGlCQUFLQSxLQUFMO0FBQ0g7Ozs4QkFFd0I7QUFBQTs7QUFDckIsbUJBQU8sWUFBSVMsSUFBSixJQUFXWCxHQUFYLHVCQUFQO0FBQ0g7Ozs7OztJQUdRZ0IsVyxXQUFBQSxXOzs7QUFDVCx5QkFBWUMsT0FBWixFQUFxQlgsT0FBckIsRUFBOEI7QUFBQTs7QUFBQSwrSEFDcEJBLE9BRG9COztBQUUxQixlQUFLVyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxlQUFLQSxPQUFMLENBQWFDLGdCQUFiLENBQThCLE9BQTlCLEVBQ0k7QUFBQSxnQkFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsbUJBQWdCLE9BQUtWLE1BQUwsQ0FBWVUsT0FBT2pCLEtBQW5CLENBQWhCO0FBQUEsU0FESjtBQUgwQjtBQUs3Qjs7Ozs0QkFZR0EsSyxFQUFPO0FBQ1AsaUJBQUtlLE9BQUwsQ0FBYWYsS0FBYixHQUFxQkEsS0FBckI7QUFDQSxpQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOzs7K0JBZGFrQixRLEVBQVU7QUFDcEIsZ0JBQUlILFVBQVVJLFNBQVNDLGFBQVQsQ0FBdUJGLFFBQXZCLENBQWQ7QUFDQSxtQkFBTyxJQUFJSixXQUFKLENBQWdCQyxPQUFoQixDQUFQO0FBQ0g7OzsyQkFFU00sVSxFQUFZO0FBQ2xCLGdCQUFJTixVQUFVSSxTQUFTRyxjQUFULENBQXdCRCxVQUF4QixDQUFkO0FBQ0EsbUJBQU8sSUFBSVAsV0FBSixDQUFnQkMsT0FBaEIsQ0FBUDtBQUNIOzs7O0VBaEI0QlosUTs7QUEwQjFCLFNBQVNaLEdBQVQsQ0FBYVMsS0FBYixFQUE4QjtBQUFBOztBQUFBLHVDQUFQdUIsS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQ2pDLFdBQU8sYUFBSXBCLFFBQUosQ0FBYUgsS0FBYixHQUFvQnBCLElBQXBCLGNBQTRCMkMsS0FBNUIsQ0FBUDtBQUNIOztBQUVNLFNBQVMvQixHQUFULENBQWFnQyxNQUFiLEVBQXFCO0FBQ3hCLGFBQVNDLFNBQVQsQ0FBbUJELE1BQW5CLEVBQTJCO0FBQ3ZCLFlBQUlFLFFBQVFGLE1BQVo7QUFDQSxZQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUIsaUJBQUssSUFBSUcsSUFBVCxJQUFpQkgsTUFBakIsRUFBeUI7QUFDckIsb0JBQUksUUFBT0EsT0FBT0csSUFBUCxDQUFQLE1BQXdCLFFBQTVCLEVBQXNDO0FBQ2xDRCwwQkFBTUMsSUFBTixJQUFjRixVQUFVRCxPQUFPRyxJQUFQLENBQVYsQ0FBZDtBQUNILGlCQUZELE1BRU87QUFBQTtBQUNILDRCQUFJQyxnQkFBZ0IsSUFBSXpCLFFBQUosQ0FBYXFCLE9BQU9HLElBQVAsQ0FBYixDQUFwQjtBQUNBRCw4QkFBTUMsSUFBTixJQUFjQyxhQUFkO0FBQ0FDLCtCQUFPQyxjQUFQLENBQXNCSixLQUF0QixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDL0J0QixpQ0FBSztBQUFBLHVDQUFTdUIsY0FBY3JCLE1BQWQsQ0FBcUJQLEtBQXJCLENBQVQ7QUFBQSw2QkFEMEI7QUFFL0JRLGlDQUFLO0FBQUEsdUNBQU1vQixhQUFOO0FBQUE7QUFGMEIseUJBQW5DO0FBSEc7QUFPTjtBQUNKO0FBQ0o7O0FBRUQsZUFBT0YsS0FBUDtBQUNIOztBQUVELFdBQU9ELFVBQVVELE1BQVYsQ0FBUDtBQUNIOztBQUVELElBQUlPLGVBQWUsRUFBbkI7O0FBRU8sU0FBU3RDLEdBQVQsQ0FBYXlCLFFBQWIsRUFBdUI7QUFDMUIsUUFBSSxDQUFDYSxhQUFhYixRQUFiLENBQUwsRUFBNkI7QUFDekJhLHFCQUFhYixRQUFiLElBQXlCSixZQUFZa0IsTUFBWixDQUFtQmQsUUFBbkIsQ0FBekI7QUFDSDs7QUFFRCxXQUFPYSxhQUFhYixRQUFiLENBQVA7QUFDSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDlmZTA0YmYxNDVjOThlNDZkMzkiLCJpbXBvcnQgeyBkb20sIHZhbCwgb2JqIH0gZnJvbSAnLi9iaW5kJztcblxubGV0IHZhcmlhYmxlID0gdmFsKCdURVNUICcpLmJpbmQoXG4gICAgZG9tKCcjZmlyc3QnKSxcbiAgICBkb20oJyNzZWNvbmQnKSxcbiAgICBkb20oJyN0aGlyZCcpXG4pO1xuXG5sZXQgdGltZSA9IDA7XG5zZXRJbnRlcnZhbChfID0+IHZhcmlhYmxlLmFwcGVuZChgJHsgdGltZSsrIH0gYCksIDUwMCk7XG5cbmxldCBtb2RlbCA9IG9iaih7XG4gICAgZm9vOiB7XG4gICAgICAgIGJhcjogJ2hlbGxvJyxcbiAgICAgICAgYmF6OiAnd29ybGQnXG4gICAgfSxcbiAgICBtb286IDY2NlxufSk7XG5cbm1vZGVsLmZvby5iYXIuYmluZChkb20oJyNmb28nKSwgZG9tKCcjYmFyJykpO1xubW9kZWwuZm9vLmJhei5iaW5kKGRvbSgnI21vbycpLCBkb20oJyNiYXInKSwgbW9kZWwubW9vKTtcblxubW9kZWwubW9vID0gJ3Rlc3QnO1xuZG9tKCcjYmFyJykuYXBwZW5kKCcgd29ybGQnKTtcblxuY29uc29sZS5sb2cobW9kZWwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiZXhwb3J0IGNsYXNzIEJyb2FkY2FzdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIFxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgIH1cbiAgICBcbiAgICB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpO1xuICAgIH1cbiAgICBcbiAgICBub3RpZnkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlci51cGRhdGUodmFsdWUpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEJyb2FkY2FzdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBpbml0aWFsO1xuICAgIH1cbiAgICBcbiAgICBjaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKHRoaXMuZ2V0KCkgKyB2YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBiaW5kKC4uLnZhcmlhYmxlcykge1xuICAgICAgICBCaW5kLmFsbCguLi52YXJpYWJsZXMpLndpdGgodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmQge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWwpIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBpbml0aWFsO1xuICAgIH1cbiAgICBcbiAgICBhZGQoLi4udmFyaWFibGVzKSB7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gbmV3IFNldChbLi4udGhpcy52YXJpYWJsZXMsIC4uLm5ldyBTZXQodmFyaWFibGVzKV0pO1xuICAgICAgICB2YXJpYWJsZXMuZm9yRWFjaCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICB2YXJpYWJsZS5jaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0geyB1cGRhdGU6IHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlcy5kZWxldGUodmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlcy5hZGQodmFyaWFibGUpO1xuICAgICAgICAgICAgfX07XG4gICAgICAgICAgICB2YXJpYWJsZS5zdWJzY3JpYmUodGhpcy5vYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgd2l0aCh2YXJpYWJsZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFyaWFibGUuZ2V0KCk7XG4gICAgICAgIHRoaXMuYWRkKHZhcmlhYmxlKTtcbiAgICAgICAgdGhpcy5jaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIGNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFyaWFibGVzLmZvckVhY2godmFyaWFibGUgPT4gdmFyaWFibGUuY2hhbmdlKHZhbHVlKSk7XG4gICAgfVxuICAgIFxuICAgIGdldCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGFsbCguLi52YXJpYWJsZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kKCkuYWRkKC4uLnZhcmlhYmxlcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9tVmFyaWFibGUgZXh0ZW5kcyBWYXJpYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgaW5pdGlhbCkge1xuICAgICAgICBzdXBlcihpbml0aWFsKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JyxcbiAgICAgICAgICAgICh7IHRhcmdldCB9KSA9PiB0aGlzLmNoYW5nZSh0YXJnZXQudmFsdWUpKTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHNlbGVjdChzZWxlY3Rvcikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IERvbVZhcmlhYmxlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgaWQoaWRlbnRpZmllcikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gbmV3IERvbVZhcmlhYmxlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB2YWwodmFsdWUsIC4uLmJpbmRzKSB7XG4gICAgcmV0dXJuIG5ldyBWYXJpYWJsZSh2YWx1ZSkuYmluZCguLi5iaW5kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmoob2JqZWN0KSB7XG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlKG9iamVjdCkge1xuICAgICAgICBsZXQgcHJveHkgPSBvYmplY3Q7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtuYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlbbmFtZV0gPSByZWN1cnNpdmUob2JqZWN0W25hbWVdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZWRWYXJpYWJsZSA9IG5ldyBWYXJpYWJsZShvYmplY3RbbmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBwcm94eVtuYW1lXSA9IG5hbWVkVmFyaWFibGU7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiB2YWx1ZSA9PiBuYW1lZFZhcmlhYmxlLmNoYW5nZSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IG5hbWVkVmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZWN1cnNpdmUob2JqZWN0KTtcbn1cblxubGV0IGRvbVZhcmlhYmxlcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZG9tKHNlbGVjdG9yKSB7XG4gICAgaWYgKCFkb21WYXJpYWJsZXNbc2VsZWN0b3JdKSB7XG4gICAgICAgIGRvbVZhcmlhYmxlc1tzZWxlY3Rvcl0gPSBEb21WYXJpYWJsZS5zZWxlY3Qoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21WYXJpYWJsZXNbc2VsZWN0b3JdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JpbmQuanMiXSwic291cmNlUm9vdCI6IiJ9