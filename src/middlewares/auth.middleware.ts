import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import CFG from "../config/config";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).send({ status: false, message: "invalid Token" });
    return;
  }
  jwt.verify(
    token as string,
    CFG.Server?.jwt_secret as string,
    (err, decoded) => {
      if (err) {
        res.status(401).send({ status: false, message: "invalid token" });
        return;
      }

      (req as any).decoded = decoded;
      next();
    }
  );
};

export default verifyToken;
