const buttonModel = document.querySelector(".navButton");
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

AddRemMenu(buttonContacts, contactsMenu);
AddRemMenu(buttonServices, servicesMenu);
AddRemMenu(buttonAccessories, accessoriesMenu);


function ImageSwipe() {
    const articleImg = document.querySelector(".mainPhoto"); 
    const arrImg = [
        "img/MainPhoto1.png",  
        "img/Cayenne.jpg",  
        "img/Taycan.jpg",  
        "img/Macan.jpg"   
    ];
    const ellipses = document.querySelectorAll(".ellipseMain");

    let i = 1; 
    let interval = 5000;

    const changeImage = (index) => {
        articleImg.src = arrImg[index];
    };

    ellipses.forEach((ellipse, index) => {
        ellipse.addEventListener('mouseover', () => {
            changeImage(index); 

            ellipses.forEach(el => el.classList.remove('active'));
            ellipse.classList.add('active');
        });
    });

    setInterval(() => {
        articleImg.src = arrImg[i]; 
        
        i++; 

        if (i >= arrImg.length) {
            i = 0;
        }
    }, interval); 
}

document.addEventListener('DOMContentLoaded', function() {
    ImageSwipe();  
});


buttonModel.addEventListener('mouseenter', () => {
    subMenu.style.display = "grid";
    subMenu.style.opacity = "1";
})

buttonModel.addEventListener('mouseleave', () => {
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