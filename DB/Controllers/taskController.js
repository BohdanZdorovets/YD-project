const TaskService = require("../Service/taskService")
const TaskDTO = require("../../DTOs/TaskDTO")
const File = require("node")

class TaskController{
    async addTask(req, res, next){
        var {due_to, description, file_names} = req.body;
        const fileList = [];

        for(let i = 0; i < file_names.length; i++){
            for(let j = 0; j < file_names[i].length; j++){
                if(file_names[i][j] == '|'){
                    file_names[i].replace('|', '/');
                }
            }
            const file = new File([], file_names[i]);
            fileList.push(file);
        }

        const taskDTO = new TaskDTO(0, due_to, description, fileList, []);

        const result = TaskService.addTask(taskDTO);

        return result;
    }
}

module.exports = new TaskController();