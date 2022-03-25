const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema({
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
    },
    authors: [{
        type: ObjectId,
        ref: 'Authors'
    }
    ],
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: ObjectId,
        ref: 'Discounts'
    },
    out_of_stock: {
        type: Boolean,
        required: true
    },
    genres: [{
        type: ObjectId,
        ref: 'Genres'
    }
    ],
});

const Books = mongoose.model('Books', booksSchema, 'Books');

module.exports = { Books };