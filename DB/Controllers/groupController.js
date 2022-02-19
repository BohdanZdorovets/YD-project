const groupService = require("../Service/groupService");
const GroupDTO = require("../../DTOs/GroupDTO");

class GroupController {
    async addGroup(req, res, next){
        try{
            const {name, description, teachers, students, tasks} = req.body;
            const payload = new GroupDTO(name, description, teachers, students, tasks, null)
    
            const result = await groupService.addGroup(payload);
    
            return res.json({result});
    
        } catch(error){
            next(error);
        }
    }
    async deleteGroup(req, res, next){
        try{
            const {name, id} = req.body;
            const payload = name ? {name: name} : {id: id};
    
            const result = await groupService.deleteGroup(payload);
    
            return res.json({result});
    
        } catch(error){
            next(error);
        }
    }
    
    async findGroup(req, res, next){
        try{
            const {name, id} = req.body;
            const payload = name ? {name: name} : {id: id};
    
            const result = await groupService.findGroup(payload);
    
            return res.json({result});
    
        } catch(error){
            next(error);
        }
    }
    
    async updateGroup(req, res, next){
        try{
            const {new_name, new_description, new_teachers, new_students, new_tasks, name, id} = req.body;
            if(new_teachers.length == 0) throw new Error("|DB ERROR| THERE MUST BE AT LEAST ONE TEACHER IN THE GROUP");

            const payload = name ? {name: name} : {id: id};


            payload.newName = new_name;
            payload.newDescription = new_description;
            payload.newTeachers = new_teachers;
            payload.newStudents = new_students;
            payload.newTasks = new_tasks;
    
            const result = await groupService.updateGroup(payload);
    
            return res.json({result});
    
        } catch(error){
            next(error);
        }
    }
}

module.exports = new GroupController();
