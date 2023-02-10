const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
    sendMessage,
    fetchMessage,
} = require("../controller/messageController");

// Route to send the message to the recipient
router.route("/").post(auth, sendMessage);
// Route to retrieve all the message
router.route("/:chatId").get(auth, fetchMessage);

module.exports = router;