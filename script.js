/* Hamburguer Menu */
const hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("show-menu");
})

/* Scroll Animation */
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight *3) / 4);
    target.forEach((element) =>{
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

window.addEventListener('scroll', () =>{
    animeScroll();
})

/* Slides */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(() =>{
    nextImage();
}, 5000 ) 

function nextImage (){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio" +count).checked = true;
}