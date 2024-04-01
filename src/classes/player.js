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
        Gameboard.size = 10;
        if ((this.hitCord.length + this.missed.length) === Gameboard.size) {
            return;
        } else {
            let availableCoords = [];
            for (let x = 0; x < Gameboard.size; x++) {
                for (let y = 0; y < Gameboard.size; y++) {
                    const coord = `${x}-${y}`;
                    const cell = document.getElementById(`cell-${x}-${y}`);
                    if (!cell) {
                        console.error(`Cell not found for coordinate: ${coord}`);
                        continue;
                    }
                    if (!cell.classList.contains('hit') && !cell.classList.contains('miss')) {
                        availableCoords.push(coord);
                    }
                }
            }
    
            if (availableCoords.length === 0) {
                return;
            }
    
            const randomIndex = Math.floor(Math.random() * availableCoords.length);
            const [xCord, yCord] = availableCoords[randomIndex].split('-');
            this.attack(parseInt(xCord), parseInt(yCord), Gameboard);
        }
    }          
}

module.exports = Player;
