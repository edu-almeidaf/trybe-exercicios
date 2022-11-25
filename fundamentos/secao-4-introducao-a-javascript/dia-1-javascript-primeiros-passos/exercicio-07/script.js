const primeiroNumero = 30;
const segundoNumero = 59;
const terceiroNumero = 42;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    console.log(primeiroNumero)
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    console.log(segundoNumero)
} else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
    console.log(terceiroNumero)
} else {
    console.log('Os três valores são iguais.')
}