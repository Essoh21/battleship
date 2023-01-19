import Ship from "../Classes/Ship";

test('ship return its length', () => {
    expect(Ship(2).length).toBe(2);
    expect(Ship(4).length).toBe(4);
});

test('Ship returns its coordinates', () => {
    expect(Ship(3).coordinates).toEqual(null);
})

test('ship update number of hits', () => {
    const eightLengthShip = Ship(8);
    eightLengthShip.hit();
    expect(eightLengthShip.numberOfHits).toBe(1);
});
test('return true when ship is sunk and false if not', () => {
    const twoLenghtSip = Ship(2);
    const fourLenghtShip = Ship(4);
    twoLenghtSip.hit();
    twoLenghtSip.hit();
    fourLenghtShip.hit();
    fourLenghtShip.hit();
    fourLenghtShip.hit();
    expect(twoLenghtSip.isSunk()).toBeTruthy();
    expect(fourLenghtShip.isSunk()).toBeFalsy();
})