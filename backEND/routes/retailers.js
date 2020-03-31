const route = require('express').Router()

let retailers = [
    {name: "Ritesh", city: "Darbanga", state:"Jharkhand", wantToSell:"T.V."},
    {name: "Namish", city: "Gurugram", state:"U.P.", wantToSell:"Laptops"}
]

route.get('/', (req, res) => res.send(retailers))
route.get('/add', (req, res) => {
    teachers.push({
        name: req.body.name,
        city: req.body.city,
        state: req.body.state,
        wantToSell: req.body.wantToSell,
    })
    res.send(retailers)
})
route.get('/:id', (req, res) => res.send(retailers[req.params.id]))




module.exports = route