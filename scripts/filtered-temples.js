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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Boston massachuseth",
      location: "Boston",
      dedicated: "2000, October, 1",
      area: "69,600",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-46281-thumb.jpg"
    },
    {
      templeName: "Madrid Spain",
      location: "Spain",
      dedicated: "1999, March, 19-21",
      area: "45800",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-25171-thumb.jpg"
    },
    {
      templeName: "Abuja Nigeria",
      location: "Abuja",
      dedicated: "under construction",
      area: "40500",
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-57534.jpg"
    },
    
    // Add more temple objects here...
];

createTempleCard(temples)

const newlink = document.querySelector("#new");
newlink.addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000)
  );
});

const oldlink = document.querySelector("#old");
oldlink.addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900)
  );
});


const largelink = document.querySelector("#large");
largelink.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area > 90000));
});

const smalllink = document.querySelector("#small");
smalllink.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area < 10000));
});

const homelink = document.querySelector("#home");
homelink.addEventListener("click", () => {
  createTempleCard(temples); // Display all temples
});



function createTempleCard(filteredTemples){
  document.querySelector(".grid-section").innerHTML = ""
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location =  document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p")
    let img = document.createElement("img")

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    card.className = "temple-card";


    document.querySelector(".grid-section").appendChild(card);

  });
}




