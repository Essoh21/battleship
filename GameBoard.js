class GameBoard {
    constructor() { };
    placeShipAt(Ship, coordinates) {
        Ship.coordinates = coordinates;
    }
}

export default GameBoard;