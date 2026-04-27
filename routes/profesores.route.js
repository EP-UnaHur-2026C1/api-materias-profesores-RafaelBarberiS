const { Router } = require('express')

const route = Router()

route.get('/profesores', (req, res) => {
    res.status(200).json({message: 'Aca los profesores'})
})

module.exports = route