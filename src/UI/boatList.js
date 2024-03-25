export function createBoatList(title, className) {
  const boatList = document.createElement('div');
  boatList.classList.add(className);

  const ul = document.createElement('ul');
  title.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  boatList.appendChild(ul);

  return boatList;
}
  