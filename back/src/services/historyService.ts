import { History } from "../models/historyModel";

export const createRecord = async (
  text: string,
  type: "word" | "phrase",
  isPalindrome: boolean
) => {
  const record = new History({
    text,
    type: type,
    isPalindrome,
  });

  try {
    await record.save();
    return record;
  } catch (error) {
    throw new Error("Error creating record: " + error);
  }
};

export const getAllRecords = async () => {
  try {
    return await History.find();
  } catch (error) {
    throw new Error("Error getAll records: " + error);
  }
};
