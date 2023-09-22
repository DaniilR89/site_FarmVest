const faqElements = document.querySelectorAll('.faq');

faqElements.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});


const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});