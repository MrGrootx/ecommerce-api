import { NextFunction, Request, Response } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const userRole = (req as any).decoded.role;
  if (userRole !== "admin") {
    res.status(403).send({ message: "Access denied" });
    return;
  }
  next();
};
