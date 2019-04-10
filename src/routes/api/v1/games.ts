import express from "express";
const router = express.Router();
import GamesController from "../../../controllers/GamesController";
const gamesController = new GamesController();

// GET /games
router.get("/", gamesController.index);

// GET /games/:id
router.get("/:id", gamesController.show);

// POST /games
router.post("/", gamesController.create);

// PUT /games/:id
router.put("/", gamesController.update);

// DELETE /games/:id
router.delete("/:id", gamesController.destroy);

export default router;
