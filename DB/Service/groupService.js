const Logger = require("../../Logger");
const groupModel = require("../Models/groupModel")

class AuthService{
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
    
    async removeGroup(data) {
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
            name: groupCandidate.name,
            id: groupCandidate.id
        };
    }
    
}

module.exports = new AuthService();