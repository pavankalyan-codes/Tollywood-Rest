const express = require("express");
require("dotenv").config();

const router = express.Router();
const mongoose = require("mongoose");

const Movies = require("../models/movie");

const db = process.env.DB_URL;


mongoose.connect(db, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
  }
});

router.get("/", (req, res) => {
  res.send("From API route");
});

// function addMovie(title) {
//   let user = new Movies();
//   user.title = title;
//   Movies.save(user, function (err, result) {
//     if (err) return res.status(404).send("Unable to process your request");
//     let jsonToken = result._id;
//     return jsonToken;
//   });
// }

// router.get("/addMovie", (req, res) => {
//   addMovie("Testing");
// });

router.get("/getAll", (req, res) => {
  Movies.find({}, function (err, result) {
    if (err) return res.status(404).send("Unable to process your request");
    return res.status(200).send(result.map((x) => x.title));
  });
});

module.exports = router;
