const app = require('./app')
require('dotenv').config()

const PORT = process.PORT || 8080

app.listen(PORT, () => {
    console.log("Servidor iniciado!")
})