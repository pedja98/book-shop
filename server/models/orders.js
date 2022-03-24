const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    order_number: {
        type: Number,
        unique: true,
        required: true,
    },
    creation_date: {
        type: Date,
        required: true,
    },
    rejected: {
        type: Boolean,
        default: false,
    },
    canceled: {
        type: Boolean,
        default: false,
    },
    delivered: {
        type: Boolean,
        default: false,
    }
});

const Orders = mongoose.model('Orders', ordersSchema, 'Orders');

module.exports = { Orders };