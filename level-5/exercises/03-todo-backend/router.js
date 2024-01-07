import express from "express";
import { v4 as uuidv4 } from "uuid";

// import dummy data
import todos from "./todos.js";

// define the router
export const router = express.Router();

// get all todos
router.get("/", (req, res) => {
  res.send({ data: todos });
});

// get one todo
router.get("/:id", (req, res) => {
  const todo = todos.find((todo) => todo._id === req.params.id);
  res.send({ data: todo });
});

// create a todo
router.post("/", (req, res) => {
  const newTodo = { ...req.body, _id: uuidv4() };
  todos.push(newTodo);
  res.send({ message: "successfully added todo", data: newTodo });
});

// edit a todo
router.put("/:id", (req, res) => {
  const todoIndex = todos.findIndex((todo) => todo._id === req.params.id);

  if (todoIndex !== -1) {
    const updatedTodo = Object.assign(todos[todoIndex], req.body);
    res.send({ message: "successfully updated todo", data: updatedTodo });
  } else {
    res.status(400).send({ message: "bad request" });
  }
});

// delete a todo
router.delete("/:id", (req, res) => {
  const todoIndex = todos.findIndex((todo) => todo._id === req.params.id);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.send({ message: "successfully deleted todo", data: todos[todoIndex] });
  } else {
    res.status(400).send({ message: "bad request" });
  }
});
