const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genresSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    }
});

const Genres = mongoose.model('Genres', genresSchema, 'Genres');

module.exports = { Genres };