const body = document.getElementsByTagName('body');

//Criando H1 dentro do body
const createH1 = () => {
    const h1 = document.createElement('h1');
    h1.className = 'title';
    h1.innerText = 'TrybeTrip - Agência de Viagens';
    body[0].appendChild(h1);
}
createH1();

//Criando main dentro do body
const createMain = () => {
    const main = document.createElement('main');
    main.className = 'main-content';
    body[0].appendChild(main);
}
createMain();

const main = document.querySelector('.main-content');

const createCenterContent = () => {
    const section = document.createElement('section');
    section.className = 'center-content';
    section.style.backgroundColor = 'green';
    main.appendChild(section);
}
createCenterContent();

const createP = () => {
    const p = document.createElement('p');
    const section = document.querySelector('.center-content');
    p.innerText = 'Texto teste';
    section.appendChild(p);
}
createP();

const createLeftContent = () => {
    const section = document.createElement('section');
    section.className = 'left-content';
    main.appendChild(section);
}
createLeftContent();

const createRightContent = () => {
    const section = document.createElement('section');
    section.className = 'right-content';
    section.style.marginRight = 'auto';
    main.appendChild(section);
}
createRightContent();

const createImg = () => {
    const section = document.querySelector('.left-content');
    const img = document.createElement('img');
    img.src = 'https://picsum.photos/200';
    img.className = 'small-image';
    section.appendChild(img);
}
createImg();

const createList = () => {
    const section = document.querySelector('.right-content');
    const ul = document.createElement('ul');
    const numerosExtensos = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
    for (index = 0; index < numerosExtensos.length; index += 1) {
        const li = document.createElement('li');
        li.innerText = numerosExtensos[index];
        ul.appendChild(li);
    }
    section.appendChild(ul);
}
createList();

const createH3 = () => {
    for (let index = 0; index < 3; index += 1) {
        const h3 = document.createElement('h3');
        h3.className = 'description';
        main.appendChild(h3);
    }
}
createH3();

const removeSection = () => {
    const section = document.getElementsByClassName('left-content')[0];
    main.removeChild(section);
}
removeSection();

const removeItens = () => {
    const ul = document.getElementsByTagName('ul')[0];
    ul.lastChild.remove();
    ul.lastChild.remove();
}
removeItens();

