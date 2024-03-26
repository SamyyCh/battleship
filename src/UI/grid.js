export function createGrid(className) {
  const grid = document.createElement('div');
  grid.classList.add(className);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-cell');
      gridItem.id = `cell-${i}-${j}`;
      grid.appendChild(gridItem);
    }
  }

  return grid;
}
