const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/rickandmorty', router);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Express Server is running!' });
});

module.exports = app;
