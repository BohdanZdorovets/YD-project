const Router = require("express").Router;

const controller = require("../Controllers/authController");

const router = new Router();
router.post("/addUser", controller.addUser);
router.post("/deleteUser", controller.deleteUser);
router.get("/findUser", controller.findUser);

const gController = require("../Controllers/groupController");

router.post("/addGroup", gController.addGroup);
router.delete("/deleteGroup", gController.deleteGroup);
router.get("/findGroup", gController.findGroup);
router.patch("/updateGroup", gController.updateGroup);

module.exports = router;
