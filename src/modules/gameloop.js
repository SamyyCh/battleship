import GameMethod from './gameMethods';

export default function gameloop() {
    const methods = new GameMethod();
    const button = document.getElementById('randomize');
    button.addEventListener('click', () => {
        methods.players[0].gameboard.placeRandomShips(methods.shipLengths);
        methods.players[1].gameboard.placeRandomShips(methods.shipLengths);
        methods.populateBoard();
        button.parentNode.removeChild(button);
    });
    methods.playerAttack();
}

