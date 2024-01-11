/*

Part One
 
 */

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isNotOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Checks if each number is divisible by 5 and sore the result in variable
// prints variable to see result
let isDivisibleByFive = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(isDivisibleByFive);

// checks if first number is larger than fourth number and prints result
let firstLargerThanLast = n1 > n4;
console.log(firstLargerThanLast);

// here is a math chain and prints the remainder with the modulus operator
mathChain = ((n2 - n1) * n3) % n4;
console.log(mathChain);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

/*

Part Two
 
 */

// here is the slow speed miles per hour and miles per gallon values
let slowSpeed = 55;
let slowspeedMilesPerGallon = 30;

// here is the medium speed miles per hour and miles per gallon values
let mediumSpeed = 60;
let mediumSpeedMilesPerGallon = 28;

// here is the fast speed miles per hour and miles per gallon values
let fastSpeed = 75;
let fastSpeedMilesPerGallon = 23;

// here is the total budget and average gallon price value
let budget = 175;
let averageGallonCost = 3;


// here we determine how many gallons we need for the trip based on a 1500 mile range and based on the speed
// you are going
let slowGallonsNeeded = 1500 / slowspeedMilesPerGallon;
let mediumGallonsNeeded = 1500 / mediumSpeedMilesPerGallon
let fastGallonsNeeded = 1500 / fastSpeedMilesPerGallon;

// here we determine that if you go at a constant speed, we multiply the price per gallon on the gallons total for that speed and distance
// and we see if it's within our budget or not. It stores a true or false value in the "isBudgetEnough" variable
let isBudgetEnoughSlow = budget >= averageGallonCost * slowGallonsNeeded;
let isBudgetEnoughMedium = budget >= averageGallonCost * mediumGallonsNeeded;
let isBudgetEnoughFast = budget >= averageGallonCost * fastGallonsNeeded;

// here we determine how many hours the trip is going to take based on the speed we are going
let timeForTripSlow = 1500 / slowSpeed;
let timeForTripMedium = 1500 / mediumSpeed;
let timeForTripFast = 1500 / fastSpeed;

//here I am sending all of the data findings to the log formatted
console.log(`How many gallons of fuel will you need for the entire trip?:\nfor the slow speed you need ${slowGallonsNeeded} gallons\nFor medium speed you need ${mediumGallonsNeeded} gallons\nFor fast speed you need ${fastGallonsNeeded} gallons`);
console.log(`Will your budget be enough to covor your fuel expense?\nIf going at the slowest speed, and assuming 3 dollars a gallon being able to cover fuel expense is: ${isBudgetEnoughSlow}\nIf you are going at medium speed being able to cover fuel expense is: ${isBudgetEnoughMedium}\nIf you are going at fast speed being able to cover fuel expense is: ${isBudgetEnoughFast}`)
console.log(`How long will the trip take in hours?\nGoing at the slowest speed it will take ${timeForTripSlow} hours\nGoing at the medium speed it will take ${timeForTripMedium} hours\nGoing at the fastest speed it will take ${timeForTripFast} hours`);
console.log("If you want to save the most time while being within budget trying to stay at 60mph for most of trip will get you there the quickest while staying within budget.")

