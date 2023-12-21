const { Student } = require("../model/index");

const getList = async () => {
    // findAll là phương thức lấy tất cả dữ liệu có trong bảng sql của sequelize
    const getAllStudent = await Student.findAll();
    if (getAllStudent) {
        return getAllStudent;
    } else {
        return false;
    }
};

const getDetail = async (id) => {
    // findOne là phương thức lấy 1 dữ liệu trong bảng sql theo điều kiện where của sequelize
    const getStudentById = await Student.findOne({
        where: {
            id,
        }
    });

    if (getStudentById !== -1) {
        return getStudentById;
    } else {
        return false;
    }
};

const add = async (student) => {
    // create này là phương thức tạo bảng trong sql của sequelize, student được truyền vào là dữ liệu từ người dùng nhập vào api 
    const newStudent = await Student.create(student);
    return newStudent;
};

const updated = async (id, student) => {
    const updateStudentById = await getDetail(id);

    if (updateStudentById) {
        updateStudentById.fullName = student.fullName;
        updateStudentById.age = student.age;
        updateStudentById.numberClass = student.numberClass;
        const updatedStudent = await updateStudentById.save();
        return updatedStudent;
    } else {
        return false;
    }
};

const deleted = async (id) => {
    const deleteStudentById = await getDetail(id);

    if (deleteStudentById) {
        await Student.destroy({
            where: {
                id,
            }
        });
        return deleteStudentById;
    } else {
        return false;
    }
}

module.exports = {
    getList,
    getDetail,
    add,
    updated,
    deleted
}