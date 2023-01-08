'use strict';

const express = require('express');
const Anuncio = require('../../models/Anuncio');


const router = express.Router();

//GET /apiv1/tags
router.get('/', async (req, res, next) => {
    try {
        const tags = await Anuncio.tagsList()
        res.json({results: tags});
    } catch (err) {
        next(err);
    }
    
});

module.exports = router;
