const apiRoutes = require('express').Router();
const apiCtrl = require('../controllers/api');

const adminRoutes = require('./admin')
const userRoutes = require('./user')
const moderatorRoutes = require('./moderator')

apiRoutes.use("/admin", adminRoutes);
apiRoutes.use("/user", userRoutes);
apiRoutes.use("/moderator", moderatorRoutes);

apiRoutes.post("/sign-up", apiCtrl.signUp);
apiRoutes.post("/sign-in", apiCtrl.signIn);

module.exports = apiRoutes;