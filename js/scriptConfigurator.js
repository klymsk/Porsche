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




