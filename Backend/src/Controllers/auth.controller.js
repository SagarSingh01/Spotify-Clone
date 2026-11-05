const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { sendEmail } = require('../services/email.service')
const { generateOTP, getOTPHtml } = require('../Utils/utils')
const otpModel = require('../models/otp.model')

async function resgisterUser(req, res) {
    try {
        const { username, email, password, role = "user" } = req.body

        const isUserAlreadyExist = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        })

        if (isUserAlreadyExist) {
            return res.status(409).json({
                message: "User Already Exist"
            })
        }

        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            username,
            email,
            password: hash,
            role
        })

        const otp = generateOTP()
        const html = getOTPHtml(otp)
        const otpHash = await bcrypt.hash(otp, 10)

        await otpModel.create({
            email,
            user: user._id,
            otpHash
        })

        await sendEmail(email, "OTP Verification", `Your OTP is ${otp}`, html)

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({
            message: "Registration successful. OTP sent to your email.",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                verified: user.verified
            }
        })

    }
    catch (err) {
        return res.status(500).json({
            message: "Unable to register"
        })
    }
}

async function loginUser(req, res) {
    try {
        const { username, email, password } = req.body

        const user = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        })

        const isPasswordValid = user ? await bcrypt.compare(password, user.password) : false

        if (!user || !isPasswordValid) {
            return res.status(401).json({ message: "Invalid User Credentials" })
        }

        if (!user.verified) {
            return res.status(403).json({
                message: "Email not verified"
            })
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            message: "User Logged In Successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Unable to login"
        })
    }
}

async function verifyEmail(req, res) {
    try {
        const { otp, email } = req.body

        if (!otp || !email) {
            return res.status(400).json({
                message: "Email and OTP are required"
            })
        }

        const otpRecord = await otpModel.findOne({ email })

        if (!otpRecord) {
            return res.status(400).json({
                message: "Invalid OTP"
            })
        }

        const isValid = await bcrypt.compare(String(otp), otpRecord.otpHash)

        if (!isValid) {
            return res.status(400).json({
                message: "Invalid OTP"
            })
        }

        const user = await userModel.findByIdAndUpdate(otpRecord.user, { verified: true }, { new: true })

        await otpModel.deleteMany({ email })

        return res.status(200).json({
            message: "Email verified successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                verified: user.verified
            }
        })

    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

async function getMe(req, res) {

    try {
        const user = await userModel.findById(req.user.id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        if (!user.verified) {
            return res.status(403).json({
                message: "Email not verified"
            })
        }

        return res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                verified: user.verified
            }
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Server Error"
        })
    }

}

async function logoutUser(req, res) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    })

    res.status(200).json({
        message: "User logged out Successfully"
    })
}

module.exports = { resgisterUser, loginUser, verifyEmail, getMe, logoutUser }