const pai = document.getElementById('pai');

const irmao = document.createElement('section');
irmao.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmao);


const elementoAtual = document.getElementById('elementoOndeVoceEsta')

const filhoAtual = document.createElement('section');
filhoAtual.id = 'filhoElementoOndeVoceEsta';
elementoAtual.appendChild(filhoAtual);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')

const filhodoFilho = document.createElement('section');
filhodoFilho.id = 'filhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhodoFilho);

const terceiroFilho = filhodoFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho);