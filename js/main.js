


const hamburgerButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

hamburgerButton.addEventListener("click", ()=>{
    mobileMenu.classList.add("open");
})

closeMenu.addEventListener("click", ()=>{
    mobileMenu.classList.remove("open");
})