const express = require('express')
const router = express.Router()
const passport = require('passport')
const Admin = require('../models/adminSchema')

//LOGIN ROUTE
router.get('/api/login', (req,res)=> {
    res.render('adminLogin')
})

router.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/blog',
    failureRedirect: '/api/login'
}), (req,res)=> {

})

//LOGOUT ROUTE
router.get('/api/logout', (req,res)=> {
    req.logout()
    res.redirect('/api/login')
})

//isLoggedIn middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/api/login')
}

module.exports = router;