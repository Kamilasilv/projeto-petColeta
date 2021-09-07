const express = require('express')
const router = express.Router()
const controller = require("../controller/usuariosController")

router.get("/todos", controller.getAllPeople)

router.get("/derbyColeta", controller.getAllDerby)

 router.post("/cadastroColeta", controller.createRegistration)

 router.delete("/deletar/:id", controller.deletePeople)

 router.patch("/atualizarnome/:id", controller.updateName)

module.exports = router