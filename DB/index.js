require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Logger = require("../Logger")
const authRouter = require("./Routers/DBRouter")
const taskRouter = require("./Routers/taskRouter")
const errorMiddleware = require("./Middlewares/errorMiddleware")

const PORT = process.env.DB_PORT
const URL = process.env.DB_URL1

const app = express();
app.use(express.json());
app.use("/auth",authRouter);
app.use("/task", taskRouter);
app.use(errorMiddleware);

const start = async () =>{
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, ()=> {
            Logger.serverStart(PORT);
        });

    } catch(error) {
        Logger.error(error);
    }
}
start();
