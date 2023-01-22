// let js = "amazing";
// if(js === "amazing"){alert("javascript is fun!")};  
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas")

// let firstName = "Maltida"
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// let javascriptIsFun = true;
// javascriptIsFun = "hibaq"
// console.log(javascriptIsFun)
// console.log(typeof javascriptIsFun)
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// let year;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);

let ageJonas = 2037 - 1991;
let ageSarah = 2037 - 2018;

let x = 10 + 5; //15
x += 10;  //x = x + 10
x *= 4; //x = x * 4 = 100
x++ // x = x+ 1
x--
console.log(x)

console.log(ageSarah * 2, ageJonas / 10, 2 ** 2)
// 2 ** 2 means 2 the power of 2

const firstName = 'Jonas';
const lastName = 'smith'
console.log(firstName + " " + lastName)


const job = 'teacher';
const birthYear = 1991;
const year = 2037
const jonas = `I'm  + firstName + a +  ${year - birthYear } +  year ${job}`
console.log(jonas)

const list = `I am a great person
                how are you`
console.log(list)

const age = 18;



if(age >= 18){
    console.log('sarah can start driving license')
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}
let century;
if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;
}
console.log(century);

const inputYear = '1991' // original value is not converted

console.log(Number(inputYear), inputYear)

console.log(Number('Jonas') + 18)
console.log(typeof NaN)
console.log(String(23))

let n = '1' + 1
n = n - 1
console.log(n)
// 5 falsey values: 0, '', undefined, null NaN

console.log(Boolean(0))

const money = 0

if(money){
    console.log('dont spend it all')
}
else{
    console.log('You should get a job')
}
let height;
console.log(height)
if(height){
    console.log('height is defined')
}


if(age === 18) console.log('you just become an adult')

if(age == 18) console.log('wow')

// // const favourite = Number(prompt("what's your favourite number"));
// console.log(favourite)

// if(favourite === 23){
//     console.log("hello")
// }

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision) // both need to be true for the whole operation to be true
console.log(hasDriversLicense || hasGoodVision) //for or, one variable needs to be true for the whole operation to be true
console.log(!hasDriversLicense)


if(hasDriversLicense && hasGoodVision){
    console.log('sarah is able to drive!')
}
else{
    console.log('someone else should drive')
}
const day = 'wednesday';

switch(day){
    case 'monday': //similar to writing day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
    break // without break, the code continues to go through the code

    case 'tuesday':
        console.log('Prepare theory videos')
    break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples')
    break;
    case 'friday':
    case 'sunday':
        console.log('Enjoy the weekend')
    break;
    default:  //default is the same as writing else
        console.log('Not a valid day!')
}

if (23 > 10){
    const str = '23 is bigger';
}

const ages = 23;

age >= 18 ? console.log('I like to drink water') : console.log("I like to drink milk")