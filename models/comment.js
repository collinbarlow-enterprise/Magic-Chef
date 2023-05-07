const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: String,
    // double check how to use a created at date
    date: {type: Date},
    contents: String

});

module.exports = mongoose.model("Comment", commentSchema)