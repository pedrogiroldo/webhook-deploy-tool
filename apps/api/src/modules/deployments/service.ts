import { PrismaClient } from "../../generated/prisma";
import { DeploymentPlainInputCreate } from "../../generated/prismabox/Deployment";

const prisma = new PrismaClient();

export function getDeployments() {
  return prisma.deployment.findMany();
}

export function getDeployment(id: string) {
  return prisma.deployment.findUnique({ where: { id } });
}

export function createDeployment(data: typeof DeploymentInputCreate) {
  return prisma.deployment.create({ data });
}
