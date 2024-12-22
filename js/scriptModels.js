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
