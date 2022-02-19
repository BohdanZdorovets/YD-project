const Router = require("express").Router;
const сontroller = require("../Controllers/groupController");

const router = new Router();

router.post("/addGroup", сontroller.addGroup);
router.delete("/deleteGroup", сontroller.deleteGroup);
router.get("/findGroup", сontroller.findGroup);
router.patch("/updateGroup", сontroller.updateGroup);

module.exports = router;
