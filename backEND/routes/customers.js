const route = require('express').Router()
let customers = [
    {name: "Namish",address:"B-36, Lohia Nagar",city: "Gurugram", state:"U.P.", email:"namishagg2602@gmail.com",mobileNo:"9818686289"},
    {name: "Ritesh",address:"H-36, Kavi Nagar",city: "Darbanga", state:"Jharkhand", email:"eshandhawan51@gmail.com.",mobileNo:"9354772677"},
    {name: "Eshan",address:"B-Block, Bangla Saheb",city: "Bareilly", state:"U.P.", email:"riteshharihar1504@gmail.com",mobileNo:"9897368739"}
]
route.get('/', (req, res) => res.send(customers))
route.post('/', (req, res) => {
    customers.push({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        email: req.body.email,
        mobileNo:req.body.mobileNo
    })
    res.send(customers)
})
route.get('/:id', (req, res) => res.send(customers[req.params.id]))

module.exports = route