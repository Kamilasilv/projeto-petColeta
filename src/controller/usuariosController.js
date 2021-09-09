const mongoose = require('mongoose')
const Usuarios = require("../models/usuarios")

const getAllPeople = async (req, res) => {
    const usuarios = await Usuarios.find()
    res.status(200).send(usuarios)
}

const getAllCollect = async (req, res) => {
    const nomeColeta = req.query.nome
    const usuarios = await Usuarios.find()
    const filteredUser = usuarios.filter( usuario => usuario.coleta.nome == nomeColeta).populate('coleta')
    res.status(200).json(filteredUser)
}



const createRegistration = async (req, res) => {
    const usuario =  new Usuarios ({
        _id: new mongoose.Types.ObjectId,
        nome: req.body.nome,
        endereço: req.body.endereço,
        telefone: req.body.telefone,
        pet: req.body.pet,
        pontodeColeta: req.body.pontodeColeta,
        cadastroEm: req.body.cadastroEm
    })

    const {nome }  = req.body
    const peopleExists = await Usuarios.findOne({nome})
    if(peopleExists){
        return res.status(409).send({ error: "Person  already exists."})
    }
    try{
        const newPeople = await usuario.save()
        res.status(201).send(newPeople)
    }
    catch (err){ 
        res.status(404).send({ "message": err.message})
    }
}

const deletePeople = async (req, res) => {
    const idPeople = req.params.id 

    const validUsuario = await Usuarios.findOne ({ _id: idPeople})
    if(!validUsuario){
        res.status(404).send({ "message": "Invalid person id"})
    }
    else{
        try{
            Usuarios.deleteOne({ id:idPeople}, function (err) {
                 if(!err){
                    res.status(200).send({ "message": "Person  successfully deleted"})
                } else{
                    res.status(500).send({ "message": err.message })
                }
            })

        } catch{  
            res.status(500).send({ "message": err.message })
        }
    }
}

const updateName = async (req, res) =>{
    try{
    const usuario = await Usuarios.findById(req.params.id)
    if(usuario == null){
        res.status(404).send({ "message": "Person not found."})
    }
    if(req.body.nome){
        usuario.nome = req.body.nome
    }
    const usernameUpdate = await usuario.save()
    res.status(200).send(usernameUpdate)
    } 
    catch (err){
        res.status(500).send({ "message": err.message})
    }
}

module.exports = { 
    getAllPeople,
    getAllCollect,
    createRegistration,
    deletePeople,
    updateName
}