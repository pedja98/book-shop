const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const discountsSchema = new Schema({
    procent: {
        type: Number,
        required: true
    },
    event: {
        event_name: {
            type: String,
        },
        start_date: {
            type: Date
        },
        end_date: {
            type: Date
        }
    }
});

const Discounts = mongoose.model('Discounts', discountsSchema, 'Discounts');

module.exports = { Discounts };