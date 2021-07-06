let screenWidth, screenHeight;
let w;
let siteHeader;

let heroSection;
let containerImgHero;
let textHero;


let hoursCare;
let hoursCareText;
let containerHours;

let service;
var human;


// human.send("timeline.pause"); 
// human.send("timeline.play"); 
// human.send("camera.orbit", { yaw: 90 });
// (function rotateCamera() {
//     requestAnimationFrame(rotateCamera);
//     human.send("camera.orbit", { yaw: 0.4 });
// })();

// human.send("camera.set", {
//     position: { z: -25 },
//     animate: true
// });

document.addEventListener("DOMContentLoaded", function(){

    createVars();
    setListeners();
    resize();
    
    human = new HumanAPI("embedded-human"); 

    setInterval(() => {
        human.send("timeline.play"); 
    }, 3000);
    

})


const createVars = function(){
    w = window;
    siteHeader = document.getElementById("siteHeader");


    heroSection = document.querySelectorAll(".heroSection");
    containerImgHero = document.getElementById("containerImgHero");
    textHero = document.getElementById("textHero");

    hoursCare = document.querySelector(".hoursCare");
    hoursCareText = document.querySelector(".hoursCareText");
    containerHours = document.querySelector(".containerHours");

    service = document.querySelectorAll(".service");

}


const setListeners = function(){

    w.addEventListener("resize", function(){
        resize();
    })

    if(screenWidth <= 1024){
        containerImgHero.style.display = "none";
    }

    


}


const resize = function(){

    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;

    setTimeout(() => {
        
        if(screenWidth > 1024){
            resizeSectionsDesk();
        } else if(screenWidth > 768 && screenWidth <= 1024){
            resizeSectionsTablet();
        } else{
            resizeSectionsCell();
        }
        reszieSectionsAll();
        
    }, 50);

}


const resizeSectionsDesk = function(){
    if(page ==="home"){

        containerImgHero.style.width = (screenWidth + 100) - (parseFloat(getComputedStyle(textHero).getPropertyValue("margin-left")) + textHero.offsetWidth) + "px";
        containerImgHero.style.display = "initial";
        
        let marginBottom = service[0].offsetHeight / 2;
        
        for (let i = 0; i < service.length; i++) {
            const element = service[i];
            element.style.marginBottom = "-"+marginBottom + "px";
        }
    }


}

const resizeSectionsTablet = function(){
    if(page==="home"){

        
        containerImgHero.style.display = "none";
        
        containerHours.style.height = "auto";
        
        for (let i = 0; i < service.length; i++) {
            const element = service[i];
            element.style.marginBottom = "0px";
        }
    }
        
}

const resizeSectionsCell = function(){
    if(page ==="home"){
        containerHours.style.height = "auto";
    }
}

const reszieSectionsAll = function(){
    if(page ==="home"){
        heroSection[0].style.height = (screenHeight - siteHeader.offsetHeight) + "px";
    }

    
}

