const UserDTO = require("../../DTOs/UserDTO");
const tokenService = require('../Service/tokenService');
const Logger = require('../../Logger')
const HttpRequest = require("../../HttpRequest")

class AuthService{
    async login(userDTO){
        var data = {login: userDTO.login, password: userDTO.password};


        var result; 
      
        await HttpRequest.sendHttpRequest("POST", "http://localhost:3000/auth/find", data).then(responseData =>{


          const token = tokenService.generateToken({login: userDTO.login});

          
          result =  {
              result : responseData,
              token : token
            };
        })
        .catch(error => {
          Logger.error(error);
          result = {message : "Error"};
        })
        
        return result;

    }
    

    async registration(userDTO){
        var data = {login: userDTO.login, password: userDTO.password,access : userDTO.access};

        var result; 
      
        await HttpRequest.sendHttpRequest("POST", "http://localhost:3000/auth/add", data).then(responseData =>{


          const token = tokenService.generateToken({login: userDTO.login});

          
          result =  {
              result : responseData,
              token : token
            };
        })
        .catch(error => {
          Logger.error(error);
          result = {message : "Error"};
        })
        
        return result;
        
    }

    async delete(userDTO){
        var data = {login: userDTO.login, password: userDTO.password};

        var result; 
      
        await HttpRequest.sendHttpRequest("POST", "http://localhost:3000/auth/delete", data).then(responseData =>{


          
          result =  {
              result : responseData,
            };
            
        })
        .catch(error => {
          console.log(error);
          result = {message : "Error"};
        })
        
        return result;
        
    }


    
}

module.exports = new AuthService();