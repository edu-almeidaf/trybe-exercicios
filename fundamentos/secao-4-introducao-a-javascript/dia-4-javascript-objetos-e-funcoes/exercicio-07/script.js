function angulosTriangulo(anguloUm, anguloDois, anguloTres) {
    if (anguloUm + anguloDois + anguloTres === 180 && anguloUm > 0 && anguloDois > 0 && anguloTres > 0) {
        return true;
    } else if (anguloUm + anguloDois + anguloTres !== 180 && anguloUm > 0 && anguloDois > 0 && anguloTres > 0) {
        return false;
    } else {
        return 'Erro, insira um ângulo maior do que zero!'
    }
}

console.log(angulosTriangulo(90, 30, 60));