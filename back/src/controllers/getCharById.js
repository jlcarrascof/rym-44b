const axios = require('axios');
const { urlCharacterId } = require('../utils/reusable');

function getCharById(res, id) {
    axios(urlCharacterId(id))
    .then((res) => res.data)
    .then((character) => { 
        console.log(character) 
    }) 
    .catch((err) => console.log(err));        
}

// then retorna una nueva promesa.
// como?
// map retorna un nuevo arreglo? porque? porque quien creo el metodo asi lo definio.

module.exports = getCharById;
