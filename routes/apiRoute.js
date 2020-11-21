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

//SSL
router.get('/wellknown', (req,res) => {
    res.send('935E7AB8207AF8DC23EF3F691881A0134D00275768BE9A16FCDAC881887647A9 comodoca.com 5fb945bd5e532')

    // pki-validation/C7E1B56D6764A35CF89817BC41159377.txt
})

module.exports = router;