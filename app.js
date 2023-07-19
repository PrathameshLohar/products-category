const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const port = 3000;

// Connecting to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/product', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

app.use(bodyParser.json());

// Routing
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
