
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/authroute');

app.use(authRoutes);

module.exports = app;
