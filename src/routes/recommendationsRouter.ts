import { Router } from "express";
import { recommendationController } from "../controllers/recommendationsController";

const recommendationRouter = Router();

recommendationRouter.post("/recommendations", recommendationController.insert);
recommendationRouter.get("/recommendations", recommendationController.get);
recommendationRouter.get("/random", recommendationController.random);
recommendationRouter.get("/top/:amount", recommendationController.getTop);
recommendationRouter.get("/:id", recommendationController.getById);
recommendationRouter.post("/:id/upvote", recommendationController.upvote);
recommendationRouter.post("/:id/downvote", recommendationController.downvote);

export default recommendationRouter;
