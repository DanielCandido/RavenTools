import express from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();
const productController = new ProductController();

router.get("/", productController.get);

export default router;
