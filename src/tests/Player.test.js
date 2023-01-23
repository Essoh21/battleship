import Player from "../Classes/Player";

const player = new Player();
const enemy = new Player();
enemy.gameboard.placeShipsAtRandomCoordinates(enemy.ships);

const initializeEnemyBoardMissedAndHitsShots = () => {
    enemy.gameboard.missedShots = [];
    enemy.gameboard.hitShots = [];
}

describe('Player', () => {

    beforeEach(() => {
        initializeEnemyBoardMissedAndHitsShots();
    });

    test(`player can attack the enemy gameboard`, () => {
        player.attackEnemyAt(enemy, { x: 1, y: 1 });
        expect(enemy.gameboard.missedShots.length === 1
            || enemy.gameboard.hitShots.length === 1).toBeTruthy()
    });

    test(`player can attack the enemy at a random Attack`, () => {
        player.attackEnemyAtRandomCoords(enemy);
        console.log(enemy.gameboard.missedShots);
        console.log(enemy.gameboard.hitShots);
        expect(enemy.gameboard.missedShots.length === 1
            || enemy.gameboard.hitShots.length === 1).toBeTruthy()
        expect(enemy.gameboard.missedShots.length === 0
            || enemy.gameboard.hitShots.length === 0).toBeTruthy()
    })
})

