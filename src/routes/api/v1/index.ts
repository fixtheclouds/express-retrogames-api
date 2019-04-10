import express from "express";
import games from "./games";
import platforms from "./platforms";

const router = express.Router();

router.use("/games", games);
router.use("/platforms", platforms);

export default router;
