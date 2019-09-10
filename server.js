const express = require('express');
const app = express();

const server = app.listen(500);

app.use(express.urlencoded({extended: true}));

//Routes
require('./server/config/routes.js')(app);