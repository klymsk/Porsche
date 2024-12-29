const buttonModel = document.querySelector("#buttonModels");
const subMenu = document.querySelector(".subMenu");

const buttonContacts = document.querySelector("#buttonContacts");
const contactsMenu = document.querySelector(".contactsMenu");

const buttonServices = document.querySelector("#buttonServices");
const servicesMenu = document.querySelector(".servicesMenu");

const buttonAccessories = document.querySelector("#buttonAccessories");
const accessoriesMenu = document.querySelector(".accessoriesMenu");

function AddRemMenu(button, menu) {
    button.addEventListener('mouseenter', () => {
        menu.classList.add('visible');
        menu.classList.remove('hidden');
    });
    button.addEventListener('mouseleave', () => {
        menu.classList.add('hidden');
        menu.classList.remove('visible');
    });
    
    menu.addEventListener('mouseenter', () => {
        menu.classList.add('visible');
        menu.classList.remove('hidden');
    });
    
    menu.addEventListener('mouseleave', () => {
        menu.classList.add('hidden');
        menu.classList.remove('visible');
    });
}

AddRemMenu(buttonModel, subMenu);
AddRemMenu(buttonContacts, contactsMenu);
AddRemMenu(buttonServices, servicesMenu);
AddRemMenu(buttonAccessories, accessoriesMenu);

const observe = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.3});

function isVisible(className) {
    document.querySelectorAll(`${className}`).forEach(block => {
        observe.observe(block);
    });
  }

isVisible("footer img");

function ImageSwipe() {
    const articleImg = document.querySelector(".mainPhoto"); 
    const arrImg = [
        "img/General/MainPhoto1.png",  
        "img/General/MainPhoto2.jpg",  
        "img/General/MainPhoto3.jpg",  
        "img/General/MainPhoto4.jpg",
        "img/General/MainPhoto5.jpg",
        "img/General/MainPhoto6.jpg"
    ];
    const ellipses = document.querySelectorAll(".ellipseMain");

    let i = 1; 
    let interval = 5000;

    const changeImage = (index) => {
        articleImg.src = arrImg[index];
    };

    ellipses.forEach((ellipse, index) => {
        ellipse.addEventListener('mouseover', () => {
            changeImage(index); 

            ellipses.forEach(el => el.classList.remove('active'));
            ellipse.classList.add('active');
        });
    });

    setInterval(() => {
        articleImg.src = arrImg[i]; 
        
        i++; 

        if (i >= arrImg.length) {
            i = 0;
        }
    }, interval); 
}

document.addEventListener('DOMContentLoaded', function() {
    ImageSwipe();  
});

function Converted() {
    const currency = document.querySelector("#price");
    const exchangeRate = 41;

    currency.addEventListener('click', () => {
        const priceText = currency.innerText;
        const prices = priceText.match(/\d+/g); 

        if (prices && prices.length === 2) {
            const minPrice = parseInt(prices[0].replace(/\s/g, '')); 
            const maxPrice = parseInt(prices[1].replace(/\s/g, ''));

            const minPriceConverted = minPrice * exchangeRate;
            const maxPriceConverted = maxPrice * exchangeRate;

            currency.innerHTML = `${minPriceConverted.toLocaleString()} - <br> ${maxPriceConverted.toLocaleString()} грн`;
        }
    });
}

Converted();

