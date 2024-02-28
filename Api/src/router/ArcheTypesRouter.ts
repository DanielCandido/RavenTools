import express from "express";
import ArcheTypeController from "../controllers/ArcheTypeController";

const router = express.Router();
const productController = new ArcheTypeController();

router.get("/", productController.get);

export default router;
