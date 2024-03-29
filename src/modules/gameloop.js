import GameMethod from './gameMethods';

export default function gameloop() {
    const methods = new GameMethod();
    const button = document.getElementById('randomize');
    button.addEventListener('click', () => {
        methods.players[0].gameboard.clearShips();
        methods.players[1].gameboard.clearShips();
        methods.players[0].gameboard.placeRandomShips([5, 4, 3, 3, 2]);
        methods.players[1].gameboard.placeRandomShips([5, 4, 3, 3, 2]);
        methods.populateBoard();
    });
    methods.playerAttack();
}

