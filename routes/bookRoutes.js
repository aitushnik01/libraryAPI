const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { validateBook, validate } = require('../utils/validation');

router.get('/', bookController.getAllBooks);
router.post('/add', validateBook(), validate, bookController.addBook);
router.put('/:id/update', validateBook(), validate, bookController.updateBook);
router.delete('/:id/delete', bookController.deleteBook);
router.get('/author/:id/books', bookController.getBooksByAuthor);
router.get('/genre/:id/books', bookController.getBooksByGenre);

module.exports = router;
