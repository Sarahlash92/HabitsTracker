import { Container } from 'inversify';
import { HabitsController } from '../controllers/habits.controller';
import { HabitsRouter } from '../routes/habits.router';
import { HabitsService } from '../services/habits.service';
import { HabitsRepository } from '../repositories/habits.fileRepository';

export const container: Container = new Container();

container.bind(HabitsController).toSelf().inTransientScope();
container.bind(HabitsRouter).toSelf().inTransientScope();
container.bind(HabitsService).toSelf().inTransientScope();
container.bind(HabitsRepository).toSelf().inTransientScope();
