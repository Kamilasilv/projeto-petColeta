const mongoose = require('mongoose')

const coletaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    horarioFuncionamento: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    }
})

module.exports = mongoose.model("coleta", coletaSchema)