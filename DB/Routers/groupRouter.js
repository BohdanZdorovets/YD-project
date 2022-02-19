const Router = require("express").Router;
const сontroller = require("../Controllers/groupController");

const router = new Router();

router.post("/add", сontroller.addGroup);
router.delete("/delete", сontroller.deleteGroup);
router.get("/find", сontroller.findGroup);
router.patch("/update", сontroller.updateGroup);

module.exports = router;
