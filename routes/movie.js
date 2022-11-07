const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  _id: ObjectId,
  title: String,
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
