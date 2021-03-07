"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
exports.createExpressServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use("/api", routes_1.default);
    try {
        yield app.listen(config_1.default.api.port, () => {
            console.info(`Example app listening at http://localhost:${config_1.default.api.port}`);
        });
    }
    catch (error) {
        console.info("Error initializing server", { error });
        process.exit(1);
    }
    return app;
});
//# sourceMappingURL=server.js.map