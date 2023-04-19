const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: String,
            required: [true, "Conversatrion ID is required"]
        },

        userId: {
            type: String,
            required: [true, "User ID is required"]
        },

        content: {
            type: String,
            required: [true, "Message content is required"]
        },

        dateSent: {
            type: String,
            required: [true, "Date sent is required"]
        },

        dateRead: {
            type: String,
            required: false,
        }
    }
)

module.exports = mongoose.model("Message", messageSchema);