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
    const map = document.getElementById("map2");
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


function editHtml() {
    const header = document.getElementById("header");
    const map1 = document.getElementById("map1");
    const map2 = document.getElementById("map2");
    const width = window.innerWidth;

    if (width < 768) {
        header.innerHTML = `
            <button class = "menuLogo" id = "buttonNavMenu">
                <img src = "img/General/menuLogo.png" alt = "menuLogo">
            </button>

            <nav id = "nav">
            <ul class="nav-list">
                <li>
                    <details class="navButton" id = "buttonModels">
                        <summary>Моделі</summary>
                            <ul class="subMenuPhone">
                                <li>
                                    <a href="models.html?model=taycan">
                                        <p>Porsche Taycan</p>
                                        <img src = "img/Menu/TaycanMenu.png" alt = "Porsche Taycan">
                                    </a>
                                </li>
                                <li>
                                    <a href="models.html?model=porsche911">
                                        <p>Porsche 911</p>
                                        <img src = "img/Menu/Porsche911Menu.png" alt = "Porsche 911">
                                    </a>
                                </li>
                                <li>
                                    <a href="models.html?model=cayenne">
                                        <p>Porsche Cayenne</p>
                                        <img src = "img/Menu/CayenneMenuPhone.png" alt = "Porsche Cayenne">
                                    </a>
                                </li>
                                <li>
                                    <a href="models.html?model=macan">
                                        <p>Porsche Macan</p>
                                        <img src = "img/Menu/MacanMenu.png" alt = "Porsche Macan">
                                    </a>
                                </li>
                                <li>
                                    <a href="models.html?model=panamera">
                                        <p>Porsche Panamera</p>
                                        <img src = "img/Menu/PanameraMenu.png" alt = "Porsche Panamera">
                                    </a>
                                </li>
                                <li>
                                    <a href = "#">
                                        <p>Інші моделі</p>
                                        <img src = "img/Menu/OtherCarsMenu.png" alt = "OtherCars">
                                    </a>
                                </li>
                            </ul>
                    </details>
                </li>
                <li><a href="contactsPage.html" class="navButton" id = "buttonContacts">Контакти</a></li>
                    <ul class = "contactsMenu">
                        <li>
                            <h2>Наші контакти</h2>
                            <address>
                                <dl>
                                    <dt>моб. телефон:</dt>
                                    <dd><a href="tel:+12345">+12345</a></dd>
                                    <dt>е-пошта:</dt>
                                    <dd><a href="mailto:porsche@test.ua">porsche@test.ua</a></dd>
                                </dl>
                            </address>
                        </li>
                    
                        <li>
                            <h2>Адреса автосалону</h2>
                            <address>
                                <dl>
                                    <dt>місто:</dt>
                                    <dd>м. Київ</dd>
                                    <dt>вулиця:</dt>
                                    <dd>вул. Порша 17</dd>
                                </dl>
                            </address>
                        </li>

                        <img src = "img/General/FooterImg.png" alt = "porscheImg">
                    </ul>
                <li><a href="servicePage.html" class="navButton" id = "buttonServices">Сервіси</a></li>
                    <ul class = "servicesMenu">
                        <li>
                            <a href = "servicePage.html">Сервісне обслуговування</a>
                        </li>
                        <li>
                            <a href = "modelPage.html#testDrive">Test-Drive в автосалонах Porsche</a>
                        </li>
                        <li>
                            <a href = "modelPage.html#sales">Пропозиції з сервісу</a>
                        </li>
                        <li>
                            <a href = "tradeInPage.html">Trade-In</a>
                        </li>
                    </ul>
                <li><a href="accessoriesPage.html" class="navButton" id = "buttonAccessories">Аксесуари</a></li>
                    <ul class = "accessoriesMenu">
                        <li>
                            <a href = "accessoriesPage.html#brand">Брендовий одяг Porsche</a>
                        </li>
                        <li>
                            <a href = "accessoriesPage.html">Аксесуари для автівок</a>
                        </li>

                        <img src = "img/General/porscheLogo.png" alt = "logo">
                    </ul>
            </ul>
            
        </nav>


            <div class = "headerLogo">
                <a href="index.html" class = "headerText">Porsche</a>
                <img src = "img/General/mainLogoPhone.png" alt = "mainLogo" class="main-ico">
            </div>
        `;

        map1.innerHTML = `
            <div class = "map" id = "map1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3008.8104561517025!2d9.226359486092928!3d48.79304820583668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1734949356548!5m2!1suk!2sua" width="320" height="160" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        `;

        map2.innerHTML = `
            <div class = "map" id = "map2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d671.9131581702331!2d30.88103803339791!3d50.37550293934761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1735851689250!5m2!1suk!2sua" width="320" height="160" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        `;

        const buttonNavMenu = document.getElementById("buttonNavMenu");
        const body = document.body;

        buttonNavMenu.addEventListener("click", function() {
            const navMenu = document.getElementById("nav");
            navMenu.classList.toggle("visible");
            body.classList.toggle("no-scroll");
        });
    }
}

window.addEventListener('load', editHtml);
window.addEventListener('resize', editHtml);