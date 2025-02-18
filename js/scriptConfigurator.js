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