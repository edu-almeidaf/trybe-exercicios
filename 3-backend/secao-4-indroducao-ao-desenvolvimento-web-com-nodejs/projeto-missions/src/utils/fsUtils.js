const fs = require('fs').promises
const path = require('path')

const MISSION_DATA_PATH = '../../data/missions.json'

async function readMissionsData() {
  const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH))

  const missions = JSON.parse(data)

  return missions
}

async function writeMissionsData(newMission) {
  const oldMissions = await readMissionsData()
  const newMissionWithId = {
    id: oldMissions[oldMissions.length - 1].id + 1,
    ...newMission,
  }
  const allMissions = JSON.stringify(
    [...oldMissions, newMissionWithId],
    null,
    2,
  )

  await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions)

  return newMissionWithId
}

async function updateMissionData(id, updatedMissionData) {
  const oldMissions = await readMissionsData()
  const updatedMission = { id, ...updatedMissionData }

  const updatedMissions = oldMissions.reduce((missionsList, currentMission) => {
    if (currentMission.id === updatedMission.id) {
      return [...missionsList, updatedMission]
    }
    return [...missionsList, currentMission]
  }, [])

  const updatedData = JSON.stringify(updatedMissions, null, 2)

  await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updatedData)
  console.log(`Atualizou missão com o id ${id}`)

  return updatedMission
}

async function deleteMissionData(id) {
  const oldMissions = await readMissionsData()
  const updatedMissions = oldMissions.filter((mission) => mission.id !== id)

  const updatedData = JSON.stringify(updatedMissions, null, 2)

  await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updatedData)
  console.log(`Deletou a missão com o id ${id}`)
}

module.exports = {
  readMissionsData,
  writeMissionsData,
  updateMissionData,
  deleteMissionData,
}
