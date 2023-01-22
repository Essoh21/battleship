import Ship from "../Classes/Ship.js";
import GameBoard from "../Classes/GameBoard.js";

class Player {
    constructor() {
        this.ships = this.buildShips();
        this.gameboard = new GameBoard();
    }

    buildShips() {
        const ships = [];
        for (let i = 0; i < 10; i += 1) {
            if (i < 4) { ships.push(Ship(1)) }
            else if (i < 7) { ships.push(Ship(2)) }
            else if (i < 9) { ships.push(Ship(3)) }
            else { ships.unshift(Ship(4)) }
        }

        return ships;
    }

    attackEnemyAt(enemy, coordinates) {
        enemy.gameboard.receiveAttack(coordinates, enemy.ships);
    }

    getMissedShootsFrom(enemyGameBoard) {
        return enemyGameBoard.missedShots;
    }

    getHitShotsFrom(enemyGameBoard) {
        return enemyGameBoard.hitShots;
    }
}

export default Player;