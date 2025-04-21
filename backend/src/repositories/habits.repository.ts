import { Habit } from '../models/habit.model';

export interface HabitsRepository {
  getAll(): Promise<Habit[]>;
  create(name: string, description: string ): Promise<Habit>;
  delete(id: string): Promise<void>;
  toggleCompleteForToday(id: string): Promise<Habit | null>;
}
