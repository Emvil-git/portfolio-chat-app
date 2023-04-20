const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactControllers.js");
const auth = require("../auth.js");

router.post("/addContact/:contactId", contactController.addToContact);
router.post("/checkContact/:contactId", contactController.checkIfContactExists);

module.exports = router;