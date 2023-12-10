const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
  studentId: { type: Number, required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
});

module.exports = mongoose.model("Record", recordSchema);
