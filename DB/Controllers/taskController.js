// Get in-project files
const TaskService = require("../Service/taskService.js");
const TaskDTO = require("../../DTOs/TaskDTO.js");

// Task Controller
class TaskController{
    // Get JSON with needed info and create new Task
    async addTask(req, res, next){
        try{
            const {due_to, description} = req.body;
            const taskDTO = new TaskDTO(0, due_to, description, [], []);
    
            const result = TaskService.addTask(taskDTO);
    
            return result;
        }
        catch(error){
            next(error);
        }
    }

    // GET JSON with needed info and delete Task
    // Must be updated to work with tokens
    async deleteTask(req, res, next){
        try{
            const {id} = req.body;
            const payload = id; 
            const result = await taskService.deleteTask(payload);
    
            return res.json({result});
        }
        catch(error){
            next(error);
        }
    }

    // Get JSON with needed info and find Task
    async findTask(req, res, next){
        try{
            const {id} = req.body;
            const payload = id;
    
            const result = await groupService.findTask(payload);
    
            return res.json({result});
        } catch(error){
            next(error);
        }
    }
}

// Export 'Task Controller' to project
module.exports = new TaskController();