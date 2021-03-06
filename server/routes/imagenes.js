const express = require('express');
const { verificaTokenImg } = require('../middleware/autenticacion')

const fs = require('fs');
const path = require('path');

const app = express();

app.get('/imagen/:tipo/:img', verificaTokenImg, (req, res) => {

    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/${tipo}/${img}`);
    let pathNoImg = path.resolve(__dirname, '../assets/no-img.png');

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        res.sendFile(pathNoImg);
    }
});

module.exports = app;