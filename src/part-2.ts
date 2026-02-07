/*
 * 1. Primitive Data Types
 *
 * To complete this challenge, add primitive types to the code until the errors
 * (red lines) go away.
 */

const getArtistBirth = (artistName:string, year:number): string => {
  return `${artistName} was born in the year ${year}.`;
};

console.log(getArtistBirth('Charli XCX', 1992)); // 'Charli XCX was born in the year 1992.'

const frankZappa = 'Frank Zappa';
const frankZappaAge = 52;

type Musician = {
  artistName: string,
  age:number, 
  deceased:boolean
  // what other properties does this type need?
};

const frankZappaObj: Musician = {
  artistName: frankZappa,
  age: frankZappaAge,
  deceased: true,
};

const getMusicianInfo = (musicianObj:Musician): string => {
  const { artistName, age, deceased } = musicianObj;
  // ^ this is called object destructuring assignment
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

  return `${artistName}, age ${age}${deceased ? ' (deceased)' : ''}`; //Turinary operator
};

console.log(getMusicianInfo(frankZappaObj));
// should log: 'Frank Zappa, age 52 (deceased)'

/*
 * 2. Index Signatures
 *
 * To complete this challenge, take a look at the example objects. Make types
 * (using index signatures) that match those objects. You're finished when the red line
 * errors are all gone.
 *
 * Hint:
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
 *
 * Note: You'll see a (probably) unfamiliar directive, '@ts-expect-error', in the code
 * below. This tells TypeScript to explicitly EXPECT and basically disregard any error
 * in whatever code exists on the next line.
 */

type GroceryList = {
  [key:string]:number
}; // update this!

const groceryList: GroceryList = {
  carrots: 5,
  potatoes: 12,
  sweetPotatoes: 2,
  turnips: 1,
  parsnips: 1,
  beets: 10,
  radishes: 2,
  rutabagas: 1,
  onions: 3,
  garlic: 2,

  // @ts-expect-error | the value is a string and not a number
  thisShouldError: "because it's a string",

  // @ts-expect-error | the value is a boolean and not a number
  thisShouldAlsoError: true,
};

type InappropriateActionBySituation = {
  [key:string]:string[] // Or Array<string>
} // update this!

const inappropriateActionBySituation: InappropriateActionBySituation = {
  funeral: [
    'excessive laughter',
    'bringing up personal achievements',
    'insisting everyone joins you in loudly singing the 1991 Queen track "The Show Must Go On"',
  ],
  medicalDiagnosis: [
    'jokes about American healthcare',
    'arguing that WebMD says otherwise',
    'doomscrolling twitter instead of listening',
  ],
  leetcodeInterview: [
    'praise of CSS',
    'citing XKCD comics by number from memory',
    'use of emojis in whiteboard exercises followed by pontificating about your deep knowledge of UTF-16',
  ],
  friendExperiencingHeartbreak: [
    'victory dance because you hated their S.O.',
    'offers to turn on the 1999 cinematic masterpiece, The Mummy, with Brendan Fraser and Rachel Weisz',
  ],

  // @ts-expect-error | the value is a string and not a string array
  romanticDate:
    'checking your phone incessantly for a new Primeagen video to drop',
};


// type CharactersById = {
//   [key:number]: { // This should be number even tho object will convert it to a string
//     id:number, 
//     name:string,
//     status:string,
//     species:string
//   }
// }; // This way is better! than just saying object
type Charcter = {
  id:number, 
    name:string,
    status:string,
    species:string
}

type CharactersById = Record<number, Charcter> //This is the best way!!!
//OR 
//type CharactersById = {
//   [key:string]: object
// };

const charactersById: CharactersById = {
  1: {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
  },
  2: {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
  },
  3: {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
  },
  4: {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
  },
  5: {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
  },

  // @ts-expect-error | the key is a string and not a number
  // (even though the 'number' keys are actually strings under the hood...)
  unity: {
    id: 6,
    name: 'Unity',
    status: 'Alive',
    species: 'Hive Mind',
  },
};

/*
 * 3. Generic Type Arguments
 *
 * To complete this challenge, fill in the right values to eliminate all red line
 * errors in the testing area and make the tests pass.
 *
 * Then, create a new Generic type for GroceryStore.
 *
 * Let the tests guide you in what the final types should look like, and what any
 * inputs should be.
 *
 * Hint:
 * You may find the below resources helpful in understanding how to build Generics.
 * (https://www.typescriptlang.org/docs/handbook/2/generics.html)
 * (https://www.w3schools.com/typescript/typescript_basic_generics.php)
 */

// update these!
type GroceryItem = {
  name:string, 
  price:number,
  inStock:boolean
};
type CapreseSalad = {
  name:'Caprese Salad', 
  price:14.99,
  inStock:true
};
//You need TWO generic parameters (name and city) ahhhhhh i think i follow... 
// We're making a template kinda

// The gerneric will be Name and City so the name and city can be anything mmm this is hard to explain
//so we could put anythign in as generic ? cool... ok ok .. wow
  //Yea basically 
  
//The <Name, City> is like function parameters but for tyoes
  //Name is a placeholder for wtv you pass in and same for City

//{name:Name, city:City} - this is what you get as a result
  //whatever you pass as Name becomes the type of the name property
  //whatever you pass as City becomes the type of the city property
  type GroceryStore<Name, City> = {
    name:Name,
    city:City
  };
/*
 *
 * TESTING AREA FOR #3
 * (don't edit anything below!)
 *
 */

// `Equal<A, B>` checks if types `A` and `B` are identical.
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

// `Expect<T extends true>` ensures that type `T` is exactly `true`.
type Expect<T extends true> = Equal<T, true>;

// GroceryItem & CapreseSalad tests
type test_CapreseSaladName = Expect<
  Equal<CapreseSalad['name'], 'Caprese Salad'>
>;
type test_CapreseSaladPrice = Expect<Equal<CapreseSalad['price'], 14.99>>;
type test_CapreseSaladInStock = Expect<Equal<CapreseSalad['inStock'], true>>;

// GroceryStore tests
type test_KrogerDetroit = Expect<
  Equal<GroceryStore<'Kroger', 'Detroit'>, { name: 'Kroger'; city: 'Detroit' }>
>;
type test_StopNShopMassachusetts = Expect<
  Equal<
    GroceryStore<"Stop 'N Shop", 'Massachusetts'>,
    { name: "Stop 'N Shop"; city: 'Massachusetts' }
  >
>;
