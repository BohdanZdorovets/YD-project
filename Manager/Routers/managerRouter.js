const Router = require("express").Router;

const taskController = require("../Controllers/taskController");

const router = new Router();
router.get("/addTask", taskController.addTask);

module.exports = router;