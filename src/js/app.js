const navbar = document.querySelector('#navbar');
const btnMenu = document.querySelector('#hamburgermenu');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('hamburger-active');
  navbar.classList.toggle('-right-full');
  navbar.classList.toggle('right-0');
});

window.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !btnMenu.contains(e.target)) {
    navbar.classList.add('-right-full');
    navbar.classList.remove('right-0');
    btnMenu.classList.remove('hamburger-active');
  }
});
