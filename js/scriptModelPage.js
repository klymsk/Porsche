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


carChoiceItems.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('active');
    })
});

const selectedModel = JSON.parse(localStorage.getItem('selectedModel'));

if (selectedModel) {
  document.getElementById('modelName').textContent = selectedModel.name;
  document.getElementById('modelPrice').innerHTML = `<span>від</span> ${selectedModel.price}`;
  document.getElementById('modelImage').src = selectedModel.pageImage;
  document.getElementById('modelImage').alt = selectedModel.name;
  
  document.getElementById('modelDetails').innerHTML = `
    <li><span>${selectedModel.power}</span><br>Потужність (к/с)</li>
    <li><span>${selectedModel.maxSpeed}</span><br>Макс. швид.</li>
    <li><span>${selectedModel.range}</span><br>Запас ходу</li>
    <li><span>${selectedModel.acceleration}</span><br>Прискорення</li>
  `;

  document.getElementById("imageModel").src = selectedModel.pageImage;
  document.getElementById("priceModel").textContent = selectedModel.price;
  document.getElementById('configuratorName').textContent = selectedModel.name;
  document.getElementById('configuratorImg').src = selectedModel.pageImage;
} else {
  alert('Дані моделі не знайдено!');
}

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
  

isVisible(".footerImg");
isVisible(".generalInfo img");
isVisible(".text");
isVisible(".techInfo .techChoice img");
isVisible(".techChoice ul");



function submitScreenInOut() {
    const buttonSave = document.getElementById("buttonSave");
    const buttonOK = document.getElementById("buttonOK");
    const submitScreen = document.getElementById("submitScreen");

    const carChoice = document.querySelector('input[name="car"]:checked');
    const date = document.getElementById("dateInput");
    const email = document.getElementById("emailInput");

    buttonSave.addEventListener('click', function() {

        if (date.value !== "" && email.value !== "") {
            submitScreen.style.display = 'flex';
        }
        else {
            alert("Не всі дані заповнено");
        }
    });

    buttonOK.addEventListener('click', function() {
        submitScreen.style.display = 'none';

        date.value = null;
        email.value = null;
    });
};

submitScreenInOut();

function closeOtherDetails(event) {
    const clickedDetails = event.target;  
    const detailsElements = document.querySelectorAll("details");  

    if (clickedDetails.open) {
        detailsElements.forEach(function(details) {
            if (details !== clickedDetails) {
                details.removeAttribute("open");
            }
        });
    }
}

function init() {
    const detailsElements = document.querySelectorAll('details');
    
    detailsElements.forEach(function(details) {
        details.addEventListener('toggle', closeOtherDetails); 
    });
}

init();

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

const today = new Date().toISOString().split('T')[0];
  
document.getElementById('dateInput').setAttribute('min', today);














