const mongoose     = require('mongoose');
 const todoSchema  = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    //relation to other model
    //relation field
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        //in ref we always give the name of the model which we have given to that model while created
        ref:"User"
    },
    //array of subtodos
    subTodos:[
        //inside this we will have reference of other model as well
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"
        }
    ]
 }, {timestamps:true})
 export const Todo = mongoose.model('Todo',todoSchema);