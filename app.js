
require("dotenv").config(); 

const express = require('express');
const cors = require('cors');
const passport = require('./controllers/passportController')
const app = express();
app.use(express.json());
app.use(cors());

const routes = require('./routes/authroute');

app.use("/api", routes,passport.initialize());

module.exports = app;
