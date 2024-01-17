const http = require('http');
const PORT = 3001;
const HOST = 'localhost'; // 127.0.0.1
const data = require('./utils/data');
const headers = {   
    "Content-Type" : "text/plain",
    "Access-Control-Allow-Origin": "*",
}; 

http.
    createServer((req, res) => {
        const { url } = req;
        res.writeHead(200, headers);
        res.write('Hola desde el servidor');
        res.end();    
        /*
        if (url.includes('/rickandmorty/character')) {
            const id = url.split('/').at(-1);
            const character = data.find((char) => char.id === parseInt(id));
            if (character) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(character));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Character not found' }));
            }    
        }*/

}).listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
