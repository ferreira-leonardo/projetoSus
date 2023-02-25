const express = require('express')
const router = require('./routers')
const DB = require('./models/conectionDB')

const app = express()

app.use(express.json())
app.use(router)



module.exports = app;