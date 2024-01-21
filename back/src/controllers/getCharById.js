const axios = require('axios');
const { urlCharacterId } = require('../utils/reusable');

function getCharById(req, res) {
    axios(urlCharacterId(id)).then(res => {console.log(res)});    
}

module.exports = getCharById;
