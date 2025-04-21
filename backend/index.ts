import "reflect-metadata";
import express, { Request, Response, Express, response } from "express";

const app: Express = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('We have something')
});

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
