require('dotenv').config();
const { URL, API_KEY, QUERY_KEY } = process.env;
const urlCharacterId = (id) => `${URL}/${id}?${QUERY_KEY}=${API_KEY}`;

module.exports = {
    urlCharacterId
};