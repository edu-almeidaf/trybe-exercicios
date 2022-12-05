let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (vector) => {
const result = [];

for (let index = 0; index < vector.length; index += 1) {
    for (let index1 = 0; index1 < vector[index].length; index1 += 1) {
        vector[index][index1] % 2 === 0 ? result.push(vector[index][index1]) : null;
    }
}

return result;   
};

console.log(arrayOfNumbers(vector));