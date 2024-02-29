import express from "express";

// Controllers
import createCategory from "./controllers/createCategory.js";
import getCategories from "./controllers/getCategories.js";
import getCategoryById from "./controllers/getCategoryById.js";
import updateCategory from "./controllers/updateCategory.js";
import deleteCategory from "./controllers/deleteCategory.js";

// Validators
import createCategoryValidate from "./_validators/createCategoryValidate.js";
import getCategoryByIdValidate from "./_validators/getCategoryByIdValidate.js";
import updateCategoryValidate from "./_validators/updateCategoryValidate.js";
import deleteCategoryValidate from "./_validators/deleteCategoryValidate.js";

const categoryRoutes = express.Router();

// Rota para obter todas as categorias
categoryRoutes.get("/:user_id", getCategories);

// Rota para criar uma nova categoria
categoryRoutes.post("/:user_id", createCategoryValidate, createCategory);

// Rota para obter uma categoria específica
categoryRoutes.get("/:id", getCategoryByIdValidate, getCategoryById);

// Rota para atualizar uma categoria
categoryRoutes.put("/:id", updateCategoryValidate, updateCategory);

// Rota para excluir uma categoria
categoryRoutes.delete("/:id", deleteCategoryValidate, deleteCategory);

export default categoryRoutes;