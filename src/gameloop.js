const Gameboard = require('../src/classes/gameboard');
const Player = require('../src/classes/player');
const Ship = require('../src/classes/ship');
const { createGrid } = require('./UI/grid');

class Gameloop {
    constructor() {}

    runGame() {
        const gameboard = new Gameboard();
        const grid = createGrid('game-grid');
        document.body.appendChild(grid);

        // Testing - Place the ship on the gameboard
        let x = 1;
        let y = 1;
        let length = 4;
        gameboard.placeShip(x, y, length);
        
        // Update the corresponding grid cells' CSS classes to indicate the presence of a ship
        for (let i = 0; i < length; i++) {
            const cell = document.getElementById(`cell-${x + i}-${y}`);
            cell.classList.add('ship'); // Add a class to indicate ship presence
        }
    }

    // runGameTwo() {
    //     // Create players
    //     const playerOne = new Player('Samy');
    //     const playerTwo = new Player('AI');
        
    //     // Create separate gameboards for each player
    //     const playerOneBoard = new Gameboard();
    //     const playerTwoBoard = new Gameboard();
        
    //     // Place ships on the player's gameboards with example coordinates
    //     playerOneBoard.placeShip(2, 2, 4);
    //     playerOneBoard.placeShip(6, 6, 1);
    //     playerTwoBoard.placeShip(3, 3, 4);
    //     playerTwoBoard.placeShip(7, 7, 1);

    //     console.log(playerOneBoard.ships)
    //     // Update the grid representation for player one's gameboard
    //         playerOneBoard.ships.forEach(ship => {
    //         ship.coordinates.forEach(coord => {
    //         const [x, y] = coord;
    //         const cell = document.getElementById(`cell-${x}-${y}`);
    //         cell.classList.add('ship');
    //         })
    //     })
    // }
}

module.exports = Gameloop;