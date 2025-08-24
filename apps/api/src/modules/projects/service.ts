import { PrismaClient } from "../../generated/prisma";
import {
  ProjectInputCreate,
  ProjectInputUpdate,
} from "../../generated/prismabox/Project";

const prisma = new PrismaClient();

export function getProjects() {
  return prisma.project.findMany({
    include: {
      Deployment: true,
    },
  });
}

export function getProject(id: string) {
  return prisma.project.findUnique({
    where: { id },
    include: {
      Deployment: true,
    },
  });
}

export function createProject(data: typeof ProjectInputCreate.static) {
  return prisma.project.create({
    data,
    include: {
      Deployment: true,
    },
  });
}

export function updateProject(
  id: string,
  data: typeof ProjectInputUpdate.static,
) {
  return prisma.project.update({
    where: { id },
    data,
    include: {
      Deployment: true,
    },
  });
}

export function deleteProject(id: string) {
  return prisma.project.delete({
    where: { id },
    include: {
      Deployment: true,
    },
  });
}

export async function redeploy(id: string) {
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      Deployment: true,
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  await Promise.all(
    project.Deployment.map(async (deployment) => {
      try {
        await fetch(deployment.webhookUrl);
      } catch (error) {
        console.error(
          `Failed to call webhook: ${deployment.webhookUrl}`,
          error,
        );
      }
    }),
  );
}
