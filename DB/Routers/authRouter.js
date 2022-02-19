const Router = require("express").Router;
const controller = require("../Controllers/authController");

const router = new Router();

router.post("/add", controller.addUser);
router.delete("/delete", controller.deleteUser);
router.get("/find", controller.findUser);

module.exports = router;
