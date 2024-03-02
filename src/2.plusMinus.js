/**
 * @param {Array<number>} arr - An array of integers
 */
export function plusMinus(arr) {
  let countOfPositives = 0;
  let countOfNegatives = 0;
  let countOfZeros = 0;

  for (const num of arr) {
    if (num === 0) {
      countOfZeros++;
    } else if (num < 0) {
      countOfNegatives++;
    } else {
      countOfPositives++;
    }
  }

  return [
    countOfPositives / arr.length,
    countOfNegatives / arr.length,
    countOfZeros / arr.length,
  ];
}

function main(arr) {
  const result = plusMinus(arr);
  result.forEach((num) => console.log(num.toPrecision(6)));
}

if (process.env.NODE_ENV !== "test") {
  main([-4, 3, -9, 0, 4, 1]);
}
