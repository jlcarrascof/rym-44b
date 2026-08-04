const express = require('express');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/rickandmorty', router);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Express Server is running!' });
});

// Catch-all 404 handler for unmatched endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global 500 error handler middleware
app.use(errorHandler);

module.exports = app;
