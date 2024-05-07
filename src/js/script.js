// menu hamburger
const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#nav-menu');

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('hamburger-active');
  navBar.classList.toggle('hidden');
})

// close componen navbar menu of hamburger if on tap/click in other area
window.addEventListener('click', function (e) {
  if (e.target != navBar && e.target != hamburger) {
    hamburger.classList.remove('hamburger-active');
    navBar.classList.add('hidden');
  }
})

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header');

  const fixedNavbar = header.offsetTop;
  if (window.scrollY > fixedNavbar) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}