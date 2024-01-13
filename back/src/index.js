const http = require('http');
const data = require('./utils/data');

http.createServer((req, res) => {
    const { url } = req;
    // console.log(url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes('/rickandmorty/character')) {
        const id = url.split('/').at(-1);
        const character = data.find((char) => char.id === parseInt(id));
        // console.log(character);
        if (character) {

        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Character not found' }));
        }    
    }
}).listen(3001, "localhost");

