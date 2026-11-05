const express = require('express')
const authController = require('../Controllers/auth.controller')
const { auth } = require('../middlewares/auth.middleware')

const router = express.Router()

router.post("/register", authController.resgisterUser)

router.post("/login", authController.loginUser)

router.post("/verify", authController.verifyEmail)

router.post("/logout", authController.logoutUser)

router.get("/me", auth, authController.getMe)

module.exports = router