const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// not used in this version of Magic Chef

const commentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: String,
    date: {type: Date},
    contents: String

});

module.exports = mongoose.model("Comment", commentSchema)