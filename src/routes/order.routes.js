//import eksternal
const express = require('express')
const router = express()


//import controller internal
const orderController = require('../controllers/order.controllers')

//route
router.post('/', orderController.add)
router.get('/:order_id', orderController.getOrderById)
router.get('/user/:user_id', orderController.getByUserId)

//export
module.exports = router;