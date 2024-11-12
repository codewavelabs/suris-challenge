import { NextFunction, Request, Response } from "express";
import { isPalindrome } from "../services/checkService";

export const checkPalindrome = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(400).json({ message: "Parameter 'text' is required" });
    }
    const result = isPalindrome(text);
    res.json({ text, isPalindrome: result });
  } catch (error) {
    next(error);
  }
};
