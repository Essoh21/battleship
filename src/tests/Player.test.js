import Player from "../Classes/Player";

const John = new Player()
const attackCoordinates = { b: 0 };
const enemy = new Player();
enemy.ships.forEach((ship, index) => {
    if (ship.length === 1) {
        ship.coordinates = [{ a: index }];
    } else if (ship.length === 2) {
        ship.coordinates = [{ c: index }, { d: index }];
    } else if (ship.length === 3) {
        ship.coordinates = [{ e: index }, { f: index }, { g: index }];
    } else {
        ship.coordinates = [{ e: index }, { f: index }, { g: index }, { a: 0 }];
    }
})
const enemyBoard = enemy.gameBoard;
John.attackEnemyAt(enemy, attackCoordinates);
test('Player attacks enemy gameBoard', () => {
    expect(enemyBoard.missedShots.length)
        .toBe(1);
})