const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    premium: {
        type: Boolean,
    }
});

const Users = mongoose.model('Users', usersSchema, 'Users');

module.exports = { Users }
