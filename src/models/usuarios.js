const mongoose = require('mongoose')

const usuariosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    endereço: {
        type: String,
        required: true,
    }, 
    telefone:{
        type: String,
        required: true
    },
    pet: {
        type: String,
        required: true
    },
    pontodeColeta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coleta'
    },
    cadastroEm: {
        type:Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model("usuarios", usuariosSchema)