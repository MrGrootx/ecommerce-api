import express from "express";
import { CreateOrder, GetAllOrders } from "../../controllers/order.controllers";
const router = express.Router();

router.post("/create-order", CreateOrder);
router.get("/", GetAllOrders);

export const OrderRoutes = router;
