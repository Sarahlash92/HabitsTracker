import "reflect-metadata";
import express, { Express } from "express";
import { addRoutes } from "./src/config/routes.config";
import * as dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const corsOrigin = process.env.CORS_ORIGIN || '*' ;

app.use(cors({ origin: corsOrigin }));
app.use(express.json());
addRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
