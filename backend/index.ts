import "reflect-metadata";
import express, { Express } from "express";
import { addRoutes } from "./src/config/routes.config";
import * as dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port = 8080;

app.use(express.json());
addRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
