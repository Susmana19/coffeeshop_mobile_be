//import eksternal
const express = require('express')
const router = express()

//import form upload
const formUpload = require('../../helper/formUpload')

//import controller internal
const userController = require('../controllers/user.controllers')

//route users


router.get('/:user_id', userController.getById)
router.patch('/:user_id', formUpload.single("profile_image"), userController.update)



router.get('/', userController.get)
router.post('/', userController.add)
router.delete('/:id', userController.remove)

//export
module.exports = router;