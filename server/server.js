require("dotenv").config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.DB_URI);

app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port 3000");
});