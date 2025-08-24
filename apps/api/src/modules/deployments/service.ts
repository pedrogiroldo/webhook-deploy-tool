import { PrismaClient } from "../../generated/prisma";
import {
  DeploymentInputCreate,
  DeploymentInputUpdate,
} from "../../generated/prismabox/Deployment";

const prisma = new PrismaClient();

export function getDeployments() {
  return prisma.deployment.findMany({
    include: {
      project: true,
    },
  });
}

export function getDeployment(id: string) {
  return prisma.deployment.findUnique({
    where: { id },
    include: {
      project: true,
    },
  });
}

export function createDeployment(data: typeof DeploymentInputCreate.static) {
  return prisma.deployment.create({
    data,
    include: {
      project: true,
    },
  });
}

export function updateDeployment(
  id: string,
  data: typeof DeploymentInputUpdate.static,
) {
  return prisma.deployment.update({
    where: { id },
    data,
    include: {
      project: true,
    },
  });
}

export function deleteDeployment(id: string) {
  return prisma.deployment.delete({
    where: { id },
    include: {
      project: true,
    },
  });
}
