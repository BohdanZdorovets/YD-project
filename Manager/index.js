require("dotenv").config();
const express = require("express");

const Logger = require("../Logger");
const taskRouter = require("./Routers/taskRouter");
const errorMiddleware = require("./Middlewares/errorMiddleware");

const PORT = process.env.MANAGER_PORT;

const app = express();
app.use(express.json());
app.use("/taskmanager", taskRouter);
app.use(errorMiddleware);

const start = async () =>{
    try{
        app.listen(PORT, ()=> {
            Logger.serverStart(PORT);
        });

    } catch(error) {
        Logger.error(error);
    }
}
start();