import GameBoard from "../Classes/GameBoard";
import Ship from "../Classes/Ship";
import Player from "../Classes/Player";


test('getRandomCoordinatesForShip returns a set of valid coordinates for a ship', () => {
    const gameBoard = new GameBoard();
    const ship = Ship(3);
    const player = new Player();
    const ships = player.ships;

    const coordinates = gameBoard.getRandomCoordinatesForShip(
        ship, ships);

    expect(coordinates).toBeDefined();
    expect(coordinates.length).toBe(3);
    coordinates.forEach(coord => {
        expect(coord).toHaveProperty('x');
        expect(coord).toHaveProperty('y');
        expect(coord.x >= 0 && coord.x <= 9).toBeTruthy();
        expect(coord.y >= 0 && coord.y <= 9).toBeTruthy();
    });
});
