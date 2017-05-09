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
exports.Spa = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY4ZGI2ZWY1YTgwYTllMThiODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJ0ZXh0IiwidHlwZSIsIkhvbWVQYWdlIiwidGl0bGUiLCJ0b2RvcyIsInN0eWxlIiwidmlldyIsInJlbmRlciIsImZvcmVhY2giLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJpdGVtIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJTcGEiLCJkb20iLCJoZWxwZXJzIiwidGVtcGxhdGVUYWciLCJ0eXBlcyIsIm5hbWUiLCJjb21wb25lbnQiLCJyZW5kZXJQYXJhbSIsIm5vcm1hbGl6ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJhcmciLCJhbGwiLCJpdGVtcyIsIm1hcCIsInJhdyIsImZvckVhY2giLCJhZGQiLCJpdCIsImxpdGVyYWxzIiwidmFsdWVzIiwicmVkdWNlIiwicmVzdWx0IiwibGl0ZXJhbCIsImlkIiwiY29uY2F0IiwidGFnIiwicmVuZGVyTWV0aG9kTmFtZSIsImlkU2VlZCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFz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QUFnQixVQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBa0JDLEVBQWxCO0FBQUEsdUJBQ25CRixPQUFPRyxNQUFQLENBQWNGLE9BQWQsRUFBdUIsVUFBSUgsTUFBSixHQUFZLEVBQVosR0FBZ0JJLEVBQWhCLENBQXZCLENBRG1CO0FBQUEsYUFBaEIsQ0FBUDtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQzdCV0EsRSxHQUFBQSxFO1FBSUFFLEcsR0FBQUEsRztBQVBULElBQU1DLDhDQUFtQixVQUF6Qjs7QUFFUCxJQUFJQyxTQUFTLENBQWI7QUFDTyxTQUFTSixFQUFULEdBQWM7QUFDakIsV0FBT0ksUUFBUDtBQUNIOztBQUVNLFNBQVNGLEdBQVQsQ0FBYXJCLElBQWIsRUFBbUJ3QixPQUFuQixFQUE0QjtBQUMvQixpQkFBWSxLQUFLeEIsSUFBakIsU0FBMkJ3QixPQUEzQixVQUF5QyxLQUFLeEIsSUFBOUM7QUFDSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODY4ZGI2ZWY1YTgwYTllMThiODMiLCJpbXBvcnQgeyBTcGEsIERvbSB9IGZyb20gJy4vc3BhJztcblxuXG5jbGFzcyBNZXNzYWdlIHtcbiAgICB0ZW1wbGF0ZSh7IHRleHQsIHR5cGUgID0gJ2luZm8nIH0gPSB7fSkge1xuICAgICAgICByZXR1cm4gYDxoMSBjbGFzcz1cIiR7IHR5cGUgfVwiPiR7IHRleHQgfTwvaDE+YDtcbiAgICB9XG59XG5cbmNsYXNzIEhvbWVQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdIb21lIHBhZ2UnO1xuICAgICAgICB0aGlzLnRvZG9zID0gWydoYWJhbGEnLCAnYmFiYWxhJ107XG4gICAgfVxuXG4gICAgdGVtcGxhdGUoeyBzdHlsZSB9LCB7IHZpZXcsIHJlbmRlciwgZm9yZWFjaCB9KSB7XG4gICAgICAgIHJldHVybiB2aWV3IGBcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cIiR7IHN0eWxlIH1cIj4keyB0aGlzLnRpdGxlIH08aDE+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgJHsgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAsICdkb25lJykpIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgJHsgcmVuZGVyKE1lc3NhZ2UsIHsgdGV4dDogJ2hlbGxvIHdvcmxkJyB9KSB9XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAkeyBmb3JlYWNoKHRoaXMudG9kb3MsIGl0ZW0gPT4gdmlldyBgPGxpPiR7IGl0ZW0gfTwvbGk+YCkgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbn1cblxuXG5uZXcgU3BhKG5ldyBEb20oKSkucmVuZGVyKEhvbWVQYWdlLCB7IHN0eWxlOiAnZGFyaycgfSkudGhlbihjb25zb2xlLmxvZyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgeyBpZCwgcmVuZGVyTWV0aG9kTmFtZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgU3BhIHtcbiAgICBjb25zdHJ1Y3Rvcihkb20pIHtcbiAgICAgICAgdGhpcy5kb20gPSBkb207XG4gICAgICAgIHRoaXMuaGVscGVycyA9IHtcbiAgICAgICAgICAgIHJlbmRlcjogKC4uLmFyZ3MpID0+IHRoaXMucmVuZGVyKC4uLmFyZ3MpLFxuICAgICAgICAgICAgdmlldzogKC4uLmFyZ3MpID0+IHRoaXMudGVtcGxhdGVUYWcoLi4uYXJncylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoZWxwZXIodHlwZXMpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0eXBlcykge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gdHlwZXMubmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoY29tcG9uZW50LCByZW5kZXJQYXJhbSkge1xuICAgICAgICBsZXQgbm9ybWFsaXplZCA9IChhcmcgPT4gQXJyYXkuaXNBcnJheShhcmcpID8gYXJnIDogW2FyZ10pXG4gICAgICAgICAgICAobmV3IGNvbXBvbmVudCh0aGlzLmhlbHBlcnMpW3JlbmRlck1ldGhvZE5hbWVdXG4gICAgICAgICAgICAocmVuZGVyUGFyYW0sIHRoaXMuaGVscGVycykpO1xuXG4gICAgICAgIFByb21pc2UuYWxsKG5vcm1hbGl6ZWQpXG4gICAgICAgICAgICAudGhlbihpdGVtcyA9PiBQcm9taXNlLmFsbChpdGVtcy5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgIHR5cGVvZiBpdGVtID09ICdmdW5jdGlvbicgPyBpdGVtKHRoaXMuZG9tKSA6IGl0ZW0pKSlcbiAgICAgICAgICAgIC50aGVuKHJhdyA9PiByYXcuZm9yRWFjaChpdCA9PiB0aGlzLmRvbS5hZGQoaXQpKSk7XG4gICAgfVxuXG4gICAgdGVtcGxhdGVUYWcobGl0ZXJhbHMsIC4uLnZhbHVlcykge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbHMucmVkdWNlKChyZXN1bHQsIGxpdGVyYWwsIGlkKSA9PlxuICAgICAgICAgICAgcmVzdWx0LmNvbmNhdChsaXRlcmFsLCBbLi4udmFsdWVzLCAnJ11baWRdKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NwYS5qcyIsImV4cG9ydCBjb25zdCByZW5kZXJNZXRob2ROYW1lID0gJ3RlbXBsYXRlJztcblxubGV0IGlkU2VlZCA9IDA7XG5leHBvcnQgZnVuY3Rpb24gaWQoKSB7XG4gICAgcmV0dXJuIGlkU2VlZCsrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFnKG5hbWUsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gYDwkeyB0aGlzLm5hbWUgfT4keyBjb250ZW50IH08LyR7IHRoaXMubmFtZSB9PmA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9