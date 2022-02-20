const TaskDTO = require("../../DTOs/TaskDTO");
const taskService = require("../Services/taskService");


class TaskController{

    async addTask(req, res, next){
        try {
            const {due_to, description} = req.body;

            const payload = new TaskDTO(0, due_to, description, [], [])

            taskService.addTask(payload).then(data =>{               
                return res.json({data}); 
           });

        } catch (e) {
            next(e);
        }
    }

    async deleteTask(req, res, next){
        try {
            const {id} = req.body;

            taskService.deleteTask(id, (result) =>{
                return res.json({result});
            });

        } catch (e) {
            next(e);
        }
    }
    
}

module.exports = new TaskController();