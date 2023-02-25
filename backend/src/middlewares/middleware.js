const validateCreateStudent = (req, res, next) => {
    const { body } = req

    if(body.nome == undefined || body.nome == ''){
        return res.status(400).json({menssage: 'Nome inválido'})
    }else if(body.curso == undefined || body.curso == ''){
        return res.status(400).json({menssage: 'Curso inválido'})
    }

    next();
}




module.exports = {
    validateCreateStudent
}