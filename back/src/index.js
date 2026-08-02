require('dotenv').config({ path: '../.env' });
const app = require('./app');

const PORT = process.env.PORT || 3001;
const HOST = process.env.DB_HOST || 'localhost';

app.listen(PORT, () => {
  console.log(`Server Express running at http://${HOST}:${PORT}`);
});
