const route = require('express').Router()
var path = require('path')

route.get('/',function(req,res){

res.sendFile(path.resolve('public/signup.html'))


})



module.exports = route;