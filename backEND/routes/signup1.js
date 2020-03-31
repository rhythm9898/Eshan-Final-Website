const route = require('express').Router()
var MAIN_module_variables = require('../server.js')

var path = require('path')
route.get('/', function (req, res) {
    res.send(customers)
})

route.post('/', function (req, res) {

    var name = req.body.name;
    var address =req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var email= req.body.email;
    var mobileno = req.body.mobileno;
    
    var model1 = MAIN_module_variables.CUSTOMER_MODEL
    var new_user  = model1({ 'name': name, 'address': address, 'city': city, 'state': state, 'email': email, 'mobile_no': mobileno })
    new_user.save();
    res.sendFile(path.resolve('public/homePage/homePage.html'))

})

module.exports = route

