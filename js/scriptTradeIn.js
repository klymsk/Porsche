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

function changeCarInfo() {
    const carModelImg = document.getElementById("carModelImg");
    const selectedCar = document.getElementById("selectedCar");
    const price = document.getElementById("priceValue");

    if (selectedCar.value === "Porsche 911") {
        carModelImg.src = "img/General/porscheTradeIn3.png";
        price.textContent = "140 000";
    }
    else if (selectedCar.value === "Panamera") {
        carModelImg.src = "img/General/porscheTradeInPanamera.png";
        price.textContent = "90 000";
    }
    else if (selectedCar.value === "Taycan") {
        carModelImg.src = "img/General/porscheTradeIn.png";
        price.textContent = "80 000";
    }
    else if (selectedCar.value === "Cayenne") {
        carModelImg.src = "img/General/porscheTradeInCayenne.png";
        price.textContent = "80 000";
    }
    else if (selectedCar.value === "Macan") {
        carModelImg.src = "img/General/porscheTradeInMacan.png";
        price.textContent = "60 000";
    }
}

document.getElementById("selectedCar").addEventListener('change', changeCarInfo);
changeCarInfo();

function calculateTradeIn() {
    const carModelImg = document.getElementById("carModelImgStep2");
    const selectedCar = document.getElementById("selectedCarStep2");
    const price = document.getElementById("priceValueStep2");

    if (selectedCar.value === "Porsche 911") {
        carModelImg.src = "img/General/porscheTradeIn3.png";
        price.textContent = "100 000";
    }
    else if (selectedCar.value === "Panamera") {
        carModelImg.src = "img/General/porscheTradeInPanamera.png";
        price.textContent = "40 000";
    }
    else if (selectedCar.value === "Taycan") {
        carModelImg.src = "img/General/porscheTradeIn.png";
        price.textContent = "50 000";
    }
    else if (selectedCar.value === "Cayenne") {
        carModelImg.src = "img/General/porscheTradeInCayenne.png";
        price.textContent = "40 000";
    }
    else if (selectedCar.value === "Macan") {
        carModelImg.src = "img/General/porscheTradeInMacan.png";
        price.textContent = "30 000";
    }
}

document.getElementById("selectedCarStep2").addEventListener('change', calculateTradeIn);
calculateTradeIn();


function submitScreenInOut() {
    const buttonSave = document.getElementById("saveButton");
    const buttonOK = document.getElementById("buttonOK");
    const successScreen = document.getElementById("successScreen");
    const messageInfo = document.getElementById("messageInfo");
    const infoLogo = document.getElementById("informationLogo");

    const nameInput = document.getElementById("nameInput");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");

    buttonSave.addEventListener('click', function() {
        if (nameInput.value !== "" && dateInput.value !== "" && timeInput.value !== "") {
            successScreen.style.display = 'flex';
        }
        else {
            alert("Не всі дані заповнено");
        }
    });

    buttonOK.addEventListener('click', function() {
        successScreen.style.display = 'none';

        nameInput.value = null;
        dateInput.value = null;
        timeInput.value = null;
    });

    infoLogo.addEventListener('click', function() {
        if (messageInfo.style.display === 'flex') {
            messageInfo.style.display = 'none';
        }
        else {
            messageInfo.style.display = 'flex';
        }
    });
};

submitScreenInOut();

function editHtml() {
    const header = document.getElementById("header");
    const width = window.innerWidth;

    if (width < 768) {
        header.innerHTML = `
            <button class = "menuLogo" id = "buttonNavMenu">
                <img src = "img/General/menuLogo.png" alt = "menuLogo">
            </button>

            <nav id = "nav">
            <ul class="nav-list">
                <li><a href="#" class="navButton" id = "buttonModels">Моделі</a></li>
                    <ul class="subMenu">
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
                                <img src = "img/Menu/CayenneMenu.png" alt = "Porsche Cayenne">
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
                <p class = "headerText">Porsche</p>
                <img src = "img/General/mainLogoPhone.png" alt = "mainLogo" class="main-ico">
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