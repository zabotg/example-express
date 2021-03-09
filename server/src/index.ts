import express from "express";
import routes from "./routes";

const app = express();

app.use("/", express.static("public"));
app.use("/api", routes);

app.listen(3000, () => {
    console.info(`Starting server with STAGE "${process.env.NODE_ENV}"`);
});
