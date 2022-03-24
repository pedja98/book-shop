const moderatorRoutes = require('express').Router();
const moderatorCtrl = require('../controllers/moderator');

moderatorRoutes.post("/test", (req, res) => {
    res.json({
        test: "MOD"
    })
})

module.exports = moderatorRoutes;