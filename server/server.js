const express = require("express");
const cors = require("cors");
const path = require('path');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));

app.use(cors({
    // origin: "http://localhost:3000",
    // methods: ["GET", "POST"],
    credentials: true,
}));

mongoose.set('strictQuery', true);
// Mongoose
const db = require("./app/models");

db.mongoose
  .connect(`mongodb+srv://lyncare:fls2022@lyncare.5ip2vsa.mongodb.net/jungguk?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(8080, () => {
      console.log('Server Start');
    });
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '/build/index.html'));
// });

// routes
require('./app/routes/reservation.routes')(app);
require('./app/routes/admin.routes')(app);

/* All Files - React */
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/build/index.html'));
// });