const container=document.querySelector(".container")
const iconos=document.querySelector(".iconos")


iconos.addEventListener('click',()=>{
    container.classList.toggle("oscuro")
    ? (iconos.firstElementChild.className = "bi bi-moon")
    : (iconos.firstElementChild.className = "bi bi-brightness-high");
})

