const Navbar = document.querySelector('nav')
const Logo = document.getElementById('Logo')
const navMenu = document.querySelector('.menu-btn')

window.addEventListener('scroll', function () {
    const currentPostion = window.pageYOffset
  
    if (currentPostion >= 600) {
      Navbar.classList.add('Nav')
      Logo.classList.add('OnScroll')
      navMenu.classList.add('NavBtn')
    }
    else if (currentPostion < 600) {
      Logo.classList.remove('OnScroll')
      Navbar.classList.remove('Nav')
      navMenu.classList.remove('NavBtn')
    }
  })
  document.addEventListener('DOMContentLoaded', function() {
    // Add 'loaded' class to body when page is fully loaded
    document.body.classList.add('loaded');
});

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


