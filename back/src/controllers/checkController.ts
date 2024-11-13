import { NextFunction, Request, Response } from "express";
import { checkPalindromeString } from "../services/checkService";

export const checkPalindrome = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ message: "Parameter 'text' is required" });
    }

    await checkPalindromeString(text, res);
  } catch (error) {
    next(error);
  }
};
