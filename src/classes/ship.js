class Ship {
    constructor(length) {
        this.position = [];
        this.length = length;
        this.hits = 0;
        this.sunk = false
    }

    hit() {
        if (!this.sunk) {
            this.hits++;
            this.isSunk();
        }
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true
        }
    }
}

module.exports = Ship;