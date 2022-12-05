function maiorNome(nomes) {
    let maiorNome = nomes[0];

    for (index in nomes) {
        if (maiorNome.length < nomes[index].length) {
            maiorNome = nomes[index];
        }
    }
    
    return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));