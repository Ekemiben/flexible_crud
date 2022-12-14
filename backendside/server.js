const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrl = require('./routes/routes')
const cors = require('cors')

dotenv.config

mongoose.connect(process.env.DATABASE_URI, () => console.log("Database connected"));

// This is bodyPaser
app.use(express.json());
app.use(cors());

app.use('/app', routesUrl)
app.listen(4000, () => console.log("Server is runing on port 4000"))