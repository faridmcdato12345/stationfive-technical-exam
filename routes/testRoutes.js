const express = require('express')
const router = express.Router()
const {test} = require('../controllers/testController')

router.post('/', test);

module.exports = router