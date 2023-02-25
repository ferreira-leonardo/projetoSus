const connection = require('./conectionDB')
const mysql = require('mysql2/promise')


const getAll = async () => {
    const [selectAllComand] = await connection.query('SELECT * FROM aluno;')

    return selectAllComand
}

const createStudents = async (register) => {
    
  const query = `INSERT INTO aluno(nome, curso) VALUES ('${register.nome}', '${register.curso}')`;

  const [createStudent] = await connection.query(query);

  return {'Matricula': createStudent};
}


const deleteStudent = async (matricula) => {
    const removeStudent = await connection.query(`DELETE FROM aluno WHERE matricula = ${matricula}`)

    return removeStudent
}

const updateStudent = async (matricula, register) => {
    const query = `UPDATE aluno SET nome = '${register.nome}', curso = '${register.curso}' WHERE matricula = ${matricula}`
    const upStudent = await connection.query(query)

    return upStudent
}
 

module.exports = {
    getAll,
    createStudents,
    deleteStudent,
    updateStudent
}