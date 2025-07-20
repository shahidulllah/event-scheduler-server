import { Router } from "express";
import { EventController } from "../controllers/event.controller";

const router = Router();

router.get("/", EventController.getAll);
router.post("/", EventController.create);
router.put("/:id", EventController.archive);
router.delete("/:id", EventController.delete);

export default router;
