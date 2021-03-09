import express from "express";
import routes from "./routes";

export const createExpressServer = async () => {
    const app = express();

    app.use("/api", routes); // service router

    try {
        await app.listen(3000, () => {
            console.info(
                `Starting server with STAGE "${process.env.NODE_ENV}"`
            );
        });
    } catch (error) {
        console.info("Error initializing server", { error });
        process.exit(1);
    }
    return app;
};
