import express from "express";
import TradepackController from "@src/controllers/TradepackController";

const router = express.Router();
const tradepackController = new TradepackController();

router.get("/", tradepackController.get);

export default router;
