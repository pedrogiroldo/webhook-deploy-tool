import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import deploymentsController from "./modules/deployments/index.ts";
import projectsController from "./modules/projects/index.ts";
import authMiddleware from "./middlewares/auth";

const appModule = new Elysia()
  .use(cors())
  .use(authMiddleware)
  .mount("/deployments", deploymentsController)
  .mount("/projects", projectsController);

export default appModule;
