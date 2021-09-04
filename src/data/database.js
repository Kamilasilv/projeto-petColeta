require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGO_URI 

const connect = () => {mongoose.connect(MONGODB_URL || process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(console.log("Database conectada com sucesso."))
    .catch(err => console.err)
}

module.exports = {connect}