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


// Forma 2

function triangleAnglesValidate(angleA, angleB, angleC) {
    let sumOfAngles = angleA + angleB + angleC;
    let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
    if (allAnglesArePositives) {
      if (sumOfAngles === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }

  console.log(triangleAnglesValidate(90, 30, 60));