const { Console } = require("console");
const Logger = require("../../Logger.js");

module.exports = (err,req,res,next) => {

    Logger.error(err);
    console.log(err);

    return res.status(500).json({message : "Error"})
}