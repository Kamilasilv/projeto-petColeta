const express = require('express')
const router = express.Router()
const controller = require("../controller/pessoasController")

//ver todas as pessoas cadastradas
router.get("/todos", controller.Allpessoas)

//cadastrar pessoa em algum ponto de coleta
router.post("/cadastroColeta", controller.criarCadastro)

//deletar pessoa existente do ponto de coleta
router.delete("/deletar/:id", controller.deletePessoa)

//editar nome da pessoa cadastrada
router.patch("/atualiza-nome/:id", controller.atualizaNome)

//editar qualquer dado da pessoa cadastrada
router.put("/atualizar/:id", controller.atualizar)

module.exports = router