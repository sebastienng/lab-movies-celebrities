//  Add your code here
const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
  title: Schema.Types.String,
  genre: Schema.Types.String,
  plot: Schema.Types.String,
  cast: [{ type: Schema.Types.ObjectId, ref: "Celebrities" }],
});

// declare the model
const Movie = model("Movie", moviesSchema);

// export the model
module.exports = Movie;
