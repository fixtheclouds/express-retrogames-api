import express from "express";
const router = express.Router();
import PlatformsController from "../../../controllers/PlatformsController";
const platformsController = new PlatformsController();

// GET /games
router.get("/", platformsController.index);

// GET /games/:id
router.get("/:id", platformsController.show);

// POST /games
router.post("/", platformsController.create);

// PUT /games/:id
router.put("/:id", platformsController.update);

// DELETE /games/:id
router.delete("/:id", platformsController.destroy);

export default router;
