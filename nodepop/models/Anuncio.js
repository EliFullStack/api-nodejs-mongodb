'use strict';

const mongoose = require('mongoose');

const appTags = ["work", "lifestyle", "motor", "mobile"];

const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: { type: Array, Default: appTags}
    
});

anuncioSchema.statics.list = function(filter, skip, limit, fields, sort) {
    const query = Anuncio.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec()
};

anuncioSchema.statics.tagsList = function() {
    const tags = appTags;

    return tags
}

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;