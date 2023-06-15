const express = require('express')


const contactusController = require('../controllers/contactus')
const router = express.Router();

router.post('/', contactusController.postContactUs)

router.get('/', contactusController.getContactUs)


module.exports = router;