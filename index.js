const Navbar = document.querySelector('nav')
const Logo = document.getElementById('Logo')

window.addEventListener('scroll', function () {
    const currentPostion = window.pageYOffset
    console.log(currentPostion);
  
    if (currentPostion >= 80) {
      Navbar.classList.add('nav')
      Logo.classList.add('OnScroll')
    }
    else if (currentPostion < 80) {
      Logo.classList.remove('OnScroll')
      Navbar.classList.remove('nav')
    }
  })
  

  