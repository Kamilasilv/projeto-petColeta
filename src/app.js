const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

app.use(cors())
app.use(express.json())

const coletaRoutes = require("./routes/coleta.routes")
app.use("/coleta",coletaRoutes)

const pessoasRoutes = require("./routes/pessoas.routes")
app.use("/pessoas",pessoasRoutes)

module.exports = app