const express = require('express')
const router = express.Router()
const controller = require("../controller/pessoasController")

//ver todas as pessoas cadastradas
router.get("/todos", controller.getAll)

//cadastrar pessoa em algum ponto de coleta
router.post("/cadastroColeta", controller.criarCadastro)

//deletar pessoa do ponto de coleta

//editar nome da pessoa cadastrada

//editar qualquer dado da pessoa cadastrada


module.exports = router