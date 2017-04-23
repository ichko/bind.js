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

model.moo = Array(4).join('wat' - 1);
(0, _bind.dom)('#foo').append(' Batman!');

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
            if (this.element.value != value) {
                this.element.value = this.value = value;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjUzZWRlNTNhNGE5OTQ4Njc5NTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kLmpzIl0sIm5hbWVzIjpbInZhcmlhYmxlIiwiYmluZCIsInRpbWUiLCJzZXRJbnRlcnZhbCIsImFwcGVuZCIsIm1vZGVsIiwiZm9vIiwiYmFyIiwiYmF6IiwibW9vIiwiQXJyYXkiLCJqb2luIiwiY29uc29sZSIsImxvZyIsInZhbCIsIm9iaiIsImRvbSIsIkJyb2FkY2FzdGVyIiwib2JzZXJ2ZXJzIiwiU2V0Iiwib2JzZXJ2ZXIiLCJhZGQiLCJkZWxldGUiLCJ2YWx1ZSIsImZvckVhY2giLCJ1cGRhdGUiLCJWYXJpYWJsZSIsImluaXRpYWwiLCJzZXQiLCJub3RpZnkiLCJjaGFuZ2UiLCJnZXQiLCJCaW5kIiwiYWxsIiwid2l0aCIsInZhcmlhYmxlcyIsInN1YnNjcmliZSIsIkRvbVZhcmlhYmxlIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlkZW50aWZpZXIiLCJnZXRFbGVtZW50QnlJZCIsImJpbmRzIiwib2JqZWN0IiwicmVjdXJzaXZlIiwicHJveHkiLCJuYW1lIiwibmFtZWRWYXJpYWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZG9tVmFyaWFibGVzIiwic2VsZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFD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QTVCLEVBQXNDO0FBQ2xDRCwwQkFBTUMsSUFBTixJQUFjRixVQUFVRCxPQUFPRyxJQUFQLENBQVYsQ0FBZDtBQUNILGlCQUZELE1BRU87QUFBQTtBQUNILDRCQUFJQyxnQkFBZ0IsSUFBSXpCLFFBQUosQ0FBYXFCLE9BQU9HLElBQVAsQ0FBYixDQUFwQjtBQUNBRCw4QkFBTUMsSUFBTixJQUFjQyxhQUFkO0FBQ0FDLCtCQUFPQyxjQUFQLENBQXNCSixLQUF0QixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDL0J0QixpQ0FBSztBQUFBLHVDQUFTdUIsY0FBY3JCLE1BQWQsQ0FBcUJQLEtBQXJCLENBQVQ7QUFBQSw2QkFEMEI7QUFFL0JRLGlDQUFLO0FBQUEsdUNBQU1vQixhQUFOO0FBQUE7QUFGMEIseUJBQW5DO0FBSEc7QUFPTjtBQUNKO0FBQ0o7O0FBRUQsZUFBT0YsS0FBUDtBQUNIOztBQUVELFdBQU9ELFVBQVVELE1BQVYsQ0FBUDtBQUNIOztBQUVELElBQUlPLGVBQWUsRUFBbkI7O0FBRU8sU0FBU3RDLEdBQVQsQ0FBYXlCLFFBQWIsRUFBdUI7QUFDMUIsUUFBSSxDQUFDYSxhQUFhYixRQUFiLENBQUwsRUFBNkI7QUFDekJhLHFCQUFhYixRQUFiLElBQXlCSixZQUFZa0IsTUFBWixDQUFtQmQsUUFBbkIsQ0FBekI7QUFDSDs7QUFFRCxXQUFPYSxhQUFhYixRQUFiLENBQVA7QUFDSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjUzZWRlNTNhNGE5OTQ4Njc5NTIiLCJpbXBvcnQgeyBkb20sIHZhbCwgb2JqIH0gZnJvbSAnLi9iaW5kJztcblxubGV0IHZhcmlhYmxlID0gdmFsKCdURVNUICcpLmJpbmQoXG4gICAgZG9tKCcjZmlyc3QnKSxcbiAgICBkb20oJyNzZWNvbmQnKSxcbiAgICBkb20oJyN0aGlyZCcpXG4pO1xuXG5sZXQgdGltZSA9IDA7XG5zZXRJbnRlcnZhbChfID0+IHZhcmlhYmxlLmFwcGVuZChgJHsgdGltZSsrIH0gYCksIDUwMCk7XG5cbmxldCBtb2RlbCA9IG9iaih7XG4gICAgZm9vOiB7XG4gICAgICAgIGJhcjogJ2hlbGxvJyxcbiAgICAgICAgYmF6OiAnd29ybGQnXG4gICAgfSxcbiAgICBtb286IDY2NlxufSk7XG5cbm1vZGVsLmZvby5iYXIuYmluZChkb20oJyNmb28nKSwgZG9tKCcjYmFyJykpO1xubW9kZWwuZm9vLmJhei5iaW5kKGRvbSgnI21vbycpLCBkb20oJyNiYXInKSwgbW9kZWwubW9vKTtcblxubW9kZWwubW9vID0gQXJyYXkoNCkuam9pbignd2F0JyAtIDEpO1xuZG9tKCcjZm9vJykuYXBwZW5kKCcgQmF0bWFuIScpO1xuXG5jb25zb2xlLmxvZyhtb2RlbCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgY2xhc3MgQnJvYWRjYXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgXG4gICAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmFkZChvYnNlcnZlcik7XG4gICAgfVxuICAgIFxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcik7XG4gICAgfVxuICAgIFxuICAgIG5vdGlmeSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IG9ic2VydmVyLnVwZGF0ZSh2YWx1ZSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgQnJvYWRjYXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGluaXRpYWw7XG4gICAgfVxuICAgIFxuICAgIGNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGFwcGVuZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UodGhpcy5nZXQoKSArIHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGJpbmQoLi4udmFyaWFibGVzKSB7XG4gICAgICAgIEJpbmQuYWxsKC4uLnZhcmlhYmxlcykud2l0aCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluZCB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbCkge1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGluaXRpYWw7XG4gICAgfVxuICAgIFxuICAgIGFkZCguLi52YXJpYWJsZXMpIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMgPSBuZXcgU2V0KFsuLi50aGlzLnZhcmlhYmxlcywgLi4ubmV3IFNldCh2YXJpYWJsZXMpXSk7XG4gICAgICAgIHZhcmlhYmxlcy5mb3JFYWNoKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgIHZhcmlhYmxlLmNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSB7IHVwZGF0ZTogdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVzLmRlbGV0ZSh2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVzLmFkZCh2YXJpYWJsZSk7XG4gICAgICAgICAgICB9fTtcbiAgICAgICAgICAgIHZhcmlhYmxlLnN1YnNjcmliZSh0aGlzLm9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICB3aXRoKHZhcmlhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YXJpYWJsZS5nZXQoKTtcbiAgICAgICAgdGhpcy5hZGQodmFyaWFibGUpO1xuICAgICAgICB0aGlzLmNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMuZm9yRWFjaCh2YXJpYWJsZSA9PiB2YXJpYWJsZS5jaGFuZ2UodmFsdWUpKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0KCkge1xuICAgICAgICB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgYWxsKC4uLnZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gbmV3IEJpbmQoKS5hZGQoLi4udmFyaWFibGVzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb21WYXJpYWJsZSBleHRlbmRzIFZhcmlhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBpbml0aWFsKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWwpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLFxuICAgICAgICAgICAgKHsgdGFyZ2V0IH0pID0+IHRoaXMuY2hhbmdlKHRhcmdldC52YWx1ZSkpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgc2VsZWN0KHNlbGVjdG9yKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgRG9tVmFyaWFibGUoZWxlbWVudCk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBpZChpZGVudGlmaWVyKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRlbnRpZmllcik7XG4gICAgICAgIHJldHVybiBuZXcgRG9tVmFyaWFibGUoZWxlbWVudCk7XG4gICAgfVxuICAgIFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnZhbHVlICE9IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsKHZhbHVlLCAuLi5iaW5kcykge1xuICAgIHJldHVybiBuZXcgVmFyaWFibGUodmFsdWUpLmJpbmQoLi4uYmluZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqKG9iamVjdCkge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZShvYmplY3QpIHtcbiAgICAgICAgbGV0IHByb3h5ID0gb2JqZWN0O1xuICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RbbmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W25hbWVdID0gcmVjdXJzaXZlKG9iamVjdFtuYW1lXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVkVmFyaWFibGUgPSBuZXcgVmFyaWFibGUob2JqZWN0W25hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlbbmFtZV0gPSBuYW1lZFZhcmlhYmxlO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJveHksIG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogdmFsdWUgPT4gbmFtZWRWYXJpYWJsZS5jaGFuZ2UodmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiBuYW1lZFZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVjdXJzaXZlKG9iamVjdCk7XG59XG5cbmxldCBkb21WYXJpYWJsZXMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbShzZWxlY3Rvcikge1xuICAgIGlmICghZG9tVmFyaWFibGVzW3NlbGVjdG9yXSkge1xuICAgICAgICBkb21WYXJpYWJsZXNbc2VsZWN0b3JdID0gRG9tVmFyaWFibGUuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tVmFyaWFibGVzW3NlbGVjdG9yXTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmluZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=