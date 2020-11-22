const express = require('express')
const mogoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const expressSanitizer = require('express-sanitizer')
const PORT = 5000
//admin auth
const passport = require('passport')
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
//MODELS
const Admin = require('./models/adminSchema')
const Post = require('./models/postSchema')
//ROUTES
const adminRoute = require('./routes/adminRoute')
const apiRoute = require('./routes/apiRoute')
const blogRoute = require('./routes/blogRoute')

//instantiate express
const app = express()

//setup ejs as default template engine
app.set('view engine', 'ejs')

//method override
app.use(methodOverride('_method'))

//use express sanitizer
app.use(expressSanitizer());

//use bodyparser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('static'))

//PASSPORT / AUTH DEPENDENCIES
app.use(require('express-session')({
    secret: 'secret tangina ka',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//ENCODING AND DECODING
passport.serializeUser(Admin.serializeUser())
passport.deserializeUser(Admin.deserializeUser())
passport.use(new LocalStrategy(Admin.authenticate()))

//To add user data in all routes - adding middleware
app.use((req,res,next)=> {
    res.locals.currentUser = req.user
    next()
})

//connect to Mongoose
mogoose
    .connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log('Connected to MongoDB')})
    .catch((err)=>{console.log(err)})

 
//use Routes
app.use(adminRoute)
app.use(blogRoute)
app.use(apiRoute)



//INIT SERVER
app.listen(PORT, ()=> {
    console.log(`Server connected to port: ${PORT}`)
})


