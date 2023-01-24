import addDataTotd from "../helpfullFunctions/addDataValTotd";
import createPlayGround from "../helpfullFunctions/createPlayGround";
import Player from "../Classes/Player";

const game = () => {
    const player = new Player();
    const opponent = new Player();
    const playerGameboard =
        document.querySelector('.user-gameboard-container');
    const opponentGameboard =
        document.querySelector('.opponent-gameboard-container');
    const play =
        document.querySelector('.play');
    const randomise =
        document.querySelector('.randomise');

    const restart =
        document.querySelector('.restart');
    //add user and opponent gameboards
    playerGameboard.innerHTML = createPlayGround();
    player.gameboard.placeShipsAtRandomCoordinates(player.ships);
    opponentGameboard.innerHTML = createPlayGround();
    opponent.gameboard.placeShipsAtRandomCoordinates(opponent.ships);
    //Events
    window.addEventListener('load', () => {
        addDataTotd(playerGameboard);
        addDataTotd(opponentGameboard);
        displayShips(player.ships,
            playerGameboard);
    });

    restart.addEventListener('click', () => {
        location.reload();
    })
    randomise.addEventListener('click', () => {
        removeShipsOnGameboard(playerGameboard);
        player.gameboard.placeShipsAtRandomCoordinates(player.ships);
        displayShips(player.ships, playerGameboard);
    })

    play.addEventListener('click', () => {
        opponentGameboard.addEventListener('click', (el) => {
            if (el.target.tagName == 'TD') {
                attackOpponentAtCell(opponent, el);
            }
            displayPlayerSunkShips(opponent, opponentGameboard);
            if (opponent.gameboard.areAllShipsSunk()) {
                opponentGameboard
                    .replaceWith(opponentGameboard.cloneNode(true))
                displayWinnerScreen('Player');
                displayNode(restart);

            }
        })
        hideNode(play);
        hideNode(randomise);
    })

}

const attackOpponentAtCell = (opponent, cell) => {
    const x = Number(cell.target.dataset.x);
    const y = Number(cell.target.dataset.y);
    const attackedCoords = { x, y };
    opponent.gameboard.receiveAttack(attackedCoords, opponent.ships);
    let hit = false;
    opponent.ships.forEach((ship) => {
        if (ship.containsCoordinates(attackedCoords)) {
            hit = true;
        }
    })
    hit ? markCellAsHit(cell.target) : markcellAsAttacked(cell.target);


}

function displayShips(ships, gameBoard) {
    ships.forEach((ship) => {
        ship.coordinates.forEach(coord => {
            let x = coord.x;
            let y = coord.y;
            let td = gameBoard.querySelector(`td[data-x="${x}"][data-y="${y}"]`);
            td.classList.add("ship");
        });
    });
}

function displayPlayerSunkShips(player, gameboard) {
    player.ships.forEach((ship) => {
        if (ship.length === ship.numberOfHits) {
            ship.coordinates.forEach((coord) => {
                let td = gameboard
                    .querySelector(`td[data-x= "${coord.x}"][data-y="${coord.y}"]`);
                td.classList.add('sunk');
            })
        }
    })
}

const markcellAsAttacked = (cell) => {
    cell.classList.add('clicked');
}

const markCellAsHit = (cell) => {
    cell.classList.add('hit');
}

const displayWinnerScreen = (player) => {
    const screenContainer = document.querySelector('.screen');
    screenContainer.textContent = `${player} wins the game`;
    displayNode(screenContainer);
}

function removeShipsOnGameboard(gameboard) {
    const gameboardTds = gameboard.querySelectorAll('td');
    gameboardTds.forEach((td) => {
        td.classList.remove('ship');
    })
}

function displayNode(node) {
    node.style.visibility = 'visible';
}

function hideNode(node) {
    node.style.visibility = 'hidden';
}
export default game;