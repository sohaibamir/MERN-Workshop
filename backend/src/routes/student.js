const express = require("express");
const router = express.Router();

const {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/student");

router.get("/students", getStudents);
router.post("/create/student", createStudent);
router.delete("/delete/student", deleteStudent);
router.put("/update/student", updateStudent);

module.exports = router;
