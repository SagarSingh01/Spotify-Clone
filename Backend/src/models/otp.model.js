const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is required"]
    },
    otpHash: {
        type: String,
        required: [true, "Otp Hash is required"]
    }
},{
    timestamps: true
})

const otpModel = mongoose.model("otp" , otpSchema)

module.exports = otpModel