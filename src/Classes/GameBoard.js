
class GameBoard {
    constructor() {
        this.missedShots = [];
        this.hitShots = [];
        this.sunkShipsNumber = 0;
        this.allCoordinates = this.getAllCoordinates();
    };

    placeShipAt(ship, coordinates) {
        ship.coordinates = coordinates;
    }

    placeShipsAtRandomCoordinates(ships) {
        ships.forEach((ship) => ship.coordinates =
            this.getRandomCoordinatesForShip(ship));
    }

    getRandomCoordinatesForShip(ship) {
        const direction = this.getRandomDirection();
        const possibleFirstCoordForShip =
            getPossibleFirstCoordForShipsOfLength(ship.length, direction);
        const randomFirstCoord = possibleFirstCoordForShip[
            this.getRandomIntegerLessThan(possibleFirstCoordForShip.length)
        ];

        return this.getCoordOfShipFrom(ship, randomFirstCoord, direction);
    }

    getCoordOfShipFrom(ship, startCoords, direction) {
        const coordinates = [];
        let i = 0;
        while (i < ship.length) {
            direction === 'horizontal'
                ? coordinates.push({
                    x: startCoords.x
                    , y: startCoords.y + i
                })
                : coordinates.push({
                    x: startCoords.x + i
                    , y: startCoords.y
                });
            i += 1;

        }
        return coordinates;
    }

    getPossibleFirstCoordForShipsOfLength(length, direction) {
        const possibleFirstCoordinates = [];

    }
    getRandomIntegerLessThan(integer) {
        return Math.floor(Math.random() * integer);
    }

    getRandomDirection() {
        return (Math.floor(Math.random() * 2) % 2) === 0
            ? 'horizontal' : 'vertical';
    }

    getAllCoordinates() {
        const coordinates = [];
        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                const coordinate = { x, y };
                coordinates.push(coordinate);
            }
        }
        return coordinates;
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
            }
            this.hitShots.push(JSON.stringify(attack));
        } else {
            this.missedShots.push(JSON.stringify(attack));
        }

    }


}

export default GameBoard;