const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pantrySchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: String,
    // double check how to use an empty array
    ingredients: [String],
    cuisine: String

});

module.exports = mongoose.model("Pantry", pantrySchema)