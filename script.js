var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("show-menu");
})
