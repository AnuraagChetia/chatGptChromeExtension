const express = require("express");

const messageController = require("../controller/Message");

const router = express.Router();

router.get("/get-message", messageController.getMessage);

router.post("/bot-message", messageController.postBotMessage);

router.post("/send-message", messageController.postMessage);

module.exports = router;
