const UserDTO = require("../../DTOs/UserDTO");
const tokenService = require('../Service/tokenService');
const Logger = require('../../Logger')
var XMLHttpRequest = require("xhr2");

const sendHttpRequest = (method,url,data) =>{
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json'

        if(data){
            xhr.setRequestHeader('Content-Type','application/json')
        }

        xhr.onload = () =>{
            resolve(xhr.response)
        }

        xhr.onerror = () =>{
            reject('Something went wrong!')
        }

        xhr.send(JSON.stringify(data))
    });
    return promise;
}

class AuthService{
    async login(userDTO){
        var data = {login: userDTO.login, password: userDTO.password};


        var result; 
      
        await sendHttpRequest("POST", "http://localhost:3000/auth/find", data).then(responseData =>{

          if(responseData.message)
                throw new Error("THERE IS NO SUCH USER")

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
      
        await sendHttpRequest("POST", "http://localhost:3000/auth/add", data).then(responseData =>{

          if(responseData.message)
                throw new Error("THERE IS NO SUCH USER")

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
      
        await sendHttpRequest("POST", "http://localhost:3000/auth/delete", data).then(responseData =>{

          if(responseData.message)
                throw new Error("THERE IS NO SUCH USER")

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


    
}

module.exports = new AuthService();