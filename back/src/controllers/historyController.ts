import { NextFunction, Request, Response } from "express";
import { getAllRecords } from "../services/historyService";

export const getAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const records = await getAllRecords();
    res.json({ records });
  } catch (error) {
    next(error);
  }
};
