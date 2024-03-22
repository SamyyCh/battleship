const Ship = require('./ship')

class Gameboard {
    constructor() {
        this.height = 10;
        this.width = this.height;
        this.size = this.height * this.width;
        this.map = [];
        this.ships = [];
        this.hitCord = [];
        this.missed = [];

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
        ship.position = { x, y }
        this.ships.push(ship)
    }

    receiveAttack(x, y) {
        this.missed = [];
        const ship = this.map[x][y];
    
        if (ship) {
            ship.hit();
            this.hitCord.push([x, y])
            if (ship.isSunk()) {
                ship.sunk = true;
            }
        } else {
            this.missed.push([x, y]);
        }
        return this.missed;
    }
    

    allSunk() {
        for (const row of this.map) {
            for (const cell of row) {
                if (cell instanceof Ship && !cell.sunk) {
                    return false;
                }
            }
        }
        return true;
    }
}

module.exports = Gameboard