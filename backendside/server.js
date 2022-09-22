const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config

mongoose.connect();


app.listen(4000, () => console.log("Server is runing on prot 4000"))