import { Elysia } from "elysia";
import { DeploymentPlainInputCreate } from "../../generated/prismabox/Deployment";

const deploymentsController = new Elysia({ prefix: "deployments" })
  .get("/", () => {
    return "Hello World";
  })
  .post(
    "/",
    ({ body }) => {
      return "Hello World";
    },
    {
      body: DeploymentPlainInputCreate,
    }
  );

export default deploymentsController;
