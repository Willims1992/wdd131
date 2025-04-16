// Toggle mobile menu
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');
//const navLinksContainer = document.querySelector('.nav-links-container');
//const closeButton = document.querySelector('.close-button');
//const overlay = document.querySelector('.overlay');
//const body = document.querySelector('body');
//const navLinksHeight = navLinks.getBoundingClientRect().height;
//const navLinksWidth = navLinks.getBoundingClientRect().width;

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');

});