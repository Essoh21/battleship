import style from './style.css';
import html from './index.html';
import GameBoard from './GameBoard.js';
import createPlayGround from './createPlayGround.js';
import Player from './Player.js';

const playerUI = document
    .querySelector('.user-gameboard-container');
const openentUI = document
    .querySelector('.openent-gameboard-container');
// Player
const player = new Player();
const playerGameboard = new GameBoard();
const playerShips = player.ships;
// openent
const openent = new Player();
const openentGameboard = new GameBoard();
const openentShips = openent.ships;

let currentPlayer = 'player';

playerUI.innerHTML = createPlayGround();
openentUI.innerHTML = createPlayGround();
