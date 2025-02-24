const router = require("express").Router(); 
const {adminController} = require("../controllers");
const {adminMiddleware, authMiddleware} = require("../middlewares");

router.get("/resignations", authMiddleware.auth, adminMiddleware.checkAdmin,  adminController.getResignations);
router.put("/conclude_resignation", authMiddleware.auth, adminMiddleware.checkAdmin, adminController.concludeResignation);

module.exports = router;