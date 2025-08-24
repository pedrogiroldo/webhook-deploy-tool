import { Elysia } from "elysia";
import {
  DeploymentInputCreate,
  DeploymentInputUpdate,
} from "../../generated/prismabox/Deployment";
import {
  createDeployment,
  getDeployments,
  getDeployment,
  updateDeployment,
  deleteDeployment,
} from "./service";

const deploymentsController = new Elysia()
  // GET / - Listar todos os deployments
  .get("/", () => {
    return getDeployments();
  })

  // GET /:id - Buscar deployment por ID
  .get("/:id", ({ params: { id } }) => {
    return getDeployment(id);
  })

  // POST / - Criar novo deployment
  .post(
    "/",
    ({ body }) => {
      return createDeployment(body);
    },
    {
      body: DeploymentInputCreate,
    },
  )

  // PUT /:id - Atualizar deployment
  .put(
    "/:id",
    ({ params: { id }, body }) => {
      return updateDeployment(id, body);
    },
    {
      body: DeploymentInputUpdate,
    },
  )

  // DELETE /:id - Deletar deployment
  .delete("/:id", ({ params: { id } }) => {
    return deleteDeployment(id);
  });

export default deploymentsController;
