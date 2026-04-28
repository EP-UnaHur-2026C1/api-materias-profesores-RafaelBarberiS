const { Materia } = require("../models")

const getMaterias = async (req, res) => {
  try {
    const materias = await Materia.findAll({});
    console.log(materias)
    res.status(200).json(materias);
  } catch (err) {
    res.status(500).json({ message: "error al buscar materia" })
  }
}

const getMateriaById = async (req, res) => {
  try {
    const id = req.params.id
    const materia = await Materia.findByPk(id)
    res.status(200).json(materia)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const createMateria = async (req, res) => {
  try {
    const nuevaMateria = req.body;
    const materia = await Materia.create(nuevaMateria)
    res.status(201).json(materia);
  } catch (err) {
    res.status(500).json({ message: "Error al crear materia" })
  }
}

const updateMateria = async (req, res) => {
  try {
    const id = req.params.id
    const actualizacion = req.body
    const materia = await Materia.findByPk(id)
    await materia.update(actualizacion)
    if (!materia) {
      res.status(404).json({ message: "Materia no encontrada" })
      return null
    }
    res.status(200).json(materia);
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar materia" })
  }
}

const deleteMateria = async (req, res) => {
  try{
    const id = req.params.id
    const materia = await Materia.findByPk(id)
    if(!materia){
      res.status(404).json({message:"error al buscar materia"})
      return null
    }
    await materia.destroy()
    res.status(200).json({message:"Materia eliminada correctamente"})
  }catch(err){
    res.status(500).json({message:"Error al eliminar materia"})
  }
}

module.exports = { getMaterias, getMateriaById, createMateria, updateMateria, deleteMateria }
