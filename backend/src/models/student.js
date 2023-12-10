const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  department: { type: String, required: true },
  name: { type: String, required: true },
  roll_no: { type: Number, required: true },
  year: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
