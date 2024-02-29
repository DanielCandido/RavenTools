import express from "express";
import ProductController from "@src/controllers/ProductController";

const router = express.Router();
const productController = new ProductController();

router.get("/", productController.get);
router.put("/", productController.update);

export default router;
