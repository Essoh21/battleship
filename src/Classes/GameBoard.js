
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

    areAllShipSun() {
        return this.sunkShipsNumber === 10 ? true : false;
    }

    placeShipsAtRandomCoordinates(ships) {
        ships.forEach((ship) => ship.coordinates =
            this.getRandomCoordinatesForShip(ship, ships));
    }

    getRandomCoordinatesForShip(ship, ships) {
        const direction = this.getRandomDirection();
        const possibleFirstCoordForShip =
            this.getPossibleFirstCoordForShipsOfLength(ship.length, direction, ships);
        const randomFirstCoord = possibleFirstCoordForShip[
            this.getRandomIntegerLessThan(possibleFirstCoordForShip.length)
        ];

        return this.getCoordForShipOfLengthFrom(ship.length, randomFirstCoord, direction);
    }

    receiveAttack(attackCoords, ships) {
        let hit = false;
        for (let i = 0; i < ships.length; i += 1) {
            if (ships[i].containsCoordinates(attackCoords)) {
                ships[i].hit();
                hit = true;
                this.hitShots.push(attackCoords)
                if (ships[i].numberOfHits === ships[i].length) {
                    this.sunkShipsNumber += 1;
                }

                break;
            }
        }
        if (!hit) {
            this.missedShots.push(attackCoords);
        }

    }

    getCoordForShipOfLengthFrom(length, startCoords, direction) {
        const coordinates = [];
        let i = 0;
        while (i < length) {
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

    getPossibleFirstCoordForShipsOfLength(
        length
        , direction
        , allShips) {
        const possibleTopLeftCoords = [];
        for (let y = 0; y < 10; y += 1) {
            for (let x = 0; x < 10; x += 1) {
                const possibletopLeftCoord = { x, y };
                const shipCoordinates = this.getCoordForShipOfLengthFrom(
                    length, possibletopLeftCoord, direction
                )
                if ((!this.isCoordsValid(shipCoordinates))
                    || (this.isOvalapping(shipCoordinates, allShips))
                    || this.areAdjacents(shipCoordinates, allShips)) {
                    continue;
                }

                possibleTopLeftCoords.push(possibletopLeftCoord);
            }
        }
        return possibleTopLeftCoords;
    }

    isCoordsValid(coords) {
        const lastCoord = coords[coords.length - 1];
        return (lastCoord.x > 9 || lastCoord.y > 9) ? false : true;
    }

    isOvalapping(coords, allShips) {
        for (let i = 0; i < coords.length; i += 1) {
            for (let j = 0; j < allShips.length; j += 1) {
                for (let k = 0; k < allShips[j].coordinates.length; k += 1) {
                    if (coords[i].x === allShips[j].coordinates[k].x
                        && coords[i].y === allShips[j].coordinates[k].y) {
                        return true
                    }
                }
            }
        }
        return false;
    }

    areAdjacents(coords, allShips) {
        for (let i = 0; i < coords.length; i += 1) {
            const adjacentsCoords = this.getAdjacentCoords(coords[i]);
            if (this.isOvalapping(adjacentsCoords, allShips)) {
                return true;
            }
            return false;
        }

    }

    getAdjacentCoords(coord) {
        return [
            { x: coord.x, y: coord.y - 1 }
            , { x: coord.x, y: coord.y + 1 }
            , { x: coord.x - 1, y: coord.y }
            , { x: coord.x + 1, y: coord.y }
            , { x: coord.x - 1, y: coord.y - 1 }
            , { x: coord.x - 1, y: coord.y + 1 }
            , { x: coord.x + 1, y: coord.y - 1 }
            , { x: coord.x + 1, y: coord.y + 1 }
        ];
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


}

export default GameBoard;