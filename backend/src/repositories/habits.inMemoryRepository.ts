import { injectable } from "inversify";
import { HabitsRepository } from "./habits.repository";
import { Habit } from "../models/habit.model";
import { v4 as uuidv4 } from 'uuid';

@injectable()
export class InMemoryHabitRepository implements HabitsRepository {
  private habits: Habit[] = [];

  async getAll(): Promise<Habit[]> {
    return this.habits;
  }

  async create(name: string, description: string, color: string): Promise<Habit> {
    const newHabit: Habit = {
      id: uuidv4(),
      name,
      description,
      color,
      completedDates: [],
    };
    this.habits.push(newHabit);
    return newHabit;
  }

  async toggleCompleteForToday(id: string): Promise<Habit | null> {
    const habit = this.habits.find((habit) => habit.id === id);
    if (!habit) return null;

    const today = new Date().toISOString().split("T")[0];
    const index = habit.completedDates.indexOf(today);
    if (index >= 0) {
      habit.completedDates.splice(index, 1);
    } else {
      habit.completedDates.push(today);
    }
    return habit;
  }

  async delete(id: string): Promise<void> {
    this.habits = this.habits.filter((habit) => habit.id !== id);
  }
}
