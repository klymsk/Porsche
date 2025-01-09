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
      TaycanTurboSSportTurismo
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
  modelArticle.innerHTML = '';
  switch(model) {
    case 'cayenne':
      loadCayenneModels(modelArticle);
      break;

    case 'porsche911':
      load911Models(container);
      break;
    case 'taycan':
      loadTaycanModels(modelArticle);
      break;
    default:
      container.innerHTML = '<p>Моделі для цієї категорії не знайдено!</p>';
      break;
  }

}

function loadTaycanModels(container) {
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
}

function loadCayenneModels(container) {
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
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4S')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneSModel.png" alt = "Taycan">
        
                        <h2>Taycan S</h2>
        
                        <div class = "addInfo">
                            <p>Потужність (к/с): 474</p>
                            <p>Макс. швид.: 273 км/год</p>
                            <p>Прискорення: 5 с</p>
                            <p>Запас ходу: ~520 км</p>
                        </div>
                        
                        <h3>від 140 000$</h3>
                    </div>
                </a>
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboGT')">
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
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('Taycan4SCrossTurismo')">
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
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboCrossTurismo')">
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
    
                <a href = "modelPage.html" class = "carLink" onclick="saveModelData('TaycanTurboSCrossTurismo')">
                    <div class = "carContainer">
                        <img src = "img/Porsche Cayenne/CayenneTurboGTCoupeModel.png" alt = "Taycan">
        
                        <h2>CayenneTurboGTCoupeModel</h2>
        
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
}

function load911Models(container) {
  container.innerHTML = `
      <h1>Porsche 911</h1>

      <a href="modelPage.html?model=911Carrera" class="carLink">
          <div class="carContainer">
              <img src="img/Porsche 911/911Carrera.png" alt="911 Carrera">
              <h2>911 Carrera</h2>
              <div class="addInfo">
                  <p>Потужність (к/с): 450</p>
                  <p>Макс. швид.: 300 км/год</p>
                  <p>Прискорення: 3,2 с</p>
                  <p>Запас ходу: ~500 км</p>
              </div>
              <h3>від 110 000$</h3>
          </div>
      </a>

      <!-- інші моделі 911 -->
  `;
}


