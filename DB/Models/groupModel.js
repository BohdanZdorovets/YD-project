const {Schema, model} = require('mongoose');

const GroupSchema = new Schema({
    name: {type: String, require: true, unique: true},
    description: {type: String},
    teachers: {type: Array},
    students: {type: Array},
    tasks: {type: Array},
    id: {type: Number, require:true, unique: true}
})

module.exports = model('Group', GroupSchema)