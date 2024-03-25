export function createGrid(className) {
  const grid = document.createElement('div');
  grid.classList.add(className);

  for (let i = 0; i < 100; i++) {
    const gridItem = document.createElement('div');
    gridItem.id = 'grid';
    grid.appendChild(gridItem);
  }

  return grid;
}