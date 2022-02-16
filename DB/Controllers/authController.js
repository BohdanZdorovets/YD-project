const UserDTO = require("../../DTOs/UserDTO");
const userService = require("../Service/authService");


class AuthController{
    async addUser(req, res, next){
        try{

            const {login, password, access} = req.body;
            const payload = new UserDTO(login, password,access);

            const result = await userService.addUser(payload);

            return res.json({result});

        }catch(error){
            next(error);
        }
    }

    async deleteUser(req, res, next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login,password,null);

            const result = await userService.deleteUser(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }

    }

    async findUser(req, res, next){
        try{
            const {login} = req.body;
            const payload = new UserDTO(login,null,null);

            const result = await userService.findUser(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }
    }

}

module.exports = new AuthController();