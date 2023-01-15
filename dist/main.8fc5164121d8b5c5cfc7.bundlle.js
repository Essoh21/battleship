/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");
/* harmony import */ var _generateAlphabetArr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateAlphabetArr.js */ "./src/generateAlphabetArr.js");
/* harmony import */ var _generateIntegersArr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateIntegersArr.js */ "./src/generateIntegersArr.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var GameBoard = /*#__PURE__*/function () {
  function GameBoard() {
    _classCallCheck(this, GameBoard);
    this.missedShots = [];
    this.hitShots = [];
    this.sunkShipsNumber = 0;
    this.allCoordinates = this.getAllCoordinates();
    this.indexes = function () {
      return _toConsumableArray(Array(100)).map(function (el, index) {
        return index;
      });
    }();
  }
  _createClass(GameBoard, [{
    key: "placeShipAt",
    value: function placeShipAt(Ship, coordinates) {
      Ship.coordinates = coordinates;
    }
  }, {
    key: "placeShipsAtRandomCoordinates",
    value: function placeShipsAtRandomCoordinates(ships) {
      var _this = this;
      ships.forEach(function (ship) {
        return _this.generateRandomCoordinatesForShip(ship);
      });
    }
  }, {
    key: "getAllCoordinates",
    value: function getAllCoordinates() {
      var integers = (0,_generateIntegersArr_js__WEBPACK_IMPORTED_MODULE_2__["default"])(11).slice(1);
      var alphabet = (0,_generateAlphabetArr_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      var coordinates = [];
      for (var i = 0; i < 10; i += 1) {
        for (var j = 0; j < 10; j += 1) {
          var coordinate = {};
          coordinate[alphabet[i]] = integers[j];
          coordinates.push(coordinate);
        }
      }
      return coordinates;
    }
  }, {
    key: "removeAdjacentIndexesOfIndexFromIndexes",
    value: function removeAdjacentIndexesOfIndexFromIndexes(index) {
      var _this2 = this;
      var adjacentIndexesOfIndex = [index + 1, index - 1, index + 10, index - 10, index + 9, index - 9, index + 11, index - 11].filter(function (el) {
        return el >= 0;
      });
      adjacentIndexesOfIndex.forEach(function (index) {
        return _this2.indexes.splice(index, 1, '');
      });
    }
  }, {
    key: "areNConsecutiveFromIndexFree",
    value: function areNConsecutiveFromIndexFree(numberOfconsecutives, startIndex) {
      var VERTICAL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var result = true;
      var i = 1;
      while (i <= numberOfconsecutives) {
        if (!this.indexes.includes(startIndex)) {
          result = false;
          break;
        }
        VERTICAL ? startIndex += 10 : startIndex + 1;
        i += 1;
      }
      return result;
    }
  }, {
    key: "isValideNShipIndex",
    value: function isValideNShipIndex(n, index) {
      return index % 10 <= 10 - n ? true : false;
    }
  }, {
    key: "generateRandomCoordinatesForShip",
    value: function generateRandomCoordinatesForShip(ship) {
      var randomInt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.floor(Math.random() * 100);
      if (ship.length === 1) {
        this.indexes.includes(randomInt) ? ship.coordinates = [this.allCoordinates[randomInt]] : this.generateRandomCoordinatesForShip(ship, randomInt = Math.floor(Math.random() * 100));
        this.indexes.splice(randomInt, 1, '');
        this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
        return;
      }
      if (ship.length === 2) {
        if ((this.areNConsecutiveFromIndexFree(2, randomInt) || this.areNConsecutiveFromIndexFree(2, randomInt, true)) && this.isValideNShipIndex(2, randomInt)) {
          if (this.areNConsecutiveFromIndexFree(2, randomInt)) {
            ship.coordinates = [this.allCoordinates[randomInt], this.allCoordinates[randomInt + 1]];
            this.indexes.splice(randomInt, 1, '');
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 1);
          } else {
            ship.coordinates = [this.allCoordinates[randomInt], this.allCoordinates[randomInt + 10]];
            this.indexes.splice(randomInt, 1, '');
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 10);
          }
        } else {
          this.generateRandomCoordinatesForShip(ship, randomInt = Math.floor(Math.random() * 100));
        }
      }
      if (ship.length === 3) {
        if ((this.areNConsecutiveFromIndexFree(3, randomInt) || this.areNConsecutiveFromIndexFree(3, randomInt, true)) && this.isValideNShipIndex(3, randomInt)) {
          if (this.areNConsecutiveFromIndexFree(3, randomInt)) {
            ship.coordinates = [this.allCoordinates[randomInt], this.allCoordinates[randomInt + 1], this.allCoordinates[randomInt + 2]];
            this.indexes.splice(randomInt, 1, '');
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 2);
          } else {
            ship.coordinates = [this.allCoordinates[randomInt], this.allCoordinates[randomInt + 10], this.allCoordinates[randomInt + 20]];
            this.indexes.splice(randomInt, 1, '');
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 20);
          }
        } else {
          this.generateRandomCoordinatesForShip(ship, randomInt = Math.floor(Math.random() * 100));
        }
      }
      if (ship.length === 4) {
        if ((this.areNConsecutiveFromIndexFree(4, randomInt) || this.areNConsecutiveFromIndexFree(4, randomInt, true)) && this.isValideNShipIndex(4, randomInt)) {
          if (this.areNConsecutiveFromIndexFree(4, randomInt)) {
            ship.coordinates = [this.allCoordinates[randomInt], this.allCoordinates[randomInt + 1], this.allCoordinates[randomInt + 2], this.allCoordinates[randomInt + 3]];
            this.indexes.splice(randomInt, 1, '');
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 3);
          } else {
            ship.coordinates = [this.allCoordinates[randomInt], this.allCoordinates[randomInt + 10], this.allCoordinates[randomInt + 20], this.allCoordinates[randomInt + 30]];
            this.indexes.splice(randomInt, 1, '');
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 30);
          }
        } else {
          this.generateRandomCoordinatesForShip(ship, randomInt = Math.floor(Math.random() * 100));
        }
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(attack, Ships) {
      var shipsCoordinates = this.getStringifyedCoordinatesOf(Ships);
      var attackHit = false;
      var hitshipIndex;
      shipsCoordinates.forEach(function (strshipCoordinates, index) {
        var shipCoordinates = JSON.parse(strshipCoordinates).map(function (keyVal) {
          return JSON.stringify(keyVal);
        }); // stringify each pair
        if (shipCoordinates.includes(JSON.stringify(attack))) {
          attackHit = true;
          hitshipIndex = index;
        }
      });
      if (attackHit) {
        Ships[hitshipIndex].hit();
        if (Ships[hitshipIndex].isSunk()) {
          this.sunkShipsNumber += 1;
          this.hitShots.push(JSON.stringify(attack));
        }
      } else {
        this.missedShots.push(JSON.stringify(attack));
      }
    }
  }, {
    key: "getStringifyedCoordinatesOf",
    value: function getStringifyedCoordinatesOf(allShips) {
      var shipsCoordinates = [];
      for (var i = 0; i < allShips.length; i += 1) {
        var coordinates = JSON.stringify(allShips[i].coordinates); //stringify each array of coordinates to avoid array of arrays
        shipsCoordinates.push(coordinates);
      }
      return shipsCoordinates;
    }
  }]);
  return GameBoard;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");
/* harmony import */ var _GameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameBoard.js */ "./src/GameBoard.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.ships = this.buildShips();
    this.gameBoard = new _GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  _createClass(Player, [{
    key: "buildShips",
    value: function buildShips() {
      var ships = [];
      for (var i = 0; i < 10; i += 1) {
        if (i < 4) {
          ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));
        } else if (i < 7) {
          ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2));
        } else if (i < 9) {
          ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3));
        } else {
          ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4));
        }
      }
      return ships;
    }
  }, {
    key: "attackEnemyAt",
    value: function attackEnemyAt(enemy, coordinates) {
      enemy.gameBoard.receiveAttack(coordinates, enemy.ships);
    }
  }, {
    key: "getMissedShootsFrom",
    value: function getMissedShootsFrom(enemyGameBoard) {
      return enemyGameBoard.missedShots;
    }
  }, {
    key: "getHitShotsFrom",
    value: function getHitShotsFrom(enemyGameBoard) {
      return enemyGameBoard.hitShots;
    }
  }]);
  return Player;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Ship = function Ship(Shiplength) {
  var ship = Object.create(shipMethods);
  ship.numberOfHits = 0;
  ship.length = Shiplength;
  ship.coordinates = null;
  return ship;
};
var shipMethods = {
  hit: function hit() {
    this.numberOfHits += 1;
  },
  isSunk: function isSunk() {
    return this.length === this.numberOfHits ? true : false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/createPlayGround.js":
/*!*********************************!*\
  !*** ./src/createPlayGround.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateAlphabetArr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateAlphabetArr.js */ "./src/generateAlphabetArr.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var alphabetArr = (0,_generateAlphabetArr_js__WEBPACK_IMPORTED_MODULE_0__["default"])(true);
var openTable = "<table>";
var closeTable = "</table>";
var openTableHead = "<th>";
var closeTableHead = "</th>";
var openTableRow = "<tr>";
var closeTableRow = "</tr>";
var openTableData = "<td>";
var closeTableData = "</td>";
var createPlayGround = function createPlayGround() {
  return "".concat(openTable, " ").concat(createFirstRow(), " ").concat(createLastTenRows(), " ").concat(closeTable);
};
var createFirstRow = function createFirstRow() {
  var firstRowData = '';
  for (var i = 0; i < 10; i += 1) {
    firstRowData += "".concat(openTableHead, " ").concat(alphabetArr[i], " ").concat(closeTableHead, "\n        ");
  }
  return openTableRow + openTableData + closeTableData + firstRowData + closeTableRow;
};
var createRowContent = function createRowContent() {
  var rowContent = '';
  for (var i = 1; i <= 10; i += 1) {
    rowContent += "".concat(openTableData, " ").concat(closeTableData);
  }
  return rowContent;
};
var createLastTenRows = function createLastTenRows() {
  return _toConsumableArray(Array(10)).map(function (el, index) {
    return "".concat(openTableRow, "\n    ").concat(openTableHead).concat(index + 1).concat(closeTableHead).concat(createRowContent()).concat(closeTableRow);
  }).reduce(function (prev, cur) {
    return prev + cur;
  }, '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayGround);

/***/ }),

/***/ "./src/generateAlphabetArr.js":
/*!************************************!*\
  !*** ./src/generateAlphabetArr.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var generateAlphabetArr = function generateAlphabetArr() {
  var CAPITAL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return _toConsumableArray(Array(26)).map(function (_, index) {
    return String.fromCharCode(index + (CAPITAL ? 65 : 97));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAlphabetArr);

/***/ }),

/***/ "./src/generateIntegersArr.js":
/*!************************************!*\
  !*** ./src/generateIntegersArr.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var generateIntegersArr = function generateIntegersArr(Arrlenght) {
  return _toConsumableArray(Array(Arrlenght)).map(function (_, index) {
    return index;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateIntegersArr);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n}\n\nbody {\n    background-color: #ddf;\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntd,\ntr {\n    border: 1px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\ntd:first-child {\n    border: none;\n}\n\ntd:hover {\n    background-color: aquamarine;\n}\n\n.user-part,\n.openent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,SAAS;AACb;;AAEA;;IAEI,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb","sourcesContent":["* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n}\n\nbody {\n    background-color: #ddf;\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntd,\ntr {\n    border: 1px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\ntd:first-child {\n    border: none;\n}\n\ntd:hover {\n    background-color: aquamarine;\n}\n\n.user-part,\n.openent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>BattleShip</title>\n</head>\n\n<body>\n    <h1> BATTLESHIP </h1>\n\n    <div class=\"game-fields-container\">\n        <div class=\"user-ships-container\"> </div>\n        <div class=\"user-part\">\n            <div class=\"user-gameboard-container\"></div>\n            <div class=\"caption\">User Board</div>\n        </div>\n        <div class=\"openent-part\">\n            <div class=\"openent-gameboard-container\"></div>\n            <div class=\"caption\">openent</div>\n        </div>\n\n    </div>\n\n\n    </div>\n    </div>\n\n\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _GameBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard.js */ "./src/GameBoard.js");
/* harmony import */ var _createPlayGround_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPlayGround.js */ "./src/createPlayGround.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");





var playerUI = document.querySelector('.user-gameboard-container');
var openentUI = document.querySelector('.openent-gameboard-container');
var allCells = document.getElementsByTagName('div');
console.log(allCells.length);
// Player
var player = new _Player_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
var playerGameboard = new _GameBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
var playerShips = player.ships;
// openent
var openent = new _Player_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
var openentGameboard = new _GameBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
var openentShips = openent.ships;
var currentPlayer = 'player';
playerUI.innerHTML = (0,_createPlayGround_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
openentUI.innerHTML = (0,_createPlayGround_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JGLEtBQUs7QUFFbEMsSUFBSXdGLGFBQWEsR0FBRyxRQUFRO0FBRTVCZCxRQUFRLENBQUNlLFNBQVMsR0FBRy9CLGdFQUFnQixFQUFFO0FBQ3ZDbUIsU0FBUyxDQUFDWSxTQUFTLEdBQUcvQixnRUFBZ0IsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZVBsYXlHcm91bmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nZW5lcmF0ZUFscGhhYmV0QXJyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2VuZXJhdGVJbnRlZ2Vyc0Fyci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXAuanNcIjtcbmltcG9ydCBnZW5lcmF0ZUFscGhhYmV0QXJyIGZyb20gXCIuL2dlbmVyYXRlQWxwaGFiZXRBcnIuanNcIjtcbmltcG9ydCBnZW5lcmF0ZUludGVnZXJzQXJyIGZyb20gXCIuL2dlbmVyYXRlSW50ZWdlcnNBcnIuanNcIjtcbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWlzc2VkU2hvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRTaG90cyA9IFtdO1xuICAgICAgICB0aGlzLnN1bmtTaGlwc051bWJlciA9IDA7XG4gICAgICAgIHRoaXMuYWxsQ29vcmRpbmF0ZXMgPSB0aGlzLmdldEFsbENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHRoaXMuaW5kZXhlcyA9ICgoKSA9PiBbLi4uQXJyYXkoMTAwKV1cbiAgICAgICAgICAgIC5tYXAoKGVsLCBpbmRleCkgPT4gaW5kZXgpKSgpO1xuXG4gICAgfTtcblxuXG4gICAgcGxhY2VTaGlwQXQoU2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgU2hpcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzKHNoaXBzKSB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHRoaXMuZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc0ZvclNoaXAoc2hpcCkpO1xuICAgIH1cblxuICAgIGdldEFsbENvb3JkaW5hdGVzKCkge1xuICAgICAgICBjb25zdCBpbnRlZ2VycyA9IGdlbmVyYXRlSW50ZWdlcnNBcnIoMTEpLnNsaWNlKDEpO1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IGdlbmVyYXRlQWxwaGFiZXRBcnIoKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0ge307XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZVthbHBoYWJldFtpXV0gPSBpbnRlZ2Vyc1tqXTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICByZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgYWRqYWNlbnRJbmRleGVzT2ZJbmRleCA9IFtcbiAgICAgICAgICAgIGluZGV4ICsgMVxuICAgICAgICAgICAgLCBpbmRleCAtIDFcbiAgICAgICAgICAgICwgaW5kZXggKyAxMFxuICAgICAgICAgICAgLCBpbmRleCAtIDEwXG4gICAgICAgICAgICAsIGluZGV4ICsgOVxuICAgICAgICAgICAgLCBpbmRleCAtIDlcbiAgICAgICAgICAgICwgaW5kZXggKyAxMVxuICAgICAgICAgICAgLCBpbmRleCAtIDExXG4gICAgICAgIF0uZmlsdGVyKChlbCkgPT4gZWwgPj0gMCk7XG4gICAgICAgIGFkamFjZW50SW5kZXhlc09mSW5kZXguZm9yRWFjaCgoaW5kZXgpID0+IHRoaXMuaW5kZXhlcy5zcGxpY2UoaW5kZXgsIDEsICcnKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgYXJlTkNvbnNlY3V0aXZlRnJvbUluZGV4RnJlZShcbiAgICAgICAgbnVtYmVyT2Zjb25zZWN1dGl2ZXNcbiAgICAgICAgLCBzdGFydEluZGV4XG4gICAgICAgICwgVkVSVElDQUwgPSBmYWxzZSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICB3aGlsZSAoaSA8PSBudW1iZXJPZmNvbnNlY3V0aXZlcykge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5pbmRleGVzLmluY2x1ZGVzKHN0YXJ0SW5kZXgpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVkVSVElDQUwgPyBzdGFydEluZGV4ICs9IDEwIDogc3RhcnRJbmRleCArIDE7XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpc1ZhbGlkZU5TaGlwSW5kZXgobiwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChpbmRleCAlIDEwKSA8PSAoMTAgLSBuKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc0ZvclNoaXAoXG4gICAgICAgIHNoaXAsXG4gICAgICAgIHJhbmRvbUludCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICApIHtcbiAgICAgICAgaWYgKHNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAodGhpcy5pbmRleGVzLmluY2x1ZGVzKHJhbmRvbUludCkpID9cbiAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW3RoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50XV0gOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc0ZvclNoaXAoXG4gICAgICAgICAgICAgICAgICAgIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgLCByYW5kb21JbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhlcy5zcGxpY2UocmFuZG9tSW50LCAxLCAnJyk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhyYW5kb21JbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUoMiwgcmFuZG9tSW50KVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuYXJlTkNvbnNlY3V0aXZlRnJvbUluZGV4RnJlZSgyLCByYW5kb21JbnQsIHRydWUpKVxuICAgICAgICAgICAgICAgICYmIHRoaXMuaXNWYWxpZGVOU2hpcEluZGV4KDIsIHJhbmRvbUludCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcmVOQ29uc2VjdXRpdmVGcm9tSW5kZXhGcmVlKDIsIHJhbmRvbUludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50XVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludCArIDFdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlcy5zcGxpY2UocmFuZG9tSW50LCAxLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCArIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludF1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAxMF1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleGVzLnNwbGljZShyYW5kb21JbnQsIDEsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50ICsgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzRm9yU2hpcChcbiAgICAgICAgICAgICAgICAgICAgc2hpcFxuICAgICAgICAgICAgICAgICAgICAsIHJhbmRvbUludCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaXAubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuYXJlTkNvbnNlY3V0aXZlRnJvbUluZGV4RnJlZSgzLCByYW5kb21JbnQpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5hcmVOQ29uc2VjdXRpdmVGcm9tSW5kZXhGcmVlKDMsIHJhbmRvbUludCwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5pc1ZhbGlkZU5TaGlwSW5kZXgoMywgcmFuZG9tSW50KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUoMywgcmFuZG9tSW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnRdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAyXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ZXMuc3BsaWNlKHJhbmRvbUludCwgMSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhyYW5kb21JbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhyYW5kb21JbnQgKyAyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnRdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMTBdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMjBdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlcy5zcGxpY2UocmFuZG9tSW50LCAxLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCArIDIwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc0ZvclNoaXAoXG4gICAgICAgICAgICAgICAgICAgIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgLCByYW5kb21JbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlwLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUoNCwgcmFuZG9tSW50KVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuYXJlTkNvbnNlY3V0aXZlRnJvbUluZGV4RnJlZSg0LCByYW5kb21JbnQsIHRydWUpKVxuICAgICAgICAgICAgICAgICYmIHRoaXMuaXNWYWxpZGVOU2hpcEluZGV4KDQsIHJhbmRvbUludCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcmVOQ29uc2VjdXRpdmVGcm9tSW5kZXhGcmVlKDQsIHJhbmRvbUludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50XVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludCArIDFdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAzXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ZXMuc3BsaWNlKHJhbmRvbUludCwgMSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhyYW5kb21JbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhyYW5kb21JbnQgKyAzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnRdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMTBdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMjBdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMzBdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlcy5zcGxpY2UocmFuZG9tSW50LCAxLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCArIDMwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc0ZvclNoaXAoXG4gICAgICAgICAgICAgICAgICAgIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgLCByYW5kb21JbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhhdHRhY2ssIFNoaXBzKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzQ29vcmRpbmF0ZXMgPSB0aGlzLmdldFN0cmluZ2lmeWVkQ29vcmRpbmF0ZXNPZihTaGlwcyk7XG4gICAgICAgIGxldCBhdHRhY2tIaXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGhpdHNoaXBJbmRleDtcbiAgICAgICAgc2hpcHNDb29yZGluYXRlcy5mb3JFYWNoKChzdHJzaGlwQ29vcmRpbmF0ZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBKU09OLnBhcnNlKHN0cnNoaXBDb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICAubWFwKGtleVZhbCA9PiBKU09OLnN0cmluZ2lmeShrZXlWYWwpKTsgLy8gc3RyaW5naWZ5IGVhY2ggcGFpclxuICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShhdHRhY2spKSkge1xuICAgICAgICAgICAgICAgIGF0dGFja0hpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaGl0c2hpcEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChhdHRhY2tIaXQpIHtcbiAgICAgICAgICAgIFNoaXBzW2hpdHNoaXBJbmRleF0uaGl0KCk7XG4gICAgICAgICAgICBpZiAoU2hpcHNbaGl0c2hpcEluZGV4XS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vua1NoaXBzTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRTaG90cy5wdXNoKEpTT04uc3RyaW5naWZ5KGF0dGFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKEpTT04uc3RyaW5naWZ5KGF0dGFjaykpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRTdHJpbmdpZnllZENvb3JkaW5hdGVzT2YoYWxsU2hpcHMpIHtcbiAgICAgICAgY29uc3Qgc2hpcHNDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IEpTT04uc3RyaW5naWZ5KGFsbFNoaXBzW2ldLmNvb3JkaW5hdGVzKTsgLy9zdHJpbmdpZnkgZWFjaCBhcnJheSBvZiBjb29yZGluYXRlcyB0byBhdm9pZCBhcnJheSBvZiBhcnJheXNcbiAgICAgICAgICAgIHNoaXBzQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBzQ29vcmRpbmF0ZXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcC5qc1wiO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9HYW1lQm9hcmQuanNcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuYnVpbGRTaGlwcygpO1xuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQ7XG4gICAgfVxuXG4gICAgYnVpbGRTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDQpIHsgc2hpcHMucHVzaChTaGlwKDEpKSB9XG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgNykgeyBzaGlwcy5wdXNoKFNoaXAoMikpIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCA5KSB7IHNoaXBzLnB1c2goU2hpcCgzKSkgfVxuICAgICAgICAgICAgZWxzZSB7IHNoaXBzLnB1c2goU2hpcCg0KSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGF0dGFja0VuZW15QXQoZW5lbXksIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBlbmVteS5zaGlwcyk7XG4gICAgfVxuXG4gICAgZ2V0TWlzc2VkU2hvb3RzRnJvbShlbmVteUdhbWVCb2FyZCkge1xuICAgICAgICByZXR1cm4gZW5lbXlHYW1lQm9hcmQubWlzc2VkU2hvdHM7XG4gICAgfVxuXG4gICAgZ2V0SGl0U2hvdHNGcm9tKGVuZW15R2FtZUJvYXJkKSB7XG4gICAgICAgIHJldHVybiBlbmVteUdhbWVCb2FyZC5oaXRTaG90cztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKFNoaXBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwID0gT2JqZWN0LmNyZWF0ZShzaGlwTWV0aG9kcyk7XG4gICAgc2hpcC5udW1iZXJPZkhpdHMgPSAwO1xuICAgIHNoaXAubGVuZ3RoID0gU2hpcGxlbmd0aDtcbiAgICBzaGlwLmNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICByZXR1cm4gc2hpcDtcbn1cblxuY29uc3Qgc2hpcE1ldGhvZHMgPSB7XG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyArPSAxO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMubGVuZ3RoID09PSB0aGlzLm51bWJlck9mSGl0cykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IGdlbmVyYXRlQWxwaGFiZXRBcnIgZnJvbSBcIi4vZ2VuZXJhdGVBbHBoYWJldEFyci5qc1wiO1xuXG5jb25zdCBhbHBoYWJldEFyciA9IGdlbmVyYXRlQWxwaGFiZXRBcnIodHJ1ZSk7XG5jb25zdCBvcGVuVGFibGUgPSBcIjx0YWJsZT5cIjtcbmNvbnN0IGNsb3NlVGFibGUgPSBcIjwvdGFibGU+XCI7XG5jb25zdCBvcGVuVGFibGVIZWFkID0gXCI8dGg+XCI7XG5jb25zdCBjbG9zZVRhYmxlSGVhZCA9IFwiPC90aD5cIjtcbmNvbnN0IG9wZW5UYWJsZVJvdyA9IFwiPHRyPlwiO1xuY29uc3QgY2xvc2VUYWJsZVJvdyA9IFwiPC90cj5cIjtcbmNvbnN0IG9wZW5UYWJsZURhdGEgPSBcIjx0ZD5cIjtcbmNvbnN0IGNsb3NlVGFibGVEYXRhID0gXCI8L3RkPlwiO1xuXG5jb25zdCBjcmVhdGVQbGF5R3JvdW5kID0gKCkgPT4ge1xuICAgIHJldHVybiBgJHtvcGVuVGFibGV9ICR7Y3JlYXRlRmlyc3RSb3coKX0gJHtjcmVhdGVMYXN0VGVuUm93cygpfSAke2Nsb3NlVGFibGV9YDtcbn1cblxuY29uc3QgY3JlYXRlRmlyc3RSb3cgPSAoKSA9PiB7XG4gICAgbGV0IGZpcnN0Um93RGF0YSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICBmaXJzdFJvd0RhdGEgKz1cbiAgICAgICAgICAgIGAke29wZW5UYWJsZUhlYWR9ICR7YWxwaGFiZXRBcnJbaV19ICR7Y2xvc2VUYWJsZUhlYWR9XG4gICAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBvcGVuVGFibGVSb3cgKyBvcGVuVGFibGVEYXRhXG4gICAgICAgICsgY2xvc2VUYWJsZURhdGFcbiAgICAgICAgKyBmaXJzdFJvd0RhdGEgKyBjbG9zZVRhYmxlUm93O1xufVxuXG5jb25zdCBjcmVhdGVSb3dDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCByb3dDb250ZW50ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICByb3dDb250ZW50ICs9IGAke29wZW5UYWJsZURhdGF9ICR7Y2xvc2VUYWJsZURhdGF9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93Q29udGVudDtcbn1cblxuY29uc3QgY3JlYXRlTGFzdFRlblJvd3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5BcnJheSgxMCldLm1hcCgoZWwsIGluZGV4KSA9PiBgJHtvcGVuVGFibGVSb3d9XG4gICAgJHtvcGVuVGFibGVIZWFkfSR7aW5kZXggKyAxfSR7Y2xvc2VUYWJsZUhlYWR9JHtjcmVhdGVSb3dDb250ZW50KCl9JHtjbG9zZVRhYmxlUm93fWApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldiArIGN1ciwgJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXlHcm91bmQ7IiwiY29uc3QgZ2VuZXJhdGVBbHBoYWJldEFyciA9IChDQVBJVEFMID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4gWy4uLkFycmF5KDI2KV0ubWFwKChfLCBpbmRleCkgPT5cbiAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShpbmRleCArIChDQVBJVEFMID8gNjUgOiA5NykpXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUFscGhhYmV0QXJyOyIsImNvbnN0IGdlbmVyYXRlSW50ZWdlcnNBcnIgPSAoQXJybGVuZ2h0KSA9PiB7XG4gICAgcmV0dXJuIFsuLi5BcnJheShBcnJsZW5naHQpXS5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSW50ZWdlcnNBcnI7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZjtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWZpZWxkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxudGQsXFxudHIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi51c2VyLXBhcnQsXFxuLm9wZW5lbnQtcGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZmllbGRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG50ZCxcXG50ciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxudGQ6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLnVzZXItcGFydCxcXG4ub3BlbmVudC1wYXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDx0aXRsZT5CYXR0bGVTaGlwPC90aXRsZT5cXG48L2hlYWQ+XFxuXFxuPGJvZHk+XFxuICAgIDxoMT4gQkFUVExFU0hJUCA8L2gxPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWZpZWxkcy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlci1zaGlwcy1jb250YWluZXJcXFwiPiA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXItcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlci1nYW1lYm9hcmQtY29udGFpbmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5Vc2VyIEJvYXJkPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9wZW5lbnQtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3BlbmVudC1nYW1lYm9hcmQtY29udGFpbmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5vcGVuZW50PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuXFxuXFxuICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCBodG1sIGZyb20gJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZUJvYXJkLmpzJztcbmltcG9ydCBjcmVhdGVQbGF5R3JvdW5kIGZyb20gJy4vY3JlYXRlUGxheUdyb3VuZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcblxuY29uc3QgcGxheWVyVUkgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudXNlci1nYW1lYm9hcmQtY29udGFpbmVyJyk7XG5jb25zdCBvcGVuZW50VUkgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcub3BlbmVudC1nYW1lYm9hcmQtY29udGFpbmVyJyk7XG5cbmNvbnN0IGFsbENlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpO1xuY29uc29sZS5sb2coYWxsQ2VsbHMubGVuZ3RoKTtcbi8vIFBsYXllclxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuY29uc3QgcGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuY29uc3QgcGxheWVyU2hpcHMgPSBwbGF5ZXIuc2hpcHM7XG4vLyBvcGVuZW50XG5jb25zdCBvcGVuZW50ID0gbmV3IFBsYXllcigpO1xuY29uc3Qgb3BlbmVudEdhbWVib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbmNvbnN0IG9wZW5lbnRTaGlwcyA9IG9wZW5lbnQuc2hpcHM7XG5cbmxldCBjdXJyZW50UGxheWVyID0gJ3BsYXllcic7XG5cbnBsYXllclVJLmlubmVySFRNTCA9IGNyZWF0ZVBsYXlHcm91bmQoKTtcbm9wZW5lbnRVSS5pbm5lckhUTUwgPSBjcmVhdGVQbGF5R3JvdW5kKCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiU2hpcCIsImdlbmVyYXRlQWxwaGFiZXRBcnIiLCJnZW5lcmF0ZUludGVnZXJzQXJyIiwiR2FtZUJvYXJkIiwibWlzc2VkU2hvdHMiLCJoaXRTaG90cyIsInN1bmtTaGlwc051bWJlciIsImFsbENvb3JkaW5hdGVzIiwiZ2V0QWxsQ29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiQXJyYXkiLCJlbCIsImluZGV4IiwiY29vcmRpbmF0ZXMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwIiwiZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc0ZvclNoaXAiLCJpbnRlZ2VycyIsInNsaWNlIiwiYWxwaGFiZXQiLCJqIiwiY29vcmRpbmF0ZSIsImFkamFjZW50SW5kZXhlc09mSW5kZXgiLCJmaWx0ZXIiLCJzcGxpY2UiLCJudW1iZXJPZmNvbnNlY3V0aXZlcyIsInN0YXJ0SW5kZXgiLCJWRVJUSUNBTCIsInJlc3VsdCIsImluY2x1ZGVzIiwibiIsInJhbmRvbUludCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyIsImFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUiLCJpc1ZhbGlkZU5TaGlwSW5kZXgiLCJhdHRhY2siLCJTaGlwcyIsInNoaXBzQ29vcmRpbmF0ZXMiLCJnZXRTdHJpbmdpZnllZENvb3JkaW5hdGVzT2YiLCJhdHRhY2tIaXQiLCJoaXRzaGlwSW5kZXgiLCJzdHJzaGlwQ29vcmRpbmF0ZXMiLCJzaGlwQ29vcmRpbmF0ZXMiLCJwYXJzZSIsImtleVZhbCIsImhpdCIsImlzU3VuayIsImFsbFNoaXBzIiwiUGxheWVyIiwiYnVpbGRTaGlwcyIsImdhbWVCb2FyZCIsImVuZW15IiwicmVjZWl2ZUF0dGFjayIsImVuZW15R2FtZUJvYXJkIiwiU2hpcGxlbmd0aCIsIk9iamVjdCIsImNyZWF0ZSIsInNoaXBNZXRob2RzIiwibnVtYmVyT2ZIaXRzIiwiYWxwaGFiZXRBcnIiLCJvcGVuVGFibGUiLCJjbG9zZVRhYmxlIiwib3BlblRhYmxlSGVhZCIsImNsb3NlVGFibGVIZWFkIiwib3BlblRhYmxlUm93IiwiY2xvc2VUYWJsZVJvdyIsIm9wZW5UYWJsZURhdGEiLCJjbG9zZVRhYmxlRGF0YSIsImNyZWF0ZVBsYXlHcm91bmQiLCJjcmVhdGVGaXJzdFJvdyIsImNyZWF0ZUxhc3RUZW5Sb3dzIiwiZmlyc3RSb3dEYXRhIiwiY3JlYXRlUm93Q29udGVudCIsInJvd0NvbnRlbnQiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyIiwiQ0FQSVRBTCIsIl8iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJBcnJsZW5naHQiLCJzdHlsZSIsImh0bWwiLCJwbGF5ZXJVSSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wZW5lbnRVSSIsImFsbENlbGxzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25zb2xlIiwibG9nIiwicGxheWVyIiwicGxheWVyR2FtZWJvYXJkIiwicGxheWVyU2hpcHMiLCJvcGVuZW50Iiwib3BlbmVudEdhbWVib2FyZCIsIm9wZW5lbnRTaGlwcyIsImN1cnJlbnRQbGF5ZXIiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9