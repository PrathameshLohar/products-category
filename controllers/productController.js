const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  const productData = req.body;
  try {
    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    console.error('Failed to create Product', error);
    res.status(500).json({ message: 'Failed to create Product' });
  }
};

exports.getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId).exec();
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error('Failed to read Product', error);
    res.status(500).json({ message: 'Failed to read Product' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (error) {
    console.error('Failed to read Products', error);
    res.status(500).json({ message: 'Failed to read Products' });
  }
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const updatedProductData = req.body;
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true }).exec();
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error('Failed to update Product', error);
    res.status(500).json({ message: 'Failed to update Product' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndDelete(productId).exec();
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    console.error('Failed to delete Product', error);
    res.status(500).json({ message: 'Failed to delete Product' });
  }
};
