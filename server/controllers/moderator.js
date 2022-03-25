const { Authors } = require("../models/authors");
const { Genres } = require("../models/genres");

const addAuthor = (req, res) => {
    const author = new Authors({
        name: req.body.name,
        desc: req.body.desc, 
        pic: null,
    })
    author.save();
    res.status(201).json({
        status: 'created'
    })
}

const addGener = (req, res) => {
    const gener = new Genres({
        name: req.body.name,
    })
    gener.save();
    res.status(201).json({
        status: 'created'
    })
}

module.exports = {
    addAuthor,
    addGener
}