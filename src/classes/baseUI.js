export default function baseUI() {
    const root = document.createElement('div');
    root.id = root;

    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.textContent = 'Battleship';

    header.appendChild(title);
    root.appendChild(header);

    const board = document.createElement('div');
    board.classList.add('board')
    const boatListPlayer = document.createElement('div');
    boatListPlayer.classList.add('boatListPlayer');
    const ul = document.createElement('ul');
    const listOne = document.createElement('li');
    listOne.textContent = 'Carrier';
    const listTwo = document.createElement('li');
    listTwo.textContent = 'Battleship';
    const listThree = document.createElement('li');
    listThree.textContent = 'Cruiser';
    const listFour = document.createElement('li');
    listFour.textContent = 'Submarine';
    const listFive = document.createElement('li');
    listFive.textContent = 'Destroyer';
    ul.appendChild(listOne);
    ul.appendChild(listTwo);
    ul.appendChild(listThree);
    ul.appendChild(listFour);
    ul.appendChild(listFive);
    boatListPlayer.appendChild(ul);
    board.appendChild(boatListPlayer);
    
}