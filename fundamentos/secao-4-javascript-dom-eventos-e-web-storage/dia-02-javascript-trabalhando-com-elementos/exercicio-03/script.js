// Forma 1 sem for:
// const elementoAtual = document.getElementById('elementoOndeVoceEsta');

// elementoAtual.removeChild(elementoAtual.firstElementChild);


// Forma 2 com for no pai do elementoOndeVoceEsta:

const pai = document.getElementById('pai');
const todosOsFilhos = pai.childNodes;

for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
    const filhoAtual = todosOsFilhos[index];

    if (filhoAtual.id === 'elementoOndeVoceEsta') {
        filhoAtual.removeChild(filhoAtual.firstElementChild);
    }
}

