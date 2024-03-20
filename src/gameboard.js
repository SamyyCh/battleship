const Ship = require('./ship')

class Gameboard {
    constructor() {
        this.height = 10;
        this.width = this.height;
        this.size = this.height * this.width;
        this.map = [];

        for (let i = 0; i < this.height; i++) {
            this.map.push(Array(this.width).fill(null));
        }
    }

    placeShip(x, y, length) {
        const ship = new Ship(length);

        if (x + length > this.width || y + length > this.height) {
            throw new Error("Out of bounds");
        }

        for (let i = 0; i < length; i++) {
            this.map[x + i][y] = ship;
        }
    }

    receiveAttack(x, y) {
        
    }
}

module.exports = Gameboard