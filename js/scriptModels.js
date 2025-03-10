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

const Taycan = {
  name: "Taycan",
  price: "100 000$",
  power: "408",
  maxSpeed: "230 км/год",
  acceleration: "4,7 с",
  range: "~450 км",
  image: "img/Porsche Taycan/TaycanModel.png",
  pageImage: "img/Porsche Taycan/TaycanModelPage.png"
};

const Taycan4S = {
  name: "Taycan 4S",
  price: "130 000$",
  power: "462",
  maxSpeed: "250 км/год",
  acceleration: "3,7 с",
  range: "~520 км",
  image: "img/Porsche Taycan/Taycan4SModelPage.png",
  pageImage: "img/Porsche Taycan/Taycan4SModelPage.png"
};

const TaycanTurboGT = {
  name: "Taycan Turbo GT",
  price: "230 000$",
  power: "789",
  maxSpeed: "305 км/год",
  acceleration: "2,2 с",
  range: "~530 км",
  image: "img/Porsche Taycan/TaycanTurboGtModelPage.png",
  pageImage: "img/Porsche Taycan/TaycanTurboGtModelPage.png"
};

const Taycan4SCrossTurismo = {
  name: "Taycan 4S Cross Turismo",
  price: "130 000$",
  power: "435",
  maxSpeed: "220 км/год",
  acceleration: "4,7 с",
  range: "~530 км",
  image: "img/Porsche Taycan/Taycan4SCrossTurismoModelPage.png",
  pageImage: "img/Porsche Taycan/Taycan4SCrossTurismoModelPage.png"
}; 

const TaycanTurboCrossTurismo = {
  name: "Taycan Turbo Cross Turismo",
  price: "190 000$",
  power: "707",
  maxSpeed: "250 км/год",
  acceleration: "2,8 с",
  range: "~550 км",
  image: "img/Porsche Taycan/TaycanTurboCrossTurismoModelPage.png",
  pageImage: "img/Porsche Taycan/TaycanTurboCrossTurismoModelPage.png"
};

const TaycanTurboSCrossTurismo = {
  name: "Taycan Turbo S Cross Turismo",
  price: "210 000$",
  power: "775",
  maxSpeed: "250 км/год",
  acceleration: "2,5 с",
  range: "~570 км",
  image: "img/Porsche Taycan/TaycanTurboSCrossTurismoModelPage.png",
  pageImage: "img/Porsche Taycan/TaycanTurboSCrossTurismoModelPage.png"
};

const TaycanSportTurismo = {
  name: "Taycan Sport Turismo",
  price: "130 000$",
  power: "408",
  maxSpeed: "230 км/год",
  acceleration: "4,8 с",
  range: "~600 км",
  image: "img/Porsche Taycan/TaycanSportTurismoModelPage.png",
  pageImage: "img/Porsche Taycan/TaycanSportTurismoModelPage.png"
};

const Taycan4SSportTurismo = {
  name: "Taycan 4S Sport Turismo",
  price: "150 000$",
  power: "462",
  maxSpeed: "250 км/год",
  acceleration: "3,7 с",
  range: "~550 км",
  image: "img/Porsche Taycan/Taycan4SSportTurismoModelPage.png",
  pageImage: "img/Porsche Taycan/Taycan4SSportTurismoModelPage.png"
};

const TaycanTurboSSportTurismo = {
  name: "Taycan Turbo S Sport Turismo",
  price: "230 000$",
  power: "775",
  maxSpeed: "260 км/год",
  acceleration: "2,4 с",
  range: "~580 км",
  image: "img/Porsche Taycan/TaycanTurboSSportTurismoModelPage.png",
  pageImage: "img/Porsche Taycan/TaycanTurboSSportTurismoModelPage.png"
};

const Cayenne = {
    name: "Cayenne",
    price: "100 000$",
    power: "353",
    maxSpeed: "248 км/год",
    acceleration: "6,9 с",
    range: "~580 км",
    image: "img/Porsche Cayenne/CayenneModel.png",
    pageImage: "img/Porsche Cayenne/CayenneModel.png"
};

const CayenneS = {
    name: "Cayenne S",
    price: "140 000$",
    power: "474",
    maxSpeed: "273 км/год",
    acceleration: "5,0 с",
    range: "~580 км",
    image: "img/Porsche Cayenne/CayenneSModel.png",
    pageImage: "img/Porsche Cayenne/CayenneSModel.png"
};

const CayenneGTS = {
    name: "Cayenne GTS",
    price: "160 000$",
    power: "500",
    maxSpeed: "275 км/год",
    acceleration: "4,4 с",
    range: "~580 км",
    image: "img/Porsche Cayenne/CayenneGTSModel.png",
    pageImage: "img/Porsche Cayenne/CayenneGTSModel.png"
};

const CayenneCoupe = {
    name: "Cayenne Coupe",
    price: "120 000$",
    power: "353",
    maxSpeed: "248 км/год",
    acceleration: "5,7 с",
    range: "~580 км",
    image: "img/Porsche Cayenne/CayenneCoupeModel.png",
    pageImage: "img/Porsche Cayenne/CayenneCoupeModel.png"
};

const CayenneGTSCoupe = {
    name: "Cayenne GTS Coupe",
    price: "160 000$",
    power: "500",
    maxSpeed: "275 км/год",
    acceleration: "4,4 с",
    range: "~580 км",
    image: "img/Porsche Cayenne/CayenneGTSCoupeModel.png",
    pageImage: "img/Porsche Cayenne/CayenneGTSCoupeModel.png"
};

const CayenneTurboGTCoupe = {
    name: "Cayenne Turbo GT Coupe",
    price: "240 000$",
    power: "659",
    maxSpeed: "305 км/год",
    acceleration: "3,3 с",
    range: "~580 км",
    image: "img/Porsche Cayenne/CayenneTurboGTCoupeModel.png",
    pageImage: "img/Porsche Cayenne/CayenneTurboGTCoupeModel.png"
};

const CarreraCoupe = {
    name: "Carrera Coupe",
    price: "160 000$",
    power: "394",
    maxSpeed: "294 км/год",
    acceleration: "4,1 с",
    range: "~450 км",
    image: "img/Porsche 911/CarreraCoupeModel.png",
    pageImage: "img/Porsche 911/CarreraCoupeModel.png"
};

const CarreraGTS = {
    name: "Carrera GTS",
    price: "210 000$",
    power: "485",
    maxSpeed: "312 км/год",
    acceleration: "3,0 с",
    range: "~520 км",
    image: "img/Porsche 911/CarreraGTSModel.png",
    pageImage: "img/Porsche 911/CarreraGTSModel.png"
};

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

isVisible(".preFooter");
isVisible(".question");
isVisible(".text");
isVisible(".footerImg");

AddRemMenu(buttonModel, subMenu);
AddRemMenu(buttonContacts, contactsMenu);
AddRemMenu(buttonServices, servicesMenu);
AddRemMenu(buttonAccessories, accessoriesMenu);
  

  function saveModelData(modelName) {
    const models = {
      Taycan,
      Taycan4S,
      TaycanTurboGT,
      Taycan4SCrossTurismo,
      TaycanTurboCrossTurismo,
      TaycanTurboSCrossTurismo,
      TaycanSportTurismo,
      Taycan4SSportTurismo,
      TaycanTurboSSportTurismo,
      Cayenne,
      CayenneS,
      CayenneGTS,
      CayenneCoupe,
      CayenneGTSCoupe,
      CayenneTurboGTCoupe,
      CarreraCoupe,
      CarreraGTS
    };
  
    if (models[modelName]) {
      localStorage.setItem('selectedModel', JSON.stringify(models[modelName]));
    } else {
      console.error('Модель не знайдена!');
    }
  }

window.onload = function() {
  const urlCheck = new URLSearchParams(window.location.search);
  const model = urlCheck.get("model");

  if (model) {
    loadModelInfo(model);
  }
  else {
    alert("Моделі не знайдено");
  }
};

function loadModelInfo(model) {
  const modelArticle = document.getElementById("article");
  const questionSection = document.getElementById("question");
  const questionImg = document.getElementById("questionImg");

  modelArticle.innerHTML = '';
  switch(model) {
    case 'cayenne':
        loadCayenneModels(modelArticle, questionSection);
        questionImg.src = "img/Porsche Cayenne/Cayenne.jpg";
        break;
    case 'porsche911':
        load911Models(modelArticle, questionSection);
        questionImg.src = "img/Porsche 911/Porsche911.jpg";
        break;
    case 'taycan':
        loadTaycanModels(modelArticle, questionSection);
        questionImg.src = "img/Porsche Taycan/Taycan.jpg";
        break;
    case 'panamera':
        loadPanameraModels(modelArticle, questionSection);
        questionImg.src = "img/Porsche Panamera/Panamera.jpg";
        break;
    case 'macan':
        loadMacanModels(modelArticle, questionSection);
        questionImg.src = "img/Porsche Macan/Macan.jpg";
        break;
    case 'other':
        const mainSection = document.getElementById("main");

        mainSection.innerHTML = `
        <article id = "article">
        </article>
        `;

        const updateArticle = document.getElementById("article");
        updateArticle.innerHTML = `<p class = "otherModelsMessage">На даний момент, немає інших моделей<br>Чекайте оновлень.<p>`
        break;
    default:
      container.innerHTML = '<p>Моделі для цієї категорії не знайдено!</p>';
      break;
  }

}

function loadTaycanModels(container, questionSection) {
    container.innerHTML = `
     <section class = "typeContainer">
                <h1>Taycan</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/TaycanModel.png" alt = "Taycan">
        
                        <h2>Taycan</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 408</p>
                            <p>Макс. швид.: 230 км/год</p>
                            <p>Прискорення: 4,7 с</p>
                            <p>Запас ходу: ~450 км</p>
                        </div>
                        
                        <h3>від 100 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4S')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/Taycan4SModel.png" alt = "Taycan">
        
                        <h2>Taycan 4S</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 462</p>
                            <p>Макс. швид.: 250 км/год</p>
                            <p>Прискорення: 3,7 с</p>
                            <p>Запас ходу: ~520 км</p>
                        </div>
                        
                        <h3>від 130 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboGT')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/TaycanTurboGtModel.png" alt = "Taycan">
        
                        <h2>Taycan Turbo GT</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 789</p>
                            <p>Макс. швид.: 305 км/год</p>
                            <p>Прискорення: 2,2 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 230 000$</h3>
                    </div>
                </a>
            </section>
    
            <section class = "typeContainer">
                <h1>Taycan Cross Turismo</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/Taycan4SCross.png" alt = "Taycan">
        
                        <h2>Taycan 4S Cross Turismo</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 435</p>
                            <p>Макс. швид.: 220 км/год</p>
                            <p>Прискорення: 4,7 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 130 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/TaycanTurboCrossTurismo.png" alt = "Taycan">
        
                        <h2>Taycan Turbo Cross Turismo</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 707</p>
                            <p>Макс. швид.: 250 км/год</p>
                            <p>Прискорення: 2,8 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 190 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboSCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/TaycanTurboSCross.png" alt = "Taycan">
        
                        <h2>Taycan Turbo S Cross Turismo</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 775</p>
                            <p>Макс. швид.: 250 км/год</p>
                            <p>Прискорення: 2,5 с</p>
                            <p>Запас ходу: ~570 км</p>
                        </div>
                        
                        <h3>від 210 000$</h3>
                    </div>
                </a>
            </section>
    
            <section class = "typeContainer">
                <h1>Taycan Sport Turismo</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/TaycanSportTurismo.png" alt = "Taycan">
        
                        <h2>Taycan Sport Turismo</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 408</p>
                            <p>Макс. швид.: 230 км/год</p>
                            <p>Прискорення: 4,8 с</p>
                            <p>Запас ходу: ~600 км</p>
                        </div>
                        
                        <h3>від 130 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/Taycan4SSport.png" alt = "Taycan">
        
                        <h2>Taycan 4S Sport Turismo</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 462</p>
                            <p>Макс. швид.: 250 км/год</p>
                            <p>Прискорення: 3,7 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 150 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboSSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Taycan/TaycanTurboSSport.png" alt = "Taycan">
        
                        <h2>Taycan Turbo S Sport Turismo</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 775</p>
                            <p>Макс. швид.: 260 км/год</p>
                            <p>Прискорення: 2,4 с</p>
                            <p>Запас ходу: ~580 км</p>
                        </div>
                        
                        <h3>від 230 000$</h3>
                    </div>
                </a>
            </section>
    `;

    questionSection.innerHTML = `
        <h2>Чому Taycan?</h2>
        <p>Електричний спорткар, який не поступається у динаміці та потужності традиційним моделям Porsche. Його миттєвий розгін, точне керування та інноваційні технології дарують неймовірні враження від водіння. Taycan — це майбутнє автомобільної індустрії, яке поєднує екологічність і продуктивність без компромісів.</p>
    `;
}

function loadCayenneModels(container, questionSection) {
    container.innerHTML = `
      <section class = "typeContainer">
                <h1>Cayenne</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Cayenne')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneModel.png" alt = "Taycan">
        
                        <h2>Cayenne</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 353</p>
                            <p>Макс. швид.: 248 км/год</p>
                            <p>Прискорення: 6,9 с</p>
                            <p>Запас ходу: ~450 км</p>
                        </div>
                        
                        <h3>від 100 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('CayenneS')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneSModel.png" alt = "Taycan">
        
                        <h2>Cayenne S</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 474</p>
                            <p>Макс. швид.: 273 км/год</p>
                            <p>Прискорення: 5 с</p>
                            <p>Запас ходу: ~520 км</p>
                        </div>
                        
                        <h3>від 140 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('CayenneGTS')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneGTSModel.png" alt = "Taycan">
        
                        <h2>Cayenne GTS</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 500</p>
                            <p>Макс. швид.: 275 км/год</p>
                            <p>Прискорення: 4,4 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 160 000$</h3>
                    </div>
                </a>
            </section>
    
            <section class = "typeContainer">
                <h1>Cayenne Coupe</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('CayenneCoupe')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneCoupeModel.png" alt = "Taycan">
        
                        <h2>Cayenne Coupe</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 353</p>
                            <p>Макс. швид.: 248 км/год</p>
                            <p>Прискорення: 5,7 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 120 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('CayenneGTSCoupe')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneGTSCoupeModel.png" alt = "Taycan">
        
                        <h2>Cayenne GTS Coupe</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 500</p>
                            <p>Макс. швид.: 275 км/год</p>
                            <p>Прискорення: 4,4 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 160 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('CayenneTurboGTCoupe')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneTurboGTCoupeModel.png" alt = "Taycan">
        
                        <h2>Cayenne Turbo GT Coupe</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 659</p>
                            <p>Макс. швид.: 305 км/год</p>
                            <p>Прискорення: 3,3 с</p>
                            <p>Запас ходу: ~570 км</p>
                        </div>
                        
                        <h3>від 240 000$</h3>
                    </div>
                </a>
            </section>
    `;

    questionSection.innerHTML = `
        <h2>Чому Cayenne?</h2>
        <p>Це позашляховик, який поєднує в собі потужність спортивного автомобіля та універсальність, необхідну для активного відпочинку. Його динаміка, ефективність і розкішний інтер'єр роблять Cayenne ідеальним вибором для тих, хто шукає екстраординарні можливості у своєму автомобілі.</p>
    `;
}

function loadPanameraModels(container, questionSection) {
    container.innerHTML = `
    <section class = "typeContainer">
                <h1>Panamera</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Panamera/PanameraModel.png" alt = "Taycan">
        
                        <h2>Panamera</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 353</p>
                            <p>Макс. швид.: 272 км/год</p>
                            <p>Прискорення: 5,3 с</p>
                            <p>Запас ходу: ~450 км</p>
                        </div>
                        
                        <h3>від 120 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4S')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Panamera/Panamera4EHybridModel.png" alt = "Taycan">
        
                        <h2>Panamera 4 E-Hybrid</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 304</p>
                            <p>Макс. швид.: 280 км/год</p>
                            <p>Прискорення: 4,1 с</p>
                            <p>Запас ходу: ~520 км</p>
                        </div>
                        
                        <h3>від 130 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboGT')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Panamera/Panamera4EHybridExecutiveModel.png" alt = "Taycan">
        
                        <h2>Panamera 4 E-Hybrid Executive</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 304</p>
                            <p>Макс. швид.: 280 км/год</p>
                            <p>Прискорення: 4,2 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 140 000$</h3>
                    </div>
                </a>
            </section>
    
            <section class = "typeContainer">
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Panamera/PanameraTurboEHybridModel.png" alt = "Taycan">
        
                        <h2>Panamera Turbo E-Hybrid</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 519</p>
                            <p>Макс. швид.: 315 км/год</p>
                            <p>Прискорення: 3,2 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 200 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Panamera/PanameraGTSModel.png" alt = "Taycan">
        
                        <h2>Panamera GTS</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 500</p>
                            <p>Макс. швид.: 302 км/год</p>
                            <p>Прискорення: 3,8 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 160 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboSCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Panamera/PanameraTurboSEHybridModel.png" alt = "Taycan">
        
                        <h2>Panamera Turbo S E-Hybrid</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 599</p>
                            <p>Макс. швид.: 325 км/год</p>
                            <p>Прискорення: 2,9 с</p>
                            <p>Запас ходу: ~570 км</p>
                        </div>
                        
                        <h3>від 250 000$</h3>
                    </div>
                </a>
            </section>
    `;

    questionSection.innerHTML = `
        <h2>Чому Panamera?</h2>
        <p>Витвір інженерного мистецтва, який поєднує в собі спортивний характер, елегантність і неперевершену комфортність. Panamera ідеально підходить для тих, хто цінує не лише швидкість, але й елегантність та розкіш.</p>
    `;
}

function load911Models(container, questionSection) {
    container.innerHTML = `
      <section class = "typeContainer">
                <h1>Carrera Coupe</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('CarreraCoupe')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/CarreraCoupeModel.png" alt = "Taycan">
        
                        <h2>Carrera Coupe</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 394</p>
                            <p>Макс. швид.: 294 км/год</p>
                            <p>Прискорення: 4,1 с</p>
                            <p>Запас ходу: ~450 км</p>
                        </div>
                        
                        <h3>від 160 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('CarreraGTS')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/CarreraGTSModel.png" alt = "Taycan">
        
                        <h2>Carrera GTS</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 485</p>
                            <p>Макс. швид.: 312 км/год</p>
                            <p>Прискорення: 3,0 с</p>
                            <p>Запас ходу: ~520 км</p>
                        </div>
                        
                        <h3>від 210 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboGT')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/Carrera4GTSModel.png" alt = "Taycan">
        
                        <h2>Carrera 4 GTS</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 485</p>
                            <p>Макс. швид.: 312 км/год</p>
                            <p>Прискорення: 3,0 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 200 000$</h3>
                    </div>
                </a>
            </section>
    
            <section class = "typeContainer">
                <h1>Cabriolet</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/CarreraCabrioletModel.png" alt = "Taycan">
        
                        <h2>Carrera Cabriolet</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 394</p>
                            <p>Макс. швид.: 291 км/год</p>
                            <p>Прискорення: 4,3 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 160 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/CarreraGTSCabrioletModel.png" alt = "Taycan">
        
                        <h2>Carrera GTS Cabriolet</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 485</p>
                            <p>Макс. швид.: 312 км/год</p>
                            <p>Прискорення: 3,0 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 210 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboSCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/Carrera4GTSCabriolet.png" alt = "Taycan">
        
                        <h2>Carrera 4 GTS Cabriolet</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 485</p>
                            <p>Макс. швид.: 312 км/год</p>
                            <p>Прискорення: 3,1 с</p>
                            <p>Запас ходу: ~570 км</p>
                        </div>
                        
                        <h3>від 230 000$</h3>
                    </div>
                </a>
            </section>
    
            <section class = "typeContainer">
                <h1>GT3</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/GT3Model.png" alt = "Taycan">
        
                        <h2>GT3</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 510</p>
                            <p>Макс. швид.: 311 км/год</p>
                            <p>Прискорення: 3,4 с</p>
                            <p>Запас ходу: ~600 км</p>
                        </div>
                        
                        <h3>від 250 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/GT3TouringModel.png" alt = "Taycan">
        
                        <h2>GT3 Touring</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 510</p>
                            <p>Макс. швид.: 311 км/год</p>
                            <p>Прискорення: 3,4 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 250 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboSSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/GT3RSModel.png" alt = "Taycan">
        
                        <h2>GT3 RS</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 525</p>
                            <p>Макс. швид.: 296 км/год</p>
                            <p>Прискорення: 3,2 с</p>
                            <p>Запас ходу: ~580 км</p>
                        </div>
                        
                        <h3>від 300 000$</h3>
                    </div>
                </a>
            </section>

            <section class = "special typeContainer">
                <h1>Special</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/Targa4GTSModel.png" alt = "Taycan">
        
                        <h2>Targa 4 GTS</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 485</p>
                            <p>Макс. швид.: 312 км/год</p>
                            <p>Прискорення: 3,1 с</p>
                            <p>Запас ходу: ~600 км</p>
                        </div>
                        
                        <h3>від 230 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/TurboSpecial50YearsModel.png" alt = "Taycan">
        
                        <h2>Turbo 50 Years</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 650</p>
                            <p>Макс. швид.: 330 км/год</p>
                            <p>Прискорення: 2,7 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 310 000$</h3>
                    </div>
                </a>

                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SSportTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche 911/TurboSpecial50YearsModel.png" alt = "Taycan">
        
                        <h2>Turbo 50 Years</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 650</p>
                            <p>Макс. швид.: 330 км/год</p>
                            <p>Прискорення: 2,7 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 310 000$</h3>
                    </div>
                </a>
            </section>
    `;

    questionSection.innerHTML = `
        <h2>Чому Porsche 911?</h2>
        <p>Класика спортивного автомобіля, яка завжди на крок попереду. Він втілює в собі ідеальну комбінацію бездоганного дизайну, інноваційних технологій і безмежної потужності. Це авто для тих, хто шукає не просто швидкість, а вишуканий стиль і відчуття абсолютного контролю. Porsche 911 — це більше, ніж машина. Це стиль життя.</p>
    `;
}

function loadMacanModels(container, questionSection) {
    container.innerHTML = `
    <section class = "typeContainer">
                <h1>Macan</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Cayenne')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Macan/MacanModel.png" alt = "Taycan">
        
                        <h2>Macan</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 265</p>
                            <p>Макс. швид.: 232 км/год</p>
                            <p>Прискорення: 6,4 с</p>
                            <p>Запас ходу: ~450 км</p>
                        </div>
                        
                        <h3>від 65 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4S')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Macan/MacanSModel.png" alt = "Taycan">
        
                        <h2>Macan S</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 380</p>
                            <p>Макс. швид.: 259 км/год</p>
                            <p>Прискорення: 4,8 с</p>
                            <p>Запас ходу: ~520 км</p>
                        </div>
                        
                        <h3>від 75 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboGT')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Macan/MacanGTSModel.png" alt = "Taycan">
        
                        <h2>Macan GTS</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 440</p>
                            <p>Макс. швид.: 272 км/год</p>
                            <p>Прискорення: 4,5 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 95 000$</h3>
                    </div>
                </a>
            </section>
    
            <section class = "typeContainer">
                <h1>Macan Electric</h1>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Macan/MacanElectricModel.png" alt = "Taycan">
        
                        <h2>Macan Electric</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 340</p>
                            <p>Макс. швид.: 220 км/год</p>
                            <p>Прискорення: 5,7 с</p>
                            <p>Запас ходу: ~530 км</p>
                        </div>
                        
                        <h3>від 80 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Macan/Macan4SElectricModel.png" alt = "Taycan">
        
                        <h2>Macan 4S Electric</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 448</p>
                            <p>Макс. швид.: 240 км/год</p>
                            <p>Прискорення: 4,1 с</p>
                            <p>Запас ходу: ~550 км</p>
                        </div>
                        
                        <h3>від 90 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboSCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Macan/MacanTurboElectricModel.png" alt = "Taycan">
        
                        <h2>Macan Turbo Electric</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 584</p>
                            <p>Макс. швид.: 260 км/год</p>
                            <p>Прискорення: 3,3 с</p>
                            <p>Запас ходу: ~570 км</p>
                        </div>
                        
                        <h3>від 110 000$</h3>
                    </div>
                </a>
            </section>
    `;

    questionSection.innerHTML = `
        <h2>Чому Macan?</h2>
        <p>Компактний позашляховик, який поєднує в собі спортивну динаміку і універсальність кросовера. З його потужними двигунами, точним керуванням і високим рівнем комфорту Macan дарує водієві емоції, які зазвичай асоціюються з більш дорогими спортивними автомобілями.</p>
    `;
}


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


