const userService = require('../Service/authService')
const UserDTO = require('../../DTOs/UserDTO')



class AuthController{
    
    async login(req,res,next){
        try{
            const {login, password} = req.body
            const payload = new UserDTO(login,password,null);


           userService.login(payload).then(data =>{
                return res.json({data}); 
           })

        }catch(e){
            next(e)
        }

    }

    async registration(req,res,next){
        try{
            const {login, password, access} = req.body
            const payload = new UserDTO(login,password,access);

            userService.registration(payload).then(data =>{
                return res.json({data}); 
           })
            

        }catch(e){
            next(e)
        }
    }

    async delete(req,res,next){
        try{
            const {login, password} = req.body

            const payload = new UserDTO(login,password,null);

            userService.delete(payload).then(data =>{
                return res.json({data}); 
           })
            

        }catch(e){
            next(e)
        }
    }

}

module.exports = new AuthController();