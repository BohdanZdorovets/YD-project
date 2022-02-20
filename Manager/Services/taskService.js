const Logger = require("../../Logger");
require("dotenv").config();

const DB_PORT = process.env.DB_PORT;
const HOST = process.env.HOST;

var XMLHttpRequest = require("xhr2");

const sendHttpRequest = (method,url,data) =>{
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
       
        //Preparing the http request
        xhr.open(method,url);
        xhr.responseType = 'json'
        
        //If we need to post data in json format
        if(data){
            xhr.setRequestHeader('Content-Type','application/json')
        }

        xhr.onload = () =>{
            if(xhr.status >= 400){
                //Complete with an error
                reject(xhr.response);
            }else{                    
                resolve(xhr.response);
            }              
        }

        xhr.onerror = () =>{
            reject('Something went wrong!')
        }

        //Sending data in json format
        xhr.send(JSON.stringify(data))
    });
    return promise;
}

class TaskService{

    async addTask(TaskDTO , func){
      var data = {"task_id" : TaskDTO.task_id, "due_to" : TaskDTO.due_to, "description" : TaskDTO.description, "files" : TaskDTO.files, "student_files" : TaskDTO.student_files}; 
      
      var result;

      await sendHttpRequest('POST', `http://${HOST}${DB_PORT}/task/addTask`, data) 
      .then(responseData =>{

        if(responseData.message)
           throw new Error("ADDING TASK ERROR");


        result =  {
            result : responseData
        };      
      })
      .catch(err => {
        console.log(err);
      })
    }

    async deleteTask(task_id, func){
        var data = {"id" : task_id}; 
  
        sendHttpRequest('POST', `http://${HOST}${DB_PORT}/task/deleteTask`, data) 
        .then(responseData =>{
            func(responseData) 
        })
        .catch(err => {
          console.log(err);
        })
      }
    
}

module.exports = new TaskService();