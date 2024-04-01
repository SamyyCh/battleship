const Gameboard = require('../classes/gameboard.js');
const Ship = require('../classes/ship.js');

describe("map", () => {
    it('should be 100', () => {
        const map = new Gameboard();
        expect(map.size).toBe(100)
    })
})

describe("placeShip", () => {
    it('should throw an error if ship cannot be placed', () => {
        const map = new Gameboard();
        expect(map.placeShip(6, 1, 5, true)).toBe(false);
    });

    it('should place a ship horizontally', () => {
        const map = new Gameboard();
        map.placeShip(2, 3, 3, true);

        for (let i = 0; i < 3; i++) {
            expect(map.map[2 + i][3]).toBeInstanceOf(Ship);
        }
    });

    it('should place a ship vertically', () => {
        const map = new Gameboard();
        map.placeShip(2, 3, 3, false);

        for (let i = 0; i < 3; i++) {
            expect(map.map[2][3 + i]).toBeInstanceOf(Ship);
        }
    });
});


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

describe("allSunk", () => {
    it("all ship sunked", () => {
        const board = new Gameboard();
        board.placeShip(0, 0, 1);
        board.receiveAttack(0, 0);
        expect(board.allSunk()).toBe(true);
    })

    it("some ships aren't sunked", () => {
        const board = new Gameboard();
        board.placeShip(0, 0, 1);
        board.receiveAttack(2, 2);
        expect(board.allSunk()).toBe(false);
    })
})
