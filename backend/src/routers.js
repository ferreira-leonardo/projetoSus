const express = require('express')
const router = express.Router()
const controllers = require('./controllers/controllerAll')
const validate = require('./middlewares/middleware')

//rota raiz
router.get('/', (req, res) => {
    res.status(200).send("Você está na rota raiz!")
})

//rota que busca dados
router.get('/selectAll', controllers.getAll)

//rota que insere dados
router.post('/createStudent',validate.validateCreateStudent ,controllers.createStudents)

//rota que exclui aluno
router.delete('/deleteStudente/:matricula', controllers.deleteStudent)

//rota que atualiza dados
router.put('/updateStudent/:matricula', controllers.updateStudent)



module.exports = router