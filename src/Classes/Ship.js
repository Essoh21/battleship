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
    }
}

export default Ship;
