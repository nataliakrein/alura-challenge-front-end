//highlight
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

//icone menu
const selectMenu = document.querySelector('.hamburguer');
selectMenu.addEventListener('click', function(event) {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active');


    const menuIcone = event.target;
    menuIcone.setAttribute('class', menuIcone.classList.contains('fa-times') ? 'fas fa-bars hamburguer' : 'fas fa-times')
})

//print do código

function capture() {
    const capture = document.querySelector('.main__content-color')
    html2canvas(capture)
        .then(canvas => {
            document.body.appendChild(canvas)
            canvas.style.display = 'none'
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', 'my-image.png')
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
}

const btnDownload = document.querySelector('.main__button-export')
btnDownload.addEventListener('click', capture)

//localstorage
const saveProject = document.querySelector('.main__project-save');
const nameProject = document.querySelector('#main__project-name');
const descriptionProject = document.querySelector('#main__project-description');
const colorProject = document.querySelector('#main__project-color');

saveProject.addEventListener('click', function(event) {
    if (typeof(Storage) !== "undefined"){
        console.log('suporta localstorage')
        const project = createProject()
        saveLocalStorage(project)
        console.log(project)
    } else {
        console.log('não suporta localstorage')
    }
    window.location.href = "community.html";
})


function createProject() {
    let project = {
        'id': atribuiID(),
        'detalhesDoProjeto': {
            'name': nameProject.value,
            'description': descriptionProject.value,
            'color': colorProject.value,
            'language': language.value,
            'code': codeArea.querySelector('code').innerText //texto visivel dentro da tag code dentro da codearea
        }
    }
    return project;
}

function atribuiID() {
    //colocar a posição dos id, se for 1, ser o primeiro, 2, o segundo...
    if (localStorage.length == 0) { //se o tamanho for 0
        return 0
    } else {
        //aumentar o id enquanto for colocando coisas no localstorage
        let novoId = localStorage.length
        return novoId
    }
}

function saveLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}