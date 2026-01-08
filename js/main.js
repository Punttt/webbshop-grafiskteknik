
/* Mobilmeny */

const hamburgerButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

hamburgerButton.addEventListener("click", ()=>{
    mobileMenu.classList.add("open");
})

closeMenu.addEventListener("click", ()=>{
    mobileMenu.classList.remove("open");
})

/* Omdömen */

const reviewButton = document.querySelector("#btn-review");
const reviewTextBox = document.querySelector(".message-box");

if (reviewButton && reviewTextBox) {
    reviewButton.addEventListener("click", () => {
        console.log("hej");
        reviewTextBox.classList.toggle("open");
    });
}