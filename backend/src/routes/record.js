const express = require("express");
const router = express.Router();

const {
  getRecords,
  createRecord,
  deleteRecord,
  updateRecord,
} = require("../controllers/record");

router.get("/records", getRecords);
router.post("/create/record", createRecord);
router.delete("/delete/record", deleteRecord);
router.put("/update/record", updateRecord);

module.exports = router;
