const Adm = require("../models/adm")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createAdm = async (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
  
    const adm = new Adm(req.body)
    try {
      const novoAdm = await adm.save()
      res.status(201).send(novoAdm)
    } catch (err) {
      res.status(400).send({ message: err.message})
    }
  }

  const loginAdm = (req, res) => {
    Adm.findOne({ email: req.body.email }, (err, adminFound) => {
      if (!adminFound) {
        return res.status(404).send({ message: 'admin not found', email: '${req.body.email}' })
      }
      const senhaValida = bcrypt.compareSync(req.body.senha, adminFound.senha)
  
      if (!senhaValida) {
        return res.status(401).send({ message: 'login not authorized' })
      }
      const token = jwt.sign({ email: req.body.email }, SECRET)
      res.status(200).send({ message: 'Login successfully', token: token })
    })
  }

module.exports = {
    createAdm, 
    loginAdm
}