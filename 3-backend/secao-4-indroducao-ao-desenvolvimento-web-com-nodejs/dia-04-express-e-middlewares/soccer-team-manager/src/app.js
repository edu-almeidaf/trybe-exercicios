const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const teamsRouter = require('./routes/teamsRouter');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet);

const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: 'Muitas requisições originadas deste ip',
});

app.use(limiter);

app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;