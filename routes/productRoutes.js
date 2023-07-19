const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/create', productController.createProduct);
router.get('/read/:productId', productController.getProductById);
router.get('/read', productController.getAllProducts);
router.put('/update/:productId', productController.updateProduct);
router.delete('/delete/:productId', productController.deleteProduct);

module.exports = router;
