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

var model = (0, _bind.val)('TEST ').bind((0, _bind.dom)('#first'), (0, _bind.dom)('#second'), (0, _bind.dom)('#third'));

var time = 0;
setInterval(function (_) {
    return model.append(time++ + ' ');
}, 500);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.val = val;
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
            this.set(value);
            this.notify(value);
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
                variable.subscribe({ update: function update(value) {
                        _this2.variables.delete(variable);
                        _this2.change(value);
                        _this2.variables.add(variable);
                    } });
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
                return variable.set(value);
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

function dom(selector) {
    return DomVariable.select(selector);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGE0NWU2MzlkMDg5NWNiZTEyZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kLmpzIl0sIm5hbWVzIjpbIm1vZGVsIiwiYmluZCIsInRpbWUiLCJzZXRJbnRlcnZhbCIsImFwcGVuZCIsInZhbCIsImRvbSIsIkJyb2FkY2FzdGVyIiwib2JzZXJ2ZXJzIiwiU2V0Iiwib2JzZXJ2ZXIiLCJhZGQiLCJ2YWx1ZSIsImZvckVhY2giLCJ1cGRhdGUiLCJWYXJpYWJsZSIsImluaXRpYWwiLCJzZXQiLCJub3RpZnkiLCJjaGFuZ2UiLCJnZXQiLCJCaW5kIiwiYWxsIiwid2l0aCIsInZhcmlhYmxlcyIsInZhcmlhYmxlIiwic3Vic2NyaWJlIiwiZGVsZXRlIiwiRG9tVmFyaWFibGUiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaWRlbnRpZmllciIsImdldEVsZW1lbnRCeUlkIiwiYmluZHMiLCJzZWxlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2hFQTs7QUFFQSxJQUFJ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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBhNDVlNjM5ZDA4OTVjYmUxMmVkIiwiaW1wb3J0IHsgZG9tLCB2YWwgfSBmcm9tICcuL2JpbmQnO1xuXG5sZXQgbW9kZWwgPSB2YWwoJ1RFU1QgJykuYmluZChcbiAgICBkb20oJyNmaXJzdCcpLFxuICAgIGRvbSgnI3NlY29uZCcpLFxuICAgIGRvbSgnI3RoaXJkJylcbik7XG5cbmxldCB0aW1lID0gMDtcbnNldEludGVydmFsKF8gPT4gbW9kZWwuYXBwZW5kKGAkeyB0aW1lKysgfSBgKSwgNTAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCBjbGFzcyBCcm9hZGNhc3RlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICB9XG4gICAgXG4gICAgbm90aWZ5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIudXBkYXRlKHZhbHVlKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBCcm9hZGNhc3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5pdGlhbDtcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5ub3RpZnkodmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSh0aGlzLmdldCgpICsgdmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgYmluZCguLi52YXJpYWJsZXMpIHtcbiAgICAgICAgQmluZC5hbGwoLi4udmFyaWFibGVzKS53aXRoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsKSB7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5pdGlhbDtcbiAgICB9XG4gICAgXG4gICAgYWRkKC4uLnZhcmlhYmxlcykge1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IG5ldyBTZXQoWy4uLnRoaXMudmFyaWFibGVzLCAuLi5uZXcgU2V0KHZhcmlhYmxlcyldKTtcbiAgICAgICAgdmFyaWFibGVzLmZvckVhY2godmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgdmFyaWFibGUuY2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdmFyaWFibGUuc3Vic2NyaWJlKHsgdXBkYXRlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZXMuZGVsZXRlKHZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZXMuYWRkKHZhcmlhYmxlKTtcbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICB3aXRoKHZhcmlhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YXJpYWJsZS5nZXQoKTtcbiAgICAgICAgdGhpcy5hZGQodmFyaWFibGUpO1xuICAgICAgICB0aGlzLmNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMuZm9yRWFjaCh2YXJpYWJsZSA9PiB2YXJpYWJsZS5zZXQodmFsdWUpKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0KCkge1xuICAgICAgICB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgYWxsKC4uLnZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gbmV3IEJpbmQoKS5hZGQoLi4udmFyaWFibGVzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb21WYXJpYWJsZSBleHRlbmRzIFZhcmlhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBpbml0aWFsKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWwpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLFxuICAgICAgICAgICAgKHsgdGFyZ2V0IH0pID0+IHRoaXMuY2hhbmdlKHRhcmdldC52YWx1ZSkpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgc2VsZWN0KHNlbGVjdG9yKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgRG9tVmFyaWFibGUoZWxlbWVudCk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBpZChpZGVudGlmaWVyKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRlbnRpZmllcik7XG4gICAgICAgIHJldHVybiBuZXcgRG9tVmFyaWFibGUoZWxlbWVudCk7XG4gICAgfVxuICAgIFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWwodmFsdWUsIC4uLmJpbmRzKSB7XG4gICAgcmV0dXJuIG5ldyBWYXJpYWJsZSh2YWx1ZSkuYmluZCguLi5iaW5kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb20oc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gRG9tVmFyaWFibGUuc2VsZWN0KHNlbGVjdG9yKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iaW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==