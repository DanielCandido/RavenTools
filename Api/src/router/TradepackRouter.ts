import express from "express";
import TradepackController from "../controllers/TradepackController";

const router = express.Router();
const tradepackController = new TradepackController();

router.get("/", tradepackController.get);

export default router;
