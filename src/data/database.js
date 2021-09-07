require('dotenv').config()
require('dotenv-safe').config()
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URI  || process.env.DATABASE_URL

const connect = () => {mongoose.connect(MONGODB_URL  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  .then(()=>{
      console.log("Conectado no MongoDb Atlas")
  })
  .catch((error) => {
      console.log("Algo deu errado")
      console.error(error)
   })
}

module.exports = {connect}