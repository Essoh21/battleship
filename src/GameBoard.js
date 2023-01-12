import Ship from "./Ship.js";
class GameBoard {
    constructor() { };
    missedShots = [];
    hitShots = [];
    sunkShipsNumber = 0;
    placeShipAt(Ship, coordinates) {
        Ship.coordinates = coordinates;
    }

    receiveAttack(attack, Ships) {
        const shipsCoordinates = this.getStringifyedCoordinatesOf(Ships);
        let attackHit = false;
        let hitshipIndex;
        shipsCoordinates.forEach((strshipCoordinates, index) => {
            const shipCoordinates = JSON.parse(strshipCoordinates)
                .map(keyVal => JSON.stringify(keyVal)); // stringify each pair
            if (shipCoordinates.includes(JSON.stringify(attack))) {
                attackHit = true;
                hitshipIndex = index;
            }
        })
        if (attackHit) {
            Ships[hitshipIndex].hit();
            if (Ships[hitshipIndex].isSunk()) {
                this.sunkShipsNumber += 1;
                this.hitShots.push(JSON.stringify(attack));
            }
        } else {
            this.missedShots.push(JSON.stringify(attack));
        }

    }

    getStringifyedCoordinatesOf(allShips) {
        const shipsCoordinates = [];
        for (let i = 0; i < allShips.length; i += 1) {
            const coordinates = JSON.stringify(allShips[i].coordinates); //stringify each array of coordinates to avoid array of arrays
            shipsCoordinates.push(coordinates);
        }
        return shipsCoordinates;
    }
}

export default GameBoard;