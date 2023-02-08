// Recupere o elemento que contém o título da página e faça algo com ele, por exemplo alterá-lo para o nome do seu filme favorito.

const alteraTitulo = () => {
    const titulo2 = document.getElementById('page-title');
    titulo2.innerText = 'Avatar 2';
}

alteraTitulo();
// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

const alteraParagrafo = () => {
    const corParagrafo = document.getElementById('paragraph');
    corParagrafo.style.backgroundColor = 'aquamarine';
    corParagrafo.style.fontSize = '25px';
}

alteraParagrafo();

// Por fim, recupere o subtítulo e altere-o também.

const alteraSubTitulo = () => {
    const tituloModificado = document.getElementById('subtitle');
    tituloModificado.style.fontSize = '20px';
    tituloModificado.style.backgroundColor = 'orange';
}

alteraSubTitulo();