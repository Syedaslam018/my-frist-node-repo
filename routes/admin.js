const express = require('express');
const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product',(req, res, next) => {
     res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
   // res.send('<h1>Hello<h1>')
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/shop')
})


// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;

