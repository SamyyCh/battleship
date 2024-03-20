const Gameboard = require('./gameboard.js');

describe("map", () => {
    it('should be 100', () => {
        const map = new Gameboard();
        expect(map.size).toBe(100)
    })
})