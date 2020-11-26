const burger = document.querySelector(".burger");
const sideBar = document.querySelector(".side-bar");
const burgerExit = document.querySelector(".side-bar .exit");

burger.onclick = function() {
    sideBar.style.transform = "translateX(0%)";
    sideBar.style.transition = "transform 1s ease-out";
}

burgerExit.onclick = function() {
    sideBar.style.transform = "translateX(100%)";
    sideBar.style.transition = "transform 1s ease-out";
}
