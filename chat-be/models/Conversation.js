const mongoose = require("mongoose");

const convoSchema = new mongoose.Schema(
    {
        participants: [
            {
                _id: false,
                userId: {
                    type: String,
                    required: [true, "Participant user ID is required"]
                }
            }
        ],

        name: {
            type: String,
            required: false
        },

        dateCreated: {
            type: String,
            required: [true, "Date created is required"]
        }
    }
)

module.exports = mongoose.model("Conversation", convoSchema);