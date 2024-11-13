import { NextFunction, Request, Response } from "express";
import { checkTypeAndPalindromeString } from "../services/checkService";

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
    const { type, isPalindrome } = checkTypeAndPalindromeString(text);
    res.json({ text, type, typeCheck: "new", isPalindrome });
  } catch (error) {
    next(error);
  }
};
