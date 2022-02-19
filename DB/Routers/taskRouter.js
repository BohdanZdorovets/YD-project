// Get out-project files
const Router = require("express").Router;

// Get in-project files
const controller = require("../Controllers/taskController.js");

// Auth related endpoints 
const router = new Router();
router.post("/add", controller.addTask);
router.delete("/delete", controller.deleteTask);
router.get("/find", controller.findTask);

// Export 'Auth Router' to project
module.exports = router;