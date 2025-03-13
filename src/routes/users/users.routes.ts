import express from "express";
import { UsersRoutes } from "../../controllers/user.controllers";
const router = express.Router();

router.post("/register", UsersRoutes.RegisterUser);
router.post("/login", UsersRoutes.LoginUser);

export default router;
