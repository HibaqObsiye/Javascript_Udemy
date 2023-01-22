'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;

// if(hasDriversLicense) console.log('I can drive')

// function logger(){
//     console.log("My name is")
// }
// logger(); // calling/running/invoking
// logger();
// logger();

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice;
}
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

// //function declaration
// const age1= calcAge1(1991);

// function calcAge1(birthYeah){  //parameter is the placeholder
//     const age = 2037 - birthYeah;
//     return age;
// }
// // const age1= calcAge1(1991); //argument is the actual value we use to fill in the placeholder
// console.log(age1)

// //function expression: stored in a variable
// const age2 = calcAge2(1991);
// const calcAge2 = function (birthYeah){
//     return 2037 - birthYeah
// }
// // const age2 = calcAge2(1991);
// console.log(age1, age2)

// // in javascript, function is a value

// //arrow function 

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years `
}
console.log(yearsUntilRetirement(1991, 'james'))