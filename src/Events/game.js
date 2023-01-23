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
    window.addEventListener('load', addDataTotd);
    opponentGameboard.addEventListener('click', (el) => {
        attackOpponentAtCell(opponent, el);
    })
}

const attackOpponentAtCell = (opponent, cell) => {
    const x = Number(cell.target.dataset.x);
    const y = Number(cell.target.dataset.y);
    const attackAtCoords = { x, y };
    opponent.gameboard.receiveAttack(attackAtCoords, opponent.ships);


    markcellAsAttacked(cell.target);
}

const markcellAsAttacked = (cell) => {
    cell.classList.add('clicked');
}
export default game;