const {Schema, model} = require('mongoose');

// Task Schema
const TaskSchema = new Schema({
    task_id : {type: Number, require: true, unique: true},
    due_to : {type: Date, require: true},
    description : {type: String, default: ""},
    files : {type: Array},
    student_files : [{student_id : String, student_files : Array}]
});

// Export 'Task Model' to DataBase
module.exports = model('Tasks', TaskSchema);