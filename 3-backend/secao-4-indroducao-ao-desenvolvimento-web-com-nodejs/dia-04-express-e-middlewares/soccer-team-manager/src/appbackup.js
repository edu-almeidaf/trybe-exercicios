// const express = require('express');
// require('express-async-errors');
// const morgan = require('morgan');
// const cors = require('cors');
// const helmet = require('helmet');
// const teamsRouter = require('./routes/teamsRouter');
// const rateLimit = require('express-rate-limit');
// const existingId = require('./middlewares/existingId');
// const validateTeam = require('./middlewares/validateTeam');
// const apiCredentials = require('./middlewares/apiCredentials');

// const app = express();
// app.use(morgan('dev'));
// app.use(cors());
// app.use(express.json());
// app.use(apiCredentials);
// app.use(helmet);
// app.use('/teams', teamsRouter);

// const limiter = rateLimit({
//   max: 100,
//   windowMs: 15 * 60 * 1000,
//   message: 'Muitas requisições originadas deste ip',
// });

// app.use(limiter);

// const teams = [
//   {
//     id: 1,
//     name: 'São Paulo Futebol Clube',
//     initials: 'SPF',
//   },
//   {
//     id: 2,
//     name: 'Clube Atlético Mineiro',
//     initials: 'CAM',
//   },
// ];

// app.get('/teams', (req, res) => res.status(200).json({ teams }));

// app.get('/teams/:id', existingId, (req, res) => {
//   const { id } = req.params;

//   const findTeam = teams.find((team) => team.id === Number(id));

//   if (!findTeam) {
//     res.status(404).json({ message: 'Team not found' });
//   }

//   res.status(200).json({ findTeam });
// });

// app.post('/teams', validateTeam, (req, res) => {
//   if (!req.teams.teams.includes(req.body.sigla) &&
//   teams.every((t) => t.sigla !== req.body.sigla)) {
//     return res.status(422).json({ message: 'Já existe um time com essa sigla' });
//   };
  
//   const newTeam = { 
//     id: teams[teams.length - 1].id + 1,
//     ...req.body
//   };
//   teams.push(newTeam);

//   return res.status(201).json({ team: newTeam });
// });

// app.put('/teams/:id', existingId, validateTeam, (req, res) => {
//   const { id } = req.params;

//   const updateTeam = teams.find((team) => team.id === Number(id));

//   if (!updateTeam) {
//     res.status(404).json({ message: 'Team not found' });
//   }

//   const index = teams.indexOf(updateTeam);
//   const updated = { id: Number(id), ...req.body }
//   teams.splice(index, 1, updated)
//   res.status(201).json({ updated });
// });

// app.delete('/teams/:id', existingId, (req, res) => {
//   const { id } = req.params;
//   const arrayPosition = teams.findIndex((team) => team.id === Number(id));

//   if (arrayPosition === -1) {
//     res.status(404).json({ message: 'Team not found' });
//   }

//   teams.splice(arrayPosition, 1);

//   res.status(204).end();
// });

// app.use((err, _req, _res, next) => {
//   console.error(err.stack);
//   next(err);
// });

// app.use((err, _req, res, _next) => {
//   res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
// });

// module.exports = app;