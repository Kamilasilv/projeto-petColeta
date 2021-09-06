const express = require('express')
const router = express.Router()
const controller = require("../controller/usuariosController")

//ver todas as pessoas cadastradas
router.get("/todos", controller.getAllPeople)

// //cadastrar pessoa em algum ponto de coleta
 router.post("/cadastroColeta", controller.createRegistration)

// //deletar pessoa existente do ponto de coleta
 router.delete("/deletar/:id", controller.deletePeople)

// //editar nome da pessoa cadastrada
 router.patch("/atualiza-nome/:id", controller.updateName)

// //editar qualquer dado da pessoa cadastrada
// router.put("/atualizar/:id", controller.updateAnything)

module.exports = router