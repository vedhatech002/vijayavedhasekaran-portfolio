const hamburgerEl = document.getElementById("hamburger");
const menuEL = document.querySelector(".navbar");
console.log(menuEL)
hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("toggle");
    menuEL.classList.toggle("toggle")
})