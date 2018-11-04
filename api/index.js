const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({limit:'50mb',extended: true}));

const PORT = 8080;
const CRUDMaker = require('./CRUDMaker')(app,'a');


CRUDMaker.addEndpoint('api/todo');
//CRUDMaker.addEndpoint('api/user');
//CRUDMaker.addEndpoint('api/another');


server.listen(PORT, () => {
    console.log(`Listening ${PORT}`)
});