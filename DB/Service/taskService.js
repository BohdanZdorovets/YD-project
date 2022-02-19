// Get in-project files
const res = require("express/lib/response");
const Logger = require("../../Logger.js");
const taskModel = require("../Models/taskModel.js");

// Task Service
class TaskService{
    // Generate random ID for Task(must not be taken)
    async generateID(){
        let id = (Math.random() * 1000).toFixed(0);
        let candidate = await taskModel.findOne({task_id: id});
        
        while (candidate) {
            id = (Math.random() * 1000).toFixed(0);
            candidate = await taskModel.findOne({task_id: id});
        }

        return id;
    }

    // Add new Task to DataBase
    async addTask(taskDTO){
        const newID = await this.generateID();

        const newTask = {task_id: newID, due_to: taskDTO.due_to, description: taskDTO.description, files: taskDTO.files, student_files: taskDTO.student_files};
        const result = await taskModel.create(newTask);

        return {
            user: result
        }
    }
}

// Export 'Task Service' to project
module.exports = new TaskService();