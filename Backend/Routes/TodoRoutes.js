const express = require("express")
const { getTodos, createTodo, getSingleTodo, updateTodo, deleteTodo } = require("../Controlers/TodoControlers")
const router = express.Router()

router.get("/", getTodos)

router.post("/",createTodo)

router.get("/:id",getSingleTodo)

router.put("/:id",updateTodo)

router.delete("/:id", deleteTodo)

module.exports=router