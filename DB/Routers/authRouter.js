const Router = require("express").Router;
const controller = require("../Controllers/authController");

const router = new Router();

router.post("/add", controller.addUser);
router.delete("/delete", controller.deleteUser);
router.post("/find", controller.findUser);

module.exports = router;
