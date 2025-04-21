import "reflect-metadata";
import express, { Express } from 'express';
import { addRoutes } from "./src/config/routes.config";

const app: Express = express();
const port = 8080;

addRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
