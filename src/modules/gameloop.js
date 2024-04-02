import GameMethod from './gameMethods';

export default function gameloop() {
    const methods = new GameMethod();
    methods.players[0].gameboard.placeRandomShips(methods.shipLengths);
    methods.players[1].gameboard.placeRandomShips(methods.shipLengths);
    methods.populateBoard();
    const button = document.getElementById('randomize');
    button.addEventListener('click', () => {
        methods.clearShips();
        methods.players[0].gameboard.placeRandomShips(methods.shipLengths);
        methods.players[1].gameboard.placeRandomShips(methods.shipLengths);
        methods.populateBoard();
    });
    methods.playerAttack();
}