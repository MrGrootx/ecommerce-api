import express from "express";
import { ProductRoutes } from "./products/products.routes";
import { OrderRoutes } from "./orders/order.routes";
import UsersRoutes from "./users/users.routes";
const router = express.Router();

router.use("/products", ProductRoutes);
router.use("/orders", OrderRoutes);
router.use("/users", UsersRoutes);

export default router;
