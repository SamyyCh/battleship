const Ship = require('./ship.js');

describe("hit", () => {
    it('should increase hits every hit', () => {
        const boat = new Ship(3);
        boat.hit();

        expect(boat.hits).toBe(1);
    })

    it('does not hit if sunk', () => {
        const boat = new Ship(3);
        boat.hit();
        boat.hit();
        boat.hit();
        boat.hit();

        expect(boat.hits).toBe(3);
    })
})

describe("isSunk", () => {
    it('return true when sunk', () => {
        const boat = new Ship(3);
        boat.hit();
        boat.hit();
        boat.hit();

        expect(boat.sunk).toBe(true);
    })

    it('return false when not sunk', () => {
        const boat = new Ship(3);
        boat.hit();
        boat.hit();

        expect(boat.sunk).toBe(false);
    })
})