require('dotenv').config()
const mongoose = require('mongoose')

      const connect = () => {mongoose.connect(
        //   'mongodb://localhost:27017/coletas',{
     process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(console.log("Database conectada com sucesso."))
    .catch(err => console.err)
}

module.exports = {connect}