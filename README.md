# products-category
its an restful api


# Product and Category API

This API allows you to manage Product and Category data in a persistence database. It follows typical RESTful API design patterns and is built using Node.js, Express, and MongoDB.

## Requirements

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Installation

1. Clone the repository
   `git clone https://github.com/PrathameshLohar/products-category.git`
   
2. Navigate to the cloned project directory   

3. Install the dependencies using :
   `npm i` 

4. Start the server:
   node app.js
   The server will start running at `http://localhost:3000`.

## API Endpoints

### for products (with `/products`)
for reading all products`/read`,
for reading some product`/read/_id`,
for creating an product`/create`,
for updating an product`/update/:productId`,
for deleting an product`/delete/:productId`

### for categories (with `/category`
for reading all categories`/read`,
for reading some category`/read/_id`,
for creating an category`/create`,
for updating an category`/update/:categoryId`,
for deleting an category`/delete/:categoryId`




                              

