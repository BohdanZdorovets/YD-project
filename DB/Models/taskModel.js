const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    task_id : {type: Number, require: true, unique: true},
    due_to : {type: String, require: true},
    description : {type: String, require: true},
    files : {type: Buffer},
    student_files : [{student_id : String, student_files : Array}]
   
})

module.exports = model('Tasks', TaskSchema)