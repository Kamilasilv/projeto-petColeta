const mongoose = require('mongoose')
const Collect = require('../models/coleta')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const getAllCollections = async (req, res) => { 
    const collections = await Collect.find()
    res.status(200).send(collections)
}

const collectById = async (req,res) => { 
    const idCollect = await Collect.findById(req.params.id)
    Collect.findOne({ id: req.params.id}, (err, collection) => {
    if(err) {
            res.status(404).send({ message: err.message})
        }
            if(collection){
                res.status(200).send(idCollect)
            }
    else{
        res.status(404).send("Collect not found! ")
        }
    })
}

const createCollectionPoint = async (req,res) => { 
    const authHeader = req.get("autorizathion")
    const token = authHeader.split(' ')[1]

    if(!token){
        return res.status(403).send({ message: "Authorization token required!"})
    }
    jwt.verify(token, SECRET, async (err) => {
        if (err){
            res.status(403).send({ message: "Invalid token"})
        }
    })

    const collection = await new Collect ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        local: req.body.local,
        horarioFuncionamento:req.body.horarioFuncionamento,
        criadoEm: req.body.criadoEm
    })

    const {nome }  = req.body
    const collectionExists = await Collect.findOne({nome})
    if(collectionExists){
        return res.status(409).send({ error: "Collection point already exists."})
    }
    try{
        const newCollectionPoint = await collection.save()
        res.status(200).send(newCollectionPoint)
    } catch (err) {
        res.status(500).send({ "message": err.message})
    }
}

const deleteCollectionPoint = async (req,res) => { 
    const idCollect = req.params.id

    const validCollection = await Collect.findOne({ _id:idCollect})
    if(!validCollection){
        res.status(404).send({ "message": "Invalid collection point id."})
    }
    else{
        try{ 
            Collect.deleteOne({ _id:idCollect}, function (err) {
                if(!err){
                    res.status(200).send({ "message": "Collection point successfully deleted"})
                } else{
                    res.status(500).send({ "message": err.message })
                }
            })

        } catch{
            res.status(500).send({ "message": err.message })
        }
    }
}

const updateCollectionPoint = async (req,res) => { //completar e testar
  try {
     const collection = await Collect.findById({ _id: req.params.id})
        if(collection == null){
        res.status(404).send({ "message": "Collection not found!"})
    }
    if(req.body.nome != null){
        collection.nome = req.body.nome
    }
    if(req.body.local){
        collection.local = req.body.local
    }
    if(req.body.horarioFuncionamento){
        collection.horarioFuncionamento = req.body.horarioFuncionamento
    }
    const updatedCollection = await collection.save()
    res.status(200).send(updatedCollection)
 }
 catch (err){
    res.status(500).send({ "message": err.message })
 }
}

module.exports = { 
    getAllCollections, 
    collectById,
    createCollectionPoint,
    deleteCollectionPoint, 
    updateCollectionPoint
 }