import express from "express";
import config from "./config";
import routes from "./routes";

export const createExpressServer = async () => {
    const app = express();

    app.use("/api", routes); // service router

    try {
        await app.listen(config.api.port, () => {
            console.info(
                `Example app listening at http://localhost:${config.api.port}`
            );
        });
    } catch (error) {
        console.info("Error initializing server", { error });
        process.exit(1);
    }
    return app;
};
