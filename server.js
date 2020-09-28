const express = require('express')
const mogoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 5000
//MODELS
const Post = require('./models/postSchema')

//PATH FOR IMAGE UPLOAD
const fs = require('fs')
const path = require('path')
const multer = require('multer')

//instantiate express
const app = express()

//setup ejs as default template engine
app.set('view engine', 'ejs')

//use bodyparser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('static'))

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

//connect to Mongoose
mogoose
    .connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log('Connected to MongoDB')})
    .catch((err)=>{console.log(err)})

//schema test
// const sample = new Post({
//     title: 'Sample title',
//     content: 'sample content'
// })

// sample.save((err,res)=>{
//     if(err){ console.log('error')}
//     else{ console.log(res) }
// })


//ROUTING

app.get('/', (req,res)=> {
    console.log("Connected to root route")

})

app.get('/api/posts', (req,res)=> {
    console.log("connected to GET POST API")
    Post.find({}, (err, post)=> {
        if(err){console.log(err)}
        else { res.json(post) }
    })
})

app.get('https://api.github.com/users', (req,res) => {
    res.json(res)
})

app.post('/api/posts', upload.single('img'),(req, res)=> {
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
        content: req.body.content,
        imgDesc: req.body.imgDesc,
        img: img
    }   
    Post.create(post, (err, data) => {
        if(err) { console.log(err) }
        else {
            data.save() 
            res.redirect('/') 
        }
    })

    
})


//INIT SERVER
app.listen(PORT, ()=> {
    console.log(`Server connected to port: ${PORT}`)
})


