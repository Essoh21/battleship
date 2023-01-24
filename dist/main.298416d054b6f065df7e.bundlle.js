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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  }
  _createClass(GameBoard, [{
    key: "placeShipAt",
    value: function placeShipAt(ship, coordinates) {
      ship.coordinates = coordinates;
    }
  }, {
    key: "areAllShipsSunk",
    value: function areAllShipsSunk() {
      return this.sunkShipsNumber === 10 ? true : false;
    }
  }, {
    key: "placeShipsAtRandomCoordinates",
    value: function placeShipsAtRandomCoordinates(ships) {
      var _this = this;
      ships.forEach(function (ship) {
        return ship.coordinates = _this.getRandomCoordinatesForShip(ship, ships);
      });
    }
  }, {
    key: "getRandomCoordinatesForShip",
    value: function getRandomCoordinatesForShip(ship, ships) {
      var direction = this.getRandomDirection();
      ship.direction = direction;
      var possibleFirstCoordForShip = this.getPossibleFirstCoordForShipsOfLength(ship.length, direction, ships);
      var randomFirstCoord = possibleFirstCoordForShip[this.getRandomIntegerLessThan(possibleFirstCoordForShip.length)];
      return this.getCoordForShipOfLengthFrom(ship.length, randomFirstCoord, direction);
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(attackCoords, ships) {
      var hit = false;
      for (var i = 0; i < ships.length; i += 1) {
        if (ships[i].containsCoordinates(attackCoords)) {
          ships[i].hit();
          hit = true;
          this.hitShots.push(attackCoords);
          if (ships[i].numberOfHits === ships[i].length) {
            this.sunkShipsNumber += 1;
          }
          break;
        }
      }
      if (!hit) {
        this.missedShots.push(attackCoords);
      }
    }
  }, {
    key: "getCoordForShipOfLengthFrom",
    value: function getCoordForShipOfLengthFrom(length, startCoords, direction) {
      var coordinates = [];
      var i = 0;
      while (i < length) {
        direction === 'horizontal' ? coordinates.push({
          x: startCoords.x,
          y: startCoords.y + i
        }) : coordinates.push({
          x: startCoords.x + i,
          y: startCoords.y
        });
        i += 1;
      }
      return coordinates;
    }
  }, {
    key: "getPossibleFirstCoordForShipsOfLength",
    value: function getPossibleFirstCoordForShipsOfLength(length, direction, allShips) {
      var possibleTopLeftCoords = [];
      for (var y = 0; y < 10; y += 1) {
        for (var x = 0; x < 10; x += 1) {
          var possibletopLeftCoord = {
            x: x,
            y: y
          };
          var shipCoordinates = this.getCoordForShipOfLengthFrom(length, possibletopLeftCoord, direction);
          if (!this.isCoordsValid(shipCoordinates) || this.isOvalapping(shipCoordinates, allShips) || this.areAdjacents(shipCoordinates, allShips)) {
            continue;
          }
          possibleTopLeftCoords.push(possibletopLeftCoord);
        }
      }
      return possibleTopLeftCoords;
    }
  }, {
    key: "isCoordsValid",
    value: function isCoordsValid(coords) {
      var lastCoord = coords[coords.length - 1];
      return lastCoord.x > 9 || lastCoord.y > 9 ? false : true;
    }
  }, {
    key: "isOvalapping",
    value: function isOvalapping(coords, allShips) {
      for (var i = 0; i < coords.length; i += 1) {
        for (var j = 0; j < allShips.length; j += 1) {
          for (var k = 0; k < allShips[j].coordinates.length; k += 1) {
            if (coords[i].x === allShips[j].coordinates[k].x && coords[i].y === allShips[j].coordinates[k].y) {
              return true;
            }
          }
        }
      }
      return false;
    }
  }, {
    key: "areAdjacents",
    value: function areAdjacents(coords, allShips) {
      for (var i = 0; i < coords.length; i += 1) {
        var adjacentsCoords = this.getAdjacentCoords(coords[i]);
        if (this.isOvalapping(adjacentsCoords, allShips)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "getAdjacentCoords",
    value: function getAdjacentCoords(coord) {
      return [{
        x: coord.x,
        y: coord.y - 1
      }, {
        x: coord.x,
        y: coord.y + 1
      }, {
        x: coord.x - 1,
        y: coord.y
      }, {
        x: coord.x + 1,
        y: coord.y
      }, {
        x: coord.x - 1,
        y: coord.y - 1
      }, {
        x: coord.x - 1,
        y: coord.y + 1
      }, {
        x: coord.x + 1,
        y: coord.y - 1
      }, {
        x: coord.x + 1,
        y: coord.y + 1
      }];
    }
  }, {
    key: "getRandomIntegerLessThan",
    value: function getRandomIntegerLessThan(integer) {
      return Math.floor(Math.random() * integer);
    }
  }, {
    key: "getRandomDirection",
    value: function getRandomDirection() {
      return Math.floor(Math.random() * 2) % 2 === 0 ? 'horizontal' : 'vertical';
    }
  }, {
    key: "getAllCoordinates",
    value: function getAllCoordinates() {
      var coordinates = [];
      for (var x = 0; x < 10; x += 1) {
        for (var y = 0; y < 10; y += 1) {
          var coordinate = {
            x: x,
            y: y
          };
          coordinates.push(coordinate);
        }
      }
      return coordinates;
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


var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.ships = this.buildShips();
    this.gameboard = new _Classes_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
          ships.unshift((0,_Classes_Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4));
        }
      }
      return ships;
    }
  }, {
    key: "attackEnemyAt",
    value: function attackEnemyAt(enemy, coordinates) {
      enemy.gameboard.receiveAttack(coordinates, enemy.ships);
    }
  }, {
    key: "attackEnemyAtRandomCoords",
    value: function attackEnemyAtRandomCoords(enemy) {
      var possibleAttacks = this.getpossibleAttackCoordsFrom(enemy.gameboard);
      var randomIndex = Math.floor(Math.random() * possibleAttacks.length);
      var attackCoords = possibleAttacks[randomIndex];
      this.attackEnemyAt(enemy, attackCoords);
    }
  }, {
    key: "getpossibleAttackCoordsFrom",
    value: function getpossibleAttackCoordsFrom(enemyGameboard) {
      var usedAttacks = [].concat(_toConsumableArray(enemyGameboard.missedShots), _toConsumableArray(enemyGameboard.hitShots));
      var futureAttacks = enemyGameboard.allCoordinates.map(function (coords) {
        return JSON.stringify(coords);
      }).filter(function (strCor) {
        return !usedAttacks.map(function (usedAtt) {
          return JSON.stringify(usedAtt);
        }).includes(strCor);
      }).map(function (scro) {
        return JSON.parse(scro);
      });
      return futureAttacks;
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
  ship.coordinates = [];
  ship.direction = 'horizontal';
  return ship;
};
var shipMethods = {
  hit: function hit() {
    this.numberOfHits += 1;
  },
  isSunk: function isSunk() {
    return this.length === this.numberOfHits ? true : false;
  },
  containsCoordinates: function containsCoordinates(coordinates) {
    for (var i = 0; i < this.coordinates.length; i += 1) {
      if (coordinates.x == this.coordinates[i].x && coordinates.y == this.coordinates[i].y) {
        return true;
      }
    }
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/Events/game.js":
/*!****************************!*\
  !*** ./src/Events/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpfullFunctions_addDataValTotd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpfullFunctions/addDataValTotd */ "./src/helpfullFunctions/addDataValTotd.js");
/* harmony import */ var _helpfullFunctions_createPlayGround__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpfullFunctions/createPlayGround */ "./src/helpfullFunctions/createPlayGround.js");
/* harmony import */ var _Classes_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Classes/Player */ "./src/Classes/Player.js");



var game = function game() {
  var player = new _Classes_Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var opponent = new _Classes_Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var playerGameboard = document.querySelector('.user-gameboard-container');
  var opponentGameboard = document.querySelector('.opponent-gameboard-container');
  var play = document.querySelector('.play');
  var randomise = document.querySelector('.randomise');
  var restart = document.querySelector('.restart');
  //add user and opponent gameboards
  playerGameboard.innerHTML = (0,_helpfullFunctions_createPlayGround__WEBPACK_IMPORTED_MODULE_1__["default"])();
  player.gameboard.placeShipsAtRandomCoordinates(player.ships);
  opponentGameboard.innerHTML = (0,_helpfullFunctions_createPlayGround__WEBPACK_IMPORTED_MODULE_1__["default"])();
  opponent.gameboard.placeShipsAtRandomCoordinates(opponent.ships);
  //Events
  window.addEventListener('load', function () {
    (0,_helpfullFunctions_addDataValTotd__WEBPACK_IMPORTED_MODULE_0__["default"])(playerGameboard);
    (0,_helpfullFunctions_addDataValTotd__WEBPACK_IMPORTED_MODULE_0__["default"])(opponentGameboard);
    displayShips(player.ships, playerGameboard);
  });
  restart.addEventListener('click', function () {
    location.reload();
  });
  randomise.addEventListener('click', function () {
    removeShipsOnGameboard(playerGameboard);
    player.gameboard.placeShipsAtRandomCoordinates(player.ships);
    displayShips(player.ships, playerGameboard);
  });
  play.addEventListener('click', function () {
    opponentGameboard.addEventListener('click', function (el) {
      if (el.target.tagName == 'TD') {
        attackOpponentAtCell(opponent, el);
      }
      displayPlayerSunkShips(opponent, opponentGameboard);
      if (opponent.gameboard.areAllShipsSunk()) {
        opponentGameboard.replaceWith(opponentGameboard.cloneNode(true));
        displayWinnerScreen('Player');
        displayNode(restart);
      }
    });
    hideNode(play);
    hideNode(randomise);
  });
};
var attackOpponentAtCell = function attackOpponentAtCell(opponent, cell) {
  var x = Number(cell.target.dataset.x);
  var y = Number(cell.target.dataset.y);
  var attackedCoords = {
    x: x,
    y: y
  };
  opponent.gameboard.receiveAttack(attackedCoords, opponent.ships);
  var hit = false;
  opponent.ships.forEach(function (ship) {
    if (ship.containsCoordinates(attackedCoords)) {
      hit = true;
    }
  });
  hit ? markCellAsHit(cell.target) : markcellAsAttacked(cell.target);
};
function displayShips(ships, gameBoard) {
  ships.forEach(function (ship) {
    ship.coordinates.forEach(function (coord) {
      var x = coord.x;
      var y = coord.y;
      var td = gameBoard.querySelector("td[data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
      td.classList.add("ship");
    });
  });
}
function displayPlayerSunkShips(player, gameboard) {
  player.ships.forEach(function (ship) {
    if (ship.length === ship.numberOfHits) {
      ship.coordinates.forEach(function (coord) {
        var td = gameboard.querySelector("td[data-x= \"".concat(coord.x, "\"][data-y=\"").concat(coord.y, "\"]"));
        td.classList.add('sunk');
      });
    }
  });
}
var markcellAsAttacked = function markcellAsAttacked(cell) {
  cell.classList.add('clicked');
};
var markCellAsHit = function markCellAsHit(cell) {
  cell.classList.add('hit');
};
var displayWinnerScreen = function displayWinnerScreen(player) {
  var screenContainer = document.querySelector('.screen');
  screenContainer.textContent = "".concat(player, " wins the game");
  displayNode(screenContainer);
};
function removeShipsOnGameboard(gameboard) {
  var gameboardTds = gameboard.querySelectorAll('td');
  gameboardTds.forEach(function (td) {
    td.classList.remove('ship');
  });
}
function displayNode(node) {
  node.style.visibility = 'visible';
}
function hideNode(node) {
  node.style.visibility = 'hidden';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

/***/ }),

/***/ "./src/helpfullFunctions/addDataValTotd.js":
/*!*************************************************!*\
  !*** ./src/helpfullFunctions/addDataValTotd.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addDataTotd = function addDataTotd(container) {
  var allTd = container.querySelectorAll('td');
  allTd.forEach(function (td, index) {
    td.dataset.x = "".concat(getXY(index).x);
    td.dataset.y = "".concat(getXY(index).y);
  });
};
function getXY(index) {
  var y = index % 10;
  var x = Math.floor(index / 10);
  return {
    x: x,
    y: y
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDataTotd);

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
  return openTableRow + openTableHead + closeTableHead + firstRowData + closeTableRow;
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --body-background-color: #ddf;\n    --clicked-cell-background-color: #aaf;\n    --hit-cell-background: #f99;\n}\n\n* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n    color: #055;\n}\n\nbody {\n    background-color: var(--body-background-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntd {\n    border: 1.4px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\n.opponent-part td:hover {\n    background-color: aquamarine;\n}\n\n.opponent-part td:active {\n    background-color: var(--body-background-color);\n}\n\n.opponent-part .clicked {\n    background-color: var(--clicked-cell-background-color);\n}\n\n.opponent-part .hit {\n    background-color: var(--hit-cell-background);\n}\n\n.opponent-part .sunk {\n    border: 3px solid red;\n}\n\n.user-part,\n.opponent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.user-part .ship {\n    border: 3px solid blue;\n}\n\n.screen {\n    width: 30vw;\n    height: 2rem;\n    padding: .3rem .2rem;\n    background-color: beige;\n    text-align: center;\n    font-weight: 400;\n    color: blue;\n    visibility: hidden;\n}\n\n.userboard-title {\n    font-size: .9rem;\n}\n\n.opponent-part .caption {\n    font-size: .9rem;\n}\n\n.randomise,\n.play,\n.restart {\n    margin-top: .5rem;\n    font-weight: bold;\n    font-size: .6rem;\n    color: blue;\n    padding: .3rem .2rem;\n    border-radius: .2rem;\n}\n\n.restart {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,8CAA8C;IAC9C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;IAGI,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    --body-background-color: #ddf;\n    --clicked-cell-background-color: #aaf;\n    --hit-cell-background: #f99;\n}\n\n* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n    color: #055;\n}\n\nbody {\n    background-color: var(--body-background-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntd {\n    border: 1.4px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\n.opponent-part td:hover {\n    background-color: aquamarine;\n}\n\n.opponent-part td:active {\n    background-color: var(--body-background-color);\n}\n\n.opponent-part .clicked {\n    background-color: var(--clicked-cell-background-color);\n}\n\n.opponent-part .hit {\n    background-color: var(--hit-cell-background);\n}\n\n.opponent-part .sunk {\n    border: 3px solid red;\n}\n\n.user-part,\n.opponent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.user-part .ship {\n    border: 3px solid blue;\n}\n\n.screen {\n    width: 30vw;\n    height: 2rem;\n    padding: .3rem .2rem;\n    background-color: beige;\n    text-align: center;\n    font-weight: 400;\n    color: blue;\n    visibility: hidden;\n}\n\n.userboard-title {\n    font-size: .9rem;\n}\n\n.opponent-part .caption {\n    font-size: .9rem;\n}\n\n.randomise,\n.play,\n.restart {\n    margin-top: .5rem;\n    font-weight: bold;\n    font-size: .6rem;\n    color: blue;\n    padding: .3rem .2rem;\n    border-radius: .2rem;\n}\n\n.restart {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>BattleShip</title>\n</head>\n\n<body>\n    <h1> BATTLESHIP </h1>\n    <h3 class=\"screen\"> </h3>\n    <div class=\"game-fields-container\">\n        <div class=\"user-ships-container\"> </div>\n        <div class=\"user-part\">\n            <div class=\"user-gameboard-container\"></div>\n            <div class=\"caption\">\n                <div class=\"userboard-title\"> Player </div>\n                <button class=\"randomise\">Randomise</button>\n            </div>\n        </div>\n        <div class=\"opponent-part\">\n            <div class=\"opponent-gameboard-container\"></div>\n            <div class=\"caption\">\n                <div class=\"opponentboard-title\">Opponent</div>\n                <button class=\"play\"> Play</button>\n            </div>\n        </div>\n\n    </div>\n    <button class=\"restart\">Restart</button>\n</body>\n\n</html>";
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
/* harmony import */ var _Events_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events/game */ "./src/Events/game.js");



(0,_Events_game__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDRDtBQUNKO0FBRWpDbkQsd0RBQUksRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ2xhc3Nlcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9DbGFzc2VzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NsYXNzZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0V2ZW50cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGZ1bGxGdW5jdGlvbnMvYWRkRGF0YVZhbFRvdGQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZnVsbEZ1bmN0aW9ucy9jcmVhdGVQbGF5R3JvdW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGZ1bGxGdW5jdGlvbnMvZ2VuZXJhdGVBbHBoYWJldEFyci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2h0bWwvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgICAgIHRoaXMuaGl0U2hvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHNOdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFsbENvb3JkaW5hdGVzID0gdGhpcy5nZXRBbGxDb29yZGluYXRlcygpO1xuICAgIH07XG5cbiAgICBwbGFjZVNoaXBBdChzaGlwLCBjb29yZGluYXRlcykge1xuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rU2hpcHNOdW1iZXIgPT09IDEwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzKHNoaXBzKSB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuY29vcmRpbmF0ZXMgPVxuICAgICAgICAgICAgdGhpcy5nZXRSYW5kb21Db29yZGluYXRlc0ZvclNoaXAoc2hpcCwgc2hpcHMpKTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21Db29yZGluYXRlc0ZvclNoaXAoc2hpcCwgc2hpcHMpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXRSYW5kb21EaXJlY3Rpb24oKTtcbiAgICAgICAgc2hpcC5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlRmlyc3RDb29yZEZvclNoaXAgPVxuICAgICAgICAgICAgdGhpcy5nZXRQb3NzaWJsZUZpcnN0Q29vcmRGb3JTaGlwc09mTGVuZ3RoKHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24sIHNoaXBzKTtcbiAgICAgICAgY29uc3QgcmFuZG9tRmlyc3RDb29yZCA9IHBvc3NpYmxlRmlyc3RDb29yZEZvclNoaXBbXG4gICAgICAgICAgICB0aGlzLmdldFJhbmRvbUludGVnZXJMZXNzVGhhbihwb3NzaWJsZUZpcnN0Q29vcmRGb3JTaGlwLmxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb29yZEZvclNoaXBPZkxlbmd0aEZyb20oc2hpcC5sZW5ndGgsIHJhbmRvbUZpcnN0Q29vcmQsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhhdHRhY2tDb29yZHMsIHNoaXBzKSB7XG4gICAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmNvbnRhaW5zQ29vcmRpbmF0ZXMoYXR0YWNrQ29vcmRzKSkge1xuICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRTaG90cy5wdXNoKGF0dGFja0Nvb3JkcylcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHNbaV0ubnVtYmVyT2ZIaXRzID09PSBzaGlwc1tpXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW5rU2hpcHNOdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhpdCkge1xuICAgICAgICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKGF0dGFja0Nvb3Jkcyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldENvb3JkRm9yU2hpcE9mTGVuZ3RoRnJvbShsZW5ndGgsIHN0YXJ0Q29vcmRzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICAgICAgICA/IGNvb3JkaW5hdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBzdGFydENvb3Jkcy54XG4gICAgICAgICAgICAgICAgICAgICwgeTogc3RhcnRDb29yZHMueSArIGlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogY29vcmRpbmF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHN0YXJ0Q29vcmRzLnggKyBpXG4gICAgICAgICAgICAgICAgICAgICwgeTogc3RhcnRDb29yZHMueVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaSArPSAxO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGdldFBvc3NpYmxlRmlyc3RDb29yZEZvclNoaXBzT2ZMZW5ndGgoXG4gICAgICAgIGxlbmd0aFxuICAgICAgICAsIGRpcmVjdGlvblxuICAgICAgICAsIGFsbFNoaXBzKSB7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlVG9wTGVmdENvb3JkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxldG9wTGVmdENvb3JkID0geyB4LCB5IH07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gdGhpcy5nZXRDb29yZEZvclNoaXBPZkxlbmd0aEZyb20oXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCwgcG9zc2libGV0b3BMZWZ0Q29vcmQsIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAoKCF0aGlzLmlzQ29vcmRzVmFsaWQoc2hpcENvb3JkaW5hdGVzKSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMuaXNPdmFsYXBwaW5nKHNoaXBDb29yZGluYXRlcywgYWxsU2hpcHMpKVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmFyZUFkamFjZW50cyhzaGlwQ29vcmRpbmF0ZXMsIGFsbFNoaXBzKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwb3NzaWJsZVRvcExlZnRDb29yZHMucHVzaChwb3NzaWJsZXRvcExlZnRDb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlVG9wTGVmdENvb3JkcztcbiAgICB9XG5cbiAgICBpc0Nvb3Jkc1ZhbGlkKGNvb3Jkcykge1xuICAgICAgICBjb25zdCBsYXN0Q29vcmQgPSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gKGxhc3RDb29yZC54ID4gOSB8fCBsYXN0Q29vcmQueSA+IDkpID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIGlzT3ZhbGFwcGluZyhjb29yZHMsIGFsbFNoaXBzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFNoaXBzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxTaGlwc1tqXS5jb29yZGluYXRlcy5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRzW2ldLnggPT09IGFsbFNoaXBzW2pdLmNvb3JkaW5hdGVzW2tdLnhcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGNvb3Jkc1tpXS55ID09PSBhbGxTaGlwc1tqXS5jb29yZGluYXRlc1trXS55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhcmVBZGphY2VudHMoY29vcmRzLCBhbGxTaGlwcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgYWRqYWNlbnRzQ29vcmRzID0gdGhpcy5nZXRBZGphY2VudENvb3Jkcyhjb29yZHNbaV0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdmFsYXBwaW5nKGFkamFjZW50c0Nvb3JkcywgYWxsU2hpcHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gICAgZ2V0QWRqYWNlbnRDb29yZHMoY29vcmQpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgeDogY29vcmQueCwgeTogY29vcmQueSAtIDEgfVxuICAgICAgICAgICAgLCB7IHg6IGNvb3JkLngsIHk6IGNvb3JkLnkgKyAxIH1cbiAgICAgICAgICAgICwgeyB4OiBjb29yZC54IC0gMSwgeTogY29vcmQueSB9XG4gICAgICAgICAgICAsIHsgeDogY29vcmQueCArIDEsIHk6IGNvb3JkLnkgfVxuICAgICAgICAgICAgLCB7IHg6IGNvb3JkLnggLSAxLCB5OiBjb29yZC55IC0gMSB9XG4gICAgICAgICAgICAsIHsgeDogY29vcmQueCAtIDEsIHk6IGNvb3JkLnkgKyAxIH1cbiAgICAgICAgICAgICwgeyB4OiBjb29yZC54ICsgMSwgeTogY29vcmQueSAtIDEgfVxuICAgICAgICAgICAgLCB7IHg6IGNvb3JkLnggKyAxLCB5OiBjb29yZC55ICsgMSB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tSW50ZWdlckxlc3NUaGFuKGludGVnZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGludGVnZXIpO1xuICAgIH1cblxuICAgIGdldFJhbmRvbURpcmVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSAlIDIpID09PSAwXG4gICAgICAgICAgICA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgfVxuXG5cbiAgICBnZXRBbGxDb29yZGluYXRlcygpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0geyB4LCB5IH07XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkOyIsImltcG9ydCBTaGlwIGZyb20gXCIuLi9DbGFzc2VzL1NoaXAuanNcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4uL0NsYXNzZXMvR2FtZUJvYXJkLmpzXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLmJ1aWxkU2hpcHMoKTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgYnVpbGRTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDQpIHsgc2hpcHMucHVzaChTaGlwKDEpKSB9XG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgNykgeyBzaGlwcy5wdXNoKFNoaXAoMikpIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCA5KSB7IHNoaXBzLnB1c2goU2hpcCgzKSkgfVxuICAgICAgICAgICAgZWxzZSB7IHNoaXBzLnVuc2hpZnQoU2hpcCg0KSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGF0dGFja0VuZW15QXQoZW5lbXksIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBlbmVteS5zaGlwcyk7XG4gICAgfVxuXG4gICAgYXR0YWNrRW5lbXlBdFJhbmRvbUNvb3JkcyhlbmVteSkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZUF0dGFja3MgPVxuICAgICAgICAgICAgdGhpcy5nZXRwb3NzaWJsZUF0dGFja0Nvb3Jkc0Zyb20oZW5lbXkuZ2FtZWJvYXJkKTtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPVxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVBdHRhY2tzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IHBvc3NpYmxlQXR0YWNrc1tyYW5kb21JbmRleF07XG4gICAgICAgIHRoaXMuYXR0YWNrRW5lbXlBdChlbmVteSwgYXR0YWNrQ29vcmRzKTtcblxuICAgIH1cblxuICAgIGdldHBvc3NpYmxlQXR0YWNrQ29vcmRzRnJvbShlbmVteUdhbWVib2FyZCkge1xuICAgICAgICBjb25zdCB1c2VkQXR0YWNrcyA9IFtcbiAgICAgICAgICAgIC4uLmVuZW15R2FtZWJvYXJkLm1pc3NlZFNob3RzXG4gICAgICAgICAgICAsIC4uLmVuZW15R2FtZWJvYXJkLmhpdFNob3RzXG4gICAgICAgIF1cbiAgICAgICAgY29uc3QgZnV0dXJlQXR0YWNrcyA9XG4gICAgICAgICAgICAoKGVuZW15R2FtZWJvYXJkLmFsbENvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgLm1hcCgoY29vcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjb29yZHMpO1xuICAgICAgICAgICAgICAgIH0pKS5maWx0ZXIoKHN0ckNvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXVzZWRBdHRhY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh1c2VkQXR0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVzZWRBdHQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5pbmNsdWRlcyhzdHJDb3IpXG4gICAgICAgICAgICAgICAgfSkpLm1hcCgoc2NybykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzY3JvKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmdXR1cmVBdHRhY2tzO1xuICAgIH1cblxuXG4gICAgZ2V0TWlzc2VkU2hvb3RzRnJvbShlbmVteUdhbWVCb2FyZCkge1xuICAgICAgICByZXR1cm4gZW5lbXlHYW1lQm9hcmQubWlzc2VkU2hvdHM7XG4gICAgfVxuXG4gICAgZ2V0SGl0U2hvdHNGcm9tKGVuZW15R2FtZUJvYXJkKSB7XG4gICAgICAgIHJldHVybiBlbmVteUdhbWVCb2FyZC5oaXRTaG90cztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKFNoaXBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwID0gT2JqZWN0LmNyZWF0ZShzaGlwTWV0aG9kcyk7XG4gICAgc2hpcC5udW1iZXJPZkhpdHMgPSAwO1xuICAgIHNoaXAubGVuZ3RoID0gU2hpcGxlbmd0aDtcbiAgICBzaGlwLmNvb3JkaW5hdGVzID0gW107XG4gICAgc2hpcC5kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgcmV0dXJuIHNoaXA7XG59XG5cbmNvbnN0IHNoaXBNZXRob2RzID0ge1xuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgKz0gMTtcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5udW1iZXJPZkhpdHMpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG5cbiAgICBjb250YWluc0Nvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZGluYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnggPT0gdGhpcy5jb29yZGluYXRlc1tpXS54XG4gICAgICAgICAgICAgICAgJiYgY29vcmRpbmF0ZXMueSA9PSB0aGlzLmNvb3JkaW5hdGVzW2ldLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBhZGREYXRhVG90ZCBmcm9tIFwiLi4vaGVscGZ1bGxGdW5jdGlvbnMvYWRkRGF0YVZhbFRvdGRcIjtcbmltcG9ydCBjcmVhdGVQbGF5R3JvdW5kIGZyb20gXCIuLi9oZWxwZnVsbEZ1bmN0aW9ucy9jcmVhdGVQbGF5R3JvdW5kXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9DbGFzc2VzL1BsYXllclwiO1xuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBvcHBvbmVudCA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgb3Bwb25lbnRHYW1lYm9hcmQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBsYXkgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpO1xuICAgIGNvbnN0IHJhbmRvbWlzZSA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21pc2UnKTtcblxuICAgIGNvbnN0IHJlc3RhcnQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xuICAgIC8vYWRkIHVzZXIgYW5kIG9wcG9uZW50IGdhbWVib2FyZHNcbiAgICBwbGF5ZXJHYW1lYm9hcmQuaW5uZXJIVE1MID0gY3JlYXRlUGxheUdyb3VuZCgpO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMocGxheWVyLnNoaXBzKTtcbiAgICBvcHBvbmVudEdhbWVib2FyZC5pbm5lckhUTUwgPSBjcmVhdGVQbGF5R3JvdW5kKCk7XG4gICAgb3Bwb25lbnQuZ2FtZWJvYXJkLnBsYWNlU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzKG9wcG9uZW50LnNoaXBzKTtcbiAgICAvL0V2ZW50c1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBhZGREYXRhVG90ZChwbGF5ZXJHYW1lYm9hcmQpO1xuICAgICAgICBhZGREYXRhVG90ZChvcHBvbmVudEdhbWVib2FyZCk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhwbGF5ZXIuc2hpcHMsXG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQpO1xuICAgIH0pO1xuXG4gICAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcbiAgICByYW5kb21pc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVNoaXBzT25HYW1lYm9hcmQocGxheWVyR2FtZWJvYXJkKTtcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXBzQXRSYW5kb21Db29yZGluYXRlcyhwbGF5ZXIuc2hpcHMpO1xuICAgICAgICBkaXNwbGF5U2hpcHMocGxheWVyLnNoaXBzLCBwbGF5ZXJHYW1lYm9hcmQpO1xuICAgIH0pXG5cbiAgICBwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcHBvbmVudEdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsLnRhcmdldC50YWdOYW1lID09ICdURCcpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2tPcHBvbmVudEF0Q2VsbChvcHBvbmVudCwgZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheVBsYXllclN1bmtTaGlwcyhvcHBvbmVudCwgb3Bwb25lbnRHYW1lYm9hcmQpO1xuICAgICAgICAgICAgaWYgKG9wcG9uZW50LmdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIG9wcG9uZW50R2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlV2l0aChvcHBvbmVudEdhbWVib2FyZC5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgICAgICAgICAgICAgZGlzcGxheVdpbm5lclNjcmVlbignUGxheWVyJyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5vZGUocmVzdGFydCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaGlkZU5vZGUocGxheSk7XG4gICAgICAgIGhpZGVOb2RlKHJhbmRvbWlzZSk7XG4gICAgfSlcblxufVxuXG5jb25zdCBhdHRhY2tPcHBvbmVudEF0Q2VsbCA9IChvcHBvbmVudCwgY2VsbCkgPT4ge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC50YXJnZXQuZGF0YXNldC54KTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwudGFyZ2V0LmRhdGFzZXQueSk7XG4gICAgY29uc3QgYXR0YWNrZWRDb29yZHMgPSB7IHgsIHkgfTtcbiAgICBvcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tlZENvb3Jkcywgb3Bwb25lbnQuc2hpcHMpO1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBvcHBvbmVudC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmNvbnRhaW5zQ29vcmRpbmF0ZXMoYXR0YWNrZWRDb29yZHMpKSB7XG4gICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBoaXQgPyBtYXJrQ2VsbEFzSGl0KGNlbGwudGFyZ2V0KSA6IG1hcmtjZWxsQXNBdHRhY2tlZChjZWxsLnRhcmdldCk7XG5cblxufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcHMoc2hpcHMsIGdhbWVCb2FyZCkge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gY29vcmQueDtcbiAgICAgICAgICAgIGxldCB5ID0gY29vcmQueTtcbiAgICAgICAgICAgIGxldCB0ZCA9IGdhbWVCb2FyZC5xdWVyeVNlbGVjdG9yKGB0ZFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllclN1bmtTaGlwcyhwbGF5ZXIsIGdhbWVib2FyZCkge1xuICAgIHBsYXllci5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmxlbmd0aCA9PT0gc2hpcC5udW1iZXJPZkhpdHMpIHtcbiAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGQgPSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYHRkW2RhdGEteD0gXCIke2Nvb3JkLnh9XCJdW2RhdGEteT1cIiR7Y29vcmQueX1cIl1gKTtcbiAgICAgICAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgbWFya2NlbGxBc0F0dGFja2VkID0gKGNlbGwpID0+IHtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbn1cblxuY29uc3QgbWFya0NlbGxBc0hpdCA9IChjZWxsKSA9PiB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbn1cblxuY29uc3QgZGlzcGxheVdpbm5lclNjcmVlbiA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gICAgc2NyZWVuQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyfSB3aW5zIHRoZSBnYW1lYDtcbiAgICBkaXNwbGF5Tm9kZShzY3JlZW5Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwc09uR2FtZWJvYXJkKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGdhbWVib2FyZFRkcyA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgIGdhbWVib2FyZFRkcy5mb3JFYWNoKCh0ZCkgPT4ge1xuICAgICAgICB0ZC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vZGUobm9kZSkge1xuICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbn1cblxuZnVuY3Rpb24gaGlkZU5vZGUobm9kZSkge1xuICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiLCJjb25zdCBhZGREYXRhVG90ZCA9IChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBhbGxUZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgIGFsbFRkLmZvckVhY2goKHRkLCBpbmRleCkgPT4ge1xuICAgICAgICB0ZC5kYXRhc2V0LnggPSBgJHtnZXRYWShpbmRleCkueH1gO1xuICAgICAgICB0ZC5kYXRhc2V0LnkgPSBgJHtnZXRYWShpbmRleCkueX1gO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldFhZKGluZGV4KSB7XG4gICAgbGV0IHkgPSBpbmRleCAlIDEwO1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihpbmRleCAvIDEwKTtcbiAgICByZXR1cm4geyB4LCB5IH07XG59XG5leHBvcnQgZGVmYXVsdCBhZGREYXRhVG90ZDsiLCJpbXBvcnQgZ2VuZXJhdGVBbHBoYWJldEFyciBmcm9tIFwiLi9nZW5lcmF0ZUFscGhhYmV0QXJyLmpzXCI7XG5cbmNvbnN0IGFscGhhYmV0QXJyID0gZ2VuZXJhdGVBbHBoYWJldEFycih0cnVlKTtcbmNvbnN0IG9wZW5UYWJsZSA9IFwiPHRhYmxlPlwiO1xuY29uc3QgY2xvc2VUYWJsZSA9IFwiPC90YWJsZT5cIjtcbmNvbnN0IG9wZW5UYWJsZUhlYWQgPSBcIjx0aD5cIjtcbmNvbnN0IGNsb3NlVGFibGVIZWFkID0gXCI8L3RoPlwiO1xuY29uc3Qgb3BlblRhYmxlUm93ID0gXCI8dHI+XCI7XG5jb25zdCBjbG9zZVRhYmxlUm93ID0gXCI8L3RyPlwiO1xuY29uc3Qgb3BlblRhYmxlRGF0YSA9IFwiPHRkPlwiO1xuY29uc3QgY2xvc2VUYWJsZURhdGEgPSBcIjwvdGQ+XCI7XG5cbmNvbnN0IGNyZWF0ZVBsYXlHcm91bmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGAke29wZW5UYWJsZX0gJHtjcmVhdGVGaXJzdFJvdygpfSAke2NyZWF0ZUxhc3RUZW5Sb3dzKCl9ICR7Y2xvc2VUYWJsZX1gO1xufVxuXG5jb25zdCBjcmVhdGVGaXJzdFJvdyA9ICgpID0+IHtcbiAgICBsZXQgZmlyc3RSb3dEYXRhID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgIGZpcnN0Um93RGF0YSArPVxuICAgICAgICAgICAgYCR7b3BlblRhYmxlSGVhZH0gJHthbHBoYWJldEFycltpXX0gJHtjbG9zZVRhYmxlSGVhZH1cbiAgICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIG9wZW5UYWJsZVJvdyArIG9wZW5UYWJsZUhlYWRcbiAgICAgICAgKyBjbG9zZVRhYmxlSGVhZFxuICAgICAgICArIGZpcnN0Um93RGF0YSArIGNsb3NlVGFibGVSb3c7XG59XG5cbmNvbnN0IGNyZWF0ZVJvd0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IHJvd0NvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHJvd0NvbnRlbnQgKz0gYCR7b3BlblRhYmxlRGF0YX0gJHtjbG9zZVRhYmxlRGF0YX1gO1xuICAgIH1cblxuICAgIHJldHVybiByb3dDb250ZW50O1xufVxuXG5jb25zdCBjcmVhdGVMYXN0VGVuUm93cyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLkFycmF5KDEwKV0ubWFwKChlbCwgaW5kZXgpID0+IGAke29wZW5UYWJsZVJvd31cbiAgICAke29wZW5UYWJsZUhlYWR9JHtpbmRleCArIDF9JHtjbG9zZVRhYmxlSGVhZH0ke2NyZWF0ZVJvd0NvbnRlbnQoKX0ke2Nsb3NlVGFibGVSb3d9YClcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyLCAnJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheUdyb3VuZDsiLCJjb25zdCBnZW5lcmF0ZUFscGhhYmV0QXJyID0gKENBUElUQUwgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiBbLi4uQXJyYXkoMjYpXS5tYXAoKF8sIGluZGV4KSA9PlxuICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGluZGV4ICsgKENBUElUQUwgPyA2NSA6IDk3KSlcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWxwaGFiZXRBcnI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZGRmO1xcbiAgICAtLWNsaWNrZWQtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yOiAjYWFmO1xcbiAgICAtLWhpdC1jZWxsLWJhY2tncm91bmQ6ICNmOTk7XFxufVxcblxcbioge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbiAgICBjb2xvcjogIzA1NTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZmllbGRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkIHtcXG4gICAgYm9yZGVyOiAxLjRweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IHRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgdGQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgLmNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGlja2VkLWNlbGwtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY2VsbC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgLnN1bmsge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi51c2VyLXBhcnQsXFxuLm9wcG9uZW50LXBhcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udXNlci1wYXJ0IC5zaGlwIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnNjcmVlbiB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IC4zcmVtIC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udXNlcmJvYXJkLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgLmNhcHRpb24ge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbn1cXG5cXG4ucmFuZG9taXNlLFxcbi5wbGF5LFxcbi5yZXN0YXJ0IHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IC42cmVtO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgcGFkZGluZzogLjNyZW0gLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbn1cXG5cXG4ucmVzdGFydCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogI2RkZjtcXG4gICAgLS1jbGlja2VkLWNlbGwtYmFja2dyb3VuZC1jb2xvcjogI2FhZjtcXG4gICAgLS1oaXQtY2VsbC1iYWNrZ3JvdW5kOiAjZjk5O1xcbn1cXG5cXG4qIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG4gICAgY29sb3I6ICMwNTU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWZpZWxkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGJvcmRlcjogMS40cHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4ub3Bwb25lbnQtcGFydCB0ZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IHRkOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xpY2tlZC1jZWxsLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ub3Bwb25lbnQtcGFydCAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNlbGwtYmFja2dyb3VuZCk7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5zdW5rIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4udXNlci1wYXJ0LFxcbi5vcHBvbmVudC1wYXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnVzZXItcGFydCAuc2hpcCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5zY3JlZW4ge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnVzZXJib2FyZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5jYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuLnJhbmRvbWlzZSxcXG4ucGxheSxcXG4ucmVzdGFydCB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAuNnJlbTtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuXFxuPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIj5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgICA8dGl0bGU+QmF0dGxlU2hpcDwvdGl0bGU+XFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgICA8aDE+IEJBVFRMRVNISVAgPC9oMT5cXG4gICAgPGgzIGNsYXNzPVxcXCJzY3JlZW5cXFwiPiA8L2gzPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWZpZWxkcy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlci1zaGlwcy1jb250YWluZXJcXFwiPiA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXItcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlci1nYW1lYm9hcmQtY29udGFpbmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXNlcmJvYXJkLXRpdGxlXFxcIj4gUGxheWVyIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyYW5kb21pc2VcXFwiPlJhbmRvbWlzZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcHBvbmVudC1wYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcHBvbmVudC1nYW1lYm9hcmQtY29udGFpbmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3Bwb25lbnRib2FyZC10aXRsZVxcXCI+T3Bwb25lbnQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicGxheVxcXCI+IFBsYXk8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwicmVzdGFydFxcXCI+UmVzdGFydDwvYnV0dG9uPlxcbjwvYm9keT5cXG5cXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9odG1sL2luZGV4Lmh0bWwnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9FdmVudHMvZ2FtZSc7XG5cbmdhbWUoKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJHYW1lQm9hcmQiLCJtaXNzZWRTaG90cyIsImhpdFNob3RzIiwic3Vua1NoaXBzTnVtYmVyIiwiYWxsQ29vcmRpbmF0ZXMiLCJnZXRBbGxDb29yZGluYXRlcyIsInNoaXAiLCJjb29yZGluYXRlcyIsInNoaXBzIiwiZm9yRWFjaCIsImdldFJhbmRvbUNvb3JkaW5hdGVzRm9yU2hpcCIsImRpcmVjdGlvbiIsImdldFJhbmRvbURpcmVjdGlvbiIsInBvc3NpYmxlRmlyc3RDb29yZEZvclNoaXAiLCJnZXRQb3NzaWJsZUZpcnN0Q29vcmRGb3JTaGlwc09mTGVuZ3RoIiwicmFuZG9tRmlyc3RDb29yZCIsImdldFJhbmRvbUludGVnZXJMZXNzVGhhbiIsImdldENvb3JkRm9yU2hpcE9mTGVuZ3RoRnJvbSIsImF0dGFja0Nvb3JkcyIsImhpdCIsImNvbnRhaW5zQ29vcmRpbmF0ZXMiLCJudW1iZXJPZkhpdHMiLCJzdGFydENvb3JkcyIsIngiLCJ5IiwiYWxsU2hpcHMiLCJwb3NzaWJsZVRvcExlZnRDb29yZHMiLCJwb3NzaWJsZXRvcExlZnRDb29yZCIsInNoaXBDb29yZGluYXRlcyIsImlzQ29vcmRzVmFsaWQiLCJpc092YWxhcHBpbmciLCJhcmVBZGphY2VudHMiLCJjb29yZHMiLCJsYXN0Q29vcmQiLCJqIiwiYWRqYWNlbnRzQ29vcmRzIiwiZ2V0QWRqYWNlbnRDb29yZHMiLCJjb29yZCIsImludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb29yZGluYXRlIiwiU2hpcCIsIlBsYXllciIsImJ1aWxkU2hpcHMiLCJnYW1lYm9hcmQiLCJ1bnNoaWZ0IiwiZW5lbXkiLCJyZWNlaXZlQXR0YWNrIiwicG9zc2libGVBdHRhY2tzIiwiZ2V0cG9zc2libGVBdHRhY2tDb29yZHNGcm9tIiwicmFuZG9tSW5kZXgiLCJhdHRhY2tFbmVteUF0IiwiZW5lbXlHYW1lYm9hcmQiLCJ1c2VkQXR0YWNrcyIsImZ1dHVyZUF0dGFja3MiLCJmaWx0ZXIiLCJzdHJDb3IiLCJ1c2VkQXR0IiwiaW5jbHVkZXMiLCJzY3JvIiwicGFyc2UiLCJlbmVteUdhbWVCb2FyZCIsIlNoaXBsZW5ndGgiLCJPYmplY3QiLCJjcmVhdGUiLCJzaGlwTWV0aG9kcyIsImlzU3VuayIsImFkZERhdGFUb3RkIiwiY3JlYXRlUGxheUdyb3VuZCIsImdhbWUiLCJwbGF5ZXIiLCJvcHBvbmVudCIsInBsYXllckdhbWVib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wcG9uZW50R2FtZWJvYXJkIiwicGxheSIsInJhbmRvbWlzZSIsInJlc3RhcnQiLCJpbm5lckhUTUwiLCJwbGFjZVNoaXBzQXRSYW5kb21Db29yZGluYXRlcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5U2hpcHMiLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbW92ZVNoaXBzT25HYW1lYm9hcmQiLCJlbCIsInRhcmdldCIsInRhZ05hbWUiLCJhdHRhY2tPcHBvbmVudEF0Q2VsbCIsImRpc3BsYXlQbGF5ZXJTdW5rU2hpcHMiLCJhcmVBbGxTaGlwc1N1bmsiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsImRpc3BsYXlXaW5uZXJTY3JlZW4iLCJkaXNwbGF5Tm9kZSIsImhpZGVOb2RlIiwiY2VsbCIsIk51bWJlciIsImRhdGFzZXQiLCJhdHRhY2tlZENvb3JkcyIsIm1hcmtDZWxsQXNIaXQiLCJtYXJrY2VsbEFzQXR0YWNrZWQiLCJnYW1lQm9hcmQiLCJ0ZCIsImNsYXNzTGlzdCIsImFkZCIsInNjcmVlbkNvbnRhaW5lciIsInRleHRDb250ZW50IiwiZ2FtZWJvYXJkVGRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIm5vZGUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJjb250YWluZXIiLCJhbGxUZCIsImluZGV4IiwiZ2V0WFkiLCJnZW5lcmF0ZUFscGhhYmV0QXJyIiwiYWxwaGFiZXRBcnIiLCJvcGVuVGFibGUiLCJjbG9zZVRhYmxlIiwib3BlblRhYmxlSGVhZCIsImNsb3NlVGFibGVIZWFkIiwib3BlblRhYmxlUm93IiwiY2xvc2VUYWJsZVJvdyIsIm9wZW5UYWJsZURhdGEiLCJjbG9zZVRhYmxlRGF0YSIsImNyZWF0ZUZpcnN0Um93IiwiY3JlYXRlTGFzdFRlblJvd3MiLCJmaXJzdFJvd0RhdGEiLCJjcmVhdGVSb3dDb250ZW50Iiwicm93Q29udGVudCIsIkFycmF5IiwicmVkdWNlIiwicHJldiIsImN1ciIsIkNBUElUQUwiLCJfIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=