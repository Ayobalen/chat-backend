const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect( process.env.MONGO_URL).then (function () {
  console.log("Database connected successfully");
}) .catch (function (err) {
  console.log("Database connection failed");
})
