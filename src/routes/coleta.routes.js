const express = require('express')
const router = express.Router()
const controller = require("../controller/coletaController")

//listar todos os pontos de coleta
router.get("/todos", controller.getAll)

//listar ponto de coleta por id
router.get("/:id", controller.getById)

//deletar um ponto de coleta por id (validação)
router.delete(":id/delete", controller.deleteColeta)

//atualizar um ponto de coleta por id(validação)
router.put("/atualizar/:id", controller.atualizaColeta)

module.exports = router