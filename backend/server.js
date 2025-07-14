/**
 * This file sets up a basic Express server for the CameraShopWebApp backend.
 * It imports the Express framework, creates an application instance, 
 * starts the server on port 5000, and defines a root route for API status.
 */

// Import the Express framework.
const express = require('express');
// Import the products data from the products.js file.
const products = require('./data/products');

// Create an Express application instance.
const app = express();


/**
 * Defines a GET route for the root URL ('/').
 * Sends a simple response indicating the API is running.
 * @function
 * @name GET/
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/', (req, res) => {
    // Send a simple response when the root URL is accessed.
    res.send('API is running...');
});
app.get('/api/products', (req, res) => {
    // Send the products data as a JSON response when the '/api/products' URL is accessed.
    res.json(products);
});
app.get('/api/products/id', (req, res) => {
    // Send the products data as a JSON response when the '/api/products' URL is accessed.
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});


// Start the server and listen on port 5000; log a message when running.
app.listen(5000, console.log('Server running on port 5000')); 
