// Get out-project files
const Router = require("express").Router;

// Get in-project files
const controller = require("../Controllers/taskController.js");

// Auth related endpoints 
const router = new Router();
router.post("/addTask", controller.addTask);
router.delete("/deleteTask", controller.deleteTask);
router.get("/findTask", controller.findTask);

// Export 'Auth Router' to project
module.exports = router;