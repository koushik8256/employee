const mongoose = require('mongoose')
const {Schema} = mongoose
const Employeeschema = new Schema({
    Name:{
        type:String
    },
    empid:{
        type:Number
    },
    Phoneno:{
        type:Number
    },
    Email:{
        type:String,
        required:true
    },
    Salary:{
        type:Number
    },
    Address:{
        type:String
    },
    Age:{
        type:Number
    },
    Gender:{
        type:String
    },
    designation:{
        type:String
    }
})

module.exports=mongoose.model("employee",Employeeschema)