const Mongoose = require("mongoose");

const RegisterSchema = Mongoose.Schema({
    carnet:String,
    schedule:String,
    islate:Boolean
});

module.exports = Mongoose.model("Register", RegisterSchema);