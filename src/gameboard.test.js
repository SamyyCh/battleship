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

    it('should place a ship', () => {
        const map = new Gameboard();
        map.placeShip(2, 3, 3);

        for (let i = 0; i < 3; i++) {
            expect(map.map[2 + i][3]).toBeInstanceOf(Ship)
        }
    })
})

describe("receiveAttack", () => {
    it("receive and hit boat", () => {
        const board = new Gameboard();
        board.placeShip(0, 0, 3);
        board.receiveAttack(0, 0);
        expect(board.map[0][0].hits).toBe(1);
    })

    it("record a miss", () => {
        const board = new Gameboard();
        board.placeShip(0, 0, 3);
        board.receiveAttack(1, 1)
        expect(board.receiveAttack(1, 1)).toEqual([[1, 1]]);
    })
})
