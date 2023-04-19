const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },

        email: {
            type: String,
            required: [true, "Email is required"]
        },

        password: {
            type: String,
            required: [true, "Password is required"]
        },

        mobile: {
            type: String,
            required: [true, "Mobile number is required"]
        },

        dateJoined: {
            type: String,
            required: [true, "Date joined is required"]
        },
        
        lastLogIn: {
            type: String,
            required: false
        }
    }
)

module.exports = mongoose.model("User", userSchema);

