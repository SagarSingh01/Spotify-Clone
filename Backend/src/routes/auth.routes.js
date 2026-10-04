const express = require('express')
const authController = require('../Controllers/auth.controller')
const { authUser, auth } = require('../middlewares/auth.middleware')
const userModel = require('../models/user.model')

const router = express.Router()

router.post("/register", authController.resgisterUser)

router.post("/login", authController.loginUser)

router.post("/logout", authController.logoutUser)

router.get("/me", auth, async (req, res) => {

    try {
        const user = await userModel.findById(req.user.id)
        return res.status(200).json({
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    }
    
    catch (err) {
        return res.status(500).json({
            message: "Server Error"
        })
    }

})

module.exports = router