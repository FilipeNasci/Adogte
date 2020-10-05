const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const client = require('./route/clientRoute');

app.use('/client', client);

if (process.env.NODE_ENV != 'development') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'clinet/build/index.html', function (error) {
            if (error) {
                res.status(500).send(error);
            }
        }));
    })
}

app.listen(3000, () => {
    console.log('Runnig');
})