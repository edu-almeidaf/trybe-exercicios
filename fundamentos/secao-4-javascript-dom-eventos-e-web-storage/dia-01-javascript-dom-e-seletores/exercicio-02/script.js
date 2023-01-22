const paragraph = document.getElementById("paragraph");
    paragraph.style.color = "red";


// Adicione uma classe igual para os dois parágrafos;
// Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;

const paragrafos = document.getElementsByClassName('paragrafo-igual');

// Altere algum estilo do primeiro deles;

paragrafos[0].style.backgroundColor = 'aqua';
paragrafos[0].style.fontSize = '20px';

// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

const subTitulo = document.getElementsByTagName('H4');
subTitulo[0].style.fontSize = '25px';
subTitulo[0].style.color = 'green';
subTitulo[0].style.backgroundColor = 'yellow';