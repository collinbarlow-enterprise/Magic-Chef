const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: String,
    // double check how to use a created at date
    date: {type: Date},
    recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'},
    comments: {type: Schema.Types.ObjectId, ref:'Comment'}

});

module.exports = mongoose.model("Post", postSchema)