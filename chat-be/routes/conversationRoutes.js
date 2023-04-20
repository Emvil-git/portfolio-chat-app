const express = require("express");
const router = express.Router();
const conversationController = require("../controllers/conversationControllers.js");
const auth = require("../auth.js");

router.get("/getUserConversations/", conversationController.getUserConversations);

module.exports = router;