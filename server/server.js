require("dotenv").config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const http_error = require('http-errors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(process.env.DB_URI);

const apiRoutes = require('./routes/api')

app.use("/api", apiRoutes)

app.use(async (req, res, next) => {
    next(http_error.NotFound("This route does not exist."));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(process.env.PORT || 4000, () => {
    console.log("listening on port " + process.env.PORT || 4000);
});