import express from "express";
import TradepackRouter from "./TradepackRouter";
import ProductsRouter from "./ProductsRouter";
import ArcheTypesRouter from "./ArcheTypesRouter";

const router = express.Router();

router.use("/tradepacks", TradepackRouter);
router.use("/products", ProductsRouter);
router.use("/archetypes", ArcheTypesRouter);

export default router;
