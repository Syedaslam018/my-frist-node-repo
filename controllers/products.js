const rootDir = require('../util/path')
const path = require('path');

exports.adminGetProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  // res.send('<h1>Hello<h1>')
}

exports.adminPostProduct =  (req, res, next) => {
    console.log(req.body)
    res.redirect('/shop')
}