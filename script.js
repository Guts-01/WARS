const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const badgeForm = document.querySelector('#badge-form');
const playerName = document.querySelector('#player-name');
const badgeName = document.querySelector('#badge-name');
const badgePreview = document.querySelector('.badge-preview');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

badgeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = playerName.value.trim().replace(/\s+/g, ' ');

  if (!name) {
    playerName.setCustomValidity('Digite seu nome no jogo.');
    playerName.reportValidity();
    return;
  }

  badgeName.textContent = name.toLocaleUpperCase('pt-BR');
  badgePreview.classList.add('is-updated');
  playerName.value = '';
  playerName.focus();
});

playerName.addEventListener('input', () => playerName.setCustomValidity(''));
document.querySelector('#current-year').textContent = new Date().getFullYear();
