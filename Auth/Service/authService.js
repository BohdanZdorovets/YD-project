const UserDTO = require("../../DTOs/UserDTO");
const tokenService = require('../Service/tokenService');

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
        var data = {"login": userDTO.login, "password": userDTO.password};
        var result = null; 
      
        sendHttpRequest("POST", "http://localhost:3000/auth/find", data).then(responseData =>{
          result = {responseData};

          const token = tokenService.generateToken({login: userDTO.login});
          
          return {
              result : result,
              token : token
            };
        })
        .catch(error => {
          Logger.error(error);
          return;
        })
    }
    

    async registration(userDTO){

        
    }

    async delete(userDTO){

        
    }


    
}

module.exports = new AuthService();