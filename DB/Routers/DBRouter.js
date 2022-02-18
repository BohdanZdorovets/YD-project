const Router = require("express").Router;

const controller = require("../Controllers/authController");

const router = new Router();
router.post("/addUser", controller.addUser);
router.post("/deleteUser", controller.deleteUser);
router.get("/findUser", controller.findUser);

router.post("/addGroup", controller.addGroup);
router.post("/deleteGroup", controller.deleteGroup);
router.get("/findGroup", controller.findGroup);

module.exports = router;
