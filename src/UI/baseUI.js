import { createHeader } from './header.js';
import { createBoatList } from './boatList.js';
import { createGrid } from './grid.js';
import { createFooter } from './footer.js';

export default function baseUI() {
    const root = document.getElementById('root');

    // Create header
    const header = createHeader();
    root.appendChild(header);

    // Create boat lists
    const playerBoats = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
    const playerBoatList = createBoatList(playerBoats);
    playerBoatList.classList.add('boatListPlayer');
    root.appendChild(playerBoatList);

    const computerBoatList = createBoatList(playerBoats);
    computerBoatList.classList.add('boatListComputer');
    root.appendChild(computerBoatList);

    // Create player grid
    const playerGrid = createGrid('playerGrid');
    root.appendChild(playerGrid);

    // Create computer grid
    const computerGrid = createGrid('computerGrid');
    root.appendChild(computerGrid);

    // Create footer
    const footer = createFooter();
    root.appendChild(footer);
}