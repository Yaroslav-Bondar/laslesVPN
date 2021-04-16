headerBurger = document.querySelector('.header__burger');
headerBurgerLine = document.querySelector('.header__burger-line');
headerMenuWrapper = document.querySelector('.header__menu-wrapper');
headerNav = document.querySelector('.header__nav');
butToTop = document.querySelector('.but-to-top');
body = document.querySelector('body');
var iAmScroll = Math.round(window.pageYOffset);
let headerNavHeight = headerNav.offsetHeight;
let windowHeight = window.innerHeight;
if (window.innerWidth < 923) {
    headerMenuWrapper.style.height = windowHeight - headerNavHeight + 'px';
    headerMenuWrapper.style.top = headerNavHeight + 'px';    
}
headerBurger.addEventListener('click', () => {
    headerBurgerLine.classList.toggle('header__burger-line_active');
    headerMenuWrapper.classList.toggle('header__menu-wrapper_active');
    body.classList.toggle('lock');
});
window.addEventListener('resize', () => {
    iAmScroll = Math.round(window.pageYOffset);
    headerNavHeight = headerNav.offsetHeight;
    windowHeight = window.innerHeight;
    if (window.innerWidth < 923) {
        headerMenuWrapper.style.height = windowHeight - headerNavHeight + 'px';
        headerMenuWrapper.style.top = headerNavHeight + 'px';
        if(!body.classList.contains('lock') && headerBurgerLine.classList.contains('header__burger-line_active')) {
            body.classList.add('lock');
        }
    
    }
    else {
        headerMenuWrapper.style.height = 'auto';
        if(body.classList.contains('lock')) {
            body.classList.remove('lock');
        }
    }    
});
window.addEventListener('scroll', () => {
    iAmScroll = Math.round(window.pageYOffset);
    if (iAmScroll > 795) {
        butToTop.classList.add('but-to-top_active');
    }
    else {
        butToTop.classList.remove('but-to-top_active');
    } 
});
butToTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
