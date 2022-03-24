const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chartsSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    items: [{
        type: ObjectId,
        ref: 'Books'
    }
    ],
    count: {
        type: Number,
        default: 0,
    }
});

const Charts = mongoose.model('Charts', chartsSchema, 'Charts');

module.exports = { Charts };