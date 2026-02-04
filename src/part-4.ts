/*
 * Rock, Paper, Scissors
 *
 * Return every sequence of throws a single player could've thrown over an n-round
 * game of rock-paper-scissors.
 *
 * Don't forget to type what 'rockPaperScissors' returns!
 * Can you think of a way to make a custom type for this?
 */

const rockPaperScissors = (n) => {};

// console.log(rockPaperScissors(1)); // [ ['rock'], ['paper'], ['scissors'] ]
// console.log(rockPaperScissors(2));
/*
[
  ['rock', 'rock'],
  ['rock', 'paper'],
  ['rock', 'scissors'],
  ['paper', 'rock'],
  ['paper', 'paper'],
  ['paper', 'scissors'],
  ['scissors', 'rock'],
  ['scissors', 'paper'],
  ['scissors', 'scissors'],
];
*/


/*
 *
 * NOTE: The tests for these files will only test the JavaScript functionality of
 * your code and do not actually account for type accuracy. To make sure that you've
 * written your TypeScript correctly, ensure that there are no red line errors in any
 * of the console.log() tests below.
 *
 */

/*
 * 1. 'Index Of'
 *
 * Return the first index at which the input element can be found in the input array.
 * If the element is not present, return -1.
 *
 * Do not use the native JavaScript .indexOf() method.
 */

const indexOf = (array, element) => {};

// console.log(indexOf([11, 22, 33], 11)); // → 0
// console.log(indexOf([5, 'hi', true, 5, 6, 'hello', 'hi', false, 'hi'], 'hi')); // -> 1
// console.log(indexOf([11, 22, 33], 5)); // → -1

/*
 * 2. 'Uniq'
 *
 * Return a new array without duplicate values from the input array.
 * Make sure to preserve the order of the elements in the array.
 */

const uniq = (array) => {};

// console.log(uniq([1, 2, 1])); // → [1, 2]
// console.log(uniq([3, 5, 3, true, 5, 'hi', 'sup', 'hi'])); // -> [3, 5, true, 'hi', 'sup']

/*
 * 3. 'Pluck'
 *
 * Return a new array containing all the corresponding values for the input key from
 * the input array.
 *
 * Takes in an array of objects and a string representing an object key.
 * Return an array containing all object values from that input key.
 *
 * To complete this challenge, ensure that there are no TypeScript errors (red lines).
 *
 * Don't forget to type user objects! Assume that all user objects must have a 'user' key.
 *
 * Hint: You might want to use the 'keyof' operator in this challenge.
 * (https://www.w3schools.com/typescript/typescript_keyof.php)
 */

const pluck = (array, key) => {};

const users = [
  { user: 'Bob', age: 20 },
  { user: 'Sam', age: 25, hometown: 'Scottsdale, AZ' },
  { user: 'Chaewon', hometown: 'Seoul, South Korea' },
];

// console.log(pluck(users, 'user')); // → ['Bob', 'Sam', 'Chaewon']
// console.log(pluck(users, 'age')); // → [20, 25]
// console.log(pluck(users, 'hometown')); // -> ['Scottsdale, AZ', 'Seoul, South Korea']

// console.log(pluck(users, 'height')); // -> []
// ^ (TypeScript should give us an error when we try to pluck a property that's not present on the element type.)

/*
 * 4. 'Reduce'
 *
 * Reduces an array to a single value, which is the accumulated result of iterating
 * over the entire array.
 *
 * A passed-in callback function will be invoked on each iteration, taking in the
 * accumulated return value of the previous iteration as its first argument, and the
 * current element as its second argument.
 *
 * If an initial value is not passed into 'reduce', the first element of the array
 * (i.e. the element at the zero-th index) is used as the initial value.
 *
 * Do not use the native JavaScript .reduce() method!
 *
 * To complete this challenge, ensure that there are no TypeScript errors (red lines).
 *
 * Hint:
 * Possible solutions to this are rather challenging.
 * You may find the below resource on 'Function Overloads' in TypeScript helpful.
 * (https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
 */

const reduce = (array, callback, initialValue) => {};

// console.log(reduce([1, 2], (acc, curr) => acc + curr)); // 3
// console.log(reduce([1, 2], (acc, curr) => acc + curr, 2)); // 5
// console.log(reduce(['hehe', 'hoho'], (acc, curr) => acc + curr)); // 'hehehoho'

/* don't edit this line! */
export { rockPaperScissors, indexOf, uniq, pluck, reduce };
