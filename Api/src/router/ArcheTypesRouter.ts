import express from "express";
import ArcheTypeController from "@src/controllers/ArcheTypeController";

const router = express.Router();
const archetypeController = new ArcheTypeController();

router.get("/", archetypeController.get);
router.get("/outfits", archetypeController.outfits);
router.post("/outfits", archetypeController.createOutifit);

export default router;
