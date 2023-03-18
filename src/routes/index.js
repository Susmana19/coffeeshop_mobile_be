//import eksternal
const express = require('express')
const router = express()

//import internal
const productRoute = require('./product.routes')
const userRoute = require('./user.routes')
const authRoute = require('./auth.routes')
const orderRoute = require('./order.routes')

// routing home
router.get('/', (req, res)=> {
    return res.send("Backend successfully running at home")
})

//routing products
router.use('/products', productRoute) 

//routinng users
router.use('/users', userRoute) 

//routinng auth
router.use('/auth', authRoute)

//routing order
router.use('/order', orderRoute) 


module.exports = router;