const app = require("./src/app")

const db = require("./src/data/database")
db.connect

const port = 8080
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))