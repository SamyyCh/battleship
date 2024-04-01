const Gameboard = require('../classes/gameboard');
const Player = require('../classes/player');
const Ship = require('../classes/ship');
import createGameOver from '../UI/gameOver';

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

    clearShips() {
        const gameboardSize = 10;
    
        for (let x = 0; x < gameboardSize; x++) {
            for (let y = 0; y < gameboardSize; y++) {
                const playerCells = document.querySelectorAll(`#cell-${x}-${y}`);
                const computerCells = document.querySelectorAll(`#computer-cell-${x}-${y}`);
    
                playerCells.forEach(playerCell => {
                    playerCell.classList.remove('ship');
                    playerCell.classList.remove('hit');
                    playerCell.classList.remove('miss');
                });
    
                computerCells.forEach(computerCell => {
                    computerCell.classList.remove('computer-ship');
                    computerCell.classList.remove('hit');
                    computerCell.classList.remove('miss');
                });
    
                this.players[0].gameboard.map[x][y] = null;
                this.players[1].gameboard.map[x][y] = null;
            }
        }
    }       
    
    playerAttack() {
        const gridContainer = document.querySelector('.computerGrid');
        gridContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('grid-cell') && !event.target.classList.contains('hit') && !event.target.classList.contains('miss')) {
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
                    setTimeout(() => {
                        const board = document.querySelector('.board');
                        board.innerHTML = '';
                        const gameOverScreen = createGameOver();
                        board.removeAttribute('class'); 
                        board.classList.add('over');
                        board.appendChild(gameOverScreen);
                    }, 1000)
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
            setTimeout(() => {
                const board = document.querySelector('.board');
                board.innerHTML = '';
                const gameOverScreen = createGameOver();
                board.removeAttribute('class'); 
                board.classList.add('over');
                board.appendChild(gameOverScreen);
            }, 1000)
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

    // declareWinner() {
    //     const player1AllSunk = this.players[1].gameboard.allSunk();
    //     if (player1AllSunk) {
    //         return 'You';
    //     } else {
    //         return 'Computer';
    //     }
    // }

    gameOver() {
        const player1AllSunk = this.players[0].gameboard.allSunk();
        const player2AllSunk = this.players[1].gameboard.allSunk();
        return player1AllSunk || player2AllSunk;
    }
}

export default GameMethod;