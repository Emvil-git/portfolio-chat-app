const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/messageControllers.js");
const auth = require("../auth.js");

router.get("/getMessages/:convoId", messageControllers.loadConversationMessages)

module.exports = router;