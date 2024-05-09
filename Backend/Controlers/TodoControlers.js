const mongoose = require("mongoose")
const Todo = require("../Models/Todo_Model")


const getTodos = async (req,res)=>{
    const AllTodos = await Todo.find()
    res.json(AllTodos)
}

const createTodo = async (req,res)=>{
    const {title , description, isCompleted}= req.body

    if(!title || !description){
        res.status(400)
        throw new Error("Please Fill All Details".red)
    }

    const newTodo = await Todo.create({
        title,
        description,
    })
    if(newTodo){
        res.status(200).json(newTodo)
    }
    else{
        throw new Error("Something went wrong!".red)
    }
}

const getSingleTodo = async (req,res)=>{
    const todo = await Todo.findById(req.params.id)
    if(!todo){
        res.status(404)
        throw new Error("Todo not found")
    }
    res.status(200).json(todo)
}

const deleteTodo = async (req,res)=>{
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({
        msg:"Todo deleted !!"
    })
}

const updateTodo = async (req,res)=>{
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!updateTodo){
        res.status(400)
        throw new Error("Cannot update todo ")
    }
    res.status(200).json(updatedTodo)
}

module.exports = {getTodos, createTodo, getSingleTodo,deleteTodo,updateTodo}