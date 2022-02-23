const Router = require('express').Router
const controller = require('../Controllers/authController')
const authMiddleWare = require("../Middleware/authMiddleware")

const router = new Router()
router.post('/registration',controller.registration)
router.post('/login',controller.login)
router.delete('/delete',authMiddleWare,controller.delete)


module.exports = router 