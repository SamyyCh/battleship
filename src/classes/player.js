const Gameboard = require('./gameboard');

class Player {
    constructor(name) {
        this.name = name;
        this.hitCord = [];
        this.missed = [];
    }

    attack(x, y, Gameboard) {
        if (!Gameboard.missed.some(coord => coord[0] === x && coord[1] === y) && 
            !Gameboard.hitCord.some(coord => coord[0] === x && coord[1] === y)) {
            Gameboard.receiveAttack(x, y);
        }
    }

    randomAttack(Gameboard) {
        if ((this.hitCord.length + this.missed.length) === Gameboard.size) {
            return;
        } else {
            let xCord, yCord;
            do {
                xCord = Math.floor(Math.random() * 10);
                yCord = Math.floor(Math.random() * 10);
            } while (this.hitCord.some(coord => coord[0] === xCord && coord[1] === yCord) || 
                    (Gameboard.missed.some(coord => coord[0] === xCord && coord[1] === yCord)));
            this.attack(xCord, yCord, Gameboard);
        }
    }
    
}

module.exports = Player;
