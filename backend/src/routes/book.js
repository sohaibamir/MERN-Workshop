const express = require("express");
const router = express.Router();

const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/book");

router.get("/books", getBooks);
router.post("/create/book", createBook);
router.delete("/delete/book", deleteBook);
router.put("/update/book", updateBook);

module.exports = router;
