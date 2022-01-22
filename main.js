const button = document.querySelector('.hamburger--js');

button.addEventListener('click', () => {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('navigation--open');
});



