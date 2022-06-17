const toggle = document.querySelector(".toggle")
const menu = document.querySelector(".nav-items-container")

toggle.addEventListener("click",()=>{
   menu.classList.toggle("active")
   toggle.classList.toggle("active")
})