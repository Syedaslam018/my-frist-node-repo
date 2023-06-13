const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router();

router.post('/', (req, res, next) => {
    console.log(req.body)
     res.redirect('/success')
})

router.get('/', (req, res, next) => {
    
        res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
    // res.send('<h1>Hieee<h1>')
})


module.exports = router;