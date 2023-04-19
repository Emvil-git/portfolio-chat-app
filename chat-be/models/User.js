const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },

        username: {
            type: String,
            required: [true, "Username is required"]
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

