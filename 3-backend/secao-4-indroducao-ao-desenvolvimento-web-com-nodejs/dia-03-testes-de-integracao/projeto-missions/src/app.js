const express = require('express')
const {
  readMissionsData,
  writeMissionsData,
  updateMissionData,
  deleteMissionData,
} = require('./utils/fsUtils')

const app = express()
app.use(express.json())

app.get('/missions', async (req, res) => {
  const missions = await readMissionsData()
  return res.status(200).json({ missions })
})

app.post('/missions', async (req, res) => {
  const newMission = req.body

  const newMissionWithId = await writeMissionsData(newMission)

  return res.status(201).json({ mission: newMissionWithId })
})

app.put('/missions/:id', async (req, res) => {
  const { id } = req.params
  const updatedMissionData = req.body

  const updatedMission = await updateMissionData(Number(id), updatedMissionData)

  return res.status(201).json({ mission: updatedMission })
})

app.delete('/missions/:id', async (req, res) => {
  const { id } = req.params

  await deleteMissionData(Number(id))

  return res.status(204).end()
})

module.exports = app
