//  Add your code here
const { Schema, model } = require("mongoose");

const celebritiesSchema = new Schema({
  name: Schema.Types.String,
  occupation: Schema.Types.String,
  catchPhrase: Schema.Types.String,
});

// declare the model
const Celebrity = model("Celebrities", celebritiesSchema);

// export the model
module.exports = Celebrity;
