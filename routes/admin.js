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


module.exports = router;