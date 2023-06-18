const fs = require('fs').promises
const path = require('path')

const MISSION_DATA_PATH = '../../data/missions.json'

async function readMissionsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH))

    const missions = JSON.parse(data)

    return missions
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`)
  }
}

async function writeMissionsData(newMission) {
  try {
    const oldMissions = await readMissionsData()
    const allMissions = JSON.stringify([...oldMissions, newMission], null, 2)

    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions)
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`)
  }
}

module.exports = {
  readMissionsData,
  writeMissionsData,
}
