const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: [true, "User ID is required"]
        },
        contactUserId: {
            type: String,
            required: [true, "Contact user ID is required"]
        },
        nickname: {
            type: String,
            required: false
        }
    }
)

module.exports = mongoose.model("Contacts", contactSchema);