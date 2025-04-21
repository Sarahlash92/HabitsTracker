import { Application } from "express";
import { HabitsRouter } from "../routes/habits.router";
import { container } from "../inversify/container";

export function addRoutes(app: Application) {
  const habitRouter = container.get<HabitsRouter>(HabitsRouter);

  app.use("/habits", habitRouter.router);

  return app;
}
