const express = require('express')
const FormController = require('../controller/FormController')

const router = express.Router()


// FormController
router.get('/',FormController.index)
router.post('/store',FormController.store)
router.post('/indexWithoutBootStrap',FormController.indexWithoutBootStrap)


module.exports = router