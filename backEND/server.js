const express=require('express')
const server=express()
var mongoose = require('mongoose')
 mongoose.connect('mongodb://localhost:27017/XXXXXXX',{ useNewUrlParser: true,useUnifiedTopology: true })


var customers_schema =mongoose.Schema({
    name :String,
    address:String,
    city:String,
    state:String,
    email:String,
    mobile_no:Number
    
    });


var CUSTOMER_MODEL = mongoose.model('CUSTOMER_MODEL',customers_schema)    



server.use(express.static('public'))


const retailerRoute = require('./routes/retailers')
const customerRoute = require('./routes/customers')
const signup1 = require('./routes/signup1')
const home_route = require('./routes/home_route')


server.use(express.json())
server.use(express.urlencoded({extended: true}))


server.use('/',home_route)

server.post('/check_login',function(req,res){
    var email= req.body.email;
    var mobileno = req.body.mobileno;
    
    var model1 = MAIN_module_variables.CUSTOMER_MODEL
    
//     model1.findOne({'email':email,'mobileno':mobileno}}, function(err,obj) { console.log(obj); });
//     if(obj){ res.sendFile(path.resolve('public/homePage/homePage.html'))
// }
// else{
//     res.sendFile(path.resolve('public/homePage/login.html')
// }
   





});
server.use('/customers', customerRoute)
server.use('/retailers', retailerRoute)
server.use('/signup_data', signup1)

server.use((req, res) => res.send("<h2>404 not found</h2>"))



server.listen(2233)


exports.mongoose = mongoose;
exports.CUSTOMER_MODEL = CUSTOMER_MODEL;

