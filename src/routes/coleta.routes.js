const express = require('express')
const router = express.Router()
const controller = require("../controller/coletaController")

 router.get("/todos", controller.getAllCollections) 

 router.get("/:id", controller.collectById) 

 router.post("/create", controller.createCollectionPoint) 

 router.delete("/delete/:id", controller.deleteCollectionPoint) 

 router.put("/atualizar/:id", controller.updateCollectionPoint)

module.exports = router