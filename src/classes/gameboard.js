const Ship = require('./ship')

class Gameboard {
    constructor() {
        this.height = 10;
        this.width = this.height;
        this.size = this.height * this.width;
        this.map = Array.from({ length: this.height }, () => Array(this.width).fill(null));
        this.ships = [];
        this.hitCord = [];
        this.missed = [];
    }

    isValidCell(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height && !this.map[x][y];
    }

    isValidShipPlacement(x, y, length, horizontal) {
        if (horizontal) {
            for (let i = 0; i < length; i++) {
                if (!this.isValidCell(x + i, y)) {
                    return false;
                }
            }
        } else {
            for (let i = 0; i < length; i++) {
                if (!this.isValidCell(x, y + i)) {
                    return false;
                }
            }
        }
        return true;
    }

    placeShip(x, y, length, horizontal) {
        if (this.isValidShipPlacement(x, y, length, horizontal)) {
            const ship = new Ship(length);
            for (let i = 0; i < length; i++) {
                if (horizontal) {
                    this.map[x + i][y] = ship;
                } else {
                    this.map[x][y + i] = ship;
                }
            }
            ship.position = { x, y };
            this.ships.push(ship);
            return true;
        }
        return false;
    }

    placeRandomShips(shipLengths) {
        this.ships = [];
        shipLengths.forEach((length) => {
            let placed = false;
            while (!placed) {
                const x = Math.floor(Math.random() * this.width);
                const y = Math.floor(Math.random() * this.height);
                const horizontal = Math.random() < 0.5;
                placed = this.placeShip(x, y, length, horizontal);
            }
        });
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