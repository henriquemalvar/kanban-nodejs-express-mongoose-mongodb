import express from "express";

// Controllers
import createTask from "./controllers/createTask.js";
import getTasks from "./controllers/getTasks.js";
import getTaskById from "./controllers/getTaskById.js";
import updateTask from "./controllers/updateTask.js";
import deleteTask from "./controllers/deleteTask.js";

// Validators
import createTaskValidate from "./_validators/createTaskValidate.js";
import getTaskByIdValidate from "./_validators/getTaskByIdValidate.js";
import updateTaskValidate from "./_validators/updateTaskValidate.js";
import deleteTaskValidate from "./_validators/deleteTaskValidate.js";

const taskRoutes = express.Router();

// Rota para obter todas as tarefas
taskRoutes.get("/:user_id", getTasks);

// Rota para criar uma nova tarefa
taskRoutes.post("/:user_id", createTaskValidate, createTask);

// Rota para obter uma tarefa específica
taskRoutes.get("/:id", getTaskByIdValidate, getTaskById);

// Rota para atualizar uma tarefa
taskRoutes.put("/:id", updateTaskValidate, updateTask);

// Rota para excluir uma tarefa
taskRoutes.delete("/:id", deleteTaskValidate, deleteTask);

export default taskRoutes;