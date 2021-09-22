// show header when scroll
function scrollShowHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 500) {
    header.classList.add('show-header');
  } else header.classList.remove('show-header');
}
window.addEventListener('scroll', scrollShowHeader)
// active menu when scroll 
const sections = document.querySelectorAll('section[id]');
const header = document.getElementById('header');
const footer = document.getElementById('contact');
const headerHeight = header.clientHeight;
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach(function(current) {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - headerHeight,
    sectionId = current.getAttribute('id');
    if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu-item a[href*='+sectionId+']').classList.add('menu-active')
    } else {
      document.querySelector('.nav__menu-item a[href*='+sectionId+']').classList.remove('menu-active')
    }
  })
}
function scrollActive2() {
  const scrollY = window.pageYOffset;
    const footerHeight = footer.offsetHeight,
    footerTop = footer.offsetTop - headerHeight,
    footerId = footer.getAttribute('id');
    if(scrollY >= footerTop && scrollY <= footerTop + footerHeight) {
      document.querySelector('.nav__menu-item a[href*='+footerId+']').classList.add('menu-active')
    } else {
      document.querySelector('.nav__menu-item a[href*='+footerId+']').classList.remove('menu-active')
    }
}
window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', scrollActive2);
const navSub = document.querySelector('.nav__sub');
navSub.onclick = function(e) {
  e.stopPropagation();
}
const dropDownItem = document.getElementById('drop-down');
var close = true;
function autoHeight() {
  if(close) {
    dropDownItem.style.height = 'auto';
    close = false;
  } else {
    dropDownItem.style.height = null;
    close = true;
  }
}

dropDownItem.addEventListener('click', autoHeight)
// show menu 
const menuMoblieBtn = document.querySelector('.nav__btn-mobile');
const menuIcon = menuMoblieBtn.querySelector('i');
function showMenu() {
  const menu = document.querySelector('.nav__menu');
  if(menu.style.display == '') {
    menuIcon.classList.replace('bx-align-left','bx-x');
    menu.style.display = 'flex';
  } else {
    menuIcon.classList.replace('bx-x','bx-align-left');
    menu.style.display = '';
  }
}
menuMoblieBtn.addEventListener('click', showMenu);

// hidden menu when click 
const menuItems = document.querySelectorAll('.nav__menu-item');
const subMenuItems = document.querySelectorAll('.nav__sub-item');
for(var i = 0; i < menuItems.length; i++) {
  const menu = document.querySelector('.nav__menu');
  var menuItem = menuItems[i];
  menuItem.onclick = function(e) {
    var isParentMenu = this.lastElementChild && this.lastElementChild.classList.contains('nav__sub');
    if(isParentMenu) {
      e.preventDefault();
    } else {
      menu.style.display = '';
      menuIcon.classList.replace('bx-x','bx-align-left');
    }
  }
}
subMenuItems.forEach(function(item) {
  item.onclick = function(e) {
    e.preventDefault();
  }
})
