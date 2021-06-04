//menu
const selectMenu = document.querySelector('.hamburguer');
selectMenu.addEventListener('click', function(event) {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('active');


    const menuIcone = event.target;
    menuIcone.setAttribute('class', menuIcone.classList.contains('fa-times') ? 'fas fa-bars hamburguer' : 'fas fa-times')
})

//montar projetos

const allProjects = document.querySelector(".main");

new function () {
    showProjects()
}

function showProjects() {

    if (localStorage.length == 0) {
        return
    }
    let projects = []
    for(let i = 0; i < localStorage.length; i++ ) {
        projects.push(JSON.parse(localStorage.getItem(i)))
        console.log(localStorage.getItem(i))
    }
    projects.forEach(projeto => {
        allProjects.innerHTML += createContainer(projeto)
        const codeHTML = allProjects.querySelector(`[data-id="${projeto.id}"]`)
        const contentColor = codeHTML.querySelector('.main__content-color');
        codeHTML.classList.add('main__content')
        contentColor.style.background = projeto.detalhesDoProjeto.color;
        codeHTML.querySelector('code').innerText = projeto.detalhesDoProjeto.code
    }) 
} 

function createContainer(projeto) {
    let container = 
    `
    <div class="project-wrapper" data-id="${projeto.id}">
        <div class="main__content-color ${projeto.detalhesDoProjeto.color}">
                <div class="main__content-code">
                    <div class="mac-icons">
                        <div class="icon-1"></div>
                        <div class="icon-2"></div>
                        <div class="icon-3"></div>
                    </div>
                    <div id="main__code">
                        <pre><code class="preview hljs ${projeto.detalhesDoProjeto.language}" contenteditable="true" aria-label="editor"></code></pre>
                    </div>
                </div>
            </div>
            <div class="main__info">
                <h1 class="title__project">${projeto.detalhesDoProjeto.name}</h1>
                <p class="description__project">${projeto.detalhesDoProjeto.description}</p>
                <div class="main__interactions">
                    <div class="emojis">
                        <i class="fas fa-heart" id="heart"></i><p>0</p>
                        <i class="fas fa-comment"></i><p>0</p>
                    </div>
                    <div class="user">
                        <span class="user__pic"></span>
                        <p class="user__name">Harry</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    `
    return container
}

//interação com os projetos
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
        acrescentar(count);
        function acrescentar(count) {
            const btnHeart = selectHeart.querySelector('p');
            count++;
            btnHeart.innerHTML = count

        }
  })
  var count = 0;
})


document.querySelectorAll('.emojis').forEach(selectHeart => {
    selectHeart.addEventListener('dblclick', event => {
        const svg = selectHeart.querySelector('i');
        svg.style.color = 'white';
        const estado = 'false'
        decrementar(count);
        function decrementar(count) {
            const btnHeart = selectHeart.querySelector('p');
            count--;
            btnHeart.innerHTML = count
        }
  })
  var count = 1;
})
