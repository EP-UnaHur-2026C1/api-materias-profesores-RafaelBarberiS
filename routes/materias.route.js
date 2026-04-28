const { Router } = require("express")
const {
  getMaterias,
  getMateriaById,
  createMateria,
  updateMateria,
  deleteMateria
} = require("../controllers/materias.controller")

const route = Router()

route.get("/materias", getMaterias)
route.get("/materias/:id", getMateriaById)
route.post("/materias", createMateria)
route.put("/materias/:id", updateMateria)
route.delete("/materias/:id", deleteMateria)

module.exports = route
