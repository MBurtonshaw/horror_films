const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    console.log('titles');
});

module.exports = app;