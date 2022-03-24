const adminRoutes = require('express').Router();
const adminCtrl = require('../controllers/admin');

adminRoutes.post("/test", (req, res) => {
    res.json({
        test: "ADMIN"
    })
})

module.exports = adminRoutes;