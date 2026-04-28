const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const materiasRoute = require("./routes/materias.route")
const profesoresRoute = require("./routes/profesores.route")
const { sequelize } = require("./models")

app.use(express.json())
app.use(materiasRoute)
app.use(profesoresRoute)

app.listen(PORT, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1)
  }
  sequelize.sync({ force: true })
  console.log(`Aplicacion iniciada en el puerto ${PORT}`)
});
