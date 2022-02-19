const Logger = require("../../Logger");
const taskModel = require("../Models/taskModel")

const getLargestId = async ()=>{
    var idCandidate = 0;
    for(let i = 0; !idCandidate ;i++){
        idCandidate = await taskModel.findOne({"task_id" : i})
    }
    return idCandidate;
}

class TaskService{
    async addTask(taskDTO){
        const id = getLargestId();
        
        await taskModel.create({
            "task_id" : id,
            "due_to" : taskDTO.due_to,
            "description" : taskDTO.description,
            "files" : taskDTO.files,
            "student_files" : taskDTO.student_files})

        return {task : {
            "task_id" : id,
            "due_to" : taskDTO.due_to,
            "description" : taskDTO.description,
            "files" : taskDTO.files,
            "student_files" : taskDTO.student_files}}
    }
    async getTaskById(id){
        const candidate = await taskModel.findOne({"task_id" : id})
    }
}

module.exports = new TaskService();