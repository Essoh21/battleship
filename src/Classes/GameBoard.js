
import generateAlphabetArr from "../helpfullFunctions/generateAlphabetArr.js";
import generateIntegersArr from "../helpfullFunctions/generateIntegersArr.js";
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

    placeShipsAtRandomCoordinates(ships) {
        ships.forEach((ship) => this.generateRandomCoordinatesForShip(ship));
    }

    getAllCoordinates() {
        const integers = generateIntegersArr(11).slice(1);
        const alphabet = generateAlphabetArr();
        const coordinates = [];
        for (let j = 0; j < 10; j += 1) {
            for (let i = 0; i < 10; i += 1) {
                const coordinate = {};
                coordinate[alphabet[i]] = integers[j];
                coordinates.push(coordinate);
            }
        }
        return coordinates;
    }

    removeAdjacentIndexesOfIndexFromIndexes(index
        , indexesContainer = this.indexes
    ) {
        let adjacentIndexesOfIndex;
        if ((index % 10) == 9) {
            adjacentIndexesOfIndex = [
                index - 1
                , index + 10
                , index - 10
                , index + 9
                , index - 11].filter((el) => el >= 0);
        } else if ((index % 10) == 0) {
            adjacentIndexesOfIndex = [
                index + 1
                , index + 10
                , index - 10
                , index - 9
                , index + 11].filter((el) => el >= 0);
        } else if ((index > 0) && (index < 9)) {
            adjacentIndexesOfIndex = [
                index - 1
                , index + 1
                , index + 10
                , index + 9
                , index + 11].filter((el) => el >= 0);
        } else if ((index > 90) && (index < 99)) {
            adjacentIndexesOfIndex = [
                index - 1
                , index + 1
                , index - 10
                , index - 9
                , index - 11].filter((el) => el >= 0);
        } else {
            adjacentIndexesOfIndex = [
                index + 1
                , index - 1
                , index + 10
                , index - 10
                , index + 9
                , index - 9
                , index + 11
                , index - 11
            ].filter((el) => el >= 0);
        }
        adjacentIndexesOfIndex.forEach((index) => {
            if (indexesContainer.includes(index)) {
                indexesContainer.splice(index, 1, '');
            }
        }
        )
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

    isValideNShipIndex(n, index) {
        return (index % 10) <= (10 - n) ? true : false;
    }
    generateRandomCoordinatesForShip(
        ship,
        randomInt = Math.floor(Math.random() * 100)
    ) {
        if (ship.length === 1) {
            while (!this.indexes.includes(randomInt)) {
                randomInt = Math.floor(Math.random() * 10);
            }
            ship.coordinates = [this.allCoordinates[randomInt]];
            this.indexes.splice(randomInt, 1, '');
            this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
            console.log(this.indexes.length);
            return;
        }
        if (ship.length === 2) {
            while (!((this.areNConsecutiveFromIndexFree(2, randomInt)
                || this.areNConsecutiveFromIndexFree(2, randomInt, true))
                && this.isValideNShipIndex(2, randomInt))) {
                randomInt = Math.floor(Math.random() * 100);
            }

            if (this.areNConsecutiveFromIndexFree(2, randomInt)) {
                ship.coordinates = [
                    this.allCoordinates[randomInt]
                    , this.allCoordinates[randomInt + 1]
                ];
                this.indexes.splice(randomInt, 1, '');
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 1);
                console.log(this.indexes.length);
            } else {
                ship.coordinates = [
                    this.allCoordinates[randomInt]
                    , this.allCoordinates[randomInt + 10]
                ];
                this.indexes.splice(randomInt, 1, '');
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 10);
                console.log(this.indexes.length);
            }

        }

        if (ship.length === 3) {
            while (!((this.areNConsecutiveFromIndexFree(3, randomInt)
                || this.areNConsecutiveFromIndexFree(3, randomInt, true))
                && this.isValideNShipIndex(3, randomInt))) {
                randomInt = Math.floor(Math.random() * 100);
            }

            if (!this.areNConsecutiveFromIndexFree(3, randomInt)) {
                ship.coordinates = [
                    this.allCoordinates[randomInt]
                    , this.allCoordinates[randomInt + 1]
                    , this.allCoordinates[randomInt + 2]
                ];
                this.indexes.splice(randomInt, 1, '');
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 1);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 2);
                console.log(this.indexes.length);
            } else {
                ship.coordinates = [
                    this.allCoordinates[randomInt]
                    , this.allCoordinates[randomInt + 10]
                    , this.allCoordinates[randomInt + 20]
                ];
                this.indexes.splice(randomInt, 1, '');
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 10);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 20);
                console.log(this.indexes.length);
            }

        }

        if (ship.length === 4) {
            while (!((this.areNConsecutiveFromIndexFree(4, randomInt)
                || this.areNConsecutiveFromIndexFree(4, randomInt, true))
                && this.isValideNShipIndex(4, randomInt))) {
                randomInt = Math.floor(Math.random() * 100);
            }

            if (this.areNConsecutiveFromIndexFree(4, randomInt)) {
                ship.coordinates = [
                    this.allCoordinates[randomInt]
                    , this.allCoordinates[randomInt + 1]
                    , this.allCoordinates[randomInt + 2]
                    , this.allCoordinates[randomInt + 3]
                ];
                console.log(this.indexes)
                this.indexes.splice(randomInt, 1, '');
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 1);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 2);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 3);
                console.log(this.indexes)
            } else {
                ship.coordinates = [
                    this.allCoordinates[randomInt]
                    , this.allCoordinates[randomInt + 10]
                    , this.allCoordinates[randomInt + 20]
                    , this.allCoordinates[randomInt + 30]
                ];
                this.indexes.splice(randomInt, 1, '');
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 10);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 20);
                this.removeAdjacentIndexesOfIndexFromIndexes(randomInt + 30);
            }
        }

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