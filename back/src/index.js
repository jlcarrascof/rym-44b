require('dotenv').config();
const { PORT, HOST } = process.env;
const http = require('http');
const characters = require('./utils/data');
const getCharById = require('./controllers/getCharById');
const { headers } = require('./utils/reusable');
http.
    createServer((req, res) => {
        const { url } = req;
        if (url.includes("/rickandmorty/character")) {
            const id = url.split("/").at(-1);
            getCharById(res, id);
        } else {
            res.writeHead(404, headers);
            const obj = {
                message: "Aún no tengo nada para esta ruta"
            };
            res.write(JSON.stringify(obj));
            res.end();
        }   

}).listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
