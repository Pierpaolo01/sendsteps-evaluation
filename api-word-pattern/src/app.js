const express = require('express');

const routes = require('./routes/index.js');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('listening on port: 3333')
})

module.exports = app

