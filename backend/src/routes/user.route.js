const router = require("express").Router();
const {authMiddleware}  = require("../middlewares");
const {userController} = require("../controllers");

router.post("/resign", authMiddleware.auth, userController.resign);

module.exports = router;