const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const discountsSchema = new Schema({
    procent: {
        type: Number,
        required: true
    },
    event: {
        type: ObjectId,
        required: true
    }
});

const Discounts = mongoose.model('Discounts', discountsSchema, 'Discounts');

module.exports = { Discounts };