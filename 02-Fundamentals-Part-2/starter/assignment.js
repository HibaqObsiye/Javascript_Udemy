//Function calling other functions
const percentageOfWorld = (population) => {
    return (population / 7900) * 100
}

const describePopulation = (country, population)=> {
    return `${country} has ${percentageOfWorld(population)}`
}
console.log(describePopulation('china', '1441'))
console.log(describePopulation('UK', '203'))
console.log(describePopulation('Los Angeles', '303'))