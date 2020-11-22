const express = require('express')
const router = express.Router()
const passportLocalMongoose = require('passport-local-mongoose')
const Post = require('../models/postSchema')
//PATH FOR IMAGE UPLOAD
const fs = require('fs')
const path = require('path')
const multer = require('multer')

//use multer to take a photo and upload in in folder called uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './static/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname )
    }
})

const upload = multer({storage: storage})

//SERVER PAGES

//INDEX PAGE - GET
router.get('/api/blog', isLoggedIn, (req,res)=> {
    console.log("Connected to root route")
    Post.find({}, (err, posts)=> {
        if(err){console.log(err)}
        else { res.render('index', {posts:posts}) }
    })

})

//CREATE POST - GET
router.get('/api/blog/new', isLoggedIn, (req,res) => {
    res.render('new')
})

//CREATE POST - POST
router.post('/api/blog', isLoggedIn, upload.single('img'), (req, res)=> {
    console.log("connected to POST API")
    
    const img = {
       contentType: req.file.mimetype,
       size: req.file.size,
       name: req.file.filename,
       path: req.file.path
    }

    //create post
    const post = {
        title: req.body.title,
        content: req.sanitize(req.body.content),
        imgDesc: req.body.imgDesc,
        img: img
    }   
    Post.create(post, (err, data) => {
        if(err) { console.log(err) }
        else {
            data.save() 
            console.log(data)
            res.redirect('blog') 
        }
    })

    
})

//EDIT POST - GET
router.get('/api/blog/:id/edit', isLoggedIn, (req, res) => {
    console.log(req.params.id)
    Post.findById(req.params.id, (err, foundPost)=>{
    console.log(foundPost)
    res.render('edit', {post: foundPost})
    })
})

//EDIT POST - UPDATE
router.put('/api/blog/:id', isLoggedIn, (req,res) => {
    console.log(req.params)
    console.log(req.body.post)
    req.body.post.content = req.sanitize(req.body.post.content)
    Post.findByIdAndUpdate(req.params.id, req.body.post, (err,updatedPost) => {
        if(err) {console.log(err)}
        else {res.redirect('/api/blog')}
    })
})

//DELETE POST - DESTROY
router.delete('/api/blog/:id', isLoggedIn, (req,res) => {
    console.log(req.params.id)
    console.log('Connected to delete request')
    
    Post.findById(req.params.id, (err,post) => {
        if(err) {console.log(err)}
        else {
            console.log(post)
            fs.unlinkSync(post.img.path)
            console.log('deleted image in uploads folder')
            post.remove()
            res.redirect('/api/blog')
        }
    })
})

//isLoggedIn middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/api/login')
}

module.exports = router;
