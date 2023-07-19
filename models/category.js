const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryId: String,
  categoryName: String,
});

module.exports = mongoose.model('Category', categorySchema);
