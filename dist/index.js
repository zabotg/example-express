"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
console.log(`Starting server with STAGE "${process.env.NODE_ENV}"`);
(() => server_1.createExpressServer())();
//# sourceMappingURL=index.js.map