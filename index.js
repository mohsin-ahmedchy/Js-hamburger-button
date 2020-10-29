let button = document.querySelector(".btn");
let nav = document.querySelector(".nav");

button.addEventListener("click",()=>{
    nav.classList.toggle("act");
    button.classList.toggle("act");
}) 