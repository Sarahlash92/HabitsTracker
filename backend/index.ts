import "reflect-metadata";
import express, { Request, Response, Express, response } from "express";
import path from "path";
import fs from 'fs/promises';

const app: Express = express();
const port = 8080;
const FILE_PATH = path.resolve(__dirname, './data/habits.json');

app.get("/", async (req: Request, res: Response) => {
  try {
    const habits = await readData();
    res.json(habits)

  } catch(error) {
    res.status(500).json({ error: "Failed to read habits" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});

const readData = async (): Promise<any[]> =>  {
try {
    console.log('FILE_PATH', FILE_PATH);
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}