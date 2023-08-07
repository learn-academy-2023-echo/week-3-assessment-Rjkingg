// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
describe("fibLength", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    expect(fibLength()).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibLength()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// // Expected output: [1, 1, 2, 3, 5, 8]

// //const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// // b) Create the function that makes the test pass.

// // Pseudo code: 
//  //Pseudo Code: 
//   //Start by defining a function that takes an number as a parameter
//   const fibLength = (num) => {
//     if (num < 3) {
//         return ("Number must be greater than 2")
//     }

  
//   //Create an if statement to see if conditions were met (number is greater than 2)
//   //The first two numbers of the expected output are 1,1 , initialize and declare a new array, having 1, 1 as values
//   const fibLength1 = [1,1]

//   //Create a for loop that starting at the index of 2 because arrays are 0 index and index 0 and 1 are already in the array.
//   //The array should check if the number and length are greater than 2
//   //Inside of the loop, we decalre another variable pushNum to calculate the next number. It will added to the sequence of numbers by combining the last two numbers in the array
//   //Using the .push method, we add the numbers to the end of the pushNum array

//   for (let i = 2; i< num; i++) {
//     const pushNum = fibInit[i-1] + fibInit[1-2]
//      fibLength.push(fibLength1) 
     
    
//      }
//      return fibLength1
    
//     }

  //return fiblength

 //Every test that I have done to make the test pass has failed, at first it was that the return was not in the function, and then Test suite failed to run, 
    //- Expected  - 4
   // + Received  + 0
   //I think what is confusing me the most is knowing which constant goes where. I  moved them around quite a bit trying to figure out how to make the test pass

  
  





// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("sortedLeast", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    expect(sortedLeast()).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortedLeast()).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// // //Expected output: [15, 15, 20, 30, 30, 60, 90]

// // const studyMinutesWeek2 = {
// //   sunday: 100,
// //   monday: 10,
// //   tuesday: 45,
// //   wednesday: 60,
// //   thursday: 20,
// //   friday: 15,
// //   saturday: 65
// // }
// // Expected output: [10, 15, 20, 45, 60, 65, 100]


// // b) Create the function that makes the test pass.
//Create a function and declare a variable that takes in an object

const sortedLeast = (object) => {
  const studyMinutesWeek= (studyMinutesWeek1.value)
  studyMinutesWeek1.sort((a,b)=> a-b)
  return sortedLeast
}
// The value is required so we create a variable to store the objects value
//usingh .sort method, we are able to sort the arrValue numbers from least to greatest.

//ERRORS:
//TypeError: Cannot read properties of undefined (reading 'value')

// // Pseudo code:

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

describe("inOrder", () => {
  it("returns an array of the accumulating sum", () => {
    expect(inOrder()).toEqual([100, 83, 60, 51])
    expect(inOrder()).toEqual([250, 161, 261, 165])
    expect(inOrder()).toEqual([])
  })
})


// // const accountTransactions1 = [100, -17, -23, -9]
// // // Expected output: [100, 83, 60, 51]

// // const accountTransactions2 = [250, -89, 100, -96]
// // // Expected output: [250, 161, 261, 165]

// // const accountTransactions3 = []
// // Expected output: []

// // b) Create the function that makes the test pass.
// //Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.



// // Pseudo code:
// //Input: Array of numbers
// //Output: Array of numbers
// //Create  function that takes in array of numbers as the parameter
// //.map() method to iterate over array and adds accumulating sum using appropriate operators
// Values will need to be stored, create a new variable


const inOrder = (arr) => {
const addSum = accountTransactions1.map()
//I was unsure of how to get the accumulating sum. I know that a for loop would be able to loops around until the condition of adding is met but not sure of the syntax. 
//for (let i = 1; i + num) // or something similar is what I was thinking but my tests failed. I want to add [100, -17, -23, -9] for an output of [100, 83, 60, 51].

//Each value 0 index + 1 index... and getting it to appear is what is most confusing.
}