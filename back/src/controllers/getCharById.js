const axios = require('axios');
const { urlCharacterId, headers } = require('../utils/reusable');

function getCharById(res, id) {
    axios(urlCharacterId(id))
    .then((res) => res.data)
    .then((character) => { 
        res.writeHead(200, headers);
        res.write(JSON.stringify(character));
        res.end();
    })
    .then((data) => { console.log(data) }) 
    .catch((err) => console.log(err));        
}

// then retorna una nueva promesa.
// como?
// map retorna un nuevo arreglo? porque? porque quien creo el metodo asi lo definio.

module.exports = getCharById;
