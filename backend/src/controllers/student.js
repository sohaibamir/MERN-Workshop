const Student = require("../models/student");

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { id } = req.body;
    const existingStudent = await Student.findOne({ id });

    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }
    const newStudent = await Student.create(req.body);
    return res
      .status(201)
      .json({ message: "Student created successfully", student: newStudent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("req.body:", req.body);
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { _id } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
