const express = require('express')
const router = express.Router()
const controller = require("../controller/admController")

router.post ("/criar", controller.createAdm )

router.post("/login", controller.loginAdm)

module.exports = router