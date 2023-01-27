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
    key: "attackEnemyAtRandomCoordsAndReturnAttackCoords",
    value: function attackEnemyAtRandomCoordsAndReturnAttackCoords(enemy) {
      var possibleAttacks = this.getpossibleAttackCoordsFrom(enemy.gameboard);
      var randomIndex = Math.floor(Math.random() * possibleAttacks.length);
      var attackCoords = possibleAttacks[randomIndex];
      this.attackEnemyAt(enemy, attackCoords);
      return attackCoords;
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
//write a js function that alternate computer and player lays in a battleShip game

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
    hideNode(play);
    hideNode(randomise);
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
      setTimeout(function () {
        var computerAttack = opponent.attackEnemyAtRandomCoordsAndReturnAttackCoords(player);
        var attackedCell = getCellAtCoordOnGameboard(computerAttack, playerGameboard);
        var hit = false;
        player.ships.forEach(function (ship) {
          if (ship.containsCoordinates(computerAttack)) {
            hit = true;
          }
        });
        hit ? markCellAsHit(attackedCell) : markcellAsAttacked(attackedCell);
        displayPlayerSunkShips(player, playerGameboard);
        if (player.gameboard.areAllShipsSunk()) {
          opponentGameboard.replaceWith(opponentGameboard.cloneNode(true));
          displayWinnerScreen('Computer');
          displayNode(restart);
        }
      }, 200);
    });
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
function displayShips(ships, gameboard) {
  ships.forEach(function (ship) {
    ship.coordinates.forEach(function (coord) {
      var x = coord.x;
      var y = coord.y;
      addClassNameToCoordOnGameboard('ship', {
        x: x,
        y: y
      }, gameboard);
    });
  });
}
function displayPlayerSunkShips(player, gameboard) {
  player.ships.forEach(function (ship) {
    if (ship.length === ship.numberOfHits) {
      ship.coordinates.forEach(function (coord) {
        addClassNameToCoordOnGameboard('sunk', coord, gameboard);
      });
    }
  });
}
function addClassNameToCoordOnGameboard(className, coord, gameboard) {
  var td = gameboard.querySelector("td[data-x= \"".concat(coord.x, "\"][data-y=\"").concat(coord.y, "\"]"));
  td.classList.add("".concat(className));
}
function getCellAtCoordOnGameboard(coord, gameboard) {
  var cell = gameboard.querySelector("td[data-x= \"".concat(coord.x, "\"][data-y=\"").concat(coord.y, "\"]"));
  return cell;
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --body-background-color: #ddf;\n    --clicked-cell-background-color: #aaf;\n    --hit-cell-background: #f99;\n}\n\n* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n    color: #055;\n}\n\nbody {\n    background-color: var(--body-background-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntd {\n    border: 1.4px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\n.opponent-part td:hover {\n    background-color: aquamarine;\n}\n\n.opponent-part td:active {\n    background-color: var(--body-background-color);\n}\n\n.opponent-part .clicked,\n.user-part .clicked {\n    background-color: var(--clicked-cell-background-color);\n}\n\n.opponent-part .hit {\n    background-color: var(--hit-cell-background);\n}\n\n.user-part .ship {\n    border: 3px solid blue;\n}\n\n.user-part .hit {\n    background-color: var(--hit-cell-background);\n    border: 3px solid red;\n}\n\n.opponent-part .sunk {\n    border: 3px solid red;\n}\n\n.user-part,\n.opponent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.screen {\n    width: 30vw;\n    height: 2rem;\n    padding: .3rem .2rem;\n    background-color: beige;\n    text-align: center;\n    font-weight: 400;\n    color: blue;\n    visibility: hidden;\n    overflow: hidden;\n    scroll-behavior: auto;\n}\n\n.userboard-title {\n    font-size: .9rem;\n    overflow: hidden;\n}\n\n.opponent-part .caption {\n    font-size: .9rem;\n}\n\n.randomise,\n.play,\n.restart {\n    margin-top: .5rem;\n    font-weight: bold;\n    font-size: .6rem;\n    color: blue;\n    padding: .3rem .2rem;\n    border-radius: .2rem;\n}\n\n.restart {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,8CAA8C;IAC9C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,8CAA8C;AAClD;;AAEA;;IAEI,sDAAsD;AAC1D;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4CAA4C;IAC5C,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;IAGI,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    --body-background-color: #ddf;\n    --clicked-cell-background-color: #aaf;\n    --hit-cell-background: #f99;\n}\n\n* {\n    user-select: none;\n    box-sizing: border-box;\n    font-family: Georgia, serif;\n    color: #055;\n}\n\nbody {\n    background-color: var(--body-background-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n}\n\n.game-fields-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 2rem;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntd {\n    border: 1.4px solid black;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-collapse: collapse;\n}\n\n.opponent-part td:hover {\n    background-color: aquamarine;\n}\n\n.opponent-part td:active {\n    background-color: var(--body-background-color);\n}\n\n.opponent-part .clicked,\n.user-part .clicked {\n    background-color: var(--clicked-cell-background-color);\n}\n\n.opponent-part .hit {\n    background-color: var(--hit-cell-background);\n}\n\n.user-part .ship {\n    border: 3px solid blue;\n}\n\n.user-part .hit {\n    background-color: var(--hit-cell-background);\n    border: 3px solid red;\n}\n\n.opponent-part .sunk {\n    border: 3px solid red;\n}\n\n.user-part,\n.opponent-part {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.screen {\n    width: 30vw;\n    height: 2rem;\n    padding: .3rem .2rem;\n    background-color: beige;\n    text-align: center;\n    font-weight: 400;\n    color: blue;\n    visibility: hidden;\n    overflow: hidden;\n    scroll-behavior: auto;\n}\n\n.userboard-title {\n    font-size: .9rem;\n    overflow: hidden;\n}\n\n.opponent-part .caption {\n    font-size: .9rem;\n}\n\n.randomise,\n.play,\n.restart {\n    margin-top: .5rem;\n    font-weight: bold;\n    font-size: .6rem;\n    color: blue;\n    padding: .3rem .2rem;\n    border-radius: .2rem;\n}\n\n.restart {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ0Q7QUFDSjtBQUVqQ3pELHdEQUFJLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0NsYXNzZXMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9DbGFzc2VzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9FdmVudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBmdWxsRnVuY3Rpb25zL2FkZERhdGFWYWxUb3RkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGZ1bGxGdW5jdGlvbnMvY3JlYXRlUGxheUdyb3VuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBmdWxsRnVuY3Rpb25zL2dlbmVyYXRlQWxwaGFiZXRBcnIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9odG1sL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICAgICAgICB0aGlzLmhpdFNob3RzID0gW107XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hbGxDb29yZGluYXRlcyA9IHRoaXMuZ2V0QWxsQ29vcmRpbmF0ZXMoKTtcbiAgICB9O1xuXG4gICAgcGxhY2VTaGlwQXQoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1NoaXBzTnVtYmVyID09PSAxMCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzQXRSYW5kb21Db29yZGluYXRlcyhzaGlwcykge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmNvb3JkaW5hdGVzID1cbiAgICAgICAgICAgIHRoaXMuZ2V0UmFuZG9tQ29vcmRpbmF0ZXNGb3JTaGlwKHNoaXAsIHNoaXBzKSk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tQ29vcmRpbmF0ZXNGb3JTaGlwKHNoaXAsIHNoaXBzKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gICAgICAgIHNoaXAuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBwb3NzaWJsZUZpcnN0Q29vcmRGb3JTaGlwID1cbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zc2libGVGaXJzdENvb3JkRm9yU2hpcHNPZkxlbmd0aChzaGlwLmxlbmd0aCwgZGlyZWN0aW9uLCBzaGlwcyk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUZpcnN0Q29vcmQgPSBwb3NzaWJsZUZpcnN0Q29vcmRGb3JTaGlwW1xuICAgICAgICAgICAgdGhpcy5nZXRSYW5kb21JbnRlZ2VyTGVzc1RoYW4ocG9zc2libGVGaXJzdENvb3JkRm9yU2hpcC5sZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29vcmRGb3JTaGlwT2ZMZW5ndGhGcm9tKHNoaXAubGVuZ3RoLCByYW5kb21GaXJzdENvb3JkLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soYXR0YWNrQ29vcmRzLCBzaGlwcykge1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5jb250YWluc0Nvb3JkaW5hdGVzKGF0dGFja0Nvb3JkcykpIHtcbiAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0U2hvdHMucHVzaChhdHRhY2tDb29yZHMpXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzW2ldLm51bWJlck9mSGl0cyA9PT0gc2hpcHNbaV0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vua1NoaXBzTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoaXQpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2VkU2hvdHMucHVzaChhdHRhY2tDb29yZHMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRDb29yZEZvclNoaXBPZkxlbmd0aEZyb20obGVuZ3RoLCBzdGFydENvb3JkcywgZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgPyBjb29yZGluYXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogc3RhcnRDb29yZHMueFxuICAgICAgICAgICAgICAgICAgICAsIHk6IHN0YXJ0Q29vcmRzLnkgKyBpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IGNvb3JkaW5hdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBzdGFydENvb3Jkcy54ICsgaVxuICAgICAgICAgICAgICAgICAgICAsIHk6IHN0YXJ0Q29vcmRzLnlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGkgKz0gMTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBnZXRQb3NzaWJsZUZpcnN0Q29vcmRGb3JTaGlwc09mTGVuZ3RoKFxuICAgICAgICBsZW5ndGhcbiAgICAgICAgLCBkaXJlY3Rpb25cbiAgICAgICAgLCBhbGxTaGlwcykge1xuICAgICAgICBjb25zdCBwb3NzaWJsZVRvcExlZnRDb29yZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZXRvcExlZnRDb29yZCA9IHsgeCwgeSB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IHRoaXMuZ2V0Q29vcmRGb3JTaGlwT2ZMZW5ndGhGcm9tKFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGgsIHBvc3NpYmxldG9wTGVmdENvb3JkLCBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaWYgKCghdGhpcy5pc0Nvb3Jkc1ZhbGlkKHNoaXBDb29yZGluYXRlcykpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLmlzT3ZhbGFwcGluZyhzaGlwQ29vcmRpbmF0ZXMsIGFsbFNoaXBzKSlcbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5hcmVBZGphY2VudHMoc2hpcENvb3JkaW5hdGVzLCBhbGxTaGlwcykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcG9zc2libGVUb3BMZWZ0Q29vcmRzLnB1c2gocG9zc2libGV0b3BMZWZ0Q29vcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NzaWJsZVRvcExlZnRDb29yZHM7XG4gICAgfVxuXG4gICAgaXNDb29yZHNWYWxpZChjb29yZHMpIHtcbiAgICAgICAgY29uc3QgbGFzdENvb3JkID0gY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmV0dXJuIChsYXN0Q29vcmQueCA+IDkgfHwgbGFzdENvb3JkLnkgPiA5KSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICBpc092YWxhcHBpbmcoY29vcmRzLCBhbGxTaGlwcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTaGlwcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU2hpcHNbal0uY29vcmRpbmF0ZXMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3Jkc1tpXS54ID09PSBhbGxTaGlwc1tqXS5jb29yZGluYXRlc1trXS54XG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBjb29yZHNbaV0ueSA9PT0gYWxsU2hpcHNbal0uY29vcmRpbmF0ZXNba10ueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYXJlQWRqYWNlbnRzKGNvb3JkcywgYWxsU2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkamFjZW50c0Nvb3JkcyA9IHRoaXMuZ2V0QWRqYWNlbnRDb29yZHMoY29vcmRzW2ldKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3ZhbGFwcGluZyhhZGphY2VudHNDb29yZHMsIGFsbFNoaXBzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxuICAgIGdldEFkamFjZW50Q29vcmRzKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IHg6IGNvb3JkLngsIHk6IGNvb3JkLnkgLSAxIH1cbiAgICAgICAgICAgICwgeyB4OiBjb29yZC54LCB5OiBjb29yZC55ICsgMSB9XG4gICAgICAgICAgICAsIHsgeDogY29vcmQueCAtIDEsIHk6IGNvb3JkLnkgfVxuICAgICAgICAgICAgLCB7IHg6IGNvb3JkLnggKyAxLCB5OiBjb29yZC55IH1cbiAgICAgICAgICAgICwgeyB4OiBjb29yZC54IC0gMSwgeTogY29vcmQueSAtIDEgfVxuICAgICAgICAgICAgLCB7IHg6IGNvb3JkLnggLSAxLCB5OiBjb29yZC55ICsgMSB9XG4gICAgICAgICAgICAsIHsgeDogY29vcmQueCArIDEsIHk6IGNvb3JkLnkgLSAxIH1cbiAgICAgICAgICAgICwgeyB4OiBjb29yZC54ICsgMSwgeTogY29vcmQueSArIDEgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGdldFJhbmRvbUludGVnZXJMZXNzVGhhbihpbnRlZ2VyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbnRlZ2VyKTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21EaXJlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgJSAyKSA9PT0gMFxuICAgICAgICAgICAgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgIH1cblxuXG4gICAgZ2V0QWxsQ29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IHsgeCwgeSB9O1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi4vQ2xhc3Nlcy9TaGlwLmpzXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9DbGFzc2VzL0dhbWVCb2FyZC5qc1wiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy5idWlsZFNoaXBzKCk7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIH1cblxuICAgIGJ1aWxkU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPCA0KSB7IHNoaXBzLnB1c2goU2hpcCgxKSkgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IDcpIHsgc2hpcHMucHVzaChTaGlwKDIpKSB9XG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgOSkgeyBzaGlwcy5wdXNoKFNoaXAoMykpIH1cbiAgICAgICAgICAgIGVsc2UgeyBzaGlwcy51bnNoaWZ0KFNoaXAoNCkpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBhdHRhY2tFbmVteUF0KGVuZW15LCBjb29yZGluYXRlcykge1xuICAgICAgICBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcywgZW5lbXkuc2hpcHMpO1xuICAgIH1cblxuICAgIGF0dGFja0VuZW15QXRSYW5kb21Db29yZHNBbmRSZXR1cm5BdHRhY2tDb29yZHMoZW5lbXkpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVBdHRhY2tzID1cbiAgICAgICAgICAgIHRoaXMuZ2V0cG9zc2libGVBdHRhY2tDb29yZHNGcm9tKGVuZW15LmdhbWVib2FyZCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID1cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQXR0YWNrcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBhdHRhY2tDb29yZHMgPSBwb3NzaWJsZUF0dGFja3NbcmFuZG9tSW5kZXhdO1xuICAgICAgICB0aGlzLmF0dGFja0VuZW15QXQoZW5lbXksIGF0dGFja0Nvb3Jkcyk7XG4gICAgICAgIHJldHVybiBhdHRhY2tDb29yZHM7XG5cbiAgICB9XG5cbiAgICBnZXRwb3NzaWJsZUF0dGFja0Nvb3Jkc0Zyb20oZW5lbXlHYW1lYm9hcmQpIHtcbiAgICAgICAgY29uc3QgdXNlZEF0dGFja3MgPSBbXG4gICAgICAgICAgICAuLi5lbmVteUdhbWVib2FyZC5taXNzZWRTaG90c1xuICAgICAgICAgICAgLCAuLi5lbmVteUdhbWVib2FyZC5oaXRTaG90c1xuICAgICAgICBdXG4gICAgICAgIGNvbnN0IGZ1dHVyZUF0dGFja3MgPVxuICAgICAgICAgICAgKChlbmVteUdhbWVib2FyZC5hbGxDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIC5tYXAoKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29vcmRzKTtcbiAgICAgICAgICAgICAgICB9KSkuZmlsdGVyKChzdHJDb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF1c2VkQXR0YWNrc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodXNlZEF0dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1c2VkQXR0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuaW5jbHVkZXMoc3RyQ29yKVxuICAgICAgICAgICAgICAgIH0pKS5tYXAoKHNjcm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2NybylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZnV0dXJlQXR0YWNrcztcbiAgICB9XG5cblxuICAgIGdldE1pc3NlZFNob290c0Zyb20oZW5lbXlHYW1lQm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIGVuZW15R2FtZUJvYXJkLm1pc3NlZFNob3RzO1xuICAgIH1cblxuICAgIGdldEhpdFNob3RzRnJvbShlbmVteUdhbWVCb2FyZCkge1xuICAgICAgICByZXR1cm4gZW5lbXlHYW1lQm9hcmQuaGl0U2hvdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4vL3dyaXRlIGEganMgZnVuY3Rpb24gdGhhdCBhbHRlcm5hdGUgY29tcHV0ZXIgYW5kIHBsYXllciBsYXlzIGluIGEgYmF0dGxlU2hpcCBnYW1lIiwiY29uc3QgU2hpcCA9IChTaGlwbGVuZ3RoKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IE9iamVjdC5jcmVhdGUoc2hpcE1ldGhvZHMpO1xuICAgIHNoaXAubnVtYmVyT2ZIaXRzID0gMDtcbiAgICBzaGlwLmxlbmd0aCA9IFNoaXBsZW5ndGg7XG4gICAgc2hpcC5jb29yZGluYXRlcyA9IFtdO1xuICAgIHNoaXAuZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIHJldHVybiBzaGlwO1xufVxuXG5jb25zdCBzaGlwTWV0aG9kcyA9IHtcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5sZW5ndGggPT09IHRoaXMubnVtYmVyT2ZIaXRzKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgY29udGFpbnNDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy54ID09IHRoaXMuY29vcmRpbmF0ZXNbaV0ueFxuICAgICAgICAgICAgICAgICYmIGNvb3JkaW5hdGVzLnkgPT0gdGhpcy5jb29yZGluYXRlc1tpXS55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgYWRkRGF0YVRvdGQgZnJvbSBcIi4uL2hlbHBmdWxsRnVuY3Rpb25zL2FkZERhdGFWYWxUb3RkXCI7XG5pbXBvcnQgY3JlYXRlUGxheUdyb3VuZCBmcm9tIFwiLi4vaGVscGZ1bGxGdW5jdGlvbnMvY3JlYXRlUGxheUdyb3VuZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vQ2xhc3Nlcy9QbGF5ZXJcIjtcblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG9wcG9uZW50R2FtZWJvYXJkID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LWdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICBjb25zdCBwbGF5ID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcbiAgICBjb25zdCByYW5kb21pc2UgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXNlJyk7XG5cbiAgICBjb25zdCByZXN0YXJ0ID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQnKTtcbiAgICAvL2FkZCB1c2VyIGFuZCBvcHBvbmVudCBnYW1lYm9hcmRzXG4gICAgcGxheWVyR2FtZWJvYXJkLmlubmVySFRNTCA9IGNyZWF0ZVBsYXlHcm91bmQoKTtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzKHBsYXllci5zaGlwcyk7XG4gICAgb3Bwb25lbnRHYW1lYm9hcmQuaW5uZXJIVE1MID0gY3JlYXRlUGxheUdyb3VuZCgpO1xuICAgIG9wcG9uZW50LmdhbWVib2FyZC5wbGFjZVNoaXBzQXRSYW5kb21Db29yZGluYXRlcyhvcHBvbmVudC5zaGlwcyk7XG4gICAgLy9FdmVudHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgYWRkRGF0YVRvdGQocGxheWVyR2FtZWJvYXJkKTtcbiAgICAgICAgYWRkRGF0YVRvdGQob3Bwb25lbnRHYW1lYm9hcmQpO1xuICAgICAgICBkaXNwbGF5U2hpcHMocGxheWVyLnNoaXBzLFxuICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkKTtcbiAgICB9KTtcblxuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG4gICAgcmFuZG9taXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVTaGlwc09uR2FtZWJvYXJkKHBsYXllckdhbWVib2FyZCk7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMocGxheWVyLnNoaXBzKTtcbiAgICAgICAgZGlzcGxheVNoaXBzKHBsYXllci5zaGlwcywgcGxheWVyR2FtZWJvYXJkKTtcbiAgICB9KVxuXG4gICAgcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGlkZU5vZGUocGxheSk7XG4gICAgICAgIGhpZGVOb2RlKHJhbmRvbWlzZSk7XG4gICAgICAgIG9wcG9uZW50R2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwudGFyZ2V0LnRhZ05hbWUgPT0gJ1REJykge1xuICAgICAgICAgICAgICAgIGF0dGFja09wcG9uZW50QXRDZWxsKG9wcG9uZW50LCBlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwbGF5UGxheWVyU3Vua1NoaXBzKG9wcG9uZW50LCBvcHBvbmVudEdhbWVib2FyZCk7XG4gICAgICAgICAgICBpZiAob3Bwb25lbnQuZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgb3Bwb25lbnRHYW1lYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2VXaXRoKG9wcG9uZW50R2FtZWJvYXJkLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2lubmVyU2NyZWVuKCdQbGF5ZXInKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Tm9kZShyZXN0YXJ0KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckF0dGFjayA9IG9wcG9uZW50LmF0dGFja0VuZW15QXRSYW5kb21Db29yZHNBbmRSZXR1cm5BdHRhY2tDb29yZHMocGxheWVyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tlZENlbGwgPSBnZXRDZWxsQXRDb29yZE9uR2FtZWJvYXJkKGNvbXB1dGVyQXR0YWNrLCBwbGF5ZXJHYW1lYm9hcmQpO1xuICAgICAgICAgICAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcC5jb250YWluc0Nvb3JkaW5hdGVzKGNvbXB1dGVyQXR0YWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaGl0ID8gbWFya0NlbGxBc0hpdChhdHRhY2tlZENlbGwpIDogbWFya2NlbGxBc0F0dGFja2VkKGF0dGFja2VkQ2VsbCk7XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVyU3Vua1NoaXBzKHBsYXllciwgcGxheWVyR2FtZWJvYXJkKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHBvbmVudEdhbWVib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2VXaXRoKG9wcG9uZW50R2FtZWJvYXJkLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVdpbm5lclNjcmVlbignQ29tcHV0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5vZGUocmVzdGFydCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfSlcblxuXG4gICAgfSlcblxufVxuXG5jb25zdCBhdHRhY2tPcHBvbmVudEF0Q2VsbCA9IChvcHBvbmVudCwgY2VsbCkgPT4ge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC50YXJnZXQuZGF0YXNldC54KTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwudGFyZ2V0LmRhdGFzZXQueSk7XG4gICAgY29uc3QgYXR0YWNrZWRDb29yZHMgPSB7IHgsIHkgfTtcbiAgICBvcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tlZENvb3Jkcywgb3Bwb25lbnQuc2hpcHMpO1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBvcHBvbmVudC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmNvbnRhaW5zQ29vcmRpbmF0ZXMoYXR0YWNrZWRDb29yZHMpKSB7XG4gICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBoaXQgPyBtYXJrQ2VsbEFzSGl0KGNlbGwudGFyZ2V0KSA6IG1hcmtjZWxsQXNBdHRhY2tlZChjZWxsLnRhcmdldCk7XG5cblxufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcHMoc2hpcHMsIGdhbWVib2FyZCkge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gY29vcmQueDtcbiAgICAgICAgICAgIGxldCB5ID0gY29vcmQueTtcbiAgICAgICAgICAgIGFkZENsYXNzTmFtZVRvQ29vcmRPbkdhbWVib2FyZCgnc2hpcCcsIHsgeCwgeSB9LCBnYW1lYm9hcmQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllclN1bmtTaGlwcyhwbGF5ZXIsIGdhbWVib2FyZCkge1xuICAgIHBsYXllci5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmxlbmd0aCA9PT0gc2hpcC5udW1iZXJPZkhpdHMpIHtcbiAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc05hbWVUb0Nvb3JkT25HYW1lYm9hcmQoJ3N1bmsnLCBjb29yZCwgZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzc05hbWVUb0Nvb3JkT25HYW1lYm9hcmQoY2xhc3NOYW1lLCBjb29yZCwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgdGQgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgdGRbZGF0YS14PSBcIiR7Y29vcmQueH1cIl1bZGF0YS15PVwiJHtjb29yZC55fVwiXWApO1xuICAgIHRkLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xufVxuXG5mdW5jdGlvbiBnZXRDZWxsQXRDb29yZE9uR2FtZWJvYXJkKGNvb3JkLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYHRkW2RhdGEteD0gXCIke2Nvb3JkLnh9XCJdW2RhdGEteT1cIiR7Y29vcmQueX1cIl1gKTtcbiAgICByZXR1cm4gY2VsbDtcbn1cblxuY29uc3QgbWFya2NlbGxBc0F0dGFja2VkID0gKGNlbGwpID0+IHtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbn1cblxuY29uc3QgbWFya0NlbGxBc0hpdCA9IChjZWxsKSA9PiB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbn1cblxuY29uc3QgZGlzcGxheVdpbm5lclNjcmVlbiA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gICAgc2NyZWVuQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyfSB3aW5zIHRoZSBnYW1lYDtcbiAgICBkaXNwbGF5Tm9kZShzY3JlZW5Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwc09uR2FtZWJvYXJkKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGdhbWVib2FyZFRkcyA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgIGdhbWVib2FyZFRkcy5mb3JFYWNoKCh0ZCkgPT4ge1xuICAgICAgICB0ZC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vZGUobm9kZSkge1xuICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbn1cblxuZnVuY3Rpb24gaGlkZU5vZGUobm9kZSkge1xuICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiLCJjb25zdCBhZGREYXRhVG90ZCA9IChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBhbGxUZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgIGFsbFRkLmZvckVhY2goKHRkLCBpbmRleCkgPT4ge1xuICAgICAgICB0ZC5kYXRhc2V0LnggPSBgJHtnZXRYWShpbmRleCkueH1gO1xuICAgICAgICB0ZC5kYXRhc2V0LnkgPSBgJHtnZXRYWShpbmRleCkueX1gO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldFhZKGluZGV4KSB7XG4gICAgbGV0IHkgPSBpbmRleCAlIDEwO1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihpbmRleCAvIDEwKTtcbiAgICByZXR1cm4geyB4LCB5IH07XG59XG5leHBvcnQgZGVmYXVsdCBhZGREYXRhVG90ZDsiLCJpbXBvcnQgZ2VuZXJhdGVBbHBoYWJldEFyciBmcm9tIFwiLi9nZW5lcmF0ZUFscGhhYmV0QXJyLmpzXCI7XG5cbmNvbnN0IGFscGhhYmV0QXJyID0gZ2VuZXJhdGVBbHBoYWJldEFycih0cnVlKTtcbmNvbnN0IG9wZW5UYWJsZSA9IFwiPHRhYmxlPlwiO1xuY29uc3QgY2xvc2VUYWJsZSA9IFwiPC90YWJsZT5cIjtcbmNvbnN0IG9wZW5UYWJsZUhlYWQgPSBcIjx0aD5cIjtcbmNvbnN0IGNsb3NlVGFibGVIZWFkID0gXCI8L3RoPlwiO1xuY29uc3Qgb3BlblRhYmxlUm93ID0gXCI8dHI+XCI7XG5jb25zdCBjbG9zZVRhYmxlUm93ID0gXCI8L3RyPlwiO1xuY29uc3Qgb3BlblRhYmxlRGF0YSA9IFwiPHRkPlwiO1xuY29uc3QgY2xvc2VUYWJsZURhdGEgPSBcIjwvdGQ+XCI7XG5cbmNvbnN0IGNyZWF0ZVBsYXlHcm91bmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGAke29wZW5UYWJsZX0gJHtjcmVhdGVGaXJzdFJvdygpfSAke2NyZWF0ZUxhc3RUZW5Sb3dzKCl9ICR7Y2xvc2VUYWJsZX1gO1xufVxuXG5jb25zdCBjcmVhdGVGaXJzdFJvdyA9ICgpID0+IHtcbiAgICBsZXQgZmlyc3RSb3dEYXRhID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgIGZpcnN0Um93RGF0YSArPVxuICAgICAgICAgICAgYCR7b3BlblRhYmxlSGVhZH0gJHthbHBoYWJldEFycltpXX0gJHtjbG9zZVRhYmxlSGVhZH1cbiAgICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIG9wZW5UYWJsZVJvdyArIG9wZW5UYWJsZUhlYWRcbiAgICAgICAgKyBjbG9zZVRhYmxlSGVhZFxuICAgICAgICArIGZpcnN0Um93RGF0YSArIGNsb3NlVGFibGVSb3c7XG59XG5cbmNvbnN0IGNyZWF0ZVJvd0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IHJvd0NvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHJvd0NvbnRlbnQgKz0gYCR7b3BlblRhYmxlRGF0YX0gJHtjbG9zZVRhYmxlRGF0YX1gO1xuICAgIH1cblxuICAgIHJldHVybiByb3dDb250ZW50O1xufVxuXG5jb25zdCBjcmVhdGVMYXN0VGVuUm93cyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLkFycmF5KDEwKV0ubWFwKChlbCwgaW5kZXgpID0+IGAke29wZW5UYWJsZVJvd31cbiAgICAke29wZW5UYWJsZUhlYWR9JHtpbmRleCArIDF9JHtjbG9zZVRhYmxlSGVhZH0ke2NyZWF0ZVJvd0NvbnRlbnQoKX0ke2Nsb3NlVGFibGVSb3d9YClcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyLCAnJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheUdyb3VuZDsiLCJjb25zdCBnZW5lcmF0ZUFscGhhYmV0QXJyID0gKENBUElUQUwgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiBbLi4uQXJyYXkoMjYpXS5tYXAoKF8sIGluZGV4KSA9PlxuICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGluZGV4ICsgKENBUElUQUwgPyA2NSA6IDk3KSlcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWxwaGFiZXRBcnI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZGRmO1xcbiAgICAtLWNsaWNrZWQtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yOiAjYWFmO1xcbiAgICAtLWhpdC1jZWxsLWJhY2tncm91bmQ6ICNmOTk7XFxufVxcblxcbioge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbiAgICBjb2xvcjogIzA1NTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZmllbGRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkIHtcXG4gICAgYm9yZGVyOiAxLjRweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IHRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgdGQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgLmNsaWNrZWQsXFxuLnVzZXItcGFydCAuY2xpY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsaWNrZWQtY2VsbC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jZWxsLWJhY2tncm91bmQpO1xcbn1cXG5cXG4udXNlci1wYXJ0IC5zaGlwIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnVzZXItcGFydCAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNlbGwtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm9wcG9uZW50LXBhcnQgLnN1bmsge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi51c2VyLXBhcnQsXFxuLm9wcG9uZW50LXBhcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc2NyZWVuIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogLjNyZW0gLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG59XFxuXFxuLnVzZXJib2FyZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5jYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuLnJhbmRvbWlzZSxcXG4ucGxheSxcXG4ucmVzdGFydCB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAuNnJlbTtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7O0lBRUksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJvZHktYmFja2dyb3VuZC1jb2xvcjogI2RkZjtcXG4gICAgLS1jbGlja2VkLWNlbGwtYmFja2dyb3VuZC1jb2xvcjogI2FhZjtcXG4gICAgLS1oaXQtY2VsbC1iYWNrZ3JvdW5kOiAjZjk5O1xcbn1cXG5cXG4qIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG4gICAgY29sb3I6ICMwNTU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWZpZWxkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGJvcmRlcjogMS40cHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4ub3Bwb25lbnQtcGFydCB0ZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IHRkOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5jbGlja2VkLFxcbi51c2VyLXBhcnQgLmNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGlja2VkLWNlbGwtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY2VsbC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnVzZXItcGFydCAuc2hpcCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxufVxcblxcbi51c2VyLXBhcnQgLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jZWxsLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi5vcHBvbmVudC1wYXJ0IC5zdW5rIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4udXNlci1wYXJ0LFxcbi5vcHBvbmVudC1wYXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnNjcmVlbiB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IC4zcmVtIC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxufVxcblxcbi51c2VyYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3Bwb25lbnQtcGFydCAuY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbi5yYW5kb21pc2UsXFxuLnBsYXksXFxuLnJlc3RhcnQge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogLjZyZW07XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcblxcbjxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCI+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gICAgPHRpdGxlPkJhdHRsZVNoaXA8L3RpdGxlPlxcbjwvaGVhZD5cXG5cXG48Ym9keT5cXG4gICAgPGgxPiBCQVRUTEVTSElQIDwvaDE+XFxuICAgIDxoMyBjbGFzcz1cXFwic2NyZWVuXFxcIj4gPC9oMz5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1maWVsZHMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXItc2hpcHMtY29udGFpbmVyXFxcIj4gPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyLXBhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXItZ2FtZWJvYXJkLWNvbnRhaW5lclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXJib2FyZC10aXRsZVxcXCI+IFBsYXllciA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicmFuZG9taXNlXFxcIj5SYW5kb21pc2U8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3Bwb25lbnQtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3Bwb25lbnQtZ2FtZWJvYXJkLWNvbnRhaW5lclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9wcG9uZW50Ym9hcmQtdGl0bGVcXFwiPk9wcG9uZW50PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBsYXlcXFwiPiBQbGF5PC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcInJlc3RhcnRcXFwiPlJlc3RhcnQ8L2J1dHRvbj5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBodG1sIGZyb20gJy4vaHRtbC9pbmRleC5odG1sJztcbmltcG9ydCBnYW1lIGZyb20gJy4vRXZlbnRzL2dhbWUnO1xuXG5nYW1lKCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiR2FtZUJvYXJkIiwibWlzc2VkU2hvdHMiLCJoaXRTaG90cyIsInN1bmtTaGlwc051bWJlciIsImFsbENvb3JkaW5hdGVzIiwiZ2V0QWxsQ29vcmRpbmF0ZXMiLCJzaGlwIiwiY29vcmRpbmF0ZXMiLCJzaGlwcyIsImZvckVhY2giLCJnZXRSYW5kb21Db29yZGluYXRlc0ZvclNoaXAiLCJkaXJlY3Rpb24iLCJnZXRSYW5kb21EaXJlY3Rpb24iLCJwb3NzaWJsZUZpcnN0Q29vcmRGb3JTaGlwIiwiZ2V0UG9zc2libGVGaXJzdENvb3JkRm9yU2hpcHNPZkxlbmd0aCIsInJhbmRvbUZpcnN0Q29vcmQiLCJnZXRSYW5kb21JbnRlZ2VyTGVzc1RoYW4iLCJnZXRDb29yZEZvclNoaXBPZkxlbmd0aEZyb20iLCJhdHRhY2tDb29yZHMiLCJoaXQiLCJjb250YWluc0Nvb3JkaW5hdGVzIiwibnVtYmVyT2ZIaXRzIiwic3RhcnRDb29yZHMiLCJ4IiwieSIsImFsbFNoaXBzIiwicG9zc2libGVUb3BMZWZ0Q29vcmRzIiwicG9zc2libGV0b3BMZWZ0Q29vcmQiLCJzaGlwQ29vcmRpbmF0ZXMiLCJpc0Nvb3Jkc1ZhbGlkIiwiaXNPdmFsYXBwaW5nIiwiYXJlQWRqYWNlbnRzIiwiY29vcmRzIiwibGFzdENvb3JkIiwiaiIsImFkamFjZW50c0Nvb3JkcyIsImdldEFkamFjZW50Q29vcmRzIiwiY29vcmQiLCJpbnRlZ2VyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29vcmRpbmF0ZSIsIlNoaXAiLCJQbGF5ZXIiLCJidWlsZFNoaXBzIiwiZ2FtZWJvYXJkIiwidW5zaGlmdCIsImVuZW15IiwicmVjZWl2ZUF0dGFjayIsInBvc3NpYmxlQXR0YWNrcyIsImdldHBvc3NpYmxlQXR0YWNrQ29vcmRzRnJvbSIsInJhbmRvbUluZGV4IiwiYXR0YWNrRW5lbXlBdCIsImVuZW15R2FtZWJvYXJkIiwidXNlZEF0dGFja3MiLCJmdXR1cmVBdHRhY2tzIiwiZmlsdGVyIiwic3RyQ29yIiwidXNlZEF0dCIsImluY2x1ZGVzIiwic2NybyIsInBhcnNlIiwiZW5lbXlHYW1lQm9hcmQiLCJTaGlwbGVuZ3RoIiwiT2JqZWN0IiwiY3JlYXRlIiwic2hpcE1ldGhvZHMiLCJpc1N1bmsiLCJhZGREYXRhVG90ZCIsImNyZWF0ZVBsYXlHcm91bmQiLCJnYW1lIiwicGxheWVyIiwib3Bwb25lbnQiLCJwbGF5ZXJHYW1lYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcHBvbmVudEdhbWVib2FyZCIsInBsYXkiLCJyYW5kb21pc2UiLCJyZXN0YXJ0IiwiaW5uZXJIVE1MIiwicGxhY2VTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheVNoaXBzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZW1vdmVTaGlwc09uR2FtZWJvYXJkIiwiaGlkZU5vZGUiLCJlbCIsInRhcmdldCIsInRhZ05hbWUiLCJhdHRhY2tPcHBvbmVudEF0Q2VsbCIsImRpc3BsYXlQbGF5ZXJTdW5rU2hpcHMiLCJhcmVBbGxTaGlwc1N1bmsiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsImRpc3BsYXlXaW5uZXJTY3JlZW4iLCJkaXNwbGF5Tm9kZSIsInNldFRpbWVvdXQiLCJjb21wdXRlckF0dGFjayIsImF0dGFja0VuZW15QXRSYW5kb21Db29yZHNBbmRSZXR1cm5BdHRhY2tDb29yZHMiLCJhdHRhY2tlZENlbGwiLCJnZXRDZWxsQXRDb29yZE9uR2FtZWJvYXJkIiwibWFya0NlbGxBc0hpdCIsIm1hcmtjZWxsQXNBdHRhY2tlZCIsImNlbGwiLCJOdW1iZXIiLCJkYXRhc2V0IiwiYXR0YWNrZWRDb29yZHMiLCJhZGRDbGFzc05hbWVUb0Nvb3JkT25HYW1lYm9hcmQiLCJjbGFzc05hbWUiLCJ0ZCIsImNsYXNzTGlzdCIsImFkZCIsInNjcmVlbkNvbnRhaW5lciIsInRleHRDb250ZW50IiwiZ2FtZWJvYXJkVGRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIm5vZGUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJjb250YWluZXIiLCJhbGxUZCIsImluZGV4IiwiZ2V0WFkiLCJnZW5lcmF0ZUFscGhhYmV0QXJyIiwiYWxwaGFiZXRBcnIiLCJvcGVuVGFibGUiLCJjbG9zZVRhYmxlIiwib3BlblRhYmxlSGVhZCIsImNsb3NlVGFibGVIZWFkIiwib3BlblRhYmxlUm93IiwiY2xvc2VUYWJsZVJvdyIsIm9wZW5UYWJsZURhdGEiLCJjbG9zZVRhYmxlRGF0YSIsImNyZWF0ZUZpcnN0Um93IiwiY3JlYXRlTGFzdFRlblJvd3MiLCJmaXJzdFJvd0RhdGEiLCJjcmVhdGVSb3dDb250ZW50Iiwicm93Q29udGVudCIsIkFycmF5IiwicmVkdWNlIiwicHJldiIsImN1ciIsIkNBUElUQUwiLCJfIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=