const Logger = require("../../Logger");
const PORT = process.env.PORT;
const HOST = process.env.HOST;


class TaskService{



    sendHttpRequest = (method,url,data) =>{
        const promise = new Promise((resolve,reject) =>{
            const xhr = new XMLHttpRequest();

            xhr.open(method,url);
            xhr.responseType = 'json'
    
            if(data){
                xhr.setRequestHeader('Content-Type','application/json')
            }
    
            xhr.onload = () =>{
                if(xhr.status >= 400){
                    reject(xhr.response);
                }else{
                    resolve(xhr.response);
                }

               
            }
    
            xhr.onerror = () =>{
                reject('Something went wrong!')
            }
    
            xhr.send(JSON.stringify(data))
        });
        return promise;
    }

    async addTask(TaskDTO, func){
      var data = {"id" : TaskDTO.id , "due_to" : TaskDTO.due_to, "description" : TaskDTO.description, "student_ids" : TaskDTO.student_ids}; 

      sendHttpRequest('POST', `http://${HOST}:${PORT}/auth/addTask`, data) 
      .then(responseData =>{
          func(responseData) 
      })
      .catch(err => {
        console.log(err);
      })
    }

    async deleteTask(task_id, func){
        var data = {"id" : task_id}; 
  
        sendHttpRequest('POST', `http://${HOST}:${PORT}/auth/deleteTask`, data) 
        .then(responseData =>{
            func(responseData) 
        })
        .catch(err => {
          console.log(err);
        })
      }
    
}

module.exports = new TaskService();