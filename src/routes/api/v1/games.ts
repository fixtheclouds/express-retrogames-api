import express from "express";
const router = express.Router();
import GamesController from "../../../controllers/GamesController";
const gamesController = new GamesController();

// GET /games
router.get("/", gamesController.index);

// GET /games/:id
router.get("/:id", gamesController.show);

export default router;
