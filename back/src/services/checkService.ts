import { History } from "../models/historyModel";
import { Response } from "express";
import { createRecord } from "./historyService";

export const checkPalindromeString = async (text: string, res: Response) => {
  const existingRecord = await History.findOne({ text });

  if (existingRecord)
    return res.json({
      text: existingRecord.text,
      type: existingRecord.type,
      typeCheck: "history",
      isPalindrome: existingRecord.isPalindrome,
    });

  const cleanedString = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();

  const isPalindrome =
    cleanedString === cleanedString.split("").reverse().join("");

  try {
    const record = await createRecord(
      text,
      text.includes(" ") ? "phrase" : "word",
      isPalindrome
    );
    return res.json({
      text: record.text,
      type: record.type,
      typeCheck: "new",
      isPalindrome: record.isPalindrome,
    });
  } catch (error) {
    throw new Error("Error check palindrome: " + error);
  }
};
