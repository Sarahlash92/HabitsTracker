import { inject, injectable } from "inversify";
import { HabitsService } from "../services/habits.service";

@injectable()
export class HabitsController {
  constructor(@inject(HabitsService) private habitsService: HabitsService) {}

  public async getAll() {
    return await this.habitsService.getAllHabits();
  }
  public async create(name: string, description: string, color: string) {
    return await this.habitsService.createHabit(name, description, color);
  }

  public async toggleCompleteForToday(id: string) {
    return await this.habitsService.toggleHabit(id);
  }

  public async delete(id: string) {
    return await this.habitsService.deleteHabit(id);
  }
}
