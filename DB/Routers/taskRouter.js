const Router = require("express").Router;

const controller = require("../Controllers/taskController");

const router = new Router();
router.post("/addTask", controller.addTask);

module.exports = router;