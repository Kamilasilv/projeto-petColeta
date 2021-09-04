const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const index = require("../src/routes/index");
const coletaRoutes = require("../src/routes/coleta.routes")
const pessoasRoutes = require("../src/routes/pessoas.routes")


const db = require("../src/data/database")
db.connect()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/",index )
app.use("/coletas",coletaRoutes)
app.use("/pessoas",pessoasRoutes)

module.exports = app