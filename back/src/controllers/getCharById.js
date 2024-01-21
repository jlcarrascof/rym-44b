const axios = require('axios');
const { urlCharacterId } = require('../utils/reusable');

function getCharById(res, id) {
    axios(urlCharacterId(id))
    .then((res) => console.log(res)) 
    .catch((err) => console.log(err));        
}

module.exports = getCharById;
