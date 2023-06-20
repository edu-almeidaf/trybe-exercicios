const fs = require('fs').promises;
const path = require('path');

const TOKEN_DATA_PATH = '../../authData.json'

async function apiCredentials(req, res, next) {
  const token = req.header('X-API-TOKEN');
  const authData = await fs.readFile(path.resolve(__dirname, TOKEN_DATA_PATH), { encoding: 'utf-8' });
  const authorized = JSON.parse(authData);

  if (token in authorized) {
    req.teams = authorized[token];
    next();
  } else {
    return res.status(401).send({ message: 'Não autorizado.' })
  }
}

module.exports = apiCredentials;