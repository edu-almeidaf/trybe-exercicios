require('dotenv').config()
const app = require('./app')

const connection = require('./db/connection')

app.listen(3001, async () => {
  console.log('Servidor rodando na porta 3001')

  const [result] = await connection.execute('SELECT 1')

  if (result) {
    console.log('MySQL Connection OK!')
  }
})
