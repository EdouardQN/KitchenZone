// DOM
const menuBurger = document.querySelector('.menu-burger');
const menuNav = document.querySelector('.menu-nav');

// Ouverture/fermeture menu nav (mobile only)
menuBurger.addEventListener("click", triggerMenu);
function triggerMenu(){

    if (menuNav.classList.contains('opacity-0')){
        menuNav.classList.remove('opacity-0');
        menuNav.classList.add('opacity-100');
    }
    else{
        menuNav.classList.remove('opacity-100');
        menuNav.classList.add('opacity-0');
    }
}