const mongoose = require("mongoose");
const auth = require("../auth.js");
const Conversation = require("../models/Conversation.js");

module.exports.loadConversationMessages = (request, response) => {
    return Conversation.find({conversationId: request.params.convoId}).then(
        result => response.send(result)
    ).catch(
        error => response.send(500)
    )
}