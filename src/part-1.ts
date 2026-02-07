/*
 * Remember to add typing!
 */

/*
 * 1. Palindrome
 *
 * Return 'true' if the input string is a palindrome (i.e. the string is identical
 * spelled forwards and backwards), disregarding case and any non-alphabet characters.
 * Otherwise, return 'false'.
 *
 * Don't forget to type what 'palindrome' returns!
 */

const palindrome = (str:string):boolean => {
  //Input: string
  // Output: Boolean

  //True - If string is identical forward and backwards
  // False - if not

  //Disregard capitlization and characters other than letters

  //We need to strip the string of anything but letter & Lowercase the entire string
    //Declare a varible 
    // Any punctuation and whitespace - .replace
    // lowercase .toLowerCase
  const newStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
  // console.log(stripedStr)

  //Need to reverse the string
    //Declare a varible 
  const revesedStr = newStr.split('').reverse().join('')
  // console.log(revesedStr)
  //Compare to revesed string and original stripped string
  // If the same output true else false
  if(newStr === revesedStr) return true
  return false
};

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); // true
// console.log(palindrome("llama mall")); // true
// console.log(palindrome("jmoney")); // false
// console.log(palindrome("x")); // true

/*
 * 2. Is Prime
 *
 * Return 'true' if the input is prime number. Otherwise, return 'false'.
 *
 * Don't forget to type what 'isPrime' returns!
 */

const isPrime = (num: number):boolean => {
  //Input: Number
  //Output: Boolean

  //a natural number greater than 1
  //2 is the only even prime number
  if (num < 2) {
    return false
  } else if (num === 2) {
    return true
  }
  //A number is prime if it is not divisible by any prime number less than
  for (let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      return false
    } 
  } 
 return true 
};

// console.log(isPrime(1)); // false
// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(4)); // false

/*
 * 3. n-th Fibonacci
 *
 * Return the n-th Fibonacci number. A Fibonnaci sequence is a list of numbers that
 * begins with 0 and 1. Every subsequent number is the sum of the previous two.
 *
 * Don't forget to type what 'nthFibonacci' returns!
 *
 * Hint:
 *
 * Try to use recursion. What is the time complexity? Are you repeating the same
 * function call with the same arguments frequently? Are you able to compute
 * nthFibonacci(1000)?
 *
 * If not, recursive algorithms can be made MUCH more efficient using memoization.
 * Try memoizing each result from nthFibonacci and see the performance difference.
 * remove ".skip" from the associated test in `tests/part1/nthFibonacci.test.ts` to check your implementation!
 */

const nthFibonacci = () => {
  //Memo - Add a cache
  const cache:Record<number, number> = {}
  //Define inner fucntion - need to name so recursion can recall it
  return function fib(n:number):number {
    //Base Case - If it hits 0 or 1
  // Memo add another base case of it finding the arg in cache
    //define what key is in a variable
  const key = n
  
  if (key in cache) {
    console.log('Found in cache')
    return cache[key]
  }

  if (n === 0 || n === 1) return n
 

  //Memo - If not found calculate and store results in cache
  //Recursive Case - fib(n -1) + fib(n-2)
  const result:number = fib(n - 1) + fib(n - 2)
  cache[key] = result
  return result
  }
  
};

//Memoize Function
//delare a memoize function
//Outer Function
function memoize(fn:Function):Function{
  //create cache
  const cache:Record <string, number> = {} // {‘5’: 1}
  //return a smart function
  //Inner Function
  return function(...args:number[]) {
    //this function should collect all arguments
    // create key for more convenient usage (argument), using JSON.stringify
    const key = JSON.stringify(args)
    //check cash to see if the key is in cache
    //if the key is in the cache, return the key’s value
    if (key in cache) {
      return cache[key]
    }

  //if not, caculate the key’s value, and save the value
  const results = fn(...args)
  cache[key] = results
  return results
  }
}

// console.log(nthFibonacci(0)); // 0
// console.log(nthFibonacci(1)); // 1
// console.log(nthFibonacci(2)); // 1
// console.log(nthFibonacci(3)); // 2
// console.log(nthFibonacci(4)); // 3
const fibMemo = nthFibonacci()
console.log(fibMemo(1))
// console.log(fibMemo(2))

// console.log(fibMemo(4))
// console.log(fibMemo(4))
// console.log(fibMemo(3))



/* don't edit this line! */
export { palindrome, isPrime, nthFibonacci };
