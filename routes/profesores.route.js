const { Router } = require('express')

const controllers = require("../controllers/profesores.controller") /*otra forma de tener los controles*/
const route = Router()

route.get('/profesores', (req, res) => {
    res.status(200).json({message: 'Aca los profesores'})
})

module.exports = route