export function createBoatList(title) {
    const boatList = document.createElement('div');
    boatList.classList.add('boatList');
  
    const ul = document.createElement('ul');
    title.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  
    boatList.appendChild(ul);
  
    return boatList;
  }
  