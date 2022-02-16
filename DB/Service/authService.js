const Logger = require("../../Logger");
const userModel = require("../Models/userModel")

class AuthService{
    async findMaxId(){
        const candidates = await userModel.find({});
        let Id = 0;
        
        try{
            Id = candidates[0].id;
        }catch(e){
            Id = -1;
        }
       
    
        for(let i=1;i<candidates.length;i++){
            if(Id < candidates[i].id)
            Id = candidates[i].id;
        }

        return Id;
    } 

    async addUser(userDTO){
        const loginCandidate = await userModel.findOne({login : userDTO.login})
        let id = await this.findMaxId();

        if(loginCandidate){
            throw new Error('|DB ERORR| USER WITH SUCH LOGIN EXISTS');
        }

        const user = await userModel.create(
            {login: userDTO.login,password: userDTO.password, access : userDTO.access,id : id+1});

        return {
            user: {login: userDTO.login,password: userDTO.password,nickname: userDTO.nickname,access : userDTO.access}
        };
    }

   
    async deleteUser(userDTO){
        const candidate = await userModel.findOne(
            {login : userDTO.login,password : userDTO.password,access : userDTO.access});

        if(!candidate){
            throw new Error('|DB ERORR| THERE IS NO USER TO DELETE');
        }
        
        const user = await userModel.deleteOne(
            {login : userDTO.login,password : userDTO.password,access : userDTO.access});
        
        return {
            user: {login: userDTO.login,password: userDTO.password,nickname: userDTO.nickname,access : userDTO.access}
        };
    }

    async findUser(userDTO){
        const candidate = await userModel.findOne({login : userDTO.login});

        if(!candidate)
            throw new Error("|DB ERORR| THERE IS NO SUCH USER")

        
        return candidate.id;
    }
    
}

module.exports = new AuthService();