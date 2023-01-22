const country = "Somalia"
const continent = "Africa"
let population = 29

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false
isIsland = false
let language = "english"

if(population < 50 && language === "english" && isIsland === false ){
    "You should live in portugal"
}
else{
    "Portugal does not meet the criteria"
}

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

let firstCountry = population / 2
let secondCountry = population / 2 
let finland = 6000000
let countryPop = 33000000
console.log(firstCountry + 1)

console.log(firstCountry > finland)
console.log(firstCountry > countryPop)


let description = `${country} is in  ${continent} and its ${population} people speak ${language}`
console.log(description)

var jobs = 'programmer'
jobs = 'teacher'

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK  */

const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;

// console.log(markBMI)

const johnWeight = 92
const johnHeight = 1.95

const johnBMI = johnWeight / johnHeight ** 2

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI,johnBMI, markBMI)

if( markBMI > johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`)
}
else{
    console.log("John's BMI is higher than Mark's")
}

if (population > 33) {
    console.log("Portugal's population is above average")
} else {
    console.log("Portugal's population is 22 million below average")
}

console.log('9' - '5');
console.log('19' - '13' + '17')
console.log('19' - '13' + '17')
console.log('47' < 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)

// numNeighbours = Number(prompt('how many neighbour countries does your country have?'))
// if(numNeighbours === 1){
//     console.log(`only ${numNeighbours} border`)
// }
// else if(numNeighbours > 1){
//     console.log(`More than ${numNeighbours} border`)
// }
// else{
//     console.log(`No borders`)
// }

const popCriteria = population < 30
const langCriteria = language === 'english'
const islandCritera = isIsland != true

if(popCriteria && langCriteria && islandCritera){
    console.log('You should live in Portugal')
}
else{
    console.log('Portugal does not meet your criteria')
}

dolphinAverage = (96 + 108 + 89) / 3
koalaAverage = ( 88 + 99 + 110) / 3

if(dolphinAverage > koalaAverage){
    console.log(`dolphin is winner ${dolphinAverage}`)
}
else if (koalaAverage > dolphinAverage){
    console.log(`koala is winner ${koalaAverage}`)
}
else{
    console.log(`it is a draw`)
}

