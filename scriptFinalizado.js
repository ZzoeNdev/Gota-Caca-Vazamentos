function isMobile() {
    return /Android|webOS|iPhone|iPad/i.test(navigator.userAgent);
}

function menu(){
    var menu = document.getElementById("menuJS");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menu.style.pointerEvents = "none";
    } else {
        menu.style.display = "block";
        menu.style.pointerEvents = "auto";
    }
};

window.addEventListener("scroll", function() {
    var header = document.querySelector("#header");
    header.classList.toggle("menuPrincipal", window.scrollY > 100);
});

window.addEventListener("scroll", function() {
    var infos = document.querySelector(".infos");
    infos.classList.toggle("invisibleInfo", window.scrollY > 200);
});

window.addEventListener("scroll", function() {
    var card1 = document.querySelector(".card1");
    card1.classList.toggle("visibleCard", window.scrollY > 450);
});

window.addEventListener("scroll", function() {
    var card2 = document.querySelector(".card2");
    card2.classList.toggle("visibleCard", window.scrollY > 650);
});

window.addEventListener("scroll", function() {
    var card3 = document.querySelector(".card3");
    card3.classList.toggle("visibleCard", window.scrollY > 850);
});

window.addEventListener("scroll", function() {
    var regU = document.querySelector(".regU");
    regU.classList.toggle("visibleR", window.scrollY > 1250);
});

window.addEventListener("scroll", function() {
    var regD = document.querySelector(".regD");
    regD.classList.toggle("visibleR", window.scrollY > 1350);
});

window.addEventListener("scroll", function() {
    var cardsWU = document.querySelector(".cards-works-Up");
    cardsWU.classList.toggle("visibleCardW", window.scrollY > 1750);
});

window.addEventListener("scroll", function() {
    var cardsWD = document.querySelector(".cards-works-Down");
    cardsWD.classList.toggle("visibleCardW", window.scrollY > 1950);
});

function Screen(){
    var rest = document.querySelector(".rest");
    var contact = document.querySelector(".contact");

    if(!isMobile()){
        rest.style.display = "none";
        contact.style.display = "none";
    }
    
    if (window.innerWidth > window.innerHeight) {
        contact.style.display = "none";
        rest.style.display = "flex";
    }else {
        rest.style.display = "none";
        contact.style.display = "flex";
    }

}

window.addEventListener("resize", Screen);
window.addEventListener("load", Screen);



