// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(numArr) {
  if (numArr.length === 0) return 0;
  console.log(numArr);
  return numArr[0] + productOfArray(numArr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4, 5]));
