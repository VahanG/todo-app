const express = require('express');

const app = express();
const server = require('http').Server(app);
const PORT = 8080;

const page = require('./page/page');


app.use('/scripts',express.static('public/scripts'));

app.use(async (req, res, next) => {
    res.end(page());
});

app.use(express.static('public'));

server.listen(PORT, () => {
    console.log(`Listening ${PORT}`)
});