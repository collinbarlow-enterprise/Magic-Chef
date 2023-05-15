const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  ingredients: [String],
  recipeName: String,
  recipeIngredients: [String],
  recipeInstructions: String,
  notes: [{ type: String}]
});

module.exports = mongoose.model("Recipe", recipeSchema)