'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

router.get('/', (req, res, next) => {
    res.json({});
});

module.exports = router;