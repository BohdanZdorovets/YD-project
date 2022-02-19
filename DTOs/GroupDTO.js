class GroupDTO {
    name;
    description;
    teachers;
    students;
    tasks;
    id;

    constructor (name = "Group", description = "", teachers = [], students = [], tasks = [], id = -1) {
        this.name = name;
        this.description = description;
        this.teachers = teachers;
        this.students = students;
        this.tasks = tasks;
        this.id = id;
    }

    static copy(groupDTO) {
        return new GroupDTO(groupDTO.name, groupDTO.description, groupDTO.teachers, groupDTO.students, groupDTO.tasks, groupDTO.id);
    }
}

module.exports = GroupDTO;