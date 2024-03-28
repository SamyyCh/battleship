const Gameboard = require('../classes/gameboard');
const Player = require('../classes/player');
const Ship = require('../classes/ship');

class Gameloop {
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
    }

    populateBoard() {
        const shipLengths = [5, 4, 3, 3, 2];
        this.players[0].gameboard.placeRandomShips(shipLengths);
        this.players[1].gameboard.placeRandomShips(shipLengths);

        const gameboardSize = 10;

        for (let x = 0; x < gameboardSize; x++) {
            for (let y = 0; y < gameboardSize; y++) {
                const playerCell = document.getElementById(`cell-${x}-${y}`);
                const playerShip = this.players[0].gameboard.map[x][y];
                const computerCell = document.getElementById(`computer-cell-${x}-${y}`);
                const computerShip = this.players[1].gameboard.map[x][y];
                if (playerShip) {
                    playerCell.classList.add('ship');
                }
                if (computerShip) {
                    computerCell.classList.add('ship');
                }
            }
        }
    }

    playerAttack() {
        const gridContainer = document.querySelector('.computerGrid');
        gridContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('grid-cell')) {
                const gridCell = event.target;
                const ship = gridCell.classList.contains('ship');
                if (ship) {
                    gridCell.classList.add('hit');
                } else {
                    gridCell.classList.add('miss');
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
        });
    
        this.players[0].gameboard.missed.forEach(coord => {
            const [x, y] = coord;
            const cell = document.getElementById(`cell-${x}-${y}`);
            cell.classList.add('miss');
        });
    }
    
    
      
}

module.exports = Gameloop;
