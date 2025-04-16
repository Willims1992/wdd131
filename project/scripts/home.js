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



const servicesData = [
    {
      title: "Mental Wellness",
      description: "Access resources and support for mental health.",
      imageUrl: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#", // Example link
    },
    {
      title: "Fitness Routines",
      description: "Find personalized fitness plans and tips.",
      imageUrl: "https://images.pexels.com/photos/31628657/pexels-photo-31628657/free-photo-of-man-in-black-sportswear-posing-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#", // Example link
    },
    {
      title: "Nutritional Advice",
      description: "Get expert advice on healthy eating.",
      imageUrl: "https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#", // Example link
    },
  
    {title: "Virtual Healthcare",
    description: "Connect with healthcare professionals online.",
    imageUrl: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#", // Example link
   },

];


// Select the container for services
const servicesContainer = document.querySelector('.services-container');

// Generate dynamic service cards
servicesData.forEach((service) => {
  // Create service card container
  const serviceCard = document.createElement('div');
  serviceCard.classList.add('service-card');

  // Create and add image
  const serviceImage = document.createElement('img');
  serviceImage.src = service.imageUrl;
  serviceImage.alt = service.title;
  serviceCard.appendChild(serviceImage);

  // Create and add title
  const serviceTitle = document.createElement('h3');
  serviceTitle.textContent = service.title;
  serviceImage.loading = "lazy"; // Add lazy loading
  serviceCard.appendChild(serviceTitle);

  // Create and add description
  const serviceDescription = document.createElement('p');
  serviceDescription.textContent = service.description;
  serviceCard.appendChild(serviceDescription);

  // Create and add "Learn More" button with unique links
  const serviceButton = document.createElement('a');
  serviceButton.href = service.link; // Add unique link for each service
  serviceButton.textContent = "Learn More";
  serviceButton.classList.add('service-button');
  serviceCard.appendChild(serviceButton);

  // Append card to the container
  servicesContainer.appendChild(serviceCard);
});


