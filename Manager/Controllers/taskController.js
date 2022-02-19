const TaskDTO = require("../../DTOs/TaskDTO");
const taskService = require("../Services/taskService");


class TaskController{

    async addTask(req, res, next){
        try {
            const {id, due_to, description, student_ids} = req.body;

            const payload = new TaskDTO(id, due_to, description, student_ids)

            taskService.addTask(payload, (result) =>{
                return res.json({result});
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