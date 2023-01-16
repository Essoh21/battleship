import style from './style.css';
import html from './index.html';
import createPlayGround from './createPlayGround.js';
import Player from './Player.js';
import addClassNameToAll from './DOMInteraction.js';
import GameBoard from './GameBoard.js';

const playerUI = document
    .querySelector('.user-gameboard-container');
const openentUI = document
    .querySelector('.openent-gameboard-container');

const PlayerTurn = 1;
// Player
const player = new Player();
const playerGameboard = new GameBoard();
const playerShips = player.ships;
playerGameboard.placeShipsAtRandomCoordinates(playerShips);
// openent
const openent = new Player();
const openentGameboard = new GameBoard();
const openentShips = openent.ships;
openentGameboard.placeShipsAtRandomCoordinates(openentShips);


window.addEventListener('load', addClassNameToAll)
playerUI.addEventListener('click', (el) => attackOpenentAt(el))

playerUI.innerHTML = createPlayGround();
openentUI.innerHTML = createPlayGround();


const attackOpenentAt = (el) => {
    if ((typeof (el.target.className * 1) === 'number')
        && (el.target.className * 1) !== 0) {
        const attackIndex = (el.target.className * 1) - 1;
        const attackCoodinates = playerGameboard.allCoordinates[attackIndex];
        console.log(attackCoodinates);
    }
}
