// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Return Largest Numbers in Arrays</h1>`;

/** TODO:
 * Return an array consisting of the largest number from each provided sub-array.  For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you an iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 
 function largestOfFour(arr) {
   return arr;
 }
 
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 */

function largestOfFour(arr) {
  let splitArr = [];
  let largest;
  for (let i = 0; i < arr.length; i++) {
    largest = arr[i][0];
    // console.log('arr[i]:', arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      // console.log('arr[i][j]:', arr[i][j]);
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
      // console.log('largest:', largest);
    }
    splitArr.push(largest);
  }
  // console.log('splitArr:', splitArr);
  return splitArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

/** HINTS:
 *    1. You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.  You will need to keep track of the array with the answer and the largest number of each sub-array.
 *    2. You can work with multidimensional arrays by "Array[Index][SubIndex]".
 *    3. Pay close attention to the timing of the storing of variables when working with loops.
 */

/** ALTERNATE SOLUTION 1 (Procedural approach): */
function largestOfFour1(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}
/** EXPLANATION:
 * Create a variable to store the "results" as an array.
 * Create an outer loop to iterate through the outer array.
 * Create a second variable to hold the largest number and initialize it with the first number.  This must be outside an inner loop so it won't be reassigned until we find a larger number.
 * Create said inner loop to work with the sub-arrays.
 * Check if the element of the sub array is larger than the currently stored largest number.  If so, then update the number in the variable.
 * After the inner loop, save the largest number in the corresponding position inside of the "results" array.
 * And finally return said array.
 * REFERENCE LINKS:
 * For loops (http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
 */

/** ALTERNATE SOLUTION 2 (Declarative approach): */
function largestOfFour2(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}
/** EXPLANATION:
 * We map all items within the main array to a new array using "Array.prototype.map()" and return this array as the final result.
 * Within each inner array, we reduce its contents down to a single value using "Array.prototype.reduce()".
 * The callback function passed to the reduce method takes the previous value and the current value and compares the two values.
 * If the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it's the last item.
 * REFERENCE LINKS:
 * Array.prototype.map() (http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
 * Array.prototype.reduce() (http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
 * Ternary Operators (http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)
 */

/** ALTERNATE SOLUTION 3 (Declarative approach): */
function largestOfFour3(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
/** EXPLANATION:
 * We build a special callback function (using the Function.bind method), that works just like Math.max but also has Function.prototype.apply's ability to take arrays as its arguments.
 *    - We start by mapping through the elements inside the main array.  Meaning each one of the inner arrays.
 *    - Now we need a callback function to find the max of each inner array provided by the map.
 * So we want to create a function that doesn the work of Math.max and accepts input as an array (which by it doesn't by default).
 * In other words, it would be really nice and simple if this worked by itself:
 *    Math.max([9, 43, 20, 6]);     // Resulting in 43
 * Alas, it doesn't.
 *    - To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, but it complicates things a bit by invoking the context function.
 * i.e. Math.max.apply(null, [9, 43, 20, 6]); would invoke something like a Math.max method.  What we're looking for...almost.
 * Here we're passing null as the context of the Function.prototype.apply method as Math.max doesn't need any context.
 *    - Since arr.map expects a callback function, not just an expression, we create a function out of the previous expression by using the Function.bind method.
 * Since, Function.prototype.apply is a static method of the same Function object, we can call
 */

console.log(
  largestOfFour3([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour3([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour3([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
