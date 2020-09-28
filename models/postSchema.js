const mongoose = require('mongoose')

//post Schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    img:
    {
        contentType: String,
        size: Number,
        name: String,
        path: String
    },
    imgDesc: String,
})

module.exports = mongoose.model('Post', postSchema)