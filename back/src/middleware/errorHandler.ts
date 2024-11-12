import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  console.log(error);
  return res.status(500).json({
    message: "Internal Server Error",
    error: error.message,
  });
};
