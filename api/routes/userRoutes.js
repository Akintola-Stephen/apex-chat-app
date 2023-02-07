const router = require("express").Router();
const {
    registerUser,
    allUsers,
} = require("../controllers/userControllers");
const auth = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(auth, allUsers);

module.exports = router;