import Ship from "./Ship.js";
import generateAlphabetArr from "./generateAlphabetArr.js";
import generateIntegersArr from "./generateIntegersArr.js";
class GameBoard {
    constructor() {
        this.missedShots = [];
        this.hitShots = [];
        this.sunkShipsNumber = 0;
        this.allCoordinates = this.getAllCoordinates();
        this.indexes = (() => [...Array(100)]
            .map((el, index) => index))();

    };


    placeShipAt(Ship, coordinates) {
        Ship.coordinates = coordinates;
    }

    getAllCoordinates() {
        const integers = generateIntegersArr(11).slice(1);
        const alphabet = generateAlphabetArr();
        const coordinates = [];
        for (let i = 0; i < 10; i += 1) {
            for (let j = 0; j < 10; j += 1) {
                const coordinate = {};
                coordinate[alphabet[i]] = integers[j];
                coordinates.push(coordinate);
            }
        }
        return coordinates;
    }

    areNConsecutiveFromIndexFree(
        numberOfconsecutives
        , startIndex
        , VERTICAL = false) {
        let result = true;
        let i = 1;
        while (i <= numberOfconsecutives) {
            if (!(this.indexes.includes(startIndex))) {
                result = false;
                break;
            }
            VERTICAL ? startIndex += 10 : startIndex + 1;
            i += 1;
        }
        return result;
    }

    generateRandomCoordinatesForShip(
        ship,
        randomInt = Math.floor(Math.random() * 100)
    ) {
        if (ship.length === 1) {
            (this.indexes.includes(randomInt)) ?
                ship.coordinates = [this.allCoordinates[randomInt]] :
                this.generateRandomCoordinatesForShip(
                    ship
                    , randomInt = Math.floor(Math.random() * 100)
                );
            this.indexes.splice(randomInt, 1);
            return;
        }
        if (ship.length === 2) {
            if (this.areNConsecutiveFromIndexFree(2, randomInt)
                || this.areNConsecutiveFromIndexFree(2, randomInt, true)) {
                this.areNConsecutiveFromIndexFree(2, randomInt)
                    ? ship.coordinates = [
                        this.allCoordinates[randomInt]
                        , this.allCoordinates[randomInt + 1]
                    ]
                    : ship.coordinates = [
                        this.allCoordinates[randomInt]
                        , this.allCoordinates[randomInt + 10]
                    ];
            } else {
                this.generateRandomCoordinatesForShip(
                    ship
                    , randomInt = Math.floor(Math.random() * 100)
                );
            }
        }

        if (ship.length === 3) {
            if (this.areNConsecutiveFromIndexFree(3, randomInt)
                || this.areNConsecutiveFromIndexFree(3, randomInt, true)) {
                this.areNConsecutiveFromIndexFree(3, randomInt)
                    ? ship.coordinates = [
                        this.allCoordinates[randomInt]
                        , this.allCoordinates[randomInt + 1]
                        , this.allCoordinates[randomInt + 2]
                    ]
                    : ship.coordinates = [
                        this.allCoordinates[randomInt]
                        , this.allCoordinates[randomInt + 10]
                        , this.allCoordinates[randomInt + 20]
                    ];
            } else {
                this.generateRandomCoordinatesForShip(
                    ship
                    , randomInt = Math.floor(Math.random() * 100)
                );
            }
        }

        if (ship.length === 4) {
            if (this.areNConsecutiveFromIndexFree(4, randomInt)
                || this.areNConsecutiveFromIndexFree(4, randomInt, true)) {
                this.areNConsecutiveFromIndexFree(4, randomInt)
                    ? ship.coordinates = [
                        this.allCoordinates[randomInt]
                        , this.allCoordinates[randomInt + 1]
                        , this.allCoordinates[randomInt + 2]
                        , this.allCoordinates[randomInt + 3]
                    ]
                    : ship.coordinates = [
                        this.allCoordinates[randomInt]
                        , this.allCoordinates[randomInt + 10]
                        , this.allCoordinates[randomInt + 20]
                        , this.allCoordinates[randomInt + 30]
                    ];
            } else {
                this.generateRandomCoordinatesForShip(
                    ship
                    , randomInt = Math.floor(Math.random() * 100)
                );
            }
        }

    }


    placeShipsAtRandomCoordinates(
        ships
        , randomInt = Math.floor(Math.random() * 100)
    ) {
        const shipsCoordinates = [];
        ships.forEach((ship) => {

        })
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