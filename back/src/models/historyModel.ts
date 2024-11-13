import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  text: { type: String, required: true, unique: true },
  type: {
    type: String,
    required: true,
    enum: ["word", "phrase"],
  },
  isPalindrome: { type: Boolean, required: true },
});

export const History = mongoose.model("History", historySchema);
