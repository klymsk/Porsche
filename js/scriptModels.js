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


}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category'); 

  if (category) {
      loadModelsByCategory(category); 
  } else {
      document.getElementById('carContainer').innerHTML = '<p>Категорія не знайдена!</p>';
  }
};

function loadModelsByCategory(category) {
  const container = document.getElementById('carContainer');
  container.innerHTML = ''; 
  switch (category) {
      case 'taycan':
          loadTaycanModels(container);
          break;

      case 'cayenne':
          loadCayenneModels(container);
          break;

      case '911':
          load911Models(container);
          break;

      case 'macan':
          loadMacanModels(container);
          break;

      case 'panamera':
          loadPanameraModels(container);
          break;

      default:
          container.innerHTML = '<p>Моделі для цієї категорії не знайдено!</p>';
          break;
  }
}

function loadTaycanModels(container) {
  container.innerHTML = `
      <h1>Porsche Taycan</h1>

      <a href="modelPage.html?model=Taycan" class="carLink">
          <div class="carContainer">
              <img src="img/Porsche Taycan/TaycanModel.png" alt="Taycan">
              <h2>Taycan</h2>
              <div class="addInfo">
                  <p>Потужність (к/с): 408</p>
                  <p>Макс. швид.: 230 км/год</p>
                  <p>Прискорення: 4,7 с</p>
                  <p>Запас ходу: ~450 км</p>
              </div>
              <h3>від 100 000$</h3>
          </div>
      </a>

      <a href="modelPage.html?model=Taycan4S" class="carLink">
          <div class="carContainer">
              <img src="img/Porsche Taycan/Taycan4SModel.png" alt="Taycan 4S">
              <h2>Taycan 4S</h2>
              <div class="addInfo">
                  <p>Потужність (к/с): 462</p>
                  <p>Макс. швид.: 250 км/год</p>
                  <p>Прискорення: 3,7 с</p>
                  <p>Запас ходу: ~520 км</p>
              </div>
              <h3>від 130 000$</h3>
          </div>
      </a>

      <a href="modelPage.html?model=TaycanTurboGT" class="carLink">
          <div class="carContainer">
              <img src="img/Porsche Taycan/TaycanTurboGtModel.png" alt="Taycan Turbo GT">
              <h2>Taycan Turbo GT</h2>
              <div class="addInfo">
                  <p>Потужність (к/с): 789</p>
                  <p>Макс. швид.: 305 км/год</p>
                  <p>Прискорення: 2,2 с</p>
                  <p>Запас ходу: ~530 км</p>
              </div>
              <h3>від 230 000$</h3>
          </div>
      </a>
  `;
}

function loadCayenneModels(container) {
  container.innerHTML = `
      <h1>Porsche Cayenne</h1>

      <a href="modelPage.html?model=Cayenne" class="carLink">
          <div class="carContainer">
              <img src="img/Porsche Cayenne/CayenneModel.png" alt="Cayenne">
              <h2>Cayenne</h2>
              <div class="addInfo">
                  <p>Потужність (к/с): 550</p>
                  <p>Макс. швид.: 265 км/год</p>
                  <p>Прискорення: 5,3 с</p>
                  <p>Запас ходу: ~600 км</p>
              </div>
              <h3>від 90 000$</h3>
          </div>
      </a>

      <a href="modelPage.html?model=CayenneTurbo" class="carLink">
          <div class="carContainer">
              <img src="img/Porsche Cayenne/CayenneTurboModel.png" alt="Cayenne Turbo">
              <h2>Cayenne Turbo</h2>
              <div class="addInfo">
                  <p>Потужність (к/с): 550</p>
                  <p>Макс. швид.: 270 км/год</p>
                  <p>Прискорення: 5,1 с</p>
                  <p>Запас ходу: ~650 км</p>
              </div>
              <h3>від 120 000$</h3>
          </div>
      </a>
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


