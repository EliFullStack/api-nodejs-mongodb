'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

//GET /apiv1/anuncios
//returns list of ads without filters
router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find();
        res.json({ results: anuncios});
    } catch (err) {
        next(err);
    }   
});

module.exports = router;