import { inject, injectable } from "inversify";
import { HabitsRepository } from "../repositories/habits.repository";
import { Habit } from "../models/habit.model";

@injectable()
export class HabitsService {
  constructor(
    @inject("HabitsRepository") private habitRepository: HabitsRepository
  ) {}

  async getAllHabits(): Promise<Habit[]> {
    return this.habitRepository.getAll();
  }

  async createHabit(
    name: string,
    description: string,
    color: string
  ): Promise<Habit> {
    return this.habitRepository.create(name, description, color);
  }

  async toggleHabit(id: string): Promise<Habit | null> {
    return this.habitRepository.toggleCompleteForToday(id);
  }

  async deleteHabit(id: string): Promise<void> {
    return this.habitRepository.delete(id);
  }
}
