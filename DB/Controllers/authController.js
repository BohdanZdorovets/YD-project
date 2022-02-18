const UserDTO = require("../../DTOs/UserDTO");
const userService = require("../Service/authService");
const groupService = require("../Service/groupService");


class AuthController{
    async addUser(req, res, next){
        try{
            const {login, password, access} = req.body;
            const payload = new UserDTO(login, password, access);

            const result = await userService.addUser(payload);

            return res.json({result});

        }catch(error){
            next(error);
        }
    }

    async deleteUser(req, res, next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login, password, null);

            const result = await userService.deleteUser(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }

    }

    async findUser(req, res, next){
        try{
            const {login} = req.body;
            const payload = new UserDTO(login, null, null);

            const result = await userService.findUser(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }
    }
    
    async addGroup(req, res, next){
        try{
            const {name, description, teachers, students, tasks} = req.body;
            const payload = new GroupDTO(name, description, teachers, students, tasks, null)

            const result = await groupService.addGroup(payload);

            return res.json({result});

        }catch(error){
            next(error);
        }
    }
    async deleteGroup(req, res, next){
        try{
            const {name, id} = req.body;
            const payload = name ? {name: name} : {id: id}; //не вижу смысла отправлять длинющщий groupDTO когда можно сделать так

            const result = await groupService.deleteGroup(payload);

            return res.json({result});

        }catch(error){
            next(error);
        }
    }
    async findGroup(req, res, next){
        try{
            const {name, id} = req.body;
            const payload = name ? {name: name} : {id: id};

            const result = await groupService.findGroup(payload);

            return res.json({result});

        }catch(error){
            next(error);
        }
    }
}

module.exports = new AuthController();