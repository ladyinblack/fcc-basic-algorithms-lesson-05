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
