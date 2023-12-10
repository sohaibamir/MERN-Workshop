const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true },
    version: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Book", bookSchema);
