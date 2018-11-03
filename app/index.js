const express = require('express');

const app = express();
const server = require('http').Server(app);
const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Listening ${PORT}`)
});