export function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/SamyyCh/battleship';
  githubLink.textContent = ' (GitHub)';
  footer.textContent = 'Copyright © 2024 Samy Chattali - ';
  footer.appendChild(githubLink);
  return footer;
}