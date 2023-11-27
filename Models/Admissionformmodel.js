const mongoose=require('mongoose')
//data for admin collection
const studentSchema=new mongoose.Schema({
    pupil:{
        type:String,
        // unique:true,
        trim:true ,//to remove white space
        required:true
    },
    grdin:{
        type:String,
        required:true,
        trim:true
       
    },
    gender:{
        type:String,
        required:true,
        trim:true
       
    },
    occupation:{
        type:String,
        required:true,
        trim:true
       
    },
    phone:{
          unique:true,
        type:String,
        required:true,
        trim:true
       
    },
    address:{
        type:String,
        required:true,
        trim:true
       
    },
    prevschool:{
        type:String,
        trim:true,
        required:true,
       
    },
    std:{
        type:String,
        trim:true,
        required:true,
       
    },  tcdate:{
        type:String,
        required:true,
        trim:true
       
    },  dob:{
        type:String,
        required:true,
        trim:true
       
    },  place:{
        type:String,
        required:true,
        trim:true
       
    },
  nationality:{
        type:String,
        required:true,
        trim:true
       
    },
})
const students=new mongoose.model('students',studentSchema)

module.exports=students