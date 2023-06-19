const readlineSync = require('readline-sync')
const { writeMissionsData } = require('./utils/fsUtils')

async function main() {
  const name = readlineSync.question('Qual é o nome da missão? ')
  const year = readlineSync.questionInt('Qual é o ano da missão? ')
  const country = readlineSync.question('Qual é o país da missão? ')
  const destination = readlineSync.question('Qual é o destino da missão? ')

  const newMission = {
    name,
    year: String(year),
    country,
    destination,
  }

  writeMissionsData(newMission)

  console.log('Nova missão registrada com sucesso!')
}

main()
