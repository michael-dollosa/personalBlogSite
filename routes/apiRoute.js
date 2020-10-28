const express = require('express')
const router = express.Router()
const Post = require('../models/postSchema')

//ROUTING
router.get('/api/posts', (req,res)=> {
    console.log("connected to GET POST API")
    Post.find({}, (err, post)=> {
        if(err){console.log(err)}
        else { res.json(post) }
    })
})

router.get('/api/posts/:id', (req,res)=> {
    console.log("connected to GET POST API")
    const params = req.params.id
    Post.findById(params, (err, post)=> {
        if(err){console.log(err)}
        else { res.json(post) }
    })
})

module.exports = router;