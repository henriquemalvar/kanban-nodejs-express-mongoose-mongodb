import express from "express";
import multer from "multer";
// Controllers
import createUser from "./controllers/createUser.js";
import getUsers from "./controllers/getUsers.js";
import getUserById from "./controllers/getUserById.js";
import updateUser from "./controllers/updateUser.js";
import deleteUser from "./controllers/deleteUser.js";
import session from "./controllers/session.js";

// Validators
import createUserValidate from "./_validators/createUserValidate.js";
import getUserByIdValidate from "./_validators/getUserByIdValidate.js";
import updateUserValidate from "./_validators/updateUserValidate.js";
import deleteUserValidate from "./_validators/deleteUserValidate.js";
import sessionValidate from "./_validators/sessionValidate.js";

const userRoutes = express.Router();
const upload = multer();

// Rota para obter todos os usuários
userRoutes.get("/", getUsers);

// Rota para criar um novo usuário
userRoutes.post("/", upload.single("photo"), createUserValidate, createUser);

// Rota para obter um usuário específico
userRoutes.get("/:id", getUserByIdValidate, getUserById);

// Rota para atualizar um usuário
userRoutes.put("/:id", upload.single("photo"), updateUserValidate, updateUser);

// Rota para excluir um usuário
userRoutes.delete("/:id", deleteUserValidate, deleteUser);

// Rota para logar
userRoutes.post("/session", sessionValidate, session);

export default userRoutes;
