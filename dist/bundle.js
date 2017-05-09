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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <h1 class="', '">', '<h1>\n            <hr/>\n            ', '\n            <div class="body">\n                ', '\n                <ul>\n                    ', '\n                </ul>\n            </div>\n        '], ['\n            <h1 class="', '">', '<h1>\n            <hr/>\n            ', '\n            <div class="body">\n                ', '\n                <ul>\n                    ', '\n                </ul>\n            </div>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['<li>', '</li>'], ['<li>', '</li>']);

var _spa = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
    function Message() {
        _classCallCheck(this, Message);
    }

    _createClass(Message, [{
        key: 'template',
        value: function template() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                text = _ref.text,
                _ref$type = _ref.type,
                type = _ref$type === undefined ? 'info' : _ref$type;

            return '<h1 class="' + type + '">' + text + '</h1>';
        }
    }]);

    return Message;
}();

var HomePage = function () {
    function HomePage() {
        _classCallCheck(this, HomePage);

        this.title = 'Home page';
        this.todos = ['habala', 'babala'];
    }

    _createClass(HomePage, [{
        key: 'template',
        value: function template(_ref2, _ref3) {
            var style = _ref2.style;
            var view = _ref3.view,
                render = _ref3.render,
                foreach = _ref3.foreach;

            return view(_templateObject, style, this.title, new Promise(function (resolve) {
                return setTimeout(resolve, 1000, 'done');
            }), render(Message, { text: 'hello world' }), foreach(this.todos, function (item) {
                return view(_templateObject2, item);
            }));
        }
    }]);

    return HomePage;
}();

new _spa.Spa(new _spa.Dom()).render(HomePage, { style: 'dark' }).then(console.log);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Node = exports.Spa = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spa = exports.Spa = function () {
    function Spa(dom) {
        var _this = this;

        _classCallCheck(this, Spa);

        this.dom = dom;
        this.helpers = {
            render: function render() {
                return _this.render.apply(_this, arguments);
            },
            view: function view() {
                return _this.templateTag.apply(_this, arguments);
            }
        };
    }

    _createClass(Spa, [{
        key: 'helper',
        value: function helper(types) {
            for (var name in types) {
                this.helpers[name] = types.name;
            }
            return this;
        }
    }, {
        key: 'render',
        value: function render(component, renderParam) {
            var _this2 = this;

            var normalized = function (arg) {
                return Array.isArray(arg) ? arg : [arg];
            }(new component(this.helpers)[_utils.renderMethodName](renderParam, this.helpers));

            Promise.all(normalized).then(function (items) {
                return Promise.all(items.map(function (item) {
                    return typeof item == 'function' ? item(_this2.dom) : item;
                }));
            }).then(function (raw) {
                return raw.forEach(function (it) {
                    return _this2.dom.add(it);
                });
            });
        }
    }, {
        key: 'templateTag',
        value: function templateTag(literals) {
            for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                values[_key - 1] = arguments[_key];
            }

            return literals.reduce(function (result, literal, id) {
                return result.concat(literal, [].concat(values, [''])[id]);
            });
        }
    }]);

    return Spa;
}();

var Node = exports.Node = function () {
    function Node(name) {
        _classCallCheck(this, Node);

        this.name = name;
        this.content = new Map();
    }

    _createClass(Node, [{
        key: 'add',
        value: function add(content) {
            this.content[(0, _utils.id)()] = content;
        }
    }]);

    return Node;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.id = id;
exports.tag = tag;
var renderMethodName = exports.renderMethodName = 'template';

var idSeed = 0;
function id() {
    return idSeed++;
}

function tag(name, content) {
    return '<' + this.name + '>' + content + '</' + this.name + '>';
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWFlNDhhZTMyMTgxMzQ0ZDk0NDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJ0ZXh0IiwidHlwZSIsIkhvbWVQYWdlIiwidGl0bGUiLCJ0b2RvcyIsInN0eWxlIiwidmlldyIsInJlbmRlciIsImZvcmVhY2giLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJpdGVtIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJTcGEiLCJkb20iLCJoZWxwZXJzIiwidGVtcGxhdGVUYWciLCJ0eXBlcyIsIm5hbWUiLCJjb21wb25lbnQiLCJyZW5kZXJQYXJhbSIsIm5vcm1hbGl6ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJhcmciLCJhbGwiLCJpdGVtcyIsIm1hcCIsInJhdyIsImZvckVhY2giLCJhZGQiLCJpdCIsImxpdGVyYWxzIiwidmFsdWVzIiwicmVkdWNlIiwicmVzdWx0IiwibGl0ZXJhbCIsImlkIiwiY29uY2F0IiwiTm9kZSIsImNvbnRlbnQiLCJNYXAiLCJ0YWciLCJyZW5kZXJNZXRob2ROYW1lIiwiaWRTZWVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FB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LFNBQVNFLE1BQVQsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxPQUFULEVBQWtCQyxFQUFsQjtBQUFBLHVCQUNuQkYsT0FBT0csTUFBUCxDQUFjRixPQUFkLEVBQXVCLFVBQUlILE1BQUosR0FBWSxFQUFaLEdBQWdCSSxFQUFoQixDQUF2QixDQURtQjtBQUFBLGFBQWhCLENBQVA7QUFFSDs7Ozs7O0lBR1FFLEksV0FBQUEsSTtBQUNULGtCQUFZckIsSUFBWixFQUFrQjtBQUFBOztBQUNkLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtzQixPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0g7Ozs7NEJBRUdELE8sRUFBUztBQUNULGlCQUFLQSxPQUFMLENBQWEsZ0JBQWIsSUFBcUJBLE9BQXJCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDeENXSCxFLEdBQUFBLEU7UUFJQUssRyxHQUFBQSxHO0FBUFQsSUFBTUMsOENBQW1CLFVBQXpCOztBQUVQLElBQUlDLFNBQVMsQ0FBYjtBQUNPLFNBQVNQLEVBQVQsR0FBYztBQUNqQixXQUFPTyxRQUFQO0FBQ0g7O0FBRU0sU0FBU0YsR0FBVCxDQUFheEIsSUFBYixFQUFtQnNCLE9BQW5CLEVBQTRCO0FBQy9CLGlCQUFZLEtBQUt0QixJQUFqQixTQUEyQnNCLE9BQTNCLFVBQXlDLEtBQUt0QixJQUE5QztBQUNILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYWU0OGFlMzIxODEzNDRkOTQ0NSIsImltcG9ydCB7IFNwYSwgRG9tIH0gZnJvbSAnLi9zcGEnO1xuXG5cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIHRlbXBsYXRlKHsgdGV4dCwgdHlwZSAgPSAnaW5mbycgfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBgPGgxIGNsYXNzPVwiJHsgdHlwZSB9XCI+JHsgdGV4dCB9PC9oMT5gO1xuICAgIH1cbn1cblxuY2xhc3MgSG9tZVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0hvbWUgcGFnZSc7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbJ2hhYmFsYScsICdiYWJhbGEnXTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZSh7IHN0eWxlIH0sIHsgdmlldywgcmVuZGVyLCBmb3JlYWNoIH0pIHtcbiAgICAgICAgcmV0dXJuIHZpZXcgYFxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiJHsgc3R5bGUgfVwiPiR7IHRoaXMudGl0bGUgfTxoMT5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAkeyBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCwgJ2RvbmUnKSkgfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAkeyByZW5kZXIoTWVzc2FnZSwgeyB0ZXh0OiAnaGVsbG8gd29ybGQnIH0pIH1cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7IGZvcmVhY2godGhpcy50b2RvcywgaXRlbSA9PiB2aWV3IGA8bGk+JHsgaXRlbSB9PC9saT5gKSB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxufVxuXG5cbm5ldyBTcGEobmV3IERvbSgpKS5yZW5kZXIoSG9tZVBhZ2UsIHsgc3R5bGU6ICdkYXJrJyB9KS50aGVuKGNvbnNvbGUubG9nKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCB7IGlkLCByZW5kZXJNZXRob2ROYW1lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBTcGEge1xuICAgIGNvbnN0cnVjdG9yKGRvbSkge1xuICAgICAgICB0aGlzLmRvbSA9IGRvbTtcbiAgICAgICAgdGhpcy5oZWxwZXJzID0ge1xuICAgICAgICAgICAgcmVuZGVyOiAoLi4uYXJncykgPT4gdGhpcy5yZW5kZXIoLi4uYXJncyksXG4gICAgICAgICAgICB2aWV3OiAoLi4uYXJncykgPT4gdGhpcy50ZW1wbGF0ZVRhZyguLi5hcmdzKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhlbHBlcih0eXBlcykge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHR5cGVzKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSB0eXBlcy5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihjb21wb25lbnQsIHJlbmRlclBhcmFtKSB7XG4gICAgICAgIGxldCBub3JtYWxpemVkID0gKGFyZyA9PiBBcnJheS5pc0FycmF5KGFyZykgPyBhcmcgOiBbYXJnXSlcbiAgICAgICAgICAgIChuZXcgY29tcG9uZW50KHRoaXMuaGVscGVycylbcmVuZGVyTWV0aG9kTmFtZV1cbiAgICAgICAgICAgIChyZW5kZXJQYXJhbSwgdGhpcy5oZWxwZXJzKSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwobm9ybWFsaXplZClcbiAgICAgICAgICAgIC50aGVuKGl0ZW1zID0+IFByb21pc2UuYWxsKGl0ZW1zLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgdHlwZW9mIGl0ZW0gPT0gJ2Z1bmN0aW9uJyA/IGl0ZW0odGhpcy5kb20pIDogaXRlbSkpKVxuICAgICAgICAgICAgLnRoZW4ocmF3ID0+IHJhdy5mb3JFYWNoKGl0ID0+IHRoaXMuZG9tLmFkZChpdCkpKTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZVRhZyhsaXRlcmFscywgLi4udmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFscy5yZWR1Y2UoKHJlc3VsdCwgbGl0ZXJhbCwgaWQpID0+XG4gICAgICAgICAgICByZXN1bHQuY29uY2F0KGxpdGVyYWwsIFsuLi52YWx1ZXMsICcnXVtpZF0pKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBhZGQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRbaWQoKV0gPSBjb250ZW50O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zcGEuanMiLCJleHBvcnQgY29uc3QgcmVuZGVyTWV0aG9kTmFtZSA9ICd0ZW1wbGF0ZSc7XG5cbmxldCBpZFNlZWQgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGlkKCkge1xuICAgIHJldHVybiBpZFNlZWQrKztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhZyhuYW1lLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIGA8JHsgdGhpcy5uYW1lIH0+JHsgY29udGVudCB9PC8keyB0aGlzLm5hbWUgfT5gO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==