const alteraDescricao = () => {
    const descricao = document.getElementsByTagName('p');
    descricao[1].innerText = 'Daqui 2 anos eu me vejo trabalhando como desenvolvedor pleno, ganhando acima de 5 mil reais por mês e morando sozinho.';
}
alteraDescricao();

const alteraMainContent = () => {
    const mainContent = document.getElementsByClassName('main-content');
    mainContent[0].style.backgroundColor = 'rgb(76,164,109)';
}
alteraMainContent();

const alteraCenterContent = () => {
    const centerContent = document.getElementsByClassName('center-content');
    centerContent[0].style.backgroundColor = '#fff';
}
alteraCenterContent();

const corrigeTitulo = () => {
    const title = document.getElementsByClassName('title');
    title[0].innerText = 'Desafio - Javascript';
}
corrigeTitulo();

const textoMaiusculo = () => {
    const primeiroParagrafo = document.getElementsByTagName('p');
    primeiroParagrafo[0].style.textTransform = 'uppercase';
}
textoMaiusculo();

const exibeTextoConsole = () => {
    const textos = document.getElementsByTagName('p');
    
    for (let index = 0; index < textos.length; index += 1) {
        console.log(textos[index].innerText);
    }
}
exibeTextoConsole();