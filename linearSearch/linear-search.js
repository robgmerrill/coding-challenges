// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

// Examples:

// linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
// linearSearch([100], 200) // -1

const linearSearch = (array, target) => {
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // compare array value and current index `i` and check if it is equal to `target`
    if (array[i] === target) return i;
  }
  return -1;
};

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

// Big O
/* 
Linear search is O(n)
It doesn't matter if if the searched for item is at front or end of the array. Big O doesn't look at constants because it looks at overall trend. We record worst case scenario as the trend
*/
