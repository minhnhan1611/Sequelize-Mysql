const { getList, getDetail, add, updated, deleted } = require('../services/student.services');

const getStudentList = async (req, res) => {
    const studentList = await getList();
    if (studentList) {
        res.status(200).send(studentList);
    } else {
        res.status(404).send("Not Found!");
    }
};

const getStudentDetailById = async (req, res) => {
    const params = req.params;
    const id = params.id;

    const student = await getDetail(id);
    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send("Not Found!");
    }
}

const addStudent = async (req, res) => {
    let student = req.body;

    const newStudent = await add(student);
    res.status(201).send(newStudent);
}

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const student = req.body;

    const updatedStudent = await updated(id, student);
    if (updatedStudent) {
        res.status(200).send(updatedStudent);
    } else {
        res.status(400).send("Not Found!")
    }
}

const deleteStudent = async (req, res) => {
    const { id } = req.params;

    const deletedStudent = await deleted(id);
    if (deletedStudent) {
        res.status(200).send(deletedStudent);
    } else {
        res.status(404).send("Not Found!");
    }
}

module.exports = {
    getStudentList,
    getStudentDetailById,
    addStudent,
    updateStudent,
    deleteStudent
}