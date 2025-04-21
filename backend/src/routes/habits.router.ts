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
        console.log("creating triggered");
        const { name, description } = req.body;
        console.log("name", name,  "description",description );
        const newHabit = await this.habitsController.create(name, description);
        res.status(201).json(newHabit);
      } catch (error) {
        res.status(500).json({ error: "Error in creating habit" });
      }
    });

    this.router.patch("/:id/toggle", async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const updatedHabit = await this.habitsController.toggleCompleteForToday(
          id
        );
        if (updatedHabit) res.json(updatedHabit);
        else res.status(404).json({ error: "Habit not found" });
      } catch (error) {
        res.status(500).json({ error: "Error in updating Habit" });
      }
    });

    this.router.delete("/:id", async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        await this.habitsController.delete(id);
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: "Error in deleting habit" });
      }
    });
  }
}
