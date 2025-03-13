import express from "express";
import {
  CreateProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  DeleteProduct,
} from "../../controllers/products.controllers";
import verifyToken from "../../middlewares/auth.middleware";
import { isAdmin } from "../../middlewares/admin.middleware";
const router = express.Router();

router.post("/", verifyToken, isAdmin, CreateProduct); // Create new product
router.get("/", getAllProducts); // get all products
router.get("/:productId", getSingleProduct); // get single products
router.put("/:productId", verifyToken, updateProduct);
router.delete("/:productId", verifyToken, isAdmin, DeleteProduct);

export const ProductRoutes = router;
