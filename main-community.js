const selectMenu = document.querySelector('.hamburguer');
selectMenu.addEventListener('click', function(event) {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active');


    const menuIcone = event.target;
    menuIcone.setAttribute('class', menuIcone.classList.contains('fa-times') ? 'fas fa-bars hamburguer' : 'fas fa-times')
})


document.querySelectorAll('.main__content').forEach(selectContent => {
    selectContent.addEventListener('mouseenter', event => {
        const interactions = selectContent.querySelector('.main__interactions')
        interactions.classList.toggle('active')
        selectContent.classList.toggle('active')
  })
})

document.querySelectorAll('.main__content').forEach(selectContent => {
    selectContent.addEventListener('mouseleave', event => {
        const interactions = selectContent.querySelector('.main__interactions')
        interactions.classList.toggle('active')
        selectContent.classList.toggle('active')
  })
})

document.querySelectorAll('.emojis').forEach(selectHeart => {
    selectHeart.addEventListener('click', event => {
        const svg = selectHeart.querySelector('i');
        svg.style.color = '#F65151';
  })
})

document.querySelectorAll('.emojis').forEach(selectHeart => {
    selectHeart.addEventListener('dblclick', event => {
        const svg = selectHeart.querySelector('i');
        svg.style.color = 'white';
  })
})



/*

const selectInfo = document.querySelector('.main__info');

const selectContent = document.querySelectorAll('.main__content');

*/

/*
const selectContent = document.querySelector('.main__content')


selectContent.addEventListener('mouseenter', function(event) {
    const interactions = document.querySelector('.main__interactions');
    const background = document.querySelector('.main__content');
    interactions.classList.toggle('active')
    background.classList.toggle('active')
})

selectContent.addEventListener('mouseleave', function(event) {
    const background = document.querySelector('.main__content');
    const interactions = document.querySelector('.main__interactions');
    interactions.setAttribute('class', 'main__interactions') 
    background.setAttribute('class', 'main__content') 
})

*/
