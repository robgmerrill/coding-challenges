// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (num) => {
  // base case
  if (num === 1) return 1;

  return num * recursiveRange(num - 1);
};

console.log(recursiveRange(1));
console.log(recursiveRange(2));
console.log(recursiveRange(3));
console.log(recursiveRange(4));
console.log(recursiveRange(5));
