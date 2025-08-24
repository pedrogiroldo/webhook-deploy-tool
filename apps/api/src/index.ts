import { Elysia } from "elysia";
import appModule from "./app.module";

const app = new Elysia().use(appModule).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
