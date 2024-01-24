const axios = require('axios');
const { urlCharacterId, headers } = require('../utils/reusable');

function getCharById(res, id) {
    axios(urlCharacterId(id))
    .then((res) => res.data)
    .then((character) => {
        if (character.name) {
            res.writeHead(200, headers);
            const personaje = {
                id: id,
                name: character.name,
                status: character.status,
                gender: character.gender,
                species: character.species,
                origin: character.origin,
                image: character.image    
            }
            res.write(JSON.stringify(personaje));
            res.end();
        } else {
            throw new Error(`No hay personajes con el id: ${id}`);
        }
    })
    .catch((err) => {
        res.writeHead(400, headers);
        res.write(JSON.stringify({ message: err.message }));
        res.end();
    });        
}

// then retorna una nueva promesa.
// como?
// map retorna un nuevo arreglo? porque? porque quien creo el metodo asi lo definio.

module.exports = getCharById;
