const buttonModel = document.querySelector(".navButton");
const subMenu = document.querySelector(".subMenu");

buttonModel.addEventListener('mouseenter', () => {
    subMenu.style.display = "grid";
    subMenu.style.opacity = "1";
})

buttonModel.addEventListener('moueseleave', () => {
    subMenu.style.opacity = '0';
    setTimeout(() => {
        subMenu.style.display = "none";
    }, 300);
})

subMenu.addEventListener('mouseenter', () => {
    subMenu.style.display = "grid";
    subMenu.style.opacity = "1";
});

subMenu.addEventListener('mouseleave', () => {
    subMenu.style.opacity = '0';
    setTimeout(() => {
        subMenu.style.display = "none";
    }, 300);
});