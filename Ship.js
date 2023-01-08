const Ship = (Shiplength) => {
    const ship = Object.create(shipMethods);
    ship.numberOfHits = 0;
    ship.length = Shiplength;
    return ship;
}

const shipMethods = {
    getNumberOfHits() {
        return this.numberOfHits;
    },
    updateNumberOfHits() {
        this.numberOfHits += 1;
    },
    isSunk() {
        return (this.length === this.numberOfHits) ? true : false;
    }
}
const myShip = Ship(2);
myShip.updateNumberOfHits();
console.log(myShip.isSunk());
myShip.updateNumberOfHits();
console.log(myShip.isSunk());
export default Ship;