export function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
  
    const h1 = document.createElement('h1');
    h1.textContent = 'Battleship';
  
    header.appendChild(h1);
  
    return header;
  }
  