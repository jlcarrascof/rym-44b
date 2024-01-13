const http = require('http');

http.createServer((req, res) => {
    const { url } = req;
    // console.log(url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes('/rickandmorty/character')) {
        // res.end('Estoy en la ruta');
        const id = url.split('/').at(-1);
        console.log(id);
    }
}).listen(3001, "localhost");

