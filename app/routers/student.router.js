const express = require('express');
const studentRouter = express.Router();
const { getStudentList, getStudentDetailById, addStudent, updateStudent, deleteStudent } = require("../controllers/student.controllers");
const { logFeature } = require('../middlewares/logger/log-feature');
const { checkEmpty, checkNumberClass } = require('../middlewares/validations/student.validation');


// tạo api lấy danh sách học sinh ( url <==> http://localhost:3000/students )
studentRouter.get("/", logFeature, getStudentList);

// tạo api lấy thông tin chi tiết học sinh ( url <==> http://localhost:3000/students/:id )
studentRouter.get("/:id", getStudentDetailById);

// tạo api thêm học sinh
studentRouter.post("/", checkEmpty, checkNumberClass, addStudent)

// tạo api cập nhập học sinh
studentRouter.put("/:id", updateStudent);

// tạo api xóa học sinh
studentRouter.delete("/:id", deleteStudent)

module.exports = studentRouter;