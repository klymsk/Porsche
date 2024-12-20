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
    image: "img/Porsche Taycan/Taycan4SModel.png",
    pageImage: "img/Porsche Taycan/Taycan4SModel.png"
  };
  
  const TaycanTurboGT = {
    name: "Taycan Turbo GT",
    price: "230 000$",
    power: "789",
    maxSpeed: "305 км/год",
    acceleration: "2,2 с",
    range: "~530 км",
    image: "img/Porsche Taycan/TaycanTurboGtModel.png",
    pageImage: "img/Porsche Taycan/TaycanTurboGtModel.png"
  };
  
  const Taycan4SCrossTurismo = {
    name: "Taycan 4S Cross Turismo",
    price: "130 000$",
    power: "435",
    maxSpeed: "220 км/год",
    acceleration: "4,7 с",
    range: "~530 км",
    image: "img/Porsche Taycan/Taycan4SCross.png",
    pageImage: "img/Porsche Taycan/Taycan4SCross.png"
  };  

  function saveModelData(modelName) {
    const models = {
      Taycan,
      Taycan4S,
      TaycanTurboGT,
      Taycan4SCrossTurismo
    };
  
    if (models[modelName]) {
      localStorage.setItem('selectedModel', JSON.stringify(models[modelName]));
    } else {
      console.error('Модель не знайдена!');
    }
  }
