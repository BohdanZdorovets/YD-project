const {Schema, model } = require('mongoose');

const UserSchema = new Schema({
    login : {type: String,require : true,unique : true},
    password : {type: String, require : true},
    access : {type : Number, require : true},
    id : {type : Number,require : true,unique : true}
})

module.exports = model('User',UserSchema)