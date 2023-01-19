import createPlayGround from '../helpfullFunctions/createPlayGround.js';
import Player from '../Classes/Player.js';
import addClassNameToAll from '../helpfullFunctions/DOMInteraction.js';

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

    window.addEventListener('load', () => {
        addClassNameToAll();
        displayAllShips(playerShips, playerGameboard)
    })
    openentUI.addEventListener('click', (el) => attackOpenentAt(el))
    playerUI.innerHTML = createPlayGround();
    openentUI.innerHTML = createPlayGround();

    const attackOpenentAt = (el) => {
        if ((typeof (el.target.className * 1) === 'number')
            && (el.target.className * 1) !== 0) {
            const attackCoodinates = getAttackCoorOnGameboard(el, openentGameboard);
            player.attackEnemyAt(openent, attackCoodinates);
            displayAttackOnGameBoard(el, openentGameboard);
        }
    }
}

const displayAllShips = (ships, gameboard) => {
    ships.forEach((ship) => {
        displayShip(ship, gameboard);
    })
}

const displayShip = (ship, gameboard) => {
    const shipCoorIndexes = []
    const shipCoordinates = ship.coordinates.map((coor) => JSON.stringify(coor));
    shipCoordinates.forEach((coor) => {
        const gameboardAllcoords = gameboard.allCoordinates.map(
            (coords) =>
                JSON.stringify(coords));
        const indexFromAllCoor = gameboardAllcoords.indexOf(
            coor
        );
        shipCoorIndexes.push(indexFromAllCoor);
    });
    const squares = document.querySelectorAll('td');
    shipCoorIndexes.forEach((ind) => squares[ind + 1]
        .style.border = '2px solid blue');
}

const displayAttackOnGameBoard = (attack, gameboard) => {
    const attackCoor = getAttackCoorOnGameboard(attack, gameboard);
    gameboard.hitShots.includes(JSON.stringify(attackCoor))
        ? attack.target.className = `${attack.target.className} hit`
        : attack.target.className = `${attack.target.className} clicked`;
}

const getAttackCoorOnGameboard = (attack, gameboard) => {
    const attackIndex = (attack.target.className * 1) - 102;
    const attackCoodinates = gameboard.allCoordinates[attackIndex];
    return attackCoodinates;
}
export default addEvents;