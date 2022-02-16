class UserDTO{
    login;
    password;
    access;

    constructor(login , password, access){
        this.login = login
        this.password = password
        this.access = access
    }

    static copy(obj){
        return new UserDTO(obj.login,obj.password,obj.nickname,obj.access);
    }

}

module.exports = UserDTO