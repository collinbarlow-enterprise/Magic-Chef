// put reviews directly inside recipe

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  ingredients: [String],
  recipeName: String,
  recipeIngredients: [String],
  recipeInstructions: String,
//   double check how reviews/postings work for embedded/referenced
  notes: [{ type: String}]
  // notes: {type: Schema.Types.ObjectId, ref: 'Notes'},
});

module.exports = mongoose.model("Recipe", recipeSchema)