const Gameboard = require('../src/classes/gameboard');
const Player = require('../src/classes/player');
const Ship = require('../src/classes/ship');

class Gameloop {
    constructor() {}

    runGame() {
        const players = {
            player: new Player('Samy'),
            computer: new Player('Computer')
        }
        
        const playerOneBoard = new Gameboard();
        const playerTwoBoard = new Gameboard();
        
        playerOneBoard.placeShip(1, 1, 5);
        playerOneBoard.placeShip(1, 3, 4);
        playerTwoBoard.placeShip(3, 3, 4);
        playerTwoBoard.placeShip(7, 7, 1);

        const gameboardSize = 10;

        for (let x = 0; x < gameboardSize; x++) {
            for (let y = 0; y < gameboardSize; y++) {
            const playerCell = document.getElementById(`cell-${x}-${y}`);
            const playerShip = playerOneBoard.map[x][y];
            const computerCell = document.getElementById(`computer-cell-${x}-${y}`);
            const computerShip = playerTwoBoard.map[x][y];
        if (playerShip) {
            playerCell.classList.add('ship');
        }
        if (computerShip) {
            computerCell.classList.add('ship');
        }
        }}

        const gridCells = document.querySelectorAll('.grid-cell');
        gridCells.forEach(gridCell => {
            gridCell.addEventListener('click', () => {
                        const ship = gridCell.querySelector('.ship');
                        if (!ship) {
                            gridCell.classList.add('miss');
                        } else {
                            gridCell.classList.add('hit');
                        }
                    }
                )
            }
        )
    }
}


module.exports = Gameloop;