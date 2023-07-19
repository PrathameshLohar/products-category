const Category = require('../models/category');

exports.createCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    const category = await Category.create(categoryData);
    res.status(201).json(category);
  } catch (error) {
    console.error('Failed to create Category', error);
    res.status(500).json({ message: 'Failed to create Category' });
  }
};

exports.getCategoryById = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId).exec();
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (error) {
    console.error('Failed to read Category', error);
    res.status(500).json({ message: 'Failed to read Category' });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    res.json(categories);
  } catch (error) {
    console.error('Failed to read Categories', error);
    res.status(500).json({ message: 'Failed to read Categories' });
  }
};

exports.updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const updatedCategoryData = req.body;
  try {
    const category = await Category.findByIdAndUpdate(categoryId, updatedCategoryData, { new: true }).exec();
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (error) {
    console.error('Failed to update Category', error);
    res.status(500).json({ message: 'Failed to update Category' });
  }
};

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findByIdAndDelete(categoryId).exec();
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    console.error('Failed to delete Category', error);
    res.status(500).json({ message: 'Failed to delete Category' });
  }
};
