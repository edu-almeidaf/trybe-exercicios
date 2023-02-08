const sum = (...param) => param.reduce((soma, number) => soma + number, 0);

console.log(sum(4, 5, 6));