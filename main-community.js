const selectMenu = document.querySelector('.hamburguer');
selectMenu.addEventListener('click', function(event) {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active');


    const menuIcone = event.target;
    menuIcone.setAttribute('class', menuIcone.classList.contains('fa-times') ? 'fas fa-bars hamburguer' : 'fas fa-times')
})