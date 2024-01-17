require('dotenv').config();
// console.log(process.env);
const { PORT, HOST } = process.env;
const http = require('http');
const characters = require('./utils/data');
const headers = {   
    "Content-Type" : "application/json",
    "Access-Control-Allow-Origin": "*",
}; 

http.
    createServer((req, res) => {
        const { url } = req;
        console.log(req);
        if (url.includes("/rickandmorty/character")) {
            const id = url.split("/").at(-1);
            const character = characters.find((char) => char.id === Number(id));
            res.writeHead(200, headers);
            res.write(JSON.stringify(character));
            res.end();
        } else {
            res.writeHead(404, headers);
            const obj = {
                message: "Aún no tengo nada para esta ruta"
            };
            res.write(JSON.stringify(obj));
            res.end();
        }   
   
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
