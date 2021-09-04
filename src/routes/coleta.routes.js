const express = require('express')
const router = express.Router()
const controller = require("../controller/coletaController")

//listar todos os pontos de coleta
 router.get("/todos", controller.getAllCollections) //ok

// //listar ponto de coleta por id 
 router.get("/:id", controller.collectById) //ok

//criar um ponto de coleta (validação) falta validar
 router.post("/create", controller.createCollectionPoint) //ok

// //deletar um ponto de coleta por id (validação)
 router.delete("/delete/:id", controller.deleteCollectionPoint) //ok

// //atualizar um ponto de coleta por id(validação)
 router.put("/atualizar/:id", controller.updateCollectionPoint)

module.exports = router