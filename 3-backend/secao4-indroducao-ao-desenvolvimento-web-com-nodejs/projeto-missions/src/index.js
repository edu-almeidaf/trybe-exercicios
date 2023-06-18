const { readMissionsData } = require('./utils/fsUtils.js')

async function main() {
  const missions = await readMissionsData()
  console.log(missions)
}

main()
