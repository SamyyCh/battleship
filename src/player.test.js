const Gameboard = require('./gameboard.js');
const Player = require('./player.js');

describe("attack", () => {
    it("should attack", () => {
        const board = new Gameboard();
        const player = new Player();
        board.placeShip(1, 1, 1);
        player.attack(1, 1, board);
        
        const attackedShip = board.map[1][1];
        
        expect(attackedShip.hits).toBe(1);
    });

    it("should log a missed attack", () => {
        const board = new Gameboard();
        const player = new Player();
        board.placeShip(1, 1, 1);
        player.attack(3, 3, board);
        
        expect(board.missed).toEqual([[3, 3]]);
    });
});

describe("randomAttack", () => {
    it("should attack random coordinates until all coordinates are attacked", () => {
        const player = new Player();
        const mockGameboard = {
            size: 100,
            map: [],
            hitCord: [],
            receiveAttack: jest.fn()
        };

        while (player.hitCord.length < mockGameboard.size) {
            player.randomAttack(mockGameboard);
        }

        expect(mockGameboard.receiveAttack).toHaveBeenCalledTimes(mockGameboard.size);
    });
});

