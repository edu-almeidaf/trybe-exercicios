const numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 400,
    m: 1000,
}

function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    const len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];

    for (let index = 2; index <= len; index += 1) {
        const prox = numerosRomanos[numero[len - index]];
        
        atual <= prox ? soma += prox : soma -= prox;

        atual = prox;
    }

    return soma;

    
}

console.log(romanoParaDecimal('MCMXCIX'));