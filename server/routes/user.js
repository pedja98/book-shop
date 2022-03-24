const userRoutes = require('express').Router();
const userCtrl = require('../controllers/user');

userRoutes.post("/test", (req, res) => {
    res.json({
        test: "USER"
    })
})

module.exports = userRoutes;