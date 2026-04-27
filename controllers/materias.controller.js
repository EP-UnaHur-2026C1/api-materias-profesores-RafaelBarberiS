const {Materia} = require('../models')

const getMaterias = async (req, res)=>{
  const materias = await Materia.findAll({}) 
  console.log(materias)
    res.status(200).json(materias)
}
const getMateriaById = (req, res)=>{
    const id = req.params.id
    res.status(200).json({id})
}

module.exports = {getMaterias, getMateriaById}