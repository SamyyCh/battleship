import './style.css';
import { createHeader } from './UI/header.js';
import { createBoatList } from './UI/boatList.js';
import { createGrid } from './UI/grid.js';
import { createFooter } from './UI/footer.js';
const Gameloop = require('./gameloop.js');

document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');
  
    // Create header
    const header = createHeader();
    root.appendChild(header);

    // Create board
    const board = document.createElement('div');
    board.classList.add('board');
  
    // Create boat lists
    const playerBoats = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
    const playerBoatList = createBoatList(playerBoats, 'boatListPlayer');
    board.appendChild(playerBoatList);

    // Create player grid
    const playerGrid = createGrid('playerGrid');
    board.appendChild(playerGrid);
  
    const computerBoatList = createBoatList(playerBoats, 'boatListComputer');
    board.appendChild(computerBoatList);
  
    // Create computer grid
    const computerGrid = createGrid('computerGrid');
    board.appendChild(computerGrid);
  
    // Append board
    root.appendChild(board);

    // Create footer
    const footer = createFooter();
    root.appendChild(footer);

    // Initialize and run the game loop
    const game = new Gameloop();
    game.runGame();
});
