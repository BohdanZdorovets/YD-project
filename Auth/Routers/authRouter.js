const Router = require('express').Router
const controller = require('../Controlers/authController')
const authMiddleWare = require("../Middlewares/authMiddleware")

const router = new Router()
router.post('/registration',controller.registration)
router.post('/login',controller.login)
router.delete('/delete',authMiddleWare,controller.login)


module.exports = router 