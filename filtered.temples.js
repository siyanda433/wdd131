const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');
const templeContainer = document.getElementById('temple-container');
const menuItems = document.querySelectorAll('.navigation a');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('close');
});

// Close menu on link click
navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navMenu.classList.remove('show');
    hamburger.classList.remove('close');
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg alt='Aba Nigeria Temple'"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg alt='Manti Utah Temple'"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg alt='Payson Utah Temple'"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg alt='Yigo Guam Temple'"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg alt='Washington D.C. Temple'"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg alt='Lima Perú Temple'"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg alt='Mexico City Mexico Temple'"
  },
  // Add more temple objects here...
  { 
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-lds-273998-wallpaper.jpg alt='Salt Lake City Utah Temple'"
  },
  { 
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 107688,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-273997-wallpaper.jpg alt='Tokyo Japan Temple'"
  },
  { 
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-273996-wallpaper.jpg alt='Rome Italy Temple'"
  },
  function displayTemples(filteredTemples) {
    templeContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
      const templeElement = document.createElement('div');
      templeElement.classList.add('temple-card');
      templeElement.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      templeContainer.appendChild(templeElement);
    });
  displayTemples(temples);
  
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const filterType = event.target.id;
      switch (filterType) {
        case 'home-link':
          displayTemples(temples);
          break;
        case 'old-link':
          displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
          break;
        case 'new-link':
          displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
          break;
        case 'large-link':
          displayTemples(temples.filter(t => t.area > 90000));
          break;
        case 'small-link':
          displayTemples(temples.filter(t => t.area < 10000));
          break;
      }
    });
  });
}
]