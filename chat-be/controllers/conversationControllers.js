const Conversation = require("../models/Conversation.js");
const bcrypt = require("bcrypt");
const auth = require("../auth.js");

module.exports.getUserConversations = (request, response) => {
    const authData = auth.decode(request.headers.authorization);

    return Conversation.find({participants: {$in: [authData.id]}}).then(result => {
        console.log(result);

        response.send(result);
    })
}