const mongoose=require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname :{
        type:String,
        required:true
    },
    username :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    },
    cpassword :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    phone :{
        type:Number,
        required:true,
        unique:true
    }
})

const Register= new mongoose.model("Register",employeeSchema);
module.exports= Register;