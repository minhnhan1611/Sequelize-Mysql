const { Sequelize } = require('sequelize');
const { HOST, DB, USER, PASSWORD, dialect } = require('../configs/db.config');
const { createStudentModel } = require('./student.model');

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
});

const Student = createStudentModel(sequelize);

module.exports = {
    sequelize,
    Student,
}