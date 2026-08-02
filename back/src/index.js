require('dotenv').config({ path: '../.env' });
const app = require('./app');
const { conn } = require('./DB_connection');

const PORT = process.env.PORT || 3001;
const HOST = process.env.DB_HOST || 'localhost';

conn.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully with PostgreSQL');
    app.listen(PORT, () => {
      console.log(`Server Express running at http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err.message);
  });
