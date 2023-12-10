const Record = require("../models/record");

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createRecord = async (req, res) => {
  try {
    const { id } = req.body;
    const existingRecord = await Record.findOne({ id });

    if (existingRecord) {
      return res.status(400).json({ message: "Record already exists" });
    }
    const newRecord = await Record.create(req.body);
    return res
      .status(201)
      .json({ message: "Record created successfully", record: newRecord });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedRecord = await Record.findByIdAndDelete(id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const { _id } = req.body;
    const updatedRecord = await Record.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      message: "Record updated successfully",
      record: updatedRecord,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
