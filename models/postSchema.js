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
    created: {type: Date, default: Date.now}
})

postSchema.pre('remove', async function(next){
    try{
        next()
    } catch(err){
        next(err)
    }
    
})
module.exports = mongoose.model('Post', postSchema)