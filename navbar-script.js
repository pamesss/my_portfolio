const openButton = document.querySelector('.header__navbar__btn--mobile');
const closeButton = document.querySelector('.header__navbar__btn');
const content = document.querySelector('.header');

function toggleMenu() {
    if (content.classList.contains('navbar__toggle')) {
        content.classList.remove('navbar__toggle');
    } else {
        content.classList.add('navbar__toggle');
    }
}

openButton.addEventListener('click', () => {
    toggleMenu();
});

closeButton.addEventListener('click', () => {
    toggleMenu();
});

document.addEventListener('click', (event) => {
    if (!content.contains(event.target) && !openButton.contains(event.target)) {
    content.classList.remove('navbar__toggle');
  }
});
