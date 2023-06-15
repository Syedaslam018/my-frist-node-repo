const express = require('express');
const fs = require('fs');


const productController = require('../controllers/products')

const router = express.Router();

router.get('/add-product', productController.adminGetProduct)

router.post('/add-product', productController.adminPostProduct)


module.exports = router;