import { Elysia } from "elysia";
import deploymentsController from "./modules/deployments/index.ts";

const appModule = new Elysia().use(deploymentsController);

export default appModule;
