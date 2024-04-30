const Navbar = document.querySelector('nav')
const Logo = document.getElementById('Logo')

window.addEventListener('scroll', function () {
    const currentPostion = window.pageYOffset
  
    if (currentPostion >= 600) {
      Navbar.classList.add('Nav')
      Logo.classList.add('OnScroll')
    }
    else if (currentPostion < 600) {
      Logo.classList.remove('OnScroll')
      Navbar.classList.remove('Nav')
    }
  })
  
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );