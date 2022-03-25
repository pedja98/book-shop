const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    pic: {
        type: String,
    }
});

const Authors = mongoose.model('Authors', authorsSchema, 'Authors');

module.exports = { Authors };