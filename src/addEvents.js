import createPlayGround from './createPlayGround.js';
import Player from './Player.js';
import addClassNameToAll from './DOMInteraction.js';

const addEvents = () => {
    const playerUI = document
        .querySelector('.user-gameboard-container');
    const openentUI = document
        .querySelector('.openent-gameboard-container');
    // Player
    const player = new Player();
    const playerGameboard = player.gameBoard;
    const playerShips = player.ships;
    playerGameboard.placeShipsAtRandomCoordinates(playerShips);
    // openent
    const openent = new Player();
    const openentGameboard = openent.gameBoard;
    const openentShips = openent.ships;
    openentGameboard.placeShipsAtRandomCoordinates(openentShips);

    window.addEventListener('load', addClassNameToAll)
    openentUI.addEventListener('click', (el) => attackOpenentAt(el))
    playerUI.innerHTML = createPlayGround();
    openentUI.innerHTML = createPlayGround();

    const attackOpenentAt = (el) => {
        if ((typeof (el.target.className * 1) === 'number')
            && (el.target.className * 1) !== 0) {
            const attackIndex = (el.target.className * 1) - 102;
            const attackCoodinates = openentGameboard.allCoordinates[attackIndex];
            player.attackEnemyAt(openent, attackCoodinates);
            if (openentGameboard.hitShots.includes(JSON.stringify(attackCoodinates))) {
                el.target.className = `${el.target.className} hit`;
            } else {
                el.target.className = `${el.target.className} clicked`;
            }
        }
    }
}
export default addEvents;