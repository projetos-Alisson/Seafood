const menu = document.querySelector('.menu');
const op = document.querySelector('.options');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    op.classList.toggle('ativo')
})