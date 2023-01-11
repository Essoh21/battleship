import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";

const myGameBoard = new GameBoard();
const twoLengthShip = Ship(2);
const oneLengthShip = Ship(1);
const threeLengthShip = Ship(3);
const firstCoordinates = [{ f: 2 }];
const secondCoordinates = [{ f: 5 }, { f: 6 }];
const thirdCoordinates = [{ a: 1 }, { b: 1 }, { c: 2 }];
const missedShots = myGameBoard.missedShots;
myGameBoard.placeShipAt(oneLengthShip, firstCoordinates);
myGameBoard.placeShipAt(twoLengthShip, secondCoordinates);
myGameBoard.placeShipAt(threeLengthShip, thirdCoordinates);

const ships = [
    oneLengthShip
    , twoLengthShip
    , threeLengthShip
]

test('GameBoard place a ship at a specific  coordinate', () => {

    expect(JSON.stringify(oneLengthShip.coordinates))
        .toEqual(JSON.stringify(firstCoordinates));
    expect(JSON.stringify(twoLengthShip.coordinates))
        .toEqual(JSON.stringify(secondCoordinates));
    expect(JSON.stringify(threeLengthShip.coordinates))
        .toEqual(JSON.stringify(thirdCoordinates));
});

test('getstringifyedCoordinatesOf return correct structure', () => {
    expect(myGameBoard.getStringifyedCoordinatesOf(ships))
        .toEqual([JSON.stringify(firstCoordinates), JSON.stringify(secondCoordinates),
        JSON.stringify(thirdCoordinates)]);
})
const attack = { b: 1 };
const seconAttack = { f: 2 };
const thirdAttack = { c: 2 };
const missedAttack = { d: 0 };
const lastAttak = { a: 1 };
myGameBoard.receiveAttack(attack, ships);
myGameBoard.receiveAttack(seconAttack, ships);
myGameBoard.receiveAttack(thirdAttack, ships);
myGameBoard.receiveAttack(missedAttack, ships);
myGameBoard.receiveAttack(lastAttak, ships);
test('GameBoard receiveAttack determine whether or not the attack hit a ship',
    () => {
        expect(threeLengthShip.numberOfHits).toBe(3);
        expect(missedShots.includes(JSON.stringify(attack))).toBeFalsy();
        expect(missedShots.length).toBe(1);
        expect(missedShots.includes(JSON.stringify(missedAttack))).toBeTruthy();
        expect(oneLengthShip.numberOfHits).toBe(1);
        expect(twoLengthShip.numberOfHits).toBe(0);
    }
)

test('GameBoard report the number of sunk ships', () => {
    expect(oneLengthShip.isSunk()).toBeTruthy();
    expect(threeLengthShip.isSunk()).toBeTruthy();
    expect(twoLengthShip.isSunk()).toBeFalsy();
    expect(myGameBoard.sunkShipsNumber).toBe(2);
})