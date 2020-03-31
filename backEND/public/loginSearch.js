const route = require('express').Router()
var MAIN_module_variables = require('../server.js')

var path = require('path')
route.get('/', function (req, res) {
    res.send(customers)
})

route.post('/', function (req, res) {
    var email= req.body.email;
    var mobileno = req.body.mobileno;
    
    var model1 = MAIN_module_variables.CUSTOMER_MODEL
    
    model1.findOne({'email':email,'mobileno':mobileno}}, function(err,obj) { console.log(obj); });
    if(obj){ res.sendFile(path.resolve('public/homePage/homePage.html'))
}
else{
    res.sendFile(path.resolve('public/homePage/login.html')
}
   
})

module.exports = route

