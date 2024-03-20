const Gameboard = require('./gameboard.js');
const Ship = require('./ship.js');

describe("map", () => {
    it('should be 100', () => {
        const map = new Gameboard();
        expect(map.size).toBe(100)
    })
})

describe("placeShip", () => {
    it('should throw an error', () => {
        const map = new Gameboard();
        expect(() => map.placeShip(6, 1, 5)).toThrow(Error)
    })

    it.only('should place a ship', () => {
        const map = new Gameboard();
        map.placeShip(2, 3, 3);

        for (let i = 0; i < 3; i++) {
            expect(map.map[2 + i][3]).toBeInstanceOf(Ship)
        }
    })
})