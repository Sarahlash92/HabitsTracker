import { injectable } from "inversify";
import { Habit } from "../models/habit.model";
import path from "path";
import fs from "fs/promises";


const FILE_PATH = path.resolve(__dirname, '../data/habits.json');

@injectable()
export class HabitsRepository {

    private async readData(): Promise<Habit[]> {
        try {
          console.log('FILE_PATH', FILE_PATH);
          const data = await fs.readFile(FILE_PATH, 'utf-8');
          return JSON.parse(data);
        } catch {
          return [];
        }
      }
    
      async getAll(): Promise<Habit[]> {
        return await this.readData();
      }
}