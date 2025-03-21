// Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year in the first paragraph of the footer
document.querySelector('footer p:first-of-type').textContent = `© ${currentYear} Ofonime A. William
 Uyo Nigeria`;

// Get the date the document was last modified
const lastModified = document.lastModified;

// Output the date the document was last modified in the second paragraph of the footer
document.querySelector('footer p:nth-of-type(2)').textContent = `Last Modified: ${lastModified}`;

// Select hamburger button and navigation menu
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open')
})





