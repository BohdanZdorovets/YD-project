const userService = require('../Service/authService')
const UserDTO = require('../DTO/userDTO')



class AuthController{
    
    async login(req,res,next){
        try{
            const {login, password, access} = req.body
            const payload = new UserDTO(login,password,access);


           userService.login(payload).then(data =>{
                return res.json({data}); 
           })

        }catch(e){
            next(e)
        }

    }

    async registration(req,res,next){
        try{
            const {login, password, nickname} = req.body
            

        }catch(e){
            next(e)
        }
    }

    async delete(req,res,next){
        try{
            const {login, password, nickname} = req.body
            

        }catch(e){
            next(e)
        }
    }

}

module.exports = new AuthController();