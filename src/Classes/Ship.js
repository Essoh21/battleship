const Ship = (Shiplength) => {
    const ship = Object.create(shipMethods);
    ship.numberOfHits = 0;
    ship.length = Shiplength;
    ship.coordinates = [];
    ship.direction = 'horizontal';
    return ship;
}

const shipMethods = {
    hit() {
        this.numberOfHits += 1;
    },
    isSunk() {
        return (this.length === this.numberOfHits) ? true : false;
    },

    containsCoordinates(coordinates) {
        for (let i = 0; i < this.coordinates.length; i += 1) {
            if (
                coordinates.x == this.coordinates[i].x
                && coordinates.y == this.coordinates[i].y) {
                return true
            }
        }
        return false
    }
}

export default Ship;
