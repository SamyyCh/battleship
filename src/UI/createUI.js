import { createHeader } from './header.js';
import { createBoatList } from './boatList.js';
import { createGrid } from './grid.js';
import { createButton } from './button.js';
import { createComputerGrid } from './computerGrid.js';
import { createFooter } from './footer.js';

export default document.addEventListener('DOMContentLoaded', function () {
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

    // Create button
    const button = createButton();
    board.appendChild(button);
  
    const computerBoatList = createBoatList(playerBoats, 'boatListComputer');
    board.appendChild(computerBoatList);
  
    // Create computer grid
    const computerGrid = createComputerGrid('computerGrid');
    board.appendChild(computerGrid);
  
    // Append board
    root.appendChild(board);

    // Create footer
    const footer = createFooter();
    root.appendChild(footer);
});