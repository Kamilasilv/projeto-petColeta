const express = require ('express')
const router = express.Router();


router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})

module.exports = router