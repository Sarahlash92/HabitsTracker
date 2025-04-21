import { Container } from 'inversify';
import { HabitsController } from '../controllers/habits.controller';
import { HabitsRouter } from '../routes/habits.router';
import { HabitsService } from '../services/habits.service';
import { FileHabitRepository } from '../repositories/habits.fileRepository';
import { HabitsRepository } from '../repositories/habits.repository';
import { InMemoryHabitRepository } from '../repositories/habits.inMemoryRepository';
import * as dotenv from "dotenv";
dotenv.config();

export const container: Container = new Container();

const useFileRepo = process.env.STORAGE === 'file';

container
  .bind<HabitsRepository>('HabitsRepository')
  .to(useFileRepo ? FileHabitRepository : InMemoryHabitRepository)
  .inSingletonScope();


container.bind(HabitsController).toSelf().inTransientScope();
container.bind(HabitsRouter).toSelf().inTransientScope();
container.bind(HabitsService).toSelf().inTransientScope();
