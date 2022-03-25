const moderatorRoutes = require('express').Router();
const moderatorCtrl = require('../controllers/moderator');

moderatorRoutes.post("/add-author", moderatorCtrl.addAuthor)

moderatorRoutes.post("/add-gener", moderatorCtrl.addGener)

module.exports = moderatorRoutes;