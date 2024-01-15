const mongoose = require('mongoose');

const userSchema =  new mongoose.Shema({
 username:{
    type:String,
    required:true,
    unique:true 

 },
 email:{
    type:String,
    required:true,
    unique:true 
 },
 password:{
    type:String,
    required:true
 },
 

},{
    timestamps:true
 })
 //timestamps:- createAt and updatedAt fields created automatically

export const User = mongoose.model("User", userSchema);