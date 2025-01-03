const buttonModel = document.querySelector("#buttonModels");
const subMenu = document.querySelector(".subMenu");

const buttonContacts = document.querySelector("#buttonContacts");
const contactsMenu = document.querySelector(".contactsMenu");

const buttonServices = document.querySelector("#buttonServices");
const servicesMenu = document.querySelector(".servicesMenu");

const buttonAccessories = document.querySelector("#buttonAccessories");
const accessoriesMenu = document.querySelector(".accessoriesMenu");

const carChoiceItems = document.querySelectorAll('.carChoice li');

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

isVisible(".generalBlock img");
isVisible(".generalInfo img");
isVisible(".generalInfo .text");
isVisible(".footerImg");
isVisible(".stepBlock");


function changeMap() {
    const tempCity = document.getElementById("citySelect");
    const selectedCity = tempCity.value;
    const map = document.getElementById("map");
    const street = document.getElementById("street");


    if (selectedCity === "Kyiv") {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d671.9131581702331!2d30.88103803339791!3d50.37550293934761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1735851689250!5m2!1suk!2sua" width="480" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        street.innerHTML = '<p id = "street">Порша 17</p>';
    }
    else if (selectedCity === "Lviv") {
        map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3418.6076116878066!2d24.037745779663286!3d49.84054483175511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1735905075232!5m2!1suk!2sua" width="480" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        street.innerHTML = '<p id = "street">Театральна 12</p>';
    }
    else if (selectedCity === "Odesa") {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3118.9812106542886!2d30.739942820234983!3d46.48686482539498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1735905266616!5m2!1suk!2sua" width="480" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        street.innerHTML = '<p id = "street">Набережна 10</p>';
    }
    else if (selectedCity === "Kharkiv") {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3152.8164593798683!2d36.23147652087787!3d50.002075476598925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1735905359829!5m2!1suk!2sua" width="480" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        street.innerHTML = '<p id = "street">Центральна 5</p>';
    }
}

document.getElementById("citySelect").addEventListener("change", changeMap);