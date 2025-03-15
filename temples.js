const navMenu = document.querySelector('.navigation ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('close');
});

// Add event listener to nav menu items
navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navMenu.classList.remove('show');
    hamburger.classList.remove('close');
  }
});
