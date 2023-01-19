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

/***/ "./src/Classes/GameBoard.js":
/*!**********************************!*\
  !*** ./src/Classes/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpfullFunctions_generateAlphabetArr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpfullFunctions/generateAlphabetArr.js */ "./src/helpfullFunctions/generateAlphabetArr.js");
/* harmony import */ var _helpfullFunctions_generateIntegersArr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpfullFunctions/generateIntegersArr.js */ "./src/helpfullFunctions/generateIntegersArr.js");
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
      var integers = (0,_helpfullFunctions_generateIntegersArr_js__WEBPACK_IMPORTED_MODULE_1__["default"])(11).slice(1);
      var alphabet = (0,_helpfullFunctions_generateAlphabetArr_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      var coordinates = [];
      for (var j = 0; j < 10; j += 1) {
        for (var i = 0; i < 10; i += 1) {
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
        }
        this.hitShots.push(JSON.stringify(attack));
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

/***/ "./src/Classes/Player.js":
/*!*******************************!*\
  !*** ./src/Classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Classes_Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Ship.js */ "./src/Classes/Ship.js");
/* harmony import */ var _Classes_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Classes/GameBoard.js */ "./src/Classes/GameBoard.js");
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
    this.gameBoard = new _Classes_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  _createClass(Player, [{
    key: "buildShips",
    value: function buildShips() {
      var ships = [];
      for (var i = 0; i < 10; i += 1) {
        if (i < 4) {
          ships.push((0,_Classes_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));
        } else if (i < 7) {
          ships.push((0,_Classes_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2));
        } else if (i < 9) {
          ships.push((0,_Classes_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3));
        } else {
          ships.push((0,_Classes_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4));
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

/***/ "./src/Classes/Ship.js":
/*!*****************************!*\
  !*** ./src/Classes/Ship.js ***!
  \*****************************/
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

/***/ "./src/Events/addEvents.js":
/*!*********************************!*\
  !*** ./src/Events/addEvents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpfullFunctions_createPlayGround_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpfullFunctions/createPlayGround.js */ "./src/helpfullFunctions/createPlayGround.js");
/* harmony import */ var _Classes_Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Classes/Player.js */ "./src/Classes/Player.js");
/* harmony import */ var _helpfullFunctions_DOMInteraction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpfullFunctions/DOMInteraction.js */ "./src/helpfullFunctions/DOMInteraction.js");



var addEvents = function addEvents() {
  var playerUI = document.querySelector('.user-gameboard-container');
  var openentUI = document.querySelector('.openent-gameboard-container');
  // Player
  var player = new _Classes_Player_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var playerGameboard = player.gameBoard;
  var playerShips = player.ships;
  playerGameboard.placeShipsAtRandomCoordinates(playerShips);
  // openent
  var openent = new _Classes_Player_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var openentGameboard = openent.gameBoard;
  var openentShips = openent.ships;
  openentGameboard.placeShipsAtRandomCoordinates(openentShips);
  window.addEventListener('load', function () {
    (0,_helpfullFunctions_DOMInteraction_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    displayAllShips(playerShips, playerGameboard);
  });
  openentUI.addEventListener('click', function (el) {
    return attackOpenentAt(el);
  });
  playerUI.innerHTML = (0,_helpfullFunctions_createPlayGround_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  openentUI.innerHTML = (0,_helpfullFunctions_createPlayGround_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  console.log(playerGameboard.indexes);
  var attackOpenentAt = function attackOpenentAt(el) {
    if (typeof (el.target.className * 1) === 'number' && el.target.className * 1 !== 0) {
      var attackCoodinates = getAttackCoorOnGameboard(el, openentGameboard);
      player.attackEnemyAt(openent, attackCoodinates);
      displayAttackOnGameBoard(el, openentGameboard);
    }
  };
};
var displayAllShips = function displayAllShips(ships, gameboard) {
  ships.forEach(function (ship) {
    displayShip(ship, gameboard);
  });
};
var displayShip = function displayShip(ship, gameboard) {
  var shipCoorIndexes = [];
  var shipCoordinates = ship.coordinates.map(function (coor) {
    return JSON.stringify(coor);
  });
  shipCoordinates.forEach(function (coor) {
    var gameboardAllcoords = gameboard.allCoordinates.map(function (coords) {
      return JSON.stringify(coords);
    });
    var indexFromAllCoor = gameboardAllcoords.indexOf(coor);
    shipCoorIndexes.push(indexFromAllCoor);
  });
  var squares = document.querySelectorAll('td');
  shipCoorIndexes.forEach(function (ind) {
    return squares[ind + 1].style.border = '2px solid blue';
  });
};
var displayAttackOnGameBoard = function displayAttackOnGameBoard(attack, gameboard) {
  var attackCoor = getAttackCoorOnGameboard(attack, gameboard);
  gameboard.hitShots.includes(JSON.stringify(attackCoor)) ? attack.target.className = "".concat(attack.target.className, " hit") : attack.target.className = "".concat(attack.target.className, " clicked");
};
var getAttackCoorOnGameboard = function getAttackCoorOnGameboard(attack, gameboard) {
  var attackIndex = attack.target.className * 1 - 102;
  var attackCoodinates = gameboard.allCoordinates[attackIndex];
  return attackCoodinates;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEvents);

/***/ }),

/***/ "./src/helpfullFunctions/DOMInteraction.js":
/*!*************************************************!*\
  !*** ./src/helpfullFunctions/DOMInteraction.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addClassNameToAll = function addClassNameToAll() {
  var allTd = document.querySelectorAll('td');
  allTd.forEach(function (td, index) {
    return td.className = "".concat(index);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addClassNameToAll);

/***/ }),

/***/ "./src/helpfullFunctions/createPlayGround.js":
/*!***************************************************!*\
  !*** ./src/helpfullFunctions/createPlayGround.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateAlphabetArr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateAlphabetArr.js */ "./src/helpfullFunctions/generateAlphabetArr.js");
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

/***/ "./src/helpfullFunctions/generateAlphabetArr.js":
/*!******************************************************!*\
  !*** ./src/helpfullFunctions/generateAlphabetArr.js ***!
  \******************************************************/
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

/***/ "./src/helpfullFunctions/generateIntegersArr.js":
/*!******************************************************!*\
  !*** ./src/helpfullFunctions/generateIntegersArr.js ***!
  \******************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --body-background-color: #ddf;\n    --clicked-cell-background-color: #aaf;\n    --hit-cell-background: #f99;\n}\n\n* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n}\n\nbody {\n    background-color: var(--body-background-color);\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntd {\n    border: 1.4px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\n.openent-part td:hover {\n    background-color: aquamarine;\n}\n\ntd:first-child {\n    border: none;\n}\n\n.openent-part td:active {\n    background-color: var(--body-background-color);\n}\n\n.openent-part .clicked {\n    background-color: var(--clicked-cell-background-color);\n}\n\n.openent-part .hit {\n    background-color: var(--hit-cell-background);\n}\n\n.openent-part .sunk {\n    background-color: var(--hit-cell-background);\n    border: 2px solid red;\n}\n\ntd:first-child:hover,\ntd:first-child:active {\n    background-color: var(--body-background-color);\n}\n\n.user-part,\n.openent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,4CAA4C;IAC5C,qBAAqB;AACzB;;AAEA;;IAEI,8CAA8C;AAClD;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb","sourcesContent":[":root {\n    --body-background-color: #ddf;\n    --clicked-cell-background-color: #aaf;\n    --hit-cell-background: #f99;\n}\n\n* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n}\n\nbody {\n    background-color: var(--body-background-color);\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntd {\n    border: 1.4px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\n.openent-part td:hover {\n    background-color: aquamarine;\n}\n\ntd:first-child {\n    border: none;\n}\n\n.openent-part td:active {\n    background-color: var(--body-background-color);\n}\n\n.openent-part .clicked {\n    background-color: var(--clicked-cell-background-color);\n}\n\n.openent-part .hit {\n    background-color: var(--hit-cell-background);\n}\n\n.openent-part .sunk {\n    background-color: var(--hit-cell-background);\n    border: 2px solid red;\n}\n\ntd:first-child:hover,\ntd:first-child:active {\n    background-color: var(--body-background-color);\n}\n\n.user-part,\n.openent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/html/index.html":
/*!*****************************!*\
  !*** ./src/html/index.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>BattleShip</title>\n</head>\n\n<body>\n    <h1> BATTLESHIP </h1>\n\n    <div class=\"game-fields-container\">\n        <div class=\"user-ships-container\"> </div>\n        <div class=\"user-part\">\n            <div class=\"user-gameboard-container\"></div>\n            <div class=\"caption\">User Board</div>\n        </div>\n        <div class=\"openent-part\">\n            <div class=\"openent-gameboard-container\"></div>\n            <div class=\"caption\">openent</div>\n        </div>\n\n\n    </div>\n\n\n    </div>\n    </div>\n\n\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

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
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _html_index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/index.html */ "./src/html/index.html");
/* harmony import */ var _Events_addEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events/addEvents.js */ "./src/Events/addEvents.js");



(0,_Events_addEvents_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNEO0FBQ1M7QUFFOUNnRSxnRUFBUyxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9DbGFzc2VzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NsYXNzZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ2xhc3Nlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRXZlbnRzL2FkZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBmdWxsRnVuY3Rpb25zL0RPTUludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGZ1bGxGdW5jdGlvbnMvY3JlYXRlUGxheUdyb3VuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBmdWxsRnVuY3Rpb25zL2dlbmVyYXRlQWxwaGFiZXRBcnIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZnVsbEZ1bmN0aW9ucy9nZW5lcmF0ZUludGVnZXJzQXJyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaHRtbC9pbmRleC5odG1sIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbmltcG9ydCBnZW5lcmF0ZUFscGhhYmV0QXJyIGZyb20gXCIuLi9oZWxwZnVsbEZ1bmN0aW9ucy9nZW5lcmF0ZUFscGhhYmV0QXJyLmpzXCI7XG5pbXBvcnQgZ2VuZXJhdGVJbnRlZ2Vyc0FyciBmcm9tIFwiLi4vaGVscGZ1bGxGdW5jdGlvbnMvZ2VuZXJhdGVJbnRlZ2Vyc0Fyci5qc1wiO1xuY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICAgICAgICB0aGlzLmhpdFNob3RzID0gW107XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hbGxDb29yZGluYXRlcyA9IHRoaXMuZ2V0QWxsQ29vcmRpbmF0ZXMoKTtcbiAgICAgICAgdGhpcy5pbmRleGVzID0gKCgpID0+IFsuLi5BcnJheSgxMDApXVxuICAgICAgICAgICAgLm1hcCgoZWwsIGluZGV4KSA9PiBpbmRleCkpKCk7XG5cbiAgICB9O1xuXG5cbiAgICBwbGFjZVNoaXBBdChTaGlwLCBjb29yZGluYXRlcykge1xuICAgICAgICBTaGlwLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMoc2hpcHMpIHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzRm9yU2hpcChzaGlwKSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsQ29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IGludGVnZXJzID0gZ2VuZXJhdGVJbnRlZ2Vyc0FycigxMSkuc2xpY2UoMSk7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gZ2VuZXJhdGVBbHBoYWJldEFycigpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB7fTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlW2FscGhhYmV0W2ldXSA9IGludGVnZXJzW2pdO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhpbmRleCkge1xuICAgICAgICBjb25zdCBhZGphY2VudEluZGV4ZXNPZkluZGV4ID0gW1xuICAgICAgICAgICAgaW5kZXggKyAxXG4gICAgICAgICAgICAsIGluZGV4IC0gMVxuICAgICAgICAgICAgLCBpbmRleCArIDEwXG4gICAgICAgICAgICAsIGluZGV4IC0gMTBcbiAgICAgICAgICAgICwgaW5kZXggKyA5XG4gICAgICAgICAgICAsIGluZGV4IC0gOVxuICAgICAgICAgICAgLCBpbmRleCArIDExXG4gICAgICAgICAgICAsIGluZGV4IC0gMTFcbiAgICAgICAgXS5maWx0ZXIoKGVsKSA9PiBlbCA+PSAwKTtcbiAgICAgICAgYWRqYWNlbnRJbmRleGVzT2ZJbmRleC5mb3JFYWNoKChpbmRleCkgPT4gdGhpcy5pbmRleGVzLnNwbGljZShpbmRleCwgMSwgJycpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBhcmVOQ29uc2VjdXRpdmVGcm9tSW5kZXhGcmVlKFxuICAgICAgICBudW1iZXJPZmNvbnNlY3V0aXZlc1xuICAgICAgICAsIHN0YXJ0SW5kZXhcbiAgICAgICAgLCBWRVJUSUNBTCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgIHdoaWxlIChpIDw9IG51bWJlck9mY29uc2VjdXRpdmVzKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLmluZGV4ZXMuaW5jbHVkZXMoc3RhcnRJbmRleCkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBWRVJUSUNBTCA/IHN0YXJ0SW5kZXggKz0gMTAgOiBzdGFydEluZGV4ICsgMTtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlzVmFsaWRlTlNoaXBJbmRleChuLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gKGluZGV4ICUgMTApIDw9ICgxMCAtIG4pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzRm9yU2hpcChcbiAgICAgICAgc2hpcCxcbiAgICAgICAgcmFuZG9tSW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgICkge1xuICAgICAgICBpZiAoc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICh0aGlzLmluZGV4ZXMuaW5jbHVkZXMocmFuZG9tSW50KSkgP1xuICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnRdXSA6XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzRm9yU2hpcChcbiAgICAgICAgICAgICAgICAgICAgc2hpcFxuICAgICAgICAgICAgICAgICAgICAsIHJhbmRvbUludCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5pbmRleGVzLnNwbGljZShyYW5kb21JbnQsIDEsICcnKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuYXJlTkNvbnNlY3V0aXZlRnJvbUluZGV4RnJlZSgyLCByYW5kb21JbnQpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5hcmVOQ29uc2VjdXRpdmVGcm9tSW5kZXhGcmVlKDIsIHJhbmRvbUludCwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5pc1ZhbGlkZU5TaGlwSW5kZXgoMiwgcmFuZG9tSW50KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUoMiwgcmFuZG9tSW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnRdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMV1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleGVzLnNwbGljZShyYW5kb21JbnQsIDEsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50ICsgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50XVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludCArIDEwXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ZXMuc3BsaWNlKHJhbmRvbUludCwgMSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhyYW5kb21JbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyhyYW5kb21JbnQgKyAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXNGb3JTaGlwKFxuICAgICAgICAgICAgICAgICAgICBzaGlwXG4gICAgICAgICAgICAgICAgICAgICwgcmFuZG9tSW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpcC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5hcmVOQ29uc2VjdXRpdmVGcm9tSW5kZXhGcmVlKDMsIHJhbmRvbUludClcbiAgICAgICAgICAgICAgICB8fCB0aGlzLmFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUoMywgcmFuZG9tSW50LCB0cnVlKSlcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmlzVmFsaWRlTlNoaXBJbmRleCgzLCByYW5kb21JbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJlTkNvbnNlY3V0aXZlRnJvbUluZGV4RnJlZSgzLCByYW5kb21JbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludF1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludCArIDJdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlcy5zcGxpY2UocmFuZG9tSW50LCAxLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCArIDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludF1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAxMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAyMF1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleGVzLnNwbGljZShyYW5kb21JbnQsIDEsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50ICsgMjApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzRm9yU2hpcChcbiAgICAgICAgICAgICAgICAgICAgc2hpcFxuICAgICAgICAgICAgICAgICAgICAsIHJhbmRvbUludCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaXAubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuYXJlTkNvbnNlY3V0aXZlRnJvbUluZGV4RnJlZSg0LCByYW5kb21JbnQpXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5hcmVOQ29uc2VjdXRpdmVGcm9tSW5kZXhGcmVlKDQsIHJhbmRvbUludCwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5pc1ZhbGlkZU5TaGlwSW5kZXgoNCwgcmFuZG9tSW50KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUoNCwgcmFuZG9tSW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnRdXG4gICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMuYWxsQ29vcmRpbmF0ZXNbcmFuZG9tSW50ICsgMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAyXVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludCArIDNdXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhlcy5zcGxpY2UocmFuZG9tSW50LCAxLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWRqYWNlbnRJbmRleGVzT2ZJbmRleEZyb21JbmRleGVzKHJhbmRvbUludCArIDMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENvb3JkaW5hdGVzW3JhbmRvbUludF1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAxMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAyMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGhpcy5hbGxDb29yZGluYXRlc1tyYW5kb21JbnQgKyAzMF1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleGVzLnNwbGljZShyYW5kb21JbnQsIDEsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBZGphY2VudEluZGV4ZXNPZkluZGV4RnJvbUluZGV4ZXMocmFuZG9tSW50ICsgMzApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGVzRm9yU2hpcChcbiAgICAgICAgICAgICAgICAgICAgc2hpcFxuICAgICAgICAgICAgICAgICAgICAsIHJhbmRvbUludCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGF0dGFjaywgU2hpcHMpIHtcbiAgICAgICAgY29uc3Qgc2hpcHNDb29yZGluYXRlcyA9IHRoaXMuZ2V0U3RyaW5naWZ5ZWRDb29yZGluYXRlc09mKFNoaXBzKTtcbiAgICAgICAgbGV0IGF0dGFja0hpdCA9IGZhbHNlO1xuICAgICAgICBsZXQgaGl0c2hpcEluZGV4O1xuICAgICAgICBzaGlwc0Nvb3JkaW5hdGVzLmZvckVhY2goKHN0cnNoaXBDb29yZGluYXRlcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IEpTT04ucGFyc2Uoc3Ryc2hpcENvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5VmFsID0+IEpTT04uc3RyaW5naWZ5KGtleVZhbCkpOyAvLyBzdHJpbmdpZnkgZWFjaCBwYWlyXG4gICAgICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGF0dGFjaykpKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNrSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBoaXRzaGlwSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGF0dGFja0hpdCkge1xuICAgICAgICAgICAgU2hpcHNbaGl0c2hpcEluZGV4XS5oaXQoKTtcbiAgICAgICAgICAgIGlmIChTaGlwc1toaXRzaGlwSW5kZXhdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rU2hpcHNOdW1iZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGl0U2hvdHMucHVzaChKU09OLnN0cmluZ2lmeShhdHRhY2spKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2VkU2hvdHMucHVzaChKU09OLnN0cmluZ2lmeShhdHRhY2spKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0U3RyaW5naWZ5ZWRDb29yZGluYXRlc09mKGFsbFNoaXBzKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBKU09OLnN0cmluZ2lmeShhbGxTaGlwc1tpXS5jb29yZGluYXRlcyk7IC8vc3RyaW5naWZ5IGVhY2ggYXJyYXkgb2YgY29vcmRpbmF0ZXMgdG8gYXZvaWQgYXJyYXkgb2YgYXJyYXlzXG4gICAgICAgICAgICBzaGlwc0Nvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwc0Nvb3JkaW5hdGVzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkOyIsImltcG9ydCBTaGlwIGZyb20gXCIuLi9DbGFzc2VzL1NoaXAuanNcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL0NsYXNzZXMvR2FtZUJvYXJkLmpzXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLmJ1aWxkU2hpcHMoKTtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgYnVpbGRTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDQpIHsgc2hpcHMucHVzaChTaGlwKDEpKSB9XG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgNykgeyBzaGlwcy5wdXNoKFNoaXAoMikpIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCA5KSB7IHNoaXBzLnB1c2goU2hpcCgzKSkgfVxuICAgICAgICAgICAgZWxzZSB7IHNoaXBzLnB1c2goU2hpcCg0KSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGF0dGFja0VuZW15QXQoZW5lbXksIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBlbmVteS5zaGlwcyk7XG4gICAgfVxuXG4gICAgZ2V0TWlzc2VkU2hvb3RzRnJvbShlbmVteUdhbWVCb2FyZCkge1xuICAgICAgICByZXR1cm4gZW5lbXlHYW1lQm9hcmQubWlzc2VkU2hvdHM7XG4gICAgfVxuXG4gICAgZ2V0SGl0U2hvdHNGcm9tKGVuZW15R2FtZUJvYXJkKSB7XG4gICAgICAgIHJldHVybiBlbmVteUdhbWVCb2FyZC5oaXRTaG90cztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKFNoaXBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwID0gT2JqZWN0LmNyZWF0ZShzaGlwTWV0aG9kcyk7XG4gICAgc2hpcC5udW1iZXJPZkhpdHMgPSAwO1xuICAgIHNoaXAubGVuZ3RoID0gU2hpcGxlbmd0aDtcbiAgICBzaGlwLmNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICByZXR1cm4gc2hpcDtcbn1cblxuY29uc3Qgc2hpcE1ldGhvZHMgPSB7XG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyArPSAxO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMubGVuZ3RoID09PSB0aGlzLm51bWJlck9mSGl0cykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IGNyZWF0ZVBsYXlHcm91bmQgZnJvbSAnLi4vaGVscGZ1bGxGdW5jdGlvbnMvY3JlYXRlUGxheUdyb3VuZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL0NsYXNzZXMvUGxheWVyLmpzJztcbmltcG9ydCBhZGRDbGFzc05hbWVUb0FsbCBmcm9tICcuLi9oZWxwZnVsbEZ1bmN0aW9ucy9ET01JbnRlcmFjdGlvbi5qcyc7XG5cbmNvbnN0IGFkZEV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJVSSA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudXNlci1nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgb3BlbmVudFVJID0gZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5vcGVuZW50LWdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICAvLyBQbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gcGxheWVyLmdhbWVCb2FyZDtcbiAgICBjb25zdCBwbGF5ZXJTaGlwcyA9IHBsYXllci5zaGlwcztcbiAgICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMocGxheWVyU2hpcHMpO1xuICAgIC8vIG9wZW5lbnRcbiAgICBjb25zdCBvcGVuZW50ID0gbmV3IFBsYXllcigpO1xuICAgIGNvbnN0IG9wZW5lbnRHYW1lYm9hcmQgPSBvcGVuZW50LmdhbWVCb2FyZDtcbiAgICBjb25zdCBvcGVuZW50U2hpcHMgPSBvcGVuZW50LnNoaXBzO1xuICAgIG9wZW5lbnRHYW1lYm9hcmQucGxhY2VTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMob3BlbmVudFNoaXBzKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBhZGRDbGFzc05hbWVUb0FsbCgpO1xuICAgICAgICBkaXNwbGF5QWxsU2hpcHMocGxheWVyU2hpcHMsIHBsYXllckdhbWVib2FyZClcbiAgICB9KVxuICAgIG9wZW5lbnRVSS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4gYXR0YWNrT3BlbmVudEF0KGVsKSlcbiAgICBwbGF5ZXJVSS5pbm5lckhUTUwgPSBjcmVhdGVQbGF5R3JvdW5kKCk7XG4gICAgb3BlbmVudFVJLmlubmVySFRNTCA9IGNyZWF0ZVBsYXlHcm91bmQoKTtcblxuICAgIGNvbnNvbGUubG9nKHBsYXllckdhbWVib2FyZC5pbmRleGVzKTtcbiAgICBjb25zdCBhdHRhY2tPcGVuZW50QXQgPSAoZWwpID0+IHtcbiAgICAgICAgaWYgKCh0eXBlb2YgKGVsLnRhcmdldC5jbGFzc05hbWUgKiAxKSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAoZWwudGFyZ2V0LmNsYXNzTmFtZSAqIDEpICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tDb29kaW5hdGVzID0gZ2V0QXR0YWNrQ29vck9uR2FtZWJvYXJkKGVsLCBvcGVuZW50R2FtZWJvYXJkKTtcbiAgICAgICAgICAgIHBsYXllci5hdHRhY2tFbmVteUF0KG9wZW5lbnQsIGF0dGFja0Nvb2RpbmF0ZXMpO1xuICAgICAgICAgICAgZGlzcGxheUF0dGFja09uR2FtZUJvYXJkKGVsLCBvcGVuZW50R2FtZWJvYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZGlzcGxheUFsbFNoaXBzID0gKHNoaXBzLCBnYW1lYm9hcmQpID0+IHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGRpc3BsYXlTaGlwKHNoaXAsIGdhbWVib2FyZCk7XG4gICAgfSlcbn1cblxuY29uc3QgZGlzcGxheVNoaXAgPSAoc2hpcCwgZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3Qgc2hpcENvb3JJbmRleGVzID0gW11cbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBzaGlwLmNvb3JkaW5hdGVzLm1hcCgoY29vcikgPT4gSlNPTi5zdHJpbmdpZnkoY29vcikpO1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZEFsbGNvb3JkcyA9IGdhbWVib2FyZC5hbGxDb29yZGluYXRlcy5tYXAoXG4gICAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNvb3JkcykpO1xuICAgICAgICBjb25zdCBpbmRleEZyb21BbGxDb29yID0gZ2FtZWJvYXJkQWxsY29vcmRzLmluZGV4T2YoXG4gICAgICAgICAgICBjb29yXG4gICAgICAgICk7XG4gICAgICAgIHNoaXBDb29ySW5kZXhlcy5wdXNoKGluZGV4RnJvbUFsbENvb3IpO1xuICAgIH0pO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgIHNoaXBDb29ySW5kZXhlcy5mb3JFYWNoKChpbmQpID0+IHNxdWFyZXNbaW5kICsgMV1cbiAgICAgICAgLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgYmx1ZScpO1xufVxuXG5jb25zdCBkaXNwbGF5QXR0YWNrT25HYW1lQm9hcmQgPSAoYXR0YWNrLCBnYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBhdHRhY2tDb29yID0gZ2V0QXR0YWNrQ29vck9uR2FtZWJvYXJkKGF0dGFjaywgZ2FtZWJvYXJkKTtcbiAgICBnYW1lYm9hcmQuaGl0U2hvdHMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoYXR0YWNrQ29vcikpXG4gICAgICAgID8gYXR0YWNrLnRhcmdldC5jbGFzc05hbWUgPSBgJHthdHRhY2sudGFyZ2V0LmNsYXNzTmFtZX0gaGl0YFxuICAgICAgICA6IGF0dGFjay50YXJnZXQuY2xhc3NOYW1lID0gYCR7YXR0YWNrLnRhcmdldC5jbGFzc05hbWV9IGNsaWNrZWRgO1xufVxuXG5jb25zdCBnZXRBdHRhY2tDb29yT25HYW1lYm9hcmQgPSAoYXR0YWNrLCBnYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBhdHRhY2tJbmRleCA9IChhdHRhY2sudGFyZ2V0LmNsYXNzTmFtZSAqIDEpIC0gMTAyO1xuICAgIGNvbnN0IGF0dGFja0Nvb2RpbmF0ZXMgPSBnYW1lYm9hcmQuYWxsQ29vcmRpbmF0ZXNbYXR0YWNrSW5kZXhdO1xuICAgIHJldHVybiBhdHRhY2tDb29kaW5hdGVzO1xufVxuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRzOyIsImNvbnN0IGFkZENsYXNzTmFtZVRvQWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICBhbGxUZC5mb3JFYWNoKCh0ZCwgaW5kZXgpID0+IHRkLmNsYXNzTmFtZSA9IGAke2luZGV4fWApXG59XG5leHBvcnQgZGVmYXVsdCBhZGRDbGFzc05hbWVUb0FsbDtcblxuIiwiaW1wb3J0IGdlbmVyYXRlQWxwaGFiZXRBcnIgZnJvbSBcIi4vZ2VuZXJhdGVBbHBoYWJldEFyci5qc1wiO1xuXG5jb25zdCBhbHBoYWJldEFyciA9IGdlbmVyYXRlQWxwaGFiZXRBcnIodHJ1ZSk7XG5jb25zdCBvcGVuVGFibGUgPSBcIjx0YWJsZT5cIjtcbmNvbnN0IGNsb3NlVGFibGUgPSBcIjwvdGFibGU+XCI7XG5jb25zdCBvcGVuVGFibGVIZWFkID0gXCI8dGg+XCI7XG5jb25zdCBjbG9zZVRhYmxlSGVhZCA9IFwiPC90aD5cIjtcbmNvbnN0IG9wZW5UYWJsZVJvdyA9IFwiPHRyPlwiO1xuY29uc3QgY2xvc2VUYWJsZVJvdyA9IFwiPC90cj5cIjtcbmNvbnN0IG9wZW5UYWJsZURhdGEgPSBcIjx0ZD5cIjtcbmNvbnN0IGNsb3NlVGFibGVEYXRhID0gXCI8L3RkPlwiO1xuXG5jb25zdCBjcmVhdGVQbGF5R3JvdW5kID0gKCkgPT4ge1xuICAgIHJldHVybiBgJHtvcGVuVGFibGV9ICR7Y3JlYXRlRmlyc3RSb3coKX0gJHtjcmVhdGVMYXN0VGVuUm93cygpfSAke2Nsb3NlVGFibGV9YDtcbn1cblxuY29uc3QgY3JlYXRlRmlyc3RSb3cgPSAoKSA9PiB7XG4gICAgbGV0IGZpcnN0Um93RGF0YSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICBmaXJzdFJvd0RhdGEgKz1cbiAgICAgICAgICAgIGAke29wZW5UYWJsZUhlYWR9ICR7YWxwaGFiZXRBcnJbaV19ICR7Y2xvc2VUYWJsZUhlYWR9XG4gICAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBvcGVuVGFibGVSb3cgKyBvcGVuVGFibGVEYXRhXG4gICAgICAgICsgY2xvc2VUYWJsZURhdGFcbiAgICAgICAgKyBmaXJzdFJvd0RhdGEgKyBjbG9zZVRhYmxlUm93O1xufVxuXG5jb25zdCBjcmVhdGVSb3dDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCByb3dDb250ZW50ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICByb3dDb250ZW50ICs9IGAke29wZW5UYWJsZURhdGF9ICR7Y2xvc2VUYWJsZURhdGF9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93Q29udGVudDtcbn1cblxuY29uc3QgY3JlYXRlTGFzdFRlblJvd3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5BcnJheSgxMCldLm1hcCgoZWwsIGluZGV4KSA9PiBgJHtvcGVuVGFibGVSb3d9XG4gICAgJHtvcGVuVGFibGVIZWFkfSR7aW5kZXggKyAxfSR7Y2xvc2VUYWJsZUhlYWR9JHtjcmVhdGVSb3dDb250ZW50KCl9JHtjbG9zZVRhYmxlUm93fWApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldiArIGN1ciwgJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXlHcm91bmQ7IiwiY29uc3QgZ2VuZXJhdGVBbHBoYWJldEFyciA9IChDQVBJVEFMID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4gWy4uLkFycmF5KDI2KV0ubWFwKChfLCBpbmRleCkgPT5cbiAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShpbmRleCArIChDQVBJVEFMID8gNjUgOiA5NykpXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUFscGhhYmV0QXJyOyIsImNvbnN0IGdlbmVyYXRlSW50ZWdlcnNBcnIgPSAoQXJybGVuZ2h0KSA9PiB7XG4gICAgcmV0dXJuIFsuLi5BcnJheShBcnJsZW5naHQpXS5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSW50ZWdlcnNBcnI7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ib2R5LWJhY2tncm91bmQtY29sb3I6ICNkZGY7XFxuICAgIC0tY2xpY2tlZC1jZWxsLWJhY2tncm91bmQtY29sb3I6ICNhYWY7XFxuICAgIC0taGl0LWNlbGwtYmFja2dyb3VuZDogI2Y5OTtcXG59XFxuXFxuKiB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZmllbGRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkIHtcXG4gICAgYm9yZGVyOiAxLjRweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5vcGVuZW50LXBhcnQgdGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG50ZDpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm9wZW5lbnQtcGFydCB0ZDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ub3BlbmVudC1wYXJ0IC5jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xpY2tlZC1jZWxsLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ub3BlbmVudC1wYXJ0IC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY2VsbC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLm9wZW5lbnQtcGFydCAuc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jZWxsLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbnRkOmZpcnN0LWNoaWxkOmhvdmVyLFxcbnRkOmZpcnN0LWNoaWxkOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi51c2VyLXBhcnQsXFxuLm9wZW5lbnQtcGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksOENBQThDO0FBQ2xEOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogI2RkZjtcXG4gICAgLS1jbGlja2VkLWNlbGwtYmFja2dyb3VuZC1jb2xvcjogI2FhZjtcXG4gICAgLS1oaXQtY2VsbC1iYWNrZ3JvdW5kOiAjZjk5O1xcbn1cXG5cXG4qIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1maWVsZHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxudGQge1xcbiAgICBib3JkZXI6IDEuNHB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLm9wZW5lbnQtcGFydCB0ZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ub3BlbmVudC1wYXJ0IHRkOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5vcGVuZW50LXBhcnQgLmNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGlja2VkLWNlbGwtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5vcGVuZW50LXBhcnQgLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jZWxsLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ub3BlbmVudC1wYXJ0IC5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNlbGwtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXFxudGQ6Zmlyc3QtY2hpbGQ6aG92ZXIsXFxudGQ6Zmlyc3QtY2hpbGQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLnVzZXItcGFydCxcXG4ub3BlbmVudC1wYXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDx0aXRsZT5CYXR0bGVTaGlwPC90aXRsZT5cXG48L2hlYWQ+XFxuXFxuPGJvZHk+XFxuICAgIDxoMT4gQkFUVExFU0hJUCA8L2gxPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWZpZWxkcy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlci1zaGlwcy1jb250YWluZXJcXFwiPiA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXItcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlci1nYW1lYm9hcmQtY29udGFpbmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5Vc2VyIEJvYXJkPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9wZW5lbnQtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3BlbmVudC1nYW1lYm9hcmQtY29udGFpbmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5vcGVuZW50PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgPC9kaXY+XFxuXFxuXFxuICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbC9pbmRleC5odG1sJztcbmltcG9ydCBhZGRFdmVudHMgZnJvbSAnLi9FdmVudHMvYWRkRXZlbnRzLmpzJztcblxuYWRkRXZlbnRzKCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiZ2VuZXJhdGVBbHBoYWJldEFyciIsImdlbmVyYXRlSW50ZWdlcnNBcnIiLCJHYW1lQm9hcmQiLCJtaXNzZWRTaG90cyIsImhpdFNob3RzIiwic3Vua1NoaXBzTnVtYmVyIiwiYWxsQ29vcmRpbmF0ZXMiLCJnZXRBbGxDb29yZGluYXRlcyIsImluZGV4ZXMiLCJBcnJheSIsImVsIiwiaW5kZXgiLCJTaGlwIiwiY29vcmRpbmF0ZXMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwIiwiZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlc0ZvclNoaXAiLCJpbnRlZ2VycyIsInNsaWNlIiwiYWxwaGFiZXQiLCJqIiwiY29vcmRpbmF0ZSIsImFkamFjZW50SW5kZXhlc09mSW5kZXgiLCJmaWx0ZXIiLCJzcGxpY2UiLCJudW1iZXJPZmNvbnNlY3V0aXZlcyIsInN0YXJ0SW5kZXgiLCJWRVJUSUNBTCIsInJlc3VsdCIsImluY2x1ZGVzIiwibiIsInJhbmRvbUludCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlbW92ZUFkamFjZW50SW5kZXhlc09mSW5kZXhGcm9tSW5kZXhlcyIsImFyZU5Db25zZWN1dGl2ZUZyb21JbmRleEZyZWUiLCJpc1ZhbGlkZU5TaGlwSW5kZXgiLCJhdHRhY2siLCJTaGlwcyIsInNoaXBzQ29vcmRpbmF0ZXMiLCJnZXRTdHJpbmdpZnllZENvb3JkaW5hdGVzT2YiLCJhdHRhY2tIaXQiLCJoaXRzaGlwSW5kZXgiLCJzdHJzaGlwQ29vcmRpbmF0ZXMiLCJzaGlwQ29vcmRpbmF0ZXMiLCJwYXJzZSIsImtleVZhbCIsImhpdCIsImlzU3VuayIsImFsbFNoaXBzIiwiUGxheWVyIiwiYnVpbGRTaGlwcyIsImdhbWVCb2FyZCIsImVuZW15IiwicmVjZWl2ZUF0dGFjayIsImVuZW15R2FtZUJvYXJkIiwiU2hpcGxlbmd0aCIsIk9iamVjdCIsImNyZWF0ZSIsInNoaXBNZXRob2RzIiwibnVtYmVyT2ZIaXRzIiwiY3JlYXRlUGxheUdyb3VuZCIsImFkZENsYXNzTmFtZVRvQWxsIiwiYWRkRXZlbnRzIiwicGxheWVyVUkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuZW50VUkiLCJwbGF5ZXIiLCJwbGF5ZXJHYW1lYm9hcmQiLCJwbGF5ZXJTaGlwcyIsInBsYWNlU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzIiwib3BlbmVudCIsIm9wZW5lbnRHYW1lYm9hcmQiLCJvcGVuZW50U2hpcHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheUFsbFNoaXBzIiwiYXR0YWNrT3BlbmVudEF0IiwiaW5uZXJIVE1MIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImNsYXNzTmFtZSIsImF0dGFja0Nvb2RpbmF0ZXMiLCJnZXRBdHRhY2tDb29yT25HYW1lYm9hcmQiLCJhdHRhY2tFbmVteUF0IiwiZGlzcGxheUF0dGFja09uR2FtZUJvYXJkIiwiZ2FtZWJvYXJkIiwiZGlzcGxheVNoaXAiLCJzaGlwQ29vckluZGV4ZXMiLCJjb29yIiwiZ2FtZWJvYXJkQWxsY29vcmRzIiwiY29vcmRzIiwiaW5kZXhGcm9tQWxsQ29vciIsImluZGV4T2YiLCJzcXVhcmVzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZCIsInN0eWxlIiwiYm9yZGVyIiwiYXR0YWNrQ29vciIsImF0dGFja0luZGV4IiwiYWxsVGQiLCJ0ZCIsImFscGhhYmV0QXJyIiwib3BlblRhYmxlIiwiY2xvc2VUYWJsZSIsIm9wZW5UYWJsZUhlYWQiLCJjbG9zZVRhYmxlSGVhZCIsIm9wZW5UYWJsZVJvdyIsImNsb3NlVGFibGVSb3ciLCJvcGVuVGFibGVEYXRhIiwiY2xvc2VUYWJsZURhdGEiLCJjcmVhdGVGaXJzdFJvdyIsImNyZWF0ZUxhc3RUZW5Sb3dzIiwiZmlyc3RSb3dEYXRhIiwiY3JlYXRlUm93Q29udGVudCIsInJvd0NvbnRlbnQiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyIiwiQ0FQSVRBTCIsIl8iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJBcnJsZW5naHQiLCJodG1sIl0sInNvdXJjZVJvb3QiOiIifQ==