const valorCusto = 10;
const valorVenda = 45;
const impostoSobreOCusto = valorCusto * 0.2;
const custoTotal = valorCusto + impostoSobreOCusto;

if (valorCusto >= 0 && valorVenda >= 0) {
    let lucroMilProdutos = (valorVenda - custoTotal) * 1000;

    console.log('O lucro obtido com a venda de 1000 produtos é: ' + lucroMilProdutos);
} else {
    console.log('Erro. Um dos valores é menor do que zero, por favor insira um valor válido!');
}