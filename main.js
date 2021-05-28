const codeArea = document.querySelector('#main__code');
const language = document.querySelector ('.main__project-language');
const btn = document.querySelector('.main__button-highlight');

function changeLanguage() {
    const code = codeArea.querySelector('code');
    codeArea.innerHTML = `<code class="preview hljs ${language.value}" contenteditable="true" aria-label="editor"></code>`
    codeArea.firstChild.innerText = code.innerText //garantir que é texto e não html
}

language.addEventListener('change', () => {
    changeLanguage();
})

btn.addEventListener('click', () => {
    const code = codeArea.querySelector('code');
    hljs.highlightBlock(code);
})

const contentColor = document.querySelector('.main__content-color');
const selectColor = document.querySelector('#main__project-color');

selectColor.addEventListener('input', function(event) {
    let color = event.target.value;
    contentColor.style = `background: ${color}`;
})


const selectMenu = document.querySelector('.hamburguer');
selectMenu.addEventListener('click', function(event) {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active');


    const menuIcone = event.target;
    menuIcone.setAttribute('class', menuIcone.classList.contains('fa-times') ? 'fas fa-bars hamburguer' : 'fas fa-times')
})


