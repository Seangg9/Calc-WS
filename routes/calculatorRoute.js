var express = require('express')
var router = express.Router()

var calculatorController = require('../controllers/calculatorController.js')

router.post('/add', calculatorController.addTwoNumbers)

module.exports = router;