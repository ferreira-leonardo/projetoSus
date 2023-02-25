const functionAll = require('../models/functionAll')

const getAll = async (_req, res) => {
    const getAllDatabase = await functionAll.getAll()

    return res.status(200).json(getAllDatabase)
}

const createStudents = async (req, res) => {
    const createdStudents = await functionAll.createStudents(req.body)

    return res.status(200).json(createdStudents)
}


const deleteStudent = async (req, res) => {
    const { matricula } = req.params;

    await functionAll.deleteStudent(matricula)
    return res.status(204).json()
}

const updateStudent = async (req, res) => {
    const { matricula } = req.params;

    await functionAll.updateStudent(matricula, req.body)

    return res.status(204).json()
}


module.exports = {
    getAll,
    createStudents, 
    deleteStudent,
    updateStudent
}