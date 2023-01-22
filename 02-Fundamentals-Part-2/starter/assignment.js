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

const calcAverage = (scores) => {
    let sum = 0
    for(i = 0; i < scores.length; i++){
      sum += scores[i]   
    }
  return sum / scores.length
  }

const checkWinner = (name1, name2, team1, team2) => {
    let team1Score = calcAverage(team1)
    let team2Score = calcAverage(team2)

   return  team1Score > team2Score ? `${name1} is the winner` : `${name2} is the winner`
}
console.log(checkWinner('dolphin','Koala',[44,23, 71], [65, 54, 49]))