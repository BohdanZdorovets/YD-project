const TaskService = require("../Service/taskService")
const TaskDTO = require("../../DTOs/TaskDTO")

class TaskController{
    async addTask(req, res, next){
        const {due_to, description, file_names} = req.body;
        const fileList = [];

        for(let i = 0; i < file_names.length; i++){
            fileList.push(new File([], file_names[i]))
        }

        const taskDTO = new TaskDTO(0, due_to, description, fileList, []);

        const result = TaskService.addTask(taskDTO);

        return result;
    }
}

module.exports = new TaskController();