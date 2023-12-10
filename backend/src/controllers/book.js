const Book = require("../models/book");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { name } = req.body;
    const existingBook = await Book.findOne({ name });

    if (existingBook) {
      return res.status(400).json({ message: "Book already exists" });
    }
    const newBook = await Book.create(req.body);
    return res
      .status(201)
      .json({ message: "Book created successfully", book: newBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { _id } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
