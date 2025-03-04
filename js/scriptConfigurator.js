document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelectorAll(".navButtons li");
    const generalMenu = document.getElementById("generalMenu");

});

document.addEventListener("click", function() {
    const choice = document.getElementById
});


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
isVisible(".text");
isVisible(".resultCheck")
isVisible(".imgNameModel img");
isVisible(".finalCheckSection p");
isVisible(".itemsList");


document.addEventListener("DOMContentLoaded", function() {
    const navButton = document.querySelectorAll(".navButtons li"); 
    const menuContainers = document.querySelectorAll(".menuContainer");

    navButton.forEach(item => {
        const button = item.querySelector("button");

        button.addEventListener("click", function() {
            const target = item.getAttribute("data-target");

            menuContainers.forEach(container => {
                container.style.display = "none";
            });

            switch(target) {
                case "exterior":
                    document.querySelector(".exteriorContainer").style.display = "flex";
                    break;
                case "interior":
                    document.querySelector(".interiorContainer").style.display = "flex";
                    break;
                case "wheels":
                    document.querySelector(".wheelsContainer").style.display = "flex";
                    break;
                case "mainExterior":
                    document.querySelector(".exteriorMainContainer").style.display = "flex";
                    break;
                case "mainInterior":
                    document.querySelector(".interiorMainContainer").style.display = "flex";
                    break;
            }

        });
    });

    const choiceType = document.querySelectorAll(".choiceType li")

    choiceType.forEach(item => {
        item.addEventListener("click", function() {
            item.style.backgroundColor = "#FBF8EF";
            item.style.borderRadius = "20px";
            item.style.border = "1px solid #4B4B4B"
        });
    });
});


const selectedModel = JSON.parse(localStorage.getItem("selectedModel"));

if (selectedModel) {
    document.getElementById("modelName").textContent = selectedModel.name;
    document.getElementById("modelImg").src = selectedModel.pageImage;
    document.getElementById("modelPrice").textContent = selectedModel.price;
    document.getElementById("modelPriceCheck").textContent = selectedModel.price;
}

let totalPrice = parseInt(document.getElementById("modelPrice").textContent.replace(/\D/g, ''), 10);
let optionTotalPrice = 0;

function updatePrice() {
    convertedTotalPrice = convertedPriceFunc(totalPrice);
    document.getElementById("modelPrice").textContent = convertedTotalPrice + " $";

    convertedOptionsPrice = convertedPriceFunc(optionTotalPrice);
    document.getElementById("optionsPrice").textContent = convertedOptionsPrice + " $";

    document.getElementById("generalPrice").textContent = convertedTotalPrice + " $";
}

function convertedPriceFunc(price) {
    return price.toLocaleString("uk-UA");
}


const optionButtons = document.querySelectorAll(".choiceType button");
const optionInput = document.querySelectorAll(".choiceContainer input");

optionButtons.forEach(button => {
    button.addEventListener("click", function() {
        
        if (button.classList.contains("selected")){
            alert("Оція вже була обрана.");
            return;
        }

        const productPrice = parseInt(button.getAttribute("data-price"), 10);
        const sectionName = button.getAttribute("data-section");
        const productName = button.getAttribute("data-model");

        console.log("productName:", productName);
        console.log("productPrice:", productPrice);
        console.log("sectionName:", sectionName);

        optionTotalPrice += productPrice;

        totalPrice += productPrice;

        button.classList.add("selected");

        updatePrice();
        
        updateDetailCheck(sectionName, productName, productPrice);
    });
});

optionInput.forEach(input => {
    input.addEventListener("change", function() {
        const productPriceInput = parseInt(input.getAttribute("data-price"), 10);

        optionTotalPrice += productPriceInput;

        totalPrice += productPriceInput;

        updatePrice();
    });
});


function updateDetailCheck(sectionName, optionName, price) {
    const detailCheckSection = document.querySelector(".detailCheckSection");

    const newDiv = document.createElement("div");
    newDiv.classList.add("itemsList");

    newDiv.innerHTML = `
        <p>${sectionName}</p>

        <label>${optionName}</label>

        <p>${price} $</p>
    `;

    detailCheckSection.classList.add("active");

    detailCheckSection.appendChild(newDiv);
};

