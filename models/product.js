const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  qtyPerUnit: Number,
  unitPrice: Number,
  unitInStock: Number,
  discontinued: Boolean,
  categoryId: String,
});

module.exports = mongoose.model('Product', productSchema);
