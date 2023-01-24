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
    opponentGameboard.addEventListener('click', (el) => {
        if (el.target.tagName == 'TD') {
            attackOpponentAtCell(opponent, el);
        }
        displayPlayerSunkShips(opponent, opponentGameboard);
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
export default game;