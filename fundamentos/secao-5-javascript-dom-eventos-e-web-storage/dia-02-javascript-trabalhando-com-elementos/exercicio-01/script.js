const elementoAtual = document.getElementById('elementoOndeVoceEsta');

elementoAtual.parentElement.style.color = '#aa350b';

elementoAtual.firstElementChild.innerText = 'Olá, eu sou o filho do filho';

console.log(document.getElementById('pai').firstElementChild);

console.log(elementoAtual.previousElementSibling);

console.log(elementoAtual.nextSibling);

console.log(elementoAtual.nextElementSibling);

console.log(document.getElementById('pai').children[2]);



