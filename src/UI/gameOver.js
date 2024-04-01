import { initializeUI } from '../UI/createUI';
import gameloop from '../modules/gameloop';
import GameMethod from '../modules/gameMethods';

export default function createGameOver() {
    const method = new GameMethod();
    // const winner = method.declareWinner();
    const over = document.createElement('div');
    over.classList.add('over');
    const overTitle = document.createElement('h1');
    overTitle.textContent = 'Game Over !';
    over.appendChild(overTitle);
    const restart = document.createElement('button');
    restart.id = 'restart';
    restart.textContent = 'Restart';
    over.appendChild(restart);
    restart.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = '';
        initializeUI();
        gameloop();
    });
    return over;
}