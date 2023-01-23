import GameBoard from "../Classes/GameBoard";
import Ship from "../Classes/Ship";
import Player from "../Classes/Player";


function checkOverlapping(ships) {
    for (let i = 0; i < ships.length; i++) {
        for (let j = i + 1; j < ships.length; j++) {
            for (let k = 0; k < ships[i].coordinates.length; k++) {
                for (let l = 0; l < ships[j].coordinates.length; l++) {
                    if (ships[i].coordinates[k].x === ships[j]
                        .coordinates[l].x && ships[i].coordinates[k]
                            .y === ships[j].coordinates[l].y) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function checkAdjacent(ships) {
    for (let i = 0; i < ships.length; i++) {
        for (let j = i + 1; j < ships.length; j++) {
            for (let k = 0; k < ships[i].coordinates.length; k++) {
                for (let l = 0; l < ships[j].coordinates.length; l++) {
                    if (Math.abs(ships[i].coordinates[k].x - ships[j].coordinates[l].x) <= 1 && Math.abs(ships[i].coordinates[k].y - ships[j].coordinates[l].y) <= 1) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

describe('GameBoard', () => {
    test('getRandomCoordinatesForShip returns a set of valid coordinates for a ship', () => {
        const gameBoard = new GameBoard();
        const ship = Ship(3);
        const player = new Player();
        const ships = player.ships;
        gameBoard.placeShipsAtRandomCoordinates(ships);

        const coordinates = gameBoard.getRandomCoordinatesForShip(
            ship, ships);

        expect(checkOverlapping(ships)).toBeFalsy();
        expect(checkAdjacent(ships)).toBeFalsy()

        expect(coordinates).toBeDefined();
        expect(coordinates.length).toBe(3);
        coordinates.forEach(coord => {
            expect(coord).toHaveProperty('x');
            expect(coord).toHaveProperty('y');
            expect(coord.x >= 0 && coord.x <= 9).toBeTruthy();
            expect(coord.y >= 0 && coord.y <= 9).toBeTruthy();
        });


    });

    describe('receiveAttack', () => {
        const gameBoard = new GameBoard();
        const ship2 = Ship(2);
        ship2.coordinates = [{ x: 0, y: 1 }, { x: 0, y: 2 }];
        const ship4 = Ship(4);
        ship4.coordinates = [{ x: 8, y: 2 }, { x: 8, y: 3 }, { x: 8, y: 5 }, { x: 8, y: 5 }]
        const ships = [ship2, ship4];
        const initializeGameboardhitsAndmissed = () => {
            gameBoard.hitShots = [];
            gameBoard.missedShots = [];
        }

        beforeEach(() => initializeGameboardhitsAndmissed());

        test(`receiveAttack method takes a pair of coordinates 
    , determine whether or not the attack hit a ship and send the 
    hit function to the correct ship`, () => {
            gameBoard.receiveAttack({ x: 8, y: 3 }, ships);
            expect(ship2.numberOfHits).toBe(0);
            expect(ship4.numberOfHits).toBe(1);
        });

        test(`receiveAttack record the coordinates of missedShoots in 
    gameBoard missedShots`, () => {
            gameBoard.receiveAttack({ x: 3, y: 5 }, ships);
            expect(gameBoard.missedShots.length).toBe(1);
            expect(gameBoard.missedShots[0].x === 3
                && gameBoard.missedShots[0].y === 5).toBeTruthy();
            expect(gameBoard.hitShots.length).toBe(0);
        })

        test(`gameboard keep track of the number of sunk ships `, () => {

            gameBoard.receiveAttack({ x: 0, y: 1 }, ships);
            gameBoard.receiveAttack({ x: 0, y: 2 }, ships);
            expect(gameBoard.sunkShipsNumber).toBe(1);
        })

    })



})