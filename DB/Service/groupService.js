const Logger = require("../../Logger");
const groupModel = require("../Models/groupModel")
const GroupDTO = require("../../DTOs/GroupDTO");


class GroupService{

    async generateID() {
        let id = Math.random() * 1000;
        let candidate = await groupModel.findOne({id: id});
        
        while (candidate) {
            id = Math.random() * 1000;
            candidate = await groupModel.findOne({id: id});
        }

        return id;
    }

    async addGroup(groupDTO) {
        const groupCandidate = await groupModel.findOne({name: groupDTO.name})
        
        if(groupCandidate){
            throw new Error('|DB ERROR| A GROUP WITH THIS NAME ALREADY EXISTS');
        }

        const id = await this.generateID();
        const newGroup = {name: groupDTO.name, description: groupDTO.description, teachers: groupDTO.teachers, students: groupDTO.students, tasks: groupDTO.tasks, id: id}
        
        const res = await groupModel.create(newGroup);

        return {
            new_group: newGroup
        };
    }
    
    async deleteGroup(data) {
        const groupCandidate = await groupModel.findOne(data.name ? {name: data.name} : {id: data.id});
        
        if(!groupCandidate){
            throw new Error('|DB ERROR| THIS GROUP DOES NOT EXIST');
        }
        
        const res = await groupModel.deleteOne({name: groupCandidate.name})

        return {
            removed_group: groupCandidate
        };
    }
    
    async findGroup(data) {
        const groupCandidate = await groupModel.findOne(data.name ? {name: data.name} : {id: data.id});
        
        if(!groupCandidate){
            throw new Error('|DB ERROR| THIS GROUP DOES NOT EXIST');
        }

        return {
            group: groupCandidate
        };
    }

    async updateGroup(data) {
        const groupCandidate = await groupModel.findOne(data.name ? {name: data.name} : {id: data.id});
        
        if(!groupCandidate){
            throw new Error('|DB ERROR| THIS GROUP DOES NOT EXIST');
        }

        const new_group = groupCandidate;
        
        if(data.newName){
            new_group.name = data.newName;
        }

        if(data.newDescription){
            new_group.description = data.newDescription;
        }

        if(data.newTeachers) {
            new_group.teachers = data.newTeachers;
            //new_group.teachers = data.newTeachers.length > 0 ? data.newTeachers : groupCandidate.teachers;
        }
        
        if(data.newStudents) {
            new_group.students = data.newStudents;
        }
        
        if(data.newTasks) {
            new_group.tasks = data.newTasks;
        }

        const res = await groupModel.updateOne({name: groupCandidate.name}, GroupDTO.copy(new_group));

        return {
            new_group: groupCandidate
        }
        
    }
    
}

module.exports = new GroupService();