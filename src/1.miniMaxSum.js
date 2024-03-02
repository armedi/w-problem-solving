/**
 * @param {Array<number>} arr - An array of 5 integers
 */
export function miniMaxSum(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  // do a slice first to avoid mutating original array
  // then sort the array in ascending order to get the min and max
  const sortedArr = arr.slice().sort((a, b) => a - b);

  const minSum = sum - sortedArr[sortedArr.length - 1];
  const maxSum = sum - sortedArr[0];

  return [minSum, maxSum];
}

function main(arr) {
  const result = miniMaxSum(arr);
  console.log(result.join(" "));
}

if (process.env.NODE_ENV !== 'test') {
  main([1, 3, 5, 7, 9])
}
