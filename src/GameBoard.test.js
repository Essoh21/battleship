import GameBoard from "./GameBoard.js";
import Player from "./Player.js";
import Ship from "./Ship.js";

const myGameBoard = new GameBoard();
const twoLengthShip = Ship(2);
const oneLengthShip = Ship(1);
const threeLengthShip = Ship(3);
const firstCoordinates = [{ f: 2 }];
const secondCoordinates = [{ f: 5 }, { f: 6 }];
const thirdCoordinates = [{ a: 1 }, { b: 1 }, { c: 2 }];
const missedShots = myGameBoard.missedShots;
const John = new Player();
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

test('gameBoard modify indexes', () => {
    expect(myGameBoard.indexes.length).toBe(100);
    myGameBoard.indexes.splice(52, 1);
    expect(myGameBoard.indexes.length).toBe(99)
})

test('game board generate random coordinates for one length ship', () => {
    myGameBoard.generateRandomCoordinatesForShip(John.ships[0]);
    expect(John.ships[1].coordinates).toBe(null);
    expect(John.ships[0].coordinates == null).toBeFalsy();
})

test('gameboard generate random coordinates for 3 length ship', () => {
    myGameBoard.generateRandomCoordinatesForShip(John.ships[7]);
    expect(John.ships[8].coordinates).toBe(null);
    expect(John.ships[7].coordinates.length).toBe(3);
})

test('gameBoard place ships at random coordinates', () => {
    myGameBoard.placeShipsAtRandomCoordinates(John.ships);

    expect(John.ships[0].coordinates == null).toBeFalsy();
    expect(John.ships[1].coordinates == null).toBeFalsy();
    expect(John.ships[9].coordinates.length).toBe(4);
    expect(John.ships[4].coordinates.length).toBe(2);
    expect(John.ships[7].coordinates.length).toBe(3);

})

test('gameboard correctly save missed attacks and hitsAttacks', () => {
    const JohnShips = John.ships;
    const JohnGameboard = John.gameBoard;
    JohnGameboard.placeShipsAtRandomCoordinates(JohnShips);
    const JohnONeLengthCoord = JohnShips[0].coordinates;
    const twoLengthShipCoor = JohnShips[5].coordinates;
    const threeLengthShipCoor = JohnShips[8].coordinates;
    const fourLengthShipCoor = JohnShips[9].coordinates;
    const randomCoord = JohnGameboard.allCoordinates[Math.floor(Math.random() * 100)];
    JohnGameboard.receiveAttack(randomCoord, JohnShips);
    JohnGameboard.receiveAttack(JohnONeLengthCoord[0], JohnShips);
    JohnGameboard.receiveAttack(twoLengthShipCoor[1], JohnShips);
    JohnGameboard.receiveAttack(threeLengthShipCoor[2], JohnShips);
    JohnGameboard.receiveAttack(fourLengthShipCoor[1], JohnShips);

    expect(JohnGameboard.missedShots.includes(JSON.stringify(randomCoord))
        || JohnGameboard.hitShots.includes(JSON.stringify(randomCoord))).toBeTruthy();

    expect(JohnGameboard.missedShots.includes(JSON.stringify(JohnONeLengthCoord[0]))
        || JohnGameboard.hitShots.includes(JSON.stringify(JohnONeLengthCoord[0]))).toBeTruthy();

    expect(JohnGameboard.missedShots.includes(JSON.stringify(twoLengthShipCoor[1]))
        || JohnGameboard.hitShots.includes(JSON.stringify(twoLengthShipCoor[1]))).toBeTruthy();

    expect(JohnGameboard.missedShots.includes(JSON.stringify(threeLengthShipCoor[2]))
        || JohnGameboard.hitShots.includes(JSON.stringify(threeLengthShipCoor[2]))).toBeTruthy();

    expect(JohnGameboard.missedShots.includes(JSON.stringify(fourLengthShipCoor[1]))
        || JohnGameboard.hitShots.includes(JSON.stringify(fourLengthShipCoor[1]))).toBeTruthy();
})