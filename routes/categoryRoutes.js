const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/create', categoryController.createCategory);
router.get('/read/:categoryId', categoryController.getCategoryById);
router.get('/read', categoryController.getAllCategories);
router.put('/update/:categoryId', categoryController.updateCategory);
router.delete('/delete/:categoryId', categoryController.deleteCategory);

module.exports = router;
