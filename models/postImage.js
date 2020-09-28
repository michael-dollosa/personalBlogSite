const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = new mongoose.model('Image', imageSchema)