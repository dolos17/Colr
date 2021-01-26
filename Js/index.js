const menu = document.querySelector(".toggle");
const link = document.querySelector(".menu");

menu.addEventListener('click', () => {
    menu.classList.toggle('change');
    link.classList.toggle('change');
})