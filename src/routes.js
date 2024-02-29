import { Router } from "express";
import userRoutes from "./api/user/routes/userRoutes.js";
import categoryRoutes from "./api/category/routes/categoryRoutes.js";
import taskRoutes from "./api/task/routes/taskRoutes.js";
const routes = Router();
routes.use("/user", userRoutes);
routes.use("/category", categoryRoutes);
routes.use("/task", taskRoutes);

export { routes };
