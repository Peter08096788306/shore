const image = document.querySelector('.image');
const menu = document.querySelector('.Burger');
const nav = document.querySelector('nav');
const xmark = document.querySelector('.fa-xmark');
const bars = document.querySelector('.fa-bars');

menu.addEventListener('click', ()=> {
    bars.classList.toggle("bars")
    nav.classList.toggle("open")
    xmark.classList.toggle("mark")
})
ScrollReveal({
    reset: true,
    distance: '300px',
    duration: 800,
    delay: 500,
    loop : true,
})
ScrollReveal().reveal('.plane', {origin: 'right'});
ScrollReveal().reveal('.headline', {origin: 'bottom'})


const sales = document.querySelector(".Sales");
const all = document.querySelector(".All");
const chart = document.querySelector(".Charter");

sales.addEventListener('mouseover', ()=> {
    // sales.classList.add("change")
    chart.classList.remove("point")
    // chart.style.color = "red";

})