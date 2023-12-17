//Удали все нечетные цифры в двухмерном массиве.
const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];
const isEven = (num) => num % 2 === 0;
const removeOddNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!isEven(arr[i][j])) {
        arr[i].splice(j, 1);
        j--;
      }
    }
  }
};

removeOddNumbers(numbers);

console.log(numbers);
