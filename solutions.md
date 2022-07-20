## SOLUTIONS

### Alternate Solution 1 (Procedural approach)
```js
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
```
### Code Explanation:
- Create a variable to store the *results* as an array.
- Create an outer loop to iterate through the outer array.
- Create a second variable to hold the largest number and initialize it with the first number.  This must be outside an inner loop so it won't be reassigned until we find a larger number.
- Create said inner loop to work with the sub-arrays.
 Check if the element of the sub array is larger than the currently stored largest number.  If so, then update the number in the variable.
- After the inner loop, save the largest number in the corresponding position inside of the `results` array.
- And finally return said array.

### REFERENCE LINKS:
- [For loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)


### Alternate Solution 2 (Declarative approach)
```js
function largestOfFour2(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}
```
### Code Explanation:
- We map all items within the main array to a new array using `Array.prototype.map()` and return this array as the final result.
- Within each inner array, we reduce its contents down to a single value using `Array.prototype.reduce()`.
- The callback function passed to the reduce method takes the previous value and the current value and compares the two values.
- If the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it's the last item.

### REFERENCE LINKS:
- [`Array.prototype.map()`](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
- [`Array.prototype.reduce()`](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
- [Ternary Operators](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)


### Alternate Solution 3 (Declarative approach):
```js
function largestOfFour3(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```
### Code Explanation:
We build a special callback function (using the `Function.bind` method), that works just like `Math.max` but also has `Function.prototype.apply`s ability to take arrays as its arguments.
- We start by mapping through the elements inside the main array.  Meaning each one of the inner arrays.
- Now we need a callback function to find the max of each inner array provided by the map.
So we want to create a function that doesn the work of `Math.max` and accepts input as an array (which by it doesn't by default).

In other words, it would be really nice and simple if this worked by itself:
```js
Math.max([9, 43, 20, 6]);     // Resulting in 43
```
Alas, it doesn't.
- To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, but it complicates things a bit by invoking the context function.
i.e. `Math.max.apply(null, [9, 43, 20, 6]);` would invoke something like a Math.max method.  What we're looking for...almost.

Here we're passing `null` as the context of the `Function.prototype.apply` method as `Math.max` doesn't need any context.
- Since `arr.map` expects a callback function, not just an expression, we create a function out of the previous expression by using the `Function.bind` method.
- Since, `Function.prototype.apply` is a *static method* of the same Function object, we can call `Function.prototype.bind` on `Function.prototype.apply` i.e. `Function.prototype.apply.bind`.
- Now we pass the *context* for the `Function.prototype.apply.bind` call (in this case we want `Math.max` so we can gain its functionality).
- Since the embedded `Function.prototype.apply` method will also require a context as it's 1st argument, we need to pass it a bogus *context*.
  - So, we pass `null` as the 2nd param to `Function.prototype.apply.bind` which gives a *context* to the `Math.max` method.
  - Since, `Math.max` is independent of an *context*, hence, it ignores the bogus *context* given by `Function.prototype.apply` method call.
  - Thus, our `Function.prototype.apply.bind(Math.max, null)` makes a new function accepting the `arr.map` values i.e. the inner arrays.

### REFERENCE LINKS
- [`Math.max`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [`Function.prototype.apply` on DevDocs](http://devdocs.io/#q=js+Function+apply)
- [`Function.bind` on DevDocs](http://devdocs.io/#q=js+Function+bind)


### Alternate Solution 4 (Recursive approach)
```js
function largestOfFour(arr, finalArr = []) {
  return !arr.length ? finaArr : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}
```

