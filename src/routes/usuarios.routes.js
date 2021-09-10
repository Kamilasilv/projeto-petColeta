const express = require('express')
const router = express.Router()
const controller = require("../controller/usuariosController")

router.get("/todos", controller.getAllPeople)

router.get("/coleta", controller.getAllCollect)

 router.post("/cadastroColeta", controller.createRegistration)

 router.delete("/delete/:id", controller.deletePeople)

 router.patch("/atualizarnome/:id", controller.updateName)

 router.put("/atualizatudo/:id", controller.updateAnything)

module.exports = router