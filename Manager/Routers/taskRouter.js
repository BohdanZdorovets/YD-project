const Router = require("express").Router;

const taskController = require("../Controllers/taskController");

const router = new Router();
router.post("/addTask", taskController.addTask);

module.exports = router;