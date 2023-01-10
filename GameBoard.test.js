import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";

test('GameBoard place a ship at a specific  coordinate', () => {
    const twoLengthShip = Ship(2);
    const oneLengthShip = Ship(1);
    // const fourLengthShip = Ship(4);
    const threeLengthShip = Ship(3);

    const firstCoordinates = [JSON.stringify({ f: 2 })];
    const secondCoordinates = [
        JSON.stringify({ "f": 5 })
        , JSON.stringify({ f: 6 })
    ];
    const thirdCoordinates = [
        JSON.stringify({ a: 1 })
        , JSON.stringify({ b: 1 })
        , JSON.stringify({ c: 2 })
    ];
    const myGameBoard = new GameBoard();
    myGameBoard.placeShipAt(oneLengthShip, firstCoordinates);
    myGameBoard.placeShipAt(twoLengthShip, secondCoordinates);
    myGameBoard.placeShipAt(threeLengthShip, thirdCoordinates);

    expect(oneLengthShip.coordinates).toEqual(firstCoordinates);
    expect(twoLengthShip.coordinates).toEqual(secondCoordinates);
    expect(threeLengthShip.coordinates).toEqual(thirdCoordinates);
}) 