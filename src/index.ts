import { createExpressServer } from "./server";

console.log(`Starting server with STAGE "${process.env.NODE_ENV}"`);

(() => createExpressServer())();
