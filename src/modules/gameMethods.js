const Gameboard = require('../classes/gameboard');
const Player = require('../classes/player');
const Ship = require('../classes/ship');

class GameMethod {
    constructor() {
        this.players = [
            {
                player: new Player('Samy'),
                gameboard: new Gameboard(),
            },
            {
                player: new Player('Computer'),
                gameboard: new Gameboard(),
            },
        ];
        this.shipLengths = [5, 4, 3, 2, 1]
    }

    populateBoard() {
        const gameboardSize = 10;
    
        for (let x = 0; x < gameboardSize; x++) {
            for (let y = 0; y < gameboardSize; y++) {
                const playerCell = document.getElementById(`cell-${x}-${y}`);
                const computerCell = document.getElementById(`computer-cell-${x}-${y}`);
    
                const playerShip = this.players[0].gameboard.map[x][y];
                const computerShip = this.players[1].gameboard.map[x][y];
    
                if (playerShip) {
                    playerCell.classList.add('ship');
                }
    
                if (computerShip) {
                    computerCell.classList.add('computer-ship');
                }
            }
        }
    }
    
    playerAttack() {
        const gridContainer = document.querySelector('.computerGrid');
        gridContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('grid-cell')) {
                const gridCell = event.target;
                const ship = gridCell.classList.contains('computer-ship');
                if (ship) {
                    gridCell.classList.add('hit');
                    const [x, y] = gridCell.id.split('-').slice(1).filter((el, index) => index > 0).map(Number);
                    this.players[1].gameboard.receiveAttack(x, y)
                    this.markShipSunkedPlayer();
                } else {
                    gridCell.classList.add('miss');
                }
                this.computerAttack();

                if (this.gameOver()) {
                    // Game over logic here...
                }
            }
        });
    }
    

    computerAttack() {
        this.players[1].player.randomAttack(this.players[0].gameboard);
    
        this.players[0].gameboard.hitCord.forEach(coord => {
            const [x, y] = coord;
            const cell = document.getElementById(`cell-${x}-${y}`);
            cell.classList.add('hit');
            this.players[0].player.hitCord.push([x, y]);
        });
    
        this.markShipSunkedComputer();
    
        this.players[0].gameboard.missed.forEach(coord => {
            const [x, y] = coord;
            const cell = document.getElementById(`cell-${x}-${y}`);
            cell.classList.add('miss');
            this.players[0].player.missed.push([x, y]);
        });

        if (this.gameOver()) {
            // Create game over page
        }
    }
    

    markShipSunkedPlayer() {
        const shipLengths = [5, 4, 3, 2, 1];
    
        for (let i = 0; i < shipLengths.length; i++) {
            const length = shipLengths[i];
            const sunk = this.players[1].gameboard.ships.some(ship => ship.length === length && ship.sunk);
            if (sunk) {
                const boatListElement = document.querySelectorAll('.boatListComputer li')[i];
                boatListElement.classList.add('sunk');
            }
        }
    }

    markShipSunkedComputer() {
        const shipLengths = [5, 4, 3, 2, 1];
    
        for (let i = 0; i < shipLengths.length; i++) {
            const length = shipLengths[i];
            const sunk = this.players[0].gameboard.ships.some(ship => ship.length === length && ship.sunk);
            if (sunk) {
                const boatListElement = document.querySelectorAll('.boatListPlayer li')[i];
                boatListElement.classList.add('sunk');
            }
        }
    }

    gameOver() {
        const player1AllSunk = this.players[0].gameboard.allSunk();
        const player2AllSunk = this.players[1].gameboard.allSunk();

        return player1AllSunk || player2AllSunk;
    }
    
    
}

module.exports = GameMethod;