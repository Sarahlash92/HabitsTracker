import { inject, injectable } from "inversify";
import { HabitsRepository } from "../repositories/habits.repository";
import { Habit } from "../models/habit.model";

@injectable()
export class HabitsService {
    constructor(@inject(HabitsRepository) private habitRepository: HabitsRepository) {}

    async getAllHabits(): Promise<Habit[]> {
        return this.habitRepository.getAll();
    }
} 