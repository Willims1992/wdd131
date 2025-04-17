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

// Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year in the first paragraph of the footer
document.querySelector('footer p:first-of-type').textContent = `© ${currentYear} Ofonime A. William
 Uyo Nigeria`;

// Get the date the document was last modified
const lastModified = document.lastModified;

// Output the date the document was last modified in the second paragraph of the footer
document.querySelector('footer p:nth-of-type(2)').textContent = `Last Modified: ${lastModified}`;


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    const savedData = JSON.parse(localStorage.getItem("formData"))
    if (savedData) {
        form.elements["name"].value = savedData.name || "";
        form.elements["email"].value = savedData.email || "";
        form.elements["message"].value = savedData.message || "";
    }
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = {
            name: form.elements["name"].value,
            email: form.elements["email"].value,
            message: form.elements["message"].value
        };

        // Save the data to localStorage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Optionally, you can display a success message or perform other actions here
        alert("Form submitted successfully!");

        // Clear the form after submission
        form.reset();
    });

})    

    
