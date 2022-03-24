require("dotenv").config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.DB_URI);

const apiRoutes = require('./routes/api')
app.use("/api", apiRoutes)

app.listen(process.env.PORT || 4000, () => {
    console.log("listening on port " + process.env.PORT || 4000);
});