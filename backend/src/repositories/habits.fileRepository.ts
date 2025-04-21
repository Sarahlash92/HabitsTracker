import { injectable } from "inversify";
import { Habit } from "../models/habit.model";
import { HabitsRepository } from './habits.repository';
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from 'uuid';

const FILE_PATH = path.resolve(__dirname, "../data/habits.json");

@injectable()
export class FileHabitRepository implements HabitsRepository {
  private async readData(): Promise<Habit[]> {
    try {
      console.log("FILE_PATH", FILE_PATH);
      const data = await fs.readFile(FILE_PATH, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  private async writeData(habits: Habit[]): Promise<void> {
    await fs.writeFile(FILE_PATH, JSON.stringify(habits, null, 2));
  }

  async getAll(): Promise<Habit[]> {
    return await this.readData();
  }

  async create(name: string, description: string): Promise<Habit> {
    const habits = await this.readData();
    const newHabit: Habit = {
      id: uuidv4(),
      name,
      description,
      completedDates: [],
    };
    habits.push(newHabit);
    console.log('new habit',newHabit );
    await this.writeData(habits);
    return newHabit;
  }

  async toggleCompleteForToday(id: string): Promise<Habit | null> {
    const habits = await this.readData();
    const habitToUpdate = habits.find((habit) => habit.id === id);
    if (!habitToUpdate) throw new Error(`Habit with id ${id} not found`);

    const today = new Date().toISOString().split("T")[0];
    const index = habitToUpdate.completedDates.indexOf(today);

    if (index === -1) {
      habitToUpdate.completedDates.push(today);
    } else {
      habitToUpdate.completedDates.splice(index, 1);
    }
    await this.writeData(habits);
    return habitToUpdate;
  }

  async delete(id: string): Promise<void> {
    const habits = await this.readData();
    const index = habits.findIndex((habit) => habit.id === id);

    if (index === -1) throw new Error(`Habit with id ${id} not found`);

    const [deletedHabit] = habits.splice(index, 1);
    await this.writeData(habits);
  }
}