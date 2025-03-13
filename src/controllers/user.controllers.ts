import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import CFG from "../config/config";
import { userServices } from "../services/user.services";
import UserLoginValidation from "../users/validation/user.validation";

const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const zodValidation = UserLoginValidation.safeParse(req.body);
    if (
      typeof zodValidation.error !== "undefined" &&
      zodValidation.error.name === "ZodError"
    ) {
      const errorList = zodValidation.error?.issues.map((err) => err.message);
      res.status(400).send({
        sucess: false,
        message: "Validation Error",
        error: errorList,
      });
      return;
    }
    const user = await userServices.findUserByEmail(email);
    if (user) {
      res.status(400).send({
        sucess: false,
        message: "User already exists",
      });
      return;
    } else {
      const userRole = role ? role : "user";
      const newUser = userServices.createUser(email, password, userRole);

      res.status(200).send({
        sucess: true,
        message: "User created successfully",
        data: newUser,
      });
      return;
    }
  } catch (error: any) {
    res.status(500).send({
      sucess: false,
      message: error.message || "Error in Register User",
      error: error,
    });
  }
};

const LoginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const zodValidation = UserLoginValidation.safeParse(req.body);
    if (
      typeof zodValidation.error !== "undefined" &&
      zodValidation.error.name === "ZodError"
    ) {
      const errorList = zodValidation.error?.issues.map((err) => err.message);
      res.status(400).send({
        sucess: false,
        message: "Validation Error",
        error: errorList,
      });
      return;
    }
    const user = await userServices.findUserByEmail(email);
    if (!user) {
      res.status(400).send({
        sucess: false,
        message: "User not found",
      });
      return;
    }
    const isValidPassword = await userServices.ValidatePassword(
      password,
      user!.password
    );
    if (!isValidPassword) {
      res.status(400).send({
        sucess: false,
        message: "Invalid credentials",
      });
      return;
    }
    const token = jwt.sign(
      {
        email: user!.email,
        role: user!.role,
      },
      CFG.Server?.jwt_secret as string,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).send({
      sucess: true,
      message: "User logged in successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      sucess: false,
      message: "Error in Login User",
      error: error,
    });
  }
};

export const UsersRoutes = {
  RegisterUser,
  LoginUser,
};
