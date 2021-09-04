const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const db = require("../src/data/database")
db.connect()

const app = express()

app.use(cors())
app.use(express.json())

const coletaRoutes = require("../src/routes/coleta.routes")
app.use("/coletas",coletaRoutes)

const pessoasRoutes = require("../src/routes/pessoas.routes")
app.use("/pessoas",pessoasRoutes)

module.exports = app