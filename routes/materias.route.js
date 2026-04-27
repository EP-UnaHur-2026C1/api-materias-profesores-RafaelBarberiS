const {Router} = require('express')
const {getMaterias, getMateriaById} = require('../controllers/materias.controller')

const route = Router()

route.get('/materias', getMaterias)
route.get('/materias/:id', getMateriaById)

module.exports = route