'use strict';

const express = require('express');
const Anuncio = require('../../models/Anuncio');

const router = express.Router();



//GET /apiv1/anuncios

router.get('/', async (req, res, next) => {
    try {
        //filters
        const name = req.query.name;
        const tag = req.query.tag;
        const sale = req.query.sale;
        const price = req.query.price;
        
        

        //pagination
        const skip = req.query.skip;
        const limit = req.query.limit;

        //fields selection
        const fields = req.query.fields;

        //sorting
        const sort = req.query.sort;


        const filter = {};

        if (name) {
            filter.name = new RegExp('^' +
            req.query.name, "i");
        }

        if (sale) {
            filter.sale = sale;
        } 

        if (tag === "lifestyle") {
            filter.tags = tag;
        }

        if (tag === "work") {
            filter.tags = tag;
        }

        if (tag === "motor") {
            filter.tags = tag;
        }

        if (tag === "mobile") {
            filter.tags = tag;
        }

        if (price) {
            filter.price = price;
        }

        const anuncios = await Anuncio.list(filter, skip, limit, fields, sort);
        res.json({ results: anuncios});
    } catch (err) {
        next(err);
    }   
});

//POST /apiv1/anuncios (body=anuncioData)
//creates a new ad
router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body;
        const anuncio = new Anuncio(anuncioData);
        const anuncioGuardado = await anuncio.save();
        res.json({ result: anuncioGuardado});
    } catch (err) {
        next(err);
    }
});


module.exports = router;