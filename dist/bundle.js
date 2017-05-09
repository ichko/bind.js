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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<', '>', '</', '>'], ['<', '>', '</', '>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var renderMethodName = 'template';
var idSeed = 0;
var getId = function getId() {
    return idSeed++;
};

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
            }(new component(this.helpers)[renderMethodName](renderParam, this.helpers));

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
            this.content[getId()] = content;
        }
    }, {
        key: 'render',
        value: function render() {
            var content = '';
            this.content.forEach(function (key, value) {
                return content += value.render();
            });

            this(_templateObject, this.name, content, this.name);
        }
    }]);

    return Node;
}();

var VirtualDom = exports.VirtualDom = function VirtualDom() {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'component';

    _classCallCheck(this, VirtualDom);

    this.tag = tag;
    this.container = new Map();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThlMDhmMDZkYmVhODgxODNhODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGEuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsInRleHQiLCJ0eXBlIiwiSG9tZVBhZ2UiLCJ0aXRsZSIsInRvZG9zIiwic3R5bGUiLCJ2aWV3IiwicmVuZGVyIiwiZm9yZWFjaCIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIml0ZW0iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlbmRlck1ldGhvZE5hbWUiLCJpZFNlZWQiLCJnZXRJZCIsIlNwYSIsImRvbSIsImhlbHBlcnMiLCJ0ZW1wbGF0ZVRhZyIsInR5cGVzIiwibmFtZSIsImNvbXBvbmVudCIsInJlbmRlclBhcmFtIiwibm9ybWFsaXplZCIsIkFycmF5IiwiaXNBcnJheSIsImFyZyIsImFsbCIsIml0ZW1zIiwibWFwIiwicmF3IiwiZm9yRWFjaCIsImFkZCIsIml0IiwibGl0ZXJhbHMiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJsaXRlcmFsIiwiaWQiLCJjb25jYXQiLCJOb2RlIiwiY29udGVudCIsIk1hcCIsImtleSIsInZhbHVlIiwiVmlydHVhbERvbSIsInRhZyIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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LEdBQUwsQ0FBU2dCLEdBQVQsQ0FBYUMsRUFBYixDQUFOO0FBQUEsaUJBQVosQ0FBUDtBQUFBLGFBSFY7QUFJSDs7O29DQUVXQyxRLEVBQXFCO0FBQUEsOENBQVJDLE1BQVE7QUFBUkEsc0JBQVE7QUFBQTs7QUFDN0IsbUJBQU9ELFNBQVNFLE1BQVQsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxPQUFULEVBQWtCQyxFQUFsQjtBQUFBLHVCQUNuQkYsT0FBT0csTUFBUCxDQUFjRixPQUFkLEVBQXVCLFVBQUlILE1BQUosR0FBWSxFQUFaLEdBQWdCSSxFQUFoQixDQUF2QixDQURtQjtBQUFBLGFBQWhCLENBQVA7QUFFSDs7Ozs7O0lBR1FFLEksV0FBQUEsSTtBQUNULGtCQUFZckIsSUFBWixFQUFrQjtBQUFBOztBQUNkLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtzQixPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0g7Ozs7NEJBRUdELE8sRUFBUztBQUNULGlCQUFLQSxPQUFMLENBQWE1QixPQUFiLElBQXdCNEIsT0FBeEI7QUFDSDs7O2lDQUVRO0FBQ0wsZ0JBQUlBLFVBQVUsRUFBZDtBQUNBLGlCQUFLQSxPQUFMLENBQWFYLE9BQWIsQ0FBcUIsVUFBQ2EsR0FBRCxFQUFNQyxLQUFOO0FBQUEsdUJBQWdCSCxXQUFXRyxNQUFNMUMsTUFBTixFQUEzQjtBQUFBLGFBQXJCOztBQUVBLGtDQUFVLEtBQUtpQixJQUFmLEVBQXlCc0IsT0FBekIsRUFBdUMsS0FBS3RCLElBQTVDO0FBQ0g7Ozs7OztJQUdRMEIsVSxXQUFBQSxVLEdBQ1Qsc0JBQStCO0FBQUEsUUFBbkJDLEdBQW1CLHVFQUFiLFdBQWE7O0FBQUE7O0FBQzNCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUwsR0FBSixFQUFqQjtBQUNILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxOGUwOGYwNmRiZWE4ODE4M2E4MyIsImltcG9ydCB7IFNwYSwgRG9tIH0gZnJvbSAnLi9zcGEnO1xuXG5cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIHRlbXBsYXRlKHsgdGV4dCwgdHlwZSAgPSAnaW5mbycgfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBgPGgxIGNsYXNzPVwiJHsgdHlwZSB9XCI+JHsgdGV4dCB9PC9oMT5gO1xuICAgIH1cbn1cblxuY2xhc3MgSG9tZVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0hvbWUgcGFnZSc7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbJ2hhYmFsYScsICdiYWJhbGEnXTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZSh7IHN0eWxlIH0sIHsgdmlldywgcmVuZGVyLCBmb3JlYWNoIH0pIHtcbiAgICAgICAgcmV0dXJuIHZpZXcgYFxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiJHsgc3R5bGUgfVwiPiR7IHRoaXMudGl0bGUgfTxoMT5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAkeyBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCwgJ2RvbmUnKSkgfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAkeyByZW5kZXIoTWVzc2FnZSwgeyB0ZXh0OiAnaGVsbG8gd29ybGQnIH0pIH1cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7IGZvcmVhY2godGhpcy50b2RvcywgaXRlbSA9PiB2aWV3IGA8bGk+JHsgaXRlbSB9PC9saT5gKSB9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxufVxuXG5cbm5ldyBTcGEobmV3IERvbSgpKS5yZW5kZXIoSG9tZVBhZ2UsIHsgc3R5bGU6ICdkYXJrJyB9KS50aGVuKGNvbnNvbGUubG9nKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImxldCByZW5kZXJNZXRob2ROYW1lID0gJ3RlbXBsYXRlJztcbmxldCBpZFNlZWQgPSAwO1xubGV0IGdldElkID0gKCkgPT4gaWRTZWVkKys7XG5cblxuZXhwb3J0IGNsYXNzIFNwYSB7XG4gICAgY29uc3RydWN0b3IoZG9tKSB7XG4gICAgICAgIHRoaXMuZG9tID0gZG9tO1xuICAgICAgICB0aGlzLmhlbHBlcnMgPSB7XG4gICAgICAgICAgICByZW5kZXI6ICguLi5hcmdzKSA9PiB0aGlzLnJlbmRlciguLi5hcmdzKSxcbiAgICAgICAgICAgIHZpZXc6ICguLi5hcmdzKSA9PiB0aGlzLnRlbXBsYXRlVGFnKC4uLmFyZ3MpXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGhlbHBlcih0eXBlcykge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHR5cGVzKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSB0eXBlcy5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcihjb21wb25lbnQsIHJlbmRlclBhcmFtKSB7XG4gICAgICAgIGxldCBub3JtYWxpemVkID0gKGFyZyA9PiBBcnJheS5pc0FycmF5KGFyZykgPyBhcmcgOiBbYXJnXSlcbiAgICAgICAgICAgIChuZXcgY29tcG9uZW50KHRoaXMuaGVscGVycylbcmVuZGVyTWV0aG9kTmFtZV1cbiAgICAgICAgICAgIChyZW5kZXJQYXJhbSwgdGhpcy5oZWxwZXJzKSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwobm9ybWFsaXplZClcbiAgICAgICAgICAgIC50aGVuKGl0ZW1zID0+IFByb21pc2UuYWxsKGl0ZW1zLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgdHlwZW9mIGl0ZW0gPT0gJ2Z1bmN0aW9uJyA/IGl0ZW0odGhpcy5kb20pIDogaXRlbSkpKVxuICAgICAgICAgICAgLnRoZW4ocmF3ID0+IHJhdy5mb3JFYWNoKGl0ID0+IHRoaXMuZG9tLmFkZChpdCkpKTtcbiAgICB9XG4gICAgXG4gICAgdGVtcGxhdGVUYWcobGl0ZXJhbHMsIC4uLnZhbHVlcykge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbHMucmVkdWNlKChyZXN1bHQsIGxpdGVyYWwsIGlkKSA9PlxuICAgICAgICAgICAgcmVzdWx0LmNvbmNhdChsaXRlcmFsLCBbLi4udmFsdWVzLCAnJ11baWRdKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgYWRkKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50W2dldElkKCldID0gY29udGVudDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiBjb250ZW50ICs9IHZhbHVlLnJlbmRlcigpKTtcblxuICAgICAgICB0aGlzIGA8JHsgdGhpcy5uYW1lIH0+JHsgY29udGVudCB9PC8keyB0aGlzLm5hbWUgfT5gO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpcnR1YWxEb20ge1xuICAgIGNvbnN0cnVjdG9yKHRhZyA9ICdjb21wb25lbnQnKSB7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3BhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==