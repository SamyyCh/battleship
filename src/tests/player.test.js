const Gameboard = require('../classes/gameboard.js');
const Player = require('../classes/player.js');

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
    it("should not attack the same coordinate twice", () => {
        const player = new Player();
        const mockGameboard = {
            size: 100,
            map: [],
            hitCord: [],
            missed: [],
            receiveAttack: jest.fn()
        };
    
        player.randomAttack(mockGameboard);
        player.randomAttack(mockGameboard);
    
        expect(mockGameboard.receiveAttack).toHaveBeenCalledTimes(2);
    
        const coordinates = player.hitCord;
        const uniqueCoordinates = [...new Set(coordinates.map(coord => coord.join(',')))];
        expect(uniqueCoordinates.length).toBe(coordinates.length);
    });
});

