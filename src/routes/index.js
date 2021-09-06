const express = require ('express')
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send({
        "mensagem": "Bem vindo ao Projeto Pet-Coleta",
        "title":  "Pet-Coleta",
        "version": "1.0.0"
    })
})

module.exports = router