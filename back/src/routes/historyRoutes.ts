import { Router } from "express";
import { getAll } from "../controllers/historyController";

const router = Router();

router.get("/history", getAll);

export default router;
