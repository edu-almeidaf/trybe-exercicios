const express = require('express');
const existingId = require('../middlewares/existingId');
const validateTeam = require('../middlewares/validateTeam');
const apiCredentials = require('../middlewares/apiCredentials');

const router = express.Router();

router.use(apiCredentials);

const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];


router.get('/', (req, res) => res.status(200).json({ teams }));;


router.get('/:id', existingId, (req, res) => {
  const { id } = req.params;

  const findTeam = teams.find((team) => team.id === Number(id));

  if (!findTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  res.status(200).json({ findTeam });
});

router.post('/', validateTeam, (req, res) => {
  if (!req.teams.teams.includes(req.body.sigla) &&
  teams.every((t) => t.sigla !== req.body.sigla)) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  };
  
  const newTeam = { 
    id: teams[teams.length - 1].id + 1,
    ...req.body
  };
  teams.push(newTeam);

  return res.status(201).json({ team: newTeam });
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const { id } = req.params;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  const index = teams.indexOf(updateTeam);
  const updated = { id: Number(id), ...req.body }
  teams.splice(index, 1, updated)
  res.status(201).json({ updated });
});

router.delete('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  if (arrayPosition === -1) {
    res.status(404).json({ message: 'Team not found' });
  }

  teams.splice(arrayPosition, 1);

  res.status(204).end();
});

module.exports = router;