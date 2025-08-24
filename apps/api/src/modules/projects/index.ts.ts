import { Elysia } from "elysia";
import {
  ProjectInputCreate,
  ProjectInputUpdate,
} from "../../generated/prismabox/Project";
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  redeploy,
} from "./service";

const projectsController = new Elysia()
  // GET / - Listar todos os projects
  .get("/", () => {
    return getProjects();
  })

  // GET /:id - Buscar project por ID
  .get("/:id", ({ params: { id } }) => {
    return getProject(id);
  })

  // POST / - Criar novo project
  .post(
    "/",
    ({ body }) => {
      return createProject(body);
    },
    {
      body: ProjectInputCreate,
    }
  )

  // PUT /:id - Atualizar project
  .put(
    "/:id",
    ({ params: { id }, body }) => {
      return updateProject(id, body);
    },
    {
      body: ProjectInputUpdate,
    }
  )

  // DELETE /:id - Deletar project
  .delete("/:id", ({ params: { id } }) => {
    return deleteProject(id);
  })

  .get("/:id/redeploy", ({ params: { id } }) => {
    return redeploy(id);
  });

export default projectsController;
