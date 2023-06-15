const rootDir = require('../util/path')

exports.postContactUs = (req, res, next) => {
    console.log(req.body)
     res.redirect('/success')
}

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}