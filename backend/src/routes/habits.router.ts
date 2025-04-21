import { Router, Request, Response } from "express";
import { HabitsController } from "../controllers/habits.controller";
import { inject, injectable } from "inversify";

@injectable()
export class HabitsRouter {
  public router: Router;

  constructor(
    @inject(HabitsController) private habitsController: HabitsController
  ) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", async (req: Request, res: Response) => {
      try {
        const habits = await this.habitsController.getAll();
        res.json(habits);
      } catch (error) {
        res.status(500).json({ error: "Error in getting habits" });
      }
    });

    this.router.post("/", async (req: Request, res: Response) => {
      try {
      } catch (error) {
        res.status(500).json({ error: "Error in creating habit" });
      }
    });

    this.router.patch("/", async (req: Request, res: Response) => {
      try {
      } catch (error) {
        res.status(500).json({ error: "Error in updating Habit" });
      }
    });

    this.router.delete("/", async (req: Request, res: Response) => {
      try {
      } catch (error) {
        res.status(500).json({ error: "Error in deleting habit" });
      }
    });
  }
}
