import { inject, injectable } from "inversify";
import { HabitsService } from "../services/habits.service";

@injectable()
export class HabitsController {
constructor(@inject(HabitsService) private habitsService: HabitsService) {}

  public async getAll() {
    return await this.habitsService.getAllHabits();
  }
  public async create() {}

  public async delete(id: string) {}

  public async toggleCompleteForToday(id: string) {}
}
